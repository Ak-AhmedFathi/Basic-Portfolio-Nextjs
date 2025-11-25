"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up block"
              style={{ animationDelay: "0s" }}
            >
              Creative Developer
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-foreground/70 mb-8 text-balance max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I craft beautiful, functional web experiences using modern technologies. Specializing in React, Next.js, and
            full-stack development.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-card/80 hover:scale-110 transition-all duration-300 hover:border-accent active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 animate-pulse-ring ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="animate-float">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
