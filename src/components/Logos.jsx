import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
]

export default function Logos() {
  return (
    <section className="relative py-16 bg-[rgb(10,11,15)]">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="logo"
              initial={{ filter: 'grayscale(100%)', opacity: 0.6, y: 10 }}
              whileInView={{ filter: 'grayscale(0%)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="h-10 w-auto mx-auto opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
