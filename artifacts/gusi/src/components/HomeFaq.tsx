import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Faq = { question: string; answer: string };

const FAQS: Faq[] = [
  {
    question: "What Type of Cuisine Does GUSI Serve?",
    answer:
      "GUSI serves modern Eastern European cuisine with Mediterranean influences, featuring hand folded dumplings, seasonal borscht, house made spreads, and thoughtfully crafted dishes prepared with time honored techniques and quality ingredients.",
  },
  {
    question: "Where Is GUSI Located?",
    answer:
      "GUSI is located at 432 Sixth Avenue in Greenwich Village, just two blocks from the West 4th Street subway and within walking distance of NYU and Washington Square Park.",
  },
  {
    question: "Does GUSI Accept Reservations?",
    answer:
      "Yes. Reservations can be made through OpenTable, and walk ins are always welcome whenever seating is available. We recommend booking in advance, especially for weekends and special occasions.",
  },
  {
    question: "Does GUSI Serve Cocktails and Wine?",
    answer:
      "Absolutely. Our beverages feature house infused vodka, handcrafted seasonal cocktails, and a carefully curated selection of Georgian wine and natural wines, thoughtfully chosen to complement our menu.",
  },
  {
    question: "Is GUSI Suitable for Date Nights and Group Dining?",
    answer:
      "Yes. Whether you're planning an intimate date night, a relaxed dinner with friends, or a larger celebration, GUSI offers welcoming spaces for every occasion. We also have a private dining floor that accommodates events for up to 70 guests.",
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 bg-gusi-porcelain text-gusi-charcoal bg-texture-paper border-t border-gusi-gold/15"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-burgundy mb-5 leading-tight"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-gusi-gold/50 mx-auto" />
        </motion.div>

        <div className="divide-y divide-gusi-gold/20 border-y border-gusi-gold/20">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left font-serif text-lg sm:text-xl text-gusi-charcoal hover:text-gusi-burgundy transition-colors focus:outline-none focus-visible:text-gusi-burgundy"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className={`h-5 w-5 shrink-0 text-gusi-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 sm:pb-6"
                >
                  <p className="text-base sm:text-lg leading-relaxed text-gusi-charcoal/80 font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
