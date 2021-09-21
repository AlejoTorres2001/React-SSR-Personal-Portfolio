import React from 'react'
import emailjs from 'emailjs-com'
const EmailForm = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, e.target,process.env.NEXT_PUBLIC_YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <form className="container-form my-5" onSubmit={sendEmail}>
		<div className="contact-box">
			<div className="left-form"></div>
			<div className="right-form">
				<h2 className="header-form">Contact Me</h2>
				<input type="text" className="field" name="name" placeholder="Name"/>
				<input type="text" className="field"  name="email" placeholder="Email"/>
				<input type="text" className="field"  name="subject" placeholder="Subject"/>
				<textarea placeholder="Message"  name="message" className="field text-area-form"></textarea>
				<input type="submit" value="Send" className="btn-form" />
			</div>
		</div>
	    </form>
    )
}

export default EmailForm