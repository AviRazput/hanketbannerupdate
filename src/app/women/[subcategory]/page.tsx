import SearchPage from "@/app/search/page";
import { findSubcategory } from "@/data/categories";
import { notFound } from "next/navigation";

export default async function WomenCategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  if (!findSubcategory("women", subcategory)) notFound();

  return <SearchPage searchParams={Promise.resolve({ category: "women", subcategory })} />;
}
