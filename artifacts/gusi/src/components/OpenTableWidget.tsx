import { useEffect, useRef, useState } from "react";
import { OPEN_TABLE_RID, OPEN_TABLE_URL } from "@/lib/constants";

const WIDGET_LOADER_SRC =
  `https://www.opentable.com/widget/reservation/loader` +
  `?rid=${OPEN_TABLE_RID}` +
  `&type=standard&theme=standard&color=1&dark=false&iframe=true` +
  `&domain=com&lang=en-US&newtab=false` +
  `&ot_source=${encodeURIComponent("Restaurant website")}` +
  `&cfe=true`;

export function OpenTableWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector('script[data-ot-loader="gusi"]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = WIDGET_LOADER_SRC;
    script.async = true;
    script.dataset.otLoader = "gusi";
    container.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={sentinelRef} className="mb-4 sm:mb-6 w-fit mx-auto sm:mx-0">
      <section
        aria-label="OpenTable reservation widget"
        className="border border-gusi-gold/30 overflow-hidden inline-block leading-[0]"
      >
        <div
          ref={containerRef}
          aria-live="polite"
          aria-busy={shouldLoad}
          className="opentable-widget-container block [&_iframe]:block [&_iframe]:align-bottom"
        >
          <span className="sr-only">
            {shouldLoad
              ? "Loading OpenTable reservation widget."
              : "OpenTable reservation widget will load when visible."}
          </span>
        </div>
      </section>
      <p className="mt-2 text-xs text-gusi-porcelain/50 font-light italic text-center sm:text-left">
        Bookings open through OpenTable. Widget not loading?{" "}
        <a
          href={OPEN_TABLE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline hover:text-gusi-gold focus:outline-none focus-visible:text-gusi-gold"
        >
          Reserve on OpenTable directly
        </a>
        .
      </p>
    </div>
  );
}
