import React, { useState, useEffect } from 'react';

interface ProductPackagingProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showBadges?: boolean;
}

export const ProductPackaging: React.FC<ProductPackagingProps> = ({
  size = 'md',
  className = '',
  showBadges = true
}) => {
  const isHero = size === 'hero';
  const isLarge = size === 'lg' || size === 'hero';

  // Primary image sources to try
  const [customImage, setCustomImage] = useState<string | null>(() => {
    return localStorage.getItem('fitinfuse_product_image') || null;
  });
  const [imageError, setImageError] = useState(false);

  // Dimension scaling based on size
  const imgHeightClass = isHero
    ? 'h-[420px] sm:h-[500px] md:h-[560px]'
    : isLarge
    ? 'h-[360px] sm:h-[440px]'
    : size === 'sm'
    ? 'h-[220px]'
    : 'h-[300px] sm:h-[360px]';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          setImageError(false);
          localStorage.setItem('fitinfuse_product_image', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSrc = customImage || '/product-canister.webp';

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Ambient botanical halo & soft lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6F8F62]/25 via-[#C7A35A]/20 to-[#123524]/15 rounded-full filter blur-3xl transform scale-95 -z-10" />

      {/* Main Image Display Container */}
      <div className="relative group flex flex-col items-center justify-center">
        {!imageError ? (
          <div className="relative transition-transform duration-700 hover:scale-[1.03]">
            <img
              src={imageSrc}
              alt="FitInFuse Stress Relief Infusion Canister"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width={707}
              height={1000}
              className={`${imgHeightClass} w-auto object-contain drop-shadow-[0_25px_35px_rgba(18,53,36,0.3)] transition-all`}
              onError={() => {
                // If the default path is not found in static root, fallback to styled SVG canister
                setImageError(true);
              }}
            />

            {/* Quick image replacer option on hover */}
            <label 
              className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#123524]/90 hover:bg-[#123524] text-[#FAF9F5] text-[10px] font-sans font-medium px-3 py-1.5 rounded-full cursor-pointer shadow-lg backdrop-blur-xs border border-[#C7A35A]/30 flex items-center gap-1.5"
              title="Replace or upload original photo"
            >
              <svg className="w-3.5 h-3.5 text-[#C7A35A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>Update Image</span>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
            </label>
          </div>
        ) : (
          /* Fallback High-Fidelity Cylindrical Canister if file is missing */
          <div
            className={`relative ${
              isHero
                ? 'w-[280px] sm:w-[320px] md:w-[350px] h-[520px] sm:h-[590px] md:h-[640px]'
                : isLarge
                ? 'w-[240px] sm:w-[280px] h-[450px] sm:h-[520px]'
                : size === 'sm'
                ? 'w-[160px] h-[300px]'
                : 'w-[210px] sm:w-[240px] h-[390px] sm:h-[440px]'
            } rounded-[32px] overflow-hidden flex flex-col justify-between transition-transform duration-700 hover:scale-[1.03] shadow-2xl`}
          >
            {/* Cylindrical 3D Light/Shadow Surface Overlay */}
            <div 
              className="absolute inset-0 z-30 pointer-events-none rounded-[32px]" 
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(255,255,255,0.28) 22%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.06) 78%, rgba(0,0,0,0.24) 100%)'
              }}
            />

            {/* 1. TOP GOLD METAL CAP */}
            <div 
              className="relative z-20 w-full h-[14%] flex-shrink-0 flex flex-col justify-between overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #A88644 0%, #D8B76E 22%, #F3DE9C 38%, #D3AF62 60%, #9B7836 88%, #816226 100%)',
                borderTopLeftRadius: '30px',
                borderTopRightRadius: '30px',
                boxShadow: 'inset 0 3px 6px rgba(255,255,255,0.6), 0 4px 10px rgba(0,0,0,0.25)'
              }}
            >
              <div className="w-full h-1 bg-white/40" />
              <div className="w-full h-[1px] bg-black/20 mt-auto" />
              <div className="w-full h-[3px] bg-[#684C1B]/40" />
            </div>

            {/* 2. MAIN BODY (Mint & White Botanical Label) */}
            <div 
              className="relative z-10 w-full flex-1 flex flex-col justify-between p-4 sm:p-5 text-center overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 50% 45%, #FFFFFF 30%, #E8F4EC 75%, #D4E8DC 100%)'
              }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-70" viewBox="0 0 300 500" preserveAspectRatio="none">
                <g fill="#4B8C53" fillOpacity="0.45" stroke="#2D6035" strokeWidth="0.5">
                  <path d="M 0 40 Q 35 30 45 70 Q 25 90 0 75 Z" />
                  <path d="M 0 90 Q 50 85 60 130 Q 30 150 0 130 Z" />
                  <path d="M 0 150 Q 40 160 50 200 Q 15 220 0 190 Z" />
                </g>
                <g fill="#4B8C53" fillOpacity="0.45" stroke="#2D6035" strokeWidth="0.5">
                  <path d="M 300 40 Q 265 30 255 70 Q 275 90 300 75 Z" />
                  <path d="M 300 90 Q 250 85 240 130 Q 270 150 300 130 Z" />
                  <path d="M 300 150 Q 260 160 250 200 Q 285 220 300 190 Z" />
                </g>
                <g fill="#3D7D46" fillOpacity="0.5" stroke="#24542B" strokeWidth="0.5">
                  <path d="M 0 280 Q 45 290 55 340 Q 20 370 0 340 Z" />
                  <path d="M 0 350 Q 60 360 65 420 Q 30 450 0 420 Z" />
                  <path d="M 0 430 Q 70 435 80 480 Q 40 500 0 480 Z" />
                </g>
                <g fill="#3D7D46" fillOpacity="0.5" stroke="#24542B" strokeWidth="0.5">
                  <path d="M 300 280 Q 255 290 245 340 Q 280 370 300 340 Z" />
                  <path d="M 300 350 Q 240 360 235 420 Q 270 450 300 420 Z" />
                  <path d="M 300 430 Q 230 435 220 480 Q 260 500 300 480 Z" />
                </g>
              </svg>

              {/* Veg Mark */}
              <div className="absolute top-2 right-3 z-20 flex items-center justify-center">
                <div className="w-3.5 h-3.5 border border-[#0B7A38] p-[2px] flex items-center justify-center bg-white shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#0B7A38]" />
                </div>
              </div>

              {/* Brand Logo & Name */}
              <div className="relative z-10 pt-1 flex flex-col items-center">
                <div className="w-9 h-9 relative mb-1 flex items-center justify-center">
                  <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-sm">
                    <path d="M 18 26 C 18 42 38 42 38 26 Z" fill="none" stroke="#D47A22" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 38 28 C 46 28 46 36 38 38" fill="none" stroke="#D47A22" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 23 26 L 16 19" fill="none" stroke="#3D7D46" strokeWidth="1.5" />
                    <rect x="12" y="18" width="6" height="8" rx="1" fill="#3D7D46" />
                    <line x1="15" y1="20" x2="15" y2="24" stroke="#FFF" strokeWidth="0.8" />
                    <path d="M 28 34 C 24 22 34 16 38 12 C 40 18 36 28 28 34 Z" fill="#4B8C53" stroke="#2D6035" strokeWidth="1" />
                    <path d="M 27 34 C 20 28 22 20 25 17 C 27 21 27 28 27 34 Z" fill="#387340" />
                  </svg>
                </div>

                <div className="flex items-center justify-center leading-none">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1B365D]">Fit</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#D47A22]">InFuse</span>
                  <span className="text-[9px] font-sans font-bold text-[#D47A22] ml-0.5 -mt-2">™</span>
                </div>

                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px w-3 bg-[#D47A22]" />
                  <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-[#172019] uppercase">LEAF OF FITNESS</span>
                  <div className="h-px w-3 bg-[#D47A22]" />
                </div>
              </div>

              {/* Title & Flavour */}
              <div className="relative z-10 my-auto py-2">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#164E2D] font-normal leading-[1.08] tracking-tight">
                  Stress Relief <br />
                  <span className="italic font-normal">Infusion</span>
                </h2>

                <div className="flex items-center justify-center my-2 opacity-90">
                  <svg viewBox="0 0 140 24" className="w-24 sm:w-28 h-auto text-[#629B52]">
                    <path d="M 10 12 Q 35 12 48 6 Q 60 1 70 12 Q 80 1 92 6 Q 105 12 130 12" fill="none" stroke="#629B52" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 70 12 C 65 5 70 2 70 2 C 70 2 75 5 70 12 Z" fill="#629B52" />
                    <path d="M 70 12 C 60 9 58 5 58 5 C 58 5 65 7 70 12 Z" fill="#78B365" />
                    <path d="M 70 12 C 80 9 82 5 82 5 C 82 5 75 7 70 12 Z" fill="#78B365" />
                    <circle cx="48" cy="6" r="2" fill="#629B52" />
                    <circle cx="92" cy="6" r="2" fill="#629B52" />
                  </svg>
                </div>

                <div className="inline-block relative px-5 py-1 my-1 bg-[#123E25] text-white rounded-md shadow-md">
                  <span className="font-serif italic text-sm sm:text-base font-normal tracking-wide text-[#F3F9F4] block">
                    Peppermint Flavour
                  </span>
                </div>
              </div>

              {/* Bottom Specs */}
              <div className="relative z-10 pb-1">
                <div className="text-xs font-sans font-medium text-[#1E4A32] tracking-wide">No Caffeine</div>
                <div className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#123E25] uppercase mt-0.5">15 SERVINGS</div>
              </div>
            </div>

            {/* 3. BOTTOM GOLD BASE */}
            <div 
              className="relative z-20 w-full h-[6%] flex-shrink-0 overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #8C6A2A 0%, #D4B066 25%, #EED994 45%, #CFA958 65%, #8A6727 90%, #684C1B 100%)',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.5)'
              }}
            >
              <div className="w-full h-[1px] bg-black/25" />
              <div className="w-full h-1 bg-white/30" />
            </div>
          </div>
        )}
      </div>

      {/* Floating authentic botanical indicator tags */}
      {showBadges && (
        <>
          <div className="hidden lg:flex absolute -left-12 top-1/4 bg-[#FAF9F5]/95 backdrop-blur-md text-[#123524] px-4 py-2.5 rounded-full shadow-lg border border-[#123524]/10 items-center gap-2.5 animate-bounce [animation-duration:4s]">
            <span className="w-2 h-2 rounded-full bg-[#6F8F62]" />
            <span className="text-xs font-medium tracking-wide font-sans">9 Pure Botanicals</span>
          </div>

          <div className="hidden lg:flex absolute -right-10 bottom-1/4 bg-[#123524]/95 backdrop-blur-md text-[#FAF9F5] px-4 py-2.5 rounded-full shadow-lg border border-[#C7A35A]/30 items-center gap-2.5 animate-bounce [animation-duration:5s]">
            <span className="w-2 h-2 rounded-full bg-[#C7A35A]" />
            <span className="text-xs font-medium tracking-wide font-sans">Zero Caffeine • Peppermint Note</span>
          </div>
        </>
      )}
    </div>
  );
};


