function ExpertAvatars() {
  const colors = ["bg-[#c4a882]", "bg-[#8b9ea8]", "bg-[#a88b9e]"];
  return (
    <span className="inline-flex items-center -space-x-2 mr-2" aria-hidden>
      {colors.map((bg, i) => (
        <span key={i} className={`h-6 w-6 rounded-full border-2 border-[#f7f7f7] ${bg} inline-block`} />
      ))}
    </span>
  );
}

export function TopBar() {
  return (
    <div className="border-b border-[#ebebeb] bg-[#f7f7f7] text-[13px] text-[#777] py-2 hidden md:block">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-8 flex justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-5 lg:gap-7">
          <button type="button" className="inline-flex items-center gap-1.5 hover:text-[#333] transition-colors">
            <span className="text-base leading-none" aria-hidden>
              🇮🇳
            </span>
            <span className="font-medium text-[#333]">INR</span>
            <span className="text-[10px] text-[#999]" aria-hidden>
              ▾
            </span>
          </button>
          <a href="#" className="hover:text-[#333] transition-colors">
            Gift Cards
          </a>
          <a href="#" className="hover:text-[#333] transition-colors">
            Store Locator
          </a>
          <a href="#" className="hover:text-[#333] transition-colors">
            About Us
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-5 lg:gap-7">
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-[#555] hover:text-[#333] transition-colors">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>+91 98765 43210</span>
          </a>
          <a href="#" className="inline-flex items-center hover:text-[#333] transition-colors">
            <ExpertAvatars />
            <span>Contact with an expert</span>
          </a>
        </div>
      </div>
    </div>
  );
}
