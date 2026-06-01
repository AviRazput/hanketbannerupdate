import { SiteLayout } from "../../../components/layout/SiteLayout";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SiteLayout>
      <section className="py-24 bg-flat-bg border-t border-flat-border">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Product</h2>
          <p className="text-flat-muted">
            Slug: <span className="text-flat-text font-semibold">{slug}</span>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

