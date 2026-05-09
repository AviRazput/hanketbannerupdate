import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomNav } from "./MobileBottomNav";
import { TopBar } from "./TopBar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-0 overflow-x-clip">
      <TopBar />
      <Header />
      <main className="flex-1 pt-[114px] md:pt-0 pb-[calc(4rem+env(safe-area-inset-bottom)+2.5rem)] md:pb-0 min-w-0 w-full overflow-x-clip">
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

