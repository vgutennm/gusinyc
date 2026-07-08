import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { STORY_ARTICLES } from "@/data/stories";
import {
  applyMeta,
  restoreMeta,
  applyCanonical,
  restoreCanonical,
  type MetaSnapshot,
} from "@/lib/seo";

const PAGE_TITLE = "Stories From GUSI | Eastern European Food, Wine & Cocktail Culture";
const PAGE_DESCRIPTION =
  "Stories from GUSI in Greenwich Village — Eastern European culinary heritage, Georgian wine, house infused vodka, and the craftsmanship behind every dish.";

export default function Blog() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    const snaps: MetaSnapshot[] = [
      applyMeta('meta[name="description"]', "name", "description", PAGE_DESCRIPTION),
      applyMeta('meta[property="og:title"]', "property", "og:title", PAGE_TITLE),
      applyMeta('meta[property="og:description"]', "property", "og:description", PAGE_DESCRIPTION),
      applyMeta('meta[property="og:url"]', "property", "og:url", "https://gusi.nyc/blog"),
      applyMeta('meta[name="twitter:title"]', "name", "twitter:title", PAGE_TITLE),
      applyMeta('meta[name="twitter:description"]', "name", "twitter:description", PAGE_DESCRIPTION),
    ];
    const canonical = applyCanonical("https://gusi.nyc/blog");
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      snaps.forEach(restoreMeta);
      restoreCanonical(canonical);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gusi-ivory">
      <Header />
      <main>
        <section className="bg-gusi-charcoal text-gusi-ivory bg-texture-dark pt-36 sm:pt-40 pb-16 sm:pb-20">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                The GUSI Journal
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gusi-gold mb-6 leading-tight">
                Stories From GUSI
              </h1>
              <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
              <p className="text-base sm:text-lg leading-relaxed text-gusi-porcelain/80 font-light max-w-2xl">
                The experience at GUSI extends well beyond the table. Here we
                share the traditions, ingredients, and craftsmanship behind the
                dishes and drinks you love — from Eastern European culinary
                heritage and Georgian wine to house infusions and seasonal
                flavors.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-6">
              {STORY_ARTICLES.map((article, idx) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="border border-gusi-gold/25 bg-gusi-porcelain/40 p-7 sm:p-9"
                >
                  <span className="uppercase tracking-[0.25em] text-[11px] text-gusi-gold block mb-4">
                    Coming Soon
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-gusi-charcoal mb-3">
                    {article.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gusi-charcoal/70 font-light">
                    {article.teaser}
                  </p>
                </motion.article>
              ))}
            </div>
            <p className="text-center text-sm text-gusi-charcoal/60 font-light mt-10">
              New stories are on their way. Check back soon — or visit us in
              person at 432 Sixth Avenue in Greenwich Village.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
