import { OPEN_TABLE_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-gusi-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="GUSI Dining Room"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gusi-charcoal via-gusi-charcoal/50 to-gusi-charcoal/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gusi-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
            Greenwich Village, New York
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-gusi-ivory tracking-[0.1em] mb-6">
            GUSI
          </h1>
          <p className="text-gusi-porcelain/80 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto mb-12 leading-relaxed">
            Modern Eastern European cuisine with a Mediterranean touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href={OPEN_TABLE_URL}
            className="bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-widest text-sm hover:bg-gusi-ivory transition-colors duration-300 text-center"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-widest text-sm hover:bg-gusi-gold/10 transition-colors duration-300 text-center"
          >
            Explore the Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gusi-gold/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="uppercase tracking-widest text-[10px]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gusi-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
