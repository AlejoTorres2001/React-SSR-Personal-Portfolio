'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Icons from './Icons'
import { faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useContactForm from '../hooks/useContactForm'
import { useInView } from 'react-intersection-observer'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'
import Image from 'next/image'
const ContactMe: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const [
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handleSubmit,
    error
  ] = useContactForm()
  return (
    <div ref={ref} className="main-container" id="ContactMe">
      <div className={`heading-container ${inView ? 'appear' : ''}fade-in`}>
        <div className="screen-heading">
          <span>{language.name === 'en' ? 'Contact Me' : 'Contactame'}</span>
        </div>
        <div className="screen-sub-heading">
          <span>
            {language.name === 'en'
              ? 'Lets Keep In Touch'
              : 'Estemos en Contacto'}
          </span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className={`${inView ? 'appear' : ''} central-form fade-in`}>
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={
                language.name === 'en'
                  ? ['Get in Touch 📧', 1000]
                  : ['Ponte en Contacto📧', 1000]
              }
              repeat={Infinity}
              speed={50}
            />
          </h2>{' '}
          <Icons />
        </div>
        <div className="back-form">
          <div className="img-back">
            <h2>
              {language.name === 'en'
                ? 'Send Your Email Here!'
                : 'Envia tu Email aquí!'}
            </h2>
            <Image
              src="/assets/ContactMe/mail.jpeg"
              alt="Email contact"
              width={700}
              height={300}
              style={{
                width: '100%',
                height: 'auto',
                opacity: 0.5
              }}
            />
          </div>
          <form>
            {error && <p className="error">{error}</p>}
            <p></p>
            <label htmlFor="name">
              {language.name === 'en' ? 'Name' : 'Nombre'}
            </label>
            <input
              typeof="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              typeof="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">
              {language.name === 'en' ? 'Message' : 'Mensage'}
            </label>
            <textarea
              typeof="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="send-btn">
              <button
                name="SendEmail"
                typeof="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {language.name === 'en' ? 'Send' : 'Enviar'}{' '}
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
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
