import React from 'react'

const Proyects: React.FunctionComponent<object> = () => {
  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container">
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>Personal Portfolio Website</span>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>Technologies Used: Nextjs,ReactJs,Typescript,vanilla CSS </span>
          </div>
          <div className="resume-heading-description">
            <span>A personal web portfolio to showcase all my details and projects at one place. Using SSR for faster load times.
            </span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>Codify</span>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>Technologies Used: Vite,ReactJs,TailwindCSS,Redux</span>
          </div>
          <div className="resume-heading-description">
            <span>an easy to use, real time HTML + CSS + JS code playground, inspired by liveweave. Codify is a live editor for HTML,CSS AND JS allowing you to edit your code in real-time, and see your results instantly,</span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>Chat.io</span>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>Technologies Used: NodeJs,Express,MondoDB,SocketIO,Vite,React,TailwindCSS</span>
          </div>
          <div className="resume-heading-description">
            <span>A Fullstack webSocket-based WhatsApp clone. The Core concept here revolves around WebSocket, instead of the classic server polling architecture, using an event-based communication allows for (almost) real-time communication between the server and our clients, who will listen and react to the changes. The frontEnd client is inspired on WhatsApp web</span>
          </div>
        </div>
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>Maze Exploration Deep Q Learning AI Model</span>
            <div className="heading-date">2022-2022</div>
          </div>
          <div className="resume-sub-heading">
            <span>Technologies Used: Python,Keras,MLFlow</span>
          </div>
          <div className="resume-heading-description">
            <span>A simplified test environment for the Webots simulator,a DeepQ learning Model and a Random Map Generator for it to be trained on, registring all progress in a MLFlow Server</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Proyects
