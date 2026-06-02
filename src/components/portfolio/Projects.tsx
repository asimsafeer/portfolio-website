"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Smartphone, Globe, Monitor, Palette, Video, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { projects, type Project } from "@/lib/projects"

// ── Category config ────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all",        label: "All Projects" },
  { id: "mobile",     label: "Mobile Apps" },
  { id: "web",        label: "Web" },
  { id: "macos",      label: "macOS" },
  { id: "design",     label: "Design" },
  { id: "videography",label: "Video" },
]

// ── Icon placeholder gradient map ─────────────────────────────────────────────
function CategoryIcon({ category }: { category: Project["category"] }) {
  const icons = {
    mobile: Smartphone,
    web: Globe,
    macos: Monitor,
    design: Palette,
    videography: Video,
  }
  const Icon = icons[category] ?? Smartphone
  return <Icon className="w-8 h-8 text-white/80" />
}

// ── Platform badge ────────────────────────────────────────────────────────────
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
  const hasExternalLink = project.link !== "#"

  return (
    <div className="group relative flex flex-col bg-background rounded-2xl border border-border/60 p-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-200">

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
      <div className="text-center mb-2">
        <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {project.platform && <PlatformBadge platform={project.platform} />}
      </div>

      {/* Tech tags */}
      <p className="text-center text-[10px] text-muted-foreground/70 mb-3 leading-relaxed">
        {project.tags.slice(0, 3).join(" · ")}
      </p>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 text-center flex-1">
        {project.description.split(".")[0]}.
      </p>

      {/* External link */}
      {hasExternalLink && (
        <div className="mt-4 text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
          >
            View <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Category label bottom */}
      <div className="mt-3 pt-3 border-t border-border/40 text-center">
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground/50 font-medium">
          {project.category === "videography" ? "video" : project.category}
        </span>
      </div>
    </div>
  )
}

// ── Design / Videography wide card ────────────────────────────────────────────
function MediaCard({ project }: { project: Project }) {
  const hasLink = project.link !== "#"
  return (
    <div className="group relative bg-background rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-200">
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
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{project.description.split(".")[0]}.</p>
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

// ── Main section ──────────────────────────────────────────────────────────────
export function Projects() {
  const [active, setActive] = useState("all")

  const filtered = projects.filter(p => {
    if (active === "all") return true
    return p.category === active
  })

  const appProjects  = filtered.filter(p => p.category === "mobile" || p.category === "web" || p.category === "macos")
  const mediaProjects = filtered.filter(p => p.category === "design" || p.category === "videography")

  const showApps  = active === "all" || ["mobile","web","macos"].includes(active)
  const showMedia = active === "all" || ["design","videography"].includes(active)

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

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat.label}
              {active === cat.id && (
                <span className="ml-2 text-xs opacity-70">
                  ({filtered.length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── App Cards Grid ── */}
        {showApps && appProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {active === "all" && (
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                Apps &amp; Software
              </h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14">
              {appProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.3) }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Media / Design / Video Cards ── */}
        {showMedia && mediaProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {active === "all" && (
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                Design &amp; Video
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <MediaCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
