import Image from "next/image";

const brands = [
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-witra.png",
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-roscia.png",
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-kalles.png",
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-magdon.png",
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-norda.png",
  "https://woodmart.xtemos.com/wp-content/uploads/2017/01/brand-engo.png",
];

export function BrandStrip() {
  return (
    <section className="py-12 bg-white border-t border-flat-border overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="flex items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">
          {brands.map((src) => (
            <Image
              key={src}
              src={src}
              width={160}
              height={48}
              className="h-12 w-auto object-contain shrink-0 cursor-pointer hover:opacity-100 transition-opacity"
              alt="Brand"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

