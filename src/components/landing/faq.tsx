import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    q: "Mua qua link của kênh có đắt hơn không?",
    a: "Không. Giá bạn trả giống hệt khi tự tìm trên TikTok Shop. Kênh nhận một khoản hoa hồng nhỏ từ sàn để duy trì việc quay video.",
  },
  {
    q: "Đồ trong danh sách có phải kênh dùng thật không?",
    a: "Những món gắn nhãn “Kênh đang dùng” là đồ kênh dùng khi quay. Các món còn lại được chọn dựa trên đánh giá của cộng đồng và trải nghiệm thực tế.",
  },
  {
    q: "Kênh có nhận review sản phẩm không?",
    a: `Có. Thương hiệu và shop vui lòng nhắn tin trực tiếp qua TikTok ${site.tiktok.handle}. Kênh chỉ nhận review khi được dùng thử thật.`,
  },
  {
    q: "Video trên kênh lấy từ đâu?",
    a: "Các video được cắt từ những trận đấu hay tại các giải BWF lớn. Toàn bộ bản quyền trận đấu thuộc về BWF và các đơn vị phát sóng; kênh chỉ biên tập lại để người xem dễ theo dõi.",
  },
];

export function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="Hỏi đáp" title="Câu hỏi thường gặp" />
        <div className="divide-y rounded-2xl border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
