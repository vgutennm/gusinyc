import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { usePageSeo, type PageFaq } from "@/hooks/usePageSeo";

export const PAGE_TITLE = "GUSI Menu | Eastern European Restaurant NYC";
export const PAGE_DESCRIPTION =
  "Explore GUSI's menu featuring dumplings, borscht, caviar, Georgian-inspired flavors, cocktails, and modern Eastern European cuisine in Greenwich Village.";

export const MENU_FAQ: PageFaq[] = [
  {
    question: "What Type of Cuisine Does GUSI Serve?",
    answer:
      "GUSI serves modern Eastern European cuisine influenced by Georgian culinary traditions and Mediterranean-inspired hospitality, blending familiar comfort food with contemporary techniques and seasonal ingredients.",
  },
  {
    question: "Does GUSI Offer Vegetarian Options?",
    answer:
      "Yes, our menu includes vegetarian spreads, fresh salads, roasted vegetables, potato vareniki, and other thoughtfully prepared dishes.",
  },
  {
    question: "Can I View the Menu Before Making a Reservation?",
    answer:
      "We encourage guests to explore our full menu online before reserving a table, making it easy to learn about the dishes and beverages that await.",
  },
  {
    question: "Does GUSI Host Private Events or Group Dining?",
    answer:
      "Yes. GUSI hosts birthdays, anniversaries, business dinners, private events, and group gatherings. Our private floor can accommodate events and celebrations for up to 70 guests. Visit our Events page or contact our team to begin planning.",
  },
];

const primaryBtn =
  "inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal";
const outlineBtnBurgundy =
  "inline-flex items-center justify-center min-h-11 border border-gusi-burgundy text-gusi-burgundy px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory";
const primaryBtnGoldOnDark =
  "inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-burgundy";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const inlineLink =
  "text-gusi-burgundy underline underline-offset-4 decoration-gusi-gold/60 hover:decoration-gusi-burgundy transition-colors";

/**
 * Rendered FAQ answers with inline internal links. The plain-text `answer`
 * strings in MENU_FAQ remain the source of truth for the FAQ structured data
 * and must not change.
 */
const FAQ_ANSWER_JSX: Record<string, ReactNode> = {
  "Can I View the Menu Before Making a Reservation?": (
    <>
      We encourage guests to explore our full menu online before{" "}
      <Link href="/reservations" className={inlineLink}>
        reserving a table
      </Link>
      , making it easy to learn about the dishes and beverages that await.
    </>
  ),
  "Does GUSI Host Private Events or Group Dining?": (
    <>
      Yes. GUSI hosts birthdays, anniversaries, business dinners, private
      events, and group gatherings. Our private floor can accommodate events
      and celebrations for up to 70 guests. Visit our{" "}
      <Link href="/events" className={inlineLink}>
        Events page
      </Link>{" "}
      or{" "}
      <Link href="/contact" className={inlineLink}>
        contact our team
      </Link>{" "}
      to begin planning.
    </>
  ),
};

export default function Menu() {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonicalPath: "/menu",
    faq: MENU_FAQ,
  });

  return (
    <div className="min-h-screen bg-gusi-ivory text-gusi-charcoal">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent z-10"
          />
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center"
            >
              <span className="inline-block text-gusi-gold uppercase tracking-[0.35em] text-[10px] sm:text-xs border border-gusi-gold/40 px-4 py-2 mb-8">
                The Menu · Greenwich Village, NYC
              </span>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] text-gusi-ivory mb-8 max-w-3xl">
                Explore the GUSI Menu
              </h1>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
                <p>
                  The GUSI menu is an invitation to discover modern Eastern
                  European cuisine through thoughtfully prepared dishes, shared
                  plates, curated wines, and signature cocktails.
                </p>
                <p>
                  Explore our menu and discover the flavors that unfold with
                  every course, perfectly complemented by carefully chosen
                  wines, signature cocktails, and gracious hospitality.
                </p>
              </div>
              <Link href="/reservations" className={primaryBtn}>
                Reserve a Table
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TRADITIONS */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                A Menu Inspired by Eastern European Traditions
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>
                  At GUSI, every dish begins with a story passed from one
                  generation to another.
                </p>
                <p>
                  Rooted in the culinary traditions of Eastern Europe and
                  Georgia, our menu reimagines treasured recipes with a fresh
                  and modern perspective, while Mediterranean influences and
                  warm hospitality create a dining experience designed for
                  sharing.
                </p>
                <p>
                  Rather than following trends, our kitchen embraces the beauty
                  of thoughtful craftsmanship, bringing together seasonal
                  ingredients and careful preparation in every course. The
                  result is a dining experience that feels both familiar and
                  distinctly modern.
                </p>
              </div>
              <Link href="/story" className={outlineBtnBurgundy}>
                Learn About GUSI
              </Link>
            </motion.div>
          </div>
        </section>

        {/* DISCOVER */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                From the Kitchen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Discover Our Menu
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>Our menu invites guests to wander, share, and savor.</p>
                <p>
                  Begin with our house-made spreads like creamy hummus, smoky
                  baba ganoush, nutty tahini, tangy tzatziki, and spicy feta,
                  perfect for sharing around the table. Continue with
                  thoughtfully prepared starters and appetizers, or enjoy
                  delicate blinis topped with caviar.
                </p>
                <p>
                  Fresh and crispy salads offer a lighter start, while our
                  handcrafted pelmeni and vareniki paint the picture of Eastern
                  European culinary culture.
                </p>
                <p>
                  Seasonal soups like classic borscht fill the table with
                  warmth and nostalgia, while our signature entrées bring
                  together bold flavors, timeless traditions, and the
                  thoughtful craftsmanship of our kitchen.
                </p>
                <p>
                  Treat your palate to the gentle indulgence of our decadent
                  desserts, then linger over coffee or tea, where the finest
                  evenings are never rushed.
                </p>
                <p>
                  Each page of our menu unfolds like a story waiting to be
                  shared. So take your sweet time, taste a little of
                  everything, and discover the dishes that become your
                  favorites.
                </p>
              </div>
              <Link href="/#menu" className={outlineBtnBurgundy}>
                View the Full Menu
              </Link>
            </motion.div>
          </div>
        </section>

        {/* DRINKS */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                The Bar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Pair Your Meal with Curated Drinks
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                <p>
                  A meal at GUSI is made even more memorable with the right
                  pour. Our beverage menu features signature cocktails, house
                  infused vodka, and a curated wine selection, including
                  Georgian wines that reflect the heritage woven throughout our
                  menu.
                </p>
                <p>
                  Whether you begin the evening with a spirited cocktail or sip
                  a glass of wine alongside a sweet treat, every pour is chosen
                  to complement the flavors on your plate.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* GATHERINGS */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark overflow-hidden">
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Celebrate
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                Great Food for Every Gathering
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg text-gusi-porcelain/90 font-light leading-relaxed max-w-2xl mb-10">
                <p>
                  The most cherished occasions begin where stories are shared,
                  glasses are raised, and every seat at the table is filled
                  with those who matter most.
                </p>
                <p>
                  Crafted for every gathering, our expansive menu creates a
                  memorable setting for birthdays, anniversaries, business
                  dinners, and other special occasions.
                </p>
                <p>
                  Whether you're planning an intimate evening or a grand
                  celebration, our private floor can comfortably seat up to 70
                  guests and the team will thoughtfully curate an experience
                  that feels personalized and worthy of the memories you'll
                  create with your loved ones.
                </p>
              </div>
              <Link href="/events" className={primaryBtnGoldOnDark}>
                Plan Your Private Event
              </Link>
            </motion.div>
          </div>
        </section>

        {/* STORIES */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                The Blog
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Stories Behind the Menu
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>
                  Curious about the ingredients, traditions, and inspiration
                  behind our menu? Our blog explores the stories behind GUSI's
                  dishes and drinks, from the origins of house-infused vodka to
                  centuries-old traditions of Georgian winemaking.
                </p>
                <p>Read a little before your visit, or revisit a favorite story after.</p>
              </div>
              <Link href="/blog" className={outlineBtnBurgundy}>
                Read Our Stories
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade} className="text-center mb-12">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Good to Know
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy leading-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>
            <div className="space-y-8">
              {MENU_FAQ.map((faq) => (
                <motion.div
                  key={faq.question}
                  {...fade}
                  className="border-b border-gusi-gold/20 pb-8"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-base sm:text-lg text-gusi-charcoal/80 font-light leading-relaxed">
                    {FAQ_ANSWER_JSX[faq.question] ?? faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent"
          />
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Join Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-ivory mb-6 leading-tight">
                Experience the GUSI Menu in Greenwich Village
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                Join us at GUSI in Greenwich Village for thoughtfully prepared
                Eastern European dishes, curated wines, signature cocktails,
                and warm hospitality. Reserve your table and discover a dining
                experience designed to be shared.
              </p>
              <Link href="/reservations" className={primaryBtn}>
                Reserve a Table
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
