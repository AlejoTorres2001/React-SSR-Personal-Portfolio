'use client'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.types'
import { LanguageContext } from '../../context/LanguageContextProvider'

const Education: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div className="mb-8 flex w-full flex-col">
        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {language.name === 'en'
                ? 'AI Engineer – SMILE Scholarship'
                : 'Ingeniería en IA – Beca SMILE'}
            </span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">
              {language.name === 'en'
                ? 'Feb – Jul 2023'
                : 'Feb – Jul 2023'}
            </div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {language.name === 'en'
                ? 'Polytechnic University of Madrid (UPM), Madrid, Spain'
                : 'Universidad Politécnica de Madrid (UPM), Madrid, España'}
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? 'Cum laude in Microservices Architectures, Intelligent Systems, Machine Learning II'
                : 'Cum laude en Arquitecturas de Microservicios, Sistemas Inteligentes, Aprendizaje Automático II'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange">
              {language.name === 'en'
                ? 'Computer Science Engineer, Cum Laude'
                : 'Ingeniero en Informática, Cum Laude'}
            </span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">
              {language.name === 'en' ? 'Dec 2024' : 'Dic 2024'}
            </div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {language.name === 'en'
                ? 'Catholic University of Salta, Salta, Argentina'
                : 'Universidad Católica de Salta, Salta, Argentina'}
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? 'Academic Excellence Award – 2023'
                : 'Premio a la Excelencia Académica – 2023'}
              <br />
              {language.name === 'en'
                ? 'Thesis: Text Synthesis Using Language Models'
                : 'Tesis: Síntesis de Texto usando Modelos de Lenguaje'}
                 <br />
              {language.name === 'en'
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
