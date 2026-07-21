import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = { name: string; href: string; isRoute?: boolean };

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close the menu when viewport crosses into desktop (full nav appears at ≥1280px).
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(min-width: 1280px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileMenuOpen(false);
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Use bare hash links on home so the browser scrolls without leaving the SPA;
  // use absolute "/#anchor" links from other pages so the browser navigates home and scrolls.
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const navLinks: NavLink[] = [
    { name: "Story", href: "/story", isRoute: true },
    { name: "Space", href: anchor("space") },
    { name: "Menu", href: "/menu", isRoute: true },
    { name: "Bar", href: anchor("bar") },
    { name: "Playlist", href: anchor("playlist") },
    { name: "Press", href: "/press", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Events", href: "/events/private-events", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-gusi-charcoal/95 backdrop-blur-md border-gusi-wine/30 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo — always returns to homepage */}
        <Link
          href="/"
          aria-label="GUSI — return to top of homepage"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
        >
          <img
            src="/brand/gusi-goose-emblem.webp"
            alt="GUSI Restaurant logo — a hand-drawn brown and amber goose standing inside a thin amber circle, the brand mark of GUSI Eastern European restaurant and bar in Greenwich Village, NYC"
            title="GUSI Restaurant — Greenwich Village, NYC"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="block h-10 lg:h-12 w-auto select-none"
            draggable={false}
          />
        </Link>

        {/* Desktop Nav (≥1280px so the full link set + inKind + Reserve has room and never crowds the logo) */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-gusi-porcelain/80 hover:text-gusi-gold transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-gusi-porcelain/80 hover:text-gusi-gold transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ),
          )}
          <a
            href="https://app.inkind.com/offer/OGWQC4LM"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border border-gusi-gold text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300"
          >
            inKind $50 Off
          </a>
          <Link
            href="/reservations"
            className="border border-gusi-gold text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile + Tablet Toggle (<1280px) */}
        <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
          <a
            href="https://app.inkind.com/offer/OGWQC4LM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap min-h-11 border border-gusi-gold text-gusi-gold px-3 py-2 uppercase tracking-[0.18em] text-[11px] leading-none hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            inKind $50 Off
          </a>
          <Link
            href="/reservations"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap min-h-11 border border-gusi-gold text-gusi-gold px-3 py-2 uppercase tracking-[0.18em] text-[11px] leading-none hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Reserve
          </Link>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap min-h-11 border border-gusi-gold text-gusi-gold px-3 py-2 uppercase tracking-[0.18em] text-[11px] leading-none hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Menu
          </Link>
          <Link
            href="/events/private-events"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap min-h-11 border border-gusi-gold text-gusi-gold px-3 py-2 uppercase tracking-[0.18em] text-[11px] leading-none hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Events
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-gusi-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu — portaled to <body> so the scrolled header's backdrop-filter
          can't trap this fixed overlay in a containing block (which made items
          appear only at the top of the page). */}
      {typeof document !== "undefined" &&
        createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-gusi-charcoal flex flex-col px-6 bg-texture-dark overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <div className="flex items-center justify-between py-5">
              <Link
                href="/"
                onClick={closeMobile}
                className="font-serif text-xl tracking-[0.2em] text-gusi-ivory uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
                aria-label="GUSI — return to homepage"
              >
                GUSI
              </Link>
              <button
                onClick={closeMobile}
                className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-gusi-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" strokeWidth={1} />
              </button>
            </div>

            <nav className="flex flex-col gap-7 mt-6 items-center flex-1 justify-center pb-12">
              {navLinks.map((link, idx) => {
                const motionProps = {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.05 + idx * 0.05, duration: 0.3 },
                  className:
                    "font-serif text-[2rem] leading-tight text-gusi-ivory hover:text-gusi-gold transition-colors uppercase tracking-[0.15em] focus:outline-none focus-visible:text-gusi-gold",
                  onClick: closeMobile,
                };
                return link.isRoute ? (
                  <motion.span key={link.name} {...motionProps}>
                    <Link href={link.href} onClick={closeMobile}>
                      {link.name}
                    </Link>
                  </motion.span>
                ) : (
                  <motion.a key={link.name} href={link.href} {...motionProps}>
                    {link.name}
                  </motion.a>
                );
              })}
              <div className="w-12 h-px bg-gusi-gold/40 my-2" />
              <Link
                href="/reservations"
                onClick={closeMobile}
                className="mt-2 border border-gusi-gold text-gusi-gold px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
              >
                Reserve a Table
              </Link>
              <a
                href="https://app.inkind.com/offer/OGWQC4LM"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="border border-gusi-gold text-gusi-gold px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
              >
                inKind $50 Off
              </a>
            </nav>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
