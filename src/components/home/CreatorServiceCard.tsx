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
  const objectPosition =
    service.slug === "photography" ? "center 28%" : "center center";

  return (
    <article
      className={[
        "group flex h-full min-h-full w-[min(82vw,320px)] shrink-0 flex-col overflow-hidden bg-white shadow-[0_12px_35px_rgba(31,27,23,0.08)] ring-1 ring-[#eadfd4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,27,23,0.14)] hover:ring-[#c8a66e] sm:w-[340px] md:w-auto",
        className,
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f7f1eb]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 340px, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 p-4 font-sans text-[1.25rem] font-black uppercase leading-none tracking-[0.08em] text-white sm:p-5 md:text-[1.45rem]">
          {service.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col border border-[#efe5da] border-t-0 px-4 py-5 sm:px-5 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-px w-9 bg-[#c8a66e]" />
          <span className="font-sans text-[9px] font-black uppercase tracking-[0.2em] text-[#8b7b6e]">
            Brand Growth
          </span>
        </div>
        <p className="flex-1 font-sans text-[13px] leading-relaxed text-[#4f4a45] sm:text-[14px] md:text-[15px] md:leading-[1.65]">
          {service.description}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center justify-center bg-[#1a1a1a] px-5 py-2.5 font-sans text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-flat-pink"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
