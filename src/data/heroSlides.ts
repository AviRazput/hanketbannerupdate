export type HeroSlide = {
  id: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  imageFilter?: string;
};

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: "hero-banner-7",
    imageSrc: "/hero_section_banner/banner7/pc.png",
    mobileImageSrc: "/hero_section_banner/banner7/mobile.png",
    imageAlt: "Hanket hero banner 7",
  },
  {
    id: "hero-banner-5",
    imageSrc: "/hero_section_banner/banner5/pc.png",
    mobileImageSrc: "/hero_section_banner/banner5/mobile.png",
    imageAlt: "Hanket hero banner 5",
  },
  {
    id: "hero-banner-1",
    imageSrc: "/hero_section_banner/banner1/pc.png",
    mobileImageSrc: "/hero_section_banner/banner1/mobile.png",
    imageAlt: "Hanket hero banner 1",
  },
  {
    id: "hero-banner-3",
    imageSrc: "/hero_section_banner/banner3/pc.png",
    mobileImageSrc: "/hero_section_banner/banner3/mobile.png",
    imageAlt: "Hanket hero banner 3",
  },
  {
    id: "hero-banner-4",
    imageSrc: "/hero_section_banner/banner4/pc.png",
    mobileImageSrc: "/hero_section_banner/banner4/mobile.png",
    imageAlt: "Hanket hero banner 4",
  },
];

export const categoryHeroSlides: Record<string, HeroSlide[]> = {
  Women: [
    ["banner1", "png"],
    ["banner2", "jpeg"],
    ["banner3", "png"],
    ["banner4", "jpg"],
    ["banner5", "png"],
  ].map(([banner, extension]) => ({
    id: `women-${banner}`,
    imageSrc: `/category-pages/women/banner/${banner}/pc.${extension}`,
    mobileImageSrc: `/category-pages/women/banner/${banner}/mobile.${extension}`,
    imageAlt: `Women ${banner}`,
  })),
  Men: [
    {
      id: "men-banner1",
      imageSrc: "/category-pages/men/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/men/banner/banner1/mobile.png",
      imageAlt: "Men banner",
    },
  ],
  Kids: [
    {
      id: "kids-banner",
      imageSrc: "/category-pages/kids/banner/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/mobile.png",
      imageAlt: "Kids banner",
    },
  ],
};

export const heroSlides = categoryHeroSlides.Women ?? defaultHeroSlides;
