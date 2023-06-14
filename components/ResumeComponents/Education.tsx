import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.d.types'
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
                ? 'UPM SMILE Scholarship'
                : 'Beca SMILE en UPM'}
            </span>
            <div className="heading-date">2023-2024</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'ETSISI at Polytechnic University of Madrid,Spain'
                : 'Facultad de Sistemas informaticos,Universidad Politecnica de Madrid,España'}
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Artificial Intelligence and Microservices Architecture'
                : 'Inteligencia Artificial y Arquitecturas de Microservicios'}{' '}
              <br />
            </span>
          </div>
          <div className="resume-heading-description">
            <span></span>
          </div>
        </div>

        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Platzi Certifications'
                : 'Certificaciones en Platzi'}
            </span>
            <div className="heading-date">2021-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              Data & AI School
              <br />
              Frontend with Angular
              <br />
              Backend with NestJs
              <br />
              Javascript School <br />
              Web development School
              <br />
              Node.Js: Backend Development with Javascript
              <br />
              Frontend with React.js
              <br />
              Mobile Apps Development with React Native
              <br />
              JavaScript Full stack Developer
              <br />
              Programming and Software Development School <br />
              Full stack with Next.js <br />
              Backend with Node.js <br />
              Backend with .NET
              <br />
            </span>
          </div>
          <div className="resume-heading-description">
            <span></span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Digital Forensics course'
                : 'Curso de Forensia Digital'}
            </span>
            <div className="heading-date">2021-2021</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Ingeneering Faculty at UCASAL,Argentina'
                : 'Facultad de Ingenieria en UCASAL'}
            </span>
          </div>
          <div className="resume-heading-description">
            <span></span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Science in Computer Engineering'
                : 'Ingenieria en Informática'}
            </span>
            <div className="heading-date">
              2018-{language.name === 'en' ? 'Present' : 'Presente'}
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Catholic University of Salta,Argentina'
                : 'Universidad Católica de Salta,Argentina'}
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Advanced Student: 4 out of 5 years done'
                : 'Estudiante Avanzado de 4to año'}{' '}
              <br />
              {language.name === 'en' ? 'GPA: 8.5 / 10' : 'Promedio: 8.5 / 10'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Secondary School'
                : 'Escuela Secundaria'}
            </span>
            <div className="heading-date">2013-2018</div>
          </div>
          <div className="resume-sub-heading">
            <span>Escuela Parroquial Nuestra Señora de la merced</span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Bachelor of Social Sciences and Humanity'
                : 'Bachillerato en Ciencias Sociales y Humanidades'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'University of Cambridge'
                : 'Universidad de Cambridge'}
            </span>
            <div className="heading-date">2013-2018</div>
          </div>
          <div className="resume-sub-heading">
            <span>FCE First Certificate in English B2-Score 177</span>
          </div>
          <div className="resume-heading-description">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
