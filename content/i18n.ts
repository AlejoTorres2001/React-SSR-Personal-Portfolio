export type Locale = 'en' | 'es'

export const copy = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About Me', es: 'Sobre mí' },
    resume: { en: 'Resume', es: 'Trayectoria' },
    badges: { en: 'Badges', es: 'Premios' },
    projects: { en: 'Projects', es: 'Proyectos' },
    contact: { en: 'Contact Me', es: 'Contáctame' }
  },
  sections: {
    aboutTitle: { en: 'About Me', es: 'Sobre mí' },
    aboutSubtitle: { en: 'A Brief Overview', es: 'Una breve descripción' },
    badgesTitle: { en: 'Badges', es: 'Premios' },
    badgesSubtitle: {
      en: 'Workshops, Hackathons, and Challenges',
      es: 'Workshops, hackathons y desafíos'
    },
    contactTitle: { en: 'Contact Me', es: 'Contáctame' },
    contactSubtitle: { en: "Let's Keep in Touch", es: 'Mantengámonos en contacto' },
    contactHeading: { en: 'Get in Touch 📧', es: 'Ponte en contacto 📧' },
    contactFormHeading: { en: 'Send Your Email Here!', es: '¡Envía tu email aquí!' },
    contactName: { en: 'Name', es: 'Nombre' },
    contactMessage: { en: 'Message', es: 'Mensaje' },
    contactSend: { en: 'Send', es: 'Enviar' },
    contactSending: { en: 'Sending...', es: 'Enviando...' },
    contactButton: { en: 'Contact Me', es: 'Contáctame' },
    resumeButton: { en: 'Get Resume', es: 'Descargar CV' },
    moreProjects: { en: 'More Projects', es: 'Más Proyectos' }
  }
} as const

export const toLocale = (languageName: string): Locale =>
  languageName === 'es' ? 'es' : 'en'
