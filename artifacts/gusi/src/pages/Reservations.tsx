import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { OpenTableWidget } from "@/components/OpenTableWidget";
import { OPEN_TABLE_URL } from "@/lib/constants";
import { usePageSeo, type PageFaq } from "@/hooks/usePageSeo";

export const PAGE_TITLE = "Reserve a Table at GUSI | Greenwich Village NYC";
export const PAGE_DESCRIPTION =
  "Reserve your table at GUSI in Greenwich Village and enjoy modern Eastern European cuisine, handcrafted cocktails, Georgian wine, and warm hospitality.";

export const RESERVATIONS_FAQ: PageFaq[] = [
  {
    question: "Do I Need a Reservation?",
    answer:
      "Walk-ins may be available, but reservations are recommended, especially on weekends, holidays, and for special occasions.",
  },
  {
    question: "Can I Reserve for a Large Group?",
    answer:
      "Yes. GUSI welcomes larger parties, group dinners, and private gatherings. Our private floor can accommodate events and celebrations of up to 70 guests. Visit the Events page or contact our team to discuss your plans.",
  },
  {
    question: "Where Is GUSI Located?",
    answer:
      "GUSI is located at 432 Sixth Avenue, New York, NY 10011, in Greenwich Village.",
  },
  {
    question: "Can I View the Menu Before Booking?",
    answer:
      "Yes, the full menu is available to explore before making a reservation.",
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

export default function Reservations() {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonicalPath: "/reservations",
    faq: RESERVATIONS_FAQ,
  });

  return (
    <div className="min-h-screen bg-gusi-ivory text-gusi-charcoal">
      <Header />
      <main>
        {/* HERO + BOOKING */}
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
                Reservations · Greenwich Village, NYC
              </span>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] text-gusi-ivory mb-8 max-w-3xl">
                Reserve Your Table at GUSI
              </h1>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                <p>
                  Welcome to GUSI, where modern Eastern European cuisine,
                  thoughtful hospitality, and shared conversation come together
                  in the heart of Greenwich Village.
                </p>
                <p>
                  Located in the heart of Greenwich Village, GUSI offers a warm
                  and refined setting for dinner, drinks, celebrations, and
                  memorable evenings together.
                </p>
                <p>
                  Whether you are planning a date night, meeting friends,
                  celebrating with family, or gathering with colleagues, we
                  recommend reserving your table in advance.
                </p>
              </div>
              <a
                href={OPEN_TABLE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={`${primaryBtn} mb-10`}
              >
                Book a Table
              </a>
              <OpenTableWidget />
            </motion.div>
          </div>
        </section>

        {/* DINNER */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                The Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Join Us for Dinner in Greenwich Village
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>
                  Step into GUSI and discover a dining experience where warmth,
                  tradition, and genuine hospitality come together.
                </p>
                <p>
                  Our menu reimagines Eastern European cuisine through Georgian
                  culinary traditions, Mediterranean influences, and a modern
                  New York perspective.
                </p>
                <p>
                  Handcrafted cocktails and a thoughtfully curated selection of
                  Georgian wines elevate the evening, selected to complement
                  the flavors throughout the menu. Every detail is designed to
                  create a dining experience that feels welcoming, thoughtful,
                  and memorable.
                </p>
              </div>
              <Link href="/menu" className={outlineBtnBurgundy}>
                View the Menu
              </Link>
            </motion.div>
          </div>
        </section>

        {/* GROUPS */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark overflow-hidden">
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Celebrations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                Planning a Celebration or Group Gathering?
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg text-gusi-porcelain/90 font-light leading-relaxed max-w-2xl mb-10">
                <p>
                  Surrounded by the timeless charm of Greenwich Village, GUSI
                  offers a distinctive Greenwich Village setting for date
                  nights, family celebrations, business dinners, and meaningful
                  occasions.
                </p>
                <p>
                  For larger gatherings and private events, GUSI offers a
                  dedicated private floor for celebrations, business functions,
                  dinners, and special occasions of up to 70 guests. Our team
                  will help coordinate the details so the experience feels
                  seamless from the first arrival to the final course.
                </p>
              </div>
              <Link href="/events" className={primaryBtnGoldOnDark}>
                Learn About Our Events
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
              {RESERVATIONS_FAQ.map((faq) => (
                <motion.div
                  key={faq.question}
                  {...fade}
                  className="border-b border-gusi-gold/20 pb-8"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-base sm:text-lg text-gusi-charcoal/80 font-light leading-relaxed">
                    {faq.answer}
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
                Reserve Your Table in Greenwich Village
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                Whether you are visiting GUSI for the first time or returning
                for another evening, we look forward to welcoming you with
                thoughtfully prepared dishes, curated wines, signature
                cocktails, and warm hospitality. Reserve your table and let our
                team take care of the rest.
              </p>
              <a
                href={OPEN_TABLE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={primaryBtn}
              >
                Reserve a Table Today
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
