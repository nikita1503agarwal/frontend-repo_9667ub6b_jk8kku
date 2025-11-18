import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import DemoReel from './components/DemoReel'
import Features from './components/Features'
import Logos from './components/Logos'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function ThemeShiftBackdrop() {
  const { scrollY } = useScroll()
  const hue = useTransform(scrollY, [0, 1200], [220, 300])
  const opacity = useTransform(scrollY, [0, 500], [0.08, 0.18])
  return (
    <motion.div
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%, hsl(var(--accent-hue,220), 90%, 55%), hsl(calc(var(--accent-hue,220) + 60), 90%, 55%), hsl(calc(var(--accent-hue,220) + 120), 90%, 55%))',
        filter: 'blur(120px)',
        opacity,
      }}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}

export default function App() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-[rgb(10,11,15)] text-slate-200 selection:bg-fuchsia-500/30 selection:text-white">
      <ThemeShiftBackdrop />
      <Hero />
      <DemoReel />
      <Features />
      <Logos />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
