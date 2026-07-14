import { Link } from "wouter";
import { motion } from "framer-motion";
import { STORY_ARTICLES } from "@/data/stories";

export function StoriesPreview() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="pt-20 md:pt-28 pb-10 md:pb-14 bg-gusi-ivory text-gusi-charcoal bg-texture-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center mb-12 md:mb-16"
        >
          <h2
            id="stories-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-4 leading-tight"
          >
            Stories From GUSI
          </h2>
          <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
          <h3 className="font-serif text-xl sm:text-2xl italic text-gusi-charcoal/90 mb-5 sm:mb-6">
            The experience at GUSI extends well beyond the table.
          </h3>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gusi-charcoal/80 font-light max-w-2xl">
            <p>
              Through our stories, we share the traditions, ingredients, and
              craftsmanship behind the dishes and drinks you love, from Eastern
              European culinary heritage and Georgian wine to house infusions,
              seasonal flavors, and the stories that inspire our kitchen.
            </p>
            <p>
              It&rsquo;s a space for curious diners who enjoy knowing
              what&rsquo;s behind every memorable meal.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
          {STORY_ARTICLES.map((article, idx) => {
            const isPublished = article.published && article.slug;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={isPublished ? `/blog/${article.slug}` : "/blog"}
                  className="group flex h-full flex-col border border-gusi-gold/25 bg-gusi-porcelain/40 p-6 sm:p-7 text-left transition-colors duration-300 hover:border-gusi-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory"
                >
                  <div className="w-6 h-px bg-gusi-gold/50 mb-4" />
                  <h3 className="font-serif text-lg sm:text-xl leading-snug text-gusi-charcoal mb-3 group-hover:text-gusi-burgundy transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gusi-charcoal/70 font-light mb-4">
                    {article.teaser}
                  </p>
                  <span
                    className={`mt-auto uppercase tracking-[0.2em] text-[11px] ${
                      isPublished ? "text-gusi-burgundy" : "text-gusi-gold-deep"
                    }`}
                  >
                    {isPublished ? "Read Story" : "Coming Soon"}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center min-h-11 border border-gusi-burgundy/40 text-gusi-burgundy px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory"
          >
            Read Our Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
