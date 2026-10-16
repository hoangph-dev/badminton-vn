"use client";

import { LazyMotion, MotionConfig, domMax } from "motion/react";

/** Nạp tính năng animation theo kiểu lazy (domMax: có layout animation cho bộ lọc sản phẩm); tự tắt chuyển động nếu người dùng bật "reduce motion". */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
