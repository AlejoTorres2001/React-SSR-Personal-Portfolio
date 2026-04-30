'use client'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../@types/language.types'
import { LanguageContext } from '../context/LanguageContextProvider'
import { copy, toLocale } from '../content/i18n'
import Icons from './Icons'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

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
const Profile: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType
  const locale = toLocale(language.name)

  return (
    <div
      className="flex min-h-fit w-full items-center justify-center bg-[#24263c] px-4 text-center"
      id="Home"
    >
      <div className="mt-10 flex w-full max-w-[1120px] flex-col-reverse items-center text-[#f0f8ff] md:mt-4 md:flex-row md:justify-between">
        <div>
          <div>
            <div>
              <Icons />
            </div>
          </div>
          <div className="font-poppins-semibold text-2xl">
            <span className="text-uiWhite">
              {''}
              {language.name === 'en'
                ? "Hello, I'm"
                : 'Hola, mi nombre es'}{' '}
              <span className="text-darkOrange">Alejo</span>
            </span>
          </div>
          <div className="my-3.5 flex flex-col">
            <span className="text-uiWhite">
              {''}
              <h1 className="mx-auto flex h-[60px] min-w-[320px] items-center justify-center text-center font-[cursive] text-[28px] md:min-w-[420px] md:text-[40px]">
                {''}
                <TypeAnimation sequence={steps} repeat={Infinity} speed={50} />
              </h1>
              <span className="mt-1 font-poppins-light text-lg md:text-[19px]">
                {language.name === 'en'
                  ? 'Building applications with front and back-end technologies.'
                  : 'Creando aplicaciones con tecnologías de FrontEnd y BackEnd.'}
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Link
              href="/#ContactMe"
              className="w-[140px] rounded-[50px] border-2 border-[linen] bg-[#1f2235] py-3.5 text-center font-poppins-semibold text-xs text-uiWhite transition hover:border-darkOrange hover:text-[#f0f8ff]"
            >
              {''}
              {' '}
              {copy.sections.contactButton[locale]}
            </Link>
            <button
              className="w-[140px] rounded-[50px] bg-darkOrange py-3.5 font-poppins-semibold text-xs text-uiWhite transition hover:bg-[#fff8dc] hover:text-[#111]"
              onClick={(e) => {
                e.stopPropagation()
                const cvUrl =
                  language.name === 'en'
                    ? 'assets/home/CV-AlejoTorres-EN.pdf'
                    : 'assets/home/CV-AlejoTorres-ES.pdf'
                window.open(cvUrl, '_blank')
              }}
            >
              {copy.sections.resumeButton[locale]}
            </button>
          </div>
        </div>
        <div className="mb-10 mt-4 flex h-[275px] w-[275px] items-center justify-center rounded-full shadow-[0_1px_0_0.5px_var(--white)] sm:h-[320px] sm:w-[320px] md:mb-24 md:h-[380px] md:w-[380px] md:ml-20 lg:ml-1">
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
