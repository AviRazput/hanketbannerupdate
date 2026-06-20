import Image from "next/image";
import Link from "next/link";

export type CreatorService = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export function CreatorServiceCard({
  service,
  className = "",
}: {
  service: CreatorService;
  className?: string;
}) {
  const href = `/search?service=${service.slug}`;

  return (
    <article
      className={[
        "group flex h-full w-[min(82vw,340px)] shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#e2d5c8] bg-white shadow-[0_10px_28px_rgba(56,38,20,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(56,38,20,0.12)] sm:w-[360px] md:w-auto",
        className,
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f7f1eb]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 340px, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="font-sans text-[19px] font-bold leading-tight text-[#1f1f1f]">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 font-sans text-[13px] leading-relaxed text-[#666] sm:text-[14px]">
          {service.description}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex w-fit items-center gap-2 font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#1f1f1f] transition-colors hover:text-flat-pink"
        >
          Explore
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
