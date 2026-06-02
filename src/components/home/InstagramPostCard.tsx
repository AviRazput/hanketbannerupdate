import Image from "next/image";
import Link from "next/link";

export type InstagramPost = {
  slug: string;
  title: string;
  image: string;
  href: string;
};

function getPostStats(slug: string) {
  const seed = slug.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return {
    likes: 1800 + (seed * 37) % 4200,
    comments: 80 + (seed * 19) % 760,
  };
}

function getObjectPosition(image: string) {
  if (image.includes("/10.")) {
    return "center 85%";
  }
  if (image.includes("/8.")) {
    return "center 18%";
  }
  if (image.includes("/3.")) {
    return "center 30%";
  }
  return "center center";
}

export function InstagramPostCard({ post }: { post: InstagramPost }) {
  const stats = getPostStats(post.slug);

  return (
    <Link
      href={post.href}
      className="group relative block aspect-square w-full shrink-0 overflow-hidden bg-[#f3f3f3]"
      aria-label={post.title}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        style={{ objectPosition: getObjectPosition(post.image) }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-center gap-7 px-4 pb-7 font-sans text-[16px] font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="flex items-center gap-1.5">
          <svg className="h-5 w-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {stats.likes}
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="h-5 w-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {stats.comments}
        </span>
      </div>
    </Link>
  );
}
