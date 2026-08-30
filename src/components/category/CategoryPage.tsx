import type { CategorySectionItem } from "@/components/home/CategoriesSection";
import { Hero } from "@/components/home/Hero";
import { MarketplaceSections } from "@/components/home/MarketplaceSections";
import { MobileHomeTop } from "@/components/home/MobileHomeTop";
import type { TrendingSectionItem } from "@/components/home/TrendingNowSection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
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
  const isMenHomeCategory = !subcategory && !type && category.slug === 'men';
  
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
  } else if (isMenHomeCategory) {
    const menNewArrivalItems = [
      { name: 'Latest T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Denim', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
      { name: 'Latest Footwear', image: 'https://images.unsplash.com/photo-1614252339474-ce3a484c2eb5?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Ethnic Wear', image: 'https://images.unsplash.com/photo-1598305436662-3860166299d2?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80' },
      { name: 'New Accessories', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80' },
    ];
    newArrivals = menNewArrivalItems.map((item, index) => ({
      id: `men-new-arrival-${index}`,
      name: item.name,
      brand: 'Hanket Edit',
      price: `₹${(999 + index * 250).toLocaleString("en-IN")}`,
      image: item.image,
      category: 'men',
      subcategory: 'clothing',
      type: 't-shirts',
      isNewArrival: true,
      isTrending: false,
    }));
  }
  const trendingProducts = validProducts.filter((product) => product.isTrending).slice(0, 8);

  let categoryItems: CategorySectionItem[] = subcategory
    ? subcategory.types.map((item) => ({
        slug: item.slug,
        name: item.name,
        image: item.image,
        href: `/search?category=${category.slug}&subcategory=${subcategory.slug}&type=${item.slug}`,
        description: `${subcategory.name} · ${category.name}`,
      }))
    : category.subcategories.map((item) => ({
        slug: item.slug,
        name: item.name,
        image: item.image,
        href: `/search?category=${category.slug}&subcategory=${item.slug}`,
        description: item.types.map((entry) => entry.name).slice(0, 2).join(" · "),
      }));

  if (isMenHomeCategory) {
    const hiddenCategories = ['footwear', 'watches', 'bags-and-wallets', 'accessories'];
    categoryItems = categoryItems.filter(item => !hiddenCategories.includes(item.slug));
  }

  let editItems: CategorySectionItem[] = sourceSubcategories.flatMap((subcategoryItem) =>
    subcategoryItem.types.slice(0, 1).map((typeItem) => ({
      slug: `${subcategoryItem.slug}-${typeItem.slug}`,
      name: typeItem.name,
      image: typeItem.image,
      href: typeHref(category.slug, subcategoryItem.slug, typeItem.slug),
      description: `${subcategoryItem.name} · ${category.name}`,
    })),
  );

  if (isMenHomeCategory) {
    editItems = [
      { slug: 'casual-edit', name: 'Casual Edit', image: '/category-pages/men/shopbyedit/casualedit.jpg', href: categoryHref('men'), description: 'Men · Everyday styles' },
      { slug: 'office-edit', name: 'Office Edit', image: '/category-pages/men/shopbyedit/officeedit.jpg', href: categoryHref('men'), description: 'Men · Formal & Workwear' },
      { slug: 'party-edit', name: 'Party Edit', image: '/category-pages/men/shopbyedit/party.jpg', href: categoryHref('men'), description: 'Men · Evening & Party' },
      { slug: 'festive-edit', name: 'Festive Edit', image: '/category-pages/men/shopbyedit/festivaledit.jpg', href: categoryHref('men'), description: 'Men · Traditional & Festive' },
      { slug: 'wedding-edit', name: 'Wedding Edit', image: '/category-pages/men/shopbyedit/wedding.jpg', href: categoryHref('men'), description: 'Men · Groom & Guests' },
      { slug: 'active-edit', name: 'Active Edit', image: '/category-pages/men/shopbyedit/activeedit.jpg', href: categoryHref('men'), description: 'Men · Sports & Fitness' },
      { slug: 'winter-edit', name: 'Winter Edit', image: '/category-pages/men/shopbyedit/winter.jpg', href: categoryHref('men'), description: 'Men · Winter Wear' },
    ];
  }

  let trendingItems: TrendingSectionItem[] = trendingProducts.map((product) => ({
    slug: product.id,
    name: product.name,
    image: product.image,
    href: typeHref(product.category, product.subcategory, product.type),
  }));

  if (isMenHomeCategory) {
    trendingItems = [
      { slug: 'oversized-tshirts', name: 'Oversized T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'baggy-relaxed-jeans', name: 'Baggy / Relaxed Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'sneakers', name: 'Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'printed-shirts', name: 'Printed Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'oversized-hoodies', name: 'Oversized Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'loafers', name: 'Loafers', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'statement-watches', name: 'Statement Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
      { slug: 'trending-accessories', name: 'Trending Accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80', href: categoryHref('men') },
    ];
  }

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
        showShopByOccasion={category.slug === 'women' || isMenHomeCategory}
        categorySlug={category.slug}
      />
    </div>
  );
}
