import React, { useContext, useState } from 'react'
import Typical from 'react-typical'
import { ILanguageContextType } from '../@types/language.d.types'
import { LanguageContext } from '../context/LanguageContextProvider'
import Icons from './Icons'
import Flag from 'react-world-flags'

const steps = [
  'Cross Platform Dev 🔴',
  1000,
  'React/React Native 🌐',
  1000,
  'FullStack Developer 💻',
  1000,
  '#DataStaxDevelopers ⌨️',
  1000
]
const Profile: React.FunctionComponent<object> = () => {
  const [isCvSelected, setIsCvSelected] = useState(false)
  const { language } = useContext(LanguageContext) as ILanguageContextType
  return (
    <div className="profile-container" id="Home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icons">
              <Icons />
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              {language.name === 'en'
                ? "Hello, I'm"
                : 'Hola, mi nombre es'}{' '}
              <span className="highlighted-text">Alejo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {''}
              <h1>
                {''}
                <Typical loop={Infinity} steps={steps} />
              </h1>
              <span className="profile-role-tagline">
                {language.name === 'en'
                  ? 'Building applications with front and back-end technologies.'
                  : 'Creando aplicaciones con tecnologías de FrontEnd y BackEnd.'}
              </span>
            </span>
          </div>
          <div className="profile-options">
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
              {''}
              {language.name === 'en' ? ' Get in Touch' : 'Contactar'}
            </button>
              <button className="btn highlighted-btn">
                {language.name === 'en' ? 'Get Resume' : 'Descargar CV'}
                <div className="">
            <a href="/assets/home/AlejoTorres.pdf" download="AlejoTorresCV.pdf">
                  <button className='btn'>
                  <Flag code="724" height="12" />
                  &nbsp; ES
                  </button>
            </a>

                  <a href="/assets/home/AlejoTorres.pdf" download="AlejoTorresCV.pdf">

                  <button className='btn'>
                  <Flag code="840" height="10" />
                  &nbsp; EN
                  </button>
            </a>
                </div>
              </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
