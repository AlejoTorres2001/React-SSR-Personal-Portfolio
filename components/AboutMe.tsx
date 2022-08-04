import React, { useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { ILanguageContextType } from '../@types/language.d.types'
import { LanguageContext } from '../context/LanguageContextProvider'
const AboutMe = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  return (
    <div className="about-me-container screen-container" id="AboutMe">
      <div
        ref={ref}
        className={`about-me-parent ${inView ? 'appear' : ''} fade-in`}
      >
        <div className="heading-container">
          <div className="screen-heading">
            <span>{language.name === 'en' ? 'About Me' : 'Sobre Mi'}</span>
          </div>
          <div className="screen-sub-heading">
            <span>
              {language.name === 'en'
                ? 'A Brief Description'
                : 'Una Breve Descripcion'}
            </span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              <strong>
                {language.name === 'en'
                  ? 'FullStack developer '
                  : 'Desarrollador FullStack'}
              </strong>
              {language.name === 'en'
                ? 'with a passion for learning and problem solving. Almost Done with my '
                : ' Con pasion por aprender y resolver problemas desafiantes. Casi he terminado con mi '}
              <strong>
                {language.name === 'en'
                  ? 'Science in Computer Engineering'
                  : 'Carrera de grado en ingeniería en Informatica'}{' '}
              </strong>
              {language.name === 'en'
                ? 'degree. Looking for a job in the industry with new challenges where I can learn and grow.'
                : 'Estoy en la busqueda de un puesto en la industria, con nuevos desafios donde pueda continuar aprendiendo y creciendo. '}{' '}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>
                  {language.name === 'en'
                    ? 'Here are a Few Highlights:'
                    : 'Algunas cosas a destacar:'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Full Stack web and mobile development'
                    : 'Desarrollo Fullstack web y mobil'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'background knowledge of MERN stack'
                    : 'Experiencia en el uso del stack MERN'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Interactive Front End as per the design'
                    : 'Diseño interactivo y responsivo en el Front End'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Building REST and GrapQL APIs'
                    : 'Construccion de APIs REST y de GrapQL'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Managing databases'
                    : 'Administracion de Bases de Datos'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Part of Movers And Shakers Program in '
                    : 'Participo en el programa Movers And Shakers en '}
                  <a className="link" href="https://www.datastax.com/dev">
                    DataStax
                  </a>
                </span>
              </div>
            </div>
            <div className="about-me-options">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href =
                    process.env.NODE_ENV === 'production'
                      ? 'https://react-ssr-personal-portfolio.vercel.app/#ContactMe'
                      : 'http://localhost:3000/#ContactMe'
                }}
                className="btn primary-btn"
              >
                {language.name === 'en' ? 'Contact Me' : 'Contactame'}{' '}
              </button>
              <a
                href="/assets/home/AlejoTorres.pdf"
                download="AlejoTorresCV.pdf"
              >
                <button className="btn highlighted-btn">
                  {language.name === 'en' ? 'Get Resume' : 'Descargar CV'}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
