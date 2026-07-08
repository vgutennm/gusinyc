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
import { MusicPlayer } from "@/components/MusicPlayer";
import { Playlist } from "@/components/Playlist";
import { SONGS } from "@/data/songs";
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
        {SONGS.length > 0 && (
          <section className="py-16 md:py-20 bg-gusi-burgundy text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-8 md:mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gusi-gold/80 mb-3">Listen to our music</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-gusi-gold leading-tight">Press play, settle in.</h2>
              </div>
              <MusicPlayer
                songTitle={SONGS[0].title}
                artistName={SONGS[0].artist}
                description={SONGS[0].description}
                audioSrc={SONGS[0].audioSrc}
                compact
              />
            </div>
          </section>
        )}
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
