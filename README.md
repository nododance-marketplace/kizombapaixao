# Charlotte Kizomba Paixão

Single-page marketing site for Charlotte Kizomba Paixão — a kizomba and semba
dance community in Charlotte, NC led by Brandon Bell and Hazel Ami Okwaro.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion,
and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Project layout

```
app/
  layout.tsx      Fonts (Playfair, Dancing Script, Inter) + global metadata
  page.tsx        Composes all sections in order
  globals.css     Tailwind layers + hairline / nav-underline utilities
components/       One file per section + reusable helpers
data/
  instructors.ts  Brandon & Hazel bios — edit here, layout adapts
  schedule.ts     Weekly class schedule + PUNCHPASS_URL
public/assets/    All brand media (logo, videos, portraits)
tailwind.config.ts  Brand colors, font families, keyframes
```

## Swapping asset placeholders

Drop real files into [public/assets/](public/assets/) using these exact names:

| File | Purpose |
|---|---|
| `logo.png` | Main logo, already on black bg |
| `hero-video.mp4` | Hero background video (muted autoplay loop) |
| `brandon.jpg` | Brandon's portrait (4:5 vertical crop works best) |
| `hazel.jpg` | Hazel's portrait (4:5 vertical crop works best) |
| `kizomba-clip.mp4` | Brandon dancing kizomba (16:9) |
| `semba-clip.mp4` | Brandon dancing semba (16:9) |

Missing files render as a warm terra-colored tile showing the filename in
cream text, so the editor always knows what goes where. The hero video is a
special case — when missing, it reveals a subtle pulsing gold glow instead of
a filename tile.

> The hero video is intentionally a stand-in right now. A custom AI-composited
> clip will replace `hero-video.mp4` later — no code change needed, just drop
> the new file at the same path.

## Editing the weekly schedule

Open [data/schedule.ts](data/schedule.ts) and edit the `schedule` array. Each
row is `{ day, time, title, location }`. The Aulas section table re-renders
automatically — no layout edits required.

```ts
export const schedule: ClassRow[] = [
  { day: "Tuesday", time: "7:30pm", title: "Kizomba Fundamentals", location: "[Location TBD]" },
  // add / remove / reorder rows freely
];
```

## Updating the Punchpass booking link

In [data/schedule.ts](data/schedule.ts), replace the `PUNCHPASS_URL` constant
with the client's real booking URL:

```ts
export const PUNCHPASS_URL = "https://app.punchpass.com/accounts/XXXXX";
```

The "Book via Punchpass" CTA and any future references to the same constant
update automatically.

## Editing instructor bios

Open [data/instructors.ts](data/instructors.ts) and edit the `instructors`
array. Each entry controls its own card in the Sobre section: name, role,
image path, and bio paragraph. Add a third instructor and the grid gracefully
handles the extra card.

## Brand system reference

Tailwind custom colors (see [tailwind.config.ts](tailwind.config.ts)):

| Token | Hex | Use |
|---|---|---|
| `noite` | `#0B0B0B` | Page background |
| `paixao` | `#C8102E` | Primary CTA buttons |
| `ouro` | `#E8B04B` | Section labels, hairline dividers, accents |
| `sol` | `#F5D547` | Brighter yellow — use sparingly |
| `cream` | `#F4EBD9` | Primary body text on dark |
| `terra` | `#3A241A` | Asset placeholder tiles, depth surfaces |

Fonts (loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx)):

- **Playfair Display** — headings (`font-display`)
- **Dancing Script** — decorative Portuguese phrases only (`font-script`)
- **Inter** — body copy (`font-sans`, default)

## Animation philosophy

Cinematic restraint — nothing flashy or parallax-y.

- Hero text: staggered fade-up on mount (200ms delays)
- Everything else: 0.6s fade-up on scroll-into-view, triggers once
- Buttons: scale to 1.02 on hover (150ms)
- Images: scale to 1.03 on hover (400ms)
- All animations respect `prefers-reduced-motion`

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Alt text on every image; decorative overlays use `aria-hidden`
- Gold focus-visible ring on all interactive elements
- Cream text on noite background meets WCAG AA
- Verify the paixao (`#C8102E`) CTA text contrast after any copy changes

## Deploy

Any Next.js-friendly host works — Vercel is simplest. No server env vars or
API routes required for the current scope.
