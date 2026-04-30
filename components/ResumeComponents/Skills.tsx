import React from 'react'

type Skill = { name: string; level: number }

const skills: Skill[] = [
  { name: 'Node.js / TypeScript', level: 95 },
  { name: 'NestJS / Express', level: 92 },
  { name: 'React.js / Next.js', level: 90 },
  { name: 'Python (Pandas, TensorFlow, PyTorch)', level: 85 },
  { name: 'SQL / Database Design', level: 85 },
  { name: 'Git / CI-CD / DevOps Pipelines', level: 90 },
  { name: 'HTML5 / CSS3', level: 92 },
  { name: 'Azure / GCP', level: 78 },
  { name: 'Terraform / IaC', level: 80 },
  { name: 'Distributed Systems (Bull, n8n)', level: 85 },
  { name: 'Angular', level: 80 },
  { name: 'Docker / Kubernetes', level: 78 }
]

const Skills: React.FunctionComponent<object> = () => {
  return (
    <div className="animate-[fadeInAnimation_0.4s_ease]">
      <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-jakarta text-sm font-medium text-slate-200">{skill.name}</span>
              <span className="font-jakarta text-xs text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-700/60">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Skills)
