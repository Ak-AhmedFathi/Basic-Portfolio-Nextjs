"use client"

import { useEffect, useRef, useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe integration, and real-time inventory management.",
    image: "/ecommerce-dashboard.jpg",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    links: { live: "#", code: "#" },
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates, team features, and beautiful UI.",
    image: "/task-management-interface.jpg",
    tags: ["React", "Firebase", "Tailwind", "TypeScript"],
    links: { live: "#", code: "#" },
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content generation tool with streaming responses and advanced customization options.",
    image: "/ai-content-generator.jpg",
    tags: ["Next.js", "OpenAI", "Vercel AI", "React"],
    links: { live: "#", code: "#" },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting.",
    image: "/analytics-dashboard.png",
    tags: ["React", "Recharts", "Node.js", "MongoDB"],
    links: { live: "#", code: "#" },
  },
]

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg">A selection of recent work showcasing my skills and experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: visibleCards.includes(index) ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    View Live
                  </a>
                  <a
                    href={project.links.code}
                    className="px-4 py-2 bg-card border border-border text-foreground rounded-lg font-semibold text-sm hover:bg-card/80 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
