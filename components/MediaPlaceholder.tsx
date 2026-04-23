"use client";

import { useState } from "react";

/**
 * Renders an <img>. If the file is missing (onError fires), falls back to a
 * warm terra-colored tile showing the filename in cream text so it's obvious
 * to the editor what asset needs to go there.
 */
export function ImageWithFallback({
  src,
  alt,
  filename,
  className,
}: {
  src: string;
  alt: string;
  filename: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-terra text-cream p-6 text-center ${className ?? ""}`}
      >
        <span className="font-sans text-sm break-all">{filename}</span>
      </div>
    );
  }

  return (
    // Using plain <img> (not next/image) so that missing files fall back
    // gracefully via onError without Next.js optimization pipeline errors.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/**
 * Renders a <video>. If the file is missing or fails to load, falls back to a
 * terra-colored tile showing the filename in cream text.
 */
export function VideoWithFallback({
  src,
  filename,
  controls = false,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
  className,
  label,
}: {
  src: string;
  filename: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-terra text-cream p-6 text-center ${className ?? ""}`}
      >
        <span className="font-sans text-sm break-all">{label ?? filename}</span>
      </div>
    );
  }

  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      poster={poster}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/**
 * Hero-specific silent video that hides itself on error (no visible fallback).
 * Lets the pulsing gold glow behind it remain visible when the file is
 * missing, per spec.
 */
export function HeroVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
