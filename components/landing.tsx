import { Sparkles } from "lucide-react"

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Landing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-forest leading-tight">
          <span className="inline-flex items-center gap-3 md:gap-4">
            👋 Prathana Dhungel 💻
          </span>
          <span className="block mt-2">
            <Sparkles className="inline h-10 w-10 md:h-12 md:w-12 text-pumpkin" />
          </span>
        </h1>

        <nav className="mt-12 md:mt-16">
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-full border-2 border-forest/30 bg-forest-soft/50 text-forest hover:bg-forest hover:text-card hover:border-forest transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
