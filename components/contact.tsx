import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  {
    label: "Email",
    href: "mailto:hello@elianareyes.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-yellow-soft/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
          Contact
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Let{"'"}s work together
          <span className="block h-1 w-16 bg-yellow rounded-full mt-3" />
        </h2>
        <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
          I{"'"}m always open to new projects, collaborations, or just a
          friendly hello. Feel free to reach out through any of the channels
          below.
        </p>

        <div className="flex items-center gap-5 mt-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-10 w-10 rounded-full border border-yellow/40 bg-yellow-soft text-foreground hover:bg-yellow-mid/50 hover:border-yellow transition-all"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
