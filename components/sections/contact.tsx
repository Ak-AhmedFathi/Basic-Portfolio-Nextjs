"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-foreground/60 text-lg">
            Have a project in mind? Feel free to reach out and let's create something amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>

          {submitted && (
            <div className="p-4 bg-primary/10 border border-primary/50 rounded-lg text-primary text-center animate-fade-in">
              Thank you! I'll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-12 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <a href="mailto:hello@example.com" className="text-foreground/70 hover:text-foreground transition-colors">
                hello@example.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">LinkedIn</h3>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Connect with me
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">GitHub</h3>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
