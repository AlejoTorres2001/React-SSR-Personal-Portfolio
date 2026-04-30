import React from 'react'

const LoadingBar: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center py-5">
      <div className="relative h-1 w-full overflow-hidden rounded bg-white/[0.06]">
        <div className="absolute h-full w-[30%] animate-[loading_1.5s_infinite_ease-in-out] rounded bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
      </div>
    </div>
  )
}

export default LoadingBar
