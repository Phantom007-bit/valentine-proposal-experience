'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FeatureArticle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-auto bg-gradient-to-b from-amber-50 via-cream to-rose-50 flex items-center justify-center p-4 md:p-8">
      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-2xl md:text-4xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() * 0.3 + 0.05,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main Article Container */}
      <article
        className={`relative z-10 max-w-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Magazine-style header */}
        <div className="mb-12 border-b-4 border-pink-500 pb-8">
          <p className="text-pink-500 font-semibold tracking-widest mb-4 font-inter">
            VALENTINE'S DAY FEATURE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-pink-900 mb-4 text-balance leading-tight">
            World's Best Girlfriend Named Official Valentine
          </h1>
          <p className="text-lg md:text-xl text-pink-700 font-inter italic">
            After careful review, [Boyfriend Name] has selected [Girlfriend Name] to be his Valentine — again.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Main Article Text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-pink-900 leading-relaxed font-inter">
              In a stunning decision that surprised absolutely no one, [Boyfriend Name] has officially declared [Girlfriend Name] as his Valentine for the year. The announcement comes after extensive deliberation and what sources close to the situation describe as "the easiest decision of his life."
            </p>

            <p className="text-lg text-pink-900 leading-relaxed font-inter">
              When asked about the selection process, [Boyfriend Name] stated: "She's funny, kind, beautiful, and somehow still puts up with me. It was unanimous." Colleagues and friends have reported that this is, in fact, the third consecutive year of this decision, raising questions about whether there's even a decision process at all.
            </p>

            <p className="text-lg text-pink-900 leading-relaxed font-inter">
              "It's official," [Boyfriend Name] concluded. "You're stuck with me. Forever. No takebacks."
            </p>

            {/* Footer Date */}
            <div className="pt-8 border-t-2 border-pink-200">
              <p className="text-pink-600 font-playfair text-2xl">
                February 14. Forever yours.
              </p>
            </div>
          </div>

          {/* Polaroid Image Placeholder */}
          <div className="md:col-span-1">
            <div className="relative">
              {/* Polaroid Frame */}
              <div className="bg-white rounded-sm shadow-2xl p-4 pb-12 transform rotate-3 hover:rotate-2 transition-transform duration-300">
                <div className="relative aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-sm mb-4 overflow-hidden border-2 border-pink-200">
                  <Image
                    src="/photo.jpg"
                    alt="Us, Forever"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-pink-700 font-playfair text-sm italic">
                  Us, Forever
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 text-pink-300 text-3xl opacity-70">
                ♥
              </div>
              <div className="absolute -bottom-2 -left-2 text-pink-200 text-4xl opacity-50">
                ♥
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
