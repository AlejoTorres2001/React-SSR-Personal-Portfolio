import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ResponseData = {
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Check for valid method
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method Not Allowed'
    })
  }

  if (!req.body.email || !req.body.message || !req.body.name) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error('Missing EMAIL or PASSWORD environment variables')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
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
      from: `"Portfolio Contact" <${process.env.EMAIL}>`, // Use your email as sender to avoid issues
      replyTo: req.body.email, // Add reply-to for contact's email
      to: process.env.EMAIL,
      subject: `Message From ${req.body.name} - from Portfolio Website`,
      text: `USING EMAIL: ${req.body.email} \n${req.body.message}`
    }

    // Verify connection
    await transporter.verify()
    
    // Send mail
    const info = await transporter.sendMail(mailData)
    console.log('Message sent: ', info.messageId)
    
    return res.status(200).json({ message: 'Thanks for your message!' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.' 
    })
  }
}