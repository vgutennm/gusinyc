import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { TwoFloors } from "@/components/TwoFloors";
import { MenuPreview } from "@/components/MenuPreview";
import { BarSection } from "@/components/BarSection";
import { PressPreview } from "@/components/PressPreview";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  // When arriving with a hash (e.g. /#menu from another page), scroll to it
  // after mount so the section actually exists in the DOM.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gusi-ivory">
      <Header />
      <main>
        <Hero />
        <Story />
        <TwoFloors />
        <MenuPreview />
        <BarSection />
        <PressPreview />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
