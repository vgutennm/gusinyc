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
        className="pointer-events-none absolute -left-12 sm:-left-10 lg:-left-10 xl:-left-4 top-1/2 -translate-y-1/2 h-[260px] sm:h-[340px] md:h-[400px] lg:h-[420px] xl:h-[480px] w-auto opacity-[0.06] sm:opacity-[0.07] select-none"
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
            A restaurant of two wings.
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gusi-charcoal/80 font-light text-center">
            GUSI reimagines familiar Eastern European flavors, rituals, and memories for modern New York.
            The name carries folklore, humor, childhood, and migration — a layered word for a layered place.
            The restaurant moves between two moods: the warmth and texture of the first floor, and the softer,
            elevated ceremony of the second floor.
          </p>
          <div className="w-12 h-px bg-gusi-gold/40 mt-10 sm:mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
