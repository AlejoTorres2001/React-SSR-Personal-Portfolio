import React from 'react'

const Skills: React.FunctionComponent<object> = () => {
  const skillRowClass = 'relative flex w-full flex-col md:w-[48%]'
  const headingDotClass =
    'absolute -left-[30px] top-[5px] h-[15px] w-[15px] rounded-full bg-darkOrange max-lg:hidden'

  return (
    <div className="animate-[fadeInAnimation_2s]">
      <div className="flex w-full flex-row flex-wrap items-center justify-between gap-y-2">
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Node.js / TypeScript</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">NestJS / Express</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Python (Pandas, TensorFlow, PyTorch)</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">SQL / Database Design</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">React.js / Next.js</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">HTML5 / CSS3</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Terraform / IaC</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Azure / GCP</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '78%' }}></div>
          </div>
        </div>

        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Git / CI-CD / DevOps Pipelines</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className={skillRowClass}>
          <div className={headingDotClass}></div>
          <span className="font-poppins-bold text-base text-darkOrange">Distributed Systems (Bull, n8n)</span>
          <div className="mb-6 mt-1.5 h-[15px] w-[70%] bg-darkOrange">
            <div className="h-[15px] bg-[#1f2235] transition-all duration-700" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Skills)
