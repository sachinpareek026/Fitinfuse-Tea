import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const VisualCardStrip: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] overflow-hidden border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            VISUAL JOURNAL
          </span>
          <span className="text-xs font-sans tracking-widest text-[#687168] hidden sm:inline">
            THE LEAF OF FITNESS ATMOSPHERE
          </span>
        </div>
      </div>

      {/* Horizontal Strip Container - Scrollable on mobile, grid/flex on desktop */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 hide-scrollbar snap-x snap-mandatory">
          
          {/* CARD 1: Large Botanical Harvest Photograph */}
          <div className="min-w-[280px] sm:min-w-[340px] md:w-[28%] flex-shrink-0 h-[440px] sm:h-[480px] rounded-3xl overflow-hidden relative shadow-lg group snap-start bg-[#123524]/5">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80"
              alt="Botanical Chamomile & Herbs"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-medium text-[#E6D38B] block mb-1">
                PURE HARVEST
              </span>
              <p className="font-serif text-xl font-light">Mindfully gathered flowers & leaves</p>
            </div>
          </div>

          {/* CARD 2: Deep Green Background + Editorial Typography */}
          <div className="min-w-[280px] sm:min-w-[340px] md:w-[28%] flex-shrink-0 h-[440px] sm:h-[480px] rounded-3xl bg-[#123524] text-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between shadow-xl relative border border-[#C7A35A]/20 snap-start group">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C7A35A] font-semibold">
                FITINFUSE ESSENCE
              </span>
              <span className="w-2 h-2 rounded-full bg-[#6F8F62]" />
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-serif font-light leading-snug tracking-tight text-[#FAF9F5]">
                Nine botanicals. <br />
                <span className="italic text-[#E6D38B]">One beautiful ritual.</span>
              </h3>
              <p className="text-xs text-[#FAF9F5]/70 font-sans mt-4 leading-relaxed">
                Peppermint, chamomile, lavender and six harmonizing herbs in complete caffeine-free balance.
              </p>
            </div>

            <div>
              <a
                href="#botanicals"
                className="w-12 h-12 rounded-full bg-[#FAF9F5]/10 group-hover:bg-[#FAF9F5] text-[#FAF9F5] group-hover:text-[#123524] flex items-center justify-center transition-all duration-300 border border-white/20"
                aria-label="Explore botanicals"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CARD 3: Botanical / Tea Infusion Photograph */}
          <div className="min-w-[280px] sm:min-w-[340px] md:w-[28%] flex-shrink-0 h-[440px] sm:h-[480px] rounded-3xl overflow-hidden relative shadow-lg group snap-start bg-[#123524]/5">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
              alt="Warm amber herbal tea infusion"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-medium text-[#E6D38B] block mb-1">
                WARMTH & CLARITY
              </span>
              <p className="font-serif text-xl font-light">Natural amber steeping liquor</p>
            </div>
          </div>

          {/* CARD 4: Cream / Pale Botanical Green Background */}
          <div className="min-w-[280px] sm:min-w-[340px] md:w-[28%] flex-shrink-0 h-[440px] sm:h-[480px] rounded-3xl bg-[#F4F0E6] text-[#123524] p-8 sm:p-10 flex flex-col justify-between shadow-md relative border border-[#123524]/10 snap-start group">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6F8F62] font-semibold">
                DAILY PAUSE
              </span>
              <span className="text-xs font-serif italic text-[#123524]/60">Leaf of Fitness</span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-serif font-light leading-snug tracking-tight text-[#123524]">
                Slow down. <br />
                <span className="italic font-normal text-[#1E4A32]">Sip into calm.</span>
              </h3>
              <p className="text-xs text-[#687168] font-sans mt-4 leading-relaxed">
                Take five minutes out of the noise. Allow hot water and fragrant steam to ground your day.
              </p>
            </div>

            <div>
              <a
                href="#ritual"
                className="w-12 h-12 rounded-full bg-[#123524] group-hover:bg-[#1E4A32] text-[#FAF9F5] flex items-center justify-center transition-all duration-300 shadow"
                aria-label="View brewing ritual"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
