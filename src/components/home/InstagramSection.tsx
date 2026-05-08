import Image from "next/image";
import { instaImages } from "../../data/products";

function IconInstagramOutline() {
  return (
    <svg
      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="white" />
    </svg>
  );
}

export function InstagramSection() {
  return (
    <section className="py-24 bg-flat-layer border-t border-flat-border overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center mb-12">
          <div className="text-[0.75rem] leading-[1.5] tracking-[0.15em] text-flat-muted uppercase mb-4">
            Follow Us on Instagram
          </div>
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">@hanket.official</h2>
          <p className="text-flat-muted max-w-lg mx-auto">
            Stay inspired — follow us for daily style drops, behind-the-scenes, and new arrivals.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1920px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-flat-border border-y border-flat-border">
          {instaImages.map((img, idx) => (
            <div key={`${img}-${idx}`} className="aspect-square relative bg-flat-bg overflow-hidden group cursor-pointer">
              <Image
                src={`https://woodmart.xtemos.com/wp-content/uploads/2017/04/${img}`}
                alt="Instagram post"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-flat-bg/0 group-hover:bg-flat-bg/30 transition-colors duration-300 flex items-center justify-center">
                <IconInstagramOutline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

