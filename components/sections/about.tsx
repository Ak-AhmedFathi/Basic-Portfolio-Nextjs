"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p
                className={`text-lg text-foreground/80 leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                I'm a passionate developer with a deep love for creating beautiful, functional digital experiences. With
                5+ years of experience in web development, I've had the opportunity to work with startups and
                established companies, helping them build scalable solutions.
              </p>

              <p
                className={`text-lg text-foreground/80 leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "100ms" }}
              >
                My journey in tech started with a curiosity about how things work on the web. Today, I specialize in
                modern JavaScript frameworks, particularly React and Next.js, but I'm always eager to learn new
                technologies and best practices.
              </p>

              <p
                className={`text-lg text-foreground/80 leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "200ms" }}
              >
                When I'm not coding, you can find me reading tech articles, contributing to open-source projects, or
                exploring new design trends. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>

            <div
              className={`md:col-span-1 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Quick Facts</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">→</span>
                    <span>5+ years of experience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">→</span>
                    <span>20+ projects completed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">→</span>
                    <span>Full-stack developer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">→</span>
                    <span>Always learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
