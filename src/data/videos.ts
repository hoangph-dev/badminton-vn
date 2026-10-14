export const videoCategories = [
  "Pha cầu đẹp",
  "Giải phong trào",
  "Phân tích Pro",
  "Mẹo kỹ thuật",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

export type Video = {
  /** URL video TikTok dạng https://www.tiktok.com/@user/video/<id> */
  url: string;
  title: string;
  category: VideoCategory;
  /** Video hiển thị ở hero */
  featured?: boolean;
};

// TODO: thay bằng URL video thật của kênh.
export const videos: Video[] = [
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000001",
    title: "Pha cứu cầu không tưởng ở set 3",
    category: "Pha cầu đẹp",
    featured: true,
  },
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000002",
    title: "Chung kết đôi nam giải phong trào Hà Nội",
    category: "Giải phong trào",
  },
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000003",
    title: "Vì sao cú smash này ăn điểm? Phân tích chậm",
    category: "Phân tích Pro",
  },
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000004",
    title: "3 lỗi cầm vợt người mới hay mắc",
    category: "Mẹo kỹ thuật",
  },
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000005",
    title: "Rally 60 chạm cầu đôi nữ",
    category: "Pha cầu đẹp",
  },
  {
    url: "https://www.tiktok.com/@bwf.official/video/7300000000000000006",
    title: "Đánh đôi: đứng vị trí sao cho đúng",
    category: "Mẹo kỹ thuật",
  },
];

export function getVideoId(url: string) {
  return url.match(/\/video\/(\d+)/)?.[1] ?? null;
}
