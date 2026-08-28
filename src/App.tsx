import React, { useState } from 'react';
import { FitInFuseScrollExperience } from './components/FitInFuseScrollExperience';
import { InfusionModal } from './components/InfusionModal';
import { EditorialStory } from './components/EditorialStory';
import { LargeImageStory } from './components/LargeImageStory';
import { BotanicalBlend } from './components/BotanicalBlend';
import { BrewingRitual } from './components/BrewingRitual';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

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

      {/* Floating Quick Action Badge */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsExploreOpen(true)}
          id="quick-dossier-fab"
          className="group px-4 py-2.5 bg-[#123524]/90 hover:bg-[#1A4D34] text-[#F4F0E5] border border-[#C7A35A]/30 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 text-xs font-sans tracking-wider cursor-pointer"
          aria-label="Open Herbal Dossier"
        >
          <span className="w-2 h-2 rounded-full bg-[#C7A35A] animate-pulse" />
          <span className="hidden sm:inline font-medium">Herbal Dossier</span>
          <span className="sm:hidden font-medium">Specs</span>
        </button>
      </div>
    </div>
  );
}


