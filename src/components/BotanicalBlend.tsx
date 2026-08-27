import React, { useState } from 'react';
import { BOTANICALS } from '../data/content';
import { Botanical } from '../types';
import { Sparkles, Info, X } from 'lucide-react';

export const BotanicalBlend: React.FC = () => {
  const [selectedBotanical, setSelectedBotanical] = useState<Botanical | null>(null);

  return (
    <section id="botanicals" className="py-24 sm:py-32 bg-[#FAF9F5] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            <span>THE BOTANICAL BLEND</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight leading-[1.08]">
            Nine botanicals. <br />
            <span className="italic font-normal">Thoughtfully together.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#687168] font-sans leading-relaxed pt-2">
            Selected for purity, aroma, and delicate taste harmony. No fillers, no flavourings, no caffeine.
          </p>
        </div>

        {/* 9 Botanicals Grid - 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BOTANICALS.map((botanical, index) => (
            <div
              key={botanical.id}
              onClick={() => setSelectedBotanical(botanical)}
              className="group bg-[#F4F0E6] rounded-3xl p-4 sm:p-5 border border-[#123524]/10 hover:border-[#123524]/30 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Rounded Corners */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#123524]/5">
                <img
                  src={botanical.image}
                  alt={botanical.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Index tag */}
                <div className="absolute top-4 left-4 bg-[#FAF9F5]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-semibold text-[#123524] tracking-widest uppercase">
                  0{index + 1}
                </div>

                {/* Subtle inspect icon */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#123524] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Info className="w-4 h-4" />
                </div>
              </div>

              {/* Text Information */}
              <div className="pt-5 pb-2 px-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-serif font-medium text-[#123524] group-hover:text-[#1E4A32] transition-colors">
                    {botanical.name}
                  </h3>
                  <span className="text-[11px] italic text-[#687168] font-serif">
                    {botanical.scientificName}
                  </span>
                </div>

                <p className="text-sm text-[#687168] font-sans mt-2 leading-relaxed">
                  {botanical.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#123524]/10 flex items-center justify-between text-xs text-[#123524]/80">
                  <span className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#6F8F62]">
                    Profile
                  </span>
                  <span className="text-[11px] font-sans text-right truncate max-w-[200px]">
                    {botanical.aromaProfile.split('with')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botanical Harmony Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#123524] text-[#FAF9F5] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C7A35A]/30 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C7A35A] font-semibold">
              BOTANICAL INTEGRITY
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-light text-[#FAF9F5]">
              Whole flowers, roots, and fragrant leaves.
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF9F5]/80 font-sans max-w-xl">
              Blended exclusively for FitInFuse Stress Relief Infusion. No synthetic flavours, no caffeine, no green or black tea bases.
            </p>
          </div>

          <a
            href="#shop"
            className="px-8 py-3.5 bg-[#FAF9F5] hover:bg-[#F4F0E6] text-[#123524] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow flex-shrink-0"
          >
            EXPERIENCE THE BLEND
          </a>
        </div>

      </div>

      {/* Botanical Detail Modal */}
      {selectedBotanical && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#123524]/20 relative">
            <button
              onClick={() => setSelectedBotanical(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 w-full relative">
              <img
                src={selectedBotanical.image}
                alt={selectedBotanical.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent" />
            </div>

            <div className="p-8 -mt-8 relative z-10 space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6F8F62] font-semibold block">
                    BOTANICAL ELEMENT
                  </span>
                  <h3 className="text-3xl font-serif font-medium text-[#123524]">
                    {selectedBotanical.name}
                  </h3>
                </div>
                <span className="text-sm italic font-serif text-[#687168]">
                  {selectedBotanical.scientificName}
                </span>
              </div>

              <div className="p-4 bg-[#F4F0E6] rounded-2xl border border-[#123524]/10 space-y-2">
                <span className="text-[10px] font-sans font-semibold tracking-widest text-[#123524] uppercase block">
                  Aromatic & Sensory Character
                </span>
                <p className="text-sm font-sans text-[#172019] leading-relaxed">
                  {selectedBotanical.aromaProfile}
                </p>
              </div>

              <p className="text-sm text-[#687168] font-sans leading-relaxed">
                {selectedBotanical.description} Thoughtfully integrated into the FitInFuse Stress Relief Infusion formula without added sweeteners or caffeine.
              </p>

              <button
                onClick={() => setSelectedBotanical(null)}
                className="w-full py-3 bg-[#123524] text-[#FAF9F5] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#1E4A32] transition-colors"
              >
                Close Botanical Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
