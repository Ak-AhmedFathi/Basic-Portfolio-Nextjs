"use client"

import { useEffect, useRef, useState } from "react"

const skillsData = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Tools", skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"] },
  { category: "Design", skills: ["Figma", "UI/UX", "Responsive Design", "Web Accessibility", "Animations"] },
]

export default function Skills() {
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
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-foreground/60 text-lg">Technologies and tools I work with regularly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${groupIndex * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-background/80 transition-all cursor-pointer group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
