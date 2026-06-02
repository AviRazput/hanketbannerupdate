import { SiteLayout } from "../../components/layout/SiteLayout";
import { mainCollection } from "../../data/products";
import Image from "next/image";
import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const categoryLabels: Record<string, string> = {
  women: "WOMEN",
  men: "MEN",
  kids: "KIDS",
  glam: "GLAM",
  "home-decor": "HOME DECOR",
  "wedding-occasion": "WEDDING & OCCASION",
};

const typeLabels: Record<string, string> = {
  footwear: "FOOTWEAR",
  jewelry: "JEWELLERY",
  accessories: "ACCESSORIES",
};

const categoryBanners: Record<string, string> = {
  women: "/banner.png",
  men: "/banner4.png",
  kids: "/banner5.png",
  glam: "/banner6.png",
  "home-decor": "/banner10.jpg",
  "wedding-occasion": "/bannerx.png",
};

const typeBanners: Record<string, string> = {
  footwear: "/banner4.png",
  jewelry: "/banner5.png",
  accessories: "/banner6.png",
};

const sizes = ["XS", "S", "M", "L", "XL"];

const categoryOptions: Record<string, string[]> = {
  women: [
    "Ethnic Wear",
    "Western Wear",
    "Dresses",
    "Co-ords",
    "Tops & Shirts",
    "Bottom Wear",
    "Plus Size",
    "Maternity",
  ],
  men: ["Shirts", "T-Shirts", "Ethnic Wear", "Co-ords", "Jeans & Trousers", "Jackets & Blazers"],
  kids: ["Boys Wear", "Girls Wear", "Baby Wear", "Ethnic Wear", "Party Wear"],
  glam: ["Makeup", "Skincare", "Haircare", "Fragrances", "Beauty Tools", "Wellness"],
  "home-decor": [
    "Wall Decor",
    "Home Furnishings",
    "Lighting",
    "Decorative Accents",
    "Kitchen & Dining",
    "Handmade Decor",
  ],
  "wedding-occasion": [
    "Bridal Wear",
    "Groom Wear",
    "Bridesmaid Collection",
    "Wedding Guest Outfits",
    "Festive Wear",
    "Wedding Accessories",
  ],
  footwear: ["Women Footwear", "Men Footwear", "Kids Footwear", "Sneakers", "Heels", "Flats", "Boots"],
  jewelry: ["Fashion Jewellery", "Fine Jewellery", "Earrings", "Necklaces", "Rings", "Bracelets", "Bridal Jewellery"],
  accessories: ["Handbags", "Wallets", "Backpacks", "Watches", "Sunglasses", "Belts", "Scarves", "Tech Accessories"],
};

const brandOptions = ["Vishudh", "Royal Export", "KALINI", "FFU", "SURUKH", "AKRITIK", "PANIT", "KAVINDI"];
const colorOptions = ["Pink", "Green", "Navy Blue", "Black", "Mustard", "Brown", "Yellow"];
const discountOptions = [
  "10% and above",
  "20% and above",
  "30% and above",
  "40% and above",
  "50% and above",
  "60% and above",
  "70% and above",
  "80% and above",
  "90% and above",
];

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function productPrice(index: number) {
  const prices = ["₹2,499", "₹3,299", "₹1,899", "₹4,250", "₹999", "₹5,499", "₹1,299", "₹2,750"];
  return prices[index % prices.length];
}

function productOldPrice(index: number) {
  const prices = ["₹3,499", "₹4,299", "₹2,599", "₹5,999", "₹1,599", "₹7,299", "₹1,999", "₹3,750"];
  return prices[index % prices.length];
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const category = firstParam(params.category);
  const type = firstParam(params.type);
  const title = (type && typeLabels[type]) || (category && categoryLabels[category]) || "SHOP";
  const bannerImage = (type && typeBanners[type]) || (category && categoryBanners[category]) || "/banner.png";
  const activeCategoryKey = type || category || "women";
  const activeCategoryOptions = categoryOptions[activeCategoryKey] || categoryOptions.women;
  const products = [...mainCollection, ...mainCollection].slice(0, 12);

  return (
    <SiteLayout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1920px] px-3 py-3 sm:px-5 md:px-6 lg:px-8 lg:py-7">
          <div className="mb-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.12em] text-flat-muted sm:text-[11px] lg:mb-4">
            <Link href="/" className="transition-colors hover:text-flat-pink">
              Home
            </Link>
            <span>/</span>
            <span>Listing</span>
            <span>/</span>
            <span className="text-flat-text">{title}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-6 border-r border-flat-border pr-5">
                <div className="mb-5 flex items-center justify-between border-b border-flat-border pb-4">
                  <h2 className="font-sans text-[14px] font-bold uppercase tracking-[0.08em] text-flat-text">Filters</h2>
                  <button type="button" className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-flat-pink">
                    Clear All
                  </button>
                </div>

                <div className="space-y-0">
                  <div className="border-b border-flat-border pb-5">
                    <h3 className="mb-3 font-sans text-[13px] font-bold text-flat-text">Categories</h3>
                    <div className="space-y-2.5">
                      {activeCategoryOptions.map((option, index) => (
                        <label key={option} className="flex items-center gap-2 font-sans text-[13px] text-flat-text">
                          <span className="h-3.5 w-3.5 border border-[#9a9a9a]" />
                          <span>{option}</span>
                          <span className="text-flat-muted">({(index + 2) * 14})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-b border-flat-border py-5">
                    <h3 className="mb-3 font-sans text-[13px] font-bold text-flat-text">Brand</h3>
                    <div className="space-y-2.5">
                      {brandOptions.map((option, index) => (
                        <label key={option} className="flex items-center gap-2 font-sans text-[13px] text-flat-text">
                          <span className="h-3.5 w-3.5 border border-[#9a9a9a]" />
                          <span>{option}</span>
                          <span className="text-flat-muted">({index < 2 ? 37 - index * 13 : 6 - index})</span>
                        </label>
                      ))}
                      <button type="button" className="font-sans text-[13px] font-semibold text-flat-pink">+ 2 more</button>
                    </div>
                  </div>

                  <div className="border-b border-flat-border py-5">
                    <h3 className="mb-3 font-sans text-[13px] font-bold text-flat-text">Price</h3>
                    <div className="font-sans text-[13px] text-flat-text">₹100 - ₹700+</div>
                    <div className="mt-4 h-1.5 rounded-full bg-[#eeeeee]">
                      <div className="h-1.5 w-2/3 rounded-full bg-flat-pink" />
                    </div>
                  </div>

                  <div className="border-b border-flat-border py-5">
                    <h3 className="mb-3 font-sans text-[13px] font-bold text-flat-text">Color</h3>
                    <div className="space-y-2.5">
                      {colorOptions.map((option, index) => (
                        <label key={option} className="flex items-center gap-2 font-sans text-[13px] text-flat-text">
                          <span className="h-3.5 w-3.5 border border-[#9a9a9a]" />
                          <span>{option}</span>
                          <span className="text-flat-muted">({index < 2 ? 9 : 9 - index})</span>
                        </label>
                      ))}
                      <button type="button" className="font-sans text-[13px] font-semibold text-flat-pink">+ 17 more</button>
                    </div>
                  </div>

                  <div className="py-5">
                    <h3 className="mb-3 font-sans text-[13px] font-bold text-flat-text">Discount Range</h3>
                    <div className="space-y-2.5">
                      {discountOptions.map((option) => (
                        <label key={option} className="flex items-center gap-2 font-sans text-[13px] text-flat-text">
                          <span className="h-3.5 w-3.5 border border-[#9a9a9a]" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-3 grid grid-cols-2 gap-2 lg:hidden">
                <button
                  type="button"
                  className="flex h-10 items-center justify-center border border-flat-border bg-white font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-flat-text"
                >
                  Filter
                </button>
                <button
                  type="button"
                  className="flex h-10 items-center justify-center border border-flat-border bg-white font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-flat-text"
                >
                  Sort
                </button>
              </div>

              <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto lg:hidden">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="h-9 min-w-10 border border-[#b8b8b8] bg-white px-3 font-sans text-[12px] font-semibold text-flat-text"
                  >
                    {size}
                  </button>
                ))}
                {activeCategoryOptions.slice(0, 6).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="h-9 shrink-0 border border-flat-border bg-white px-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-flat-text"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="relative mb-4 aspect-[4/3] min-h-[132px] overflow-hidden bg-[#f4efe9] sm:aspect-[16/5] sm:min-h-[150px] lg:mb-6">
                <Image
                  src={bannerImage}
                  alt={`${title} collection banner`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mb-4 flex flex-row items-end justify-between gap-3 border-b border-flat-text pb-3 sm:mb-5 sm:items-center sm:pb-4">
                <div>
                  <h1 className="font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-flat-text sm:text-[18px]">
                    {title}
                  </h1>
                  <p className="mt-1 font-sans text-[11px] text-flat-muted sm:text-[12px]">
                    {products.length * 728} products
                  </p>
                </div>
                <button
                  type="button"
                  className="hidden h-9 w-56 items-center justify-between border border-flat-border px-4 font-sans text-[12px] text-flat-muted sm:inline-flex"
                >
                  <span>
                    Sort by: <strong className="font-semibold text-flat-text">Popular</strong>
                  </span>
                  <span className="text-[10px]">▼</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                {products.map((product, index) => (
                  <article key={`${product.id}-${index}`} className="group min-w-0">
                    <div className="relative mb-2 aspect-[3/4] overflow-hidden bg-flat-layer sm:mb-3">
                      {index % 3 === 0 ? (
                        <span className="absolute right-0 top-0 z-10 bg-[#f4b84a] px-1.5 py-1 font-sans text-[8px] font-bold uppercase text-white sm:px-2 sm:text-[10px]">
                          Bestseller
                        </span>
                      ) : null}
                      <Image
                        src={product.img1}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.06em] text-flat-text sm:text-[12px]">
                      {product.title}
                    </h2>
                    <p className="mt-1 font-sans text-[11px] leading-relaxed text-flat-muted sm:mt-2 sm:text-[13px]">
                      {product.meta} curated for {title.toLowerCase()} edits
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans text-[11px] sm:mt-2 sm:gap-2 sm:text-[13px]">
                      <span className="font-semibold text-flat-text">{productPrice(index)}</span>
                      <span className="text-flat-muted line-through">{productOldPrice(index)}</span>
                      <span className="font-semibold text-flat-pink">{index % 2 === 0 ? "25%" : "15%"} OFF</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
