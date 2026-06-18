import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import { FeaturedOnHanketSection } from "../components/home/FeaturedOnHanketSection";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { TrendingNowSection } from "../components/home/TrendingNowSection";
import { NewArrivalsSection } from "../components/home/NewArrivalsSection";
import { BestsellersSection } from "../components/home/BestsellersSection";
// import { WhyHanketSection } from "../components/home/WhyHanketSection";
import { InstagramSection } from "../components/home/InstagramSection";

const mobileQuickCategories = [
  { label: "Kurta Sets", href: "/search?category=women", image: "/catogery/women.jpg" },
  { label: "Dresses", href: "/search?tag=dresses", image: "/catogery/glam.jpg" },
  { label: "Kurtas", href: "/search?tag=kurtas", image: "/catogery/x.jpg" },
  { label: "Shirts", href: "/search?category=men", image: "/catogery/men.jpg" },
  { label: "Tshirts", href: "/search?type=tshirts", image: "/catogery/kids.jpg" },
  { label: "Jewellery", href: "/search?type=jewelry", image: "/catogery/JEWELRY.jpg" },
  { label: "Beauty", href: "/search?category=glam", image: "/catogery/beauty.jpg" },
  { label: "Home", href: "/search?category=home-decor", image: "/catogery/homedecor.jpg" },
];

function MobileHomeTop() {
  return (
    <section className="md:hidden bg-white pb-2">
      <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 pt-2">
        <div className="flex min-w-max gap-2.5 pr-3">
          {mobileQuickCategories.map((item) => (
            <Link key={item.label} href={item.href} className="w-[58px] shrink-0 snap-start text-center">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-[#fff3f5] shadow-[0_2px_9px_rgba(225,20,80,0.18)]">
                <Image src={item.image} alt="" fill sizes="58px" className="object-cover object-top" />
              </span>
              <span className="mt-1 block truncate font-sans text-[8px] font-bold uppercase leading-none text-[#333]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <MobileHomeTop />
      <Hero />
      <FeaturedOnHanketSection />
      <CategoriesSection />
      <TrendingNowSection />
      <NewArrivalsSection />
      <BestsellersSection />
      {/* <WhyHanketSection /> */}
      <InstagramSection />
    </SiteLayout>
  );
}
