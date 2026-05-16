import { Link } from "wouter";
import { motion } from "framer-motion";
import { OPENING_DATE_LABEL } from "@/lib/constants";

export function PressPreview() {
  return (
    <section
      id="press-preview"
      aria-labelledby="press-preview-heading"
      className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-y border-gusi-gold/15"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
            Now Opening in Greenwich Village
          </span>
          <h2
            id="press-preview-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-5 sm:mb-6 leading-tight"
          >
            Gusi Opened {OPENING_DATE_LABEL}
          </h2>
          <div className="w-12 h-px bg-gusi-gold/60 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-gusi-charcoal/80 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Gusi opens at 432 Sixth Avenue, bringing Eastern European heritage,
            Mediterranean warmth, house-infused vodkas, a curated wine program,
            vinyl sound, and a two-floor design story to New York City.
          </p>
          <Link
            href="/press"
            className="inline-flex items-center justify-center min-h-11 border border-gusi-burgundy text-gusi-burgundy px-8 py-3 uppercase tracking-[0.25em] text-xs sm:text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-porcelain"
          >
            Read the Press Release
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
