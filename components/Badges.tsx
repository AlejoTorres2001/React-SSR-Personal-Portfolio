'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Badge from './Badge'
import badgesData from '../badges.json'
import { useInView } from 'react-intersection-observer'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'
import { copy, toLocale } from '../content/i18n'

const Badges = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType
  const locale = toLocale(language.name)
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
    <section
      ref={ref}
      className="mb-12 flex w-full flex-col justify-between bg-uiWhite"
      id="Badges"
    >
      <div
        className={`mt-[200px] flex w-full flex-col items-center ${inView ? 'appear' : ''} fade-in`}
      >
        <div className="screen-heading">
          <span>{copy.sections.badgesTitle[locale]}</span>
        </div>
        <div className="screen-sub-heading">
          <span>{copy.sections.badgesSubtitle[locale]}</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#24263C] px-0 py-20">
        <div className={`flex items-center gap-2 px-3 ${inView ? 'appear' : ''} fade-in`}>
          <button
            className="h-10 w-10 rounded-full bg-darkOrange text-2xl leading-none text-uiWhite transition hover:bg-uiWhite hover:text-darkOrange disabled:cursor-not-allowed disabled:opacity-60"
            onClick={scrollPrev}
            type="button"
            aria-label="Previous badges"
            disabled={!canScrollPrev}
          >
            ‹
          </button>

          <div className="w-full overflow-hidden" ref={emblaRef} aria-label="Badges carousel">
            <div className="flex">
              {badgesData.badges.map((badge) => (
                <div className="flex shrink-0 basis-full justify-center min-[550px]:basis-1/2 min-[768px]:basis-1/3 min-[1200px]:basis-1/4" key={badge.assertion}>
                  <Badge {...badge} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="h-10 w-10 rounded-full bg-darkOrange text-2xl leading-none text-uiWhite transition hover:bg-uiWhite hover:text-darkOrange disabled:cursor-not-allowed disabled:opacity-60"
            onClick={scrollNext}
            type="button"
            aria-label="Next badges"
            disabled={!canScrollNext}
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2" aria-label="Badges pagination">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to badges page ${index + 1}`}
              className={`h-3 w-3 rounded-full border-2 ${
                index === selectedIndex
                  ? 'border-darkOrange bg-darkOrange'
                  : 'border-uiWhite bg-transparent'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Badges
