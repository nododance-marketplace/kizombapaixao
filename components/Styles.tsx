import FadeIn from "./FadeIn";
import { VideoWithFallback } from "./MediaPlaceholder";

const cards = [
  {
    title: "Kizomba",
    src: "/assets/kizomba-clip.mp4",
    filename: "kizomba-clip.mp4",
    caption: "Slow, close, conversational. Every step is a listening.",
  },
  {
    title: "Semba",
    src: "/assets/semba-clip.mp4",
    filename: "semba-clip.mp4",
    caption: "Playful and rhythmic. The Angolan root of everything.",
  },
];

export default function Styles() {
  return (
    <section id="styles" className="bg-noite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-script text-2xl text-ouro">As danças</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
            Two dances, one heartbeat
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-cream/80">
            Semba is the Angolan parent dance — playful, rhythmic, earthy.
            Kizomba is its softer, more intimate descendant — slow, connected,
            conversational. Learning both deepens your feel for the music and
            the culture.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <article className="overflow-hidden rounded-lg">
                <VideoWithFallback
                  src={c.src}
                  filename={c.filename}
                  label={c.filename}
                  controls
                  className="mx-auto aspect-[9/16] w-full max-w-sm bg-terra object-cover"
                />
                <div className="mt-5">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-cream/80">{c.caption}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Gold hairline divider before the next section */}
        <div className="mt-24 hairline" />
      </div>
    </section>
  );
}
