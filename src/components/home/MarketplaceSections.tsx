import type { CategoryProduct } from "@/data/categoryProducts";
import { BestsellersSection } from "./BestsellersSection";
import { CategoriesSection, type CategorySectionItem } from "./CategoriesSection";
import { CreatorMarketplaceSection } from "./CreatorMarketplaceSection";
import { FeaturedOnHanketSection } from "./FeaturedOnHanketSection";
import { InstagramSection } from "./InstagramSection";
import { NewArrivalsSection } from "./NewArrivalsSection";
import { TrendingNowSection, type TrendingSectionItem } from "./TrendingNowSection";

type MarketplaceSectionsProps = {
  categoryTitle?: string;
  categoryItems?: CategorySectionItem[];
  showCategorySection?: boolean;
  editTitle?: string;
  editItems?: CategorySectionItem[];
  showEditSection?: boolean;
  trendingTitle?: string;
  trendingItems?: TrendingSectionItem[];
  showTrendingSection?: boolean;
  newArrivalsTitle?: string;
  newArrivalProducts?: CategoryProduct[];
  showExtendedSections?: boolean;
};

export function MarketplaceSections({
  categoryTitle = "Shop By Category",
  categoryItems,
  showCategorySection = true,
  editTitle,
  editItems,
  showEditSection = true,
  trendingTitle,
  trendingItems,
  showTrendingSection = true,
  newArrivalsTitle,
  newArrivalProducts,
  showExtendedSections = true,
}: MarketplaceSectionsProps) {
  return (
    <>
      {showCategorySection ? (
        <div className="hidden md:block">
          <FeaturedOnHanketSection title={categoryTitle} variant="categories" items={categoryItems} />
        </div>
      ) : null}

      {showEditSection ? <CategoriesSection title={editTitle} items={editItems} /> : null}

      {showTrendingSection ? <TrendingNowSection title={trendingTitle} items={trendingItems} /> : null}

      <NewArrivalsSection title={newArrivalsTitle} products={newArrivalProducts} />

      {showExtendedSections ? (
        <>
          <BestsellersSection />
          <CreatorMarketplaceSection />
          <InstagramSection />
        </>
      ) : null}
    </>
  );
}
