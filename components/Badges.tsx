'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Badge from './Badge'
import badgesData from '../badges.json'
import { useInView } from 'react-intersection-observer'
import { copy } from '../content/i18n'
import { Locale } from '../lib/i18n'

const Badges = ({ locale }: { locale: Locale }) => {
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
      className="flex w-full flex-col items-center justify-center py-24"
      id="Badges"
    >
      {/* Section heading */}
      <div className={`mb-12 flex w-full flex-col items-center ${inView ? 'appear' : ''} fade-in`}>
        <h2 className="font-fraunces text-4xl text-slate-50">{copy.sections.badgesTitle[locale]}</h2>
        <p className="mt-2 font-jakarta text-xs uppercase tracking-widest text-slate-400">
          {copy.sections.badgesSubtitle[locale]}
        </p>
        <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      </div>

      <div className={`w-full ${inView ? 'appear' : ''} fade-in`}>
        <div className="flex items-center gap-3 px-4 md:px-8">
          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-emerald-400/30 hover:text-emerald-400 disabled:cursor-not-allowed disabled:opacity-30"
            onClick={scrollPrev}
            type="button"
            aria-label="Previous badges"
            disabled={!canScrollPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="w-full overflow-hidden" ref={emblaRef} aria-label="Badges carousel">
            <div className="flex gap-0">
              {badgesData.badges.map((badge) => (
                <div className="flex shrink-0 basis-full justify-center px-2 min-[550px]:basis-1/2 min-[768px]:basis-1/3 min-[1200px]:basis-1/4" key={badge.assertion}>
                  <Badge {...badge} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-emerald-400/30 hover:text-emerald-400 disabled:cursor-not-allowed disabled:opacity-30"
            onClick={scrollNext}
            type="button"
            aria-label="Next badges"
            disabled={!canScrollNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2" aria-label="Badges pagination">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to badges page ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-6 bg-emerald-400'
                  : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Badges
