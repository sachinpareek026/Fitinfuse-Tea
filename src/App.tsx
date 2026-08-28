import React, { useState, useEffect } from 'react';
import { FitInFuseScrollExperience } from './components/FitInFuseScrollExperience';
import { InfusionModal } from './components/InfusionModal';
import { EditorialStory } from './components/EditorialStory';
import { LargeImageStory } from './components/LargeImageStory';
import { BotanicalBlend } from './components/BotanicalBlend';
import { BrewingRitual } from './components/BrewingRitual';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { warmupSiteAssets } from './utils/assetPreloader';

export default function App() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isRitualReached, setIsRitualReached] = useState(false);

  useEffect(() => {
    // Warm up all site images in the background immediately upon user entering
    warmupSiteAssets();

    const handleScroll = () => {
      // Check for the "HERBAL INFUSION RITUAL" section (id="story" or id="sourcing-story")
      const ritualStoryEl = document.getElementById('story') || document.getElementById('sourcing-story');
      if (ritualStoryEl) {
        const rect = ritualStoryEl.getBoundingClientRect();
        // Becomes visible as soon as the HERBAL INFUSION RITUAL layout begins entering viewport
        setIsRitualReached(rect.top <= window.innerHeight * 0.9);
      } else {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsRitualReached(scrollY > 1200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#071C13] text-[#F4F0E5] font-sans selection:bg-[#C7A35A] selection:text-[#071C13]">
      {/* 1. Immersive 3D Canister Scroll Experience (Preserved completely with interactive rotation, steps & herbal specs) */}
      <FitInFuseScrollExperience onOpenExplore={() => setIsExploreOpen(true)} />

      {/* 2. Extended Editorial Storytelling Experience */}
      <main className="relative z-20 bg-[#FAF9F5]">
        {/* A. Sourcing & Origin Editorial Story */}
        <div id="sourcing-story">
          <EditorialStory />
        </div>

        {/* B. Botanical Panorama & Ingredients */}
        <LargeImageStory />

        {/* C. Botanical Blend Composition */}
        <BotanicalBlend />

        {/* D. Daily Ritual & Steeping Guide */}
        <div id="brewing-ritual">
          <BrewingRitual />
        </div>

        {/* E. Verified Community Testimonials */}
        <div id="community-reviews">
          <Testimonials />
        </div>

        {/* F. Community Newsletter */}
        <Newsletter />

        {/* G. Editorial Footer */}
        <Footer />
      </main>

      {/* Explore The Infusion Detail Modal */}
      <InfusionModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button - Appears when Herbal Ritual layout begins */}
      <div
        className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out ${
          isRitualReached
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href="https://wa.link/rbsojf"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group flex items-center bg-[#123524] hover:bg-[#25D366] text-[#F4F0E5] hover:text-white rounded-full shadow-[0_6px_22px_rgba(7,28,19,0.45)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.55)] transition-all duration-300 cursor-pointer border border-[#C7A35A]/35 hover:border-white/30 p-2.5 sm:p-3 overflow-hidden backdrop-blur-sm"
          aria-label="Chat with founder"
        >
          {/* WhatsApp Icon (Full-size filled layout matching website aesthetic) */}
          <div className="relative flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 flex items-center justify-center">
            <svg
              className="w-full h-full fill-current transition-colors duration-300"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.8 2.79.8 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.986-5.767-5.986zm3.385 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.127-.532-1.832-.759-3.003-2.618-3.094-2.739-.092-.121-.741-.986-.741-1.88 0-.895.467-1.336.634-1.518.166-.182.364-.228.486-.228.121 0 .243.002.349.006.111.005.259-.042.404.307.149.36.508 1.238.553 1.329.046.091.077.198.016.32-.061.121-.092.198-.182.304-.092.106-.193.237-.276.318-.092.091-.188.191-.081.374.107.182.476.786 1.022 1.272.702.627 1.294.82 1.476.911.182.091.288.076.395-.046.107-.121.456-.532.578-.714.121-.182.243-.152.409-.091.167.061 1.058.499 1.24.59.182.091.303.136.349.213.045.076.045.44-.099.845z" />
            </svg>
            {/* Subtle Online Dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#25D366] group-hover:bg-white rounded-full border border-[#123524] transition-colors" />
          </div>

          {/* Smooth Text Expansion on Hover: "Chat with founder" */}
          <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 group-hover:mr-1 transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-semibold tracking-wide">
            Chat with founder
          </span>
        </a>
      </div>
    </div>
  );
}


