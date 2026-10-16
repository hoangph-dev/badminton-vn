"use client";

import * as m from "motion/react-m";
import { useScroll, useSpring } from "motion/react";

/** Thanh tiến độ cuộn trang mảnh ở đỉnh màn hình. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-brand-yellow"
    />
  );
}
