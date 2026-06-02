import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "../../../components/layout/SiteLayout";
import { mainCollection } from "../../../data/products";

const sizes = ["S", "M", "L", "XL", "XXL"];

const productDetails = [
  "Premium everyday style",
  "Soft breathable fabric",
  "Regular fit",
  "Machine wash",
  "Easy 7 days returns and exchanges",
];

const specifications = [
  ["Fabric", "Cotton Blend"],
  ["Fit", "Regular"],
  ["Sleeve", "Three-Quarter"],
  ["Pattern", "Floral Print"],
  ["Occasion", "Casual"],
  ["Length", "Calf Length"],
];

const reviewRows = [
  {
    rating: "4",
    text:
      "The fabric feels soft and comfortable. The print looks elegant and the fit is easy for daily wear.",
    name: "Hanket Customer",
    date: "12 Mar 2026",
  },
  {
    rating: "5",
    text:
      "Loved the look and quality. It matches the pictures and works well for casual outings.",
    name: "Pooja",
    date: "31 Aug 2025",
  },
];

function findProduct(slug: string) {
  return mainCollection.find((item) => item.id === slug) ?? mainCollection[0];
}

function rupeePrice(price: string) {
  const value = Number(price.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(value) || value <= 0) return "Rs. 493";
  return `Rs. ${Math.max(299, Math.round(value * 8.35))}`;
}

function oldRupeePrice(price: string) {
  const value = Number(price.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(value) || value <= 0) return "Rs. 1999";
  return `Rs. ${Math.max(999, Math.round(value * 24.5))}`;
}

function IconHeart() {
  return (
    <svg className="h-5 w-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg className="h-5 w-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden>
      <path d="M6 8h12l-1 13H7L6 8Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RatingBadge({ rating = "4.3" }: { rating?: string }) {
  return (
    <span className="inline-flex items-center gap-1 border border-[#d7d7d7] bg-white px-2 py-1 font-sans text-[13px] font-bold text-[#17233d]">
      {rating}
      <span className="text-[#36a6a6]">★</span>
    </span>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProduct(decodeURIComponent(slug));
  const gallery = [
    product.img1,
    product.img2,
    ...mainCollection.filter((item) => item.id !== product.id).slice(0, 6).map((item) => item.img1),
  ];
  const similarProducts = mainCollection.filter((item) => item.id !== product.id).concat(mainCollection).slice(0, 12);
  const price = rupeePrice(product.price);
  const oldPrice = oldRupeePrice(product.price);

  return (
    <SiteLayout>
      <section className="bg-white">
        <div className="w-full px-3 py-3 sm:px-5 md:px-6 lg:px-9 lg:py-8">
          <nav className="mb-4 hidden items-center gap-2 font-sans text-[13px] text-[#17233d] lg:flex">
            <Link href="/" className="hover:text-flat-pink">Home</Link>
            <span>/</span>
            <Link href="/search?category=women" className="hover:text-flat-pink">Clothing</Link>
            <span>/</span>
            <Link href="/search?category=women" className="hover:text-flat-pink">Women Clothing</Link>
            <span>/</span>
            <span className="font-bold text-[#0f172a]">{product.title}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,58%)_minmax(360px,42%)] xl:gap-9">
            <div className="min-w-0">
              <div className="md:hidden">
                <div
                  className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-b-xl"
                  aria-label={`${product.title} product images`}
                >
                  {gallery.slice(0, 5).map((src, index) => (
                    <div
                      key={`${src}-mobile-${index}`}
                      className="relative aspect-[3/4] w-full min-w-full snap-start overflow-hidden bg-[#f6f6f6]"
                    >
                      <Image
                        src={src}
                        alt={`${product.title} view ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover object-center"
                      />
                      {index === 0 ? (
                        <>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <span className="rounded bg-white/95 px-2 py-1 font-sans text-[10px] font-semibold text-[#17233d]">
                              View Similar
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3">
                            <RatingBadge />
                          </div>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-center gap-1.5">
                  {gallery.slice(0, 5).map((src, index) => (
                    <span
                      key={`${src}-dot-${index}`}
                      className={["h-1.5 rounded-full bg-[#c7c7c7]", index === 0 ? "w-5 bg-flat-pink" : "w-1.5"].join(" ")}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden grid-cols-2 gap-3 md:grid">
                {gallery.map((src, index) => (
                  <div key={`${src}-${index}`} className="relative aspect-[3/4] overflow-hidden bg-[#f6f6f6]">
                    <Image
                      src={src}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    />
                    {index === 0 ? (
                      <button
                        type="button"
                        className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-flat-pink shadow-[0_4px_18px_rgba(0,0,0,0.16)]"
                        aria-label="Wishlist"
                      >
                        <IconHeart />
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <div className="border-b border-[#d8d8d8] pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="font-sans text-[20px] font-bold leading-tight text-[#17233d] md:text-[25px]">
                      {product.title}
                    </h1>
                    <p className="mt-1 font-sans text-[15px] leading-snug text-[#777b8b] md:text-[20px]">
                      {product.meta} curated marketplace style
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d7d7d7] text-[#17233d] md:hidden"
                    aria-label="Wishlist"
                  >
                    <IconHeart />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <RatingBadge rating="4" />
                  <span className="font-sans text-[13px] text-[#777b8b]">3.4k Ratings</span>
                </div>
              </div>

              <div className="border-b border-[#e5e5e5] py-4">
                <div className="flex flex-wrap items-baseline gap-2 font-sans">
                  <span className="text-[24px] font-bold text-[#17233d] md:text-[28px]">{price}</span>
                  <span className="text-[17px] text-[#777b8b] line-through md:text-[20px]">{oldPrice}</span>
                  <span className="text-[17px] font-bold text-[#ff7f55] md:text-[20px]">(75% OFF)</span>
                </div>
                <p className="mt-2 font-sans text-[13px] font-bold text-[#03a685]">inclusive of all taxes</p>
              </div>

              <div className="py-5">
                <div className="mb-4 flex items-center gap-7 font-sans">
                  <h2 className="text-[15px] font-bold uppercase text-[#111827]">Select Size</h2>
                  <button type="button" className="text-[13px] font-bold uppercase tracking-[0.08em] text-flat-pink">
                    Size Chart ›
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfc3cc] bg-white font-sans text-[14px] font-bold text-[#17233d] transition-colors hover:border-flat-pink hover:text-flat-pink md:h-14 md:w-14 md:text-[16px]"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden grid-cols-[minmax(0,1fr)_minmax(170px,0.66fr)] gap-4 border-b border-[#e5e5e5] pb-6 md:grid">
                <button
                  type="button"
                  className="flex h-16 items-center justify-center gap-3 bg-flat-pink px-6 font-sans text-[16px] font-bold uppercase text-white"
                >
                  <IconBag />
                  Add To Bag
                </button>
                <button
                  type="button"
                  className="flex h-16 items-center justify-center gap-3 border border-[#d7d7d7] bg-white px-6 font-sans text-[16px] font-bold uppercase text-[#17233d]"
                >
                  <IconHeart />
                  Wishlist
                </button>
              </div>

              <div className="border-b border-[#e5e5e5] py-6">
                <h2 className="mb-4 font-sans text-[15px] font-bold uppercase text-[#17233d]">Delivery Options</h2>
                <div className="flex max-w-md border border-[#d7d7d7]">
                  <input
                    className="h-12 min-w-0 flex-1 px-4 font-sans text-[14px] outline-none"
                    placeholder="Enter pincode"
                  />
                  <button type="button" className="px-5 font-sans text-[13px] font-bold text-flat-pink">
                    Check
                  </button>
                </div>
                <div className="mt-5 space-y-3 font-sans text-[15px] text-[#17233d]">
                  <p>100% Original Products</p>
                  <p>Pay on delivery might be available</p>
                  <p>Easy 7 days returns and exchanges</p>
                </div>
              </div>

              <div className="border-b border-[#e5e5e5] py-6">
                <h2 className="mb-4 font-sans text-[15px] font-bold uppercase text-[#17233d]">Best Offers</h2>
                <div className="space-y-4 font-sans text-[14px] leading-relaxed text-[#17233d]">
                  <div>
                    <p className="font-bold">Best Price: <span className="text-[#ff7f55]">Rs. 295</span></p>
                    <p>Applicable on orders above Rs. 349. Coupon code: <strong>HANKET</strong></p>
                    <button type="button" className="mt-1 font-bold text-flat-pink">View Eligible Products</button>
                  </div>
                  <div>
                    <p className="font-bold">10% Instant Discount on Bank Card</p>
                    <p>Min spend Rs. 3,500. Max discount Rs. 800.</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#e5e5e5] py-6">
                <h2 className="mb-4 font-sans text-[15px] font-bold uppercase text-[#17233d]">Product Details</h2>
                <div className="space-y-1.5 font-sans text-[15px] leading-relaxed text-[#17233d]">
                  {productDetails.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <h3 className="mt-5 font-sans text-[15px] font-bold text-[#17233d]">Specifications</h3>
                <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3">
                  {specifications.map(([label, value]) => (
                    <div key={label} className="border-b border-[#ececec] pb-2">
                      <p className="font-sans text-[12px] text-[#777b8b]">{label}</p>
                      <p className="mt-1 font-sans text-[15px] text-[#17233d]">{value}</p>
                    </div>
                  ))}
                </div>
                <button type="button" className="mt-4 font-sans text-[14px] font-bold text-flat-pink">
                  See More
                </button>
              </div>

              <div className="py-6">
                <h2 className="mb-5 font-sans text-[15px] font-bold uppercase text-[#17233d]">Ratings</h2>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="flex items-center gap-2 font-sans text-[48px] leading-none text-[#17233d]">
                      4 <span className="text-[30px] text-[#36a6a6]">★</span>
                    </div>
                    <p className="mt-2 font-sans text-[13px] text-[#17233d]">3.4k Verified Buyers</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[82, 56, 38, 20, 32].map((width, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-5 font-sans text-[12px] text-[#777b8b]">{5 - index}★</span>
                        <div className="h-1.5 flex-1 bg-[#eeeeee]">
                          <div className="h-full bg-[#0aa68a]" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="mt-7 font-sans text-[15px] font-bold text-[#17233d]">Customer Reviews (621)</h2>
                <div className="mt-4 space-y-5">
                  {reviewRows.map((review) => (
                    <div key={review.name} className="border-b border-[#ececec] pb-5">
                      <div className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 items-center bg-[#0aa68a] px-1.5 font-sans text-[11px] font-bold text-white">
                          {review.rating}★
                        </span>
                        <p className="font-sans text-[15px] leading-relaxed text-[#17233d]">{review.text}</p>
                      </div>
                      <p className="mt-3 pl-10 font-sans text-[13px] text-[#777b8b]">
                        {review.name} | {review.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-10 lg:mt-14">
            <h2 className="mb-5 font-sans text-[17px] font-bold uppercase text-[#17233d]">Similar Products</h2>
            <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
              {similarProducts.map((item, index) => (
                <Link key={`${item.id}-${index}`} href={`/product/${item.id}`} className="group block min-w-0">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f6f6]">
                    <Image
                      src={item.img1}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-2 left-2 bg-white px-1.5 py-0.5 font-sans text-[11px] font-bold text-[#17233d]">
                      4.{index % 5}★
                    </span>
                  </div>
                  <div className="border border-t-0 border-[#e5e5e5] px-3 py-3">
                    <h3 className="truncate font-sans text-[15px] font-bold text-[#17233d]">{item.title}</h3>
                    <p className="mt-1 truncate font-sans text-[13px] text-[#526071]">{item.meta}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 font-sans text-[13px]">
                      <span className="font-bold text-[#17233d]">{rupeePrice(item.price)}</span>
                      <span className="text-[#777b8b] line-through">{oldRupeePrice(item.price)}</span>
                      <span className="font-bold text-[#ff7f55]">(70% OFF)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-14 z-40 border-t border-[#e5e5e5] bg-white p-3 md:hidden">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-flat-pink font-sans text-[13px] font-bold uppercase text-white"
        >
          <IconBag />
          Add to Bag
        </button>
      </div>
    </SiteLayout>
  );
}
