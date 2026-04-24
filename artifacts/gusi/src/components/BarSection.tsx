import { motion } from "framer-motion";

export function BarSection() {
  const cards = [
    { title: "House-infused vodka" },
    { title: "Signature cocktails" },
    { title: "Natural and classic wines" },
    { title: "Rare spirits" },
    { title: "High-quality sound and evening atmosphere" }
  ];

  return (
    <section id="bar" className="py-24 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gusi-gold mb-8">
            Infused vodka, cocktails, natural wine.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gusi-porcelain/80 font-light max-w-2xl mx-auto mb-16">
            The GUSI bar is built around house-infused vodkas, classic cocktails, natural wines, rare spirits, and forgotten Eastern European flavors reimagined for New York.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 border border-gusi-wine/50 bg-gusi-charcoal/20 flex flex-col items-center justify-center min-h-[160px] ${
                idx > 2 ? "md:col-span-1 md:col-start-2" : ""
              } ${idx === 4 ? "md:col-start-auto" : ""}`}
              style={{ gridColumn: idx === 3 ? '1 / span 1' : idx === 4 ? '3 / span 1' : undefined }}
            >
              <div className="w-6 h-px bg-gusi-gold/50 mb-4" />
              <h3 className="font-serif text-xl tracking-wide">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
