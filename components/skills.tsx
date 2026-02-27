import { Code2, Cloud, DatabaseZap, GitBranch } from "lucide-react"

const skillGroups = [
  {
    label: "Programming Languages",
    icon: Code2,
    color: "bg-sage-soft border-sage/30 text-foreground",
    iconColor: "text-forest",
    skills: ["Python", "SQL (Oracle, Snowflake, PostgreSQL, CockroachDB)"],
  },
  {
    label: "Orchestration & Cloud Tools",
    icon: Cloud,
    color: "bg-pumpkin-soft border-pumpkin/30 text-foreground",
    iconColor: "text-pumpkin",
    skills: [
      "Control-M",
      "AWS Batch",
      "AWS CloudWatch",
      "AWS IAM",
      "AWS KMS",
      "AWS S3",
      "Airflow",
    ],
  },
  {
    label: "Replication Tools",
    icon: DatabaseZap,
    color: "bg-maroon-soft border-maroon/20 text-foreground",
    iconColor: "text-maroon",
    skills: ["Fivetran", "Oracle GoldenGate"],
  },
  {
    label: "DevOps & Collaboration",
    icon: GitBranch,
    color: "bg-amber-soft border-amber/20 text-foreground",
    iconColor: "text-amber",
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
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">
          Skills
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-14">
          Tools I work with
          <span className="block h-1 w-16 bg-pumpkin rounded-full mt-3" />
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className={`rounded-xl border p-6 ${group.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className={`h-5 w-5 ${group.iconColor}`} />
                <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-foreground"
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
