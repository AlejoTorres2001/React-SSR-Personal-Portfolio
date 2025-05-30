'use client'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.types'
import { LanguageContext } from '../../context/LanguageContextProvider'

const Education: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container">
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'AI Engineer – SMILE Scholarship'
                : 'Ingeniería en IA – Beca SMILE'}
            </span>
            <div className="heading-date">
              {language.name === 'en'
                ? 'Feb – Jul 2023'
                : 'Feb – Jul 2023'}
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Polytechnic University of Madrid (UPM), Madrid, Spain'
                : 'Universidad Politécnica de Madrid (UPM), Madrid, España'}
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Cum laude in Microservices Architectures, Intelligent Systems, Machine Learning II'
                : 'Cum laude en Arquitecturas de Microservicios, Sistemas Inteligentes, Aprendizaje Automático II'}
            </span>
          </div>
        </div>

        {/* Catholic University of Salta */}
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Computer Science Engineer, Cum Laude'
                : 'Ingeniero en Informática, Cum Laude'}
            </span>
            <div className="heading-date">
              {language.name === 'en' ? 'Dec 2024' : 'Dic 2024'}
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Catholic University of Salta, Salta, Argentina'
                : 'Universidad Católica de Salta, Salta, Argentina'}
            </span>
          </div>
          <div className="resume-heading-description">
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
