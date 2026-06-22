import { CategoryPage } from "@/components/category/CategoryPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { categories, findCategory, findSubcategory } from "@/data/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.flatMap((category) => category.subcategories.map((subcategory) => ({ category: category.slug, subcategory: subcategory.slug })));
}

export default async function Page({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const slugs = await params;
  const category = findCategory(slugs.category);
  const subcategory = findSubcategory(slugs.category, slugs.subcategory);
  if (!category || !subcategory) notFound();
  return <SiteLayout><CategoryPage category={category} subcategory={subcategory} /></SiteLayout>;
}
