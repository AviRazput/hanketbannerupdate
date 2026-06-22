import { categories, categoryHref } from "@/data/categories";
import Link from "next/link";

const shopLinks = categories.map((category) => ({ label: category.name, href: categoryHref(category.slug) }));

const footerGroups = [
  {
    title: "Shop",
    links: shopLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About Hanket", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Brand Partners", href: "#" },
      { label: "Become a Seller", href: "/seller/products/new" },
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
      <h3 className="mb-5 font-sans text-[12px] font-extrabold uppercase tracking-[0.16em] text-black">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-sans text-[13px] font-semibold text-black transition-colors hover:text-flat-pink"
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
      className="flex min-h-12 items-center gap-3 border border-black bg-white px-4 text-black transition-colors hover:bg-black hover:text-white"
      aria-label={`Download Hanket on ${label}`}
    >
      <span className="text-[20px] leading-none" aria-hidden>
        {store === "Apple" ? "A" : "G"}
      </span>
      <span>
        <span className="block font-sans text-[8px] font-semibold uppercase tracking-[0.12em] opacity-70">
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
    <footer className="border-t border-black/10 bg-white text-black pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-7 md:py-16 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <Link
              href="/"
              className="inline-block font-serif text-[2.75rem] font-bold lowercase tracking-[0.08em] text-black"
              aria-label="Hanket home"
            >
              hanket
            </Link>
            <p className="mt-4 font-sans text-[14px] font-semibold leading-7 text-black/75">
              Discover India&apos;s curated fashion marketplace featuring
              independent labels, handcrafted collections, contemporary
              fashion, home decor, and lifestyle products.
            </p>
          </div>

          <p className="font-sans text-[11px] font-extrabold uppercase tracking-[0.18em] text-flat-pink">
            Curated fashion. Made for India.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 border-b border-black/10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1.2fr_1fr_1.35fr] lg:py-14">
          {footerGroups.map((group) => (
            <FooterColumn
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}

          <div className="space-y-8">
            <div>
              <h3 className="mb-5 font-sans text-[12px] font-extrabold uppercase tracking-[0.16em] text-black">
                Download App
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <AppButton store="Apple" label="App Store" />
                <AppButton store="Play" label="Google Play" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-sans text-[12px] font-extrabold uppercase tracking-[0.16em] text-black">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="border-b border-transparent font-sans text-[12px] font-bold text-black transition-colors hover:border-flat-pink hover:text-flat-pink"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-center font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-black md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; 2026 Hanket. All Rights Reserved.</p>
          <p>Designed for India&apos;s Emerging Fashion Brands.</p>
        </div>
      </div>
    </footer>
  );
}
