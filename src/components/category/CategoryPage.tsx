import type { CategorySectionItem } from "@/components/home/CategoriesSection";
import { Hero } from "@/components/home/Hero";
import { MarketplaceSections } from "@/components/home/MarketplaceSections";
import { MobileHomeTop } from "@/components/home/MobileHomeTop";
import type { TrendingSectionItem } from "@/components/home/TrendingNowSection";
import {
  categoryHref,
  marketplaceHeadings,
  subcategoryHref,
  type CategoryType,
  type MarketplaceCategory,
  type Subcategory,
  typeHref,
} from "@/data/categories";
import { filterCategoryProducts, type CategoryProduct } from "@/data/categoryProducts";
import Link from "next/link";

type CategoryPageProps = {
  category: MarketplaceCategory;
  subcategory?: Subcategory;
  type?: CategoryType;
};

export function CategoryPage({ category, subcategory, type }: CategoryPageProps) {
  const products = filterCategoryProducts({
    category: category.slug,
    subcategory: subcategory?.slug,
    type: type?.slug,
  });
  const sourceSubcategories = subcategory ? [subcategory] : category.subcategories;
  const generatedProducts: CategoryProduct[] = sourceSubcategories.flatMap((subcategoryItem, subcategoryIndex) => {
    const sourceTypes = type
      ? subcategoryItem.types.filter((typeItem) => typeItem.slug === type.slug)
      : subcategoryItem.types.slice(0, 8); // Take more items to ensure we have enough clothes

    return sourceTypes.map((typeItem, typeIndex) => ({
      id: `showcase-${category.slug}-${subcategoryItem.slug}-${typeItem.slug}`,
      name: typeItem.name,
      brand: `${category.name} Edit`,
      price: `₹${(899 + subcategoryIndex * 350 + typeIndex * 250).toLocaleString("en-IN")}`,
      image: typeItem.image,
      category: category.slug,
      subcategory: subcategoryItem.slug,
      type: typeItem.slug,
      isNewArrival: (subcategoryIndex + typeIndex) % 2 === 0,
      isTrending: (subcategoryIndex + typeIndex) % 3 !== 0,
    }));
  });
  const showcaseProducts = Array.from(
    new Map(
      [...products, ...generatedProducts].map((product) => [
        `${product.category}-${product.subcategory}-${product.type}`,
        product,
      ]),
    ).values(),
  );
  
  const excludeFromHome = ['jewellery', 'bags', 'footwear', 'lingerie-and-sleepwear', 'accessories'];
  const isHomeCategory = !subcategory && !type && category.slug === 'women';
  
  const validProducts = showcaseProducts.filter(product => 
    !(isHomeCategory && excludeFromHome.includes(product.subcategory))
  );

  let newArrivals = validProducts.filter((product) => product.isNewArrival).slice(0, 8);
  if (isHomeCategory) {
    const desiredNewArrivalSlugs = ['lehengas', 'sarees', 'suit-sets', 'jeans-and-jeggings'];
    const newArrivalImages: Record<string, string> = {
      'suit-sets': '/category-pages/women/new-arrivals/womeneditsuit.jpg',
      'lehengas': '/category-pages/women/new-arrivals/womeneditlehnga.jpg',
      'sarees': '/category-pages/women/new-arrivals/saree.jpg',
      'jeans-and-jeggings': '/category-pages/women/new-arrivals/womeneditjeans.jpg',
    };
    newArrivals = desiredNewArrivalSlugs
      .map(slug => validProducts.find(product => product.type === slug))
      .filter(Boolean)
      .map(product => ({
        ...product!,
        image: newArrivalImages[product!.type] || product!.image
      }));
  }
  const trendingProducts = validProducts.filter((product) => product.isTrending).slice(0, 8);

  const categoryItems: CategorySectionItem[] = subcategory
    ? subcategory.types.map((item) => ({
        slug: item.slug,
        name: item.name,
        image: item.image,
        href: typeHref(category.slug, subcategory.slug, item.slug),
        description: `${subcategory.name} · ${category.name}`,
      }))
    : category.subcategories.map((item) => ({
        slug: item.slug,
        name: item.name,
        image: item.image,
        href: subcategoryHref(category.slug, item.slug),
        description: item.types.map((entry) => entry.name).slice(0, 2).join(" · "),
      }));

  const editItems: CategorySectionItem[] = sourceSubcategories.flatMap((subcategoryItem) =>
    subcategoryItem.types.slice(0, 1).map((typeItem) => ({
      slug: `${subcategoryItem.slug}-${typeItem.slug}`,
      name: typeItem.name,
      image: typeItem.image,
      href: typeHref(category.slug, subcategoryItem.slug, typeItem.slug),
      description: `${subcategoryItem.name} · ${category.name}`,
    })),
  );

  const trendingItems: TrendingSectionItem[] = trendingProducts.map((product) => ({
    slug: product.id,
    name: product.name,
    image: product.image,
    href: typeHref(product.category, product.subcategory, product.type),
  }));

  return (
    <div className="bg-white">
      <MobileHomeTop initialCategorySlug={category.slug} />



      <Hero initialCategory={category.name} />

      <MarketplaceSections
        categoryItems={categoryItems}
        showCategorySection={!subcategory}
        editTitle={subcategory ? marketplaceHeadings.shopTypes : marketplaceHeadings.shopByEdit}
        editItems={subcategory ? categoryItems : editItems}
        showEditSection={!type}
        trendingTitle={marketplaceHeadings.trendingNow}
        trendingItems={trendingItems}
        showTrendingSection={!type && trendingItems.length > 0}
        newArrivalsTitle={type ? marketplaceHeadings.products : marketplaceHeadings.newArrivals}
        newArrivalProducts={type ? showcaseProducts : newArrivals}
        showExtendedSections={!subcategory}
      />
    </div>
  );
}
