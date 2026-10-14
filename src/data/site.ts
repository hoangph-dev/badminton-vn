// TODO: các mục còn đánh dấu TODO là placeholder, thay bằng thông tin thật.
export const site = {
  name: "badminton_vn",
  tagline: "Những trận cầu lông BWF đỉnh cao, cắt gọn cho bạn xem",
  description:
    "Kênh TikTok cắt các trận đấu hay nhất từ những giải BWF lớn: Momota, Lee Chong Wei, Lin Dan… Kèm đồ cầu lông kênh đang dùng.",
  url: "https://badminton-vn.devcraft.io.vn",
  tiktok: {
    handle: "@badminton_vn3",
    url: "https://www.tiktok.com/@badminton_vn3",
  },
  socials: [{ label: "TikTok", href: "https://www.tiktok.com/@badminton_vn3" }],
  // Số liệu lấy từ trang kênh TikTok ngày 2026-10-14.
  stats: [
    { label: "Người theo dõi", value: "1.266" },
    { label: "Lượt thích", value: "59K" },
    { label: "Video hot nhất", value: "275K" },
  ],
  schedule: "Cắt từ các giải BWF lớn",
} as const;
