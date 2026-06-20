export type HeroSlide = {
  id: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  imageFilter?: string;
};

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: "hero-banner-5",
    imageSrc: "/hero_section_banner/banner5/pc.png",
    mobileImageSrc: "/hero_section_banner/banner5/mobile.png",
    imageAlt: "Hanket hero banner 5",
  },
];

export const categoryHeroSlides: Record<string, HeroSlide[]> = {
  Women: [
    {
      id: "women-wedding-edit",
      imageSrc: "/category-pages/wedding-occasion/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/wedding-occasion/banner/banner1/mobile.png",
      imageAlt: "The Wedding Edit",
    },
    {
      id: "women-banner2",
      imageSrc: "/category-pages/women/banner/banner2/pc.jpeg",
      mobileImageSrc: "/category-pages/women/banner/banner2/mobile.jpeg",
      imageAlt: "Women banner2",
    },
    {
      id: "women-banner3",
      imageSrc: "/category-pages/women/banner/banner3/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner3/mobile.png",
      imageAlt: "Women banner3",
    },
    {
      id: "women-banner5",
      imageSrc: "/category-pages/women/banner/banner5/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner5/mobile.png",
      imageAlt: "Women banner5",
    },
  ],
  Men: [
    {
      id: "men-banner2",
      imageSrc: "/category-pages/men/banner/banner2/pc.png",
      mobileImageSrc: "/category-pages/men/banner/banner2/mobile.png",
      imageAlt: "Men banner 2",
    },
    {
      id: "men-banner3",
      imageSrc: "/category-pages/men/banner/banner3/pc.png",
      mobileImageSrc: "/category-pages/men/banner/banner3/mobile.png",
      imageAlt: "Men banner 3",
    },
  ],
  Kids: [
    {
      id: "kids-banner1",
      imageSrc: "/category-pages/kids/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner1/mobile.png",
      imageAlt: "Kids banner 1",
    },
    {
      id: "kids-banner2",
      imageSrc: "/category-pages/kids/banner/banner2/pc.png?v=2",
      mobileImageSrc: "/category-pages/kids/banner/banner2/mobile.png",
      imageAlt: "Kids banner 2",
    },
  ],
  Glam: [
    {
      id: "glam-banner1",
      imageSrc: "/category-pages/glam/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/glam/banner/banner1/mobile.png",
      imageAlt: "Glam banner",
    },
  ],
  "Wedding & Occasion": [
    {
      id: "wedding-occasion-banner1",
      imageSrc: "/category-pages/wedding-occasion/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/wedding-occasion/banner/banner1/mobile.png",
      imageAlt: "Wedding and occasion banner",
    },
  ],
  Footwear: [
    {
      id: "footwear-banner1",
      imageSrc: "/category-pages/footwear/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/footwear/banner/banner1/mobile.png",
      imageAlt: "Footwear banner",
    },
  ],
};

export const heroSlides = categoryHeroSlides.Women ?? defaultHeroSlides;
