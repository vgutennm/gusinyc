import { motion } from "framer-motion";

export function TwoFloors() {
  return (
    <section id="space" className="bg-gusi-charcoal text-gusi-ivory overflow-hidden">
      {/* Intro: A Modern Take on Eastern European Hospitality */}
      <div className="py-20 md:py-28 bg-texture-dark">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-5 sm:mb-6 leading-tight">
              A Modern Take on Eastern European Hospitality
            </h2>
            <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gusi-porcelain/80 font-light">
              <p>
                Every detail at GUSI has been thoughtfully composed to honor one
                simple idea: &ldquo;The finest evenings are never rushed.&rdquo;
                Beneath one roof, two distinct spaces offer their own
                interpretation of Eastern European hospitality.
              </p>
              <p>
                The first floor, The Geese, glows with lively conversation,
                handcrafted cocktails, and the warmth of oak and candlelight.
                Upstairs, the atmosphere is more peaceful, inviting guests to
                savor each course, sip on thoughtfully selected Georgian wines,
                and dive deep into meaningful conversations that unfold at their
                own pace.
              </p>
              <p>
                Different in mood yet united in purpose, both spaces embrace
                modern Eastern European cuisine through remarkable
                craftsmanship, generous hospitality, and the tradition of
                bringing people together.
              </p>
            </div>
            <a
              href="#story"
              className="mt-8 sm:mt-10 inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Learn Our Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Panel 1: First Floor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
        <div className="relative h-[44vh] sm:h-[50vh] lg:h-auto order-1 lg:order-1">
          <img
            src="/gallery/gusi-1f-geese.webp"
            srcSet="/gallery/gusi-1f-geese-800.webp 800w, /gallery/gusi-1f-geese.webp 1600w"
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="A pair of white porcelain geese on GUSI's first-floor bar in Greenwich Village — the brand's namesake mark beside candles and warm tavern lighting at 432 Sixth Avenue, NYC"
            width={2048}
            height={1152}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex items-center justify-center px-6 sm:px-10 py-14 sm:py-20 lg:p-24 bg-gusi-burgundy/20 bg-texture-dark order-2 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4">First Floor</h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 leading-tight">GUSI / The Geese</h2>
            <p className="text-gusi-porcelain/80 leading-relaxed font-light text-base sm:text-lg">
              Dark, warm, textured, bold, social. Charred wood, vintage mirrors, oak tables, cocktails, infused vodka, and relaxed evening energy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Panel 2: The Staircase */}
      <div className="relative py-24 sm:py-32 md:py-48 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/gusi-chandelier-mirror-detail.webp"
            srcSet="/gallery/gusi-chandelier-mirror-detail-800.webp 800w, /gallery/gusi-chandelier-mirror-detail.webp 1600w"
            sizes="100vw"
            alt="A crystal chandelier and antique gilt mirror in GUSI's passage between floors — Greenwich Village, NYC"
            width={825}
            height={1100}
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gusi-charcoal via-transparent to-gusi-porcelain/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4">The Staircase</h3>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-5 sm:mb-6 leading-tight">The Passage</h2>
          <p className="text-gusi-ivory/90 leading-relaxed font-light italic text-base sm:text-lg">
            &ldquo;A low-lit passage marked by a crystal chandelier — a movement from a dark forest into a bright meadow.&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Panel 3: Second Floor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh] bg-gusi-porcelain text-gusi-charcoal">
        <div className="flex items-center justify-center px-6 sm:px-10 py-14 sm:py-20 lg:p-24 bg-texture-paper order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-gusi-sage uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4 font-semibold">Second Floor</h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 text-gusi-sage leading-tight">Lebedi / The Swans</h2>
            <p className="text-gusi-charcoal/80 leading-relaxed font-light text-base sm:text-lg">
              Light, refined, ceremonial. Tablecloths, muted gray-green walls, warm parquet, curtains, paintings, elegant plating, and slower ceremonial dining.
            </p>
          </motion.div>
        </div>
        <div className="relative h-[44vh] sm:h-[50vh] lg:h-auto order-1 lg:order-2">
          <img
            src="/gallery/gusi-2f-greenroom.webp"
            srcSet="/gallery/gusi-2f-greenroom-800.webp 800w, /gallery/gusi-2f-greenroom.webp 1086w"
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="GUSI's second-floor dining room (Lebedi / The Swans) — emerald-green and burgundy tablecloths, ivory leather chairs, and golden evening light through tall windows over leafy Sixth Avenue trees at 432 Sixth Avenue, Greenwich Village, NYC"
            title="Lebedi / The Swans — GUSI second-floor dining room, 432 Sixth Avenue, Greenwich Village, NYC"
            width={1086}
            height={1448}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
