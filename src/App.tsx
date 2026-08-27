import React, { useState } from 'react';
import { FitInFuseScrollExperience } from './components/FitInFuseScrollExperience';
import { InfusionModal } from './components/InfusionModal';

export default function App() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071C13] text-[#F4F0E5] font-sans selection:bg-[#C7A35A] selection:text-[#071C13]">
      {/* Dedicated Scroll-Driven Product Experience */}
      <FitInFuseScrollExperience onOpenExplore={() => setIsExploreOpen(true)} />

      {/* Explore The Infusion Detail Modal */}
      <InfusionModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />
    </div>
  );
}

