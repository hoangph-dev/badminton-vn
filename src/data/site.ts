// TODO: thay toàn bộ giá trị placeholder bằng thông tin thật của kênh.
export const site = {
  name: "badminton_vn",
  tagline: "Highlight cầu lông mỗi ngày – đồ chơi chuẩn dân phong trào",
  description:
    "Kênh TikTok tổng hợp pha cầu đẹp, giải phong trào và phân tích trận đấu chuyên nghiệp. Cùng danh sách vợt, giày, cầu được kênh tin dùng.",
  url: "https://badminton.vn", // TODO: domain thật
  tiktok: {
    handle: "@badminton_vn", // TODO
    url: "https://www.tiktok.com/@badminton_vn", // TODO
  },
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@badminton_vn" }, // TODO
    { label: "Facebook", href: "https://facebook.com/" }, // TODO
    { label: "YouTube Shorts", href: "https://youtube.com/" }, // TODO
    { label: "Nhóm Zalo", href: "https://zalo.me/" }, // TODO
  ],
  stats: [
    { label: "Người theo dõi", value: "120K+" }, // TODO
    { label: "Lượt xem", value: "15M+" }, // TODO
    { label: "Trận đã quay", value: "300+" }, // TODO
  ],
  schedule: "Video mới lúc 20:00 mỗi ngày", // TODO
  contactEmail: "lienhe@badminton.vn", // TODO
} as const;
