import { motion } from "framer-motion";

export function DinnerCta() {
  return (
    <section className="py-16 md:py-24 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-t border-gusi-gold/15">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-5 sm:mb-6 leading-tight">
            Join Us for Dinner in Greenwich Village
          </h2>
          <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg leading-relaxed text-gusi-charcoal/80 font-light max-w-2xl mb-8 sm:mb-10">
            A date, a birthday, a Tuesday that turned into dinner with friends,
            GUSI works for all of it. The room fits a table for 2 as easily as
            for 8. Greenwich Village dinner reservations are open now. Book now
            before the week fills up around you.
          </p>
          <a
            href="#reservations"
            className="inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-porcelain"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
