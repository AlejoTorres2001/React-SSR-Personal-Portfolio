'use client'
import React from 'react'
import { copy } from '../content/i18n'
import Icons from './Icons'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { Locale, localePath } from '../lib/i18n'

const steps = [
  'Fullstack Dev ⚙️',
  1200,
  'Cloud & DevOps 🌐',
  1200,
  'Agents Orchestration 🤖',
  1200,
  'Distributed Systems 🖥️',
  1200,
  'ReactJs ⚛️',
  1200,
  'NestJS 🚀',
  1200
]

const Profile = ({ locale }: { locale: Locale }) => {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center px-5 pt-24 pb-16 md:pt-20"
      id="Home"
    >
      <div className="flex w-full max-w-[1100px] flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        {/* Left — text content */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          {/* Social icons */}
          <div className="flex gap-1 text-lg text-slate-500">
            <Icons />
          </div>

          {/* Greeting */}
          <p className="font-jakarta text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
            {locale === 'en' ? "Hello, I'm" : 'Hola, soy'}
          </p>

          {/* Name */}
          <h1 className="font-fraunces text-5xl font-black leading-tight text-slate-50 sm:text-6xl md:text-7xl">
            Alejo Torres
          </h1>

          {/* Type animation */}
          <div className="flex h-10 items-center">
            <span className="font-jakarta text-xl font-light text-slate-300">
              <TypeAnimation sequence={steps} repeat={Infinity} speed={50} />
            </span>
          </div>

          {/* Tagline */}
          <p className="max-w-[420px] text-center font-jakarta text-base text-slate-400 md:text-left">
            {locale === 'en'
              ? 'Building scalable applications with modern front and back-end technologies.'
              : 'Creando aplicaciones escalables con tecnologías modernas de frontend y backend.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href={localePath(locale, '#ContactMe')}
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-jakarta text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-emerald-300"
            >
              {copy.sections.contactButton[locale]}
            </Link>
            <Link
              href={
                locale === 'en'
                  ? '/assets/home/CV-AlejoTorres-EN.pdf'
                  : '/assets/home/CV-AlejoTorres-ES.pdf'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 font-jakarta text-sm font-semibold text-bgDeep shadow-[0_12px_28px_-10px_rgba(52,211,153,0.5)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_16px_32px_-10px_rgba(52,211,153,0.65)]"
            >
              {copy.sections.resumeButton[locale]}
            </Link>
          </div>
        </div>

        {/* Right — profile image */}
        <div className="relative shrink-0">
          {/* Emerald glow ring */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-emerald-400/20" />
            <div className="absolute inset-2 rounded-full border border-white/5" />
            <Image
              className="rounded-full object-cover p-3 transition duration-700 ease-out hover:scale-[1.03]"
              src="/assets/home/profile-picture.jpg"
              fill
              alt="Alejo Torres — Profile Picture"
              priority
              style={{ objectFit: 'cover', padding: '12px' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="h-8 w-5 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-0.5 animate-bounce rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default Profile


const steps = [
  'Fullstack Dev ⚙️',
  1000,
  'Cloud & DevOps 🌐',
  1000,
  'Agents Orchestration 🤖',
  1000,
  'Distributed Systems 🖥️',
  1000,
  'ReactJs ⚛️',
  1000,
  'NestJS 🚀',
  1000
]
const Profile = ({ locale }: { locale: Locale }) => {

  return (
    <div
      className="relative flex min-h-fit w-full items-center justify-center bg-transparent px-4 pb-8 text-center"
      id="Home"
    >
      <div className="mt-12 flex w-full max-w-[1120px] flex-col-reverse items-center text-[#f0f8ff] md:mt-6 md:flex-row md:justify-between">
        <div>
          <div>
            <div>
              <Icons />
            </div>
          </div>
          <div className="font-poppins-semibold text-[26px]">
              <span className="text-uiWhite">
                {''}
                {locale === 'en'
                  ? "Hello, I'm"
                  : 'Hola, mi nombre es'}{' '}
                <span className="text-darkOrange">Alejo</span>
            </span>
          </div>
          <div className="my-3.5 flex flex-col">
            <span className="text-uiWhite">
              {''}
              <h1 className="mx-auto flex h-[60px] min-w-[320px] items-center justify-center text-center font-[cursive] text-[30px] md:min-w-[420px] md:text-[42px]">
                {''}
                <TypeAnimation sequence={steps} repeat={Infinity} speed={50} />
              </h1>
              <span className="mt-1 font-poppins-light text-lg md:text-[19px]">
                {locale === 'en'
                  ? 'Building applications with front and back-end technologies.'
                  : 'Creando aplicaciones con tecnologías de FrontEnd y BackEnd.'}
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Link
              href={localePath(locale, '#ContactMe')}
              className="w-[140px] rounded-[50px] border border-white/40 bg-[#101527]/85 py-3.5 text-center font-poppins-semibold text-xs text-uiWhite shadow-[0_16px_30px_-22px_rgba(255,255,255,0.7)] transition hover:border-darkOrange hover:bg-[#1f2235] hover:text-[#f0f8ff]"
            >
              {''}
              {' '}
              {copy.sections.contactButton[locale]}
            </Link>
            <Link
              href={
                locale === 'en'
                  ? '/assets/home/CV-AlejoTorres-EN.pdf'
                  : '/assets/home/CV-AlejoTorres-ES.pdf'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-[140px] rounded-[50px] bg-gradient-to-r from-[#ff764f] to-[#ff4b2f] py-3.5 font-poppins-semibold text-xs text-uiWhite shadow-[0_18px_30px_-20px_rgba(255,106,79,0.95)] transition hover:from-[#fff8dc] hover:to-[#ffd5a7] hover:text-[#111]"
            >
              {copy.sections.resumeButton[locale]}
            </Link>
          </div>
        </div>
        <div className="relative mb-10 mt-4 flex h-[275px] w-[275px] items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_20px_45px_-24px_rgba(0,0,0,0.8)] sm:h-[320px] sm:w-[320px] md:mb-24 md:h-[380px] md:w-[380px] md:ml-20 lg:ml-1">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#ff6a4f33] to-[#26b0ce2f] blur-md"></div>
          <div className="h-[93%] w-[93%] rounded-full bg-cover bg-center bg-no-repeat transition duration-1000 ease-out hover:scale-105">
            <Image
              className="rounded-full"
              src={'/assets/home/profile-picture.jpg'}
              width={380}
              height={380}
              alt={'Profile Picture'}
              priority
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
