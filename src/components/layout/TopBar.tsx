const utilityItems = [
  { label: "Free shipping on orders above", amount: "\u20b91,300", icon: "truck" },
  { label: "Verified Brands", icon: "shield" },
  { label: "Secure Payments", icon: "lock" },
  { label: "Easy Returns", icon: "returns" },
] as const;

function UtilityIcon({ icon }: { icon: (typeof utilityItems)[number]["icon"] }) {
  const className = "h-4 w-4 fill-none stroke-current stroke-[1.9]";

  if (icon === "truck") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.7" />
        <circle cx="17" cy="18" r="1.7" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (icon === "lock") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <rect x="5" y="10" width="14" height="10" rx="1.8" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M20 7v5h-5" />
      <path d="M4 17v-5h5" />
      <path d="M6.1 9A7 7 0 0 1 18.7 7" />
      <path d="M17.9 15A7 7 0 0 1 5.3 17" />
    </svg>
  );
}

export function TopBar() {
  return (
    <div className="hidden border-b border-[#ededed] bg-white text-[#222] md:block">
      <div className="mx-auto flex min-h-[34px] max-w-[1920px] items-center justify-between gap-8 px-6 lg:px-10">
        <div className="flex flex-1 items-center justify-between gap-8">
          {utilityItems.map((item) => (
            <div
              key={`${item.label}${"amount" in item ? item.amount : ""}`}
              className="inline-flex items-center gap-2.5 whitespace-nowrap font-sans text-[13px] font-bold leading-none text-[#333]"
            >
              <span className="text-[#555]">
                <UtilityIcon icon={item.icon} />
              </span>
              <span>
                {item.label}
                {"amount" in item ? <> {item.amount}</> : null}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="shrink-0 whitespace-nowrap font-sans text-[13px] font-bold leading-none text-flat-pink transition-colors hover:text-[#222]"
        >
          Launch Your Brand <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
