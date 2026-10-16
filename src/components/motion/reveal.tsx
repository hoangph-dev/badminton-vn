"use client";

import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const variants: Record<"up" | "left" | "right" | "scale", Variants> = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: keyof typeof variants;
  delay?: number;
  /** true: chạy ngay khi tải trang (hero); false: chạy khi cuộn tới. */
  immediate?: boolean;
};

/** Hiện dần + trượt nhẹ khi phần tử vào màn hình (chỉ chạy một lần). */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  immediate = false,
}: RevealProps) {
  return (
    <m.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -80px 0px" } })}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </m.div>
  );
}

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Container: các StaggerItem bên trong xuất hiện lần lượt. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  immediate = false,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  immediate?: boolean;
  as?: "div" | "ul" | "dl";
}) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -80px 0px" } })}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = m[as];
  return (
    <Comp className={cn(className)} variants={variants.up} transition={{ duration: 0.55, ease }}>
      {children}
    </Comp>
  );
}
