export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/60 text-sm">© {currentYear} Portfolio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
