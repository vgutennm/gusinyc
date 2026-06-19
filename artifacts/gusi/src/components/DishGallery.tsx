import { motion } from "framer-motion";

type Dish = {
  src: string;
  alt: string;
  caption: string;
};

// Food photography for GUSI, Greenwich Village. Add more entries here as new
// photos arrive — the grid expands automatically.
const DISHES: Dish[] = [
  {
    src: "/dishes/dish-01.jpg",
    alt: "Herring under a fur coat at GUSI — layered salad of herring, beet, potato, carrot, and egg under a bright beet jelly, served with radish",
    caption: "Herring under a fur coat.",
  },
  {
    src: "/dishes/dish-02.jpg",
    alt: "Crispy chicken cutlet sandwich at GUSI with red cabbage and pickles, served with roasted potatoes",
    caption: "Chicken schnitzel with challah.",
  },
  {
    src: "/dishes/dish-03.jpg",
    alt: "Whole meringue roll at GUSI on parchment beside dried flowers — Eastern European dessert in Greenwich Village",
    caption: "Meringue roll.",
  },
  {
    src: "/dishes/dish-04.jpg",
    alt: "Sirniki at GUSI — golden farmer's cheese pancakes with condensed milk, cherry jam, and sour cream",
    caption: "Sirniki, three ways.",
  },
  {
    src: "/dishes/dish-05.jpg",
    alt: "Slice of grillage cake at GUSI with caramelized nuts and cream on a vintage plate",
    caption: "Grillage cake.",
  },
  {
    src: "/dishes/dish-06.jpg",
    alt: "Three tomato salad at GUSI with feta, herbs, and cracked pepper in a dark bowl",
    caption: "Three tomato salad.",
  },
  {
    src: "/dishes/dish-07.jpg",
    alt: "Hummus at GUSI swept across a bowl and topped with a fresh chopped cucumber and tomato salad with sumac",
    caption: "Village garden salad with tahini.",
  },
  {
    src: "/dishes/dish-08.jpg",
    alt: "Whole market fish at GUSI, grilled and served with roasted potatoes, green salad, schoug, and lemon",
    caption: "Whole market fish.",
  },
  {
    src: "/dishes/dish-09.jpg",
    alt: "Baba ganoush at GUSI — smoky eggplant spread with herbs, red onion, sesame, and green chili",
    caption: "Eggplant carpaccio.",
  },
  {
    src: "/dishes/dish-10.jpg",
    alt: "Spreads to start at GUSI — a creamy dip dusted with sumac and olive oil, with more mezze plates behind",
    caption: "Spreads to start.",
  },
  {
    src: "/dishes/dish-11.jpg",
    alt: "Halva at GUSI served in a faceted glass coupe, drizzled with honey",
    caption: "Halva.",
  },
  {
    src: "/dishes/dish-12.jpg",
    alt: "Blinis with house-cured salmon at GUSI, with sour cream and fresh dill on a floral plate",
    caption: "Blinis with house-cured salmon.",
  },
  {
    src: "/dishes/dish-13.jpg",
    alt: "Candlelit plate of blinis with house-cured salmon and sour cream at GUSI in Greenwich Village",
    caption: "Blini, salmon, and sour cream.",
  },
  {
    src: "/dishes/dish-14.jpg",
    alt: "Pelmeni at GUSI tossed with dill and butter in a dark bowl, served with sour cream on a wooden board",
    caption: "Pelmeni.",
  },
  {
    src: "/dishes/dish-15.jpg",
    alt: "Vareniki with potatoes and caramelized onions at GUSI in a dark bowl",
    caption: "Vareniki with caramelized onions.",
  },
  {
    src: "/dishes/dish-16.jpg",
    alt: "Hummus with prime beef at GUSI — creamy hummus topped with spiced strips of beef, chickpeas, pickled onion, and schoug",
    caption: "Hummus with prime beef.",
  },
  {
    src: "/dishes/dish-17.jpg",
    alt: "Lamb lula kebab at GUSI over labneh with roasted peppers, tomato, and onion on a patterned platter",
    caption: "Lamb lula kebab.",
  },
  {
    src: "/dishes/dish-18.jpg",
    alt: "Close-up of grilled lamb lula kebab at GUSI over labneh with roasted peppers and tomato",
    caption: "Lula kebab, up close.",
  },
  {
    src: "/dishes/dish-19.jpg",
    alt: "Salo plate at GUSI — cured pork fat with mustard, beet horseradish, garlic, and dill",
    caption: "Salo plate.",
  },
  {
    src: "/dishes/dish-20.jpg",
    alt: "Cherry dumplings at GUSI — vareniki filled with cherries in a sweet cherry sauce, garnished with mint",
    caption: "Cherry dumplings.",
  },
  {
    src: "/dishes/dish-21.jpg",
    alt: "Borscht at GUSI — beet soup with a dollop of sour cream, served with garlic, dill, and dark rye bread",
    caption: "Borscht with duck.",
  },
  {
    src: "/dishes/dish-22.jpg",
    alt: "Golubtzi at GUSI — stuffed cabbage rolls of beef and beef tongue in a creamy tomato sauce, finished with dill and parsley",
    caption: "Golubtzi in tomato sauce.",
  },
  {
    src: "/dishes/dish-23.jpg",
    alt: "Beef stroganoff at GUSI — tender beef and mushrooms in a creamy sauce served with buckwheat and a pickle",
    caption: "Beef stroganoff with buckwheat.",
  },
  {
    src: "/dishes/dish-24.jpg",
    alt: "A flight of GUSI's house-infused vodkas lined up in glasses on the bar, glowing in candlelight",
    caption: "A flight of infused vodkas.",
  },
];

export function DishGallery() {
  return (
    <section
      id="dishes"
      className="py-20 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10"
      aria-labelledby="dishes-heading"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4">On the table</h3>
          <h2 id="dishes-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 leading-tight">
            From the kitchen.
          </h2>
          <p className="text-gusi-porcelain/75 leading-relaxed font-light text-base sm:text-lg">
            Pelmeni and vareniki, blini and caviar, kebabs and cured fish — a closer look at the plates
            coming out of the GUSI kitchen.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {DISHES.map((dish, idx) => (
            <motion.figure
              key={dish.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(idx, 6) * 0.05 }}
              className="group relative overflow-hidden border border-gusi-gold/10 bg-gusi-charcoal/60 aspect-[3/4]"
            >
              <img
                src={dish.src}
                alt={dish.alt}
                width={1200}
                height={1600}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gusi-charcoal/90 via-gusi-charcoal/10 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 py-2.5 sm:py-3 text-gusi-porcelain/90 text-xs sm:text-sm font-light italic font-serif leading-snug">
                {dish.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
