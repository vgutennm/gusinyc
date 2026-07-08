import { motion } from "framer-motion";
import { Link } from "wouter";

export function BarSection() {
  const cards = [
    { title: "House-infused vodka" },
    { title: "Signature cocktails" },
    { title: "Natural and classic wines" },
    { title: "Rare spirits" },
    { title: "High-quality sound and evening atmosphere" }
  ];

  return (
    <section id="bar" className="py-20 md:py-32 bg-gusi-burgundy text-gusi-ivory bg-texture-dark">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 sm:mb-8 leading-tight">
            Cocktails, Georgian Wine &amp; House Infusions
          </h2>
          <div className="space-y-5 text-base sm:text-lg md:text-xl leading-relaxed text-gusi-porcelain/80 font-light max-w-2xl mx-auto mb-8 sm:mb-10">
            <p>
              As the evening settles in, the bar becomes a destination of its
              own. House infused vodka, crafted with horseradish and the finest
              seasonal ingredients, shares the spotlight with an exceptional
              collection of Georgian wine.
            </p>
            <p>
              Alongside them, seasonal cocktails are mixed with precision to
              complement the kitchen&rsquo;s comforting flavors, creating
              pairings that feel as natural as the conversations unfolding
              around the table. However your evening begins, you&rsquo;ll find
              plenty of reasons to order just one more round.
            </p>
          </div>
          <Link
            href="/blog"
            className="mb-12 sm:mb-16 inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-burgundy"
          >
            Read Our Beverage Stories
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(idx, 3) * 0.08 }}
              className={`p-5 sm:p-6 md:p-7 lg:p-6 border border-gusi-wine/50 bg-gusi-charcoal/20 flex flex-col items-center justify-center min-h-[130px] sm:min-h-[150px] ${
                idx === 4
                  ? "sm:col-span-2 md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                  : ""
              }`}
            >
              <div className="w-6 h-px bg-gusi-gold/50 mb-3 sm:mb-4" />
              <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-base xl:text-lg tracking-wide leading-snug text-balance">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
