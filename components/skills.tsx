import { Code2, Cloud, DatabaseZap, GitBranch, Database, Wind } from "lucide-react"

const skillGroups = [
  {
    label: "Programming Languages",
    icon: Code2,
    bg: "bg-forest-soft",
    border: "border-forest/25",
    iconColor: "text-forest",
    skills: ["Python", "SQL"],
  },
  {
    label: "Databases",
    icon: Database,
    bg: "bg-pumpkin-soft",
    border: "border-pumpkin/25",
    iconColor: "text-pumpkin",
    skills: ["Oracle", "Snowflake", "PostgreSQL", "CockroachDB"],
  },
  {
    label: "AWS Services",
    icon: Cloud,
    bg: "bg-amber-soft",
    border: "border-amber/25",
    iconColor: "text-amber",
    skills: ["S3", "Batch", "CloudWatch", "IAM", "KMS"],
  },
  {
    label: "Orchestration Tools",
    icon: Wind,
    bg: "bg-sage-soft",
    border: "border-sage/30",
    iconColor: "text-forest",
    skills: ["Control-M", "Airflow"],
  },
  {
    label: "Replication Tools",
    icon: DatabaseZap,
    bg: "bg-maroon-soft",
    border: "border-maroon/20",
    iconColor: "text-maroon",
    skills: ["Fivetran", "Oracle GoldenGate"],
  },
  {
    label: "DevOps & Collaboration",
    icon: GitBranch,
    bg: "bg-pumpkin-soft",
    border: "border-pumpkin/20",
    iconColor: "text-pumpkin",
    skills: [
      "Git",
      "Jenkins",
      "Jira",
      "Confluence",
      "ServiceNow",
      "Docker",
      "Postman",
      "iceDQ",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-pumpkin-soft/30">
      <div className="mx-auto max-w-5xl">
        <p className="text-base uppercase tracking-widest text-forest font-semibold mb-2">
          Skills
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-14">
          Tools I work with
          <span className="block h-1 w-16 bg-pumpkin rounded-full mt-3" />
        </h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className={`rounded-xl border p-5 ${group.bg} ${group.border} flex flex-col`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <group.icon className={`h-4.5 w-4.5 ${group.iconColor}`} />
                <h3 className="text-xs font-semibold tracking-wide uppercase text-foreground">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-col gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-card/80 border border-border/40 text-foreground w-fit"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
