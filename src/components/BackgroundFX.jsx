import { useEffect, useRef } from 'react'

// Subtle interactive gradient orbs background using canvas
export default function BackgroundFX(){
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let dpr = window.devicePixelRatio || 1
    let raf

    const orbs = Array.from({ length: 6 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 120 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      hue: 200 + i * 30,
    }))

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    const render = (t=0) => {
      const { width, height } = canvas
      ctx.clearRect(0,0,width,height)
      ctx.globalCompositeOperation = 'lighter'
      orbs.forEach(o => {
        o.x += o.vx
        o.y += o.vy
        if(o.x < 0 || o.x > 1) o.vx *= -1
        if(o.y < 0 || o.y > 1) o.vy *= -1
        const cx = o.x * width
        const cy = o.y * height
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, o.r * dpr)
        grad.addColorStop(0, `hsla(${o.hue}, 95%, 60%, 0.10)`)
        grad.addColorStop(1, `hsla(${o.hue + 40}, 95%, 60%, 0.0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, o.r * dpr, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <canvas ref={ref} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/80" />
    </div>
  )
}
