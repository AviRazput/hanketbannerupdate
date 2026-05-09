import Image from "next/image";

type Product = {
  id: string;
  title: string;
  meta: string;
  price: string;
  oldPrice?: string;
  badges?: string[];
  img1: string;
  img2: string;
};

function IconHeartSmall() {
  return (
    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-flat-bg flex flex-col text-center p-3 sm:p-6 transition-colors hover:bg-flat-layer">
      <div className="aspect-[430/491] w-full mb-3 sm:mb-6 overflow-hidden bg-flat-layer relative">
        {product.badges?.length ? (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-2 z-10">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-flat-text text-flat-bg text-[9px] font-bold uppercase tracking-widest px-2 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        ) : null}

        <Image
          src={product.img1}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={product.img2}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover opacity-0 transition-all duration-700 sm:group-hover:opacity-100 sm:group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 p-0 transform translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300 bg-flat-bg border-t border-flat-border flex z-20">
          <button className="flex-1 py-3 sm:py-4 text-[10px] font-bold uppercase tracking-widest text-flat-text hover:bg-flat-text hover:text-flat-bg transition-colors">
            Add to Cart
          </button>
          <button
            className="w-11 sm:w-12 border-l border-flat-border flex items-center justify-center hover:bg-flat-text hover:text-flat-bg transition-colors"
            aria-label="Wishlist"
          >
            <IconHeartSmall />
          </button>
        </div>
      </div>

      <p className="text-[10px] font-semibold text-flat-muted uppercase tracking-[0.15em] mb-2">
        {product.meta}
      </p>
      <h4 className="mb-2 text-flat-text transition-colors group-hover:text-flat-muted text-[13px] sm:text-[15px] leading-snug">
        {product.title}
      </h4>
      <div className="flex justify-center items-center gap-2">
        {product.oldPrice ? (
          <span className="line-through text-flat-muted text-xs">{product.oldPrice}</span>
        ) : null}
        <span className="font-bold text-flat-text text-sm">{product.price}</span>
      </div>
    </div>
  );
}

