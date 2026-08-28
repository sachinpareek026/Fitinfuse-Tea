import React, { useState } from 'react';
import { X, Check, Leaf, Sparkles, Coffee, ShieldCheck, Clock, Droplets, ArrowRight } from 'lucide-react';
import { BRAND_INFO, BOTANICALS, BREWING_STEPS } from '../data/content';

interface InfusionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfusionModal: React.FC<InfusionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'botanicals' | 'brewing'>('details');
  const [reserved, setReserved] = useState(false);
  const [packQuantity, setPackQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-300 pt-20 sm:pt-24 pb-8">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#071C13] border border-[#C7A35A]/30 rounded-3xl overflow-hidden shadow-2xl text-[#F4F0E5] my-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#C7A35A]/15 bg-[#0D2F20]/60">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C7A35A] uppercase block">
              {BRAND_INFO.name} · {BRAND_INFO.descriptor}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E5] font-normal tracking-tight">
              Stress Relief Infusion
            </h3>
          </div>

          <button
            onClick={onClose}
            id="close-infusion-modal"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F4F0E5]/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-[#C7A35A]/15 px-6 sm:px-8 bg-[#071C13]">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3.5 px-4 font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative cursor-pointer ${
              activeTab === 'details' ? 'text-[#C7A35A]' : 'text-[#F4F0E5]/60 hover:text-[#F4F0E5]'
            }`}
          >
            Overview & Specs
            {activeTab === 'details' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C7A35A]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('botanicals')}
            className={`py-3.5 px-4 font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative cursor-pointer ${
              activeTab === 'botanicals' ? 'text-[#C7A35A]' : 'text-[#F4F0E5]/60 hover:text-[#F4F0E5]'
            }`}
          >
            9 Botanicals
            {activeTab === 'botanicals' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C7A35A]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('brewing')}
            className={`py-3.5 px-4 font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative cursor-pointer ${
              activeTab === 'brewing' ? 'text-[#C7A35A]' : 'text-[#F4F0E5]/60 hover:text-[#F4F0E5]'
            }`}
          >
            Brewing Guide
            {activeTab === 'brewing' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C7A35A]" />
            )}
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          {activeTab === 'details' && (
            <div className="space-y-6">
              {/* Product Overview Summary */}
              <div className="flex flex-col sm:flex-row gap-6 items-center bg-[#0D2F20]/50 p-5 rounded-2xl border border-[#C7A35A]/20">
                <img
                  src="/product-canister.webp"
                  alt="FitInFuse Canister"
                  referrerPolicy="no-referrer"
                  className="w-24 h-36 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/product-canister.png?v=20260828';
                  }}
                />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-[#C7A35A] uppercase">
                    100% Herbal Infusion
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0E5] font-normal">
                    FitInFuse Stress Relief Infusion
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-[#F4F0E5]/80 font-light leading-relaxed">
                    A curated synergy of 9 pure botanicals and cooling peppermint designed to accompany your quiet moments, study pauses, and evening unwind routines.
                  </p>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <span className="block text-[10px] font-sans text-[#C7A35A] uppercase tracking-wider">Flavour</span>
                  <span className="font-serif text-base text-[#F4F0E5] mt-1 block">Peppermint</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <span className="block text-[10px] font-sans text-[#C7A35A] uppercase tracking-wider">Servings</span>
                  <span className="font-serif text-base text-[#F4F0E5] mt-1 block">15 Pyramid Bags</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <span className="block text-[10px] font-sans text-[#C7A35A] uppercase tracking-wider">Caffeine</span>
                  <span className="font-serif text-base text-[#F4F0E5] mt-1 block">0% Caffeine</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <span className="block text-[10px] font-sans text-[#C7A35A] uppercase tracking-wider">Net Weight</span>
                  <span className="font-serif text-base text-[#F4F0E5] mt-1 block">{BRAND_INFO.netWeight}</span>
                </div>
              </div>

              {/* Net Weight & Purity Transparency */}
              <div className="border-t border-[#C7A35A]/15 pt-4 text-center text-xs font-sans text-[#E5C989] tracking-wider uppercase">
                100% Ayurvedic Herbals · 15 Biodegradable Pyramid Bags · Caffeine-Free
              </div>
            </div>
          )}

          {activeTab === 'botanicals' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BOTANICALS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 hover:border-[#C7A35A]/50 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                            e.currentTarget.src = item.fallbackImage;
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-serif text-base text-[#F4F0E5] truncate">{item.name}</span>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.accentColor }} />
                      </div>
                      <span className="text-[10px] font-sans italic text-[#C7A35A] block truncate">
                        {item.scientificName}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-[#F4F0E5]/70 leading-normal line-clamp-2">
                    {item.aromaProfile}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'brewing' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BREWING_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="bg-[#0D2F20]/50 p-4 rounded-xl border border-[#C7A35A]/20 space-y-2"
                  >
                    <span className="font-serif text-2xl text-[#C7A35A] block font-normal">
                      {step.number}
                    </span>
                    <h5 className="font-sans text-xs font-semibold tracking-wider text-[#F4F0E5] uppercase">
                      {step.title}
                    </h5>
                    <p className="text-xs font-sans text-[#F4F0E5]/80 leading-relaxed font-light">
                      {step.instruction}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C7A35A] flex-shrink-0" />
                <p className="text-xs font-sans text-[#F4F0E5]/80 font-light">
                  <strong className="text-[#F4F0E5] font-medium">Pro-Tip:</strong> Steep for 4–5 minutes in freshly boiled water (90–95°C) or enjoy as a chilled cold brew steeped for 6 hours in your refrigerator.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-5 border-t border-[#C7A35A]/15 bg-[#0D2F20]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-sans text-[#F4F0E5]/70 uppercase tracking-widest">Quantity:</span>
            <div className="flex items-center border border-[#C7A35A]/30 rounded-lg overflow-hidden bg-[#071C13]">
              <button
                onClick={() => setPackQuantity(Math.max(1, packQuantity - 1))}
                className="px-3 py-1.5 text-xs text-[#C7A35A] hover:bg-white/5 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-sans font-semibold text-[#F4F0E5]">
                {packQuantity}
              </span>
              <button
                onClick={() => setPackQuantity(packQuantity + 1)}
                className="px-3 py-1.5 text-xs text-[#C7A35A] hover:bg-white/5 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                setReserved(true);
                setTimeout(() => setReserved(false), 3000);
              }}
              id="reserve-infusion-action-button"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#C7A35A] hover:bg-[#DFC07B] text-[#071C13] rounded-full font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            >
              {reserved ? (
                <>
                  <Check className="w-4 h-4 text-[#071C13]" />
                  <span>Infusion Reserved</span>
                </>
              ) : (
                <>
                  <span>Add to Tea Ritual ({packQuantity} {packQuantity === 1 ? 'Pack' : 'Packs'})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
