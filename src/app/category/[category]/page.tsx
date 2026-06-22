import { CategoryPage } from "@/components/category/CategoryPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { categories, findCategory } from "@/data/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = findCategory(categorySlug);
  if (!category) notFound();
  return <SiteLayout><CategoryPage category={category} /></SiteLayout>;
}
