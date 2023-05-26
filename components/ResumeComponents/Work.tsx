import React, { useContext } from 'react'
import { ILanguageContextType } from '../../@types/language.d.types'
import { LanguageContext } from '../../context/LanguageContextProvider'

const Work: React.FunctionComponent<object> = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="resume-details-carousal">
      <div className="experience-container">
        <div className="resume-heading">
        <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'FullStack Developer'
                : 'Desarrollador FullStack'}
            </span>
            <div className="heading-date"> {language.name === 'en' ? 'Apr' : 'Abr'} - {language.name === 'en' ? 'Present' : 'Presente'}</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              <a className="link" href="https://www.altostratus.es/">
                Altostratus Cloud Consulting, Madrid,  {language.name === 'en' ? 'Spain' : 'España'}{' '}
              </a>
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Developed end-to-end solutions leveraging the power of GCP'
                : 'Desarrollo de soluciones end-to-end aprovechando el poder de la nube'}
            </span>
          </div>
          <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Professional Cloud Developer formation'
              : 'Capacitacíon para la certificacion Professional Cloud Developer'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Developing and deploying applications on Google Cloud Platform using Go and FastAPI'
              : 'Desarrollo y despliegue de applicaciones en Google Cloud Platform usando Go y FastAPI'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Developing and deploying applications on Google Cloud Platform using NodeJs'
              : 'Desarrollo y despliegue de applicaciones en Google Cloud Platform usando NodeJs'}
            <br />
          </span>
        </div>
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Software Developer'
                : 'Desarrollador de Software'}
            </span>
            <div className="heading-date">2022-2023</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              <a className="link" href="https://silentiumapps.com/es/">
                Silentium Apps, Salta, Argentina{' '}
              </a>
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Designed Data Models, defined Business Rules and implemented robust and scalable APIs'
                : 'Diseño de Modelos de Datos, definicion de reglas de negocio e implementacion de APIs robustas y escalables'}
            </span>
          </div>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Participation as an active Backend Developer'
              : 'Participar como miembro activo del área de Backend'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Object-Oriented Programming Paradigm Training'
              : 'Entrenamiento en el Paradigma Orientado a Objetos'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Learning and in-depth research of Nest.Js and .NET frameworks'
              : 'Investigar y aprender sobre desarrollo Backend en Nest.js y .NET'}
            <br />-{' '}
            {language.name === 'en'
              ? 'Learning and in-depth research of Angular framework'
              : 'Investigar y aprender sobre desarrollo Frontend en Angular'}
            <br />
          </span>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Machine Learning Researcher'
                : 'Investigador de Machine Learning'}
            </span>
            <div className="heading-date">
              2022 - 2022
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              Instituto de Innovacion y Tecnologia Aplicada{' '}
              <a className="link" href="https://iita.com.ar/">
                (IITA)
              </a>
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Developed a Deep-Q learning agent used for maze exploration at Robocup Competition'
                : 'Desarrollo de un agente de Deep-Q learning para ser usado para explorar laberintos en Robocup'}
            </span>
          </div>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Research and document AI models'
              : 'Investigar y Documentar Modelos de Inteligencia Artificial'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Develop a simplified testing environment for AI models'
              : 'Desarrollar un entorno simplificado de pruebas'}{' '}
            <br />-{' '}
            {language.name === 'en'
              ? 'Develop a Deep-Q Learning Model'
              : 'Desarrollo de un Modelo de Deep-Q Learning'}
            <br />-{' '}
            {language.name === 'en'
              ? 'Record the learning process and tune hyperparameters using Google Cloud Compute Engine + MLFlow'
              : 'Registrar el proceso de aprendizaje y modificar hiper parametros usando Google Cloud Compute Engine + MLFlow'}
            <br />
          </span>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Developer and Technical support'
                : 'Desarrollador y Soporte Tecnico'}
            </span>
            <div className="heading-date">2021 - 2021</div>
          </div>
          <div className="resume-sub-heading">
            <span>
              <a className="link" href="http://digio.com.ar/">
                Digio
              </a>{' '}
              SRL
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Developed Web-based systems using ASP.NET framework and Genexus11'
                : 'Desarrollo de Sistemas Web basados en ASP.NET y Genexus11'}
            </span>
          </div>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Developing and maintaining existing systems using ASP.NET and Genexus11'
              : 'Desarrollando y manteniendo sistemas existentes usando ASP.NET y Genexus11'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Technical support over production systems'
              : 'Soporte Tecnico sobre sistemas de produccion'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Documentation of solutions and customer service processes'
              : 'Documentacion de soluciones y procesos de servicio al cliente'}
          </span>
          <br />
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Student Researcher'
                : 'Alumno Investigador'}
            </span>
            <div className="heading-date">
              2021-{language.name === 'en' ? 'Present' : 'Presente'}
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              {language.name === 'en'
                ? 'Engineering Faculty at'
                : 'Facultad de Ingeniería en'}{' '}
              <a className="link" href="https://www.ucasal.edu.ar/">
                UCASAL
              </a>
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Digital Forensics and Research'
                : 'Forensia digital e Ingeniería'}
            </span>
          </div>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Participate in the development of KeyWordFinder using electron.js & Vue.js'
              : 'Participación en el desarrollo del software KeyWordFinder usando los frameworks electron.js & Vue.js'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Record progress and prepare weekly reports'
              : 'Registro de progreso y preparación de reportes semanales'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Investigate possible implementation improvements following the work plan'
              : 'Investigar posibles mejoras de implementación seguindo el plan de trabajo'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Investigate and lecture on '
              : 'Investigar y disertar sobre '}
            <strong>
              {language.name === 'en'
                ? '"Privacy and Security in the Metaverses"'
                : '"La privacidad y Seguridad en los Metaversos"'}
            </strong>
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'research and elaboration of "Protection, Security, and Privacy of data in the Metaverses" paper for the '
              : ' Presentación del trabajo de investigación "Protección, Seguridad y Privacidad de los datos en los Metaversos" en el '}
            <strong>
              {language.name === 'en'
                ? 'XII CIDDI 2022 and III JEI 2022'
                : 'XII CIDDI 2022 y III JEI 2022'}
            </strong>
          </span>
          <br />
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>
              {language.name === 'en'
                ? 'Python Programming Tutor'
                : 'Profesor de Programación en Python'}
            </span>
            <div className="heading-date">
              2021 - 2022
            </div>
          </div>
          <div className="resume-sub-heading">
            <span>
              Instituto de Innovacion y Tecnologia Aplicada{' '}
              <a className="link" href="https://iita.com.ar/">
                (IITA)
              </a>
            </span>
          </div>
          <div className="resume-heading-description">
            <span>
              {language.name === 'en'
                ? 'Prepared Lectures and Dictated several courses instances'
                : 'Preparado de Clases y dictado de varios cursos'}
            </span>
          </div>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Prepare, teach and correct the weekly course activities'
              : 'Preparar, dictar y corregir las actividades semanales del curso'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Assist and develop empathy with students to encourage a active participation'
              : 'Ayudar y desarrollar la empatía con los estudiantes para favorecer una participación activa'}
          </span>
          <br />
          <span className="resume-description-text">
            -{' '}
            {language.name === 'en'
              ? 'Keep track of student progress for presentation to superiors'
              : 'Seguimiento del progreso de los estudiantes para presentación a superiores'}
          </span>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Work
