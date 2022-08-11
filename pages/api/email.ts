// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method Not Allowed'
    })
  }
  if (!req.body.email || !req.body.message || !req.body.name) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  })
  const mailData = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Message From ${req.body.name} - from Portfolio Website`,
    text: `USING EMAIL: ${req.body.email} \n${req.body.message}`
  }
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
        console.log('Message sent')
      }
    })
  })
  res.status(200).json({ message: 'Thanks for your message!' })
}
