import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-gusi-charcoal/95 backdrop-blur-md border-gusi-wine/30 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-center sm:justify-start">
        <Link
          href="/"
          aria-label="GUSI — return to homepage"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal"
        >
          <img
            src="/brand/gusi-wordmark-light.svg"
            alt="GUSI"
            width={5102}
            height={1862}
            className="block h-5 lg:h-7 w-auto select-none"
            draggable={false}
          />
        </Link>
      </div>
    </header>
  );
}
