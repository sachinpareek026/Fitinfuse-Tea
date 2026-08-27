import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF9F5] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            COMMON INQUIRIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#123524] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#687168] font-sans">
            Everything you need to know about FitInFuse Stress Relief Infusion.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F4F0E6] rounded-2xl border border-[#123524]/10 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl font-normal text-[#123524]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/60 text-[#123524] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#123524] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#687168] font-sans leading-relaxed border-t border-[#123524]/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact direct link */}
        <div className="mt-12 text-center text-xs text-[#687168] font-sans">
          Have an additional question? Reach our team directly at{' '}
          <a href="mailto:info@fitinfuse.in" className="text-[#123524] font-semibold underline underline-offset-2 hover:text-[#1E4A32]">
            info@fitinfuse.in
          </a>
        </div>

      </div>
    </section>
  );
};
