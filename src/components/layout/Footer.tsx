"use client";

import Link from "next/link";
import React from "react";

const aboutLinks = [
  { label: "About Hanket", href: "#" },
  { label: "Careers", href: "#" },
  { label: "In Store Events", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Important Information", href: "#" },
];

const buyingGuideLinks = [
  { label: "Gift Card", href: "#" },
  { label: "Gift Card T&C", href: "#" },
  { label: "Hanket Cash T&C", href: "#" },
  { label: "Hanket Advantage", href: "#" },
  { label: "Coupon Code & Offers T&C", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Cancellations, Returns & Exchanges", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Payment Options", href: "#" },
  { label: "Give Us Feedback", href: "#" },
];

const accountLinks = [
  { label: "Orders & Returns", href: "#" },
  { label: "Account Details", href: "#" },
  { label: "Hanket Wallet", href: "#" },
  { label: "Addresses", href: "#" },
  { label: "Become a Seller", href: "/seller/products/new" },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Security & Privacy", href: "#" },
  { label: "Purchase Order Policy", href: "#" },
];

const contactInfo = {
  storeLocator: "Store Locator",
  tollFree: "1800 123 4567",
  timings: "(Mon-Fri 10am-10pm IST)",
  whatsapp: "+91 98765 43210",
  email: "contactus@hanket.com",
};

const socialIcons = [
  { label: "Instagram", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
  { label: "Facebook", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { label: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const paymentIcons = [
  "M10.825 15.659l1.109-7.004h1.794l-1.11 7.004h-1.793zm8.28-6.822c-.443-.174-1.144-.336-2.023-.336-2.222 0-3.791 1.185-3.802 2.883-.016 1.254 1.135 1.954 2.001 2.381.892.441 1.194.723 1.194 1.115-.015.602-.72 879-1.391.879-.925 0-1.42-.146-2.18-.48l-.307-.145-.316 1.972c.542.25 1.54.468 2.585.48 2.364 0 3.914-1.168 3.935-2.977.016-.991-.595-1.745-1.921-2.382-.806-.411-1.301-.686-1.301-1.102.015-.395.438-.802 1.346-.802.766-.016 1.344.162 1.776.353l.215.103.304-1.942zm-12.756 6.822l-1.724-4.664-.176-.879h-3.03l-.048.225c-.015.088 1.536 2.887 2.456 4.394l1.107 5.589h1.895l2.845-7.004h-1.892l-1.433 3.34zm6.064 0h-1.684l-2.67-7.004h1.78l1.414 3.737c.307.82.518 1.48.518 1.48s.225-.66.56-1.48l1.492-3.737h1.748l-3.158 7.004z",
  "M15.42 16.897c-1.874 0-3.411-.904-4.42-2.316a5.503 5.503 0 01-4.42 2.316 5.5 5.5 0 010-11 5.5 5.5 0 014.42 2.316 5.5 5.5 0 019.92 3.184 5.5 5.5 0 01-5.5 5.5m0-9.878a4.378 4.378 0 00-3.13 1.314 5.485 5.485 0 010 6.132 4.378 4.378 0 003.13 1.313 4.378 4.378 0 000-8.759m-8.84 8.759a4.378 4.378 0 003.13-1.313 5.485 5.485 0 010-6.132 4.378 4.378 0 00-3.13-1.314 4.378 4.378 0 000 8.759",
  "M19.78 6.452c-.655-2.072-2.825-2.91-5.918-2.91H7.558a1.185 1.185 0 00-1.171 1.011L4.015 19.34a.434.434 0 00.428.497h4.088l.582-3.69c.092-.58.59-1.012 1.178-1.012h1.696c3.815 0 6.541-1.558 7.332-5.972.339-1.9.011-3.61-1.226-4.991M17.168 11.25c-.538 3.414-2.738 3.414-5.187 3.414h-1.695l-.65 4.128H6.55l1.666-10.569h5.646c2.062 0 3.633.522 4.103 2.146.331 1.144.156 2.501-.645 3.593z",
];

const popularSearches = [
  "Indian Clothes", "Indian Jewelry", "Indo Dresses", "Sherwani", "Mens Kurta", "Anarkali", "Sharara", "Saree",
  "Pre Draped Saree", "Indo Western Outfits", "Lehengas", "Saree Blouse", "Indian Kurtas", "Wedding Lehenga",
  "Saree Online", "Organza Saree", "Black Kurta", "Lehenga Saree", "White Lehenga", "Mehendi Outfits",
  "Red Lehenga", "Wedding Kurta For Men", "Groom Sherwani", "Sangeet Lehenga", "Kaftan Set", "Green Kurta",
  "Kids Kurta", "Lashkaraa", "Sabyasachi", "Masaba", "Kalki", "Mahima Mahajan", "Paulmi And Harsh"
];

const featuredDesigners = [
  "Ritu Kumar", "Anita Dongre", "Tarun Tahiliani", "Sabyasachi", "Manish Malhotra", "Gaurav Gupta",
  "Amit Aggarwal", "Payal Singhal", "Masaba", "Ridhi Mehra", "Punit Balana", "Varun Bahl", "Rohit Bal"
];

// Reusable component for lists of links
function LinkList({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <ul className="space-y-[6px]">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-[12.5px] font-light text-[#666] hover:text-[#333] transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Reusable component for inline piped links
function InlinePipedLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="mb-6">
      <h5 className="text-[11px] font-semibold uppercase tracking-wide text-[#333] mb-2">{title}</h5>
      <div className="flex flex-wrap gap-y-1.5 text-[11px] font-light text-[#666]">
        {links.map((link, index) => (
          <React.Fragment key={link}>
            <Link href="#" className="hover:text-[#333] transition-colors whitespace-nowrap">
              {link}
            </Link>
            {index < links.length - 1 && <span className="mx-1.5 text-[#ccc]">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      {/* 1. Main Navigation Grid (5 Columns) */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-12 mb-16">
          
          {/* Column 1: Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Hanket home">
              <img
                src="/hanketlogonew.png"
                alt="Hanket"
                className="h-14 w-auto object-contain object-left"
              />
            </Link>
            <LinkList links={aboutLinks} />
          </div>

          {/* Column 2: Buying Guide */}
          <div>
            <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-4">Buying Guide</h4>
            <LinkList links={buyingGuideLinks} />
          </div>

          {/* Column 3: Account & Policies */}
          <div>
            <div className="mb-8">
              <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-4">Account</h4>
              <LinkList links={accountLinks} />
            </div>
            <div>
              <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-4">Policies</h4>
              <LinkList links={policyLinks} />
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <div className="mb-8">
              <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-4">Contact Us</h4>
              <ul className="space-y-[6px] text-[12.5px] font-light text-[#666]">
                <li><Link href="#" className="hover:text-[#333]">{contactInfo.storeLocator}</Link></li>
                <li>Toll Free: <span className="text-[#333] font-medium">{contactInfo.tollFree}</span></li>
                <li>{contactInfo.timings}</li>
                <li>Whatsapp: <span className="text-[#333] font-medium">{contactInfo.whatsapp}</span></li>
                <li><a href={`mailto:${contactInfo.email}`} className="hover:text-[#333]">{contactInfo.email}</a></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-3">We Accept</h4>
              <div className="flex gap-2">
                {paymentIcons.map((icon, i) => (
                  <div key={i} className="w-9 h-6 flex items-center justify-center">
                    <svg className="h-[22px] w-auto text-[#666]" viewBox="0 0 24 24" fill="currentColor">
                      <path d={icon} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialIcons.map((social) => (
                  <a key={social.label} href="#" className="w-7 h-7 border border-[#333] rounded-full flex items-center justify-center text-[#333] hover:text-white hover:bg-[#333] transition-colors" aria-label={social.label}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 5: App Download */}
          <div>
            <h4 className="text-[12.5px] font-semibold text-[#333] uppercase tracking-wide mb-4">Download The Hanket App</h4>
            
            <div className="flex flex-col gap-4">
              {/* Placeholder QR Code Box */}
              <div className="w-28 h-28 bg-[#f9f9f9] border border-[#e0e0e0] flex items-center justify-center">
                <svg className="w-20 h-20 text-[#333]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                  <path d="M3 3h8v8H3zM5 5v4h4V5zM13 3h8v8h-8zM15 5v4h4V5zM3 13h8v8H3zM5 15v4h4v-4zM13 13h2v2h-2zM15 13h2v2h-2zM17 13h2v2h-2zM19 13h2v2h-2zM13 15h2v2h-2zM17 15h4v2h-4zM13 17h2v2h-2zM15 17h2v2h-2zM19 17h2v2h-2zM17 19h2v2h-2z" />
                </svg>
              </div>

              <div className="flex gap-2">
                <a href="#" className="w-28 flex items-center justify-center gap-1.5 border border-[#333] rounded px-2 py-1.5 hover:bg-[#fafafa] transition-colors group">
                  <svg className="w-[14px] h-[14px] text-[#333]" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[7px] font-medium text-[#666]">Download on the</span>
                    <span className="text-[10px] font-bold text-[#333]">App Store</span>
                  </div>
                </a>
                <a href="#" className="w-28 flex items-center justify-center gap-1.5 border border-[#333] rounded px-2 py-1.5 hover:bg-[#fafafa] transition-colors group">
                  <svg className="w-[14px] h-[14px] text-[#333]" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[7px] font-medium text-[#666]">GET IT ON</span>
                    <span className="text-[10px] font-bold text-[#333]">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEO Content Section */}
      <div className="border-t border-[#e5e5e5] py-12 mb-8">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 lg:px-10 xl:px-14 text-[12.5px] font-light text-[#666] leading-relaxed">
          <h2 className="text-[14px] text-[#333] font-semibold mb-3">Hanket Online: Your Luxury Designer Destination for Online Shopping</h2>
          <p className="mb-4">
            Hanket, a premier multi-designer platform in the world of luxury offers a thoughtfully curated range of wedding couture, festive celebrations and everyday styles for men, women & kids. Not just confined to clothing, Hanket goes beyond by showcasing a collection of jewelry, accessories, and decor to elevate your look and transform your home space.
          </p>
          <p className="mb-8">
            With 1M+ styles onboard by over 1000+ designers across India, we are honored to be a trusted companion for all your luxury shopping needs. From traditional wear for women, men & kids to Western and contemporary styles, we pay homage to the evolving fashion trends while staying rooted in the classic charm of Indian wear. Discover our curated collections online tailored for individuals of discerning preferences.
          </p>

          <h3 className="text-[14px] text-[#333] font-semibold mb-3">One-of-a-kind Styles from India's Premium Luxury Designers</h3>
          <p className="mb-4">
            Featuring the latest selections and ensuring you stay in the loop with ongoing trends, explore men's designer wear, women's designer wear, exquisite jewelry, statement accessories and decor at Hanket. Renowned for regality and unwavering elegance, Sabyasachi belts and handbags for men & women are crafted with attention to detail to elevate every look with sophistication.
          </p>
          <p>
            For all the brides, bridesmaids and wedding guests, discover designer sarees, chic gowns, exquisite lehengas and other designer outfits from the collections of Masaba, Seema Gujral, Tarun Tahiliani, Neha Khullar & more. However, if you are looking to upgrade your closet with contemporary classics like kaftans, dresses, jumpsuits, suits & tuxedos, jackets and more, then you should check out the selections from Basanti - Kapde Aur Koffee, Paulmi and Harsh and Kalista.
          </p>
        </div>
      </div>

      {/* 3. Popular Links Directory */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 lg:px-10 xl:px-14 mb-16">
        <InlinePipedLinks title="Popular Searches" links={popularSearches} />
        <InlinePipedLinks title="Featured Designers" links={featuredDesigners} />
        <InlinePipedLinks title="Shop By Occasions" links={["Roka", "Sangeet", "Destination Wedding", "Diwali", "Holi", "Christmas", "Mehendi", "Raksha Bandhan", "Eid", "Party", "Big Luxury Sale"]} />
        <InlinePipedLinks title="We Ship Indian Designer Wear Worldwide" links={["United States of America", "India", "Australia", "United Kingdom", "Canada", "Singapore", "United Arab Emirates", "Saudi Arabia", "New Zealand", "Malaysia", "Hong Kong", "More"]} />
      </div>

      {/* 4. Bottom Copyright Bar */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 lg:px-10 xl:px-14">
        <div className="border-t border-[#e5e5e5] pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#999] font-light">
          <p>Copyright &copy; {new Date().getFullYear()} Hanket Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
