import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

export const EditorialStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F4F0E6] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top metadata tags inspired by reference */}
        <div className="flex justify-between items-center text-xs font-sans tracking-[0.25em] text-[#687168] uppercase pb-8 border-b border-[#123524]/10 mb-12 sm:mb-16">
          <span>HERBAL INFUSION RITUAL</span>
          <span className="flex items-center gap-1.5 text-[#123524]">
            <MapPin className="w-3.5 h-3.5 text-[#6F8F62]" />
            <span>JAIPUR • NOIDA</span>
          </span>
        </div>

        {/* Main 2-Column Split: Editorial Copy vs Numerical Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline and Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
              THE FITINFUSE RITUAL
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight leading-[1.1]">
              From botanicals <br />
              <span className="italic">to your quiet moment.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#687168] font-sans leading-relaxed max-w-xl pt-2">
              FitInFuse brings thoughtfully composed botanicals together in a peppermint-forward herbal infusion for a simple everyday ritual.
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-sans tracking-wider text-[#123524]/80">
              <span className="w-8 h-px bg-[#123524]/40" />
              <span>Crafted for mindful pauses & natural restoration</span>
            </div>
          </div>

          {/* Right Column: Large Elegant Numerical Facts */}
          <div className="lg:col-span-5 space-y-8 lg:pl-8 lg:border-l lg:border-[#123524]/15">
            
            {/* Fact 1 */}
            <div className="flex items-baseline justify-between border-b border-[#123524]/10 pb-5">
              <div className="font-serif text-5xl sm:text-6xl font-light text-[#123524] tracking-tight">
                09
              </div>
              <div className="text-right">
                <span className="block text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#123524]">
                  BOTANICALS
                </span>
                <span className="text-[11px] text-[#687168] font-sans">
                  Pure Whole Herbs & Petals
                </span>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="flex items-baseline justify-between border-b border-[#123524]/10 pb-5">
              <div className="font-serif text-5xl sm:text-6xl font-light text-[#123524] tracking-tight">
                15
              </div>
              <div className="text-right">
                <span className="block text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#123524]">
                  SERVINGS
                </span>
                <span className="text-[11px] text-[#687168] font-sans">
                  Spacious Pyramid Tea Bags
                </span>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="flex items-baseline justify-between border-b border-[#123524]/10 pb-5">
              <div className="font-serif text-5xl sm:text-6xl font-light text-[#123524] tracking-tight">
                30<span className="text-3xl font-sans font-light">g</span>
              </div>
              <div className="text-right">
                <span className="block text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#123524]">
                  NET WEIGHT
                </span>
                <span className="text-[11px] text-[#687168] font-sans">
                  Freshly Sealed Botanical Blend
                </span>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="flex items-baseline justify-between pb-2">
              <div className="font-serif text-4xl sm:text-5xl font-light text-[#123524] tracking-tight">
                NO
              </div>
              <div className="text-right">
                <span className="block text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#6F8F62]">
                  CAFFEINE
                </span>
                <span className="text-[11px] text-[#687168] font-sans">
                  Naturally Restorative & Gentle
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
