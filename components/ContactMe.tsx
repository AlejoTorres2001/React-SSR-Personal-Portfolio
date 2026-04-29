'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
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

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => {
      mediaQuery.removeEventListener('change', updatePreference)
    }
  }, [])

  const [
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handleSubmit,
    error,
    success,
    isSubmitting
  ] = useContactForm()

  return (
    <section ref={ref} className="min-h-screen bg-uiWhite pb-8 pt-[70px]" id="ContactMe">
      <div className={`heading-container ${inView ? 'appear' : ''} fade-in`}>
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

      <div
        className={`${inView ? 'appear' : ''} mx-auto flex max-w-[1100px] flex-col rounded-xl bg-[#1f2235] p-2.5 text-uiWhite shadow-[0_0_20px_-2px_#1f2235] fade-in`}
      >
        <div className="min-w-0 flex-1">
          <h2 className="mb-5 font-poppins-bold text-xl tracking-[0.2rem] text-uiWhite">
            {prefersReducedMotion ? (
              language.name === 'en' ? 'Get in Touch 📧' : 'Ponte en Contacto 📧'
            ) : (
              <TypeAnimation
                sequence={
                  language.name === 'en'
                    ? ['Get in Touch 📧', 1000]
                    : ['Ponte en Contacto 📧', 1000]
                }
                repeat={Infinity}
                speed={50}
              />
            )}
          </h2>
          <Icons />
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1100px] flex-col justify-between gap-5 lg:flex-row">
          <div className="w-full lg:flex-1">
            <h2 className="mb-4 text-lg font-normal tracking-[0.3rem] text-uiWhite/60">
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

          <form
            onSubmit={handleSubmit}
            className="mt-0 flex w-full flex-col rounded-xl bg-uiWhite p-4 text-[#111] shadow-[0_0_20px_-2px_#1f2235] lg:mt-[-52px] lg:flex-[0.9]"
          >
            {error && (
              <p className="mb-2.5 text-center font-poppins-bold tracking-[0.1rem] text-[#e44f4ffa]">
                {error}
              </p>
            )}
            {success && (
              <p className="mb-2.5 text-center font-poppins-bold tracking-[0.1rem] text-[#0cbfae]">
                {success}
              </p>
            )}

            <label htmlFor="name">
              {language.name === 'en' ? 'Name' : 'Nombre'}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              className="mb-[22px] rounded-[10px] border-2 border-transparent bg-[hsla(0,0%,90.2%,0.6)] px-4 py-2 text-[1.1rem] outline-none transition focus:border-[rgba(30,85,250,0.47)] focus:bg-uiWhite"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              required
              className="mb-[22px] rounded-[10px] border-2 border-transparent bg-[hsla(0,0%,90.2%,0.6)] px-4 py-2 text-[1.1rem] outline-none transition focus:border-[rgba(30,85,250,0.47)] focus:bg-uiWhite"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">
              {language.name === 'en' ? 'Message' : 'Mensaje'}
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              required
              minLength={20}
              maxLength={2000}
              rows={5}
              className="mb-[22px] rounded-[10px] border-2 border-transparent bg-[hsla(0,0%,90.2%,0.6)] px-4 py-2 text-[1.1rem] outline-none transition focus:border-[rgba(30,85,250,0.47)] focus:bg-uiWhite"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="flex justify-center lg:justify-start">
              <button
                name="SendEmail"
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-40 items-center justify-center rounded-[19px] border-2 border-darkOrange bg-[#1f2235] p-1 text-lg text-[#e6e3e3] transition hover:border-[#1f2235] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? language.name === 'en'
                    ? 'Sending...'
                    : 'Enviando...'
                  : language.name === 'en'
                    ? 'Send'
                    : 'Enviar'}{' '}
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="pointer-events-none relative mt-4 flex justify-end pr-10">
        <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-[10px] border-none bg-[tomato] text-2xl text-[#f0f8ff]">
          <Link href="/#Home">
            <FontAwesomeIcon
              className={`text-[#f0f8ff] ${prefersReducedMotion ? '' : 'animate-[mover_0.5s_infinite_alternate] hover:rotate-[360deg]'}`}
              icon={faArrowUp}
            ></FontAwesomeIcon>
          </Link>
        </button>
      </div>
    </section>
  )
}

export default ContactMe
