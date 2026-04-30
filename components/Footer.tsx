import React from 'react'

const Footer: React.FunctionComponent<object> = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full pb-8 pt-4">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
        <p className="mt-6 text-center font-jakarta text-xs text-slate-600">
          © {year} Alejo Torres
        </p>
      </div>
    </footer>
  )
}

export default Footer
