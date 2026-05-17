import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  span?: "tall" | "wide" | "normal";
};

// Captions describe the two floors at 432 Sixth Avenue: a candlelit Eastern European
// tavern bar downstairs (GUSI / The Geese) and a light-filled ceremonial dining room
// upstairs (Lebedi / The Swans).
const IMAGES: GalleryImage[] = [
  {
    src: "/gallery/gusi-1f-04.webp",
    alt: "Wide view of GUSI's first-floor dining and bar room in Greenwich Village, New York — candlelit Eastern European tavern atmosphere at 432 Sixth Avenue",
    caption: "Inside GUSI, Greenwich Village.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-1f-02.webp",
    alt: "GUSI first-floor dining room — tables set with warm lighting in a modern Eastern European restaurant in Greenwich Village",
    caption: "Tables set for the evening.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-03.webp",
    alt: "GUSI first-floor dining room detail — original art on hand-troweled walls in a modern Eastern European tavern bar in Greenwich Village, NYC",
    caption: "Art and texture on the first floor.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-11.webp",
    alt: "Vertical view of GUSI's first-floor interior — candlelit Eastern European bar and dining space at 432 Sixth Avenue, NYC",
    caption: "A corner of the first floor.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-1f-08.webp",
    alt: "GUSI first-floor tavern bar in Greenwich Village — long counter and bottle display in a warmly lit Eastern European restaurant",
    caption: "The first-floor bar.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-1f-06.webp",
    alt: "Close-up of GUSI's first-floor bar — infused vodkas, natural wines, and rare Eastern European spirits in Greenwich Village",
    caption: "Infused vodkas and natural wines.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-09.webp",
    alt: "Bar seating at GUSI's first-floor tavern — candlelight and warm pendant lighting at 432 Sixth Avenue, NYC",
    caption: "Candlelight along the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-10.webp",
    alt: "Long view down GUSI's first-floor bar in Greenwich Village — wood counter and warm tavern lighting",
    caption: "Down the length of the bar.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-13.webp",
    alt: "GUSI first-floor dining detail — banquette seating and textured walls in the candlelit Eastern European dining room",
    caption: "Banquettes and textured walls.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-14.webp",
    alt: "GUSI first-floor dining room set for service — warm tavern lighting and Eastern European hospitality in Greenwich Village",
    caption: "Tables before service.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-15.webp",
    alt: "GUSI first-floor dining room before service in Greenwich Village — framed art and warm Slavic-tavern lighting at 432 Sixth Avenue",
    caption: "An afternoon, an empty room.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-16.webp",
    alt: "First-floor lounge at GUSI — high tables and warm lighting in a modern Eastern European tavern bar in Greenwich Village",
    caption: "First-floor lounge.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-17.webp",
    alt: "Vertical view of GUSI's first-floor bar in Greenwich Village — warm tavern lighting at 432 Sixth Avenue, NYC",
    caption: "The bar, top to bottom.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-1f-20.webp",
    alt: "Panoramic view of GUSI's first-floor dining and bar room in Greenwich Village — candlelit Eastern European tavern at 432 Sixth Avenue, NYC",
    caption: "The first floor, end to end.",
    width: 2048,
    height: 1152,
    span: "wide",
  },
  {
    src: "/gallery/gusi-1f-18.webp",
    alt: "Tall vertical view inside GUSI's first floor — warm Eastern European tavern lighting and textured stone walls",
    caption: "Warmth and texture downstairs.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-1f-19.webp",
    alt: "GUSI first-floor dining and bar detail in Greenwich Village — candlelit tables and Eastern European atmosphere",
    caption: "An evening, downstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-1f-21.webp",
    alt: "Vertical first-floor view at GUSI — Eastern European tavern bar and dining at 432 Sixth Avenue, Greenwich Village",
    caption: "First-floor light.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/gallery/gusi-2f-01.webp",
    alt: "Wide view of GUSI's second-floor dining room (Lebedi / The Swans) — original commissioned paintings, ivory chairs, white linens, and a hand-painted ceiling in Greenwich Village",
    caption: "Second floor — Lebedi / The Swans.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-2f-03.webp",
    alt: "GUSI's second-floor dining room — white-clothed tables and ivory leather chairs beneath a hand-painted ceiling at 432 Sixth Avenue, NYC",
    caption: "Tables set upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-04.webp",
    alt: "Second-floor dining room at GUSI in afternoon daylight — curved ivory chairs and a hand-painted ceiling overhead",
    caption: "Second floor — daylight through the windows.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-06.webp",
    alt: "Window-side seating upstairs at GUSI with daylight pouring in over white-clothed tables in Greenwich Village",
    caption: "By the window upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-07.webp",
    alt: "Hand-painted ceiling and commissioned paintings above white-clothed tables on GUSI's second floor in Greenwich Village",
    caption: "Beneath the painted ceiling.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-05.webp",
    alt: "Tall vertical view of GUSI's second-floor dining room (Lebedi / The Swans) — original paintings, ivory leather chairs, and white linens beneath a hand-painted ceiling",
    caption: "Light and color upstairs.",
    width: 1200,
    height: 1600,
    span: "tall",
  },
  {
    src: "/gallery/gusi-2f-08.webp",
    alt: "Afternoon view across GUSI's second-floor dining room with original commissioned paintings and white-linen tables at 432 Sixth Avenue, NYC",
    caption: "An afternoon upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-10.webp",
    alt: "Detail of GUSI's second-floor dining room — original commissioned paintings, white linens, and curved ivory leather chairs in Greenwich Village",
    caption: "Detail upstairs.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/gusi-2f-09.webp",
    alt: "Wide view of GUSI's second-floor dining room (Lebedi / The Swans) beneath a hand-painted ceiling at 432 Sixth Avenue, Greenwich Village, NYC",
    caption: "The Swans, in full.",
    width: 1600,
    height: 1200,
    span: "wide",
  },
  {
    src: "/gallery/gusi-1f-12.webp",
    alt: "Vertical first-floor view at GUSI — warm Eastern European tavern lighting in Greenwich Village",
    caption: "Downstairs, vertical.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/gallery/gusi-1f-22.webp",
    alt: "Looking into GUSI's first floor at dusk — the warm-lit bar room and dining space at 432 Sixth Avenue, Greenwich Village",
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
