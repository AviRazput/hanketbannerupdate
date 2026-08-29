export type CategoryType = { name: string; slug: string; image: string };
export type Subcategory = { name: string; slug: string; image: string; types: CategoryType[] };
export type MarketplaceCategory = { name: string; slug: string; image: string; subcategories: Subcategory[] };

const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const subcategory = (name: string, image: string, typeNames: string[], customTypeImages?: Record<string, string>): Subcategory => ({
  name,
  slug: slugify(name),
  image,
  types: typeNames.map((typeName) => ({
    name: typeName,
    slug: slugify(typeName),
    image: customTypeImages?.[slugify(typeName)] ?? image,
  })),
});

export const categories: MarketplaceCategory[] = [
  {
    name: "Women",
    slug: "women",
    image: "/category-pages/women/banner/banner2/pc.jpeg",
    subcategories: [
      subcategory("Indian Wear", "/category-pages/women/shop-by-category/indian-wear1.jpg", ["Suit Sets", "Kurtas & Kurtis", "Sarees", "Ethnic Dresses", "Lehengas", "Co-ord Sets", "Dress Materials", "Dupattas", "Blouses", "Palazzos", "Bottom Wear", "Ethnic Jackets"], { "suit-sets": "/category-pages/women/new-arrivals/womeneditsuit.jpg", "kurtas-and-kurtis": "/category-pages/women/trending-now/KurtasKurtis.jpg", "sarees": "/category-pages/women/trending-now/Sarees.jpg", "lehengas": "/category-pages/women/trending-now/Lehengas.jpg", "co-ord-sets": "/category-pages/women/trending-now/CoSets.jpg", "dupattas": "/category-pages/women/trending-now/Dupattas.jpg" }),
      subcategory("Western Wear", "/category-pages/women/shop-by-category/western-wear.jpg", ["Dresses", "Tops", "T-Shirts", "Shirts", "Bottoms", "Jeans & Jeggings", "Skirts", "Co-ord Sets", "Jumpsuits", "Gowns", "Jackets", "Sweatshirts & Hoodies", "Cardigans", "Plus Size", "Maternity Wear"], { "dresses": "/category-pages/women/trending-now/dresses.jpg", "tops": "/category-pages/women/trending-now/Tops.jpg", "shirts": "/category-pages/women/trending-now/Shirts.jpg", "jeans-and-jeggings": "/category-pages/women/new-arrivals/womeneditjeans.jpg" }),
      subcategory("Jewellery", "/category-pages/women/shop-by-category/jewellery.jpg", ["Earrings", "Necklaces", "Rings", "Bracelets", "Anklets", "Fashion Jewellery", "Fine Jewellery", "Bridal Jewellery"], { "earrings": "/category-pages/women/shopbyedit/earing.jpg" }),
      subcategory("Bags", "/category-pages/women/shop-by-category/Bags.jpg", ["Handbags", "Sling Bags", "Tote Bags", "Backpacks", "Satchels", "Wallets", "Clutches", "Mini Bags", "Laptop Bags", "Travel Bags"], { "handbags": "/category-pages/women/shopbyedit/handbag.jpg" }),
      subcategory("Footwear", "/category-pages/women/shop-by-category/footwear.jpg", ["Heels", "Flats", "Sandals", "Sneakers", "Boots", "Sports Shoes", "Loafers", "Ethnic Footwear", "Ballerinas"], { "heels": "/category-pages/women/shopbyedit/heels.jpg" }),
      subcategory("Lingerie & Sleepwear", "/category-pages/women/shop-by-category/nightdress.jpg", ["Bras", "Underwear", "Shapewear", "Sleepwear", "Camisoles", "Thermals", "Swimwear"], { "bras": "/category-pages/women/shopbyedit/bras.jpg" }),
      subcategory("Sports & Activewear", "/category-pages/women/shop-by-category/sports.jpg", ["Sports Bras", "Tanks & Tees", "Jackets", "Hoodies", "Leggings", "Shorts", "Track Pants", "Activewear Co-ord Sets", "Sports Shoes"], { "sports-bras": "/category-pages/women/shopbyedit/sportbras.jpg" }),
    ],
  },
  {
    name: "Men",
    slug: "men",
    image: "/category-pages/men/banner/banner2/pc.png",
    subcategories: [
      subcategory("Clothing", "/catogery/men.jpg", ["T-Shirts", "Shirts", "Polo T-Shirts", "Jeans", "Trousers", "Shorts", "Co-ord Sets", "Sweatshirts", "Jackets", "Blazers"]),
      subcategory("Ethnic Wear", "/instagram/1.jpg", ["Kurtas", "Kurta Sets", "Sherwanis", "Nehru Jackets"]),
      subcategory("Footwear", "/instagram/8.jpg", ["Casual Shoes", "Sneakers", "Loafers", "Sandals", "Boots", "Sports Shoes"]),
      subcategory("Accessories", "/instagram/10.jpg", ["Watches", "Sunglasses", "Wallets", "Belts", "Caps"]),
    ],
  },
  {
    name: "Kids",
    slug: "kids",
    image: "/category-pages/kids/banner/banner1/pc.png",
    subcategories: [
      subcategory("Boys", "/instagram/3.jpg", ["T-Shirts", "Shirts", "Bottom Wear", "Ethnic Wear", "Party Wear"]),
      subcategory("Girls", "/catogery/kids.jpg", ["Dresses", "Tops", "Ethnic Wear", "Co-ord Sets", "Party Wear"]),
      subcategory("Baby", "/instagram/9.jpg", ["Newborn Essentials", "Rompers", "Sleepwear"]),
      subcategory("Kids Footwear", "/instagram/7.jpg", ["Sandals", "Sneakers", "Casual Shoes"]),
    ],
  },
  {
    name: "Glam",
    slug: "glam",
    image: "/category-pages/glam/banner/banner1/pc.png",
    subcategories: [
      subcategory("Makeup", "/catogery/glam.jpg", ["Face", "Eyes", "Lips"]),
      subcategory("Skincare", "/catogery/beauty.jpg", ["Cleansers", "Serums", "Moisturizers", "Sunscreen"]),
      subcategory("Haircare", "/instagram/5.jpg", ["Shampoo", "Conditioner", "Hair Masks"]),
      subcategory("Fragrances", "/instagram/10.jpg", ["Perfumes", "Body Mist"]),
    ],
  },
  {
    name: "Home Decor",
    slug: "home-decor",
    image: "/banner10.jpg",
    subcategories: [
      subcategory("Home Furnishings", "/catogery/homedecor.jpg", ["Cushions", "Bedsheets", "Curtains", "Rugs"]),
      subcategory("Decor", "/banner10.jpg", ["Wall Decor", "Lamps", "Decorative Accents"]),
      subcategory("Kitchen & Organization", "/instagram/3.jpg", ["Dining & Kitchen", "Storage & Organizers"]),
    ],
  },
  {
    name: "Wedding & Occasion",
    slug: "wedding-occasion",
    image: "/category-pages/wedding-occasion/banner/banner1/pc.png",
    subcategories: [
      subcategory("Bridal", "/instagram/4.jpg", ["Bridal Lehengas", "Bridal Sarees", "Bridal Jewellery"]),
      subcategory("Groom", "/catogery/men.jpg", ["Sherwanis", "Kurta Sets"]),
      subcategory("Wedding Guests", "/instagram/6.jpg", ["Festive Wear", "Party Dresses", "Indo-Western"]),
      subcategory("Accessories", "/instagram/2.jpg", ["Potlis", "Clutches", "Footwear"]),
    ],
  },
  {
    name: "Footwear",
    slug: "footwear",
    image: "/category-pages/footwear/banner/banner1/pc.png",
    subcategories: [
      subcategory("Women", "/instagram/7.jpg", ["Heels", "Flats", "Sandals", "Sneakers", "Boots", "Sports Shoes", "Loafers", "Ethnic Footwear", "Ballerinas"]),
      subcategory("Men", "/instagram/8.jpg", ["Casual Shoes", "Sneakers", "Loafers", "Sandals", "Boots", "Sports Shoes"]),
      subcategory("Kids", "/catogery/kids.jpg", ["Sandals", "Sneakers", "Casual Shoes"]),
    ],
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    image: "/catogery/JEWELRY.jpg",
    subcategories: [
      subcategory("Fashion Jewelry", "/catogery/JEWELRY.jpg", ["Earrings", "Necklaces", "Rings", "Bracelets", "Anklets"]),
      subcategory("Fine Jewelry", "/instagram/5.jpg", ["Gold Jewelry", "Silver Jewelry", "Gemstone Jewelry"]),
      subcategory("Bridal Jewelry", "/instagram/4.jpg", ["Jewelry Sets", "Maang Tikkas", "Bangles"]),
    ],
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/banner6.png",
    subcategories: [
      subcategory("Fashion Accessories", "/instagram/1.jpg", ["Watches", "Sunglasses", "Belts", "Scarves", "Hair Accessories"]),
      subcategory("Everyday Essentials", "/instagram/2.jpg", ["Wallets", "Tech Accessories"]),
    ],
  },
];

export const marketplaceHeadings = {
  shopByEdit: "Shop By Edit",
  trendingNow: "Trending Now",
  newArrivals: "New Arrivals",
  curatedBrands: "Curated Brands",
  featuredOnHanket: "Featured On Hanket",
  shopSubcategories: "Shop By Category",
  shopTypes: "Shop Types",
  products: "Products",
  topCategories: "Top Categories",
} as const;

export const categoryHref = (categorySlug: string) => categorySlug === "women" ? "/women" : `/category/${categorySlug}`;
export const subcategoryHref = (categorySlug: string, subcategorySlug: string) => `${categoryHref(categorySlug)}/${subcategorySlug}`;
export const typeHref = (categorySlug: string, subcategorySlug: string, typeSlug: string) => `${subcategoryHref(categorySlug, subcategorySlug)}/${typeSlug}`;

export function findCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function findSubcategory(categorySlug: string, subcategorySlug: string) {
  return findCategory(categorySlug)?.subcategories.find((item) => item.slug === subcategorySlug);
}

export function findType(categorySlug: string, subcategorySlug: string, typeSlug: string) {
  return findSubcategory(categorySlug, subcategorySlug)?.types.find((item) => item.slug === typeSlug);
}
