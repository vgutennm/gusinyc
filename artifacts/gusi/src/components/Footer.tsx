import { Star, Store } from "lucide-react";
import { Link } from "wouter";
import { GOOGLE_REVIEW_URL, GOOGLE_BUSINESS_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gusi-charcoal text-gusi-porcelain/40 py-10 sm:py-12 border-t border-gusi-ivory/5 text-sm font-light tracking-wide">
      <div className="container mx-auto px-6">
        <div className="flex justify-center pb-8 mb-8 border-b border-gusi-ivory/10">
          <div className="w-full max-w-xl flex flex-col items-center text-center gap-4 rounded-2xl border border-gusi-gold/25 bg-gusi-gold/[0.04] px-6 py-8 sm:px-10 sm:py-9">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/inkind-app-icon.png"
                alt="inKind"
                width={445}
                height={438}
                className="block h-9 w-auto select-none"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <span className="uppercase tracking-[0.28em] text-[10px] text-gusi-porcelain/50">
                Courtesy of inKind
              </span>
            </div>
            <span className="uppercase tracking-[0.3em] text-[11px] text-gusi-gold">
              Welcome Gift
            </span>
            <div className="flex flex-col items-center gap-1">
              <span className="font-serif text-4xl sm:text-5xl leading-none text-gusi-ivory">
                Claim Your $50
              </span>
              <span className="font-serif text-lg sm:text-xl italic text-gusi-porcelain/70">
                Off Your Next $150+ Meal
              </span>
            </div>
            <p className="max-w-md text-[13px] sm:text-sm leading-relaxed text-gusi-porcelain/60">
              Here&rsquo;s $50 toward your next $150+ visit at GUSI when you pay
              using the inKind app.
            </p>
            <a
              href="https://app.inkind.com/offer/OGWQC4LM"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Claim your $50 welcome gift with inKind (opens in a new tab)"
              className="mt-1 inline-flex items-center justify-center border border-gusi-gold bg-gusi-gold/95 text-gusi-charcoal px-8 py-3 uppercase tracking-[0.22em] text-[11px] font-medium hover:bg-gusi-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
            >
              Claim $50 with inKind
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6 text-center lg:text-left">
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
        <nav className="flex items-center gap-4 sm:gap-6 uppercase tracking-[0.2em] text-[11px]">
          <a
            href="/#playlist"
            className="text-gusi-porcelain/60 hover:text-gusi-gold transition-colors focus:outline-none focus-visible:text-gusi-gold"
          >
            Playlist
          </a>
          <Link
            href="/events/private-events"
            className="text-gusi-porcelain/60 hover:text-gusi-gold transition-colors focus:outline-none focus-visible:text-gusi-gold"
          >
            Private Events
          </Link>
        </nav>
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
        <div className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
          <span>&copy; {new Date().getFullYear()} GUSI</span>
          <span aria-hidden="true" className="hidden sm:inline opacity-40">·</span>
          <span>
            Website by{" "}
            <a
              href="https://setupshoponline.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gusi-gold/80 hover:text-gusi-gold underline-offset-4 hover:underline transition-colors focus:outline-none focus-visible:underline"
            >
              SetUpShopOnline.com
            </a>
          </span>
        </div>
        </div>
      </div>
    </footer>
  );
}
