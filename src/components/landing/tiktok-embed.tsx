import { Play } from "lucide-react";
import { getVideoId } from "@/data/videos";
import { cn } from "@/lib/utils";

/**
 * Nhúng video bằng TikTok Embed Player (iframe, không cần script/API key).
 * `loading="lazy"` để trình duyệt chỉ tải khi video gần vào màn hình.
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
    <div
      className={cn(
        "relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-brand-ink",
        className,
      )}
    >
      {id ? (
        <iframe
          src={`https://www.tiktok.com/player/v1/${id}?music_info=1&description=1&rel=0`}
          title={title}
          loading="lazy"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
            <Play className="size-6 fill-current" />
          </span>
          <span className="px-6 text-center text-sm font-medium">{title}</span>
        </a>
      )}
    </div>
  );
}
