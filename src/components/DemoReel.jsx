import { motion } from 'framer-motion'
import { Code2, LayoutDashboard } from 'lucide-react'

export default function DemoReel() {
  return (
    <section className="relative py-24 bg-[rgb(10,11,15)]">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-semibold text-white tracking-tight"
            >
              Code to Design, beautifully in sync
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-4 text-slate-300"
            >
              Watch components assemble from abstract blocks into a polished dashboard.
              Build with confidence using live previews and production‑grade code.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950"
          >
            <div className="absolute inset-0 grid grid-cols-2">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="p-6"
              >
                <div className="h-full w-full rounded-xl bg-slate-900/80 border border-white/10 p-5">
                  <div className="flex items-center gap-2 text-sky-300">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs">code.jsx</span>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-slate-300/90 font-mono">
                    <div className="h-2 w-1/2 bg-slate-700/50 rounded" />
                    <div className="h-2 w-2/3 bg-slate-700/50 rounded" />
                    <div className="h-2 w-1/3 bg-slate-700/50 rounded" />
                    <div className="h-2 w-1/2 bg-slate-700/50 rounded" />
                    <div className="h-2 w-2/3 bg-slate-700/50 rounded" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="p-6"
              >
                <div className="h-full w-full rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur">
                  <div className="flex items-center gap-2 text-fuchsia-300">
                    <LayoutDashboard className="w-4 h-4" />
                    <span className="text-xs">preview</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
