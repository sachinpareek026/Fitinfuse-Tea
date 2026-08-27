import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Sparkles, Coffee, Heart, Volume2, VolumeX, ArrowRight, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FitInFuseScrollExperienceProps {
  onOpenExplore: () => void;
}

export const FitInFuseScrollExperience: React.FC<FitInFuseScrollExperienceProps> = ({ onOpenExplore }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Measure window scroll smoothly
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;
          setScrollProgress(progress);

          // Map progress to steps 1..7
          if (progress < 0.14) {
            setActiveStep(1);
          } else if (progress < 0.29) {
            setActiveStep(2);
          } else if (progress < 0.44) {
            setActiveStep(3);
          } else if (progress < 0.59) {
            setActiveStep(4);
          } else if (progress < 0.74) {
            setActiveStep(5);
          } else if (progress < 0.88) {
            setActiveStep(6);
          } else {
            setActiveStep(7);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jump to specific step by scrolling
  const scrollToStep = (stepNumber: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const stepPositions: { [key: number]: number } = {
      1: 0.0,
      2: 0.20,
      3: 0.36,
      4: 0.52,
      5: 0.67,
      6: 0.82,
      7: 0.98,
    };
    const targetProgress = stepPositions[stepNumber] ?? 0;
    window.scrollTo({
      top: targetProgress * totalHeight,
      behavior: 'smooth',
    });
  };

  // Calming ambient sound synthesis
  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (isAudioPlaying) {
      if (audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsAudioPlaying(false);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      } else {
        const bufferSize = audioCtxRef.current.sampleRate * 2;
        const noiseBuffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.02;
          b6 = white * 0.115926;
        }

        const whiteNoise = audioCtxRef.current.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtxRef.current.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtxRef.current.currentTime);

        const gainNode = audioCtxRef.current.createGain();
        gainNode.gain.setValueAtTime(0.35, audioCtxRef.current.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtxRef.current.destination);

        whiteNoise.start(0);
        noiseNodeRef.current = whiteNoise;
      }
      setIsAudioPlaying(true);
    }
  };

  // Helper for opacity and translation calculations per step
  const getStepProgress = (start: number, end: number) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 1;
    return (scrollProgress - start) / (end - start);
  };

  // Step 1: 0.00 -> 0.14
  const step1Opacity = scrollProgress < 0.11 ? 1 : Math.max(0, 1 - (scrollProgress - 0.11) / 0.05);

  // Step 2 (Peppermint): 0.14 -> 0.28
  const step2In = getStepProgress(0.13, 0.19);
  const step2Out = scrollProgress > 0.27 ? Math.max(0, 1 - (scrollProgress - 0.27) / 0.05) : 1;
  const step2Opacity = step2In * step2Out;
  const step2X = (1 - step2In) * -35;

  // Step 3 (9 Botanicals): 0.29 -> 0.43
  const step3In = getStepProgress(0.28, 0.34);
  const step3Out = scrollProgress > 0.42 ? Math.max(0, 1 - (scrollProgress - 0.42) / 0.05) : 1;
  const step3Opacity = step3In * step3Out;
  const step3X = (1 - step3In) * 35;

  // Step 4 (No Caffeine): 0.44 -> 0.58
  const step4In = getStepProgress(0.43, 0.49);
  const step4Out = scrollProgress > 0.57 ? Math.max(0, 1 - (scrollProgress - 0.57) / 0.05) : 1;
  const step4Opacity = step4In * step4Out;
  const step4X = (1 - step4In) * -35;

  // Step 5 (For Every Moment): 0.59 -> 0.73
  const step5In = getStepProgress(0.58, 0.64);
  const step5Out = scrollProgress > 0.72 ? Math.max(0, 1 - (scrollProgress - 0.72) / 0.05) : 1;
  const step5Opacity = step5In * step5Out;
  const step5X = (1 - step5In) * 35;

  // Step 6 (For Everyone): 0.74 -> 0.88
  const step6In = getStepProgress(0.73, 0.79);
  const step6Out = scrollProgress > 0.87 ? Math.max(0, 1 - (scrollProgress - 0.87) / 0.05) : 1;
  const step6Opacity = step6In * step6Out;
  const step6Y = (1 - step6In) * 25;

  // Step 7 (Final Product Moment & CTA): 0.88 -> 1.00
  const step7In = getStepProgress(0.87, 0.93);
  const step7Opacity = step7In;
  const step7Y = (1 - step7In) * 20;

  // Scroll-driven dynamic 3D rotation angle (e.g. 360deg full rotation across scroll timeline)
  const productRotationY = (scrollProgress * 360 * 1.5) % 360;
  const productTiltZ = Math.sin(scrollProgress * Math.PI * 4) * 2.5;


  return (
    <div className="relative bg-[#071C13] text-[#F4F0E5] selection:bg-[#C7A35A] selection:text-[#071C13] min-h-screen">
      {/* 1. TOP MINIMAL LUXURY HEADER (Fully Opaque, Crisp, Sharp, No Blur) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between pointer-events-none transition-all duration-300 bg-[#071C13] border-b border-[#C7A35A]/20 shadow-md">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="font-boris text-xl sm:text-2xl font-normal tracking-[0.22em] text-[#F4F0E5] uppercase">
            {BRAND_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-[9px] font-poppins font-semibold tracking-[0.25em] text-[#C7A35A] uppercase px-2.5 py-0.5 border border-[#C7A35A]/30 rounded-full bg-[#0D2F20]">
            {BRAND_INFO.descriptor}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-3 sm:gap-6">
          {/* Quick CTA to open Infusion Specs Drawer */}
          <button
            onClick={onOpenExplore}
            id="header-explore-btn"
            className="px-4 sm:px-6 py-2 bg-[#C7A35A] hover:bg-[#DFC07B] text-[#071C13] font-poppins text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 2. PROGRESS BAR & STEP INDICATORS (Right Side Floating Dot Navigation) */}
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <button
            key={num}
            onClick={() => scrollToStep(num)}
            id={`step-indicator-${num}`}
            className="group flex items-center justify-center cursor-pointer p-1.5 focus:outline-none"
            aria-label={`Jump to section ${num}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeStep === num
                  ? 'bg-[#C7A35A] scale-125 ring-4 ring-[#C7A35A]/25'
                  : 'bg-white/20 hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* 3. TALL SCROLL TRACK (Drives the smooth animation) */}
      <div className="relative h-[650vh] w-full">
        {/* STICKY VIEWPORT PINNED AT TOP: 100vh */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
          
          {/* A. Rich Deep Forest Green Botanical Atmosphere */}
          <div className="absolute inset-0 bg-[#071C13] pointer-events-none">
            {/* Soft Ambient Radial Vignette & Natural Depth */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, #0D2F20 0%, #082217 50%, #071C13 100%)'
              }}
            />
            {/* Soft Ambient Warm Amber / Gold Light Centered Behind Canister */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[620px] h-[340px] sm:h-[480px] md:h-[620px] bg-[#C7A35A]/14 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] bg-[#6F8F62]/18 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* B. MAIN PRODUCT VISUAL (Full-Fit in Dead Center between Header Bottom Line and Screen Bottom) */}
          <div 
            id="main-product-center-stage"
            className="relative z-20 flex-1 w-full max-h-screen pt-16 sm:pt-20 pb-4 px-4 sm:px-8 flex items-center justify-center pointer-events-none"
          >
            {/* Center Product Anchor - Pure Center Stage with 3D perspective and animated rotation */}
            <div className="relative flex items-center justify-center select-none w-full h-full max-w-5xl mx-auto [perspective:1200px]">
              <div 
                className="relative flex items-center justify-center w-full h-full transition-transform duration-100 ease-out will-change-transform animate-float-slow"
                style={{
                  transform: `rotateY(${productRotationY}deg) rotateZ(${productTiltZ}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  id="fitinfuse-hero-canister"
                  src="/product-canister.png"
                  alt="FitInFuse Stress Relief Infusion — Peppermint Flavour"
                  referrerPolicy="no-referrer"
                  className="h-full max-h-[calc(100vh-6rem)] w-auto max-w-[90vw] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] pointer-events-auto transition-all duration-300 origin-center scale-[0.8] md:scale-100 hover:scale-[0.83] md:hover:scale-[1.03]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('1000568378-removebg-preview.png')) {
                      target.src = '/1000568378-removebg-preview.png';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* C. SEQUENTIAL SCROLL-DRIVEN TEXT REVELATIONS */}
          <div className="absolute inset-0 z-30 pointer-events-none w-full h-full">
            
            {/* ---------------------------------------------------- */}
            {/* STEP 1: PRODUCT INTRODUCTION (Towering Title, Badges & Herbal Specs) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-1-product-intro"
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: step1Opacity,
                visibility: step1Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              {/* Left Flank: Main Title, Brand & Purity Badges */}
              <div className="absolute left-4 sm:left-10 md:left-14 lg:left-20 xl:left-24 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 max-w-[calc(100vw-2rem)] sm:max-w-xs md:max-w-sm lg:max-w-md text-center sm:text-left z-30 pointer-events-auto flex flex-col items-center sm:items-start">
                <div className="space-y-3 bg-[#071C13]/85 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/30 shadow-2xl sm:shadow-none w-full sm:w-auto">
                  <div className="space-y-1">
                    <span className="text-[11px] sm:text-xs font-sans font-black tracking-[0.35em] text-[#E5C989] uppercase block drop-shadow-sm">
                      {BRAND_INFO.name}
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4F0E5] tracking-tight leading-[1.05]">
                      STRESS RELIEF <br />
                      <span className="italic font-medium text-[#E5C989]">INFUSION</span>
                    </h1>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2.5 py-0.5">
                    <span className="h-[1.5px] w-8 bg-[#C7A35A]" />
                    <span className="text-[#E5C989] text-xs">❦</span>
                    <span className="h-[1.5px] w-8 bg-[#C7A35A]" />
                  </div>

                  <p className="text-xs sm:text-sm font-sans font-bold tracking-[0.2em] text-[#E5C989] uppercase">
                    {BRAND_INFO.flavour} <span className="text-[#F4F0E5]/40 mx-1">•</span> {BRAND_INFO.caffeine}
                  </p>

                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.18em] text-[#E5C989] uppercase">
                      15 Pyramid Bags
                    </span>
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.18em] text-[#E5C989] uppercase">
                      15 Servings (30g)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Flank: Herbal Purity & Botanical Synergy Specs */}
              <div className="hidden sm:flex absolute right-6 sm:right-10 md:right-14 lg:right-20 xl:right-24 top-1/2 -translate-y-1/2 max-w-[260px] sm:max-w-xs md:max-w-sm text-right z-30 pointer-events-auto flex-col items-end space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-sans font-black tracking-[0.3em] text-[#E5C989] uppercase block">
                    100% Herbal Purity
                  </span>
                  <p className="text-sm font-sans text-[#F4F0E5]/90 font-normal leading-relaxed">
                    Nine botanical synergy crafted for everyday moments of calmness, relaxation, and mental clarity.
                  </p>
                </div>
                <div className="text-xs font-sans font-bold tracking-[0.2em] text-[#E5C989] uppercase">
                  <span>Zero Caffeine · Pure Herbal</span>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 2: PEPPERMINT FLAVOUR (Left Side Vertically Centered) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-2-peppermint-reveal"
              className="absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 top-1/2 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto transition-all duration-200"
              style={{
                opacity: step2Opacity,
                transform: `translate(${step2X}px, -50%)`,
                visibility: step2Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              <div className="space-y-3.5 sm:space-y-4 bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20">
                {/* Gold Circle Badge with Leaf */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C7A35A] p-0.5 sm:p-1 flex items-center justify-center bg-[#071C13] shadow-[0_0_20px_rgba(199,163,90,0.2)]">
                  <div className="w-full h-full rounded-full border border-[#C7A35A]/40 flex items-center justify-center bg-[#0D2F20]">
                    <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A35A]" />
                  </div>
                </div>

                {/* Heading */}
                <div className="space-y-0.5">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#F4F0E5] tracking-tight leading-tight">
                    Peppermint <br />
                    <span className="italic text-[#C7A35A]">Flavour</span>
                  </h2>
                </div>

                {/* Decorative Gold Leaf Flourish Divider */}
                <div className="flex items-center gap-2 py-0.5">
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                  <span className="text-[#C7A35A] text-xs">❦</span>
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                </div>

                {/* Supporting Copy */}
                <p className="text-xs sm:text-sm md:text-base font-sans text-[#F4F0E5]/85 leading-relaxed font-light">
                  A fresh, cooling peppermint-forward herbal infusion that gently awakens clarity and refreshes your senses with every sip.
                </p>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 3: NINE BOTANICALS (Right Side Vertically Centered) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-3-botanicals-reveal"
              className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 top-1/2 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto transition-all duration-200"
              style={{
                opacity: step3Opacity,
                transform: `translate(${step3X}px, -50%)`,
                visibility: step3Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              <div className="space-y-3.5 sm:space-y-4 text-left sm:text-right flex flex-col sm:items-end bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20">
                {/* Gold Circle Badge with Blossom */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C7A35A] p-0.5 sm:p-1 flex items-center justify-center bg-[#071C13] shadow-[0_0_20px_rgba(199,163,90,0.2)]">
                  <div className="w-full h-full rounded-full border border-[#C7A35A]/40 flex items-center justify-center bg-[#0D2F20]">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A35A]" />
                  </div>
                </div>

                {/* Heading */}
                <div className="space-y-0.5">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#F4F0E5] tracking-tight leading-tight">
                    Nine Botanicals, <br />
                    <span className="italic text-[#C7A35A]">One Beautiful Blend</span>
                  </h2>
                </div>

                {/* Decorative Gold Leaf Flourish Divider */}
                <div className="flex items-center gap-2 py-0.5">
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                  <span className="text-[#C7A35A] text-xs">❦</span>
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                </div>

                {/* Supporting Copy */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm md:text-base font-sans text-[#F4F0E5]/90 font-light leading-relaxed">
                    Thoughtfully crafted with nine natural botanicals:
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm font-sans text-[#C7A35A] tracking-wide font-normal leading-relaxed">
                    Chamomile · Lavender · Hibiscus · Rose · Licorice <br className="hidden sm:block" />
                    Rooibos · Lemongrass · Ashwagandha · Peppermint
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 4: NO CAFFEINE (Left Side Vertically Centered) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-4-no-caffeine-reveal"
              className="absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 top-1/2 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto transition-all duration-200"
              style={{
                opacity: step4Opacity,
                transform: `translate(${step4X}px, -50%)`,
                visibility: step4Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              <div className="space-y-3.5 sm:space-y-4 bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20">
                {/* Gold Circle Badge with Steaming Cup */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C7A35A] p-0.5 sm:p-1 flex items-center justify-center bg-[#071C13] shadow-[0_0_20px_rgba(199,163,90,0.2)]">
                  <div className="w-full h-full rounded-full border border-[#C7A35A]/40 flex items-center justify-center bg-[#0D2F20]">
                    <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A35A]" />
                  </div>
                </div>

                {/* Heading */}
                <div className="space-y-0.5">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#F4F0E5] tracking-tight leading-tight">
                    No Caffeine
                  </h2>
                </div>

                {/* Decorative Gold Leaf Flourish Divider */}
                <div className="flex items-center gap-2 py-0.5">
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                  <span className="text-[#C7A35A] text-xs">❦</span>
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                </div>

                {/* Supporting Copy */}
                <p className="text-xs sm:text-sm md:text-base font-sans text-[#F4F0E5]/85 leading-relaxed font-light">
                  A calming herbal infusion you can enjoy anytime, naturally caffeine-free for your everyday moments — morning, afternoon, or evening.
                </p>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 5: FOR EVERY MOMENT (Right Side Vertically Centered) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-5-every-moment-reveal"
              className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 top-1/2 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto transition-all duration-200"
              style={{
                opacity: step5Opacity,
                transform: `translate(${step5X}px, -50%)`,
                visibility: step5Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              <div className="space-y-3.5 sm:space-y-4 text-left sm:text-right flex flex-col sm:items-end bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20">
                {/* Gold Circle Badge with Mindful Calm Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C7A35A] p-0.5 sm:p-1 flex items-center justify-center bg-[#071C13] shadow-[0_0_20px_rgba(199,163,90,0.2)]">
                  <div className="w-full h-full rounded-full border border-[#C7A35A]/40 flex items-center justify-center bg-[#0D2F20]">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A35A]" />
                  </div>
                </div>

                {/* Heading */}
                <div className="space-y-0.5">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#F4F0E5] tracking-tight leading-tight">
                    For Every Moment <br />
                    <span className="italic text-[#C7A35A]">You Need Relief</span>
                  </h2>
                </div>

                {/* Decorative Gold Leaf Flourish Divider */}
                <div className="flex items-center gap-2 py-0.5">
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                  <span className="text-[#C7A35A] text-xs">❦</span>
                  <span className="h-px w-6 sm:w-8 bg-[#C7A35A]/60" />
                </div>

                {/* Supporting Copy */}
                <div className="space-y-2 font-sans text-xs sm:text-sm md:text-base font-light text-[#F4F0E5]/85 leading-relaxed">
                  <p>
                    Made for your study stress, office deadlines, a long day, or a quiet evening at home.
                  </p>
                  <p className="text-[#C7A35A] font-normal italic font-serif text-sm sm:text-base md:text-lg">
                    A simple moment to pause, breathe and reset.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 6: FOR EVERYONE (Bottom Centered Flourish Badge) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-6-for-everyone-reveal"
              className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 bottom-12 sm:bottom-16 flex flex-col items-center justify-center pointer-events-auto transition-all duration-200 text-center"
              style={{
                opacity: step6Opacity,
                transform: `translateY(${step6Y}px)`,
                visibility: step6Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              <div className="bg-[#071C13]/90 backdrop-blur-md px-6 sm:px-10 py-4 sm:py-5 rounded-2xl border border-[#C7A35A]/35 max-w-xl space-y-2 shadow-2xl">
                {/* Heading with Gold Leaves Flourish */}
                <div className="flex items-center justify-center gap-2.5 sm:gap-4">
                  <span className="text-[#C7A35A] text-base sm:text-xl">🌿</span>
                  <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-normal text-[#C7A35A] tracking-tight">
                    For everyone of all ages
                  </h2>
                  <span className="text-[#C7A35A] text-base sm:text-xl">🌿</span>
                </div>

                {/* Supporting Copy */}
                <p className="text-[11px] sm:text-xs md:text-sm font-sans text-[#F4F0E5]/80 tracking-widest uppercase font-medium">
                  No age limit. No restrictions. Made for everyday moments.
                </p>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* STEP 7: FINAL PRODUCT MOMENT & CTA (End of Scroll) */}
            {/* ---------------------------------------------------- */}
            <div
              id="step-7-final-product-cta"
              className="absolute inset-0 pointer-events-none transition-all duration-300"
              style={{
                opacity: step7Opacity,
                transform: `translateY(${step7Y}px)`,
                visibility: step7Opacity > 0.01 ? 'visible' : 'hidden',
              }}
            >
              {/* Left Flank: Same FITINFUSE Brand Identity as Step 1 */}
              <div className="absolute left-4 sm:left-10 md:left-14 lg:left-20 xl:left-24 top-[38%] sm:top-[42%] md:top-1/2 -translate-y-1/2 max-w-[280px] sm:max-w-xs md:max-w-sm text-left z-30 pointer-events-auto">
                <div className="space-y-3 bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20 -translate-y-2 sm:-translate-y-4 md:translate-y-0">
                  <div className="space-y-1">
                    <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.35em] text-[#C7A35A] uppercase block">
                      {BRAND_INFO.name}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#F4F0E5] tracking-tight leading-[1.08]">
                      STRESS RELIEF <br />
                      <span className="italic font-light text-[#E5C989]">INFUSION</span>
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <span className="h-px w-8 bg-[#C7A35A]/60" />
                    <span className="text-[#C7A35A] text-xs">❦</span>
                    <span className="h-px w-8 bg-[#C7A35A]/60" />
                  </div>
                  <p className="text-xs sm:text-sm font-sans font-medium tracking-[0.2em] text-[#C7A35A] uppercase">
                    {BRAND_INFO.flavour} · {BRAND_INFO.caffeine}
                  </p>
                </div>
              </div>

              {/* Right Flank: Clean Centered CTA (Bottom on Mobile, Centered Flank on Desktop) */}
              <div className="absolute left-4 right-4 sm:left-auto sm:right-10 md:right-14 lg:right-20 xl:right-24 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 max-w-[calc(100vw-2rem)] sm:max-w-xs md:max-w-sm text-center sm:text-right z-30 pointer-events-auto flex flex-col items-center sm:items-end">
                <div className="space-y-4 bg-[#071C13]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border sm:border-0 border-[#C7A35A]/20 flex flex-col items-center sm:items-end w-full sm:w-auto">
                  <button
                    onClick={onOpenExplore}
                    id="final-explore-cta-button"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-[#F4F0E5] text-[#071C13] rounded-full font-poppins text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 focus:outline-none"
                  >
                    <span>EXPLORE THE INFUSION</span>
                    <ArrowRight className="w-4 h-4 text-[#071C13]" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* D. Bottom Subtle Scroll Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 z-40">
            <div
              className="h-full bg-gradient-to-r from-[#C7A35A] to-[#DFC07B] transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

