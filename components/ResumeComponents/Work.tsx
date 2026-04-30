'use client'
import React from 'react'
import { Locale } from '../../lib/i18n'

const Work = ({ locale }: { locale: Locale }) => {
  const t = (en: string, es: string) => (locale === 'en' ? en : es)

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div>

        {/* EmpatIA */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('FullStack Tech Leader', 'Líder Técnico FullStack')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">{t('Aug 2024', 'Ago 2024')}</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>EmpatIA, Madrid, {t('Spain', 'España')}</span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Leading cloud-native full-stack development on Azure.', 'Liderando desarrollo full-stack nativo en la nube sobre Azure.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Built scalable applications with React.js and NestJS over Azure App Services and AKS.',
              'Desarrollo de aplicaciones escalables con React.js y NestJS sobre Azure App Services y AKS.'
            )}
            <br />- {t(
              'Maintained architecture diagrams and runbooks, reducing onboarding time by 30%.',
              'Mantenimiento de diagramas de arquitectura y runbooks, reduciendo el tiempo de onboarding en un 30%.'
            )}
            <br />- {t(
              'Implemented distributed event-scheduler with Bull queues and Redis.',
              'Implementación de planificador distribuido con Bull queues y Redis.'
            )}
            <br />- {t(
              'Automated infrastructure setup with Azure Pipelines, cutting environment setup time by 50%.',
              'Automatización de infraestructura con Azure Pipelines, reduciendo el tiempo de configuración en un 50%.'
            )}
          </span>
        </div>

        {/* Altostratus */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('FullStack Developer', 'Desarrollador FullStack')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">{t('Apr – Dec 2023', 'Abr – Dic 2023')}</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>
              <a className="font-semibold text-slate-200 transition-colors hover:text-emerald-400" href="https://www.altostratus.es/" target="_blank" rel="noopener noreferrer">
                Altostratus Cloud Consulting, Madrid, {t('Spain', 'España')}
              </a>
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Cloud-native architecture on GCP and frontend systems.', 'Arquitectura cloud en GCP y desarrollo frontend.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Designed distributed data-processing pipelines in Python, improving efficiency by 15%.',
              'Diseño de pipelines de procesamiento distribuido en Python, mejorando eficiencia en un 15%.'
            )}
            <br />- {t(
              'Managed GCP resources with Terraform for secure and cost-efficient deployment.',
              'Gestión de recursos GCP con Terraform para despliegues seguros y eficientes.'
            )}
            <br />- {t(
              'Built CI/CD with Azure DevOps and GitHub Actions, cutting build cycles by 25%.',
              'Implementación de CI/CD con Azure DevOps y GitHub Actions, reduciendo ciclos de build en un 25%.'
            )}
            <br />- {t(
              'Developed UIs with React.js and Angular integrated with REST and GraphQL APIs.',
              'Desarrollo de interfaces con React.js y Angular, integradas con APIs REST y GraphQL.'
            )}
          </span>
        </div>

        {/* Silentium Apps */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('Trainee Developer', 'Desarrollador en Formación')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">{t('Aug – Dec 2022', 'Ago – Dic 2022')}</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>
              <a className="font-semibold text-slate-200 transition-colors hover:text-emerald-400" href="https://silentiumapps.com/es/" target="_blank" rel="noopener noreferrer">
                Silentium Apps, Salta, Argentina
              </a>
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Enhanced backend performance and research in frameworks.', 'Mejora de rendimiento y exploración de frameworks.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Improved backend performance by 20% via refactoring in NestJS and .NET.',
              'Mejora del backend en un 20% mediante refactorización en NestJS y .NET.'
            )}
            <br />- {t(
              'Contributed modules and libraries that improved UX by 15%.',
              'Contribución de módulos que mejoraron la UX en un 15%.'
            )}
            <br />- {t(
              'Collaborated on Angular-based features to enhance usability.',
              'Colaboración en mejoras de usabilidad con Angular.'
            )}
          </span>
        </div>

        {/* IITA */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('Machine Learning Researcher', 'Investigador en Machine Learning')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">{t('Mar – Aug 2022', 'Mar – Ago 2022')}</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>
              Instituto de Innovación y Tecnología Aplicada{' '}
              <a className="font-semibold text-slate-200 transition-colors hover:text-emerald-400" href="https://iita.com.ar/" target="_blank" rel="noopener noreferrer">(IITA)</a>
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Developed Deep Q-learning systems and automated ML pipelines.', 'Desarrollo de sistemas Deep Q-learning y automatización de pipelines ML.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Built ML test environment on GCE using MLFlow, increasing iteration speed by 25%.',
              'Construcción de entorno ML en GCE con MLFlow, mejorando la iteración en un 25%.'
            )}
            <br />- {t(
              'Developed Deep Q-learning agent for Robocup competition with 95% accuracy.',
              'Desarrollo de agente Deep Q-learning con 95% de precisión para Robocup.'
            )}
            <br />- {t(
              'Created technical guides and documentation in Jupyter Notebooks.',
              'Creación de documentación técnica con Jupyter.'
            )}
          </span>
        </div>

        {/* UCASAL */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('Student Researcher', 'Alumno Investigador')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">{t('Aug 21 – Dec 24', 'Ago 21 – Dic 24')}</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>
              {t('Engineering Faculty at', 'Facultad de Ingeniería en')}{' '}
              <a className="font-semibold text-slate-200 transition-colors hover:text-emerald-400" href="https://www.ucasal.edu.ar/" target="_blank" rel="noopener noreferrer">UCASAL</a>
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Digital forensics and metaverse research.', 'Forensia digital e investigación en metaversos.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Developed KeyWordFinder with Electron and Vue.js, improving processing by 20%.',
              'Desarrollo de KeyWordFinder con Electron y Vue.js, mejorando el rendimiento en un 20%.'
            )}
            <br />- {t(
              'Published and presented research on privacy and data protection in metaverses.',
              'Publicación y presentación de investigación sobre privacidad y protección de datos en metaversos.'
            )}
            <br />- {t(
              'Presented at XII CIDDI 2022 and III JEI 2022.',
              'Presentado en el XII CIDDI 2022 y III JEI 2022.'
            )}
          </span>
        </div>

        {/* IITA Tutor */}
        <div className="mb-[30px] flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-lg font-semibold text-emerald-400">{t('Python Programming Tutor', 'Tutor de Programación en Python')}</span>
            <div className="flex h-[27px] w-[120px] items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400">2021 – 2022</div>
          </div>
          <div className="mb-[15px] mt-[-5px] ml-[10px] text-sm text-slate-300">
            <span>
              Instituto de Innovación y Tecnología Aplicada{' '}
              <a className="font-semibold text-slate-200 transition-colors hover:text-emerald-400" href="https://iita.com.ar/" target="_blank" rel="noopener noreferrer">(IITA)</a>
            </span>
          </div>
          <div className="mb-[15px] ml-[15px] mt-[10px] text-justify text-xs leading-relaxed text-slate-400">
            <span>{t('Led weekly lectures and mentored students.', 'Clases semanales y mentoría de alumnos.')}</span>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 max-w-full text-justify">
          <span className="text-xs text-slate-400">
            - {t(
              'Prepared and taught course content, evaluated assignments.',
              'Preparación y dictado de clases, corrección de actividades.'
            )}
            <br />- {t(
              'Fostered student engagement through 1:1 guidance.',
              'Fomento del compromiso estudiantil mediante mentorías.'
            )}
            <br />- {t(
              'Tracked student progress for reporting purposes.',
              'Seguimiento del progreso estudiantil para informes.'
            )}
          </span>
        </div>

      </div>
    </div>
  )
}

export default React.memo(Work)
