import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Visit } from "@/components/Visit";
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
    <div className="min-h-screen bg-gusi-ivory">
      <main>
        <Hero />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
