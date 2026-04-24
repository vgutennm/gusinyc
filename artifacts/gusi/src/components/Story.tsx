import { motion } from "framer-motion";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gusi-gold/40 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-gusi-burgundy mb-8">
            A restaurant of two wings.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gusi-charcoal/80 font-light text-justify md:text-center">
            GUSI reimagines familiar Eastern European flavors, rituals, and memories for modern New York. 
            The name carries folklore, humor, childhood, and migration — a layered word for a layered place. 
            The restaurant moves between two moods: the warmth and texture of the first floor, and the softer, 
            elevated ceremony of the second floor.
          </p>
          <div className="w-12 h-px bg-gusi-gold/40 mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
