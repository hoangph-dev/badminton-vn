import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { videos } from "@/data/videos";
import { TikTokEmbed } from "./tiktok-embed";

export function Hero() {
  const featured = videos.find((v) => v.featured) ?? videos[0];

  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand-yellow/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium">
            {site.tiktok.handle} · {site.schedule}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
            Trận cầu lông BWF kinh điển.{" "}
            <span className="text-brand-yellow">Cắt gọn cho bạn xem.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-brand-yellow px-6 text-base font-bold text-brand-ink hover:bg-brand-yellow/90"
            >
              <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
                Xem trên TikTok
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#do-cau-long">
                Xem đồ kênh đang dùng <ArrowRight />
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-white/70 sm:text-sm">{s.label}</dt>
                <dd className="text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto w-full max-w-[22rem] rounded-2xl bg-white p-1 shadow-2xl">
          <TikTokEmbed url={featured.url} title={featured.title} />
        </div>
      </div>
    </section>
  );
}
