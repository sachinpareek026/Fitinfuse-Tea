import React, { useState } from 'react';
import { BRAND_INFO, BOTANICALS } from '../data/content';
import { ProductPackaging } from './ProductPackaging';
import { ShoppingBag, Check, ShieldCheck, Sparkles, Plus, Minus, ArrowRight, Heart } from 'lucide-react';

interface ProductSectionProps {
  onAddToCart: (quantity: number) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="shop" className="py-24 sm:py-32 bg-[#FAF9F5] text-[#172019] border-b border-[#123524]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
            THE SIGNATURE PRODUCT
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight">
            FitInFuse Stress Relief
          </h2>
          <p className="text-base text-[#687168] font-sans">
            One singular, pure botanical blend crafted to perfection.
          </p>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#F4F0E6] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#123524]/10 shadow-lg">
          
          {/* Left Column: Authentic Packaging Display */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative">
              <ProductPackaging size="lg" showBadges={false} />
              
              {/* Product Badge Tag */}
              <div className="absolute top-4 left-4 bg-[#123524] text-[#FAF9F5] px-3.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] font-semibold border border-[#C7A35A]/30">
                15 PYRAMID INFUSION BAGS
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Brand */}
            <div>
              <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#6F8F62] uppercase font-semibold">
                <span>{BRAND_INFO.descriptor}</span>
                <span>•</span>
                <span>{BRAND_INFO.format}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#123524] tracking-tight mt-2 leading-tight">
                {BRAND_INFO.productName}
              </h3>

              <p className="text-base sm:text-lg font-sans font-medium text-[#1E4A32] tracking-wider uppercase mt-2">
                {BRAND_INFO.flavour}
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-4 py-3 border-y border-[#123524]/10">
              <span className="text-2xl sm:text-3xl font-serif text-[#123524] font-medium">
                {BRAND_INFO.price}
              </span>
              <span className="text-xs font-sans text-[#687168]">
                (Taxes included • Pre-order reservations open)
              </span>
            </div>

            {/* Specifications Strip */}
            <div className="grid grid-cols-3 gap-3 bg-[#FAF9F5] p-4 rounded-2xl border border-[#123524]/10 text-center">
              <div>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-[#687168]">SERVINGS</span>
                <span className="font-serif text-lg font-medium text-[#123524]">{BRAND_INFO.servings}</span>
              </div>
              <div className="border-x border-[#123524]/10">
                <span className="block text-[10px] uppercase font-sans tracking-widest text-[#687168]">NET WEIGHT</span>
                <span className="font-serif text-lg font-medium text-[#123524]">{BRAND_INFO.netWeight}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-[#687168]">CAFFEINE</span>
                <span className="font-serif text-lg font-medium text-[#6F8F62]">{BRAND_INFO.caffeine}</span>
              </div>
            </div>

            {/* Complete 9 Botanicals Pill List */}
            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-widest font-semibold text-[#123524] block">
                The 9 Botanical Ingredients:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BOTANICALS.map((b) => (
                  <span
                    key={b.id}
                    className="px-3 py-1 bg-[#FAF9F5] text-[#172019] text-xs font-sans rounded-full border border-[#123524]/15"
                  >
                    {b.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Button */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Quantity */}
                <div className="flex items-center justify-between sm:justify-start border border-[#123524]/20 rounded-full px-4 py-3 bg-[#FAF9F5]">
                  <span className="text-xs font-sans text-[#687168] mr-4 uppercase tracking-wider">Qty:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#687168] hover:text-[#123524] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold text-[#123524] w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#687168] hover:text-[#123524] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Shop Now Button */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-[#C7A35A]" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#C7A35A]" />
                      <span>SHOP NOW</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {/* Assurance Line */}
              <div className="flex items-center gap-2 text-xs text-[#687168] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#6F8F62]" />
                <span>Manufactured by HINCO Infusions Pvt. Ltd. • Marketed by FitInFuse</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
