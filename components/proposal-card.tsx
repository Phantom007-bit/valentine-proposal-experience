'use client'

import { useEffect, useState } from 'react'

interface ProposalCardProps {
  onYes: () => void
  onNo: () => void
}

export default function ProposalCard({ onYes, onNo }: ProposalCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-red-50">
      {/* Animated Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 text-4xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div
        className={`relative z-10 text-center px-6 md:px-12 max-w-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-playfair text-pink-900 mb-8 text-pretty leading-tight">
          Will you be my Valentine?
        </h1>

        <p className="text-lg md:text-xl text-pink-700 mb-12 font-inter">
          (This time forever? 💕)
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* YES Button */}
          <button
            onClick={onYes}
            className="relative px-12 py-4 md:py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl md:text-2xl font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer font-inter"
          >
            YES ♥
          </button>

          {/* NO Button - Playful escape */}
          <button
            id="no-button"
            onClick={onNo}
            className="relative px-8 py-3 md:py-4 bg-gray-300 text-gray-700 text-lg md:text-xl font-medium rounded-full shadow-md transition-all duration-200 hover:bg-gray-400 cursor-pointer font-inter"
            style={{ transitionProperty: 'transform' }}
          >
            No thanks
          </button>
        </div>

        {/* Floating elements */}
        <div className="mt-16 space-y-4 text-pink-400 text-2xl">
          <p>💝</p>
          <p>💐</p>
        </div>
      </div>
    </div>
  )
}
