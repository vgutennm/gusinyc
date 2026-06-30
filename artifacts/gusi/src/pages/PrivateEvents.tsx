import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  OPEN_TABLE_URL,
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_TEL,
  RESTAURANT_EMAIL,
} from "@/lib/constants";
import {
  applyMeta,
  restoreMeta,
  applyCanonical,
  restoreCanonical,
  type MetaSnapshot,
  type CanonicalSnapshot,
} from "@/lib/seo";
import groundFloorInterior from "@assets/GUSI-NYC-03_1777934185727.webp";
import cabaretMural from "@assets/gusi_business_card_back_mural.jpg";
import tastingSpread from "@assets/Screenshot_2026-05-04_at_6.30.54_PM_1777934137497.webp";

const IMG_DIMS = {
  groundFloorInterior: { w: 765, h: 1020 },
  cabaretMural: { w: 1050, h: 600 },
  tastingSpread: { w: 884, h: 1076 },
} as const;

const PAGE_TITLE = "Private Events in Greenwich Village NYC | GUSI";
const PAGE_DESCRIPTION =
  "Host private events, celebrations, parties, client meetings, and business functions at GUSI in Greenwich Village NYC. Private floor available for up to 70 guests.";

const SOCIAL_IMAGE = groundFloorInterior;

const INQUIRY_MAILTO = `mailto:${RESTAURANT_EMAIL}?subject=${encodeURIComponent(
  "Private Event Inquiry — GUSI",
)}&body=${encodeURIComponent(
  "Hello GUSI team,\n\nI'd like to inquire about hosting a private event.\n\nEvent type:\nPreferred date:\nGuest count:\nAny special details:\n\nThank you!",
)}`;
const CALL_TEL = `tel:${RESTAURANT_PHONE_TEL}`;

const eventTypes = [
  "Birthday celebrations",
  "Family gatherings",
  "Personal events",
  "Private parties",
  "Client meetings",
  "Corporate dinners",
  "Business events",
  "Team celebrations",
  "Holiday gatherings",
  "Special occasions",
];

const faqs = [
  {
    question: "Does GUSI host private events in Greenwich Village?",
    answer:
      "Yes. GUSI hosts private events in Greenwich Village NYC, including celebrations, private parties, client meetings, corporate dinners, business functions, and personal gatherings.",
  },
  {
    question: "How many guests can GUSI accommodate for private events?",
    answer:
      "GUSI offers a private floor that can accommodate up to 70 guests for private events and group dining experiences.",
  },
  {
    question: "Can I host a corporate or business event at GUSI?",
    answer:
      "Yes. GUSI can accommodate corporate dinners, client meetings, business functions, team gatherings, and other professional events in a warm restaurant setting.",
  },
  {
    question: "Is GUSI a good option for Russian speaking guests?",
    answer:
      "Yes. GUSI welcomes Russian speaking guests from many cultures, along with local New Yorkers and visitors looking for a warm private dining experience in Greenwich Village.",
  },
  {
    question: "How do I inquire about hosting an event at GUSI?",
    answer:
      "You can contact GUSI through the website to share your preferred date, guest count, event type, and any special requests.",
  },
];

const primaryBtn =
  "inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal";
const outlineBtnGold =
  "inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal";
const outlineBtnBurgundy =
  "inline-flex items-center justify-center min-h-11 border border-gusi-burgundy text-gusi-burgundy px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

export default function PrivateEvents() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const snapshots: MetaSnapshot[] = [
      applyMeta('meta[name="description"]', "name", "description", PAGE_DESCRIPTION),
      applyMeta('meta[property="og:title"]', "property", "og:title", PAGE_TITLE),
      applyMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        PAGE_DESCRIPTION,
      ),
      applyMeta('meta[property="og:type"]', "property", "og:type", "website"),
      applyMeta(
        'meta[name="twitter:card"]',
        "name",
        "twitter:card",
        "summary_large_image",
      ),
      applyMeta('meta[name="twitter:title"]', "name", "twitter:title", PAGE_TITLE),
      applyMeta(
        'meta[name="twitter:description"]',
        "name",
        "twitter:description",
        PAGE_DESCRIPTION,
      ),
    ];

    const scriptEls: HTMLScriptElement[] = [];
    let canonicalSnap: CanonicalSnapshot | null = null;

    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      const absolute = (p: string) => (p.startsWith("http") ? p : `${origin}${p}`);
      const pageUrl = `${origin}/events/private-events`;
      const canonicalUrl = "https://gusinyc.com/events/private-events";
      const ogImageUrl = absolute(SOCIAL_IMAGE);
      canonicalSnap = applyCanonical(canonicalUrl);

      snapshots.push(
        applyMeta('meta[property="og:url"]', "property", "og:url", pageUrl),
        applyMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl),
        applyMeta(
          'meta[property="og:image:secure_url"]',
          "property",
          "og:image:secure_url",
          ogImageUrl,
        ),
        applyMeta(
          'meta[property="og:image:alt"]',
          "property",
          "og:image:alt",
          "Private dining space at GUSI restaurant in Greenwich Village, New York City",
        ),
        applyMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl),
      );

      const restaurantSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": canonicalUrl,
        name: "GUSI",
        url: canonicalUrl,
        description:
          "GUSI hosts private events in Greenwich Village NYC — celebrations, parties, client meetings, corporate dinners, and business functions, with a private floor for up to 70 guests.",
        servesCuisine: ["Eastern European", "Mediterranean"],
        priceRange: "$$$",
        telephone: RESTAURANT_PHONE,
        email: RESTAURANT_EMAIL,
        image: [absolute(groundFloorInterior), absolute(tastingSpread)],
        address: {
          "@type": "PostalAddress",
          streetAddress: "432 Sixth Avenue",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10011",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Place",
          name: "Greenwich Village, New York, NY",
        },
        makesOffer: {
          "@type": "Offer",
          name: "Private Events & Private Dining",
          description:
            "Private floor for up to 70 guests for celebrations, parties, client meetings, corporate dinners, and business functions.",
        },
      };

      const venueSchema = {
        "@context": "https://schema.org",
        "@type": "EventVenue",
        name: "GUSI — Private Floor",
        url: canonicalUrl,
        maximumAttendeeCapacity: 70,
        address: {
          "@type": "PostalAddress",
          streetAddress: "432 Sixth Avenue",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10011",
          addressCountry: "US",
        },
      };

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      };

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Private Events",
            item: pageUrl,
          },
        ],
      };

      for (const schema of [
        restaurantSchema,
        venueSchema,
        faqSchema,
        breadcrumbSchema,
      ]) {
        const el = document.createElement("script");
        el.type = "application/ld+json";
        el.setAttribute("data-events-jsonld", "true");
        el.textContent = JSON.stringify(schema);
        document.head.appendChild(el);
        scriptEls.push(el);
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      snapshots.forEach(restoreMeta);
      if (canonicalSnap) restoreCanonical(canonicalSnap);
      scriptEls.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gusi-ivory text-gusi-charcoal">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <img
              src={groundFloorInterior}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              width={IMG_DIMS.groundFloorInterior.w}
              height={IMG_DIMS.groundFloorInterior.h}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gusi-charcoal/85 via-gusi-charcoal/80 to-gusi-charcoal" />
          </div>
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
                Private Events · Greenwich Village, NYC
              </span>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] text-gusi-ivory mb-6 max-w-3xl">
                Private Events in Greenwich Village NYC
              </h1>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-gusi-gold/90 mb-8 max-w-2xl">
                Private Floor. Events. Celebrations. Up to 70 Guests.
              </p>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8 sm:mb-10" />
              <p className="text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
                Host your next private gathering at GUSI in Greenwich Village,
                where warm hospitality, Mediterranean-inspired dining, and an
                inviting private floor create the perfect setting for
                celebrations, client meetings, personal events, and business
                functions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                <a href={INQUIRY_MAILTO} className={primaryBtn}>
                  Inquire About an Event
                </a>
                <Link href="/#menu" className={outlineBtnGold}>
                  View Our Menu
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — INTRO */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Host With Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Host Your Event at GUSI
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                <p>
                  GUSI offers a welcoming private event space in the heart of
                  Greenwich Village for guests who want a more personal,
                  comfortable, and memorable dining experience. Whether you are
                  planning a birthday dinner, family celebration, client
                  meeting, corporate dinner, business function, or private
                  party, our team can help create a setting that feels
                  thoughtful, warm, and easy to enjoy.
                </p>
                <p className="font-serif italic text-xl sm:text-2xl text-gusi-burgundy">
                  Private floor available for up to 70 guests.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — BEST FOR */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
            <motion.div {...fade} className="text-center mb-12 sm:mb-14">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Occasions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy leading-tight">
                Perfect For Private Gatherings
              </h2>
            </motion.div>
            <motion.ul
              {...fade}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {eventTypes.map((type) => (
                <li
                  key={type}
                  className="border border-gusi-gold/30 bg-white/50 px-5 py-4 text-base sm:text-lg font-light text-gusi-charcoal/85 flex items-center gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-gusi-gold shrink-0"
                  />
                  {type}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* SECTION 3 — PRIVATE FLOOR */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <img
              src={cabaretMural}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={IMG_DIMS.cabaretMural.w}
              height={IMG_DIMS.cabaretMural.h}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gusi-burgundy/85 via-gusi-burgundy/80 to-gusi-burgundy" />
          </div>
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Private Floor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                A Private Floor for Up to 70 Guests
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/90 font-light leading-relaxed max-w-2xl mb-10">
                For larger gatherings and private dining experiences, GUSI
                offers a private floor that can accommodate up to 70 guests.
                This makes it a strong fit for guests who want a dedicated space
                while still enjoying the atmosphere, food, and hospitality of a
                Greenwich Village restaurant.
              </p>
              <a href={INQUIRY_MAILTO} className={primaryBtn}>
                Inquire About an Event
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — LOCAL & CULTURAL RELEVANCE */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade}>
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Greenwich Village
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 leading-tight">
                Welcoming Guests From Many Cultures
              </h2>
              <p className="text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                Located in Greenwich Village, GUSI welcomes New Yorkers,
                visitors, and Russian speaking guests from many different
                cultural backgrounds. Our space is designed to feel warm,
                flexible, and comfortable for meaningful gatherings, shared
                meals, and memorable celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — FOOD & EXPERIENCE */}
        <section className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15">
          <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <motion.figure
                {...fade}
                className="md:col-span-5 order-2 md:order-1"
              >
                <div className="overflow-hidden border border-gusi-gold/30 bg-white/40">
                  <img
                    src={tastingSpread}
                    alt="A spread of GUSI dishes — dumplings, skewers, and small plates blending Eastern European tradition with Mediterranean influence"
                    loading="lazy"
                    decoding="async"
                    width={IMG_DIMS.tastingSpread.w}
                    height={IMG_DIMS.tastingSpread.h}
                    className="block w-full h-auto"
                  />
                </div>
              </motion.figure>
              <motion.div {...fade} className="md:col-span-7 order-1 md:order-2">
                <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                  The Experience
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-gusi-burgundy mb-6 leading-tight">
                  Food, Hospitality, and Atmosphere
                </h2>
                <p className="text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
                  At GUSI, private events are built around the experience of
                  sharing good food, conversation, and time together. Guests can{" "}
                  <Link
                    href="/#menu"
                    className="text-gusi-burgundy underline underline-offset-4 decoration-gusi-gold/60 hover:decoration-gusi-burgundy transition-colors"
                  >
                    explore our menu
                  </Link>{" "}
                  inspired by Mediterranean and Eastern European flavors in a
                  setting that feels elevated, comfortable, and personal.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="py-20 md:py-28 bg-gusi-ivory bg-texture-paper">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <motion.div {...fade} className="text-center mb-12">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5 block">
                Good to Know
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy leading-tight">
                Private Event FAQs
              </h2>
            </motion.div>
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  {...fade}
                  className="border-b border-gusi-gold/20 pb-8"
                >
                  <dt className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                    {faq.question}
                  </dt>
                  <dd className="text-base sm:text-lg text-gusi-charcoal/80 font-light leading-relaxed">
                    {faq.answer}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 7 — CTA */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent"
          />
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-3xl text-center flex flex-col items-center">
            <motion.div {...fade} className="flex flex-col items-center">
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
                Plan With Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-ivory mb-6 leading-tight">
                Plan Your Private Event at GUSI
              </h2>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10">
                Tell us about your event, guest count, date, and any special
                details. Our team will help you understand the best options for
                hosting your gathering at GUSI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                <a href={INQUIRY_MAILTO} className={primaryBtn}>
                  Inquire About an Event
                </a>
                <a href={CALL_TEL} className={outlineBtnGold}>
                  Call Us
                </a>
              </div>
              <p className="mt-8 text-sm text-gusi-porcelain/60 font-light">
                Prefer to reserve a regular table?{" "}
                <a
                  href={OPEN_TABLE_URL}
                  className="text-gusi-gold hover:text-gusi-ivory underline underline-offset-4 transition-colors"
                >
                  Book on OpenTable
                </a>{" "}
                or call {RESTAURANT_PHONE}.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
