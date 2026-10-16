"use client";

import * as m from "motion/react-m";
import { LogoMark } from "@/components/landing/logo";

const chips = [
  { label: "BWF", className: "left-0 top-10", delay: 0 },
  { label: "Momota", className: "right-0 top-24", delay: 0.8 },
  { label: "Lin Dan", className: "bottom-16 left-2", delay: 1.6 },
];

/** Hình minh hoạ hero: logo nổi bập bềnh, vòng sáng lan toả, vài nhãn trôi quanh. */
export function ShuttleVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
      {[0, 1].map((i) => (
        <m.span
          key={i}
          aria-hidden
          className="absolute size-3/5 rounded-full border-2 border-brand-yellow/50"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: 1.7, opacity: 0 }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.6, ease: "easeOut" }}
        />
      ))}
      <m.div
        className="relative size-3/5 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { type: "spring", stiffness: 160, damping: 14 },
          rotate: { type: "spring", stiffness: 160, damping: 14 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
      >
        <LogoMark className="size-full" />
      </m.div>
      {chips.map((chip) => (
        <m.span
          key={chip.label}
          className={`absolute rounded-full bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur ${chip.className}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.8 + chip.delay * 0.3, duration: 0.5 },
            scale: { delay: 0.8 + chip.delay * 0.3, type: "spring" },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay },
          }}
        >
          {chip.label}
        </m.span>
      ))}
    </div>
  );
}
