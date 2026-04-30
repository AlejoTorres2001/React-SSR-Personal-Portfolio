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
