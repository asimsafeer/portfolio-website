"use client"

import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Smartphone, Globe, Monitor, Palette, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { projects, type Project } from "@/lib/projects"

// ── Category config ────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all",    label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web",    label: "Web" },
  { id: "macos",  label: "macOS" },
  { id: "design", label: "Design" },
]

// ── Icon placeholder ───────────────────────────────────────────────────────────
function CategoryIcon({ category }: { category: Project["category"] }) {
  const icons = {
    mobile: Smartphone,
    web: Globe,
    macos: Monitor,
    design: Palette,
    videography: Palette,
  }
  const Icon = icons[category] ?? Smartphone
  return <Icon className="w-7 h-7 text-white/80" />
}

// ── Platform badge ─────────────────────────────────────────────────────────────
function PlatformBadge({ platform }: { platform: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-semibold">
      <ShoppingBag className="w-2.5 h-2.5" />
      {platform}
    </span>
  )
}

// ── Single project card ────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col min-h-[260px] bg-background rounded-2xl border border-border/60 p-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-200">

      {/* App Icon */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-[22px] overflow-hidden shadow-lg ring-1 ring-black/8 flex-shrink-0 bg-gradient-to-br from-muted to-muted-foreground/20">
        {project.icon ? (
          <Image
            src={project.icon}
            alt={project.title}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <CategoryIcon category={project.category} />
          </div>
        )}
      </div>

      {/* Title + platform */}
      <div className="text-center mb-2 flex-shrink-0">
        <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {project.platform && <PlatformBadge platform={project.platform} />}
      </div>

      {/* Tech tags */}
      <p className="text-center text-[10px] text-muted-foreground/70 mb-3 leading-relaxed flex-shrink-0">
        {project.tags.slice(0, 3).join(" · ")}
      </p>

      {/* Description — fills remaining space, clips cleanly without "…" */}
      <p className="text-xs text-muted-foreground leading-relaxed text-center flex-1 overflow-hidden">
        {project.description}
      </p>

      {/* Category label */}
      <div className="mt-3 pt-3 border-t border-border/40 text-center flex-shrink-0">
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground/50 font-medium">
          {project.category}
        </span>
      </div>
    </div>
  )
}

// ── Design wide card ───────────────────────────────────────────────────────────
function MediaCard({ project }: { project: Project }) {
  const hasLink = project.link !== "#"
  return (
    <div className="group relative bg-background rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-200">
      {/* Cover */}
      <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6 opacity-80"
          />
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-full bg-black/30 text-white text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map(t => (
              <span key={t} className="px-2 py-0.5 rounded-full bg-secondary/50 text-[10px] text-muted-foreground border border-border/50">{t}</span>
            ))}
          </div>
          {hasLink && (
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline font-medium">
              View <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────────
export function Projects() {
  const [active, setActive] = useState("all")

  // Videography is excluded from the public-facing portfolio
  const visibleProjects = projects.filter(p => p.category !== "videography")

  const filtered = visibleProjects.filter(p =>
    active === "all" ? true : p.category === active
  )

  const appProjects   = filtered.filter(p => ["mobile", "web", "macos"].includes(p.category))
  const mediaProjects = filtered.filter(p => p.category === "design")

  const showApps  = active === "all" || ["mobile", "web", "macos"].includes(active)
  const showMedia = active === "all" || active === "design"

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects &amp; Apps</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            15+ production-ready apps built across Flutter, Android, Swift, Next.js, and more.
          </p>
        </motion.div>

        {/* Category filter — animated pill slides between buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <LayoutGroup id="projects-filter">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  active === cat.id
                    ? "text-primary-foreground"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {/* Animated background pill */}
                {active === cat.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-md"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
                  />
                )}
                <span className="relative z-10">
                  {cat.label}
                  {active === cat.id && (
                    <span className="ml-2 text-xs opacity-70">({filtered.length})</span>
                  )}
                </span>
              </button>
            ))}
          </LayoutGroup>
        </motion.div>

        {/* ── App Cards Grid ── */}
        {showApps && appProjects.length > 0 && (
          <div className="mb-14">
            {active === "all" && (
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5"
              >
                Apps &amp; Software
              </motion.h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <AnimatePresence mode="popLayout">
                {appProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 18, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.22, delay: Math.min(i * 0.04, 0.2) }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ── Design Cards ── */}
        {showMedia && mediaProjects.length > 0 && (
          <div>
            {active === "all" && (
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5"
              >
                Design
              </motion.h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {mediaProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, delay: i * 0.07 }}
                  >
                    <MediaCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
