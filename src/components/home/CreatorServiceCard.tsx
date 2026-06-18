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
  image,
  featured = false,
}: {
  service: CreatorService;
  className?: string;
  image?: string;
  featured?: boolean;
}) {
  const href = `/search?service=${service.slug}`;
  const objectPosition =
    service.slug === "photography" ? "center 28%" : "center center";

  return (
    <article
      className={[
        "group flex h-full min-h-full w-[min(84vw,340px)] shrink-0 flex-col overflow-hidden border border-[#eadfd4] bg-[#fff8f3] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] sm:w-[360px] md:w-auto",
        featured ? "md:min-h-[520px]" : "",
        className,
      ].join(" ")}
    >
      <div className={["relative w-full overflow-hidden bg-[#f7f1eb]", featured ? "aspect-[4/5] md:flex-1" : "aspect-[16/10]"].join(" ")}>
        <Image
          src={image ?? service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 340px, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ objectPosition }}
        />
      </div>

      <div className={["flex flex-col px-4 py-4 sm:px-5 sm:py-5", featured ? "" : "flex-1"].join(" ")}>
        <h3 className={["font-sans font-bold leading-tight text-[#1f1f1f]", featured ? "text-[22px]" : "text-[18px]"].join(" ")}>
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
