import { motion } from 'framer-motion'
import { Bolt, Sparkles, Command, Boxes, Layers, Wand2 } from 'lucide-react'

const features = [
  { icon: Wand2, title: 'Instant UI Assembly', desc: 'Drop in mockups and get production components with clean structure.' },
  { icon: Bolt, title: 'Real‑time Compiler', desc: 'See edits ripple through your system with zero latency.' },
  { icon: Boxes, title: 'Design Tokens', desc: 'Autogenerate tokens and variants across dark/light palettes.' },
  { icon: Layers, title: 'Smart Layouts', desc: 'Fluid grid and stack primitives with responsive presets.' },
  { icon: Command, title: 'Command Surface', desc: 'One palette to create, refactor, and orchestrate flows.' },
  { icon: Sparkles, title: 'Cinematic Motion', desc: 'Micro‑interactions with physics‑based polish, by default.' },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-[rgb(10,11,15)]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-semibold text-white tracking-tight text-center"
        >
          Designed for design engineers
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ rotateX: 6, rotateY: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur will-change-transform [transform-style:preserve-3d]"
              style={{ perspective: 1000 }}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-400/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <f.icon className="h-6 w-6 text-sky-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
