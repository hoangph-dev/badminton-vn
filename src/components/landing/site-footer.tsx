import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t pb-24 sm:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl bg-brand px-6 py-10 text-center text-white md:py-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Follow để không bỏ lỡ trận nào
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Những trận cầu lông BWF hay nhất được cắt gọn, cập nhật liên tục trên TikTok.
          </p>
          <Button
            asChild
            className="mt-6 h-12 rounded-full bg-brand-yellow px-8 text-base font-bold text-brand-ink hover:bg-brand-yellow/90"
          >
            <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
              Follow {site.tiktok.handle}
            </a>
          </Button>
        </div>
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">{site.tagline}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Hợp tác & quảng cáo</p>
            <a
              href={site.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Send className="size-4" /> Nhắn tin {site.tiktok.handle}
            </a>
          </div>
        </div>
        <p className="mt-10 border-t pt-6 text-xs text-muted-foreground">
          Một số liên kết trên trang là liên kết tiếp thị (affiliate). Khi bạn mua qua các liên kết
          này, {site.name} có thể nhận hoa hồng từ sàn mà bạn không phải trả thêm chi phí. ©{" "}
          {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  );
}
