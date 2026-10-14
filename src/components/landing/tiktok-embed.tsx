"use client";

import Script from "next/script";
import { getVideoId } from "@/data/videos";
import { cn } from "@/lib/utils";

/**
 * Nhúng video bằng TikTok Embed chính thức (blockquote + embed.js).
 * Script tải lười (lazyOnload) và dùng chung cho mọi video trên trang.
 */
export function TikTokEmbed({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const id = getVideoId(url);

  return (
    <div className={cn("flex w-full flex-col items-center", className)}>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={id ?? undefined}
        style={{ maxWidth: 605, minWidth: 288, margin: 0, width: "100%" }}
      >
        <section>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </section>
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
