import React, { useContext, useState } from 'react'
import Typical from 'react-typical'
import { ILanguageContextType } from '../@types/language.d.types'
import { LanguageContext } from '../context/LanguageContextProvider'
import Icons from './Icons'
import CvOption from './CvOption'
import useDelayUnmount from '../hooks/useDelayUnmount'
import Image from 'next/image'
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
const mountedStyle = { animation: 'inAnimation 300ms ease-in' }
const unmountedStyle = { animation: 'outAnimation 300ms ease-in' }
const Profile: React.FunctionComponent<object> = () => {
  const [isCvSelected, setIsCvSelected] = useState(false)
  const shouldRenderChild = useDelayUnmount(isCvSelected, 300)
  const { language } = useContext(LanguageContext) as ILanguageContextType
  return (
    <div
      className="profile-container"
      id="Home"
      onClick={(e) => setIsCvSelected((prevState) => prevState && !prevState)}
    >
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
            <button
              className="btn highlighted-btn"
              onClick={(e) => {
                e.stopPropagation()
                setIsCvSelected((prevState) => !prevState)
              }}
            >
              {!isCvSelected
                ? language.name === 'en'
                  ? 'Get Resume'
                  : 'Descargar CV'
                : ''}
              {shouldRenderChild && isCvSelected && (
                <section style={isCvSelected ? mountedStyle : unmountedStyle}>
                  <CvOption
                    fileUrl="assets/home/CV - Alejo Torres Teruel - ES.pdf"
                    langOptions={{
                      flagCode: '724',
                      flagHeight: '12',
                      langText: 'ES'
                    }}
                  />

                  <CvOption
                    fileUrl="assets/home/CV - Alejo Torres Teruel - EN.pdf"
                    langOptions={{
                      flagCode: '840',
                      flagHeight: '10',
                      langText: 'EN'
                    }}
                  />
                </section>
              )}
            </button>
          </div>
        </div>
        <div className="profile-picture">
        <div className="profile-picture-background">
        <Image
              className='profile-picture-image'
              src={'/assets/home/profile-picture.jpg'}
              layout='responsive'
              width={380}
              height={380}
              alt={'Profile Picture'}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
