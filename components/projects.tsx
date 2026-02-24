import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Petal",
    description:
      "A wellness dashboard that helps users track habits, mood, and daily reflections. Designed and built as a personal side project.",
    image: "/images/project-1.jpg",
    tags: ["Design", "Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Maison",
    description:
      "Mobile-first e-commerce concept for an independent fashion label. Focused on editorial photography and effortless browsing.",
    image: "/images/project-2.jpg",
    tags: ["Design", "React Native", "Shopify"],
    link: "#",
  },
  {
    title: "Atelier Brand Studio",
    description:
      "Full brand identity and web presence for a boutique design consultancy. From logo to launch.",
    image: "/images/project-3.jpg",
    tags: ["Branding", "Web Design", "Figma"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-lilac-soft/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
          Projects
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
          Selected work
        </h2>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="group grid md:grid-cols-2 gap-6 md:gap-10 items-start"
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-border/40 ${
                  i % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div
                className={`flex flex-col justify-center ${
                  i % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-medium text-foreground flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag, tagIdx) => {
                    const colors = [
                      "bg-lilac-soft text-foreground border border-lilac/20",
                      "bg-yellow-soft text-foreground border border-yellow/20",
                      "bg-rose-soft text-foreground border border-rose/20",
                    ]
                    return (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full ${colors[tagIdx % colors.length]}`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
