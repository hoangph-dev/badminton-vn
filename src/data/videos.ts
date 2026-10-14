export const videoCategories = [
  "Momota – Lee Chong Wei",
  "Momota – Lin Dan",
  "Momota",
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

// Video thật từ @badminton_vn3. Thêm video mới: dán URL + tiêu đề vào đây.
export const videos: Video[] = [
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7693924050099342593",
    title: "Kento Momota vs Lee Chong Wei – trận đấu hay nhất mình từng xem",
    category: "Momota – Lee Chong Wei",
    featured: true,
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7691713970973035783",
    title: "Khi 2 quái vật của làng cầu lông thế giới khởi động",
    category: "Momota – Lee Chong Wei",
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7691720928346000646",
    title: "Momota vs Lee Chong Wei – 11 điểm đầu",
    category: "Momota – Lee Chong Wei",
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7694268292093054260",
    title: "Những điểm cuối căng thẳng – Momota có lật được thế trận?",
    category: "Momota – Lee Chong Wei",
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7695002231510207750",
    title: "Momota vs Lin Dan – màn khởi động của 2 tay vợt đơn nam mạnh nhất lịch sử",
    category: "Momota – Lin Dan",
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7695803337916091668",
    title: "Momota vs Lin Dan, tứ kết Japan Open 2018 – trận đấu chuyển giao thế hệ",
    category: "Momota – Lin Dan",
  },
  {
    url: "https://www.tiktok.com/@badminton_vn3/video/7690087906559413512",
    title: "Thời hoàng kim của Kento Momota",
    category: "Momota",
  },
]

export function getVideoId(url: string) {
  return url.match(/\/video\/(\d+)/)?.[1] ?? null;
}
