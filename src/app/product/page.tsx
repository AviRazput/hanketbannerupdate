import { SiteLayout } from "../../components/layout/SiteLayout";

export default function ProductIndexPage() {
  return (
    <SiteLayout>
      <section className="py-24 bg-flat-bg border-t border-flat-border">
        <div className="max-w-[1500px] mx-auto px-8">
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Products</h2>
          <p className="text-flat-muted">
            Product listing page scaffold is ready. Next step: add filters and connect to backend.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

