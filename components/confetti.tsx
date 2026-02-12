'use client'

import { useEffect, useRef } from 'react'

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      color: string
      rotation: number
      rotationSpeed: number
    }

    const particles: Particle[] = []
    const colors = ['#ec4899', '#f43f5e', '#fbbf24', '#fca5a5', '#ddd6fe', '#ffffff']

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 100,
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 1) * 15 - 5,
        life: 1,
        maxLife: 1,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      })
    }

    // Add heart-shaped particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 100,
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 1) * 12 - 3,
        life: 1,
        maxLife: 1,
        size: Math.random() * 20 + 15,
        color: 'heart',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let anyAlive = false

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.2 // gravity
        p.life -= 0.015
        p.rotation += p.rotationSpeed

        if (p.life > 0) {
          anyAlive = true
          ctx.globalAlpha = Math.max(0, p.life)

          if (p.color === 'heart') {
            drawHeart(ctx, p.x, p.y, p.size * (p.life / p.maxLife), '#ec4899', p.rotation)
          } else {
            ctx.save()
            ctx.translate(p.x, p.y)
            ctx.rotate(p.rotation)
            ctx.fillStyle = p.color
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
            ctx.restore()
          }
        }
      }

      ctx.globalAlpha = 1

      if (anyAlive) {
        requestAnimationFrame(animate)
      }
    }

    const drawHeart = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.bezierCurveTo(-size / 2, -size, -size / 2, -size / 3, 0, 0)
      ctx.bezierCurveTo(size / 2, -size / 3, size / 2, -size, 0, -size / 2)
      ctx.fill()
      ctx.restore()
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}
