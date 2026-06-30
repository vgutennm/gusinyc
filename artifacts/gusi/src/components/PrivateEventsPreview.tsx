import { Link } from "wouter";
import { motion } from "framer-motion";
import { RESTAURANT_EMAIL } from "@/lib/constants";
import privateFloorImage from "@assets/GUSI-NYC-03_1777934185727.webp";

const CONTACT_MAILTO = `mailto:${RESTAURANT_EMAIL}?subject=${encodeURIComponent(
  "Private Event Inquiry — GUSI",
)}`;

export function PrivateEventsPreview() {
  return (
    <section
      id="private-events"
      aria-labelledby="private-events-heading"
      className="relative py-20 sm:py-24 md:py-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <img
          src={privateFloorImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={765}
          height={1020}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gusi-charcoal/85 via-gusi-charcoal/80 to-gusi-charcoal" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gusi-gold/30 to-transparent z-10"
      />
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-gusi-gold uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-5">
            Private Events in Greenwich Village
          </span>
          <h2
            id="private-events-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-4 leading-tight"
          >
            Private Floor. Events. Celebrations.
          </h2>
          <div className="w-12 h-px bg-gusi-gold/50 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-gusi-porcelain/85 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Planning a celebration, private party, client meeting, corporate
            dinner, or special gathering? GUSI offers a private floor in
            Greenwich Village for up to 70 guests, creating a warm and memorable
            setting for personal events, business functions, and shared dining
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            <Link
              href="/events/private-events"
              className="inline-flex items-center justify-center min-h-11 bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Explore Private Events
            </Link>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center justify-center min-h-11 border border-gusi-gold/50 text-gusi-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-gold/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
