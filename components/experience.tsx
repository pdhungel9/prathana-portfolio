const jobs = [
  {
    period: "2022 - 2024",
    title: "Data Engineer",
    company: "Fidelity Investments",
    description:
      "Built and supported integrated enterprise data platforms leveraging Oracle and Snowflake. Migrated legacy batch jobs using AWS and Control-M, automated PII masking pipelines in Snowflake, and boosted CDC pipeline reliability by automating 20+ daily validation jobs across data platforms.",
  },
  {
    period: "2021 - 2022",
    title: "Python Teaching Assistant",
    company: "Boston University",
    description:
      "Mentored students on debugging techniques and core Python concepts during biweekly office hours. Instructed three discussion sections with 30+ students and facilitated weekly grading of 300+ assignments.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-forest-soft/50">
      <div className="mx-auto max-w-5xl">
        <p className="text-base uppercase tracking-widest text-forest font-semibold mb-2">
          Experience
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-14">
          Where I{"'"}ve worked
          <span className="block h-1 w-16 bg-pumpkin rounded-full mt-3" />
        </h2>

        <div className="flex flex-col gap-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-8 pl-5 border-l-2 border-sage/70 border-t border-t-border/40 first:border-t-0 first:pt-0 last:pb-0"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
