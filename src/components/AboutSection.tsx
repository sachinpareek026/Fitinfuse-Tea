import React from 'react';
import { BRAND_INFO } from '../data/content';
import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F4F0E6] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123524]/5 border border-[#123524]/10">
            <Leaf className="w-3.5 h-3.5 text-[#6F8F62]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#123524] uppercase">
              ABOUT FITINFUSE
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-[#123524] tracking-tight leading-[1.05]">
            Wellness, <br />
            <span className="italic font-normal text-[#1E4A32]">steeped simply.</span>
          </h2>

          {/* Core Brand Narrative */}
          <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#172019] leading-relaxed max-w-2xl mx-auto font-light">
            &ldquo;FitInFuse brings thoughtfully composed botanical infusions into modern everyday rituals — creating simple moments to pause, brew and reconnect.&rdquo;
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-6 text-xs font-sans tracking-widest uppercase text-[#687168]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F8F62]" />
              {BRAND_INFO.descriptor}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A35A]" />
              {BRAND_INFO.category}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
