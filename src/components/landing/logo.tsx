import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={cn("size-9", className)}>
      <rect width="120" height="120" rx="30" fill="#0F6B45" />
      <path
        d="M30 78 L18 90 M42 88 L32 98 M22 66 L14 74"
        stroke="#F5C518"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <g transform="translate(66 54) rotate(-135) translate(-50 -42)">
        <path
          d="M40 68 L22 16 Q29 9 36 16 Q43 9 50 16 Q57 9 64 16 Q71 9 78 16 L60 68 Z"
          fill="#FFFFFF"
        />
        <path
          d="M50 68 L50 17 M45 68 L36 17 M55 68 L64 17"
          stroke="#0F6B45"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M32 44 L68 44" stroke="#F5C518" strokeWidth="5" strokeLinecap="round" />
        <path d="M37 67 L63 67 L63 72 A13 13 0 0 1 37 72 Z" fill="#F5C518" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="text-xl font-extrabold tracking-tight">
        badminton
        <span className="mx-0.5 inline-block h-1.5 w-3 rounded-full bg-brand-yellow align-baseline" />
        <span className="text-primary">vn</span>
      </span>
    </span>
  );
}
