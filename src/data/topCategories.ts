export type TopCategory = {
  slug: string;
  label: string;
  href: string;
  image: string;
  subcategories: string[];
};

/** Main nav + homepage “Top Categories” — subcategories for shop filters / mega menu later */
export const topCategories: TopCategory[] = [
  {
    slug: "mens",
    label: "Mens",
    href: "/search?category=mens",
    image:
      "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-man.jpg",
    subcategories: [
      "Shirts & Formal",
      "T-Shirts & Polos",
      "Jeans & Trousers",
      "Kurtas & Ethnic",
      "Jackets & Blazers",
      "Sportswear",
      "Innerwear",
      "Footwear",
    ],
  },
  {
    slug: "womens",
    label: "Womens",
    href: "/search?category=womens",
    image:
      "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-woman.jpg",
    subcategories: [
      "Sarees",
      "Kurtis & Suits",
      "Dresses & Gowns",
      "Tops & Tees",
      "Jeans & Leggings",
      "Ethnic Wear",
      "Western Wear",
      "Lingerie & Sleepwear",
    ],
  },
  {
    slug: "kids",
    label: "Kids",
    href: "/search?category=kids",
    image:
      "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-kids-4.jpg",
    subcategories: [
      "Boys (2–14 yrs)",
      "Girls (2–14 yrs)",
      "Infants (0–2 yrs)",
      "Party Wear",
      "Casual Wear",
      "School Essentials",
      "Footwear",
      "Kids Accessories",
    ],
  },
  {
    slug: "handloom",
    label: "Handloom",
    href: "/search?category=handloom",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80",
    subcategories: [
      "Sarees & Suits",
      "Dupattas & Stoles",
      "Fabrics & Yardage",
      "Home Linen",
      "Block Print & Kalamkari",
      "Khadi & Organic",
      "Artisan Crafts",
      "Shawls & Wraps",
    ],
  },
  {
    slug: "genz",
    label: "GenZ",
    href: "/search?category=genz",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    subcategories: [
      "Streetwear",
      "Oversized Tees",
      "Hoodies & Sweatshirts",
      "Co-ord Sets",
      "Graphic & Statement",
      "Denim",
      "Sneakers & Kicks",
      "Y2K & Vintage",
    ],
  },
  {
    slug: "accessories",
    label: "Accessories",
    href: "/search?category=accessories",
    image:
      "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-glass.jpg",
    subcategories: [
      "Bags & Wallets",
      "Belts",
      "Sunglasses",
      "Watches",
      "Jewellery",
      "Scarves & Stoles",
      "Hats & Caps",
      "Socks & Hosiery",
    ],
  },
  {
    slug: "beauty",
    label: "Beauty",
    href: "/search?category=beauty",
    image:
      "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-accesories-9.jpg",
    subcategories: [
      "Makeup",
      "Skincare",
      "Haircare",
      "Fragrance",
      "Bath & Body",
      "Men's Grooming",
      "Tools & Brushes",
      "Wellness & Ayurveda",
    ],
  },
  {
    slug: "customized",
    label: "Customized",
    href: "/search?category=customized",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80",
    subcategories: [
      "Printed Tees & Hoodies",
      "Embroidered Kurtas",
      "Monogram & Name",
      "Photo & Quote Gifts",
      "Team & Event Merch",
      "Corporate Gifting",
      "Bulk Orders",
      "Design Your Own",
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return topCategories.find((c) => c.slug === slug);
}
