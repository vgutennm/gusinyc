import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  span?: "tall" | "wide" | "normal";
};

const IMAGES: GalleryImage[] = [
  {
    src: "/gallery/gusi-first-floor-bar-banquette.webp",
    alt: "GUSI's first-floor bar at night — a long bar of backlit bottles and red banquettes anchor a candlelit room of textured stone walls, vintage frames, and high cocktail tables in Greenwich Village",
    caption: "First floor — the bar after dark.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-bar-bottle-collection.webp",
    alt: "Close-up of GUSI's curated bar — a glowing collection of natural wines, infused vodkas, and rare Eastern European spirits arranged on backlit shelves beneath two framed portraits",
    caption: "Infused vodkas, natural wines, rare spirits.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-bar-bottles-banquette.webp",
    alt: "Long view down GUSI's bar — wood counter, red leather stools, mirror-backed bottle display, and warm Slavic-tavern lighting at 432 Sixth Avenue, NYC",
    caption: "An evening at the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-cocktail-tables-stone-wall.webp",
    alt: "High cocktail tables and stools framed by deep red velvet curtains and an antique gilt frame inset on a hand-troweled stone wall in GUSI's first-floor lounge",
    caption: "Cocktails by the velvet curtain.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-painted-ceiling-dining.webp",
    alt: "GUSI's second floor dining room beneath a hand-painted ceiling of organic shapes in pastel and rose tones, with a commissioned theater-curtain artwork on the left wall and white-clothed tables surrounded by curved ivory chairs",
    caption: "Second floor — beneath the painted ceiling.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-second-floor-art-green.webp",
    alt: "Two large commissioned paintings, a moody bartender scene and a still life of folded garments, hang above a green-clothed table and curved ivory chairs in GUSI's second-floor dining room",
    caption: "Original art commissioned for the room.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-008.webp",
    alt: "Long view of GUSI's first-floor bar with red leather stools and a fully backlit bottle wall",
    caption: "The bar at full length.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-026.webp",
    alt: "Red bar stools lined along the candlelit counter with the glowing bottle collection behind",
    caption: "Down the length of the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-029.webp",
    alt: "Soft pink pampas grass in the foreground with GUSI's red bar stools and bottle wall behind",
    caption: "Pampas at the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-015.webp",
    alt: "Two gold-framed paintings on a hand-troweled stone wall, lit from above",
    caption: "Paintings on hand-troweled stone.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-028.webp",
    alt: "Votive candles glowing on the bar counter beside antique decanters and rows of bottles",
    caption: "Candles among the bottles.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-027.webp",
    alt: "Side view of the candlelit bar at GUSI with red stools and warm pendant lighting",
    caption: "The bar at twilight.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-023.webp",
    alt: "Wide view of GUSI's second-floor dining room with a large gilt mirror and painted ceiling",
    caption: "The upstairs dining room.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-016.webp",
    alt: "Second-floor dining room in afternoon daylight, with curved ivory chairs and the painted ceiling",
    caption: "Second floor — daylight through the windows.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-017.webp",
    alt: "Window-side banquette upstairs at GUSI with bare winter trees visible outside",
    caption: "Banquette at the window.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-018.webp",
    alt: "Painted ceiling above white-clothed tables on GUSI's second floor, with paintings along the wall",
    caption: "Beneath the painted ceiling, by day.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-019.webp",
    alt: "Afternoon view across the second-floor dining room with a large commissioned painting on the wall",
    caption: "An afternoon upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-024.webp",
    alt: "Curved ivory chairs around white-linen tables on GUSI's second floor, with daylight windows along the side",
    caption: "Curved chairs and white linens.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-020.webp",
    alt: "Round dining table framed by a gold velvet curtain at the window, beneath the painted ceiling",
    caption: "A round table by the curtain.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-021.webp",
    alt: "View from the upstairs window onto Greenwich Village brownstones with white tables in the foreground",
    caption: "West, toward the Village.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-011.webp",
    alt: "GUSI's first-floor dining room before service, with table lamps glowing and red banquettes along the side",
    caption: "An afternoon, an empty room.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-010.webp",
    alt: "First-floor dining room set for service, table lamps glowing on each white-clothed table",
    caption: "Tables before service.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-009.webp",
    alt: "Down the length of the first-floor dining room toward the illuminated GUSI sign at the back",
    caption: "The room with the GUSI sign.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-013.webp",
    alt: "Illuminated frosted-glass cube seats and red banquettes in GUSI's lower lounge",
    caption: "The lounge below.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-030.webp",
    alt: "Wide view of the bar at the start of evening service, with pampas grass in the foreground",
    caption: "An evening service begins.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-006.webp",
    alt: "Looking into GUSI from Sixth Avenue at dusk — warm-lit bar room visible through the storefront windows",
    caption: "Looking in from Sixth Avenue.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4">A closer look</h3>
          <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 leading-tight">
            Inside GUSI.
          </h2>
          <p className="text-gusi-porcelain/75 leading-relaxed font-light text-base sm:text-lg">
            Two floors at 432 Sixth Avenue in Greenwich Village — a candlelit Eastern European tavern bar downstairs,
            a light-filled dining room of original art and hand-painted ceilings upstairs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {IMAGES.map((img, idx) => {
            const spanClass =
              img.span === "wide"
                ? "sm:col-span-2 aspect-[16/9]"
                : img.span === "tall"
                  ? "lg:row-span-2 aspect-[3/4] lg:aspect-[3/5]"
                  : "aspect-[4/3]";
            return (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(idx, 4) * 0.06 }}
                className={`group relative overflow-hidden border border-gusi-gold/10 bg-gusi-charcoal/60 ${spanClass}`}
              >
                <img
                  src={img.src}
                  srcSet={`${img.src.replace(/\.webp$/, "-800.webp")} ${Math.round(img.width / 2)}w, ${img.src} ${img.width}w`}
                  sizes={
                    img.span === "wide"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                      : img.span === "tall"
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  }
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gusi-charcoal/85 via-gusi-charcoal/10 to-transparent pointer-events-none" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 py-3 sm:py-4 text-gusi-porcelain/90 text-sm sm:text-[15px] font-light italic font-serif leading-snug">
                  {img.caption}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
