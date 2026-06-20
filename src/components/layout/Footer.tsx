import Link from "next/link";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Women", href: "/search?category=women" },
      { label: "Men", href: "/search?category=men" },
      { label: "Kids", href: "/search?category=kids" },
      { label: "Home Decor", href: "/search?category=home-decor" },
      { label: "Jewellery", href: "/search?type=jewelry" },
      { label: "Accessories", href: "/search?type=accessories" },
      { label: "Wedding & Occasion", href: "/search?category=wedding-occasion" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Hanket", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Brand Partners", href: "#" },
      { label: "Become a Seller", href: "#launch-with-hanket" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Track Order", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Returns & Refunds", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Cancellation Policy", href: "#" },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hanketstudio/",
    external: true,
  },
  { label: "Facebook", href: "#", external: false },
  { label: "YouTube", href: "#", external: false },
  { label: "Pinterest", href: "#", external: false },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-sans text-[13px] text-[#5f5a54] transition-colors hover:text-[#9a753f]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppButton({
  store,
  label,
}: {
  store: "Apple" | "Play";
  label: string;
}) {
  return (
    <a
      href="#"
      className="flex min-h-12 items-center gap-3 border border-[#1a1a1a] bg-[#1a1a1a] px-4 text-white transition-colors hover:bg-[#3a332d]"
      aria-label={`Download Hanket on ${label}`}
    >
      <span className="text-[20px] leading-none" aria-hidden>
        {store === "Apple" ? "A" : "G"}
      </span>
      <span>
        <span className="block font-sans text-[8px] uppercase tracking-[0.12em] text-white/70">
          Download on the
        </span>
        <span className="block font-sans text-[13px] font-bold leading-tight">
          {label}
        </span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e6dfd7] bg-white text-[#1a1a1a] pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-7 md:py-16 lg:px-10 xl:px-14">
        <div className="grid gap-10 border-b border-[#dfd6cc] pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)_1.2fr] lg:gap-7 lg:pb-16">
          <div className="max-w-[330px]">
            <Link
              href="/"
              className="inline-block font-serif text-[2rem] font-medium lowercase tracking-[0.08em] text-[#1a1a1a]"
              aria-label="Hanket home"
            >
              hanket
            </Link>
            <p className="mt-5 font-sans text-[13px] leading-6 text-[#625d57]">
              Discover India&apos;s curated fashion marketplace featuring
              independent labels, handcrafted collections, contemporary
              fashion, home decor, and lifestyle products.
            </p>
            <div className="mt-6 h-px w-12 bg-[#c9a66b]" />
          </div>

          {footerGroups.map((group) => (
            <FooterColumn
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}

          <div className="space-y-8">
            <div>
              <h3 className="mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                Download App
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <AppButton store="Apple" label="App Store" />
                <AppButton store="Play" label="Google Play" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="border-b border-transparent font-sans text-[12px] text-[#5f5a54] transition-colors hover:border-[#c9a66b] hover:text-[#9a753f]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-center font-sans text-[10px] uppercase tracking-[0.12em] text-[#777069] md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; 2026 Hanket. All Rights Reserved.</p>
          <p>Designed for India&apos;s Emerging Fashion Brands.</p>
        </div>
      </div>
    </footer>
  );
}
