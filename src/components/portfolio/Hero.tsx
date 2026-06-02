"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

function TypeWriter({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("")
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplay(p => p + text[idx])
        setIdx(p => p + 1)
      }, 75)
      return () => clearTimeout(t)
    }
  }, [idx, text])

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  )
}

const STACK = ["Flutter & Dart", "Android / Kotlin", "Swift & SwiftUI", "Next.js", "Python & ML", "Firebase"]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Pure CSS background — zero JS cost */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Mobile &amp; Web App Developer · Project Manager
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 tracking-tight leading-[1.05]"
        >
          Hi, I&apos;m{" "}
          <TypeWriter
            text="Aasim Safeer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/50"
          />
        </motion.h1>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-1.5 text-muted-foreground mb-5"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-sm">Peshawar, Pakistan</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          CS graduate who has independently built <strong className="text-foreground font-semibold">15+ production-ready apps</strong> across
          Flutter, Android, Swift &amp; Next.js — while simultaneously leading teams as a
          Project Manager &amp; Lead Coordinator.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button size="lg" className="h-12 px-8 rounded-full shadow-md text-base" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base" asChild>
            <a href="/aasim-safeer-cv.pdf" download>
              Download CV <Download className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {STACK.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full bg-secondary/60 border border-border/60 text-xs text-muted-foreground font-medium hover:border-primary/40 hover:text-foreground transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </motion.div>
    </section>
  )
}
