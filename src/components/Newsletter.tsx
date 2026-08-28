import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 bg-[#F4F0E6] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        
        <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
          FITINFUSE COMMUNITY
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight">
          Stay in the ritual.
        </h2>

        <p className="text-base sm:text-lg text-[#687168] font-sans max-w-xl mx-auto leading-relaxed">
          New launches, botanical stories and thoughtful moments — straight to your inbox.
        </p>

        {/* Email Form */}
        <div className="max-w-md mx-auto pt-4">
          {subscribed ? (
            <div className="p-4 rounded-full bg-[#123524] text-[#FAF9F5] flex items-center justify-center gap-3 animate-in zoom-in-95">
              <CheckCircle2 className="w-5 h-5 text-[#C7A35A]" />
              <span className="text-xs font-sans tracking-wider uppercase font-semibold">
                Welcome to the ritual circle.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-2xl sm:rounded-full border border-[#123524]/15 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-5 py-3 rounded-xl sm:rounded-full text-xs font-sans text-[#172019] placeholder:text-[#687168]/70 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-xl sm:rounded-full text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 flex-shrink-0 shadow"
              >
                <span>JOIN FITINFUSE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A35A]" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#687168] font-sans mt-3">
            We value your quiet peace. No spam, only genuine botanical reflections.
          </p>
        </div>

      </div>
    </section>
  );
};
