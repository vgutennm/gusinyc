import { motion } from "framer-motion";
import { Link } from "wouter";

export function FinalCta() {
  return (
    <section className="relative py-20 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent"
      />
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-5 sm:mb-6 leading-tight">
            The Table Is Set. All That&rsquo;s Missing Is You.
          </h2>
          <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg leading-relaxed text-gusi-porcelain/80 font-light max-w-xl mb-8 sm:mb-10">
            Good food, well poured drinks, and nobody rushing you out the door.
            That&rsquo;s the whole idea. Make a reservation today and allow us
            to take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
