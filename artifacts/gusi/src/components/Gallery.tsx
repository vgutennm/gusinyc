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
    src: "/gallery/gusi-photo-001.webp",
    alt: "Interior view of GUSI restaurant and bar in Greenwich Village, New York — warm candlelit room with textured stone walls and Eastern European tavern atmosphere",
    caption: "Inside GUSI, Greenwich Village.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-002.webp",
    alt: "GUSI dining room detail — white-clothed tables, ivory leather chairs, and warm pendant lighting at 432 Sixth Avenue, NYC",
    caption: "Tables set for the evening.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-003.webp",
    alt: "GUSI dining room scene with original commissioned art on hand-troweled walls in a modern Eastern European restaurant in Greenwich Village",
    caption: "Original art on hand-troweled walls.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-004.webp",
    alt: "Vertical interior view of GUSI restaurant in Greenwich Village — candlelit Eastern European dining and bar space",
    caption: "A corner of the room.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-005.webp",
    alt: "GUSI first-floor tavern bar in Greenwich Village — long counter, backlit bottle display, and red leather seating beneath warm pendant lights",
    caption: "The first-floor bar.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-006.webp",
    alt: "Close-up of GUSI's bar — infused vodkas, natural wines, and rare Eastern European spirits arranged on backlit shelves",
    caption: "Infused vodkas and natural wines.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-007.webp",
    alt: "Candlelit bar counter at GUSI with antique decanters and votive candles among rows of bottles",
    caption: "Candles among the bottles.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-008.webp",
    alt: "Long view down GUSI's first-floor bar — wood counter, red leather stools, and mirror-backed bottle wall in a Greenwich Village tavern setting",
    caption: "Down the length of the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-009.webp",
    alt: "Banquette seating at GUSI restaurant — deep red leather booths along textured stone walls in the candlelit first-floor dining room",
    caption: "Banquettes and stone walls.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-010.webp",
    alt: "GUSI first-floor dining room set for service with table lamps glowing on each white-clothed table",
    caption: "Tables before service.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-011.webp",
    alt: "GUSI dining room before service in Greenwich Village — table lamps, framed art, and warm Slavic-tavern lighting",
    caption: "An afternoon, an empty room.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-012.webp",
    alt: "High cocktail tables and stools framed by deep red velvet curtains and antique gilt frames in GUSI's first-floor lounge",
    caption: "Cocktails by the velvet curtain.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-013.webp",
    alt: "Vertical view of GUSI's bar in Greenwich Village — backlit bottle wall and warm tavern lighting at 432 Sixth Avenue, NYC",
    caption: "The bar, top to bottom.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-014.webp",
    alt: "Wide view of GUSI's second-floor dining room beneath a hand-painted ceiling, with three vibrant commissioned paintings along the wall and white-clothed tables surrounded by ivory chairs",
    caption: "Second floor — beneath the painted ceiling.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-015.webp",
    alt: "Tall vertical view of GUSI's second-floor dining room — original commissioned paintings, ivory leather chairs, and white linens beneath the hand-painted ceiling",
    caption: "Light and color upstairs.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-016.webp",
    alt: "Second-floor dining room at GUSI in afternoon daylight, with curved ivory chairs and the painted ceiling overhead",
    caption: "Second floor — daylight through the windows.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-017.webp",
    alt: "Window-side seating upstairs at GUSI with daylight pouring in over white-clothed tables",
    caption: "By the window upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-018.webp",
    alt: "Hand-painted ceiling above white-clothed tables on GUSI's second floor, with original commissioned paintings along the wall",
    caption: "Beneath the painted ceiling, by day.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-019.webp",
    alt: "Afternoon view across GUSI's second-floor dining room with a large commissioned painting on the wall and ivory chairs around white-linen tables",
    caption: "An afternoon upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-020.webp",
    alt: "Round dining table framed by a gold velvet curtain at the window of GUSI's second floor, beneath the hand-painted ceiling",
    caption: "A round table by the curtain.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-021.webp",
    alt: "View from GUSI's upstairs windows onto Greenwich Village brownstones, with white-clothed tables in the foreground",
    caption: "West, toward the Village.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-022.webp",
    alt: "Detail of GUSI's second-floor dining room — original commissioned paintings, white linens, and curved ivory leather chairs at 432 Sixth Avenue, NYC",
    caption: "Detail upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-023.webp",
    alt: "Vertical view of GUSI's second-floor dining room with a large gilt mirror and hand-painted ceiling",
    caption: "Upstairs, full height.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-photo-024.webp",
    alt: "Curved ivory chairs around white-linen tables on GUSI's second floor, with daylight windows along the side wall",
    caption: "Curved chairs and white linens.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-025.webp",
    alt: "Plated dishes and stemware on a white-clothed GUSI dining table — modern Eastern European cuisine with a Mediterranean touch",
    caption: "A table set for dinner.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-026.webp",
    alt: "GUSI bar after dark — red leather stools lined along the candlelit counter with the glowing bottle wall behind",
    caption: "Red stools along the bar.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-photo-027.webp",
    alt: "Side view of the candlelit bar at GUSI with red stools and warm pendant lighting in Greenwich Village",
    caption: "The bar at twilight.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-photo-028.webp",
    alt: "Looking into GUSI from Sixth Avenue at dusk — the warm-lit bar room and dining space visible through the storefront windows of 432 Sixth Avenue, Greenwich Village",
    caption: "Looking in from Sixth Avenue.",
    width: 1600,
    height: 1200,
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
