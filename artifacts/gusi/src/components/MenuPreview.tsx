import { useState } from "react";
import { MENU_DATA } from "@/data/menu";
import { motion } from "framer-motion";

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-24 md:py-32 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gusi-burgundy mb-6">Menu</h2>
          <div className="w-12 h-px bg-gusi-gold mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Categories Navigation */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 lg:gap-6 pb-4 lg:pb-0 scrollbar-hide border-b lg:border-b-0 lg:border-l border-gusi-gold/20 lg:pl-6">
            {MENU_DATA.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-left text-sm md:text-base uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-gusi-burgundy font-medium translate-x-0 lg:-translate-x-2"
                    : "text-gusi-charcoal/40 hover:text-gusi-charcoal"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="lg:w-2/3 min-h-[400px]">
            {MENU_DATA.map((category) => (
              category.id === activeCategory && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-serif text-3xl text-gusi-charcoal mb-4 border-b border-gusi-gold/30 pb-4 inline-block pr-12">
                    {category.title}
                  </h3>
                  
                  {category.note && (
                    <p className="text-sm text-gusi-burgundy/80 italic mb-8 border-l-2 border-gusi-gold pl-4">
                      {category.note}
                    </p>
                  )}

                  <ul className="space-y-6 mt-8">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="font-light text-lg tracking-wide">{item.name}</span>
                        {item.description && (
                          <span className="text-sm text-gusi-charcoal/60 mt-1">{item.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <img 
            src="/images/food.png" 
            alt="GUSI Cuisine" 
            className="w-full max-w-2xl mx-auto h-[400px] object-cover filter brightness-90 grayscale-[20%] sepia-[10%] rounded-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
