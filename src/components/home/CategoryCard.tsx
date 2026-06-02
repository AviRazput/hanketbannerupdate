import Image from "next/image";
import Link from "next/link";
import type { HomeImageCardItem } from "./HomeImageCard";

/** Fixed width for horizontal carousels — keep mobile tiles compact. */
export const scrollCategoryCardClass =
  "shrink-0 w-[96px] sm:w-[168px] md:w-[204px] lg:w-[228px]";

export function CategoryCard({
  item,
  className,
  imageFill = "contain",
  size = "scroll",
}: {
  item: HomeImageCardItem;
  className?: string;
  /** `cover` = same visual weight in a grid (Top Categories). `contain` = no crop (scroll rows). */
  imageFill?: "contain" | "cover";
  /** `grid` = full-width Top Categories tiles. `scroll` = compact horizontal rows. */
  size?: "grid" | "scroll";
}) {
  const isGrid = size === "grid";
  const imagePositionClass = item.slug === "women" || item.slug === "men" ? "object-[center_10%]" : "object-center";

  return (
    <Link
      href={item.href}
      className={["group block h-full w-full min-w-0", className].filter(Boolean).join(" ")}
      aria-label={item.tagline ? `${item.label} — ${item.tagline}` : item.label}
    >
      <article
        className={[
          "flex h-full w-full min-w-0 flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1",
          isGrid ? "gap-1.5 sm:gap-2.5" : "gap-1.5 sm:gap-3.5",
        ].join(" ")}
      >
        <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-transparent">
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <Image
              src={item.image}
              alt=""
              fill
              sizes={
                isGrid
                  ? "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  : "(max-width: 640px) 96px, (max-width: 1024px) 180px, 240px"
              }
              className={
                imageFill === "cover"
                  ? `object-cover ${imagePositionClass}`
                  : `object-contain ${imagePositionClass}`
              }
            />
          </div>
        </div>

        <div
          className={[
            "flex flex-col items-center justify-center px-0.5 pb-0.5 text-center",
            isGrid ? "min-h-[2.25rem] sm:min-h-[2.5rem]" : "min-h-[2rem] sm:min-h-[2.75rem] md:min-h-[3rem]",
          ].join(" ")}
        >
          <h3
            className={[
              "font-sans font-semibold uppercase text-flat-text tracking-normal transition-colors duration-300 group-hover:text-flat-pink",
              isGrid
                ? "text-[12px] leading-tight lg:text-[13px]"
                : "text-[0.8125rem] leading-[1.2] sm:text-[1.125rem] md:text-[1.2rem] lg:text-[1.28rem]",
            ].join(" ")}
          >
            {item.label}
          </h3>
          {item.tagline ? (
            <p
              className={[
                "font-sans font-medium uppercase text-flat-muted leading-snug",
                isGrid
                  ? "mt-1.5 max-w-[26ch] text-[11px] sm:text-[12px] tracking-[0.12em]"
                  : "mt-0.5 max-w-[20ch] text-[9px] sm:mt-1.5 sm:max-w-[26ch] sm:text-[11px] md:text-[12px] tracking-[0.08em] sm:tracking-[0.12em]",
              ].join(" ")}
            >
              {item.tagline}
            </p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
