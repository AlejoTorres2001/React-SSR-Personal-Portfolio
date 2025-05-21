import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type EmailData = {
  email: string;
  name: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: EmailData = await request.json();
    
    if (!body.email || !body.message || !body.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (!process.env.EMAIL || !process.env.PASSWORD) {
      console.error('Missing EMAIL or PASSWORD environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      secure: true
    });
    
    const mailData = {
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      replyTo: body.email,
      to: process.env.EMAIL,
      subject: `Message From ${body.name} - from Portfolio Website`,
      text: `USING EMAIL: ${body.email} \n${body.message}`
    };
    
    await transporter.verify();
    
    const info = await transporter.sendMail(mailData);
    console.log('Message sent: ', info.messageId);
    
    return NextResponse.json(
      { message: 'Thanks for your message!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}