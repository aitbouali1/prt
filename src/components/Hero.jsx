import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts"
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react"
import { Github, Linkedin } from "./BrandIcons"
import { profile } from "../data/profile"
import { fadeUp, container, item } from "../lib/motion"

// Decorative mock data for the hero dashboard composition — not real analysis.
const revenueData = [
  { m: "Jan", v: 42 }, { m: "Feb", v: 55 }, { m: "Mar", v: 48 },
  { m: "Apr", v: 67 }, { m: "May", v: 73 }, { m: "Jun", v: 88 },
  { m: "Jul", v: 79 }, { m: "Aug", v: 95 },
]
const barsData = [
  { x: "A", v: 30 }, { x: "B", v: 58 }, { x: "C", v: 42 },
  { x: "D", v: 71 }, { x: "E", v: 49 }, { x: "F", v: 64 },
]
const sparkData = [
  { t: 1, v: 12 }, { t: 2, v: 19 }, { t: 3, v: 15 }, { t: 4, v: 27 },
  { t: 5, v: 22 }, { t: 6, v: 31 }, { t: 7, v: 28 }, { t: 8, v: 38 },
]
const barColors = ["#6366f1", "#a78bfa", "#6366f1", "#a78bfa", "#6366f1", "#a78bfa"]

function Stat({ label, value }) {
  return (
    <div className="glass-card rounded-xl px-3 py-2.5 text-left">
      <div className="font-[family-name:var(--font-display)] text-lg font-bold text-text">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* ---- left: copy ---- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-[color:var(--color-accent-2)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Management Graduate × Data Analytics
          </motion.span>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl text-balance"
          >
            MOHAMED <span className="gradient-text">AIT BOUALI</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg font-semibold tracking-wide text-[color:var(--color-accent-3)]"
          >
            Junior Data Analyst
          </motion.p>

          <motion.p
            variants={item}
            className="font-[family-name:var(--font-display)] text-xl font-semibold text-text sm:text-2xl text-balance"
          >
            &ldquo;{profile.tagline}&rdquo;
          </motion.p>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-3)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-text transition-colors hover:text-[color:var(--color-accent-2)]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-text transition-colors hover:text-[color:var(--color-accent-2)]"
            >
              <Mail className="h-4 w-4" /> Let's Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 pt-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-all hover:scale-110 hover:text-[color:var(--color-accent-2)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-all hover:scale-110 hover:text-[color:var(--color-accent-2)]"
            >
              <Github className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* ---- right: animated dashboard composition ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            className="glass-card glow-ring rounded-2xl p-5 shadow-glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-bold text-text">Analytics Overview</p>
                <p className="text-xs text-muted">Live dashboard preview</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <Stat label="Revenue" value="95K" />
              <Stat label="Growth" value="+27%" />
              <Stat label="Conv." value="4.8%" />
            </div>

            <div className="mt-4 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 6, right: 6, left: -28, bottom: 0 }}>
                  <defs>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="m" tick={{ fill: "#8b93a7", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#8b93a7", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#0d1322", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: "#e6e9f2" }}
                    itemStyle={{ color: "#22d3ee" }}
                  />
                  <Area type="monotone" dataKey="v" stroke="#22d3ee" strokeWidth={2} fill="url(#heroArea)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-2.5">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-muted">Segments</p>
                <div className="h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barsData}>
                      <Bar dataKey="v" radius={[3, 3, 0, 0]}>
                        {barsData.map((d, i) => (
                          <Cell key={i} fill={barColors[i]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="glass rounded-xl p-2.5">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-muted">Trend</p>
                <div className="h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparkData}>
                      <Line type="monotone" dataKey="v" stroke="#22d3ee" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-3 -top-3 glass-card rounded-xl px-3 py-2 text-xs font-semibold text-[color:var(--color-accent-2)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ◆ Data Insights
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-3 glass-card rounded-xl px-3 py-2 text-xs font-semibold text-[color:var(--color-accent-3)]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            ◆ Business Intelligence
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
