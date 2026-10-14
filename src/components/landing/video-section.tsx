import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { videos } from "@/data/videos";
import { SectionHeading } from "./section-heading";
import { TikTokEmbed } from "./tiktok-embed";

export function VideoSection() {
  const list = videos.filter((v) => !v.featured).slice(0, 6);

  return (
    <section id="video" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Video nổi bật"
          title="Những trận cầu kinh điển đáng xem nhất"
          description="Momota, Lee Chong Wei, Lin Dan… được cắt gọn từ các giải BWF lớn, chia theo từng đoạn để dễ xem."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((video) => (
            <article key={video.url} className="flex flex-col gap-3">
              <TikTokEmbed url={video.url} title={video.title} />
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold leading-snug">{video.title}</h3>
                <Badge variant="secondary" className="shrink-0">
                  {video.category}
                </Badge>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="h-11 rounded-full px-6">
            <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
              Xem tất cả trên TikTok <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
