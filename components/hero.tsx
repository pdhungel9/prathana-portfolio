import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="mx-auto max-w-5xl w-full grid md:grid-cols-[1fr_300px] gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
            Data Engineer
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-foreground">
            Hi, I{"'"}m <span className="relative inline-block text-primary"><span className="relative z-10">Prathana</span><span className="absolute bottom-1 left-0 w-full h-3 bg-pumpkin/40 -z-0 rounded-sm" /></span>.
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            I{"'"}m a data engineer with a background in building and supporting
            enterprise data platforms. I graduated magna cum laude from{" "}
            <span className="text-foreground font-medium">Boston University</span>{" "}
            with a B.A. in Computer Science, and most recently worked at{" "}
            <span className="text-foreground font-medium">Fidelity Investments</span>{" "}
            modernizing cloud-based data pipelines across Oracle, Snowflake, and AWS.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            When I{"'"}m not at my desk, I enjoy crochet, reading, trying new
            recipes and hiking.
          </p>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 mt-10 text-sm font-medium px-5 py-2.5 rounded-full bg-pumpkin text-primary-foreground hover:bg-pumpkin/85 transition-colors group shadow-sm"
          >
            See my work
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-2 border-sage/50 shadow-[5px_5px_0px_0px] shadow-pumpkin/70">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Prathana Dhungel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
