import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'It feels like having a motion designer, frontend engineer, and design system architect in one. We ship at movie‑trailer quality now.',
    name: 'Avery Lin',
    role: 'Design Engineer, Nova',
  },
  {
    quote:
      'From Figma frames to production in a day. The code reads like we wrote it ourselves — but better.',
    name: 'Jules Kramer',
    role: 'Founder, Pixelpilot',
  },
  {
    quote:
      'The interactions are unreal. Our marketing site looks like a flagship product experience.',
    name: 'Samir Patel',
    role: 'Head of Design, Helix',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[rgb(10,11,15)]">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(148,163,184,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-semibold text-white tracking-tight text-center"
        >
          Loved by creative teams
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-400/10 to-fuchsia-500/10" />
              <div className="relative">
                <p className="text-slate-100/95">“{t.quote}”</p>
                <div className="mt-6 text-sm text-slate-300">
                  <span className="font-medium text-white">{t.name}</span>
                  <span className="opacity-70"> — {t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
