import React from 'react'
import Typical from 'react-typical'
import Icons from './Icons'

const ContactMe = () => {
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
      </div>
    </div>
  )
}

export default ContactMe
