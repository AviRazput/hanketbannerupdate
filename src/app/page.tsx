import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/home/Hero";
import { ShopByOccasion } from "../components/home/ShopByOccasion";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { TrendingNowSection } from "../components/home/TrendingNowSection";
import { FeaturedOnHanketSection } from "../components/home/FeaturedOnHanketSection";
import { BestsellersSection } from "../components/home/BestsellersSection";
import { InstagramSection } from "../components/home/InstagramSection";
import { NewArrivalsSection } from "../components/home/NewArrivalsSection";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <div className="hidden md:block">
        <FeaturedOnHanketSection title="Shop By Category" variant="categories" />
      </div>
      <CategoriesSection />
      <ShopByOccasion />
      <TrendingNowSection />
      <NewArrivalsSection />
      <BestsellersSection />
      <InstagramSection />
    </SiteLayout>
  );
}
