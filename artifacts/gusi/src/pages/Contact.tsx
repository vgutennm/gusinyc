import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { OpenTableWidget } from "@/components/OpenTableWidget";
import {
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_TEL,
  GOOGLE_MAPS_URL,
  HOURS,
} from "@/lib/constants";
import { usePageSeo, type PageFaq } from "@/hooks/usePageSeo";

export const PAGE_TITLE = "Contact GUSI | Visit Our Greenwich Village Restaurant";
export const PAGE_DESCRIPTION =
  "Contact GUSI in Greenwich Village for reservations, private dining, events, and general inquiries. Find our address, hours, phone number, and directions.";

export const CONTACT_FAQ: PageFaq[] = [
  {
    question: "Where Is GUSI Located?",
    answer:
      "GUSI is located at 432 Sixth Avenue in Greenwich Village, NYC, just steps from Washington Square Park and NYU.",
  },
  {
    question: "Is There Parking Nearby?",
    answer:
      "GUSI does not offer dedicated parking. Street parking and commercial parking facilities may be available in the surrounding area. Guests can also reach us by subway, PATH, bus, taxi, or rideshare.",
  },
  {
    question: "Can I Contact GUSI About Private Events?",
    answer:
      "Yes. GUSI offers a dedicated private floor for celebrations, business dinners, corporate gatherings, and private events of up to 70 guests. Use our event inquiry form or contact the restaurant directly to discuss your plans.",
  },
  {
    question: "Can I Make a Reservation Through the Contact Page?",
    answer:
      "For table reservations, visit our Reservations page or use the reservation booking widget on this page.",
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
 * strings in CONTACT_FAQ remain the source of truth for the FAQ structured
 * data and must not change.
 */
const FAQ_ANSWER_JSX: Record<string, ReactNode> = {
  "Can I Contact GUSI About Private Events?": (
    <>
      Yes. GUSI offers a dedicated private floor for celebrations, business
      dinners, corporate gatherings, and private events of up to 70 guests. Use
      our{" "}
      <Link href="/events" className={inlineLink}>
        event inquiry form
      </Link>{" "}
      or{" "}
      <a href={`tel:${RESTAURANT_PHONE_TEL}`} className={inlineLink}>
        contact the restaurant directly
      </a>{" "}
      to discuss your plans.
    </>
  ),
  "Can I Make a Reservation Through the Contact Page?": (
    <>
      For table reservations, visit our{" "}
      <Link href="/reservations" className={inlineLink}>
        Reservations page
      </Link>{" "}
      or use the reservation booking widget on this page.
    </>
  ),
};

export default function Contact() {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonicalPath: "/contact",
    faq: CONTACT_FAQ,
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
                Contact · Greenwich Village, NYC
              </span>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] text-gusi-ivory mb-8 max-w-3xl">
                Contact GUSI
              </h1>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl">
                Contact GUSI in Greenwich Village for help with reservations,
                private events, group dining, directions, or general questions.
                Whether you are planning a visit, organizing a private event,
                or looking for more information, our team is happy to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Reach Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-8 leading-tight">
                Contact Information
              </h2>
              <dl className="space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs text-gusi-gold mb-2">
                    Address
                  </dt>
                  <dd>
                    432 Sixth Avenue
                    <br />
                    New York, NY 10011
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs text-gusi-gold mb-2">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${RESTAURANT_PHONE_TEL}`}
                      className={inlineLink}
                    >
                      {RESTAURANT_PHONE}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs text-gusi-gold mb-2">
                    Hours
                  </dt>
                  <dd>
                    Mon–Fri: {HOURS.weekday}
                    <br />
                    Sat &amp; Sun: {HOURS.weekend}
                    <br />
                    Brunch: Sat &amp; Sun, {HOURS.brunch}
                  </dd>
                </div>
              </dl>
              <Link href="/reservations" className={outlineBtnBurgundy}>
                Reserve a Table
              </Link>
            </motion.div>
          </div>
        </section>

        {/* VISIT */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                The Neighborhood
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Visit Us in Greenwich Village
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>
                  Located at 432 Sixth Avenue, GUSI is in the heart of
                  Greenwich Village, near Washington Square Park, NYU, and the
                  Jefferson Market Library. Join us for modern Eastern European
                  cuisine, handcrafted cocktails, Georgian wines, and warm
                  hospitality in one of New York City's most distinctive
                  neighborhoods.
                </p>
                <p>
                  Come find us amid the tree-lined streets and timeless charm
                  of Greenwich Village.
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={outlineBtnBurgundy}
              >
                Get Directions
              </a>
            </motion.div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark overflow-hidden">
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Private Events
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                Planning a Private Event or Group Gathering?
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <div className="space-y-5 text-base sm:text-lg text-gusi-porcelain/90 font-light leading-relaxed max-w-2xl mb-10">
                <p>
                  GUSI offers a dedicated private floor for birthdays,
                  anniversaries, family celebrations, business dinners,
                  corporate gatherings, and other special occasions of up to 70
                  guests.
                </p>
                <p>
                  Our team can help create a thoughtful experience with modern
                  Eastern European cuisine, curated wines, handcrafted
                  cocktails, and warm hospitality in the heart of Greenwich
                  Village.
                </p>
                <p>
                  Contact us to discuss your date, group size, menu
                  preferences, and event needs.
                </p>
              </div>
              <Link href="/events" className={primaryBtnGoldOnDark}>
                Inquire About Events
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BEFORE YOU VISIT */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Plan Ahead
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Before You Visit
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-10">
                <p>
                  A little planning makes every visit to GUSI even more
                  enjoyable. Take a moment to browse our{" "}
                  <Link href="/menu" className={inlineLink}>
                    menu
                  </Link>{" "}
                  and discover the rich flavors awaiting you. Reservations are
                  recommended, especially during peak dining hours, to help
                  ensure availability.
                </p>
                <p>
                  Curious about our story and inspiration? Explore our{" "}
                  <Link href="/story" className={inlineLink}>
                    Story page
                  </Link>{" "}
                  to learn more about GUSI, our inspiration, and the traditions
                  behind the restaurant.
                </p>
              </div>
              <Link href="/reservations" className={outlineBtnBurgundy}>
                Make a Reservation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BOOKING WIDGET */}
        <section className="relative py-20 sm:py-24 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent"
          />
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Book a Table
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-8 leading-tight">
                Reserve Online
              </h2>
              <OpenTableWidget />
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
              {CONTACT_FAQ.map((faq) => (
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
                See You Soon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-ivory mb-6 leading-tight">
                We Look Forward to Welcoming You
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                We look forward to welcoming you to GUSI in Greenwich Village.
                Contact our team with questions, reserve your table, or inquire
                about a private event, and we will help you plan your visit.
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
