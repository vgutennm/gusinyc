import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previous = link?.getAttribute("href") ?? null;
    link?.setAttribute("href", "https://gusinyc.com/");
    return () => {
      if (link && previous !== null) link.setAttribute("href", previous);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gusi-charcoal">
      <main>
        <Hero />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
