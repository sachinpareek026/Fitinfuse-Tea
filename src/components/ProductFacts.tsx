import React from 'react';

export const ProductFacts: React.FC = () => {
  const stats = [
    {
      num: '09',
      label: 'BOTANICALS',
      sublabel: 'Whole herbs, leaves & delicate flowers'
    },
    {
      num: '15',
      label: 'SERVINGS',
      sublabel: 'Individually portioned pyramid tea bags'
    },
    {
      num: '30g',
      label: 'NET WEIGHT',
      sublabel: 'Fresh sealed botanical content'
    },
    {
      num: 'NO',
      label: 'CAFFEINE',
      sublabel: 'Pure herbal calmness at any hour'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#123524] text-[#FAF9F5] border-b border-[#1E4A32] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#6F8F62]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-[10px] font-sans uppercase tracking-[0.35em] text-[#C7A35A] font-semibold">
            PRODUCT SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#FAF9F5] tracking-tight">
            Transparent By Design
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF9F5]/70 font-sans">
            Every specification on the FitInFuse Stress Relief Infusion pack is deliberate and clear.
          </p>
        </div>

        {/* 4 Large Editorial Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#1E4A32]/40 rounded-3xl p-8 border border-[#C7A35A]/20 flex flex-col justify-between hover:border-[#C7A35A]/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-sans font-semibold tracking-widest text-[#C7A35A] uppercase">
                  SPEC 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F8F62]" />
              </div>

              <div className="my-4">
                <div className="font-serif text-6xl sm:text-7xl font-light text-[#FAF9F5] tracking-tight group-hover:text-[#E6D38B] transition-colors leading-none">
                  {stat.num}
                </div>
                <div className="text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#C7A35A] mt-3">
                  {stat.label}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#FAF9F5]/70 font-sans leading-relaxed">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
