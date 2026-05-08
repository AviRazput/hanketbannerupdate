export type HeroSlide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageFilter?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "banner-1",
    imageSrc: "/banner.png",
    imageAlt: "Hanket hero banner 1",
  },
  {
    id: "banner-2",
    imageSrc: "/banner5.png",
    imageAlt: "Hanket hero banner 2",
  },
  {
    id: "banner-3",
    imageSrc: "/banner4.png",
    imageAlt: "Hanket hero banner 3",
  },
  {
    id: "banner-4",
    imageSrc: "/bannerx.png",
    imageAlt: "Hanket hero banner X",
  },
  {
    id: "banner-5",
    imageSrc: "/banner6.png",
    imageAlt: "Hanket hero banner 5",
  },
];