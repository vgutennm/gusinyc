import { Star } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gusi-charcoal text-gusi-porcelain/40 py-10 sm:py-12 border-t border-gusi-ivory/5 text-sm font-light tracking-wide">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left">
        <div className="font-serif tracking-[0.2em] text-gusi-porcelain/60">GUSI</div>
        <div>432 Sixth Avenue, New York, NY 10011</div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Leave a Google review for GUSI Restaurant"
          className="inline-flex items-center gap-2 border border-gusi-gold/40 text-gusi-gold px-4 py-2 uppercase tracking-[0.2em] text-[11px] hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
        >
          <Star className="w-3 h-3 fill-current" strokeWidth={1.5} aria-hidden="true" />
          <span>Google Review</span>
        </a>
        <div className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} GUSI. Site updates coming soon.</div>
      </div>
    </footer>
  );
}
