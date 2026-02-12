'use client'

import { useState, useRef } from 'react'
import Confetti from '@/components/confetti'
import MemoryFeed from '@/components/memory-feed'
import ProposalCard from '@/components/proposal-card'
import FeatureArticle from '@/components/feature-article'

export default function ProposalPage() {
  const [phase, setPhase] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleYes = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setPhase(2)
    }, 1500)
  }

  const handleNo = () => {
    const noButton = document.getElementById('no-button')
    if (noButton) {
      const randomX = Math.random() * 100 - 50
      const randomY = Math.random() * 50 - 25
      noButton.style.transform = `translate(${randomX}px, ${randomY}px)`
    }
  }

  return (
    <main
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-pink-50 to-red-50"
    >
      {showConfetti && <Confetti />}

      {phase === 0 && (
        <MemoryFeed onComplete={() => setPhase(1)} />
      )}

      {phase === 1 && (
        <ProposalCard onYes={handleYes} onNo={handleNo} />
      )}

      {phase === 2 && (
        <FeatureArticle />
      )}
    </main>
  )
}
