/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ProjectShowcase from './components/ProjectShowcase';
import InteractiveBlueprintHUD from './components/InteractiveBlueprintHUD';
import MaterialMoodboard from './components/MaterialMoodboard';
import TechnicalEstimator from './components/TechnicalEstimator';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { MATERIAL_BOARD_SAMPLES, PERSONAL_INFO } from './data';
import { MaterialSample } from './types';
import { Compass, Sparkles, Sliders, ArrowDown, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSample, setActiveSample] = useState<MaterialSample>(MATERIAL_BOARD_SAMPLES[0]);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div 
      className="min-h-screen bg-[#070707] text-stone-100 font-sans selection:bg-[#C5A059] selection:text-stone-950 scroll-smooth"
      style={{ '--accent-theme': activeSample.hex } as React.CSSProperties}
    >
      {/* Upper informational announcement for recruiters */}
      <div className="bg-stone-950 border-b border-stone-900 py-2.5 px-4 text-center text-xs font-mono relative z-50 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
        <span className="text-stone-300">
          {language === 'ar' 
            ? 'متاح حالياً لعقود العمل في عمان ودول الخليج العربي.' 
            : 'Currently open to leading interior roles & freelance executive contracts in Amman / GCC.'}
        </span>
        <button 
          onClick={toggleLanguage}
          className="ml-4 bg-[#C5A059] text-stone-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase hover:bg-white transition-colors"
        >
          {language === 'en' ? 'العربية' : 'ENGLISH'}
        </button>
      </div>

      {/* Main navigation */}
      <Navigation onLanguageToggle={toggleLanguage} lang={language} />

      {/* MASTHEAD HERO HEADER */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-[circle_at_center] from-[#140608] via-[#070707] to-[#070707]">
        
        {/* Swirling organic light circles matching selected material highlight */}
        <div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: activeSample.hex }}
        />
        
        {/* Subtle grid pattern for blueprint layout vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#101010_1px,transparent_1px),linear-gradient(to_bottom,#101010_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Core */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block bg-stone-900 border border-stone-800 rounded-md py-1 px-2.5 shadow-sm font-bold">
                  PORTFOLIO OF EXCELLENCE
                </span>
                <span className="h-4 w-[1px] bg-stone-800" />
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                  {language === 'ar' ? 'تصنيف ممتاز' : 'BATCH 2026 REF'}
                </span>
              </div>

              {/* Huge typographic pair */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight font-medium leading-[0.95] text-white">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-serif text-[#C5A059] font-medium tracking-tight">
                {language === 'ar' ? PERSONAL_INFO.nameAr : PERSONAL_INFO.title}
              </h2>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-xl font-sans font-light">
                {language === 'ar' 
                  ? 'خبرة تتجاوز الخمس سنوات في النمذجة ثلاثية الأبعاد والمخططات التنفيذية للمطاعم والفنادق والوحدات الصحية الفاخرة.' 
                  : 'Bridging sensory organic comfort with ultra-detailed municipal CAD drafts. Specialize in high-concept spatial layouts, bespoke modular joinery, and on-site build coordination.'}
              </p>
            </div>

            {/* Micro stats dashboard inside hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-stone-900/60 font-mono">
              <div>
                <span className="text-[9px] text-stone-500 uppercase block">SITE SUPERVISORY</span>
                <span className="font-serif text-lg font-bold text-white block mt-0.5">5+ Years</span>
              </div>
              <div>
                <span className="text-[9px] text-stone-500 uppercase block font-serif">MUNICIPAL CAD</span>
                <span className="font-serif text-lg font-bold text-white block mt-0.5">100% Accurate</span>
              </div>
              <div>
                <span className="text-[9px] text-stone-500 uppercase block">ACTIVE LOCATION</span>
                <span className="font-serif text-lg font-bold text-[#C5A059] block mt-0.5">Amman JOD</span>
              </div>
              <div>
                <span className="text-[9px] text-stone-500 uppercase block font-serif">AURA MOTIF</span>
                <span className="font-serif text-lg font-bold text-stone-300 block mt-0.5 uppercase tracking-wide truncate">{activeSample.id.split('-')[1]}</span>
              </div>
            </div>

            {/* Big Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                href="#project-showcase"
                className="bg-[#C5A059] hover:bg-[#B38E46] text-stone-950 font-bold px-6 py-3.5 rounded-xl text-xs font-mono tracking-wider transition-transform transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg"
              >
                <Compass className="w-4 h-4 stroke-[2.5]" />
                <span>{language === 'ar' ? 'عرض الأعمال الإبداعية' : 'EXPLORE GALLERY WORKS'}</span>
              </a>

              <a
                href="#interactive-blueprints"
                className="bg-stone-900 hover:bg-stone-850 text-white font-mono text-xs px-6 py-3.5 rounded-xl border border-stone-800 transition-colors flex items-center gap-2 shadow-inner"
              >
                <Sliders className="w-4 h-4 text-[#C5A059] animate-spin" />
                <span>{language === 'ar' ? 'المخططات التنفيذية' : 'LOAD CAD HUD'}</span>
              </a>
            </div>

          </div>

          {/* Right Hero Preview Card (Aesthetic perspective frame) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="absolute -inset-1 rounded-3xl blur-md opacity-30 transition-colors duration-1000 animate-pulse pointer-events-none"
              style={{ backgroundColor: activeSample.hex }}
            />
            
            {/* The Visual perspective card */}
            <div className="relative bg-stone-950 rounded-3xl overflow-hidden border border-stone-850 p-6 flex flex-col justify-between aspect-3/4 drop-shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-mono text-stone-500 bg-stone-900 py-1 px-2.5 rounded border border-stone-800 uppercase tracking-widest font-bold">
                  PERSPECTIVE MATRIX
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-[pulse_1.5s_infinite]" />
              </div>

              {/* Procedural vector rendering inside the card */}
              <div className="relative flex-1 bg-stone-900/40 rounded-xl overflow-hidden border border-stone-900 flex items-center justify-center p-6 mb-6">
                <div className="absolute inset-0 bg-[#0c1d30]/5 border border-cyan-400/10 rounded-lg pointer-events-none" />
                
                {/* SVG 3D wireframe mockup (represents raw structure) */}
                <svg className="w-3/4 h-3/4 text-[#C5A059] opacity-75" viewBox="0 0 200 200">
                  <path d="M 20 50 L 100 10 L 180 50 L 180 150 L 100 190 L 20 150 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M 20 50 L 100 90 L 180 50" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M 100 90 L 100 190" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />
                  
                  {/* Internal design details indicator */}
                  <circle cx="100" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
                  <line x1="100" y1="50" x2="160" y2="70" stroke="#4E000D" strokeWidth="1" />
                  <circle cx="160" cy="70" r="3.5" fill="#4E000D" />
                </svg>

                {/* Text identifier */}
                <div className="absolute bottom-2 left-2 text-[#C5A059] font-mono text-[8px] uppercase tracking-wider">
                  Geometric calibration v2
                </div>
              </div>

              {/* Active material palette reference details on bottom */}
              <div className="space-y-2 text-left">
                <div className="flex justify-between text-[10px] font-mono text-stone-500">
                  <span>ACTIVE CALIBRATION CARD</span>
                  <span className="text-[#C5A059]">0{MATERIAL_BOARD_SAMPLES.indexOf(activeSample) + 1}</span>
                </div>
                <h3 className="text-md font-serif text-white font-medium">{activeSample.name}</h3>
                <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">
                  {activeSample.description}
                </p>
                <div className="flex items-center gap-2 pt-2 text-[10px] font-mono">
                  <span className="text-stone-500 font-bold">THEME CODE:</span>
                  <span className="text-white py-0.5 px-2 bg-stone-900 rounded border border-stone-800 uppercase tracking-widest leading-none">
                    {activeSample.id}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Scroll Indicator arrow */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[9px] text-stone-600 animate-bounce cursor-pointer">
          <span>{language === 'ar' ? 'اسحب لمعاينة المزيد' : 'SCROLL TO BEGIN'}</span>
          <ArrowDown className="w-4 h-4 text-[#C5A059]" />
        </div>

      </header>

      {/* CORE PORTFOLIO CHANNELS */}

      {/* 1. Project Showcase Gallery */}
      <ProjectShowcase />

      {/* 2. Executive Shop Drawings HUD */}
      <InteractiveBlueprintHUD />

      {/* 3. Materials Tactile Board */}
      <MaterialMoodboard activeSample={activeSample} onSelectSample={(sample) => setActiveSample(sample)} />

      {/* 4. Architectural Estimator & Space planner tool */}
      <TechnicalEstimator />

      {/* 5. Staggered Resume & Timeline Credentials */}
      <AboutSection />

      {/* 6. Dynamic Recruiter Contact & Intake */}
      <ContactSection />

      {/* FOOTER CORE */}
      <footer className="bg-stone-950 py-16 text-center border-t border-stone-900 text-xs font-mono text-stone-400 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex justify-center items-center gap-3">
            <span className="h-[1px] w-8 bg-stone-800" />
            <span className="serif text-white font-serif tracking-wider text-base">{PERSONAL_INFO.portfolioOwner}</span>
            <span className="h-[1px] w-8 bg-stone-800" />
          </div>
          <p className="text-stone-500 max-w-sm mx-auto leading-relaxed text-[11px]">
            Designed & programmed utilizing top execution frameworks. All CAD vector calculations fully standardized according to modular code criteria.
          </p>
          <div className="pt-4 text-[10px] text-stone-600">
            © 2026. Mohammad Bawadi. All Rights Reserved. Jordan / Amman.
          </div>
        </div>
      </footer>
    </div>
  );
}

