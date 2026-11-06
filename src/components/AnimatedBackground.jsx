import { motion } from "framer-motion"

// Subtle animated background: grid + floating data "particles" that drift
// slowly. Purely decorative; pointer-events disabled so it never blocks UI.
export default function AnimatedBackground() {
  const dots = Array.from({ length: 16 })
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_60%)] blur-3xl" />
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] max-w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_60%)] blur-3xl" />

      {dots.map((_, i) => {
        const left = (i * 67) % 100
        const top = (i * 37) % 100
        const size = 3 + (i % 4) * 2
        const delay = (i % 7) * 0.7
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[color:var(--color-accent-2)]/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -22, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        )
      })}
    </div>
  )
}
