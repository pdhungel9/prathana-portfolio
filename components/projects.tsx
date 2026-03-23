import Image from "next/image"

const projects = [
  {
    title: "Real-Time Urban Air Quality Monitoring Pipeline",
    description:
      "Developed a containerized ETL pipeline to ingest air quality data from OpenAQ into a PostgreSQL database. Orchestrated hourly data ingestion with Airflow and visualized air quality trends and measurement latency across global cities.",
    image: "/images/project-airquality.jpg",
    tags: ["Python", "Docker", "Airflow", "PostgreSQL"],
  },
  {
    title: "Analysis of Massachusetts Broadband Access for CBS Boston",
    description:
      "Extracted and analyzed 2019 U.S. census data to identify communities around Massachusetts with low rates of internet access. Analyzed the socioeconomic makeup of these areas and constructed geospatial visualizations in R to easily visualize areas with internet access disparities.",
    image: "/images/project-broadband.jpg",
    tags: ["R", "Census Data", "Geospatial Analysis"],
  },
  {
    title: "Respiratory Illnesses Classification in Lung X-Rays",
    description:
      "Developed a convolutional neural network to classify lung X-rays into four categories (COVID-19, viral/bacterial pneumonia and normal). Optimized model performance by comparing VGG-16 vs. VGG-19 architectures over 100 test and train epochs.",
    image: "/images/project-xray.jpg",
    tags: ["Python", "Deep Learning", "CNN", "VGG"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-sage-soft/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-base uppercase tracking-widest text-forest font-semibold mb-2">
          Projects
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-14">
          Selected work
          <span className="block h-1 w-16 bg-pumpkin rounded-full mt-3" />
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-sage/30">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag, tagIdx) => {
                    const colors = [
                      "bg-forest-soft text-forest border border-forest/20",
                      "bg-pumpkin-soft text-pumpkin border border-pumpkin/20",
                      "bg-amber-soft text-amber border border-amber/20",
                      "bg-maroon-soft text-maroon border border-maroon/15",
                    ]
                    return (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors[tagIdx % colors.length]}`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
