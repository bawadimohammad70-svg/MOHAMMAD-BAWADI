import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Compass, Briefcase, FileBadge2, Settings, Mail, Menu, X, Landmark } from 'lucide-react';

interface NavigationProps {
  onLanguageToggle?: () => void;
  lang?: 'en' | 'ar';
}

export default function Navigation({ onLanguageToggle, lang = 'en' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured Gallery', labelAr: 'المعرض الإبداعي', href: '#project-showcase', icon: Compass },
    { label: 'Blueprint HUD', labelAr: 'منصة المخططات', href: '#interactive-blueprints', icon: FileBadge2 },
    { label: 'Tactile Swatches', labelAr: 'المواد والخامات', href: '#material-moodboard', icon: Settings },
    { label: 'Engineering Estimator', labelAr: 'الحاسبة التقنية', href: '#technical-utility', icon: Landmark },
    { label: 'About & Credentials', labelAr: 'التعليم والخبرات', href: '#about-credentials', icon: Briefcase },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-stone-950/95 backdrop-blur-md py-4 border-b border-stone-900 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Designer Signature Title */}
        <a href="#" className="flex flex-col text-left group">
          <span className="font-serif text-lg tracking-wider text-white font-medium group-hover:text-[#C5A059] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#C5A059] uppercase transition-opacity duration-300">
            {PERSONAL_INFO.title}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-mono">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-400 hover:text-white hover:underline hover:underline-offset-4 decoration-[#C5A56C] transition-colors"
              >
                {lang === 'ar' ? link.labelAr : link.label}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-stone-800" />

          {/* Quick recruitment contact trigger */}
          <a
            href="#contact-section"
            className="bg-[#C5A059] hover:bg-[#B38E46] text-stone-950 px-4 py-2 rounded-xl font-bold transition-transform flex items-center gap-1.5 transform hover:-translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{lang === 'ar' ? 'توظيف سريع' : 'FAST-TRACK HIRE'}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-300 hover:text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-stone-800 p-6 flex flex-col gap-4 text-xs font-mono animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-400 hover:text-white py-2 block border-b border-stone-900"
            >
              <div className="flex items-center justify-between">
                <span>{lang === 'ar' ? link.labelAr : link.label}</span>
                <span className="text-[9px] text-[#C5A059]">0{navLinks.indexOf(link) + 1}</span>
              </div>
            </a>
          ))}

          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#C5A059] text-stone-950 block text-center py-3.5 rounded-xl font-bold mt-4"
          >
            {lang === 'ar' ? 'توظيف فوري' : 'HIRE MOHAMMAD'}
          </a>
        </div>
      )}

    </nav>
  );
}
