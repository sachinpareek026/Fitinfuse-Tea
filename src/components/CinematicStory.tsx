import React, { useState, useEffect } from 'react';
import { CINEMATIC_STORY } from '../data/content';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const CinematicStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % CINEMATIC_STORY.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = CINEMATIC_STORY[activeStep];

  return (
    <section className="py-24 sm:py-32 bg-[#0B1A12] text-[#FAF9F5] overflow-hidden relative border-y border-[#123524]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E4A32]/30 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C7A35A]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.35em] text-[#C7A35A] font-semibold">
              CINEMATIC BOTANICAL JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF9F5] tracking-tight">
              The Evolution of Calm
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF9F5]/70 font-sans max-w-lg">
              Witness the transformation from sealed pyramid pouch to soothing amber-gold infusion.
            </p>
          </div>

          {/* Stepper Timeline Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-sans tracking-wider uppercase flex items-center gap-2 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#C7A35A]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#C7A35A]" />
                  <span>Autoplay Sequence</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : CINEMATIC_STORY.length - 1))}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-serif font-medium text-[#C7A35A]">
                {activeStep + 1} / {CINEMATIC_STORY.length}
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % CINEMATIC_STORY.length)}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Sequence Stage Tabs */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-10 hide-scrollbar gap-2 sm:gap-4 border-b border-white/10">
          {CINEMATIC_STORY.map((step, idx) => (
            <button
              key={step.stage}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`flex-shrink-0 py-3 px-4 sm:px-6 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                activeStep === idx
                  ? 'bg-[#1E4A32] text-[#FAF9F5] border border-[#C7A35A]/50 shadow-md scale-105'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-[9px] text-[#C7A35A]">0{idx + 1}</span>
              <span className="font-semibold">{step.stage}</span>
            </button>
          ))}
        </div>

        {/* Featured Visual Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#123524]/60 rounded-3xl p-6 sm:p-10 border border-[#1E4A32] shadow-2xl backdrop-blur-md">
          
          {/* Main Visual Imagery Container */}
          <div className="lg:col-span-7 h-[360px] sm:h-[460px] rounded-2xl overflow-hidden relative shadow-inner">
            <img
              src={current.image}
              alt={current.title}
              key={current.id}
              className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A12]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-[#123524]/80 backdrop-blur-md rounded-full text-[10px] font-sans uppercase tracking-[0.25em] text-[#C7A35A] mb-2 border border-[#C7A35A]/30">
                STAGE 0{current.id} • {current.stage}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                {current.title}
              </h3>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-[0.25em] text-[#6F8F62] uppercase font-semibold">
                {current.subtitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#FAF9F5] leading-tight">
                {current.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#FAF9F5]/80 font-sans leading-relaxed">
              {current.description}
            </p>

            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 text-xs text-[#FAF9F5]/70 space-y-1">
              <div className="flex items-center gap-2 text-[#C7A35A] font-semibold tracking-wider uppercase text-[10px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sensory Experience</span>
              </div>
              <p>
                {activeStep === 0 && 'Airtight nitrogen flush preserves pure essential oils of peppermint and chamomile flowers.'}
                {activeStep === 1 && 'Crisp natural menthol vapors open the airway as floral notes softly follow.'}
                {activeStep === 2 && 'Whole, unprocessed botanical elements without artificial dust or tea waste.'}
                {activeStep === 3 && 'Pyramid mesh accommodates natural thermal expansion for optimal extraction.'}
                {activeStep === 4 && 'Water at 95°C gently activates water-soluble phytonutrients and aromatics.'}
                {activeStep === 5 && 'Rich amber liquor with clarity and golden warmth.'}
                {activeStep === 6 && 'Caffeine-free calmness settling over the senses.'}
              </p>
            </div>

            {/* Quick sequence indicator pill dots */}
            <div className="flex items-center gap-2 pt-2">
              {CINEMATIC_STORY.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveStep(i);
                    setIsPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i ? 'w-8 bg-[#C7A35A]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to stage ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
