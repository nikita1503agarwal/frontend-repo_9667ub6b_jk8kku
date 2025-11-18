import { motion } from 'framer-motion'
import { Twitter, Github, Globe } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Github, href: '#' },
    { icon: Globe, href: '#' },
  ]

  return (
    <footer className="relative py-14 bg-[rgb(10,11,15)] border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-300"
          >
            © {new Date().getFullYear()} Chromatic — All rights reserved.
          </motion.div>

          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="text-slate-300 hover:text-white"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
