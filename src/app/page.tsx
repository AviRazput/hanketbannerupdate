import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/home/Hero";
import { MobileHomeTop } from "../components/home/MobileHomeTop";
import { MarketplaceSections } from "../components/home/MarketplaceSections";

export default function Home() {
  return (
    <SiteLayout>
      <MobileHomeTop />
      <Hero />
      <MarketplaceSections />
    </SiteLayout>
  );
}
