import { SiteLayout } from "@/components/layout/SiteLayout";
import { CategorySelectors } from "@/components/seller/CategorySelectors";

export default function NewSellerProductPage() {
  return (
    <SiteLayout>
      <section className="bg-white py-12 sm:py-16">
        <form className="mx-auto w-full max-w-5xl px-4 sm:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-flat-pink">Seller Panel</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-flat-text sm:text-4xl">Upload a product</h1>
          <p className="mb-10 mt-3 max-w-2xl text-sm leading-relaxed text-flat-muted">Place the product in one clear marketplace path. Hanket currently supports Category, Subcategory, and Type only.</p>
          <CategorySelectors />
        </form>
      </section>
    </SiteLayout>
  );
}
