import Link from 'next/link'
import React from 'react'
import { copy } from '../content/i18n'
import { Locale, localePath } from '../lib/i18n'

const highlights = {
  en: [
    '4+ years building large-scale Web Systems',
    'Expertise in event-driven & microservices architectures',
    'Implemented CI/CD pipelines with GitHub Actions',
    'Generative AI integration and agents orchestration',
    'Proficient in SQL & NoSQL database design and optimization',
    'Machine learning research experience with Deep Learning',
    'Leading FullStack development teams'
  ],
  es: [
    '+4 años desarrollando Sistemas Web a gran escala',
    'Experto en arquitecturas orientadas a eventos y microservicios',
    'Implementación de pipelines CI/CD con GitHub Actions',
    'Integración de IA generativa y orquestación de agentes',
    'Diseño y optimización de bases de datos SQL y NoSQL',
    'Experiencia como investigador ML',
    'Liderazgo en equipos de desarrollo FullStack'
  ]
}

const AboutMe = ({ locale }: { locale: Locale }) => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center py-24"
      id="AboutMe"
    >
      <div className="w-full max-w-[1100px] px-5 fade-in appear">
        {/* Section heading */}
        <div className="mb-12 flex flex-col items-center">
          <h2 className="font-fraunces text-4xl text-slate-50">{copy.sections.aboutTitle[locale]}</h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-jakarta">{copy.sections.aboutSubtitle[locale]}</p>
          <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </div>

        {/* Card */}
        <div className="glass glass-hover flex w-full overflow-hidden rounded-3xl">
          {/* Left — image */}
          <div
            className="hidden w-2/5 min-h-[400px] bg-[url('/assets/home/aboutMe.jpeg')] bg-cover bg-[position:25%] bg-no-repeat lg:block"
            aria-hidden="true"
          />
          {/* Right — content */}
          <div className="w-full p-8 font-jakarta lg:w-3/5 xl:p-12">
            <p className="text-sm leading-relaxed text-slate-300">
              {locale === 'en' ? (
                <>
                  I&apos;m a <strong className="font-semibold text-slate-100">Semi-Senior Software Engineer</strong>, with
                  over <strong className="font-semibold text-slate-100">4 years of experience</strong> delivering
                  large-scale web applications. Expert in designing monolithic,
                  event-driven, and microservice architectures using{' '}
                  <strong className="font-semibold text-slate-100">Node.js</strong> and <strong className="font-semibold text-slate-100">Python</strong> on the
                  backend, and <strong className="font-semibold text-slate-100">React.js</strong> &{' '}
                  <strong className="font-semibold text-slate-100">Angular</strong> on the frontend. I&apos;ve built and
                  scaled <strong className="font-semibold text-slate-100">distributed event-processing pipelines</strong>{' '}
                  with <strong className="font-semibold text-slate-100">Bull</strong>, <strong className="font-semibold text-slate-100">n8n</strong>, and{' '}
                  <strong className="font-semibold text-slate-100">NestJS</strong> and automated cloud infrastructure on{' '}
                  <strong className="font-semibold text-slate-100">Azure</strong> and <strong className="font-semibold text-slate-100">GCP</strong> with{' '}
                  <strong className="font-semibold text-slate-100">Terraform</strong> and DevOps pipelines. Currently leading full-stack development at{' '}
                  <a
                    className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                    href="https://www.empatia.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EmpatIA
                  </a>.
                </>
              ) : (
                <>
                  Soy un <strong className="font-semibold text-slate-100">Ingeniero de Software Semi-Senior</strong>, con
                  más de <strong className="font-semibold text-slate-100">4 años de experiencia</strong> desarrollando
                  aplicaciones web a gran escala. Experto en arquitecturas monolíticas, orientadas a eventos y de
                  microservicios con <strong className="font-semibold text-slate-100">Node.js</strong>,{' '}
                  <strong className="font-semibold text-slate-100">Python</strong>,{' '}
                  <strong className="font-semibold text-slate-100">React.js</strong> y{' '}
                  <strong className="font-semibold text-slate-100">Angular</strong>. He construido pipelines distribuidos con{' '}
                  <strong className="font-semibold text-slate-100">Bull</strong>, <strong className="font-semibold text-slate-100">n8n</strong> y{' '}
                  <strong className="font-semibold text-slate-100">NestJS</strong>, y automatizado infraestructura en{' '}
                  <strong className="font-semibold text-slate-100">Azure</strong> y{' '}
                  <strong className="font-semibold text-slate-100">GCP</strong> con Terraform. Actualmente lidero el desarrollo FullStack en{' '}
                  <a
                    className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                    href="https://www.empatia.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EmpatIA
                  </a>.
                </>
              )}
            </p>

            {/* Highlights */}
            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">
                {locale === 'en' ? 'Highlights' : 'Destacados'}
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {highlights[locale].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={localePath(locale, '#ContactMe')}
                className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 font-jakarta text-sm font-medium text-slate-200 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                {copy.sections.contactButton[locale]}
              </Link>
              <Link
                href={
                  locale === 'en'
                    ? '/assets/home/CV-AlejoTorres-EN.pdf'
                    : '/assets/home/CV-AlejoTorres-ES.pdf'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-500 px-6 py-2.5 font-jakarta text-sm font-semibold text-bgDeep shadow-[0_8px_20px_-8px_rgba(52,211,153,0.45)] transition-all duration-300 hover:bg-emerald-400"
              >
                {copy.sections.resumeButton[locale]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

  return (
    <section
      className="-mt-1 mb-12 flex w-full flex-col items-center justify-center bg-[#f7f8fc] pt-6"
      id="AboutMe"
    >
      <div className="w-[88%] max-w-[1000px] lg:w-[70%] fade-in appear">
        <div className="heading-container">
          <div className="screen-heading">
            <span>{copy.sections.aboutTitle[locale]}</span>
          </div>
          <div className="screen-sub-heading">
            <span>{copy.sections.aboutSubtitle[locale]}</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex w-full overflow-hidden rounded-[26px] border border-[#1f2235]/10 bg-white shadow-[0_30px_60px_-45px_#1f2235]">
          <div className="hidden w-1/2 bg-[url('/assets/home/aboutMe.jpeg')] bg-cover bg-[position:25%] bg-no-repeat lg:block"></div>
          <div className="w-full p-8 text-justify lg:w-[48%]">
            <span className="text-[13px] font-[450]">
              {locale === 'en' ? (
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
                  Design. Currently, I’m leading full-stack development at
                  <a
                    className="ml-1 font-bold text-[#1f2235] transition-colors hover:text-darkOrange"
                    href="https://www.empatia.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  de equipos. Actualmente lidero el desarrollo FullStack en
                  <a
                    className="ml-1 font-bold text-[#1f2235] transition-colors hover:text-darkOrange"
                    href="https://www.empatia.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EmpatIA
                  </a>
                  . Busco nuevos desafíos para seguir aprendiendo y creciendo en
                  la industria.
                </>
              )}
            </span>

            <div className="my-16">
              <div className="mb-4">
                <span>
                  {locale === 'en'
                    ? 'Here are a Few Highlights:'
                    : 'Algunas cosas a destacar:'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? '4+ years building large-scale Web Systems'
                    : '+4 años desarrollando Sistemas Web a gran escala'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Expertise in event-driven & microservices architectures'
                    : 'Experto en arquitecturas orientadas a eventos y microservicios'}
                </span>
              </div>
              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Implemented CI/CD pipelines with GitHub Actions'
                    : 'Implementación de pipelines CI/CD con GitHub Actions'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Generative AI integration and agents orchestration'
                    : 'Integración de IA generativa y orquestación de agentes'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Proficient in SQL & NoSQL database design and optimization'
                    : 'Diseño y optimización de bases de datos SQL y NoSQL'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Machine learning research experience with Deep Learning'
                    : 'Experiencia como investigador ML'}
                </span>
              </div>

              <div className="mb-2.5 flex items-center text-[13px] font-[450]">
                <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-darkOrange"></div>
                <span>
                  {locale === 'en'
                    ? 'Leading FullStack development teams'
                    : 'Liderazgo en equipos de desarrollo FullStack'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={localePath(locale, '#ContactMe')}
                className="w-full rounded-[50px] border-2 border-[linen] bg-[#1f2235] py-3.5 text-center font-poppins-semibold text-xs text-uiWhite transition hover:border-darkOrange hover:text-[#f0f8ff] sm:w-[160px]"
              >
                {copy.sections.contactButton[locale]}
              </Link>
              <Link
                href={
                  locale === 'en'
                    ? '/assets/home/CV-AlejoTorres-EN.pdf'
                    : '/assets/home/CV-AlejoTorres-ES.pdf'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-[50px] border-2 border-darkOrange bg-darkOrange py-3.5 font-poppins-semibold text-xs text-uiWhite transition hover:bg-[#fff8dc] hover:text-[#111] sm:w-[160px]"
              >
                {copy.sections.resumeButton[locale]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
