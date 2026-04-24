import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { TwoFloors } from "@/components/TwoFloors";
import { MenuPreview } from "@/components/MenuPreview";
import { BarSection } from "@/components/BarSection";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gusi-ivory">
      <Header />
      <main>
        <Hero />
        <Story />
        <TwoFloors />
        <MenuPreview />
        <BarSection />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
