import React from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ProductPackaging } from './ProductPackaging';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
  onUpdateQuantity: (q: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  quantity,
  onUpdateQuantity
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#123524]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F5] text-[#172019] shadow-2xl flex flex-col border-l border-[#123524]/10">
          
          {/* Header */}
          <div className="p-6 border-b border-[#123524]/10 flex items-center justify-between bg-[#F4F0E6]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#123524]" />
              <h2 className="text-xl font-serif font-medium tracking-wide text-[#123524]">
                Your Ritual Bag
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#687168] hover:text-[#123524] rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {quantity > 0 ? (
              <div className="bg-[#FAF9F5] border border-[#123524]/10 rounded-2xl p-4 shadow-sm space-y-4">
                <div className="flex gap-4">
                  {/* Mini Product Packaging representation */}
                  <div className="w-24 h-32 flex-shrink-0 bg-[#123524] rounded-xl p-2 flex flex-col justify-between items-center text-center text-[#FAF9F5] border border-[#C7A35A]/30">
                    <span className="text-[7px] tracking-widest text-[#C7A35A] uppercase">FITINFUSE</span>
                    <div className="w-8 h-8 rounded-full border border-[#C7A35A]/40 flex items-center justify-center">
                      <span className="text-[8px] text-[#C7A35A]">9</span>
                    </div>
                    <span className="text-[7px] tracking-wider text-[#FAF9F5]/90 leading-tight">STRESS RELIEF</span>
                    <span className="text-[6px] text-[#C7A35A]">15 BAGS</span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-sans uppercase tracking-widest text-[#6F8F62] font-semibold">
                        {BRAND_INFO.descriptor}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#123524] leading-tight mt-0.5">
                        {BRAND_INFO.productName}
                      </h3>
                      <p className="text-xs text-[#687168] font-sans mt-1">
                        {BRAND_INFO.flavour} • {BRAND_INFO.servings} ({BRAND_INFO.netWeight})
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 bg-[#123524]/10 text-[#123524] text-[10px] font-medium rounded-full">
                        {BRAND_INFO.caffeine}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#123524]/10">
                      <div className="flex items-center border border-[#123524]/20 rounded-full px-2 py-1 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
                          className="p-1 hover:text-[#123524] text-[#687168]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-[#123524]">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(quantity + 1)}
                          className="p-1 hover:text-[#123524] text-[#687168]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs font-serif font-medium text-[#123524]">
                        {BRAND_INFO.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4F0E6] p-3 rounded-xl text-xs text-[#687168] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C7A35A] flex-shrink-0" />
                  <span>Includes 9 whole botanicals in biodegradable pyramid tea bags.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#687168] mx-auto stroke-1" />
                <p className="text-lg font-serif text-[#123524]">Your ritual bag is empty</p>
                <p className="text-xs text-[#687168] max-w-xs mx-auto">
                  Add the FitInFuse Stress Relief Infusion to begin your mindful tea ritual.
                </p>
                <button
                  onClick={() => onUpdateQuantity(1)}
                  className="px-6 py-2.5 bg-[#123524] text-[#FAF9F5] rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#1E4A32] transition-colors"
                >
                  Add Stress Relief Infusion
                </button>
              </div>
            )}

            {/* Botanical Guarantee info */}
            <div className="border border-[#123524]/10 rounded-xl p-4 bg-white/70 space-y-2">
              <div className="flex items-center gap-2 text-[#123524] font-medium text-xs">
                <ShieldCheck className="w-4 h-4 text-[#6F8F62]" />
                <span>Authentic Leaf of Fitness Guarantee</span>
              </div>
              <p className="text-[11px] text-[#687168] leading-relaxed">
                Packed fresh by HINCO Infusions Pvt. Ltd. (FSSAI Lic. 12725999000692) under strict herbal infusion quality standards.
              </p>
            </div>
          </div>

          {/* Footer */}
          {quantity > 0 && (
            <div className="p-6 border-t border-[#123524]/10 bg-[#F4F0E6] space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#687168]">Total</span>
                <span className="font-serif font-semibold text-base text-[#123524]">{BRAND_INFO.price}</span>
              </div>

              <button
                onClick={() => {
                  alert(`Thank you for your interest! Pre-orders for FitInFuse Stress Relief Infusion (${quantity} pack${quantity > 1 ? 's' : ''}) will be confirmed directly at info@fitinfuse.in or +91 90246 15279.`);
                }}
                className="w-full py-3.5 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>RESERVE YOUR RITUAL PACK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-[#687168]">
                Direct from FitInFuse • Contact: info@fitinfuse.in
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
