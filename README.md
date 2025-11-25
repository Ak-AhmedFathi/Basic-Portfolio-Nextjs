# Modern Portfolio Template

A professional, responsive portfolio template built with React, Next.js, and Tailwind CSS. Perfect for showcasing your projects, skills, and experience.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark/Light mode toggle
- 🎯 Smooth scrolling navigation
- ⚡ Performance optimized
- 🎨 Beautiful gradient effects
- 📊 Projects showcase with hover animations
- 🛠️ Skills display with categories
- 📧 Contact form (UI only)
- 🔗 Social media links

## Sections

1. **Hero Section** - Eye-catching intro with CTA buttons
2. **Navigation Bar** - Fixed navigation with smooth scrolling and mobile menu
3. **Projects** - Grid showcase with project cards featuring images and descriptions
4. **Skills** - Categorized skills with smooth reveal animations
5. **About** - Personal bio and quick facts
6. **Contact** - Contact form and social links
7. **Footer** - Navigation and social links

## Tech Stack

- **Framework**: Next.js 15+ with React 19+
- **Styling**: Tailwind CSS v4
- **Animations**: CSS animations + Framer Motion ready
- **Language**: TypeScript
- **Package Manager**: npm/yarn/pnpm

## Getting Started

### Installation

\`\`\`bash
# Using shadcn CLI (recommended)
npx shadcn-cli@latest init my-portfolio

# Or clone and install manually
git clone <repository-url>
cd portfolio-template
npm install
\`\`\`

### Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

1. **Hero Section** - Edit `components/sections/hero.tsx`
2. **Projects** - Modify the `projectsData` array in `components/sections/projects.tsx`
3. **Skills** - Update the `skillsData` in `components/sections/skills.tsx`
4. **About** - Edit `components/sections/about.tsx`
5. **Contact Links** - Update social links in `components/sections/contact.tsx` and `components/sections/footer.tsx`

### Customize Colors

Edit the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.48 0.162 262.7);
  --accent: oklch(0.65 0.18 210);
  /* ... other colors ... */
}
\`\`\`

### Add Your Images

Replace placeholder images in:
- `components/sections/projects.tsx` - Update project images
- Add your own images to the `public` folder

## Project Structure

\`\`\`
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   └── sections/
│       ├── navbar.tsx      # Navigation bar
│       ├── hero.tsx        # Hero section
│       ├── projects.tsx    # Projects showcase
│       ├── skills.tsx      # Skills section
│       ├── about.tsx       # About section
│       ├── contact.tsx     # Contact form
│       └── footer.tsx      # Footer
├── public/                 # Static assets
└── README.md              # This file
\`\`\`

## Features in Detail

### Animations
- Fade-in-up animations on scroll
- Hover effects on project cards
- Smooth scroll behavior
- Page transitions

### Responsive Design
- Mobile-first approach
- Optimized breakpoints (sm, md, lg)
- Touch-friendly buttons and links
- Adaptive layouts

### Dark Mode
- Toggle between dark and light themes
- Smooth transitions
- System preference support ready

## Performance

- Fast page loads with Next.js
- Optimized images with next/image ready
- Minimal CSS with Tailwind
- No external CDN dependencies (except for fonts)

## Future Enhancements

- Backend integration for contact form
- Blog section
- Dark mode system preference detection
- More animation options
- Additional portfolio templates

## Deployment

### Deploy on Vercel (Recommended)

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Or use GitHub

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## License

Free to use for personal and commercial projects.

## Support

For questions or suggestions, feel free to reach out or open an issue.

---

Built with ❤️ by Creative Developer
