const trustItems = [
  "Verified Brands",
  "Secure Payments",
  "Easy Returns",
  "Nationwide Delivery",
] as const;

export function TrustStrip() {
  return (
    <section className="w-full border-y border-[#e9e3dc] bg-[#fbfaf8] px-4 py-5 sm:px-6 md:py-6 lg:px-10 xl:px-14">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-0">
        {trustItems.map((item, index) => (
          <div
            key={item}
            className={`flex items-center justify-center gap-2.5 px-2 text-center font-sans text-[11px] font-black uppercase tracking-[0.08em] text-[#2b2825] sm:text-[12px] lg:text-[13px] ${
              index > 0 ? "md:border-l md:border-[#ded7cf]" : ""
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#b58b55] text-[#9a753f]">
              <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden>
                <path d="m6 12 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
