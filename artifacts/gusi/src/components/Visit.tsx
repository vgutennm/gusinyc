import { OPEN_TABLE_URL, GOOGLE_MAPS_URL, APPLE_MAPS_URL, SOCIAL_LINKS, RESTAURANT_EMAIL, PRESS_EMAIL } from "@/lib/constants";
import { motion } from "framer-motion";

export function Visit() {
  return (
    <section id="visit" className="py-24 bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Reservations & Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl mb-8">Reserve your table.</h2>
            <p className="text-gusi-porcelain/70 font-light mb-8">
              Reservations will be available through OpenTable.
            </p>
            <a
              href={OPEN_TABLE_URL}
              className="inline-block bg-gusi-gold text-gusi-charcoal px-8 py-4 uppercase tracking-widest text-sm hover:bg-gusi-ivory transition-colors duration-300 mb-16"
            >
              Reserve on OpenTable
            </a>

            <div className="space-y-8">
              <div>
                <h3 className="text-gusi-gold uppercase tracking-widest text-xs mb-3">Hours</h3>
                <p className="font-light text-gusi-porcelain/80">Coming soon.</p>
              </div>
              <div>
                <h3 className="text-gusi-gold uppercase tracking-widest text-xs mb-3">Contact</h3>
                <p className="font-light text-gusi-porcelain/80">Coming soon.</p>
                <a href={`mailto:${RESTAURANT_EMAIL}`} className="font-light text-gusi-porcelain/80 hover:text-gusi-gold transition-colors block mt-1">
                  {RESTAURANT_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl mb-8">Location</h2>
            <div className="mb-8">
              <p className="text-lg font-light tracking-wide mb-2">GUSI</p>
              <p className="text-gusi-porcelain/80 font-light">432 Sixth Avenue<br/>New York, NY 10011<br/>Greenwich Village</p>
              <p className="text-gusi-gold/70 text-sm mt-4 italic font-light">Two blocks from West 4th Street subway station.</p>
            </div>
            
            <div className="flex gap-4 mb-16">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="border border-gusi-gold/30 text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold/10 transition-colors">
                Google Maps
              </a>
              <a href={APPLE_MAPS_URL} target="_blank" rel="noreferrer" className="border border-gusi-gold/30 text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold/10 transition-colors">
                Apple Maps
              </a>
            </div>

            <div className="pt-12 border-t border-gusi-gold/10">
              <h3 className="font-serif text-2xl mb-4">Follow the opening.</h3>
              <p className="text-gusi-porcelain/70 font-light mb-8 text-sm">
                Opening updates, menu previews, bar notes, and press announcements will be shared here.
              </p>
              <div className="flex flex-wrap gap-6 uppercase tracking-widest text-xs text-gusi-gold">
                <a href={SOCIAL_LINKS.instagram} className="hover:text-gusi-ivory transition-colors">Instagram</a>
                <a href={SOCIAL_LINKS.tiktok} className="hover:text-gusi-ivory transition-colors">TikTok</a>
                <a href={SOCIAL_LINKS.facebook} className="hover:text-gusi-ivory transition-colors">Facebook</a>
                <a href={SOCIAL_LINKS.youtube} className="hover:text-gusi-ivory transition-colors">YouTube</a>
              </div>
              <div className="mt-8">
                <a href={`mailto:${PRESS_EMAIL}`} className="text-gusi-porcelain/60 hover:text-gusi-ivory text-sm font-light transition-colors">
                  Press Inquiries: {PRESS_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
