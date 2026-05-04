import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setVisible(window.scrollY > SHOW_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50
        w-12 h-12 sm:w-14 sm:h-14
        flex items-center justify-center
        bg-gusi-charcoal/90 backdrop-blur-sm
        border border-gusi-gold/40
        text-gusi-gold
        rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.45)]
        hover:bg-gusi-gold hover:text-gusi-charcoal hover:border-gusi-gold
        focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      <img
        src="/gusi-logo.webp"
        alt=""
        aria-hidden="true"
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <span
        aria-hidden="true"
        className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center
          bg-gusi-gold text-gusi-charcoal
          rounded-full
          border border-gusi-charcoal
          shadow-sm
          group-hover:bg-gusi-charcoal group-hover:text-gusi-gold group-hover:border-gusi-gold
          transition-colors duration-300"
      >
        <ChevronUp className="w-3 h-3" strokeWidth={2.5} />
      </span>
    </button>
  );
}
