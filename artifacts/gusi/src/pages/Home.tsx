import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeIntro } from "@/components/HomeIntro";
import { Story } from "@/components/Story";
import { DinnerCta } from "@/components/DinnerCta";
import { StoriesPreview } from "@/components/StoriesPreview";
import { HomeFaq } from "@/components/HomeFaq";
import { FinalCta } from "@/components/FinalCta";
import { TwoFloors } from "@/components/TwoFloors";
import { MenuPreview } from "@/components/MenuPreview";
import { DishGallery } from "@/components/DishGallery";
import { BarSection } from "@/components/BarSection";
import { Playlist } from "@/components/Playlist";
import { PrivateEventsPreview } from "@/components/PrivateEventsPreview";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  // Reset canonical to the home URL when navigating back from sub-routes.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previous = link?.getAttribute("href") ?? null;
    link?.setAttribute("href", "https://gusi.nyc/");
    return () => {
      if (link && previous !== null) link.setAttribute("href", previous);
    };
  }, []);

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
        <HomeIntro />
        <TwoFloors />
        <Story />
        <MenuPreview />
        <DishGallery />
        <DinnerCta />
        <BarSection />
        <Gallery />
        <Playlist />
        <PrivateEventsPreview />
        <Visit />
        <StoriesPreview />
        <HomeFaq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
