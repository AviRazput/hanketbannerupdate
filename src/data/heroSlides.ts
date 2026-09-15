export type HeroSlide = {
  id: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  imageFilter?: string;
  hideOnMobile?: boolean;
};

export const defaultHeroSlides: HeroSlide[] = [
  // Women
  {
    id: "home-women-banner1",
    imageSrc: "/category-pages/women/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/women/banner/banner1/mobile.png",
    imageAlt: "Hanket Women Banner 1",
  },
  {
    id: "home-women-banner2",
    imageSrc: "/category-pages/women/banner/banner2/pc.jpeg",
    mobileImageSrc: "/category-pages/women/banner/banner2/mobile.jpeg",
    imageAlt: "Hanket Women Banner 2",
  },
  {
    id: "home-women-banner3",
    imageSrc: "/category-pages/women/banner/banner3/pc.png",
    mobileImageSrc: "/category-pages/women/banner/banner3/mobile.png",
    imageAlt: "Hanket Women Banner 3",
  },
  {
    id: "home-women-banner5",
    imageSrc: "/category-pages/women/banner/banner5/pc.png",
    mobileImageSrc: "/category-pages/women/banner/banner5/mobile.png",
    imageAlt: "Hanket Women Banner 5",
  },
  {
    id: "home-women-banner6",
    imageSrc: "/category-pages/women/banner/banner6/women2.png",
    mobileImageSrc: "/category-pages/women/banner/banner6/mobile.png",
    imageAlt: "Hanket Women Banner 6",
  },
  {
    id: "home-women-banner7",
    imageSrc: "/category-pages/women/banner/banner7/pc.png",
    mobileImageSrc: "/category-pages/women/banner/banner7/mobile.png",
    imageAlt: "Hanket Women Banner 7",
  },
  
  // Kids
  {
    id: "home-kids-banner1",
    imageSrc: "/category-pages/kids/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner1/mobile.png",
    imageAlt: "Hanket Kids Banner 1",
  },
  {
    id: "home-kids-banner2",
    imageSrc: "/category-pages/kids/banner/banner2/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner2/mobile.png",
    imageAlt: "Hanket Kids Banner 2",
  },
  {
    id: "home-kids-banner3",
    imageSrc: "/category-pages/kids/banner/banner3/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner3/mobile.png",
    imageAlt: "Hanket Kids Banner 3",
  },
  {
    id: "home-kids-banner4",
    imageSrc: "/category-pages/kids/banner/banner4/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner4/mobile.png",
    imageAlt: "Hanket Kids Banner 4",
  },
  {
    id: "home-kids-banner5",
    imageSrc: "/category-pages/kids/banner/banner5/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner5/mobile.png",
    imageAlt: "Hanket Kids Banner 5",
  },
  {
    id: "home-kids-banner6",
    imageSrc: "/category-pages/kids/banner/banner6/pc.png",
    mobileImageSrc: "/category-pages/kids/banner/banner6/mobile.png",
    imageAlt: "Hanket Kids Banner 6",
  },

  // Men
  {
    id: "home-men-banner2",
    imageSrc: "/category-pages/men/banner/banner2/pc.png",
    mobileImageSrc: "/category-pages/men/banner/banner2/mobile.png",
    imageAlt: "Hanket Men Banner 2",
  },
  {
    id: "home-men-banner3",
    imageSrc: "/category-pages/men/banner/banner3/pc.png",
    mobileImageSrc: "/category-pages/men/banner/banner3/mobile.png",
    imageAlt: "Hanket Men Banner 3",
  },

  // Others
  {
    id: "home-glam-banner1",
    imageSrc: "/category-pages/glam/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/glam/banner/banner1/mobile.png",
    imageAlt: "Hanket Glam Banner 1",
  },
  {
    id: "home-footwear-banner1",
    imageSrc: "/category-pages/footwear/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/footwear/banner/banner1/mobile.png",
    imageAlt: "Hanket Footwear Banner 1",
  },
  {
    id: "home-wedding-banner1",
    imageSrc: "/category-pages/wedding-occasion/banner/banner1/pc.png",
    mobileImageSrc: "/category-pages/wedding-occasion/banner/banner1/mobile.png",
    imageAlt: "Hanket Wedding Occasion Banner 1",
  },
];

export const categoryHeroSlides: Record<string, HeroSlide[]> = {
  Women: [
    {
      id: "women-banner1",
      imageSrc: "/category-pages/women/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner1/mobile.png",
      imageAlt: "Hanket Women Banner 1",
    },
    {
      id: "women-banner2",
      imageSrc: "/category-pages/women/banner/banner2/pc.jpeg",
      mobileImageSrc: "/category-pages/women/banner/banner2/mobile.jpeg",
      imageAlt: "Hanket Women Banner 2",
    },
    {
      id: "women-banner3",
      imageSrc: "/category-pages/women/banner/banner3/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner3/mobile.png",
      imageAlt: "Hanket Women Banner 3",
    },
    {
      id: "women-banner5",
      imageSrc: "/category-pages/women/banner/banner5/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner5/mobile.png",
      imageAlt: "Hanket Women Banner 5",
    },
    {
      id: "women-banner6",
      imageSrc: "/category-pages/women/banner/banner6/women2.png",
      mobileImageSrc: "/category-pages/women/banner/banner6/mobile.png",
      imageAlt: "Hanket Women Banner 6",
    },
    {
      id: "women-banner7",
      imageSrc: "/category-pages/women/banner/banner7/pc.png",
      mobileImageSrc: "/category-pages/women/banner/banner7/mobile.png",
      imageAlt: "Hanket Women Banner 7",
    }
  ],
  Kids: [
    {
      id: "kids-banner1",
      imageSrc: "/category-pages/kids/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner1/mobile.png",
      imageAlt: "Hanket Kids Banner 1",
    },
    {
      id: "kids-banner2",
      imageSrc: "/category-pages/kids/banner/banner2/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner2/mobile.png",
      imageAlt: "Hanket Kids Banner 2",
    },
    {
      id: "kids-banner3",
      imageSrc: "/category-pages/kids/banner/banner3/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner3/mobile.png",
      imageAlt: "Hanket Kids Banner 3",
    },
    {
      id: "kids-banner4",
      imageSrc: "/category-pages/kids/banner/banner4/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner4/mobile.png",
      imageAlt: "Hanket Kids Banner 4",
    },
    {
      id: "kids-banner5",
      imageSrc: "/category-pages/kids/banner/banner5/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner5/mobile.png",
      imageAlt: "Hanket Kids Banner 5",
    },
    {
      id: "kids-banner6",
      imageSrc: "/category-pages/kids/banner/banner6/pc.png",
      mobileImageSrc: "/category-pages/kids/banner/banner6/mobile.png",
      imageAlt: "Hanket Kids Banner 6",
    }
  ],
  Men: [
    {
      id: "men-banner2",
      imageSrc: "/category-pages/men/banner/banner2/pc.png",
      mobileImageSrc: "/category-pages/men/banner/banner2/mobile.png",
      imageAlt: "Hanket Men Banner 2",
    },
    {
      id: "men-banner3",
      imageSrc: "/category-pages/men/banner/banner3/pc.png",
      mobileImageSrc: "/category-pages/men/banner/banner3/mobile.png",
      imageAlt: "Hanket Men Banner 3",
    },
  ],
  "Wedding & Occasion": [
    {
      id: "wedding-banner1",
      imageSrc: "/category-pages/wedding-occasion/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/wedding-occasion/banner/banner1/mobile.png",
      imageAlt: "Hanket Wedding Occasion Banner 1",
    }
  ],
  Footwear: [
    {
      id: "footwear-banner1",
      imageSrc: "/category-pages/footwear/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/footwear/banner/banner1/mobile.png",
      imageAlt: "Hanket Footwear Banner 1",
    }
  ],
  Glam: [
    {
      id: "glam-banner1",
      imageSrc: "/category-pages/glam/banner/banner1/pc.png",
      mobileImageSrc: "/category-pages/glam/banner/banner1/mobile.png",
      imageAlt: "Hanket Glam Banner 1",
    }
  ]
};
