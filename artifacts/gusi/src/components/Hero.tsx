import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full flex items-center justify-center overflow-hidden bg-gusi-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Candlelit dining room at GUSI"
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gusi-charcoal via-gusi-charcoal/50 to-gusi-charcoal/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-4xl mx-auto pt-20 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gusi-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm mb-5 sm:mb-6">
            Greenwich Village, New York
          </p>
          <h1 className="mb-5 sm:mb-6 leading-none">
            <span className="sr-only">
              GUSI — Modern Eastern European Restaurant in Greenwich Village, New York
            </span>
            <img
              src="/brand/gusi-wordmark-light.svg"
              alt=""
              aria-hidden="true"
              width={5102}
              height={1862}
              fetchPriority="high"
              decoding="async"
              className="block mx-auto h-[72px] sm:h-[112px] md:h-[140px] lg:h-[180px] w-auto select-none"
              draggable={false}
            />
          </h1>
          <p className="text-gusi-porcelain/80 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-md md:max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed">
            Modern Eastern European cuisine with a Mediterranean touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <a
            href="#reservations"
            className="bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Explore the Menu
          </a>
        </motion.div>
      </div>

    </section>
  );
}
