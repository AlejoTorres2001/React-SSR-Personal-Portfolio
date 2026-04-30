'use client'
import React from 'react'
import { Locale } from '../../lib/i18n'

const Education = ({ locale }: { locale: Locale }) => {

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div className="mb-8 flex w-full flex-col">
        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {locale === 'en'
                ? 'AI Engineer – SMILE Scholarship'
                : 'Ingeniería en IA – Beca SMILE'}
            </span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">
              {locale === 'en'
                ? 'Feb – Jul 2023'
                : 'Feb – Jul 2023'}
            </div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {locale === 'en'
                ? 'Polytechnic University of Madrid (UPM), Madrid, Spain'
                : 'Universidad Politécnica de Madrid (UPM), Madrid, España'}
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {locale === 'en'
                ? 'Cum laude in Microservices Architectures, Intelligent Systems, Machine Learning II'
                : 'Cum laude en Arquitecturas de Microservicios, Sistemas Inteligentes, Aprendizaje Automático II'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {locale === 'en'
                ? 'Computer Science Engineer, Cum Laude'
                : 'Ingeniero en Informática, Cum Laude'}
            </span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">
              {locale === 'en' ? 'Dec 2024' : 'Dic 2024'}
            </div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {locale === 'en'
                ? 'Catholic University of Salta, Salta, Argentina'
                : 'Universidad Católica de Salta, Salta, Argentina'}
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {locale === 'en'
                ? 'Academic Excellence Award – 2023'
                : 'Premio a la Excelencia Académica – 2023'}
              <br />
              {locale === 'en'
                ? 'Thesis: Text Synthesis Using Language Models'
                : 'Tesis: Síntesis de Texto usando Modelos de Lenguaje'}
                 <br />
              {locale === 'en'
                ? 'Posco Scholarship - 2024'
                : 'Beca Abanderados de Posco Argentina - 2024'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Education)
