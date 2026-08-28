import React, { useState, useEffect } from 'react';
import { BREWING_STEPS } from '../data/content';
import { Play, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const BrewingRitual: React.FC = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(180); // 3 minutes steeping timer
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timerActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    } else if (secondsLeft === 0 && timerActive) {
      setTimerActive(false);
      setTimerCompleted(true);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsLeft]);

  const resetTimer = () => {
    setTimerActive(false);
    setSecondsLeft(180);
    setTimerCompleted(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <section id="ritual" className="py-24 sm:py-32 bg-[#F4F0E6] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            THE MINDFUL INFUSION GUIDE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight">
            MAKE SPACE FOR THE RITUAL.
          </h2>
          <p className="text-base text-[#687168] font-sans max-w-xl mx-auto pt-2">
            A quiet moment prepared with simple intention. Follow these three steps to experience the complete botanical bouquet.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BREWING_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#FAF9F5] rounded-3xl p-8 border border-[#123524]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-5xl font-light text-[#123524] group-hover:text-[#6F8F62] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C7A35A] uppercase">
                    STEP {step.number}
                  </span>
                </div>

                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 relative bg-[#123524]/5">
                  <OptimizedImage
                    src={step.iconImage}
                    fallbackSrc={step.fallbackImage}
                    alt={step.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-2xl font-serif font-medium text-[#123524] mb-3">
                  {step.title}
                </h3>

                <p className="text-base font-sans font-medium text-[#172019] mb-2 leading-relaxed">
                  {step.instruction}
                </p>

                <p className="text-xs text-[#687168] font-sans leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#123524]/10 flex items-center gap-2 text-[11px] text-[#6F8F62] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mindful Detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Calming Steeping Companion */}
        <div className="bg-[#123524] text-[#FAF9F5] rounded-3xl p-8 sm:p-12 border border-[#C7A35A]/30 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C7A35A] font-semibold">
              RITUAL COMPANION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#FAF9F5]">
              Steep In Serenity
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF9F5]/75 font-sans max-w-md">
              Start this gentle steeping timer as you pour hot water. Take slow, mindful breaths while the botanicals awaken.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="relative w-32 h-32 rounded-full border-4 border-[#1E4A32] flex items-center justify-center bg-[#0B1A12] shadow-inner">
              <div 
                className="absolute inset-0 rounded-full border-4 border-[#C7A35A] transition-all"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${secondsLeft > 90 ? '100% 0%, 100% 100%' : '100% 0%'}, ${secondsLeft > 0 ? '50% 100%' : '50% 50%'})`
                }}
              />
              <div className="text-center z-10">
                <span className="font-serif text-3xl font-light text-[#FAF9F5] tracking-tight block">
                  {formatTime(secondsLeft)}
                </span>
                <span className="text-[9px] font-sans tracking-widest text-[#C7A35A] uppercase">
                  {timerCompleted ? 'READY' : timerActive ? 'STEEPING' : 'CALM TIMER'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTimerActive(!timerActive)}
                className="px-5 py-2 rounded-full bg-[#FAF9F5] text-[#123524] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4F0E6] transition-colors flex items-center gap-2 shadow"
              >
                {timerActive ? 'Pause' : timerCompleted ? 'Steep Again' : 'Begin Steep'}
              </button>
              <button
                onClick={resetTimer}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
