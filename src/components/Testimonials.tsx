import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { MessageSquarePlus, Sparkles, X, Check } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [items, setItems] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [showModal, setShowModal] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote.trim() || !newAuthor.trim()) return;

    const newItem: TestimonialItem = {
      id: `t-${Date.now()}`,
      quote: newQuote.trim(),
      author: newAuthor.trim(),
      location: newLocation.trim() || 'India',
      date: 'Community Reflection',
      tag: 'Mindful Ritual'
    };

    setItems([newItem, ...items]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setNewQuote('');
      setNewAuthor('');
      setNewLocation('');
    }, 1800);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F4F0E6] text-[#172019] border-b border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#6F8F62] uppercase">
              WHAT PEOPLE SAY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#123524] tracking-tight leading-tight">
              &ldquo;Made for moments <br className="hidden sm:inline" />
              <span className="italic">worth slowing down.&rdquo;</span>
            </h2>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-sm self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#C7A35A]" />
            <span>Share Your Reflection</span>
          </button>
        </div>

        {/* Testimonials List inspired by Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF9F5] rounded-3xl p-8 border border-[#123524]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#6F8F62]">
                    {t.tag}
                  </span>
                  <span className="text-[10px] text-[#687168] font-sans">
                    {t.date}
                  </span>
                </div>

                <p className="font-serif text-xl sm:text-2xl text-[#123524] font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#123524]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-semibold text-[#123524]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#687168] font-sans">
                    {t.location}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#C7A35A]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Share Reflection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#123524]/20 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#687168] hover:text-[#123524] p-2 rounded-full"
              aria-label="Close reflection modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#123524] text-[#C7A35A] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#123524]">Reflection Shared</h3>
                <p className="text-xs text-[#687168]">Thank you for contributing your mindful experience.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6F8F62] font-semibold block mb-1">
                    COMMUNITY FEEDBACK
                  </span>
                  <h3 className="font-serif text-3xl text-[#123524]">
                    Share Your Ritual Note
                  </h3>
                  <p className="text-xs text-[#687168] mt-1">
                    How was your experience with FitInFuse Stress Relief Infusion?
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#123524] uppercase tracking-wider mb-1">
                      Your Reflection
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newQuote}
                      onChange={(e) => setNewQuote(e.target.value)}
                      placeholder="Describe the aroma, calm moment, or brewing ritual..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#123524]/20 focus:outline-none focus:border-[#123524] text-sm text-[#172019]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123524] uppercase tracking-wider mb-1">
                        Your Name / Note
                      </label>
                      <input
                        required
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="e.g. Tea Enthusiast"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#123524]/20 focus:outline-none focus:border-[#123524] text-xs text-[#172019]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#123524] uppercase tracking-wider mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder="e.g. Jaipur, Rajasthan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#123524]/20 focus:outline-none focus:border-[#123524] text-xs text-[#172019]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#123524] hover:bg-[#1E4A32] text-[#FAF9F5] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                >
                  Save Reflection
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
