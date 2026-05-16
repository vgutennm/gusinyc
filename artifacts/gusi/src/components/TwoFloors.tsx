import { motion } from "framer-motion";
import firstFloorInterior from "@assets/GUSI-NYC-03_1777934185727.webp";

export function TwoFloors() {
  return (
    <section id="space" className="bg-gusi-charcoal text-gusi-ivory overflow-hidden">
      {/* Panel 1: First Floor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
        <div className="relative h-[44vh] sm:h-[50vh] lg:h-auto order-1 lg:order-1">
          <img
            src={firstFloorInterior}
            alt="GUSI's first-floor interior in Greenwich Village — banquette seating beneath hanging textile art, dried botanicals in a glass vase, a vintage porcelain-shade lamp, and a stone vessel on a reclaimed wood table"
            width={765}
            height={1020}
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
            srcSet="/gallery/gusi-chandelier-mirror-detail-800.webp 800w, /gallery/gusi-chandelier-mirror-detail.webp 1100w"
            sizes="100vw"
            alt="A vintage gilded chandelier reflected in an inset mirror set into the textured stone wall of GUSI's stairwell passage"
            width={1100}
            height={1467}
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
            src="/gallery/gusi-second-floor-lebedi-dining-room.jpg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="GUSI's second-floor dining room (Lebedi / The Swans) — three vibrant figurative paintings line the back wall above ivory leather chairs and white-clothed tables, with an oval wood table in the foreground beneath a hand-painted ceiling of muted abstract shapes"
            title="Lebedi / The Swans — GUSI second-floor dining room, 432 Sixth Avenue, Greenwich Village, NYC"
            width={4032}
            height={3024}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
