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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-gusi-ivory uppercase">
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
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={OPEN_TABLE_URL}
            className="border border-gusi-gold text-gusi-gold px-4 py-1.5 uppercase tracking-widest text-[10px] hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors"
          >
            Reserve
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gusi-ivory p-1"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gusi-charcoal flex flex-col pt-20 px-6 pb-6 bg-texture-dark"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-gusi-ivory p-2"
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>

            <nav className="flex flex-col gap-8 mt-12 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-gusi-ivory hover:text-gusi-gold transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={OPEN_TABLE_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 border border-gusi-gold text-gusi-gold px-12 py-4 uppercase tracking-widest text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors"
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
