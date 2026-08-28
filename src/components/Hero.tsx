import React from 'react';
import { ArrowDownRight, Sparkles, Leaf } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ProductPackaging } from './ProductPackaging';

interface HeroProps {
  onAddToCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAddToCart }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-[#FAF9F5] overflow-hidden border-b border-[#123524]/10">
      {/* Editorial Ambient Background Texture & Subtle Botanical Watermark */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none overflow-hidden select-none">
        <img 
          src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1600&q=80" 
          alt="Botanical background" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline, Subtitle, & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123524]/5 border border-[#123524]/15">
              <Leaf className="w-3.5 h-3.5 text-[#6F8F62]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#123524] uppercase">
                NEW BOTANICAL INFUSION
              </span>
            </div>

            {/* Large Cormorant Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-light text-[#123524] tracking-tight leading-[1.02]">
                Slow Down. <br />
                <span className="italic font-normal text-[#1E4A32]">Sip Into Calm.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-[#687168] max-w-xl leading-relaxed font-normal">
              Meet <strong className="text-[#172019] font-medium">{BRAND_INFO.productName}</strong> — a thoughtfully crafted botanical blend for your everyday ritual of slowing down.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#shop"
                className="px-8 py-4 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 text-center"
              >
                <span>SHOP STRESS RELIEF INFUSION</span>
                <ArrowDownRight className="w-4 h-4 text-[#C7A35A]" />
              </a>

              <a
                href="#botanicals"
                className="px-8 py-4 bg-transparent hover:bg-[#123524]/5 text-[#123524] border border-[#123524]/20 hover:border-[#123524] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 text-center"
              >
                EXPLORE THE BOTANICALS
              </a>
            </div>

            {/* Micro Highlights strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#123524]/10 max-w-lg">
              <div>
                <span className="block font-serif text-2xl font-normal text-[#123524]">09</span>
                <span className="block text-[10px] font-sans tracking-widest text-[#687168] uppercase font-medium mt-0.5">
                  Whole Botanicals
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-[#123524]">15</span>
                <span className="block text-[10px] font-sans tracking-widest text-[#687168] uppercase font-medium mt-0.5">
                  Pyramid Bags
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-[#123524]">0%</span>
                <span className="block text-[10px] font-sans tracking-widest text-[#687168] uppercase font-medium mt-0.5">
                  Caffeine
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic FitInFuse Product Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Product Packaging with authentic details */}
              <ProductPackaging size="hero" showBadges={true} />

              {/* Discreet Brand Stamp Tag */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#F4F0E6] border border-[#123524]/15 px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#123524] uppercase">
                  {BRAND_INFO.descriptor}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle scroll prompt */}
        <div className="mt-16 sm:mt-20 flex justify-between items-center text-xs text-[#687168] pt-6 border-t border-[#123524]/10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6F8F62]" />
            <span className="font-sans uppercase tracking-widest text-[10px] font-medium text-[#123524]">
              {BRAND_INFO.flavour}
            </span>
          </div>

          <a 
            href="#story" 
            className="flex items-center gap-2 hover:text-[#123524] transition-colors group cursor-pointer"
          >
            <span className="font-sans tracking-widest uppercase text-[10px]">Scroll down to explore ritual</span>
            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
