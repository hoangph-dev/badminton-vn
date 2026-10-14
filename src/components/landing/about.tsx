import { CalendarDays, Clapperboard, Send } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./section-heading";

const points = [
  {
    icon: Clapperboard,
    title: "Quay tận sân",
    text: "Kênh trực tiếp mang máy tới các giải phong trào, CLB và sân tập khắp Hà Nội – TP.HCM.",
  },
  {
    icon: CalendarDays,
    title: "Đăng đều mỗi ngày",
    text: site.schedule + ". Highlight cuối tuần tổng hợp những pha hay nhất.",
  },
  {
    icon: Send,
    title: "Gửi clip của bạn",
    text: "Có pha cầu đẹp? Nhắn kênh qua TikTok hoặc email, clip hay sẽ được lên sóng.",
  },
];

export function About() {
  return (
    <section id="ve-kenh" className="scroll-mt-16 bg-brand-ink py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div className="[&_p]:text-white/75 [&_p.text-primary]:text-brand-yellow">
          <SectionHeading
            eyebrow="Về kênh"
            title="Từ sân phong trào tới màn hình của bạn"
            description="badminton_vn bắt đầu từ một nhóm bạn mê cầu lông, muốn lưu lại những pha cầu đẹp ở sân nhà. Giờ đây kênh là nơi hàng trăm nghìn người chơi phong trào xem, học và chọn đồ."
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
        <ul className="space-y-4">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-2xl bg-white/5 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
