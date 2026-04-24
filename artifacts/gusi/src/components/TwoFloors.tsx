import { motion } from "framer-motion";

export function TwoFloors() {
  return (
    <section id="space" className="bg-gusi-charcoal text-gusi-ivory overflow-hidden">
      {/* Panel 1: First Floor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-1">
          <img 
            src="/images/floor1.png" 
            alt="First Floor - Gusi" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center p-12 lg:p-24 bg-gusi-burgundy/20 bg-texture-dark order-2 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-gusi-gold uppercase tracking-widest text-xs mb-4">First Floor</h3>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Gusi / The Geese</h2>
            <p className="text-gusi-porcelain/80 leading-relaxed font-light">
              Dark, warm, textured, bold, social. Charred wood, vintage mirrors, oak tables, cocktails, infused vodka, and relaxed evening energy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Panel 2: The Staircase */}
      <div className="relative py-32 md:py-48 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/staircase.png" 
            alt="The Passage" 
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gusi-charcoal via-transparent to-gusi-porcelain/10" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <h3 className="text-gusi-gold uppercase tracking-widest text-xs mb-4">The Staircase</h3>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">The Passage</h2>
          <p className="text-gusi-ivory/90 leading-relaxed font-light italic">
            "A low-lit passage marked by a crystal chandelier — a movement from a dark forest into a bright meadow."
          </p>
        </motion.div>
      </div>

      {/* Panel 3: Second Floor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] bg-gusi-porcelain text-gusi-charcoal">
        <div className="flex items-center justify-center p-12 lg:p-24 bg-texture-paper order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-gusi-sage uppercase tracking-widest text-xs mb-4 font-semibold">Second Floor</h3>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gusi-sage">Lebedi / The Swans</h2>
            <p className="text-gusi-charcoal/80 leading-relaxed font-light">
              Light, refined, ceremonial. Tablecloths, muted gray-green walls, warm parquet, curtains, paintings, elegant plating, and slower ceremonial dining.
            </p>
          </motion.div>
        </div>
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          <img 
            src="/images/floor2.png" 
            alt="Second Floor - Lebedi" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
