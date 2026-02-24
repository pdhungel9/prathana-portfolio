const jobs = [
  {
    period: "2023 — Present",
    title: "Product Designer",
    company: "Studio Lune",
    description:
      "Leading design for a suite of creative tools. Working closely with engineering to ship polished, accessible interfaces that delight users.",
    tags: ["Figma", "React", "Design Systems", "Accessibility"],
  },
  {
    period: "2021 — 2023",
    title: "UI/UX Designer & Frontend Dev",
    company: "Bloom Digital",
    description:
      "Designed and built responsive web experiences for clients in fashion, wellness, and lifestyle. Introduced a component library that cut dev time significantly.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Storybook"],
  },
  {
    period: "2020 — 2021",
    title: "Junior Designer",
    company: "Finch & Co.",
    description:
      "Started my career helping a small agency ship brand identities, landing pages, and marketing sites. Learned how to turn vague briefs into clear visual direction.",
    tags: ["Branding", "Web Design", "Illustration", "WordPress"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Experience
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
          Where I{"'"}ve worked
        </h2>

        <div className="flex flex-col gap-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-8 border-t border-border/60 first:border-t-0 first:pt-0 last:pb-0"
            >
              <p className="text-sm text-muted-foreground pt-1 shrink-0">
                {job.period}
              </p>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  {job.title}{" "}
                  <span className="text-muted-foreground font-normal">
                    {"· "}
                    {job.company}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-lg">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
