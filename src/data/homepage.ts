export type NavItem = {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "WOMEN", href: "/search?category=women" },
  { label: "MEN", href: "/search?category=men" },
  { label: "KIDS", href: "/search?category=kids" },
  { label: "GLAM", href: "/search?category=glam" },
  { label: "HOME DECOR", href: "/search?category=home-decor" },
  { label: "WEDDING & OCCASION", href: "/search?category=wedding-occasion" },
  { label: "FOOTWEAR", href: "/search?type=footwear" },
  { label: "JEWELLERY", href: "/search?type=jewelry" },
  { label: "ACCESSORIES", href: "/search?type=accessories" },
];

export const homeCategories = [
  {
    slug: "summer-escape",
    label: "SUMMER ESCAPE",
    tagline: "Sun-ready resort pieces",
    href: "/search?tag=summer-escape",
    image: "/catogery/women.jpg",
  },
  {
    slug: "wedding-guest",
    label: "WEDDING GUEST",
    tagline: "Occasion dressing",
    href: "/search?tag=wedding-guest",
    image: "/catogery/men.jpg",
  },
  {
    slug: "everyday-luxury",
    label: "EVERYDAY LUXURY",
    tagline: "Elevated daily edits",
    href: "/search?tag=everyday-luxury",
    image: "/catogery/kids.jpg",
  },
  {
    slug: "resort-wear",
    label: "RESORT WEAR",
    tagline: "Vacation-ready style",
    href: "/search?tag=resort-wear",
    image: "/catogery/glam.jpg",
  },
  {
    slug: "festive-edit",
    label: "FESTIVE EDIT",
    tagline: "Modern celebrationwear",
    href: "/search?tag=festive-edit",
    image: "/catogery/homedecor.jpg",
  },
  {
    slug: "street-culture",
    label: "STREET CULTURE",
    tagline: "Urban statement pieces",
    href: "/search?tag=street-culture",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
  },
];

export const trendingItems = [
  {
    slug: "urban-essentials",
    label: "Urban Essentials",
    tagline: "Sharp everyday style",
    href: "/search?tag=urban-essentials",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "modern-heritage",
    label: "Modern Heritage",
    tagline: "Craft meets now",
    href: "/search?tag=modern-heritage",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "resort-collection",
    label: "Resort Collection",
    tagline: "Escape-ready edits",
    href: "/search?tag=resort-collection",
    image: "https://woodmart.xtemos.com/wp-content/uploads/2017/03/baner-flat-fashion-500x375.jpg",
  },
  {
    slug: "artisan-edit",
    label: "Artisan Edit",
    tagline: "Handcrafted detail",
    href: "/search?tag=artisan-edit",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "contemporary-classics",
    label: "Contemporary Classics",
    tagline: "Clean, lasting pieces",
    href: "/search?tag=contemporary-classics",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "atelier-drops",
    label: "Atelier Drops",
    tagline: "Fresh designer finds",
    href: "/search?tag=atelier-drops",
    image: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-accesories-9.jpg",
  },
  {
    slug: "statement-layers",
    label: "Statement Layers",
    tagline: "Outerwear with edge",
    href: "/search?tag=statement-layers",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "minimal-icons",
    label: "Minimal Icons",
    tagline: "Quiet premium pieces",
    href: "/search?tag=minimal-icons",
    image: "https://woodmart.xtemos.com/wp-content/uploads/2017/03/baner-flat-fashion-9-500x375.jpg",
  },
] as const;

export const featuredBrands = [
  {
    slug: "urban-thread",
    name: "URBAN THREAD",
    offer: "Min 10% off",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    logo: "https://woodmart.xtemos.com/wp-content/uploads/2017/04/brand-alexander.png",
  },
  {
    slug: "loom-line",
    name: "LOOM & LINE",
    offer: "Up to 50% off + gifts over ₹799",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    logo: "https://woodmart.xtemos.com/wp-content/uploads/2017/04/brand-diesel.png",
  },
  {
    slug: "studio-nine",
    name: "STUDIO NINE",
    offer: "Flat 5% off + extra 10% on combos",
    image: "https://images.unsplash.com/photo-1483985988359-763728e1935e?w=800&auto=format&fit=crop&q=80",
    logo: "https://woodmart.xtemos.com/wp-content/uploads/2017/04/brand-pullbear.png",
  },
  {
    slug: "craft-district",
    name: "CRAFT DISTRICT",
    offer: "Artisan edits from ₹499",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop&q=80",
    logo: "https://woodmart.xtemos.com/wp-content/uploads/2017/04/brand-columbia.png",
  },
  {
    slug: "kind-label",
    name: "KIND LABEL",
    offer: "Sustainable picks from ₹399",
    image: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-woman.jpg",
    logo: "https://woodmart.xtemos.com/wp-content/uploads/2017/04/brand-alexander.png",
  },
] as const;

export const creatorServices = [
  {
    slug: "photography",
    title: "Photography",
    description: "Premium product shoots for emerging fashion brands.",
    image: "/Creator Marketplace/Photography.jpg",
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Identity, packaging, and storytelling for your label.",
    image: "/Creator Marketplace/Branding.jpg",
  },
  {
    slug: "marketplace-growth",
    title: "Marketplace Growth",
    description: "Listing, SEO, and launch support on Hanket.",
    image: "/Creator Marketplace/Marketplace Growth Updated.jpg",
  },
] as const;

export const whyHanket = [
  { title: "Emerging Brands", description: "Discover labels before they hit the mainstream." },
  { title: "Premium Product Photography", description: "Every listing shot to marketplace standards." },
  { title: "Marketplace Support", description: "Tools and guidance to grow your brand online." },
  { title: "Fashion Community", description: "Creators, founders, and shoppers in one place." },
  { title: "Curated Collections", description: "Hand-picked edits across men, women, and lifestyle." },
] as const;

export const socialTags = [
  "Social",
  "Reels",
  "Customer Photos",
  "Creator Shoots",
  "Brand Launches",
] as const;

export const instagramPosts = [
  {
    slug: "street-style",
    title: "Street style edit",
    image: "/instagram/1.jpg",
    href: "/search",
  },
  {
    slug: "creator-shoot",
    title: "Creator shoot drop",
    image: "/instagram/2.jpg",
    href: "/search",
  },
  {
    slug: "evening-wear",
    title: "Evening wear picks",
    image: "/instagram/3.jpg",
    href: "/search",
  },
  {
    slug: "hanket-creators",
    title: "Hanket x Creators",
    image: "/instagram/4.jpg",
    href: "/search",
  },
  {
    slug: "customer-look",
    title: "Customer style",
    image: "/instagram/5.jpg",
    href: "/search",
  },
  {
    slug: "brand-launch",
    title: "Brand launch",
    image: "/instagram/6.jpg",
    href: "/search",
  },
  {
    slug: "reels-edit",
    title: "Reels highlight",
    image: "/instagram/7.jpg",
    href: "/search",
  },
  {
    slug: "editorial-look",
    title: "Editorial look",
    image: "/instagram/10.jpg",
    href: "/search",
  },
  {
    slug: "daily-style",
    title: "Daily style",
    image: "/instagram/9.jpg",
    href: "/search",
  },
  {
    slug: "new-drop",
    title: "New drop",
    image: "/instagram/8.jpg",
    href: "/search",
  },
] as const;

export const footerLinks = {
  about: [
    { label: "Our Story", href: "#" },
    { label: "Brand Partners", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  shop: [
    { label: "Men", href: "/search?category=men" },
    { label: "Women", href: "/search?category=women" },
    { label: "Kids", href: "/search?category=kids" },
    { label: "Lifestyle", href: "/search?category=lifestyle" },
  ],
  creators: [
    { label: "Sell On Hanket", href: "#" },
    { label: "Brand Support", href: "#" },
    { label: "Photoshoots", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
} as const;
