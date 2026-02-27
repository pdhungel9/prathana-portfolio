import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"© 2026 Prathana Dhungel. Built with care."}
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pdhungel9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
