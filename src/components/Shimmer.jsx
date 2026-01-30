import React from 'react'

const Shimmer = () => {
  return (
    <div>
          <div className="flex gap-4 overflow-x-scroll mt-6 justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-48 h-72 bg-gray-700 animate-pulse rounded-lg"
        />
      ))}
    </div>

    </div>
  )
}

export default Shimmer
