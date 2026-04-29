'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Badge from './Badge'
import badgesData from '../badges.json'
import { useInView } from 'react-intersection-observer'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'

const Badges = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

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
            disabled={!canScrollPrev}
          >
            ‹
          </button>

          <div className="embla__viewport" ref={emblaRef} aria-label="Badges carousel">
            <div className="embla__container">
              {badgesData.badges.map((badge) => (
                <div className="embla__slide" key={badge.assertion}>
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
            disabled={!canScrollNext}
          >
            ›
          </button>
        </div>

        <div className="embla__dots" aria-label="Badges pagination">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--active' : ''}`}
              onClick={() => emblaApi?.scrollTo(index)}
              type="button"
              aria-label={`Go to badges page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Badges
