import { useState } from "react";
import { MENU_DATA } from "@/data/menu";
import { motion } from "framer-motion";

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-20 md:py-32 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gusi-burgundy mb-5 md:mb-6">Menu</h2>
          <div className="w-12 h-px bg-gusi-gold mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* Categories Navigation */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="lg:w-1/3 -mx-6 lg:mx-0 px-6 lg:px-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-5 lg:gap-6 pb-4 lg:pb-0 scrollbar-hide border-b lg:border-b-0 lg:border-l border-gusi-gold/20 lg:pl-6"
          >
            {MENU_DATA.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`menu-panel-${category.id}`}
                  id={`menu-tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap text-left text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 min-h-11 lg:min-h-0 py-3 lg:py-0 border-b-2 lg:border-b-0 focus:outline-none focus-visible:text-gusi-burgundy ${
                    isActive
                      ? "text-gusi-burgundy font-medium border-gusi-gold lg:border-transparent lg:-translate-x-2"
                      : "text-gusi-charcoal/40 hover:text-gusi-charcoal border-transparent"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Menu Items */}
          <div className="lg:w-2/3 lg:min-h-[400px]">
            {MENU_DATA.map((category) =>
              category.id === activeCategory ? (
                <motion.div
                  key={category.id}
                  role="tabpanel"
                  id={`menu-panel-${category.id}`}
                  aria-labelledby={`menu-tab-${category.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-gusi-charcoal mb-4 border-b border-gusi-gold/30 pb-3 sm:pb-4 inline-block pr-8 sm:pr-12">
                    {category.title}
                  </h3>

                  {category.note && (
                    <p className="text-sm text-gusi-burgundy/80 italic mb-6 sm:mb-8 border-l-2 border-gusi-gold pl-4 mt-4">
                      {category.note}
                    </p>
                  )}

                  <ul className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="font-light text-base sm:text-lg tracking-wide leading-snug">{item.name}</span>
                        {item.description && (
                          <span className="text-sm text-gusi-charcoal/60 mt-1">{item.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null,
            )}
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <img
            src="/images/food.png"
            alt="A styled GUSI dish"
            className="w-full max-w-2xl mx-auto h-[260px] sm:h-[340px] md:h-[400px] object-cover filter brightness-90 grayscale-[20%] sepia-[10%] rounded-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
