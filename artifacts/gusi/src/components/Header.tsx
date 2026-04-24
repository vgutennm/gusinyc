import { useState, useEffect } from "react";
import { OPEN_TABLE_URL } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Space", href: "#space" },
    { name: "Menu", href: "#menu" },
    { name: "Bar", href: "#bar" },
    { name: "Visit", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-gusi-charcoal/95 backdrop-blur-md border-gusi-wine/30 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-3xl tracking-[0.2em] text-gusi-ivory uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal">
          GUSI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gusi-porcelain/80 hover:text-gusi-gold transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href={OPEN_TABLE_URL}
            className="ml-4 border border-gusi-gold text-gusi-gold px-6 py-2 uppercase tracking-widest text-xs hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <a
            href={OPEN_TABLE_URL}
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
              <span className="font-serif text-xl tracking-[0.2em] text-gusi-ivory uppercase">
                GUSI
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gusi-ivory p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 rounded-sm"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" strokeWidth={1} />
              </button>
            </div>

            <nav className="flex flex-col gap-7 mt-6 items-center flex-1 justify-center pb-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-[2rem] leading-tight text-gusi-ivory hover:text-gusi-gold transition-colors uppercase tracking-[0.15em] focus:outline-none focus-visible:text-gusi-gold"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="w-12 h-px bg-gusi-gold/40 my-2" />
              <a
                href={OPEN_TABLE_URL}
                onClick={() => setMobileMenuOpen(false)}
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
