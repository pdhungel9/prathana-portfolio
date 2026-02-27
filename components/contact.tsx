import { Mail, Github, Linkedin } from "lucide-react"

const socials = [
  {
    label: "Email",
    href: "mailto:prathana.dhungel@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/prathana-dhungel",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-pumpkin-soft/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">
          Contact
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Let{"'"}s connect
          <span className="block h-1 w-16 bg-pumpkin rounded-full mt-3" />
        </h2>
        <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
          I{"'"}m always open to new projects and collaborations. For further
          questions and inquiries, feel free to contact me below.
        </p>

        <div className="flex items-center gap-5 mt-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-10 w-10 rounded-full border border-sage/40 bg-sage-soft text-foreground hover:bg-forest-soft hover:border-forest/40 transition-all"
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
