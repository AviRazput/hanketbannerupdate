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
    mobileImageSrc: "/mobile_banner/1.png",
    imageAlt: "Hanket hero banner 5",
  },
  {
    id: "hero-banner-6",
    imageSrc: "/hero_section_banner/banner6/pc.png",
    mobileImageSrc: "/hero_section_banner/banner6/mobile.png",
    imageAlt: "Hanket marketplace edit",
  },
  {
    id: "home-men-edit",
    imageSrc: "/category-pages/men/banner/banner2/pc.png",
    mobileImageSrc: "/category-pages/men/banner/banner2/mobile.png",
    imageAlt: "Hanket men edit",
  },
  {
    id: "home-kids-edit",
    imageSrc: "/category-pages/kids/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner1/mobile.png",
    imageAlt: "Hanket kids edit",
  },
  {
    id: "home-glam-edit",
    imageSrc: "/category-pages/glam/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/glam/banner/banner1/mobile.png",
    imageAlt: "Hanket glam edit",
  },
  {
    id: "home-footwear-edit",
    imageSrc: "/category-pages/footwear/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/footwear/banner/banner1/mobile.png",
    imageAlt: "Hanket footwear edit",
  },
  {
    id: "home-mix",
    imageSrc: "/mix.png",
    imageAlt: "Hanket mix banner",
  },
  {
    id: "home-women",
    imageSrc: "/women.png",
    imageAlt: "Hanket women banner",
  },
  {
    id: "home-kids",
    imageSrc: "/Kids banner image.png",
    imageAlt: "Hanket kids banner",
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
      id: "women-banner2-old",
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
    {
      id: "women-banner1",
      imageSrc: "/women.png",
      imageAlt: "Women banner 1",
    },
    {
      id: "women-banner2",
      imageSrc: "/women (2).png",
      imageAlt: "Women banner 2",
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
      id: "kids-banner1-old",
      imageSrc: "/category-pages/kids/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner1/mobile.png",
      imageAlt: "Kids banner 1 old",
    },
    {
      id: "kids-banner2-old",
      imageSrc: "/category-pages/kids/banner/banner2/pc.png?v=2",
      mobileImageSrc: "/category-pages/kids/banner/banner2/mobile.png",
      imageAlt: "Kids banner 2 old",
    },
    {
      id: "kids-banner1",
      imageSrc: "/kids.png",
      imageAlt: "Kids banner 1",
    },
    {
      id: "kids-banner2",
      imageSrc: "/Kids banner image.png",
      imageAlt: "Kids banner 2",
    },
    {
      id: "kids-banner3",
      imageSrc: "/KIDS IMAGE 3.png",
      imageAlt: "Kids banner 3",
    },
    {
      id: "kids-banner4",
      imageSrc: "/image 4 kids.png",
      imageAlt: "Kids banner 4",
    },
    {
      id: "kids-banner5",
      imageSrc: "/Image 2 kids.png",
      imageAlt: "Kids banner 5",
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

export const heroSlides = defaultHeroSlides;
