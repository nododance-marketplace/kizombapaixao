import FadeIn from "./FadeIn";

export default function Bookings() {
  return (
    <section id="contato" className="bg-noite py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <p className="font-script text-2xl text-ouro">
            Festivais &amp; privadas
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
            Book Brandon for festivals &amp; privates
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/80">
            Available for festival teaching, performances, and private lessons
            across the Southeast. Reach out for rates and availability.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:charlottekizombapaixao@yahoo.com"
              className="rounded-full bg-paixao px-8 py-4 text-sm font-semibold text-cream transition-transform duration-150 hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              charlottekizombapaixao@yahoo.com
            </a>
            <a
              href="tel:+13306976318"
              className="rounded-full border border-cream/60 px-8 py-4 text-sm font-semibold text-cream transition-transform duration-150 hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              (330) 697-6318
            </a>
          </div>
          <p className="mt-8 text-sm italic text-cream/70">
            Response within 48 hours.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
