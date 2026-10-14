import { Sparkles, Trophy, Users } from "lucide-react";
import { levels, products, type Level } from "@/data/products";
import { SectionHeading } from "./section-heading";

const levelInfo: Record<Level, { icon: typeof Sparkles; description: string }> = {
  "Người mới": {
    icon: Sparkles,
    description: "Mới cầm vợt, chơi 1–2 buổi/tuần. Ưu tiên nhẹ, dễ đánh, giá mềm.",
  },
  "Phong trào": {
    icon: Users,
    description: "Đánh đều đặn, bắt đầu đánh đôi, cần đồ bền và cân bằng công – thủ.",
  },
  "Thi đấu": {
    icon: Trophy,
    description: "Tham gia giải, cần vợt đúng lối đánh và cầu chuẩn thi đấu.",
  },
};

export function LevelGuide() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Chọn đồ theo trình độ"
          title="Không biết bắt đầu từ đâu?"
          description="Chọn đúng trình độ của bạn – kênh đã lọc sẵn những món đáng tiền nhất."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {levels.map((level) => {
            const { icon: Icon, description } = levelInfo[level];
            const picks = products.filter((p) => p.level === level).slice(0, 3);
            return (
              <div key={level} className="rounded-2xl border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{level}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {picks.map((p) => (
                    <li key={p.id}>
                      <a href={`#sp-${p.id}`} className="font-medium text-primary hover:underline">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
