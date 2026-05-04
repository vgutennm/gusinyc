import {
  OPEN_TABLE_URL,
  GOOGLE_MAPS_URL,
  APPLE_MAPS_URL,
  GOOGLE_REVIEW_URL,
  GOOGLE_BUSINESS_URL,
  GOOGLE_MAPS_EMBED_URL,
  SOCIAL_LINKS,
  SOCIAL_HANDLE,
  RESTAURANT_EMAIL,
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_TEL,
  PRESS_EMAIL,
  HOURS,
  BRUNCH_LAUNCH_LABEL,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { Star, Store, MapPin } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="py-20 md:py-24 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div id="reservations" className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-32 scroll-mt-20">

          {/* Reservations & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8 leading-tight">Reserve your table.</h2>
            <p className="text-gusi-porcelain/70 font-light mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Reservations will be available through OpenTable.
            </p>
            <a
              href={OPEN_TABLE_URL}
              className="inline-block w-full sm:w-auto text-center bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-ivory transition-colors duration-300 mb-12 sm:mb-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Reserve on OpenTable
            </a>

            <div className="space-y-7 sm:space-y-8">
              <div>
                <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-2 sm:mb-3">Hours</h3>
                <dl className="font-light text-gusi-porcelain/80 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="text-gusi-porcelain/60 text-sm sm:w-24 shrink-0">Daily</dt>
                    <dd>{HOURS.daily}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="text-gusi-porcelain/60 text-sm sm:w-24 shrink-0">Brunch</dt>
                    <dd>
                      Sat &amp; Sun, {HOURS.brunch}
                      <span className="block text-gusi-gold/70 text-xs italic mt-0.5">
                        Beginning {BRUNCH_LAUNCH_LABEL}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-2 sm:mb-3">Contact</h3>
                <a
                  href={`tel:${RESTAURANT_PHONE_TEL}`}
                  className="font-light text-gusi-porcelain/80 hover:text-gusi-gold transition-colors block focus:outline-none focus-visible:text-gusi-gold"
                >
                  {RESTAURANT_PHONE}
                </a>
                <a
                  href={`mailto:${RESTAURANT_EMAIL}`}
                  className="font-light text-gusi-porcelain/80 hover:text-gusi-gold transition-colors block mt-1 break-all focus:outline-none focus-visible:text-gusi-gold"
                >
                  {RESTAURANT_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8 leading-tight">Location</h2>
            <div className="mb-6 sm:mb-8">
              <p className="text-lg font-light tracking-wide mb-2">GUSI</p>
              <p className="text-gusi-porcelain/80 font-light leading-relaxed">
                432 Sixth Avenue<br />
                New York, NY 10011<br />
                Greenwich Village
              </p>
              <p className="text-gusi-gold/70 text-sm mt-4 italic font-light">Two blocks from West 4th Street subway station.</p>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-gusi-gold/20 bg-gusi-charcoal/50">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  title="Map showing GUSI Restaurant at 432 Sixth Avenue, New York"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full grayscale-[0.35] contrast-[0.95] brightness-[0.95]"
                  style={{ border: 0 }}
                />
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gusi-gold/80 hover:text-gusi-gold transition-colors focus:outline-none focus-visible:text-gusi-gold"
              >
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Open in Google Maps</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-gusi-gold/30 text-gusi-gold px-6 py-3 uppercase tracking-[0.2em] text-xs hover:bg-gusi-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
              >
                Google Maps
              </a>
              <a
                href={APPLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-gusi-gold/30 text-gusi-gold px-6 py-3 uppercase tracking-[0.2em] text-xs hover:bg-gusi-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
              >
                Apple Maps
              </a>
            </div>

            <div className="mb-12 sm:mb-16">
              <h3 className="text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3 sm:mb-4">Loved your visit?</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Leave a Google review for GUSI Restaurant"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto text-center bg-gusi-gold text-gusi-charcoal px-7 py-3.5 uppercase tracking-[0.2em] text-xs hover:bg-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-ivory/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
                >
                  <Star className="w-3.5 h-3.5 fill-current" strokeWidth={1.5} aria-hidden="true" />
                  <span>Leave a Google Review</span>
                </a>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View GUSI Restaurant's Google Business profile"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center border border-gusi-gold/30 text-gusi-gold px-6 py-3 uppercase tracking-[0.2em] text-xs hover:bg-gusi-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
                >
                  <Store className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>View on Google</span>
                </a>
              </div>
              <p className="mt-3 text-xs text-gusi-porcelain/50 font-light italic">
                Your words help our flock take flight.
              </p>
            </div>

            <div className="pt-10 sm:pt-12 border-t border-gusi-gold/10">
              <h3 className="font-serif text-2xl mb-3 sm:mb-4">Follow the opening.</h3>
              <p className="text-gusi-porcelain/70 font-light mb-6 sm:mb-8 text-sm leading-relaxed">
                Opening updates, menu previews, bar notes, and press announcements
                — find us at <span className="text-gusi-gold">{SOCIAL_HANDLE}</span>.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-[0.2em] text-xs text-gusi-gold">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer noopener" className="hover:text-gusi-ivory transition-colors focus:outline-none focus-visible:text-gusi-ivory">Instagram</a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer noopener" className="hover:text-gusi-ivory transition-colors focus:outline-none focus-visible:text-gusi-ivory">TikTok</a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer noopener" className="hover:text-gusi-ivory transition-colors focus:outline-none focus-visible:text-gusi-ivory">Facebook</a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer noopener" className="hover:text-gusi-ivory transition-colors focus:outline-none focus-visible:text-gusi-ivory">YouTube</a>
              </div>
              <div className="mt-7 sm:mt-8">
                <a
                  href={`mailto:${PRESS_EMAIL}`}
                  className="text-gusi-porcelain/60 hover:text-gusi-ivory text-sm font-light transition-colors break-all focus:outline-none focus-visible:text-gusi-ivory"
                >
                  Press inquiries: {PRESS_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
