import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  OPEN_TABLE_URL,
  OPENING_DATE_LABEL,
  MEDIA_CONTACT,
} from "@/lib/constants";

const PAGE_TITLE =
  "Gusi Opens in Greenwich Village | Eastern European Restaurant & Bar in NYC";
const PAGE_DESCRIPTION =
  "Gusi, a two-storey Eastern European restaurant and bar with Mediterranean influence, opens Friday, May 8, 2026 at 432 Sixth Avenue in Greenwich Village, NYC.";

type MetaSnapshot = {
  el: HTMLMetaElement;
  previous: string | null;
  created: boolean;
};

function applyMeta(
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string,
): MetaSnapshot {
  let el = document.querySelector<HTMLMetaElement>(selector);
  let created = false;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
    created = true;
  }
  const previous = created ? null : el.getAttribute("content");
  el.setAttribute("content", content);
  return { el, previous, created };
}

function restoreMeta(snap: MetaSnapshot) {
  if (snap.created) {
    snap.el.remove();
    return;
  }
  if (snap.previous === null) {
    snap.el.removeAttribute("content");
  } else {
    snap.el.setAttribute("content", snap.previous);
  }
}

const culinaryHighlights = [
  {
    title: "Expansive Dumpling Program",
    body: "Pelmeni in classic and rare expressions — beef and pork, beef-pork-veal, elk, buffalo, goose, and a Mediterranean variation finished with tahini.",
  },
  {
    title: "Rotating Borscht Interpretations",
    body: "Borscht as a daily fixture, anchored by the classic and rotated weekly to reflect the dish's deep regional diversity.",
  },
  {
    title: "House Pickled Vegetables",
    body: "A traditional pickling program that brings brightness and acidity across the menu and into the bar.",
  },
  {
    title: "Mediterranean Influence",
    body: "Olive oil, tahini, herbs, and citrus woven through the menu — a quietly contemporary point of view.",
  },
  {
    title: "Eastern European Comfort Cuisine",
    body: "Refined comfort built on memory: pierogi in a lesser-known puff pastry tradition, alongside soulful seasonal plates.",
  },
];

const designVision = [
  {
    eyebrow: "First Floor",
    title: "Geese, Earthbound",
    body: "The ground level embodies the essence of the goose. It is grounded, warm, and deeply human. Darkness, charred wood, vintage mirrors, and tactile surfaces create a mood that is intentionally cozy and contemporary while still rooted in memory.",
  },
  {
    eyebrow: "The Passage",
    title: "A Shift in Mood",
    body: "The stairway connecting both floors is designed as a symbolic threshold, guiding guests from earth to air, from grounded comfort to graceful uplift.",
  },
  {
    eyebrow: "Second Floor",
    title: "Swans, Airy and Elevated",
    body: "Upstairs, the mood transforms entirely. Here Gusi becomes Lebedi, another Slavic word for swans. Soft gray-green walls, parquet floors, tablecloths, draped curtains, and hand-painted murals create an elevated, poetic dining experience.",
  },
];

const hours = [
  {
    label: "Weekday Dinner",
    value: "4:00 pm – Midnight",
  },
  {
    label: "Weekend Service",
    value: "Noon – Midnight",
  },
  {
    label: "Future Expansion",
    value: "Lunch, café service, pastries, sandwiches",
  },
];

export default function Press() {
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
      applyMeta('meta[property="og:type"]', "property", "og:type", "article"),
    ];
    if (typeof window !== "undefined") {
      snapshots.push(
        applyMeta(
          'meta[property="og:url"]',
          "property",
          "og:url",
          `${window.location.origin}/press`,
        ),
      );
    }

    // Make sure visitors land at the top, not on a stale anchor.
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      snapshots.forEach(restoreMeta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gusi-ivory text-gusi-charcoal">
      <Header />
      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent"
          />
          <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center"
            >
              <span className="inline-block text-gusi-gold uppercase tracking-[0.35em] text-[10px] sm:text-xs border border-gusi-gold/40 px-4 py-2 mb-8">
                For Immediate Release
              </span>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-gusi-ivory mb-6 sm:mb-8 max-w-3xl">
                Gusi Opens in Greenwich Village on {OPENING_DATE_LABEL}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-gusi-gold/90 mb-8 sm:mb-10 max-w-2xl">
                A Two-Storey Restaurant &amp; Bar Where Eastern European
                Heritage Meets Mediterranean Influence
              </p>
              <div className="w-12 h-px bg-gusi-gold/50 mb-8 sm:mb-10" />
              <p className="text-base sm:text-lg md:text-xl text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
                Opening at 432 Sixth Avenue in the heart of Greenwich Village,
                Gusi brings a refined and soulful interpretation of Eastern
                European cuisine to New York City, infused with the warmth and
                brightness of Mediterranean influence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                <a
                  href={OPEN_TABLE_URL}
                  className="inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
                >
                  Reserve a Table
                </a>
                <Link
                  href="/#visit"
                  className="inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
                >
                  Visit GUSI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — OPENING ANNOUNCEMENT */}
        <PressSection eyebrow="The Announcement">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            A New Eastern European Restaurant in the Heart of Greenwich Village
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
            <p>
              Gusi, the new two-storey Eastern European restaurant and bar from
              Boris Artemyev and Elena Melnikova, will officially open its doors
              on {OPENING_DATE_LABEL} at 432 Sixth Avenue in the heart of
              Greenwich Village.
            </p>
            <p>
              Named after the Slavic word for &ldquo;geese,&rdquo; Gusi is a
              deeply personal, soulful venture where refined Eastern European
              cuisine meets Mediterranean warmth, creating a dining experience
              unlike anything else in New York City right now.
            </p>
            <p>
              Spanning two distinct floors, each its own world, Gusi unfolds as
              a journey from the grounded, art-filled ground floor to an airy,
              mural-adorned second-floor retreat overlooking the iconic
              Jefferson Market Library.
            </p>
          </div>
        </PressSection>

        {/* SECTION 3 — FOUNDERS */}
        <PressSection eyebrow="The Founders" tone="muted">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            <h2 className="md:col-span-2 font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-gusi-burgundy leading-tight">
              Founded by Boris Artemyev and Elena Melnikova
            </h2>
            <div className="md:col-span-3 space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
              <p>
                Founded by husband-and-wife team Boris Artemyev and Elena
                Melnikova, both seasoned veterans of New York&rsquo;s restaurant
                scene, Gusi is a deeply personal venture and the realization of
                a shared American dream.
              </p>
              <p>
                Together, they bring decades of combined experience and an
                unwavering vision: a place where Eastern European heritage,
                exceptional cuisine, and warm, intuitive hospitality converge.
              </p>
            </div>
          </div>
        </PressSection>

        {/* SECTION 4 — CULINARY JOURNEY */}
        <PressSection eyebrow="The Cuisine">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            A Culinary Journey Rooted in Tradition and Migration
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
            <p>
              New York is home to only a handful of restaurants dedicated to
              Eastern European cuisine. Gusi adds a distinct new voice to that
              conversation, one grounded in tradition yet shaped by a
              contemporary point of view, with interpretations that feel both
              respectful and quietly unexpected.
            </p>
            <p>
              At the heart of the menu is an expansive dumpling program that
              defines the Gusi experience. Pelmeni appear in multiple styles and
              fillings, from classic combinations of beef and pork or beef,
              pork, and veal, to less commonly seen expressions featuring elk,
              buffalo, goose, and a Mediterranean-influenced variation finished
              with tahini.
            </p>
            <p>
              Pierogi receive a similarly considered treatment. Rather than the
              short crust dough most familiar to New York diners, Gusi
              highlights a lesser-known tradition of puff pastry pierogi,
              resulting in a lighter, flakier texture that offers a new
              dimension while remaining rooted in heritage.
            </p>
            <p>
              Borscht anchors the menu as a fixture, offered daily in its
              classic form alongside rotating weekly interpretations that
              reflect the dish&rsquo;s deep regional diversity.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {culinaryHighlights.map((item) => (
              <article
                key={item.title}
                className="border border-gusi-gold/30 bg-white/40 p-6 sm:p-7 flex flex-col"
              >
                <span className="text-gusi-gold uppercase tracking-[0.25em] text-[10px] mb-3">
                  Highlight
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gusi-charcoal/75 font-light leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </PressSection>

        {/* SECTION 5 — BAR PROGRAM */}
        <section
          aria-labelledby="bar-program-heading"
          className="py-20 sm:py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark"
        >
          <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                The Bar
              </span>
              <div className="w-10 h-px bg-gusi-gold/60 my-5" />
              <h2
                id="bar-program-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-ivory mb-8 sm:mb-10 leading-tight"
              >
                Gusi&rsquo;s Bar Program: Nostalgia, Nature, and the Taste of
                Home
              </h2>
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed">
                <p>
                  Gusi&rsquo;s cocktail program is rooted in memory and
                  tradition, drawing from flavors that shaped its team long
                  before &ldquo;mixology&rdquo; entered their vocabulary.
                </p>
                <p>
                  The beverage menu complements the food through house-infused
                  vodkas and a focused list of signature cocktails designed to
                  pair naturally with the richness and warmth of the cuisine.
                  Ingredients are natural and minimally handled, crafted without
                  commercial shortcuts to preserve their integrity and meaning.
                </p>
                <p>
                  Pine cone infusions recall summers spent climbing trees,
                  cornelian cherry liqueur evokes grandmothers&rsquo; compotes,
                  tomato infusions channel garden lunches, and boiled condensed
                  milk becomes a grown-up nod to a beloved childhood treat.
                </p>
                <p>
                  Seasonality guides the program, with cocktails shifting as the
                  year turns, echoing the way these flavors once marked time.
                </p>
                <p className="border-l-2 border-gusi-gold/60 pl-5 italic text-gusi-porcelain/90">
                  By day and into the afternoon, Gusi also features coffee from
                  Devoción, reflecting the same thoughtful approach found
                  throughout the experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — WINE PROGRAM */}
        <PressSection eyebrow="The Wine List" tone="muted">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            Gusi&rsquo;s Curated Wine Program
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
            <p>
              An extensive wine list plays a vital role at Gusi, balancing
              classic European and American labels with natural, biodynamic, and
              organic selections.
            </p>
            <p>
              Thoughtfully selected to appeal to both seasoned wine enthusiasts
              and more casual drinkers, the list offers familiar favorites
              alongside lesser-known discoveries, with a range of styles and
              price points to suit any occasion.
            </p>
            <p>
              Designed to pair seamlessly with the menu, the program encourages
              exploration while remaining approachable and welcoming for all
              guests.
            </p>
          </div>
        </PressSection>

        {/* SECTION 7 — MUSIC */}
        <section
          aria-labelledby="music-heading"
          className="py-20 sm:py-24 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-y border-gusi-gold/15"
        >
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-5">
                The Sound
              </span>
              <h2
                id="music-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 leading-tight"
              >
                The Music Concept
              </h2>
              <div className="w-12 h-px bg-gusi-gold/60 mb-6 sm:mb-8" />
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed">
                <p>
                  The ground floor is equipped with a high-fidelity, customized
                  sound system designed for vinyl listening, with curated record
                  selections setting the tone throughout the evening.
                </p>
                <p>
                  Drawing from a range of genres and eras, the soundtrack adds
                  warmth, rhythm, and a sense of intention to the space,
                  positioning music as an experiential layer rather than
                  background noise.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — DESIGN VISION */}
        <PressSection eyebrow="The Design">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            Design Vision: Two Worlds, One Story
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed mb-12 sm:mb-16">
            <p>
              Gusi&rsquo;s interiors are designed as a journey that unfolds
              across two distinct moods, each floor telling its own chapter of a
              larger story.
            </p>
            <p>
              The ground floor features a curated collection of original art
              objects crafted exclusively for the space, while the second floor
              is adorned with hand-painted ceiling and wall murals inspired by
              abstract expressionism and the vibrant culture of New York City.
            </p>
            <p>
              The space uses texture, light, and cultural moments rooted in
              memory to guide guests from a grounded, warm, and tactile first
              floor to an airy and refined second floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {designVision.map((item) => (
              <article
                key={item.title}
                className="border border-gusi-gold/30 bg-white/50 p-6 sm:p-7 flex flex-col"
              >
                <span className="text-gusi-gold uppercase tracking-[0.25em] text-[10px] mb-3">
                  {item.eyebrow}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-gusi-burgundy mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gusi-charcoal/75 font-light leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </PressSection>

        {/* SECTION 9 — OPENING HOURS */}
        <section
          aria-labelledby="hours-heading"
          className="py-20 sm:py-24 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark"
        >
          <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                The Schedule
              </span>
              <div className="w-10 h-px bg-gusi-gold/60 my-5" />
              <h2
                id="hours-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 leading-tight"
              >
                Opening Hours
              </h2>
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-3xl">
                <p>
                  Gusi will open with weekday dinner service from 4:00 pm to
                  midnight and weekend all-day service from noon to midnight,
                  including brunch on weekend day shifts.
                </p>
                <p>
                  In the following months, hours will expand to noon through
                  midnight daily, adding weekday lunch service.
                </p>
                <p>
                  By month three to four, weekday service will begin at 9:00 am,
                  with the ground floor operating as a morning café featuring
                  Devoción coffee, pastries, and sandwiches before transitioning
                  into full service through midnight.
                </p>
              </div>

              <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {hours.map((row) => (
                  <div
                    key={row.label}
                    className="border border-gusi-gold/30 bg-gusi-charcoal/40 p-6 sm:p-7"
                  >
                    <span className="block text-gusi-gold uppercase tracking-[0.25em] text-[10px] mb-3">
                      {row.label}
                    </span>
                    <p className="font-serif text-lg sm:text-xl leading-snug text-gusi-ivory">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 10 — ABOUT GUSI */}
        <PressSection eyebrow="About">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            About GUSI
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gusi-charcoal/85 font-light leading-relaxed">
            <p>
              Gusi is an Eastern European restaurant with a Mediterranean soul,
              located at 432 Sixth Avenue in the heart of New York City&rsquo;s
              Greenwich Village.
            </p>
            <p>
              Founded by Boris Artemyev and Elena Melnikova, the restaurant is a
              deeply personal expression of two lives shaped by movement,
              memory, and the search for belonging.
            </p>
            <p>
              Named after the Slavic word for &ldquo;geese,&rdquo; Gusi draws on
              the mythology of migration: the instinct to travel, to adapt, and
              to return. It is a restaurant built around the idea that food,
              like memory, carries us home.
            </p>
            <p>
              The menu celebrates refined Eastern European comfort cuisine
              reframed through a Mediterranean lens, supported by a collection
              of house-made infused spirits and a thoughtfully curated selection
              of natural wines.
            </p>
            <p>
              Situated in Greenwich Village, a neighborhood long defined by its
              spirit of creative freedom and its welcome of wanderers, artists,
              and dreamers, Gusi feels like a natural extension of that legacy.
            </p>
          </div>
        </PressSection>

        {/* SECTION 11 — MEDIA INQUIRIES */}
        <section
          aria-labelledby="media-heading"
          className="py-20 sm:py-24 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/20"
        >
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-5">
                For the Press
              </span>
              <h2
                id="media-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 leading-tight"
              >
                Media Inquiries
              </h2>
              <div className="w-12 h-px bg-gusi-gold/60 mb-8 sm:mb-10" />
              <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed mb-8">
                For media inquiries, please contact:
              </p>
              <address className="not-italic flex flex-col items-center gap-3">
                <span className="font-serif text-2xl sm:text-3xl text-gusi-ivory">
                  {MEDIA_CONTACT.name}
                </span>
                <a
                  href={`mailto:${MEDIA_CONTACT.email}`}
                  className="text-gusi-gold hover:text-gusi-ivory transition-colors text-base sm:text-lg break-all focus:outline-none focus-visible:text-gusi-ivory"
                >
                  {MEDIA_CONTACT.email}
                </a>
                <a
                  href={`tel:${MEDIA_CONTACT.phoneTel}`}
                  className="text-gusi-gold hover:text-gusi-ivory transition-colors text-base sm:text-lg focus:outline-none focus-visible:text-gusi-ivory"
                >
                  {MEDIA_CONTACT.phone}
                </a>
              </address>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PressSection({
  eyebrow,
  tone = "default",
  children,
}: {
  eyebrow: string;
  tone?: "default" | "muted";
  children: React.ReactNode;
}) {
  const bg =
    tone === "muted"
      ? "bg-gusi-porcelain bg-texture-paper"
      : "bg-gusi-ivory bg-texture-paper";
  return (
    <section className={`py-16 sm:py-20 md:py-28 ${bg}`}>
      <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
            {eyebrow}
          </span>
          <div className="w-10 h-px bg-gusi-gold/60 my-5" />
          {children}
        </motion.div>
      </div>
    </section>
  );
}
