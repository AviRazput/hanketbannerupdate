import { CategoryPage } from "@/components/category/CategoryPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { categories, findCategory, findSubcategory, findType } from "@/data/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.flatMap((category) => category.subcategories.flatMap((subcategory) => subcategory.types.map((type) => ({ category: category.slug, subcategory: subcategory.slug, type: type.slug }))));
}

export default async function Page({ params }: { params: Promise<{ category: string; subcategory: string; type: string }> }) {
  const slugs = await params;
  const category = findCategory(slugs.category);
  const subcategory = findSubcategory(slugs.category, slugs.subcategory);
  const type = findType(slugs.category, slugs.subcategory, slugs.type);
  if (!category || !subcategory || !type) notFound();
  return <SiteLayout><CategoryPage category={category} subcategory={subcategory} type={type} /></SiteLayout>;
}
