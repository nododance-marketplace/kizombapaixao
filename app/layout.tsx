import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dancing",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_TITLE =
  "Charlotte Kizomba Paixão — Kizomba & Semba Classes in Charlotte, NC";
const SITE_DESCRIPTION =
  "Learn kizomba and semba in Charlotte with Brandon Bell and Hazel Ami Okwaro. Rooted in Angola, danced with soul. Weekly classes, socials, and private lessons.";
const OG_IMAGE = "/assets/logo-black-bg.png";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "kizomba charlotte",
    "semba charlotte",
    "kizomba classes north carolina",
    "brandon bell kizomba",
    "angolan dance charlotte",
  ],
  icons: { icon: OG_IMAGE },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body className="bg-noite text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
