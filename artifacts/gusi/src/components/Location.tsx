export function Location() {
  return (
    <section className="bg-gusi-charcoal text-gusi-ivory bg-texture-dark border-t border-gusi-gold/10 py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8 leading-tight">
          Location
        </h2>
        <p className="text-lg font-light tracking-wide mb-2">GUSI</p>
        <p className="text-gusi-porcelain/80 font-light leading-relaxed">
          432 Sixth Avenue<br />
          New York, NY 10011<br />
          Greenwich Village
        </p>
        <p className="text-gusi-gold/70 text-sm mt-4 italic font-light">
          Two blocks from West 4th Street subway station.
        </p>

        <div className="mt-10 sm:mt-12">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-gusi-gold/20 bg-gusi-charcoal/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2525712828447!2d-73.9987295!3d40.734467599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259cc0147933b%3A0x7b62a93b12b0fe62!2sGUSI!5e0!3m2!1sen!2sus!4v1778182763862!5m2!1sen!2sus"
              title="Map showing GUSI Restaurant at 432 Sixth Avenue, New York"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full grayscale-[0.35] contrast-[0.95] brightness-[0.95]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
