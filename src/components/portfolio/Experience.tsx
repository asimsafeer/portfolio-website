"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Project Manager & Coordinator",
    company: "Creative Engineering & Management Services",
    period: "August 2024 – Present",
    location: "Peshawar, Pakistan",
    description: "Led digital product delivery while contributing directly to mobile app, web platform, UI/UX, reporting, and launch workflows.",
    highlights: [
      "Led end-to-end development of a mobile application and website, from vendor selection to final delivery.",
      "Researched and shortlisted software companies, evaluated proposals, and coordinated contracts for app development.",
      "Managed all project phases including UI/UX approvals, feature reviews, and multi-team collaboration.",
      "Oversaw timelines, tracked progress, identified risks, and implemented solutions to keep projects on schedule.",
      "Acted as primary liaison between internal stakeholders and development teams.",
    ],
  },
  {
    role: "Project Coordinator",
    company: "Creative Engineering & Management Services",
    period: "May 2023 – July 2025",
    location: "Peshawar, Pakistan",
    description: "Managed daily task assignment and tracking for a cross-functional team to ensure clarity and accountability.",
    highlights: [
      "Delegated tasks assigned by the CEO to team leads and members; monitored completion daily.",
      "Reviewed team progress and reported performance to CEO, enabling data-driven decisions.",
      "Guided team members to manage their own tasks and improved overall accountability.",
      "Built and maintained a system to track performance and optimise productivity.",
    ],
  },
  {
    role: "Project Coordinator | Website Redesign",
    company: "Sustainable Allied Services Engineering",
    period: "November 2025 – December 2025",
    location: "Remote",
    description: "Served as the primary liaison between client and development team, translating requirements into actionable tasks.",
    highlights: [
      "Coordinated all necessary resources — images, content, and reference materials — for seamless execution.",
      "Maintained project timelines, monitored progress, and integrated client feedback throughout.",
      "Facilitated effective communication between stakeholders, reducing delays.",
    ],
  },
  {
    role: "Business Auditor",
    company: "Creative Engineering & Management Services",
    period: "July 2024",
    location: "Peshawar, Pakistan",
    description: "Conducted field audits for partner shop owners to verify inventory and sales records.",
    highlights: [
      "Ensured company investments and revenue were accurately accounted for, identifying discrepancies.",
      "Prepared reports on findings for management, supporting financial accountability.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A track record of leading impactful projects and shipping digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-3 top-5 w-4 h-4 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="bg-background rounded-2xl border border-border/60 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                  {/* Company + role */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-base leading-snug">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pl-12">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 pl-12">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 pl-12">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
