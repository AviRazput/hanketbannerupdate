import SearchPage from "@/app/search/page";
import { findSubcategory, findType } from "@/data/categories";
import { notFound } from "next/navigation";

export default async function WomenProductTypePage({ params }: { params: Promise<{ subcategory: string; type: string }> }) {
  const { subcategory, type } = await params;
  if (!findSubcategory("women", subcategory) || !findType("women", subcategory, type)) notFound();

  return <SearchPage searchParams={Promise.resolve({ category: "women", subcategory, type })} />;
}
