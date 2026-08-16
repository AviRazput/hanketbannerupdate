import { SiteLayout } from "../components/layout/SiteLayout";
import { CategoryPage } from "@/components/category/CategoryPage";
import { findCategory } from "@/data/categories";
import { notFound } from "next/navigation";

export default function Home() {
  const category = findCategory("women");

  if (!category) {
    return notFound();
  }

  return (
    <SiteLayout>
      <CategoryPage category={category} />
    </SiteLayout>
  );
}
