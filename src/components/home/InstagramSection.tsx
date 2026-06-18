import { instagramPosts } from "@/data/homepage";
import { InstagramPostCard } from "./InstagramPostCard";

const mosaicPosts = instagramPosts.slice(0, 10);

export function InstagramSection() {
  return (
    <section className="relative w-full bg-white px-0 py-0 sm:px-6 lg:px-10 xl:px-14">
      <div className="relative">
        <div className="grid w-full grid-cols-2 gap-0 sm:grid-cols-5">
          {mosaicPosts.map((post, index) => (
            <InstagramPostCard key={`${post.slug}-${index}`} post={post} />
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 z-10 w-[min(420px,82vw)] -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:px-10 sm:py-9">
          <p className="font-sans text-[22px] font-black uppercase leading-none tracking-normal text-[#222]">
            Instagram
          </p>
        </div>
      </div>
    </section>
  );
}
