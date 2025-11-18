import { motion, useMotionValue, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles, Play, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

function LiquidCTA() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const ref = useRef(null)

  function onMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const mx = e.clientX - rect.left - rect.width / 2
    const my = e.clientY - rect.top - rect.height / 2
    x.set(mx * 0.2)
    y.set(my * 0.2)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 shadow-[0_10px_30px_rgba(99,102,241,0.35)] focus:outline-none"
    >
      <motion.span style={{ x: springX, y: springY }} className="relative z-10 flex items-center gap-2">
        <Play className="w-4 h-4" />
        Watch Demo
      </motion.span>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-white/10 to-white/0 blur-2xl" />
      </span>
    </motion.button>
  )
}

export default function Hero() {
  useEffect(() => {
    const root = document.documentElement
    const interval = setInterval(() => {
      root.style.setProperty('--accent-hue', String((Date.now() / 50) % 360))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,10,14,0.35)] via-[rgba(8,10,14,0.5)] to-[rgba(8,10,14,0.85)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md text-white"
        >
          <Sparkles className="h-4 w-4 text-sky-300" />
          <span className="text-xs tracking-wide uppercase">Creative Automation for Frontends</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-[0.95] font-semibold tracking-tight text-white"
        >
          Turn product mockups into production-ready UI in seconds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300"
        >
          A next‑gen platform where design engineers and creative teams compose, animate, and ship ultra‑polished interfaces — instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <LiquidCTA />
          <a href="#pricing" className="group inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
            See Pricing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(10,11,15)] pointer-events-none" />
    </section>
  )
}
