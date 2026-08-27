import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', href: '#shop' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm py-4 border-b border-[#123524]/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <a 
          href="#" 
          className="flex items-center group focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#123524] uppercase">
            {BRAND_INFO.name}
          </span>
        </a>

        {/* Middle: Minimal Editorial Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-sans font-medium tracking-[0.2em] text-[#172019]/80 hover:text-[#123524] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#123524] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Cart Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#123524]/20 hover:border-[#123524] bg-white/60 hover:bg-[#123524] text-[#123524] hover:text-[#FAF9F5] transition-all duration-300 shadow-sm group"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#123524] group-hover:text-[#FAF9F5] transition-colors" />
            <span className="text-xs font-sans font-semibold tracking-wider uppercase">
              CART
            </span>
            <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-[#123524] text-[#FAF9F5] group-hover:bg-[#FAF9F5] group-hover:text-[#123524] transition-colors">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#123524] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#123524]/10 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-sans tracking-[0.2em] font-medium text-[#123524] py-2 border-b border-[#123524]/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <p className="text-xs text-[#687168] font-sans">
              {BRAND_INFO.descriptor} • {BRAND_INFO.productName}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
