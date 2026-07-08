import { motion } from "framer-motion";

export function HomeIntro() {
  return (
    <section className="py-20 md:py-28 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <div className="w-px h-12 sm:h-16 bg-gusi-gold/40 mb-6 sm:mb-8" />
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gusi-charcoal/80 font-light">
            <p>
              The finest meals are recalled for more than their flavors. They
              become stories, shared between friends and family, celebrated over
              another glass of wine, and revisited long after the evening ends.
              That&rsquo;s the spirit of GUSI.
            </p>
            <p>
              Positioned in Greenwich Village, our modern Eastern European
              restaurant is designed to celebrate the joy of gathering, from
              gently folded dumplings and comforting borscht to handcrafted
              cocktails and Georgian wine shared generously around the table.
            </p>
            <p>
              Amid the constant chaos of NYC, we&rsquo;ve created a dining
              experience where time slows, conversation flows, and genuine
              hospitality is felt in every course. Reserve a table and
              experience a meal like no other.
            </p>
          </div>
          <div className="w-12 h-px bg-gusi-gold/40 mt-10 sm:mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
