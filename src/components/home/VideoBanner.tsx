"use client";

import { useEffect, useState } from "react";

const VIDEO_URL = "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1";

function IconPlay() {
  return (
    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function VideoBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section className="relative w-full h-[600px] border-t border-flat-border overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://woodmart.xtemos.com/wp-content/uploads/2024/02/fashion-flat-slide-2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <p className="text-[0.75rem] leading-[1.5] tracking-[0.2em] text-white/80 uppercase font-bold mb-4">
            Watch Our Story
          </p>
          <h2 className="text-white mb-8 text-[3rem] leading-[1.1]">The New Collection</h2>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-[80px] h-[80px] border-2 border-white/60 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-white hover:scale-110 bg-white/10 backdrop-blur-sm"
            aria-label="Play video"
          >
            <IconPlay />
          </button>
          <p className="text-white/60 text-[13px] mt-6 tracking-wide">Spring / Summer 2026</p>
        </div>
      </section>

      <div
        className={[
          "fixed inset-0 bg-black/90 z-[100] transition-opacity duration-300 flex items-center justify-center",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 text-white text-3xl hover:text-white/60 transition-colors z-[110] cursor-pointer"
          aria-label="Close video"
        >
          ✕
        </button>
        <div className="w-full max-w-4xl aspect-video px-6">
          {open ? (
            <iframe
              className="w-full h-full"
              src={VIDEO_URL}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Hanket video"
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

