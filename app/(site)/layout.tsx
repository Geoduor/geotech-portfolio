import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Shared chrome for the inner pages. The home page has its own layout. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
