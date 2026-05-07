export function HoursContact() {
  return (
    <section className="bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10 py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="mb-12">
          <h2 className="text-gusi-gold uppercase tracking-[0.3em] text-xs font-light mb-8">
            Hours
          </h2>
          <dl className="space-y-4 font-light inline-block text-left">
            <div className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-6 items-baseline">
              <dt className="text-gusi-porcelain/70">Mon&ndash;Fri</dt>
              <dd className="text-gusi-ivory text-lg">4:00 pm &ndash; Midnight</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-6 items-baseline">
              <dt className="text-gusi-porcelain/70">Sat &amp; Sun</dt>
              <dd className="text-gusi-ivory text-lg">12:00 pm &ndash; Midnight</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-6 items-baseline">
              <dt className="text-gusi-porcelain/70">Brunch</dt>
              <dd>
                <div className="text-gusi-ivory text-lg">Sat &amp; Sun, 11:30 am &ndash; 4:00 pm</div>
                <div className="text-gusi-gold/70 text-sm italic mt-1">
                  Beginning Saturday, May 23, 2026
                </div>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-gusi-gold uppercase tracking-[0.3em] text-xs font-light mb-8">
            Contact
          </h2>
          <ul className="space-y-3 font-light text-lg">
            <li>
              <a
                href="tel:+16463705413"
                className="text-gusi-ivory hover:text-gusi-gold transition-colors"
              >
                +1 (646) 370-5413
              </a>
            </li>
            <li>
              <a
                href="mailto:gagaga@gusi.nyc"
                className="text-gusi-ivory hover:text-gusi-gold transition-colors"
              >
                gagaga@gusi.nyc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
