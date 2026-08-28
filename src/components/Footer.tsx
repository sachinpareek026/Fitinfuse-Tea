import React from 'react';
import { BRAND_INFO } from '../data/content';
import { Instagram, Youtube, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F5] text-[#172019] pt-20 pb-12 border-t border-[#123524]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Top Row: Brand & Primary Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#123524]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            {/* Full-Size Transparent Prominent Logo Showcase */}
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] flex items-center">
              <img
                src="/brand-logo.png?v=20260828"
                alt="FitInFuse Emblem & Identity"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-40 sm:max-h-48 object-contain pr-[200px] transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="text-xs text-[#687168] font-sans max-w-sm leading-relaxed">
              {BRAND_INFO.category}. Single signature formula: {BRAND_INFO.productName} ({BRAND_INFO.flavour}).
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#123524]/20 flex items-center justify-center text-[#123524] hover:bg-[#123524] hover:text-[#FAF9F5] transition-colors"
                aria-label="FitInFuse on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#123524]/20 flex items-center justify-center text-[#123524] hover:bg-[#123524] hover:text-[#FAF9F5] transition-colors"
                aria-label="FitInFuse on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Accurately linked to existing on-page content) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#123524] block">
              EXPLORE
            </span>
            <ul className="space-y-3 text-xs font-sans font-medium text-[#687168]">
              <li>
                <a href="#sourcing-story" className="hover:text-[#123524] transition-colors tracking-wider uppercase block">
                  Terroir & Sourcing
                </a>
              </li>
              <li>
                <a href="#botanicals" className="hover:text-[#123524] transition-colors tracking-wider uppercase block">
                  Nine Botanicals
                </a>
              </li>
              <li>
                <a href="#brewing-ritual" className="hover:text-[#123524] transition-colors tracking-wider uppercase block">
                  Brewing Ritual
                </a>
              </li>
              <li>
                <a href="#community-reviews" className="hover:text-[#123524] transition-colors tracking-wider uppercase block">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-[#123524] transition-colors tracking-wider uppercase block">
                  Editorial Dispatch
                </a>
              </li>
            </ul>
          </div>

            {/* Direct Contact & Registered Address */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#123524] block">
                REGISTERED OFFICE & CONTACT
              </span>
              
              <div className="space-y-2.5 text-xs font-sans text-[#687168]">
                <div className="bg-[#123524]/5 p-3 rounded-lg border border-[#123524]/10 space-y-1">
                  <p className="font-semibold text-[#123524]">{BRAND_INFO.marketedBy.name}</p>
                  <p className="leading-relaxed">
                    B-11, Basement, Ganpati Enclave,<br />
                    Central Spine, Jaipur, Rajasthan – 302039
                  </p>
                  <p className="text-[11px] text-[#123524] font-medium pt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#6F8F62] flex-shrink-0" />
                    <span>FSSAI Licence No.: <strong className="font-semibold text-[#123524]">222260670006048</strong></span>
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#6F8F62]" />
                  <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-[#123524] transition-colors">
                    {BRAND_INFO.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#6F8F62]" />
                  <a href={`tel:${BRAND_INFO.contact.phone}`} className="hover:text-[#123524] transition-colors">
                    {BRAND_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-3.5 h-3.5 text-[#6F8F62]" />
                  <a href={`https://${BRAND_INFO.contact.website}`} className="hover:text-[#123524] transition-colors">
                    {BRAND_INFO.contact.website}
                  </a>
                </div>
              </div>
            </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#687168] font-sans pt-4 gap-4">
          <p>© 2026 {BRAND_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#story" className="hover:text-[#123524] transition-colors">The Ritual</a>
            <a href="#botanicals" className="hover:text-[#123524] transition-colors">Botanical Purity</a>
            <a href="#shop" className="hover:text-[#123524] transition-colors">Stress Relief Infusion</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
