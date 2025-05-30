import React from 'react'

const Skills: React.FunctionComponent<object> = () => {
  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container programming-skills-container">
        {/* Backend & Infrastructure */}
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Node.js / TypeScript</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>NestJS / Express</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Python (Pandas, TensorFlow, PyTorch)</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>SQL / Database Design</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>React.js / Next.js</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>HTML5 / CSS3</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Terraform / IaC</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Azure / GCP</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '78%' }}></div>
          </div>
        </div>

        {/* Tools & Methodologies */}
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Git / CI-CD / DevOps Pipelines</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Distributed Systems (Bull, n8n)</span>
          <div className="skill-percentage">
            <div className="active-percentage-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Skills)
