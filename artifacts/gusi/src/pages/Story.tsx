import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GOOGLE_MAPS_URL } from "@/lib/constants";
import { usePageSeo, type PageFaq } from "@/hooks/usePageSeo";

export const PAGE_TITLE = "About GUSI NYC | Modern Eastern European Dining";
export const PAGE_DESCRIPTION =
  "Learn the story behind GUSI, where modern Eastern European cuisine, handcrafted cocktails, Georgian wine, & warm hospitality come together in Greenwich Village.";

export const STORY_FAQ: PageFaq[] = [
  {
    question: "What Type of Cuisine Does GUSI Serve?",
    answer:
      "GUSI serves modern Eastern European cuisine with Mediterranean influence. Our menu features hand-folded dumplings, borscht, seasonal dishes, Georgian wine, handcrafted cocktails, and warm hospitality.",
  },
  {
    question: "Does GUSI Take Reservations?",
    answer:
      "Yes. We recommend making reservations online, especially for weekends and evenings, although walk-ins are welcome whenever space is available.",
  },
  {
    question: "Is GUSI Good for Group Dining, Celebrations, or Private Events?",
    answer:
      "Yes. Our two thoughtfully designed floors accommodate intimate dinners, celebrations, private events, business dinners, corporate gatherings, and larger group dining of 70 guests. Visit our Events page to learn more.",
  },
  {
    question: "Does GUSI Serve Cocktails and Wine?",
    answer:
      "Yes. Our beverage menu includes house-infused vodkas, seasonal cocktails, and a curated selection of Georgian wines designed to complement our modern Eastern European menu.",
  },
  {
    question: "Where Is GUSI Located?",
    answer:
      "GUSI is located at 432 Sixth Avenue in Greenwich Village, making it an easy destination whether you're exploring the neighborhood, visiting NYU, or meeting friends for dinner.",
  },
];

const primaryBtn =
  "inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal";
const outlineBtnBurgundy =
  "inline-flex items-center justify-center min-h-11 border border-gusi-burgundy text-gusi-burgundy px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const inlineLink =
  "text-gusi-burgundy underline underline-offset-4 decoration-gusi-gold/60 hover:decoration-gusi-burgundy transition-colors";

export default function Story() {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonicalPath: "/story",
    faq: STORY_FAQ,
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
                Our Story · Greenwich Village, NYC
              </span>
              <h1 className="font-serif text-[2rem] sm:text-5xl md:text-6xl leading-[1.05] text-gusi-ivory mb-8 max-w-3xl">
                About GUSI: A Modern Eastern European Restaurant in Greenwich
                Village
              </h1>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
                <p>
                  GUSI opened its doors in Greenwich Village on May 8, 2026,
                  introducing a modern Eastern European dining experience where
                  every meal begins with hospitality.
                </p>
                <p>
                  From hand-folded dumplings and borscht to Georgian wine and
                  warm hospitality, GUSI brings together heritage, conversation,
                  and memorable moments around the table.
                </p>
              </div>
              <Link href="/menu" className={primaryBtn}>
                Explore our story through food, wine, and hospitality
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                The Philosophy Behind GUSI
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                <p>
                  Eastern European dining carries centuries of memory of
                  kitchens where pots simmered with love, recipes passed from
                  one generation to the next, and every meal was an invitation
                  to gather. GUSI carries that spirit forward, reimagining it
                  for the rhythm of New York.
                </p>
                <p>
                  Here, modern Eastern European cuisine meets Mediterranean
                  influence, bringing contemporary techniques and fresh seasonal
                  ingredients to a culinary tradition rooted in comfort.
                </p>
                <p>
                  GUSI has always been about more than what's on the plate.
                  It's about the feeling of being welcomed, the conversations
                  that linger long after the last bite, and the simple pleasure
                  of letting an evening unfold at its own pace.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CULINARY IDENTITY */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                The Kitchen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                A Comfort-Driven Culinary Identity
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                <p>
                  At GUSI, every dish carries a story worth sharing. Inspired by
                  generations of Eastern European home cooking, our menu
                  celebrates recipes shaped by time, tradition, and the simple
                  joy of gathering around the table.
                </p>
                <p>
                  Comforting borscht, hand-folded dumplings, and house-pickled
                  vegetables sit alongside seasonal dishes inspired by the
                  freshest ingredients available throughout the year. Every
                  plate honors Eastern European traditions while embracing
                  contemporary techniques and subtle Mediterranean influence.
                </p>
              </div>
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
                Infusions, Wine &amp; Cultural Pairings
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                <p>
                  Every glass at GUSI is an invitation to discover something
                  unexpected. House-infused vodkas draw depth from herbs,
                  spices, and seasonal botanicals, while a carefully curated
                  selection of Georgian wines celebrates one of the world's
                  oldest and most enduring winemaking traditions.
                </p>
                <p>
                  Seasonal cocktails evolve alongside the menu, creating
                  thoughtful pairings that complement each season's menu.
                  Together, our beverage menu is curated to bring balance,
                  contrast, and a sense of occasion to every meal.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ATMOSPHERE */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark overflow-hidden">
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                The Room
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                Atmosphere &amp; Hospitality
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg text-gusi-porcelain/90 font-light leading-relaxed max-w-2xl mb-10">
                <p className="font-serif italic text-xl sm:text-2xl text-gusi-gold/90">
                  The best evenings are the ones you never want to end.
                </p>
                <p>That's the feeling GUSI was created to capture.</p>
                <p>
                  Beneath the glow of candlelight and among the warmth of
                  natural wood, conversations linger, glasses are raised, and
                  every table becomes a place to pause from the pace of the
                  city.
                </p>
                <p>
                  Across two thoughtfully designed floors, one vibrant and the
                  other intimate, the atmosphere shifts with the occasion while
                  the hospitality remains the same.
                </p>
                <p>
                  Whether you're celebrating a special occasion, gathering with
                  family and friends, hosting a client dinner, planning a
                  business meeting, or reserving space for a private event,
                  GUSI offers a warm and private setting that can easily
                  accommodate 70 guests, making sure every gathering feels
                  memorable.
                </p>
              </div>
              <Link href="/reservations" className={primaryBtn}>
                Reserve a Table Today
              </Link>
            </motion.div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Find Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Location
              </h2>
              <p className="text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-8">
                You'll find GUSI at 432 Sixth Avenue in the heart of Greenwich
                Village, just a short walk from the West Village, SoHo,
                Washington Square Park, and NYU. Whether you're joining us for
                dinner, drinks, or a private gathering, we're easy to reach and
                look forward to welcoming you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className={outlineBtnBurgundy}>
                  Contact Page
                </Link>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={outlineBtnBurgundy}
                >
                  Google Maps
                </a>
              </div>
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
              {STORY_FAQ.map((faq) => (
                <motion.div
                  key={faq.question}
                  {...fade}
                  className="border-b border-gusi-gold/20 pb-8"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-base sm:text-lg text-gusi-charcoal/80 font-light leading-relaxed">
                    {faq.question === STORY_FAQ[2].question ? (
                      <>
                        Yes. Our two thoughtfully designed floors accommodate
                        intimate dinners, celebrations, private events, business
                        dinners, corporate gatherings, and larger group dining
                        of 70 guests. Visit our{" "}
                        <Link href="/events" className={inlineLink}>
                          Events page
                        </Link>{" "}
                        to learn more.
                      </>
                    ) : (
                      faq.answer
                    )}
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
                Come for the Meal. Stay for the Story.
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                GUSI NYC isn't a recreation of the past. It's a new chapter
                written with the same spirit of warmth and gathering that has
                always defined Eastern European hospitality. As a Greenwich
                Village restaurant, we invite you to slow down, share a meal,
                and become part of the story.
              </p>
              <Link href="/reservations" className={primaryBtn}>
                Reserve a table and discover modern Eastern European dining in
                Greenwich Village
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
