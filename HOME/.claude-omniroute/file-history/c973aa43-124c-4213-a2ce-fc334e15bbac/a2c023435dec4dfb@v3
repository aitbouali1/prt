import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"

// Reusable section heading: small eyebrow label + gradient title + subtitle.
export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent-2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-2)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] text-text sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
