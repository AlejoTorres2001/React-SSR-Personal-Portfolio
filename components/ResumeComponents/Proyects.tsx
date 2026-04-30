'use client'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.types'
import { LanguageContext } from '../../context/LanguageContextProvider'
import { copy, toLocale } from '../../content/i18n'
import { useRouter } from 'next/navigation'

const Proyects: React.FunctionComponent<object> = () => {
  const router = useRouter()
  const { language } = useContext(LanguageContext) as ILanguageContextType
  const locale = toLocale(language.name)

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div className="mb-8 flex w-full flex-col">
        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange transition-colors hover:text-uiBlack">
              <Link
                href={
                  'https://github.com/AlejoTorres2001/React-SSR-Personal-Portfolio'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {language.name === 'en'
                  ? ' Personal Portfolio Website'
                  : 'Sitio Web Personal'}
              </Link>
            </span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">2022-2022</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}
              Nextjs,ReactJs,Typescript,vanilla CSS
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? 'A personal web portfolio to showcase all my details and projectsat one place. Using SSR for faster load time'
                : 'Un sitio web personal para mostrar todos mis detalles y proyectos en un solo lugar. Usando SSR para un tiempo de carga mas rápido'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <Link href={'https://github.com/AlejoTorres2001/code-playground'}>
              <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange transition-colors hover:text-uiBlack">Codify</span>
            </Link>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">2022-2022</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}
              Vite,ReactJs,TailwindCSS,Redux
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? ' An easy to use, real time HTML + CSS + JS code playground,inspired by liveweave. Codify is a live editor for HTML,CSS AND JS allowing you to edit your code in real-time, and see your results instantly, without reloading the page.'
                : 'Un playground de codigo en la nube facil de usar, inspirado en liveweave. Codify es un editor de codigo HTML,CSS Y JS que te permite editar tu codigo en tiempo real, y ver tus resultados instantaneamente, sin recargar la pagina.'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <Link href={'https://github.com/AlejoTorres2001/chat.io'}>
              <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange transition-colors hover:text-uiBlack">Chat.io</span>
            </Link>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">2022-2022</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {language.name === 'en'
                ? 'Technologies Used: '
                : 'Tecnologías Usadas: '}
              Express,MondoDB,SocketIO,Vite,React,TailwindCSS
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? 'A Fullstack webSocket-based WhatsApp clone. The Core concept here revolves around WebSocket, instead of the classic server polling architecture, using an event-based communication allows for (almost) real-time communication between the server and our clients, who will listen and react to the changes. The frontEnd client is inspired on WhatsApp web'
                : 'Un clon de WhatsApp en la nube basado en WebSocket. El concepto central aqui esta en la implementacion del protocolo WebSocket, en lugar de la arquitectura clasica de polling del cliente-servidor, usando una comunicacion basada en eventos permite la comunicacion en tiempo real entre el servidor y nuestros clientes, que escuchan y reaccionan a los cambios. El frontEnd esta inspirado en WhatsApp web'}
            </span>
          </div>
        </div>

        <div className="mb-[30px] flex w-full flex-col">
          <div className="relative mb-3.5 flex justify-between">
            <div className="absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden"></div>
            <Link
              href={
                'https://github.com/CoolRobotsAndStuff/machine-learning-for-maze-exploration'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mb-[15px] font-poppins-semibold text-xl text-darkOrange transition-colors hover:text-uiBlack">
                Maze Exploration Deep-Q Learning AI Model
              </span>
            </Link>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-[14px] bg-darkOrange px-[14px] py-1 text-sm text-uiWhite">2022-2022</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-[15px] text-uiBlack">
            <span>
              {' '}
              {language.name === 'en'
                ? 'Technologies Used:'
                : 'Tecnologías Usadas: '}{' '}
              Python,Keras,MLFlow
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-[13px] leading-normal">
            <span>
              {language.name === 'en'
                ? 'Part of my internship at IITA. A simplified test environment for Webots simulator,a Deep-  Q learning Model and a Random Map Generator for it to be trained on, registring all progress in a MLFlow Server hosted on Google Cloud Computing'
                : 'Parte de mis actividades en IITA.Se trata del conjunto de un entorno de prueba simplificado para el simulador Webots, un modelo de Deep-Q Learning y un generador de mapas aleatorios para poder entrenar el modelo, registrando todo el progreso en un servidor de MLFlow alojado en Google Cloud Computing'}
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => router.push('/projects')}
            className="mt-4 w-40 rounded-[19px] border-2 border-darkOrange bg-[#1f2235] p-1 text-[11px] text-[#e6e3e3] transition hover:border-[#1f2235] hover:bg-darkOrange hover:text-uiBlack"
          >
            {copy.sections.moreProjects[locale]}{' '}
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Proyects)
