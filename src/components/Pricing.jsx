import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    desc: 'For indie builders validating ideas',
    features: ['100 builds/month', 'Basic animations', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$69',
    highlighted: true,
    desc: 'For teams shipping weekly',
    features: ['Unlimited builds', 'Advanced motion', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large orgs with scale needs',
    features: ['SSO & audit logs', 'On‑prem options', 'Dedicated CSM'],
  },
]

function Magnetic({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx)
    y.set(dy)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x, y, rotateX, rotateY }} onMouseMove={onMove} onMouseLeave={onLeave} className="[transform-style:preserve-3d] will-change-transform">
      {children}
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[rgb(10,11,15)]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-white tracking-tight">Pricing that scales with you</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Magnetic key={t.name}>
              <div className={`relative rounded-2xl border p-6 backdrop-blur ${t.highlighted ? 'border-blue-400/30 bg-blue-500/[0.06] shadow-[0_20px_80px_-20px_rgba(59,130,246,0.35)]' : 'border-white/10 bg-white/[0.04]'}`}>
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-400/10 to-fuchsia-500/10" />
                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-white text-lg font-semibold">{t.name}</h3>
                    <span className="text-3xl text-white/90 font-semibold">{t.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/90">{t.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-sky-300" /> {f}
                      </li>
                    ))}
                  </ul>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white py-2.5 font-medium">
                    Get Started
                  </motion.button>
                </div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  )
}
