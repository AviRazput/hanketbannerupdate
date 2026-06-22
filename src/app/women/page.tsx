import { CategoryPage } from "@/components/category/CategoryPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { findCategory } from "@/data/categories";
import { notFound } from "next/navigation";

export default function WomenPage() {
  const category = findCategory("women");
  if (!category) notFound();

  return <SiteLayout><CategoryPage category={category} /></SiteLayout>;
}
