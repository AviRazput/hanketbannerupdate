const trustItems = [
  "Verified Brands",
  "Secure Payments",
  "Easy Returns",
  "Nationwide Delivery",
] as const;

export function TrustStrip() {
  const marqueeItems = [...trustItems, ...trustItems, ...trustItems];

  return (
    <section className="w-full overflow-hidden border-y border-[#eeeeee] bg-[#fbfbfb]">
      <div className="hanket-trust-marquee">
        <div className="hanket-trust-marquee__track">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="hanket-trust-marquee__card"
              aria-hidden={index >= trustItems.length}
            >
              <span className="hanket-trust-marquee__check" aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
