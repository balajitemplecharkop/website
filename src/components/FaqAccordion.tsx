import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  className?: string;
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions", className = "" }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({});

  const toggle = (idx: number) => {
    setOpenIndexes((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`w-full max-w-3xl mx-auto my-10 bg-cream rounded-2xl p-4 sm:p-6 shadow-sm ${className}`}>
      <h3 className="text-2xl font-bold text-deep-brown mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-light-saffron p-0 overflow-hidden transition-all">
            <button
              className="w-full flex items-center justify-between px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-peacock-green group"
              onClick={() => toggle(idx)}
              aria-expanded={!!openIndexes[idx]}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="text-left text-base sm:text-lg font-semibold text-deep-brown group-hover:text-peacock-green transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`ml-2 h-5 w-5 text-peacock-green transition-transform duration-300 ${openIndexes[idx] ? "rotate-180" : "rotate-0"}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`px-4 pb-4 text-deep-brown/80 text-base transition-all duration-300 ease-in-out ${openIndexes[idx] ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              style={{ willChange: 'max-height, opacity' }}
            >
              {openIndexes[idx] && <div>{faq.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 