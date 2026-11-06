import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, CheckCircle2, Loader2 } from "lucide-react"
import { Linkedin, Github } from "./BrandIcons"
import SectionHeading from "./SectionHeading"
import { profile } from "../data/profile"
import { fadeUp } from "../lib/motion"

// Functional contact form backed by Netlify Forms.
// Field names match the hidden <form name="contact"> in index.html so Netlify
// detects the form at build time and wires submissions to the site dashboard.
export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("submitting")

    const body = new URLSearchParams({
      "form-name": "contact",
      "bot-field": "",
      ...form,
    })

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project, an opportunity, or simply want to connect? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="glass-card glow-ring rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" onChange={update} /></label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={update} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" value={form.subject} onChange={update} required />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-text">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-y rounded-xl border border-[color:var(--color-line)] bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted/60 transition-colors focus:border-[color:var(--color-accent-2)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-2)]/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-3)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400"
              >
                <CheckCircle2 className="h-4 w-4" />
                Thank you! Your message has been sent — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-rose-400">
                Something went wrong. Please try again, or email me directly at {profile.email}.
              </p>
            )}
          </motion.form>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-base leading-relaxed text-muted">
              Prefer a direct line? Reach me through any of these — I usually
              respond within a day or two.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="glass-card glow-ring flex items-center gap-4 rounded-2xl p-5 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent-3)]">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Email</span>
                <span className="text-sm font-semibold text-text">{profile.email}</span>
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card glow-ring flex items-center gap-4 rounded-2xl p-5 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-accent-2)]/15 text-[color:var(--color-accent-2)]">
                <Linkedin className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">LinkedIn</span>
                <span className="text-sm font-semibold text-text">Connect with me</span>
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card glow-ring flex items-center gap-4 rounded-2xl p-5 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-text">
                <Github className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">GitHub</span>
                <span className="text-sm font-semibold text-text">See my code</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-text">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-[color:var(--color-line)] bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted/60 transition-colors focus:border-[color:var(--color-accent-2)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-2)]/20"
      />
    </div>
  )
}
