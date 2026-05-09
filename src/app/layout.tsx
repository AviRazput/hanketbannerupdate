import type { Metadata } from "next";
import "./globals.css";
import { Lato, Lora } from "next/font/google";
import { RegisterServiceWorker } from "@/components/RegisterServiceWorker";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "HANKET",
  description: "Hanket ecommerce marketplace",
  applicationName: "HANKET",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "HANKET",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  openGraph: {
    title: "HANKET",
    description: "Hanket ecommerce marketplace",
    type: "website",
    siteName: "HANKET",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HANKET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HANKET",
    description: "Hanket ecommerce marketplace",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-flat-bg text-flat-text antialiased min-w-0 overflow-x-clip">
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
