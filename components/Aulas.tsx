import FadeIn from "./FadeIn";
import { schedule, PUNCHPASS_URL } from "@/data/schedule";

export default function Aulas() {
  return (
    <section id="aulas" className="bg-noite py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="font-script text-2xl text-ouro">Aulas</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
            Weekly classes in Charlotte
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14">
            <div className="hairline" />
            <ul className="divide-y divide-ouro/25">
              {schedule.map((row) => (
                <li
                  key={`${row.day}-${row.title}`}
                  className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[minmax(110px,auto)_minmax(90px,auto)_1fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="font-display text-xl text-cream">
                    {row.day}
                  </span>
                  <span className="text-ouro">{row.time}</span>
                  <span className="text-cream">{row.title}</span>
                  <span className="text-sm text-cream/60">{row.location}</span>
                </li>
              ))}
            </ul>
            <div className="hairline" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-col items-center">
            <a
              href={PUNCHPASS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-paixao px-10 py-4 font-semibold text-cream transition-transform duration-150 hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              Book via Punchpass
            </a>
            <p className="mt-6 max-w-lg text-center text-sm text-cream/70">
              New to kizomba? First class is the perfect place to start — no
              partner needed.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
