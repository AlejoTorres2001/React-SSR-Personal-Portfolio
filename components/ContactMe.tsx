import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Typical from 'react-typical'
import Icons from './Icons'
import { faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useContactForm from '../hooks/useContactForm'
const ContactMe: React.FunctionComponent<object> = () => {
  const [name, setName, email, setEmail, message, setMessage, handleSubmit] =
    useContactForm()
  return (
    <div className="main-container">
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="screen-sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical steps={['Get in Touch 📧']} />
          </h2>{' '}
          <Icons />
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src="/assets/ContactMe/mail.jpeg" alt="image not found" />
          </div>
          <form>
            <p></p>
            <label htmlFor="name">Name</label>
            <input
              typeof="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              typeof="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              typeof="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="send-btn">
              <button typeof="submit" onClick={(e) => handleSubmit(e)}>
                send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-container">
        <button className="btn-scroll">
          {' '}
          <Link href="#Home">
            <FontAwesomeIcon
              className="arrow"
              icon={faArrowUp}
            ></FontAwesomeIcon>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ContactMe
