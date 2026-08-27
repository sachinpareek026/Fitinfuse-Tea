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
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <h3 className="font-serif text-3xl font-bold tracking-[0.2em] text-[#123524] uppercase">
                {BRAND_INFO.name}
              </h3>
            </div>

            <p className="text-xs font-sans tracking-[0.3em] text-[#6F8F62] uppercase font-semibold">
              {BRAND_INFO.descriptor}
            </p>

            <p className="text-xs text-[#687168] font-sans max-w-sm leading-relaxed">
              {BRAND_INFO.category}. Single signature formula: {BRAND_INFO.productName} ({BRAND_INFO.flavour}).
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
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

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#123524] block">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs font-sans font-medium text-[#687168]">
              <li>
                <a href="#shop" className="hover:text-[#123524] transition-colors">SHOP</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#123524] transition-colors">OUR STORY</a>
              </li>
              <li>
                <a href="#botanicals" className="hover:text-[#123524] transition-colors">INGREDIENTS</a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-[#123524] transition-colors">RITUAL</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#123524] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="mailto:info@fitinfuse.in" className="hover:text-[#123524] transition-colors">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#123524] block">
              CONTACT & INQUIRIES
            </span>
            
            <div className="space-y-2 text-xs font-sans text-[#687168]">
              <div className="flex items-center gap-2.5">
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
