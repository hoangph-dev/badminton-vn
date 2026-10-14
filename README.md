# badminton_vn

Landing page cho kênh TikTok **badminton_vn** (highlight trận đấu cầu lông) kèm danh sách đồ cầu lông theo mô hình affiliate (Shopee / TikTok Shop).

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui.

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/` (tìm các comment `TODO`):

| File | Nội dung |
| --- | --- |
| `src/data/site.ts` | Tên kênh, handle/URL TikTok, mạng xã hội, số liệu hero, lịch đăng, email liên hệ |
| `src/data/videos.ts` | Danh sách video TikTok (URL dạng `https://www.tiktok.com/@user/video/<id>`). `featured: true` = video ở hero |
| `src/data/products.ts` | Sản phẩm: danh mục, trình độ, giá, nhận xét, tag, link affiliate Shopee / TikTok Shop |

Ảnh sản phẩm: đặt vào `public/products/` và khai báo `image: "/products/ten-anh.jpg"`. Để trống sẽ hiện ảnh placeholder.

Video được nhúng bằng TikTok Embed Player (iframe, không cần API key).

## Cấu trúc

- `src/app/page.tsx` – ghép các section của landing page
- `src/components/landing/` – các section (hero, video, sản phẩm, gợi ý theo trình độ, về kênh, FAQ, footer)
- `src/components/ui/` – component shadcn/ui
