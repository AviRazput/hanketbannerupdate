import { SiteLayout } from "../../components/layout/SiteLayout";

export default function CartPage() {
  return (
    <SiteLayout>
      <section className="py-24 bg-flat-bg border-t border-flat-border">
        <div className="max-w-[1500px] mx-auto px-8">
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Cart</h2>
          <p className="text-flat-muted">
            Cart page scaffold is ready. Wire this to your state/Firebase later.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

