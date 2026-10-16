"use client";

import { useEffect, useState } from "react";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { productCategories, products, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { SectionHeading } from "./section-heading";

type Filter = "Tất cả" | ProductCategory;

const filters: Filter[] = ["Tất cả", ...productCategories];

export function ProductSection() {
  const [active, setActive] = useState<Filter>("Tất cả");
  // Link "#sp-..." từ phần gợi ý theo trình độ: bỏ lọc để sản phẩm luôn hiển thị.
  useEffect(() => {
    const onHashChange = () => {
      if (!location.hash.startsWith("#sp-")) return;
      setActive("Tất cả");
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const list = active === "Tất cả" ? products : products.filter((p) => p.category === active);

  return (
    <section id="do-cau-long" className="scroll-mt-16 bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Đồ cầu lông"
          title="Đồ kênh đang dùng & tin dùng"
          description="Danh sách được chọn từ chính những trận kênh quay. Bấm để xem giá mới nhất trên TikTok Shop."
        />
        <div
          role="tablist"
          aria-label="Danh mục sản phẩm"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "relative shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === f ? "border-primary text-primary-foreground" : "bg-background hover:bg-muted",
              )}
            >
              {active === f && (
                <m.span
                  layoutId="active-filter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
        <m.div layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((product) => (
              <m.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ProductCard product={product} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
