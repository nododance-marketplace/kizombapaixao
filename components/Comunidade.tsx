import FadeIn from "./FadeIn";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Weekly updates, socials, and last-minute changes",
    cta: "Request to Join",
    href: "mailto:charlottekizombapaixao@yahoo.com?subject=WhatsApp%20group%20request",
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Videos, clips, and event photos",
    cta: "@charlotte_kizomba_paixao",
    href: "https://www.instagram.com/charlotte_kizomba_paixao/",
  },
  {
    icon: Facebook,
    title: "Facebook",
    desc: "Events and community posts",
    cta: "Kizomba with Brandon",
    href: "https://www.facebook.com/kizombawithbrandon",
  },
];

export default function Comunidade() {
  return (
    <section id="comunidade" className="bg-noite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-script text-2xl text-ouro">Conecte-se</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
            Join the community
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isExternal = c.href.startsWith("http");
            return (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-lg border border-ouro/50 bg-noite p-8">
                  <Icon size={32} className="text-ouro" aria-hidden />
                  <h3 className="mt-6 font-display text-2xl text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-cream/80">{c.desc}</p>
                  <a
                    href={c.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex w-fit rounded-full bg-paixao px-6 py-3 text-sm font-semibold text-cream transition-transform duration-150 hover:scale-[1.02] focus-visible:scale-[1.02]"
                  >
                    {c.cta}
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
