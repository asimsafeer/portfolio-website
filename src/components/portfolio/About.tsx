"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const TECHNICAL_SKILLS = [
  "Flutter & Dart", "Android (Java / Kotlin)", "Swift & SwiftUI",
  "Next.js / React / TypeScript", "Python & ML / Data Science",
  "Firebase", "SQLite / Drift", "Riverpod / Provider", "REST APIs",
  "Git & Version Control", "Figma & UI/UX Design", "Agile & Scrum",
  "Task Tracking (Jira, Asana, Trello, Notion)",
]

const MANAGERIAL_SKILLS = [
  "Project Management & Coordination", "Cross-Functional Team Leadership",
  "Stakeholder Management", "Executive Support",
  "Sprint & Agile Planning", "Risk Identification & Problem Solving",
  "Workflow Optimisation", "Data Analysis & Reporting",
  "Digital Project Delivery", "Vendor Evaluation & Contract Coordination",
]

const CERTIFICATIONS = [
  "Foundations of Project Management — Coursera",
  "MS Office — Coursera",
  "Create A Mockup in Figma — Coursera",
  "Create IT Diagrams with Lucidchart — Coursera",
]

const LANGUAGES = [
  { lang: "Pashto", level: "Native" },
  { lang: "Urdu", level: "Fluent" },
  { lang: "English", level: "Fluent" },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const steps = 50
    const inc = value / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += inc
      if (cur >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(cur))
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

const STATS = [
  { value: 15, suffix: "+", label: "Apps Built" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Platforms" },
]

function SkillPill({ text }: { text: string }) {
  return (
    <span className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default">
      {text}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Developer &amp; Project Manager</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── LEFT: Bio, Education, Certs, Languages ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science graduate who has independently built{" "}
                <span className="text-foreground font-medium">15+ production-ready mobile apps</span>,
                Android utilities, macOS tools, and web platforms — using Flutter, Dart, Swift,
                Kotlin, Next.js, Python, and Firebase.
              </p>
              <p>
                Simultaneously an experienced <span className="text-foreground font-medium">Project Manager &amp; Lead Coordinator</span>:
                skilled in Agile/Scrum execution, stakeholder management, timeline tracking, and
                end-to-end digital project delivery. I combine hands-on engineering with strategic
                project oversight — equally capable of shipping production apps and leading
                cross-functional teams.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-secondary/30 rounded-2xl p-4 text-center border border-border/50">
                  <p className="text-3xl font-bold text-primary">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Education</h3>
              <div className="space-y-4 border-l-2 border-primary/20 pl-4">
                <div>
                  <p className="font-semibold text-sm text-foreground">BS in Computer Science</p>
                  <p className="text-sm text-muted-foreground">City University of Science &amp; IT, Peshawar</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">2021 — 2025</p>

                  {/* Final Year Project */}
                  <div className="mt-3 ml-3 pl-3 border-l border-primary/30">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">Final Year Project</span>
                    </div>
                    <p className="font-semibold text-sm text-foreground">Poul3y — Digital Poultry Management Platform</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Flutter · Firebase · Figma · UI/UX</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">October 2024 – June 2025</p>
                    <ul className="mt-2 space-y-1">
                      {[
                        "Led full lifecycle: requirements, UI/UX, development, and testing.",
                        "Field research and stakeholder interviews to align features with real-world needs.",
                        "Sprint planning reduced development time by 15%.",
                        "Pilot deployed with 50+ users in live market scenarios.",
                      ].map(h => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Diploma in Information Technology</p>
                  <p className="text-sm text-muted-foreground">Xpert IT Solution &amp; Training</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Certifications</h3>
              <ul className="space-y-2">
                {CERTIFICATIONS.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-secondary/20">
                    <span className="text-sm font-medium text-foreground">{lang}</span>
                    <span className="text-xs text-muted-foreground">— {level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Photo + Skills ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 aspect-square max-w-sm mx-auto lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e886c98e-2f49-4190-97cb-917129475fa3/WhatsApp-Image-2025-12-22-at-17.41.36-1768983466152.png?width=800&height=800&resize=contain"
                alt="Aasim Safeer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg">Aasim Safeer</p>
                <p className="text-white/70 text-sm">Mobile &amp; Web Developer · Project Manager</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {TECHNICAL_SKILLS.map(s => <SkillPill key={s} text={s} />)}
              </div>
            </div>

            {/* Managerial Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Managerial Skills</h3>
              <div className="flex flex-wrap gap-2">
                {MANAGERIAL_SKILLS.map(s => <SkillPill key={s} text={s} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
