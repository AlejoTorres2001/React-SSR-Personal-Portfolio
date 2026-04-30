'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Icons from './Icons'
import { faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useContactForm from '../hooks/useContactForm'
import { useInView } from 'react-intersection-observer'
import { copy } from '../content/i18n'
import { Locale, localePath } from '../lib/i18n'

const ContactMe = ({ locale }: { locale: Locale }) => {
  const { ref, inView } = useInView({ threshold: 0.15 })

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
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

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-jakarta text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-emerald-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-emerald-400/20'

  const labelClass =
    'mb-1.5 block font-jakarta text-xs font-medium uppercase tracking-wider text-slate-500'

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center py-24"
      id="ContactMe"
    >
      {/* Section heading */}
      <div
        className={`mb-12 flex w-full flex-col items-center ${inView ? 'appear' : ''} fade-in`}
      >
        <h2 className="font-fraunces text-4xl text-slate-50">
          {copy.sections.contactTitle[locale]}
        </h2>
        <p className="mt-2 font-jakarta text-xs uppercase tracking-widest text-slate-400">
          {copy.sections.contactSubtitle[locale]}
        </p>
        <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      </div>

      {/* Main card */}
      <div
        className={`${inView ? 'appear' : ''} glass w-full max-w-[1100px] rounded-3xl px-5 py-8 fade-in md:px-10 md:py-12`}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left — info + social */}
          <div className="flex flex-col gap-6 lg:w-[40%]">
            <div>
              <h3 className="font-fraunces text-2xl text-slate-50">
                {copy.sections.contactHeading[locale]}
              </h3>
              <p className="mt-3 font-jakarta text-sm leading-relaxed text-slate-400">
                {locale === 'en'
                  ? "Have a project in mind, a question, or just want to say hello? Fill in the form and I'll get back to you as soon as possible."
                  : 'Tenés un proyecto en mente, una pregunta, o simplemente querés saludar? Completá el formulario y te respondo a la brevedad.'}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-jakarta text-xs uppercase tracking-widest text-slate-500">
                {locale === 'en' ? 'Find me on' : 'Encuéntrame en'}
              </p>
              <Icons />
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:flex-1"
          >
            {error && (
              <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-jakarta text-sm text-red-400">
                {error}
              </p>
            )}
            {success && (
              <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 font-jakarta text-sm text-emerald-400">
                {success}
              </p>
            )}

            <div>
              <label htmlFor="name" className={labelClass}>
                {copy.sections.contactName[locale]}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                name="name"
                autoComplete="name"
                maxLength={100}
                required
                className={inputClass}
                placeholder={locale === 'en' ? 'Your name' : 'Tu nombre'}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                required
                className={inputClass}
                placeholder={
                  locale === 'en' ? 'your@email.com' : 'tu@email.com'
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                {copy.sections.contactMessage[locale]}
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                required
                minLength={20}
                maxLength={2000}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder={
                  locale === 'en'
                    ? 'Tell me about your project or idea...'
                    : 'Cuéntame sobre tu proyecto o idea...'
                }
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                name="SendEmail"
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-jakarta text-sm font-semibold text-bgDeep shadow-[0_10px_24px_-8px_rgba(52,211,153,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_14px_28px_-8px_rgba(52,211,153,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? copy.sections.contactSending[locale]
                  : copy.sections.contactSend[locale]}
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>

              <Link
                href={localePath(locale, '#Home')}
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-emerald-400/30 hover:text-emerald-400"
              >
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className={`text-sm ${prefersReducedMotion ? '' : 'transition-transform duration-200 hover:-translate-y-0.5'}`}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
