import { Clapperboard, Send, Trophy } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { site } from "@/data/site";
import { SectionHeading } from "./section-heading";

const points = [
  {
    icon: Trophy,
    title: "Trận đấu đỉnh cao",
    text: "Chọn lọc từ các giải BWF lớn: Momota, Lee Chong Wei, Lin Dan, Chen Long…",
  },
  {
    icon: Clapperboard,
    title: "Cắt gọn, chia phần",
    text: "Mỗi trận được chia theo từng đoạn (khởi động, 11 điểm đầu, những điểm cuối) để xem nhanh mà không bỏ lỡ pha hay.",
  },
  {
    icon: Send,
    title: "Gợi ý trận muốn xem",
    text: "Muốn xem trận nào được cắt tiếp? Bình luận hoặc nhắn tin trực tiếp cho kênh trên TikTok.",
  },
];

export function About() {
  return (
    <section id="ve-kenh" className="scroll-mt-16 bg-brand-ink py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div className="[&_p]:text-white/75 [&_p.text-primary]:text-brand-yellow">
          <SectionHeading
            eyebrow="Về kênh"
            title="Những trận cầu lông hay nhất, cắt gọn cho bạn"
            description="badminton_vn là kênh của người mê cầu lông, chuyên cắt những trận đấu kinh điển ở các giải BWF lớn. Ngoài xem trận, kênh còn chia sẻ đồ cầu lông mình dùng ở giỏ hàng TikTok Shop."
          />
          <div className="flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <Stagger as="ul" className="space-y-4" stagger={0.12}>
          {points.map(({ icon: Icon, title, text }) => (
            <StaggerItem as="li" key={title} className="flex gap-4 rounded-2xl bg-white/5 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
