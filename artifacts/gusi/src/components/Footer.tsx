import { Star, Store } from "lucide-react";
import { GOOGLE_REVIEW_URL, GOOGLE_BUSINESS_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gusi-charcoal text-gusi-porcelain/40 py-10 sm:py-12 border-t border-gusi-ivory/5 text-sm font-light tracking-wide">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left">
        <div className="flex items-center">
          <img
            src="/brand/gusi-wordmark-light.svg"
            alt="GUSI"
            width={5102}
            height={1862}
            className="block h-4 w-auto opacity-60"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>432 Sixth Avenue, New York, NY 10011</div>
        <div className="flex items-center gap-2">
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
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View GUSI Restaurant's Google Business profile"
            title="View on Google"
            className="inline-flex items-center justify-center w-9 h-9 border border-gusi-gold/40 text-gusi-gold hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            <Store className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
        <div className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} GUSI</div>
      </div>
    </footer>
  );
}
