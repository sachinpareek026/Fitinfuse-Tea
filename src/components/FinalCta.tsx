import React from 'react';
import { BRAND_INFO } from '../data/content';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { ProductPackaging } from './ProductPackaging';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#123524] text-[#FAF9F5] relative overflow-hidden border-b border-[#1E4A32]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#6F8F62]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-[10px] font-sans uppercase tracking-[0.35em] text-[#C7A35A] font-semibold">
              BEGIN YOUR RITUAL
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF9F5] tracking-tight leading-[1.08]">
              Your quiet moment <br />
              <span className="italic font-normal text-[#E6D38B]">starts here.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#FAF9F5]/80 font-sans max-w-lg mx-auto lg:mx-0">
              Discover {BRAND_INFO.productName}. Nine thoughtful botanicals in a single soothing infusion.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#shop"
                className="w-full sm:w-auto px-8 py-4 bg-[#FAF9F5] hover:bg-[#F4F0E6] text-[#123524] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <span>SHOP STRESS RELIEF INFUSION</span>
                <ArrowDownRight className="w-4 h-4 text-[#123524]" />
              </a>

              <a
                href="#ritual"
                className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/5 text-[#FAF9F5] border border-white/20 rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors text-center"
              >
                VIEW BREWING STEPS
              </a>
            </div>
          </div>

          {/* Right Column: Subtle Authentic Product Packaging Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <ProductPackaging size="md" showBadges={false} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
