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
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Designer & Developer
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-foreground">
            Hi, I{"'"}m Eliana.
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            I{"'"}m a designer and developer based in Brooklyn, NY. I care
            deeply about craft, accessibility, and building things that feel
            genuinely good to use. Currently designing product at{" "}
            <span className="text-foreground font-medium">Studio Lune</span>.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            When I{"'"}m not at my desk, you{"'"}ll find me trying new recipes,
            tending to my houseplants, or wandering around the city with my
            camera.
          </p>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 mt-10 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            See my work
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-border/60">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Eliana Reyes"
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
