'use client'
import React, { useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { ILanguageContextType } from '../@types/language.types'
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
            <span>{language.name === 'en' ? 'About Me' : 'Sobre Mí'}</span>
          </div>
          <div className="screen-sub-heading">
            <span>
              {language.name === 'en'
                ? 'A Brief Overview'
                : 'Una Breve Descripción'}
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
              {language.name === 'en' ? (
                <>
                  I’m a <strong>Semi-Senior Software Engineer</strong>, with
                  over <strong>4 years of experience</strong> delivering
                  large-scale web applications. Expert in designing monolithic,
                  event-driven, and microservice architectures using{' '}
                  <strong>Node.js</strong> and <strong>Python</strong> on the
                  backend, and <strong>React.js</strong> &{' '}
                  <strong>Angular</strong> on the frontend. I’ve built and
                  scaled <strong>distributed event-processing pipelines</strong>{' '}
                  with <strong>Bull</strong>, <strong>n8n</strong>, and{' '}
                  <strong>NestJS</strong> and automated cloud infrastructure on{' '}
                  <strong>Azure</strong> and <strong>GCP</strong> with{' '}
                  <strong>Terraform</strong> and DevOps pipelines. I’m
                  passionate about <strong>mentoring</strong> and sharing best
                  practices in Software Development, code quality, Systems
                  Design. Currently, I’m leading full-stack development at{' '}
                  <a className="link" href="https://www.empatia.technology">
                    EmpatIA
                  </a>
                  . I’m eager to embrace new challenges and continue growing in
                  the industry.
                </>
              ) : (
                <>
                  Soy un <strong>Ingeniero de Software Semi-Senior</strong>, con
                  más de <strong>4 años de experiencia</strong> desarrollando
                  aplicaciones web a gran escala. Experto en diseñar
                  arquitecturas monolíticas, orientadas a eventos y de
                  microservicios. Fluido en <strong>Node.js</strong>,{' '}
                  <strong>Python</strong> y <strong>Go</strong> como tecnologías
                  backend, y <strong>React.js</strong> y{' '}
                  <strong>Angular</strong> en el frontend. He construido y
                  escalado{' '}
                  <strong>
                    pipelines distribuidos de procesamiento de eventos
                  </strong>{' '}
                  con <strong>Bull</strong>, <strong>n8n</strong> y{' '}
                  <strong>NestJS</strong>, y automatizado infraestructuras en{' '}
                  <strong>Azure</strong> y <strong>GCP</strong> con{' '}
                  <strong>Terraform</strong> y pipelines de DevOps. Me apasiona
                  el <strong>mentorado</strong> y la difusión de buenas
                  prácticas en el diseño de APIs, calidad de código y onboarding
                  de equipos. Actualmente lidero el desarrollo FullStack en{' '}
                  <a className="link" href="https://www.empatia.technology">
                    EmpatIA
                  </a>
                  . Busco nuevos desafíos para seguir aprendiendo y creciendo en
                  la industria.
                </>
              )}
            </span>

            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>
                  {language.name === 'en'
                    ? 'Here are a Few Highlights:'
                    : 'Algunas cosas a destacar:'}
                </span>
              </div>

              {/* Common bullets */}
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? '4+ years building large-scale Web Systems'
                    : '+4 años desarrollando Sistemas Web a gran escala'}
                </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Expertise in event-driven & microservices architectures'
                    : 'Experto en arquitecturas orientadas a eventos y microservicios'}
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Implemented CI/CD pipelines with GitHub Actions'
                    : 'Implementación de pipelines CI/CD con GitHub Actions'}
                </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Generative AI integration and agents orchestration'
                    : 'Integración de IA generativa y orquestación de agentes'}
                </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Proficient in SQL & NoSQL database design and optimization'
                    : 'Diseño y optimización de bases de datos SQL y NoSQL'}
                </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Machine learning research experience with Deep Learning'
                    : 'Experiencia como investigador ML'}
                </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>
                  {language.name === 'en'
                    ? 'Leading FullStack development teams'
                    : 'Liderazgo en equipos de desarrollo FullStack'}
                </span>
              </div>
            </div>

            <div className="about-me-options">
              <button
                name="AboutMe"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href =
                    process.env.NODE_ENV === 'production'
                      ? 'https://alejo-torres.com/#ContactMe'
                      : 'http://localhost:3000/#ContactMe'
                }}
                className="btn primary-btn"
              >
                {language.name === 'en' ? 'Contact Me' : 'Contáctame'}
              </button>
              <button
                name="ContactMe"
                className="btn highlighted-btn"
                onClick={(e) => {
                  e.preventDefault()
                  // Apunta directamente al PDF de tu CV en inglés
                  window.open(
                    'https://towers.solutions/CV-AlejoTorres-EN.pdf',
                    '_blank'
                  )
                }}
              >
                {language.name === 'en' ? 'Get Resume' : 'Descargar CV'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
