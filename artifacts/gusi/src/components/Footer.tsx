export function Footer() {
  return (
    <footer className="bg-gusi-charcoal text-gusi-porcelain/40 py-10 sm:py-12 border-t border-gusi-ivory/5 text-sm font-light tracking-wide">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
        <div className="font-serif tracking-[0.2em] text-gusi-porcelain/60">GUSI</div>
        <div>432 Sixth Avenue, New York, NY 10011</div>
        <div className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} GUSI. Site updates coming soon.</div>
      </div>
    </footer>
  );
}
