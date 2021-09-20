import React from 'react'
import Layout from '../components/Layout'
import emailjs from 'emailjs-com'
const ContactMe = () => {
    const sendEmail = (e) => {
        emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <Layout>

<form onSubmit={sendEmail}>
    <label>Subject</label>
      <input type="text" name="subject" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </Layout>
    )
}

export default ContactMe
