import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/home/Hero";
import { MobileHomeTop } from "../components/home/MobileHomeTop";
import { FeaturedOnHanketSection } from "../components/home/FeaturedOnHanketSection";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { TrendingNowSection } from "../components/home/TrendingNowSection";
import { NewArrivalsSection } from "../components/home/NewArrivalsSection";
import { BestsellersSection } from "../components/home/BestsellersSection";
// import { WhyHanketSection } from "../components/home/WhyHanketSection";
import { InstagramSection } from "../components/home/InstagramSection";

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
