import type { CategoryProduct } from "@/data/categoryProducts";
import { BestsellersSection } from "./BestsellersSection";
import { CategoriesSection, type CategorySectionItem } from "./CategoriesSection";
import { FeaturedOnHanketSection } from "./FeaturedOnHanketSection";
import { InstagramSection } from "./InstagramSection";
import { NewArrivalsSection } from "./NewArrivalsSection";
import { TrendingNowSection, type TrendingSectionItem } from "./TrendingNowSection";
import { ShopByOccasion } from "./ShopByOccasion";

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
  showNewArrivalsSection?: boolean;
  showExtendedSections?: boolean;
  showShopByOccasion?: boolean;
  categorySlug?: string;
  children?: React.ReactNode;
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
  showNewArrivalsSection = true,
  showExtendedSections = true,
  showShopByOccasion = false,
  categorySlug,
  children,
}: MarketplaceSectionsProps) {
  return (
    <>
      {showCategorySection ? (
        <div className="hidden md:block">
          <FeaturedOnHanketSection title={categoryTitle} variant="categories" items={categoryItems} />
        </div>
      ) : null}

      {showEditSection ? <CategoriesSection title={editTitle} items={editItems} /> : null}

      {showShopByOccasion && <ShopByOccasion categorySlug={categorySlug} />}

      {showTrendingSection ? <TrendingNowSection title={trendingTitle} items={trendingItems} /> : null}

      {showNewArrivalsSection && <NewArrivalsSection title={newArrivalsTitle} products={newArrivalProducts} />}

      {children}

      {showExtendedSections ? (
        <>
          <BestsellersSection />
          <InstagramSection />
        </>
      ) : null}
    </>
  );
}
