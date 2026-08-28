import React, { useRef, useState, useEffect } from 'react';
import { Flower2, Sparkles } from 'lucide-react';

export const LargeImageStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinishedOnce, setHasFinishedOnce] = useState(false);

  // Cloudinary direct optimized video source
  const videoSrc = 'https://res.cloudinary.com/x1dci3fh/video/upload/q_auto,f_auto/Botanicals_falling_into_tea_cup_202608272158.mp4';
  const videoFallbackSrc = 'https://res.cloudinary.com/x1dci3fh/video/upload/Botanicals_falling_into_tea_cup_202608272158.mp4';

  // Preview Poster Image URL with cache-busting
  const previewPosterImg = '/video-preview-poster.png?v=20260828';

  // 1. IntersectionObserver: Autoplay once when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredViewport) {
          setHasEnteredViewport(true);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Autoplay policy fallback (video stays on poster until interaction)
                  setIsPlaying(false);
                });
            }
          }
        }
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasEnteredViewport]);

  // 2. Handler when video completes playback
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasFinishedOnce(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  // 3. Desktop Hover Interaction
  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // 4. Click / Tap interaction for mobile and desktop
  const handleToggleClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    }
  };

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

        {/* Editorial Overlapping Video & Gallery Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Video Landscape Card */}
          <div
            ref={containerRef}
            id="botanical-editorial-video-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleClick}
            className="lg:col-span-8 h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden relative shadow-2xl group border border-[#123524]/15 bg-[#071C13] cursor-pointer select-none"
          >
            {/* 1. Preview Poster Image (Visible when stopped/paused/ended) */}
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img
                src={previewPosterImg}
                alt="FitInFuse Video Preview Poster"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://lh3.googleusercontent.com/d/1w2NwY06VDHzhnGAJz7SCV84GLwloZBfC";
                }}
                className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#071C13]/30 backdrop-blur-[1px]" />
            </div>

            {/* 2. Seamless Cloudinary HTML5 Video Player (No Controls, Full Viewport Fit) */}
            <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                playsInline
                muted
                preload="metadata"
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              >
                <source src={videoSrc} type="video/mp4" />
                <source src={videoFallbackSrc} type="video/mp4" />
              </video>
            </div>

            {/* 3. Subtle Gradient Scrim for Editorial Typography Legibility */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-black/25 pointer-events-none" />

            {/* 4. Requested Editorial Typography Overlay */}
            <div className="absolute bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white max-w-xl z-30 pointer-events-none">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-[#E6D38B] font-semibold block mb-2 drop-shadow-sm flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#E6D38B]" />
                A MINDFUL RITUAL
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light leading-snug text-[#FAF9F5] drop-shadow-md">
                Every sip towards the way of healthier life &amp; calm mind.
              </h3>
            </div>
          </div>

          {/* Side Supporting Visual Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Supporting Card */}
            <div className="h-60 sm:h-64 rounded-3xl overflow-hidden relative shadow-md group border border-[#123524]/10">
              <img
                src="/botanical-editorial-card.png?v=20260828"
                alt="For everyone and a stress-free lifestyle - FitInFuse"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://lh3.googleusercontent.com/d/1-GQQn54TKdqnayLJjJfdKZ4zhGnmXs_d";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#E6D38B] font-medium block">
                  FOR EVERYONE
                </span>
                <p className="font-serif text-base sm:text-lg font-light leading-snug text-[#FAF9F5]">
                  A more stress-free lifestyle, crafted for all ages.
                </p>
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
