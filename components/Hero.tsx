"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FilmGrain from "./FilmGrain";

// Breakpoint + asset paths kept in one place so the <source media=""> markup
// and the JS-side matchMedia stay in sync.
const MOBILE_QUERY = "(max-width: 768px)";
const MOBILE_SRC = "/assets/hero-mobile.mp4";
const DESKTOP_SRC = "/assets/hero-desktop.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Tracks which src the video is currently playing so we don't reload on
  // every resize — only when the mobile/desktop boundary is actually crossed.
  const currentSrcRef = useRef<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mql = window.matchMedia(MOBILE_QUERY);
    currentSrcRef.current = mql.matches ? MOBILE_SRC : DESKTOP_SRC;

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const onChange = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const next = mql.matches ? MOBILE_SRC : DESKTOP_SRC;
        if (next === currentSrcRef.current) return;
        currentSrcRef.current = next;
        video.src = next;
        video.load();
        void video.play().catch(() => {
          /* autoplay may be blocked — safe to ignore, video is muted */
        });
      }, 300);
    };

    mql.addEventListener("change", onChange);
    return () => {
      mql.removeEventListener("change", onChange);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Pulsing gold glow — visible if the hero video fails to load */}
      <div className="absolute inset-0 bg-noite">
        <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ouro/20 blur-3xl animate-pulse-glow" />
      </div>

      {/* Responsive hero video — browser picks mobile vs desktop source via
          the media attribute on initial load; the useEffect above handles
          live swaps when the viewport crosses the 768px threshold. */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/logo-black-bg.png"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={MOBILE_SRC} type="video/mp4" media="(max-width: 768px)" />
        <source src={DESKTOP_SRC} type="video/mp4" media="(min-width: 769px)" />
        {/* Fallback for browsers that ignore the media attribute */}
        <source src={DESKTOP_SRC} type="video/mp4" />
      </video>

      {/* Bottom-heavy dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-noite via-noite/60 to-noite/20" />

      <FilmGrain />

      {/* Centered content — staggered fade-up on mount */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="font-script text-ouro text-2xl md:text-3xl"
        >
          Vem dançar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-display font-black text-cream text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Kizomba &amp; Semba
          <br />
          <span className="text-cream">in Charlotte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-xl text-base text-cream/90 md:text-lg"
        >
          Rooted in Angola. Danced with soul. Taught with intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#aulas"
            className="rounded-full bg-paixao px-8 py-4 text-sm font-semibold text-cream transition-transform duration-150 hover:scale-[1.02] focus-visible:scale-[1.02]"
          >
            Book a Class
          </a>
          <a
            href="#comunidade"
            className="rounded-full border border-cream/60 px-8 py-4 text-sm font-semibold text-cream transition-transform duration-150 hover:scale-[1.02]"
          >
            Join the Community
          </a>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#sobre"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-ouro animate-bounce-slow"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
