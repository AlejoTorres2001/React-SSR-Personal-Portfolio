import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.d.types'
import { LanguageContext } from '../../context/LanguageContextProvider'

const Interests: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container">
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Teaching'
                : 'Transmitir mis Conocimientos'}
            </span>
            <div></div>
          </div>
          <div className="resume-sub-heading">
            <span></span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Apart from being a tech enthusiast, I also love to share my knowledge to other, helping them to achieve their goals and improve their skills.'
                : 'Aparte de ser una persona entusiasta de la tecnología, también me gusta compartir mi conocimiento con otros, ayudándolos a alcanzar sus metas y mejorar sus habilidades.'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en' ? 'Collaboration' : 'Colaborar'}
            </span>
            <div></div>
          </div>
          <div className="resume-sub-heading">
            <span></span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? "I'm looking to collaborate with other Devs in meaningful projects that have a positive impact in the Tech World"
                : 'Busco colaborar con otros Desarrolladores en proyectos significativos que tienen un impacto positivo en el mundo de la Tecnología'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{language.name === 'en' ? 'Music' : 'Musica'}</span>
            <div></div>
          </div>
          <div className="resume-sub-heading">
            <span></span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'occasionally play the drums'
                : 'A veces me gusta tocar la batería'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests
