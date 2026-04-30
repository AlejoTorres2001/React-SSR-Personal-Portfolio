import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type EmailData = {
  email: string
  name: string
  message: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 30_000
const requestMap = new Map<string, number>()

export async function POST(request: Request) {
  try {
    const body: EmailData = await request.json()
    const forwardedFor = request.headers.get('x-forwarded-for')
    const requestKey = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
    const now = Date.now()

    for (const [key, timestamp] of requestMap.entries()) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        requestMap.delete(key)
      }
    }

    const lastRequestTimestamp = requestMap.get(requestKey)

    if (lastRequestTimestamp && now - lastRequestTimestamp < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { error: 'Please wait a few seconds before sending another message.' },
        { status: 429 }
      )
    }

    const email = body.email?.trim()
    const name = body.name?.trim()
    const message = body.message?.trim()

    if (!email || !message || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must contain between 2 and 100 characters.' },
        { status: 400 }
      )
    }

    if (message.length < 20 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must contain between 20 and 2000 characters.' },
        { status: 400 }
      )
    }

    if (!process.env.EMAIL || !process.env.PASSWORD) {
      console.error('Missing EMAIL or PASSWORD environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
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
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      replyTo: email,
      to: process.env.EMAIL,
      subject: `Message From ${name} - from Portfolio Website`,
      text: `USING EMAIL: ${email} \n${message}`
    }

    await transporter.verify()

    const info = await transporter.sendMail(mailData)
    console.log('Message sent: ', info.messageId)
    requestMap.set(requestKey, now)

    return NextResponse.json(
      { message: 'Thanks for your message!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
