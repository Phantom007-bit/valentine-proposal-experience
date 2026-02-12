'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface MemoryFeedProps {
  onComplete: () => void
}

export default function MemoryFeed({ onComplete }: MemoryFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const memories = [
    { caption: 'Our first coffee', image: 'us1.jpg' },
    { caption: 'That sunset', image: 'us2.jpg' },
    { caption: 'You + me', image: 'us3.jpg' },
    { caption: 'Forever starts now', image: 'us4.jpg' },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0 && currentIndex < memories.length) {
        const nextIndex = currentIndex + 1
        setCurrentIndex(nextIndex)
        if (nextIndex >= memories.length) {
          setTimeout(() => {
            onComplete()
          }, 800)
        }
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentIndex, memories.length, onComplete])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Memory Cards */}
      <div className="relative w-full h-full">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
              index < currentIndex ? '-translate-y-full opacity-0' : ''
            } ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-amber-50 p-8">
              {/* Image Placeholder */}
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl shadow-2xl mb-8 border-8 border-white overflow-hidden relative">
                <Image
                  src={`/${memory.image}`}
                  alt={memory.caption}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              </div>

              {/* Caption */}
              <p className="text-3xl md:text-4xl font-playfair text-pink-900 text-center text-pretty max-w-md">
                {memory.caption}
              </p>

              {/* Down Arrow for last memory */}
              {index === memories.length - 1 && (
                <div className="absolute bottom-8 animate-bounce">
                  <ChevronDown className="w-8 h-8 text-pink-500" />
                </div>
              )}

              {/* "One more thing" Card */}
              {index === memories.length - 1 && (
                <p className="absolute bottom-20 text-center text-pink-600 text-sm font-medium">
                  One more thing…
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Final "One More Thing" Card */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out flex items-center justify-center bg-gradient-to-b from-red-50 to-pink-50 ${
          currentIndex >= memories.length ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-playfair text-pink-900 mb-6 text-pretty">
            One more thing…
          </p>
          <div className="animate-bounce">
            <ChevronDown className="w-10 h-10 text-pink-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Heart Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500 text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
            }}
          >
            ♥
          </div>
        ))}
      </div>
    </div>
  )
}
