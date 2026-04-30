'use client'
import React, { useCallback, useContext } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Badge from './Badge'
import badgesData from '../badges.json'
import { useInView } from 'react-intersection-observer'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'

const Badges = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false
  })

  const { ref, inView } = useInView({
    threshold: 0.3
  })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <div ref={ref} className="badges-section" id="Badges">
      <div
        className={`heading-container-badges ${inView ? 'appear' : ''} fade-in`}
      >
        <div className="screen-heading">
          <span>{language.name === 'en' ? 'Badges' : 'Premios'}</span>
        </div>
        <div className="screen-sub-heading">
          <span>
            {language.name === 'en'
              ? 'Workshops Hackathons and Challenges'
              : 'Workshops Hackathons y Desafios'}
          </span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>

      <div className="badges-container">
        <div className={`embla ${inView ? 'appear' : ''} fade-in`}>
          <button
            className="embla__button"
            onClick={scrollPrev}
            type="button"
            aria-label="Previous badges"
          >
            ‹
          </button>

          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {badgesData.badges.map((badge, id) => (
                <div className="embla__slide" key={id}>
                  <Badge {...badge} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="embla__button"
            onClick={scrollNext}
            type="button"
            aria-label="Next badges"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default Badges
