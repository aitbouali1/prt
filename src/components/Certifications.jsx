import { motion } from "framer-motion"
import { Award, Sparkles } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { certifications } from "../data/education"
import { container, item, fadeUp } from "../lib/motion"

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Continuous Learning"
          title="Certifications & Courses"
          subtitle="Professional development in data analytics, business intelligence, and finance."
        />

        {certifications.length === 0 ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-4 rounded-2xl glass-card p-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-accent)]/20 to-[color:var(--color-accent-2)]/20 text-[color:var(--color-accent-3)]">
              <Sparkles className="h-7 w-7" />
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-text">
              In progress
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              I'm currently building my skills in Python, SQL, Excel, and Power BI.
              My certifications and completed courses will appear here as I earn them —
              no placeholders presented as real achievements.
            </p>
            <p className="text-xs italic text-muted/70">
              Add real entries to the array in{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px]">src/data/education.js</code>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass-card glow-ring flex flex-col gap-3 rounded-2xl p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-accent)]/20 to-[color:var(--color-accent-2)]/20 text-[color:var(--color-accent-2)]">
                  <Award className="h-6 w-6" />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-text">
                  {c.name}
                </h3>
                {c.provider && (
                  <p className="text-sm text-[color:var(--color-accent-3)]">{c.provider}</p>
                )}
                {c.year && (
                  <span className="mt-auto text-xs text-muted">{c.year}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
