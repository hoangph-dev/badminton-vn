export const productCategories = [
  "Vợt",
  "Giày",
  "Cầu",
  "Balo/Túi",
  "Phụ kiện",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const levels = ["Người mới", "Phong trào", "Thi đấu"] as const;

export type Level = (typeof levels)[number];

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  level: Level;
  priceRange: string;
  /** Ảnh trong /public/products/... – để trống sẽ hiện ảnh placeholder */
  image?: string;
  note: string;
  tags: string[];
  /** Link affiliate */
  links: { shopee?: string; tiktokShop?: string };
};

// TODO: thay bằng sản phẩm + link affiliate thật.
export const products: Product[] = [
  {
    id: "vot-cong-cong",
    name: "Vợt công thủ toàn diện 4U",
    category: "Vợt",
    level: "Phong trào",
    priceRange: "1.500.000 – 2.200.000đ",
    note: "Cây vợt kênh dùng nhiều nhất khi quay đánh đôi. Cân bằng, dễ điều cầu.",
    tags: ["Kênh đang dùng"],
    links: { shopee: "https://shopee.vn/", tiktokShop: "https://www.tiktok.com/" },
  },
  {
    id: "vot-nguoi-moi",
    name: "Vợt nhẹ 5U cho người mới",
    category: "Vợt",
    level: "Người mới",
    priceRange: "450.000 – 700.000đ",
    note: "Nhẹ tay, đầu vợt mềm, giúp làm quen kỹ thuật mà không mỏi cổ tay.",
    tags: ["Cho người mới", "Dưới 1 triệu"],
    links: { shopee: "https://shopee.vn/" },
  },
  {
    id: "vot-tan-cong",
    name: "Vợt nặng đầu chuyên tấn công 3U",
    category: "Vợt",
    level: "Thi đấu",
    priceRange: "3.000.000 – 4.500.000đ",
    note: "Smash uy lực, phù hợp người đã có lực cổ tay tốt.",
    tags: ["Tấn công"],
    links: { shopee: "https://shopee.vn/", tiktokShop: "https://www.tiktok.com/" },
  },
  {
    id: "giay-bam-san",
    name: "Giày cầu lông bám sân đế cao su non",
    category: "Giày",
    level: "Phong trào",
    priceRange: "900.000 – 1.400.000đ",
    note: "Đế bám tốt trên sân thảm, đệm gót êm khi bật nhảy.",
    tags: ["Kênh đang dùng"],
    links: { shopee: "https://shopee.vn/" },
  },
  {
    id: "giay-gia-re",
    name: "Giày tập cơ bản",
    category: "Giày",
    level: "Người mới",
    priceRange: "500.000 – 800.000đ",
    note: "Đủ dùng cho 2–3 buổi/tuần, thay cho giày chạy bộ dễ lật cổ chân.",
    tags: ["Dưới 1 triệu", "Cho người mới"],
    links: { tiktokShop: "https://www.tiktok.com/" },
  },
  {
    id: "cau-long-vu",
    name: "Cầu lông vũ ngỗng (ống 12 quả)",
    category: "Cầu",
    level: "Thi đấu",
    priceRange: "280.000 – 350.000đ",
    note: "Bay ổn định, bền, loại kênh dùng khi quay các trận giao hữu.",
    tags: ["Kênh đang dùng"],
    links: { shopee: "https://shopee.vn/", tiktokShop: "https://www.tiktok.com/" },
  },
  {
    id: "balo-2-ngan",
    name: "Balo cầu lông 2 ngăn có ngăn giày",
    category: "Balo/Túi",
    level: "Phong trào",
    priceRange: "400.000 – 650.000đ",
    note: "Đựng được 2–3 vợt, ngăn giày riêng thoáng khí.",
    tags: ["Dưới 1 triệu"],
    links: { shopee: "https://shopee.vn/" },
  },
  {
    id: "quan-can",
    name: "Quấn cán chống trơn (set 5 cuộn)",
    category: "Phụ kiện",
    level: "Người mới",
    priceRange: "60.000 – 120.000đ",
    note: "Thấm mồ hôi tốt, thay 2 tuần/lần là cầm vợt chắc tay.",
    tags: ["Dưới 1 triệu"],
    links: { shopee: "https://shopee.vn/", tiktokShop: "https://www.tiktok.com/" },
  },
];
