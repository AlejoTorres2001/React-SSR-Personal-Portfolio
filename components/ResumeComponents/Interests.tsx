'use client'
import React from 'react'
import { Locale } from '../../lib/i18n'

const Interests = ({ locale }: { locale: Locale }) => {

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div className="mb-8 flex w-full flex-col">
        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {locale === 'en'
                ? 'Teaching'
                : 'Transmitir mis Conocimientos'}
            </span>
            <div></div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span></span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {locale === 'en'
                ? 'Apart from being a tech enthusiast, I also love to share my knowledge to other, helping them to achieve their goals and improve their skills.'
                : 'Aparte de ser una persona entusiasta de la tecnología, también me gusta compartir mi conocimiento con otros, ayudándolos a alcanzar sus metas y mejorar sus habilidades.'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {locale === 'en' ? 'Collaboration' : 'Colaborar'}
            </span>
            <div></div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span></span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {locale === 'en'
                ? "I'm looking to collaborate with other Devs in meaningful projects that have a positive impact in the Tech World"
                : 'Busco colaborar con otros Desarrolladores en proyectos significativos que tienen un impacto positivo en el mundo de la Tecnología'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">{locale === 'en' ? 'Music' : 'Musica'}</span>
            <div></div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span></span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {locale === 'en'
                ? 'occasionally play the drums'
                : 'A veces me gusta tocar la batería'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Interests)
