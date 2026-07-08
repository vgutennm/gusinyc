import { motion } from "framer-motion";

export function Story() {
  return (
    <section id="story" className="relative py-20 md:py-32 bg-gusi-ivory text-gusi-charcoal bg-texture-paper overflow-hidden">
      {/* Decorative goose silhouette — subtle watermark on every viewport */}
      <img
        src="/brand/gusi-goose-mark.webp"
        alt=""
        aria-hidden="true"
        width={900}
        height={1467}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 top-1/2 -translate-y-1/2 h-[180px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] w-auto opacity-[0.06] sm:opacity-[0.07] select-none"
      />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <div className="w-px h-12 sm:h-16 bg-gusi-gold/40 mb-6 sm:mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-6 sm:mb-8 leading-tight">
            The Story Behind GUSI
          </h2>
          <div className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gusi-charcoal/80 font-light text-center">
            <p>
              In Eastern European tradition, a goose is more than a bird. It is
              a symbol of home, cherished memories, and journeys that always
              lead back to the people waiting around the table. That&rsquo;s why
              we chose the name GUSI.
            </p>
            <p>
              Rooted in folklore and woven through generations of family
              gatherings, it reflects a culture where food is never simply
              served but shared, celebrated, and remembered.
            </p>
            <p>
              A pair of porcelain geese rests at the first floor bar, gently
              watching over the room. These pieces are more than decorations.
              They represent the heart of our restaurant, a place where every
              guest is wrapped in warmth and served comforting meals, creating
              an evening that leaves you feeling a little closer to home.
            </p>
          </div>
          <div className="w-12 h-px bg-gusi-gold/40 mt-10 sm:mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
