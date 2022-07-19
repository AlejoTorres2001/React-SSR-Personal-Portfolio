// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  if (!req.body.email || !req.body.message || !req.body.name) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  console.log(req.body.email, req.body.message, req.body.name)
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
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: err })}
  })
  console.log('Message sent')
  res.status(200).json({ message: 'Thanks for your message!' })
}
