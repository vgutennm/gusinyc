import { useState, useEffect } from "react";
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

  // Auto-close mobile/tablet menu when viewport crosses into desktop (e.g. iPad rotation portrait→landscape).
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(min-width: 1024px)");
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
    { name: "Story", href: anchor("story") },
    { name: "Space", href: anchor("space") },
    { name: "Menu", href: anchor("menu") },
    { name: "Bar", href: anchor("bar") },
    { name: "Press", href: "/press", isRoute: true },
    { name: "Visit", href: anchor("visit") },
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
          aria-label="GUSI — return to homepage"
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

        {/* Desktop Nav (≥1024px so 4 nav links + Press + Visit + Reserve don't crowd at tablet widths) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
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
            href={anchor("reservations")}
            className="ml-4 border border-gusi-gold text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile + Tablet Toggle (<1024px) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <a
            href={anchor("reservations")}
            className="inline-flex items-center justify-center min-h-10 border border-gusi-gold text-gusi-gold px-4 py-2 uppercase tracking-[0.18em] text-[11px] leading-none hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
          >
            Reserve
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gusi-ivory p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                className="text-gusi-ivory p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
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
              <a
                href={anchor("reservations")}
                onClick={closeMobile}
                className="mt-2 border border-gusi-gold text-gusi-gold px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
              >
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
