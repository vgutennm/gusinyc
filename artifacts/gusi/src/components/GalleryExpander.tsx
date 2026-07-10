import { useCallback, useRef, useState } from "react";

// Shared expand/collapse logic for the homepage galleries (Signature Dishes and
// Inside GUSI). Keeps only the first `initialCount` items mounted until the
// visitor opts in, so hidden images are never fetched during initial render.
export function useGalleryExpansion<T>(items: T[], initialCount = 8) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canExpand = items.length > initialCount;
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  const toggle = useCallback(() => {
    setExpanded((prev) => {
      const next = !prev;
      if (!next) {
        // Collapsing — return the visitor near the top of the section so the
        // page does not jump unpredictably once the tall list disappears.
        requestAnimationFrame(() => {
          sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return next;
    });
  }, []);

  return { expanded, visibleItems, canExpand, toggle, sectionRef };
}

type GalleryExpandButtonProps = {
  expanded: boolean;
  onClick: () => void;
  /** id of the grid this control expands, for aria-controls. */
  controls: string;
};

export function GalleryExpandButton({ expanded, onClick, controls }: GalleryExpandButtonProps) {
  return (
    <div className="mt-10 sm:mt-12 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        aria-controls={controls}
        className="border border-gusi-gold text-gusi-gold px-10 py-3.5 uppercase tracking-[0.25em] text-xs sm:text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
      >
        {expanded ? "Show Less" : "Load More"}
      </button>
    </div>
  );
}
