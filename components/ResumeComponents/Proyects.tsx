import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.d.types'
import { LanguageContext } from '../../context/LanguageContextProvider'
import { useRouter } from 'next/router'
const Proyects: React.FunctionComponent<object> = () => {
  const router = useRouter()
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container">
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span className="title">
              <Link
                href={
                  'https://github.com/AlejoTorres2001/React-SSR-Personal-Portfolio'
                }
              >
                {language.name === 'en'
                  ? ' Personal Portfolio Website'
                  : 'Sitio Web Personal'}
              </Link>
            </span>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}
              Nextjs,ReactJs,Typescript,vanilla CSS
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'A personal web portfolio to showcase all my details and projectsat one place. Using SSR for faster load time'
                : 'Un sitio web personal para mostrar todos mis detalles y proyectos en un solo lugar. Usando SSR para un tiempo de carga mas rápido'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <Link href={'https://github.com/AlejoTorres2001/code-playground'}>
              <span className="title">Codify</span>
            </Link>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}
              Vite,ReactJs,TailwindCSS,Redux
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? ' An easy to use, real time HTML + CSS + JS code playground,inspired by liveweave. Codify is a live editor for HTML,CSS AND JS allowing you to edit your code in real-time, and see your results instantly, without reloading the page.'
                : 'Un playground de codigo en la nube facil de usar, inspirado en liveweave. Codify es un editor de codigo HTML,CSS Y JS que te permite editar tu codigo en tiempo real, y ver tus resultados instantaneamente, sin recargar la pagina.'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <Link href={'https://github.com/AlejoTorres2001/chat.io'}>
              <span className="title">Chat.io</span>
            </Link>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Technologies Used: '
                : 'Tecnologías Usadas: '}
              Express,MondoDB,SocketIO,Vite,React,TailwindCSS
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'A Fullstack webSocket-based WhatsApp clone. The Core concept here revolves around WebSocket, instead of the classic server polling architecture, using an event-based communication allows for (almost) real-time communication between the server and our clients, who will listen and react to the changes. The frontEnd client is inspired on WhatsApp web'
                : 'Un clon de WhatsApp en la nube basado en WebSocket. El concepto central aqui esta en la implementacion del protocolo WebSocket, en lugar de la arquitectura clasica de polling del cliente-servidor, usando una comunicacion basada en eventos permite la comunicacion en tiempo real entre el servidor y nuestros clientes, que escuchan y reaccionan a los cambios. El frontEnd esta inspirado en WhatsApp web'}
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <Link
              href={
                'https://github.com/CoolRobotsAndStuff/machine-learning-for-maze-exploration'
              }
            >
              <span className="title">
                Maze Exploration Deep-Q Learning AI Model
              </span>
            </Link>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {' '}
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}{' '}
              Python,Keras,MLFlow
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Part of my internship at IITA. A simplified test environment for Webots simulator,a Deep-  Q learning Model and a Random Map Generator for it to be trained on, registring all progress in a MLFlow Server hosted on Google Cloud Computing'
                : 'Parte de mis actividades en IITA.Se trata del conjunto de un entorno de prueba simplificado para el simulador Webots, un modelo de Deep-Q Learning y un generador de mapas aleatorios para poder entrenar el modelo, registrando todo el progreso en un servidor de MLFlow alojado en Google Cloud Computing'}
            </span>
          </div>
        </div>
        <div className="proyects-btn-container">
          <button
            onClick={() => router.push('/projects')}
            className="proyects-btn"
          >
            More Projects <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Proyects
