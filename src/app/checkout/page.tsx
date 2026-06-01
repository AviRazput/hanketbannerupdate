import { SiteLayout } from "../../components/layout/SiteLayout";

export default function CheckoutPage() {
  return (
    <SiteLayout>
      <section className="py-24 bg-flat-bg border-t border-flat-border">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Checkout</h2>
          <p className="text-flat-muted">
            Checkout page scaffold is ready. Add address, payment and order summary here.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

