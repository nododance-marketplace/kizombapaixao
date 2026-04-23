import { Instagram, Facebook, Mail } from "lucide-react";
import { ImageWithFallback } from "./MediaPlaceholder";

export default function Footer() {
  return (
    <footer className="border-t border-ouro/25 bg-noite py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <ImageWithFallback
          src="/assets/logo-transparent.png"
          alt="Charlotte Kizomba Paixão"
          filename="logo-transparent.png"
          className="max-h-16 w-auto"
        />

        <p className="font-script text-xl text-ouro">
          Feito com paixão em Charlotte, NC
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://www.instagram.com/charlotte_kizomba_paixao/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream transition-transform duration-150 hover:scale-110 hover:text-ouro"
            >
              <Instagram size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kizombawithbrandon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream transition-transform duration-150 hover:scale-110 hover:text-ouro"
            >
              <Facebook size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:charlottekizombapaixao@yahoo.com"
              aria-label="Email"
              className="text-cream transition-transform duration-150 hover:scale-110 hover:text-ouro"
            >
              <Mail size={20} />
            </a>
          </li>
        </ul>

        <p className="text-xs text-cream/40">
          © 2026 Charlotte Kizomba Paixão
        </p>
      </div>
    </footer>
  );
}
