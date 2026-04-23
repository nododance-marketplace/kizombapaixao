import FadeIn from "./FadeIn";
import { ImageWithFallback } from "./MediaPlaceholder";
import { instructors } from "@/data/instructors";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-noite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-script text-2xl text-ouro">Sobre</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
            Your instructors
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {instructors.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <article className="group">
                <div className="overflow-hidden rounded-lg ring-1 ring-transparent transition-all duration-300 group-hover:ring-ouro">
                  <ImageWithFallback
                    src={p.image}
                    alt={`Portrait of ${p.name}, ${p.role}`}
                    filename={p.imageFilename}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-ouro/90">
                  {p.role}
                </p>
                <p className="mt-4 leading-relaxed text-cream/80">{p.bio}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-20 text-center font-display text-xl italic text-cream/90 md:text-2xl">
            Together, they&apos;re building Charlotte&apos;s kizomba home.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
