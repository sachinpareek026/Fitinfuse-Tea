import React from 'react';
import { Sparkles, Flower2, Heart } from 'lucide-react';

export const LargeImageStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            NATURE IN REPOSE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight">
            Cultivated In Harmony
          </h2>
          <p className="text-base text-[#687168] font-sans">
            From sunshine on chamomile petals to freshly ground ashwagandha root, every element tells a story of quiet care.
          </p>
        </div>

        {/* Editorial Overlapping Image Gallery Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Landscape Photo */}
          <div className="lg:col-span-8 h-[400px] sm:h-[520px] rounded-3xl overflow-hidden relative shadow-xl group border border-[#123524]/10">
            <img
              src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1600&q=80"
              alt="Lush botanical lavender & herbal field"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-lg">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#E6D38B] font-semibold block mb-2">
                SERENE BOTANICAL SANCTUARY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light leading-snug">
                Where clean soil and gentle air give birth to pure aroma.
              </h3>
            </div>
          </div>

          {/* Side Supporting Visual Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Supporting Card */}
            <div className="h-60 sm:h-64 rounded-3xl overflow-hidden relative shadow-md group border border-[#123524]/10">
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80"
                alt="Rose petals and delicate herbs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#E6D38B] block">Delicate Flora</span>
                <p className="font-serif text-lg font-light">Dried Damascena Rose</p>
              </div>
            </div>

            {/* Bottom Supporting Card (Editorial Quote) */}
            <div className="bg-[#123524] text-[#FAF9F5] p-8 rounded-3xl border border-[#C7A35A]/30 shadow-md flex flex-col justify-between h-60 sm:h-64">
              <div className="flex justify-between items-center">
                <Flower2 className="w-5 h-5 text-[#C7A35A]" />
                <span className="text-[9px] font-sans uppercase tracking-widest text-[#6F8F62] font-semibold">
                  LEAF OF FITNESS
                </span>
              </div>

              <div>
                <p className="font-serif text-xl sm:text-2xl font-light italic text-[#FAF9F5] leading-snug">
                  &ldquo;A single cup to center your thoughts and soften the day.&rdquo;
                </p>
              </div>

              <div className="text-[10px] font-sans uppercase tracking-widest text-[#C7A35A]">
                FITINFUSE BOTANICAL PHILOSOPHY
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
