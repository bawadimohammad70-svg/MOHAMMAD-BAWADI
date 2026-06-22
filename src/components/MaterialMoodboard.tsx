import React, { useState } from 'react';
import { MATERIAL_BOARD_SAMPLES } from '../data';
import { MaterialSample } from '../types';
import { Layers, Info, Check, Eye } from 'lucide-react';

interface MoodboardProps {
  activeSample: MaterialSample;
  onSelectSample: (sample: MaterialSample) => void;
}

export default function MaterialMoodboard({ activeSample, onSelectSample }: MoodboardProps) {
  const [selectedSpecTab, setSelectedSpecTab] = useState<'details' | 'specs' | 'usage'>('details');

  const getTexturePreviewClass = (pattern: string) => {
    switch (pattern) {
      case 'velvet':
        return 'bg-gradient-to-tr from-rose-950 via-red-900 to-rose-950 shadow-inner opacity-90';
      case 'walnut':
        return 'bg-gradient-to-r from-stone-800 via-stone-700 to-amber-950 brightness-95';
      case 'brass':
        return 'bg-gradient-to-tr from-yellow-600 via-amber-300 to-yellow-700 shadow-inner';
      case 'marble':
        return 'bg-stone-100 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-rose-100/50 via-stone-200 to-stone-300';
      case 'fluted-plaster':
        return 'bg-gradient-to-b from-orange-400/80 via-rose-500/70 to-rose-700/80';
      default:
        return 'bg-stone-500';
    }
  };

  const getSpecifications = (sample: MaterialSample) => {
    switch (sample.id) {
      case 'pantone-crimson':
        return {
          density: '480 g/m²',
          fireRating: 'Class A ASTM E84',
          abrasion: '120,000 Double Rubs (Wyzenbeek)',
          sustainability: 'OEKO-TEX Standard 100 Certified',
          bestFor: 'VIP Auditory Booth Seating, Luxury acoustic walling'
        };
      case 'fluted-walnut':
        return {
          density: '640 kg/m³',
          moistureLevel: '8-10% Kiln Dried',
          slatWidth: '22mm slats with 15mm spacing',
          finish: 'Matte water-based polyurethane sealant',
          bestFor: 'Continuous feature walls, integrated secret commercial doors'
        };
      case 'brushed-gold':
        return {
          purity: 'C3604 Eco-Brass Standard',
          thickness: '2.5mm solid profile',
          treatment: 'Anti-fingerprint nano-electroplated',
          finish: 'Dual-directional linear satin brush',
          bestFor: 'Shadow gap inserts, custom high-flow faucet fixtures'
        };
      case 'red-circle-marble':
        return {
          porosity: '0.12% absorption (extremely low)',
          origin: 'Carrara & Apuan Alps quarries',
          fabrication: 'Waterjet CNC cutting at 0.1mm tolerance',
          thickness: '20mm slab base with structural backing',
          bestFor: 'Restroom central radial hubs, feature lobby entry zones'
        };
      case 'fluted-plaster':
        return {
          binder: 'Ecological slaked lime (calcium hydroxide)',
          vapourPermeability: 'Highly breathable (prevents bathroom dampness)',
          application: 'Hand-troweled multi-stage skim coat',
          vocLevel: 'Zero VOC organic pigments',
          bestFor: 'Organic dome ceilings, seamless column transitions'
        };
      default:
        return {};
    }
  };

  const specs = getSpecifications(activeSample);

  return (
    <section id="material-moodboard" className="py-20 bg-stone-900 border-t border-stone-800 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block mb-2">Tactile Architecture</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-medium">
              Interactive Material Moodboard
            </h2>
            <p className="text-stone-400 mt-2 max-w-xl text-sm">
              Explore the real physical textures of the signature <strong className="text-stone-200">"Red Inferno"</strong> palette. Click any swatch below to update the portfolio accents, reveal architectural specifications, and test custom finishes.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-stone-800/80 border border-stone-700/50 rounded-full px-4 py-1.5 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            <span>Click Swatch to Calibrate Palette</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Swatches column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {MATERIAL_BOARD_SAMPLES.map((sample) => {
                const isActive = sample.id === activeSample.id;
                return (
                  <button
                    key={sample.id}
                    id={`swatch-${sample.id}`}
                    onClick={() => onSelectSample(sample)}
                    className={`relative flex flex-col group text-left rounded-xl overflow-hidden border transition-all duration-300 transform ${
                      isActive
                        ? 'border-[#C5A059] bg-stone-800 ring-2 ring-[#C5A059]/20 -translate-y-1'
                        : 'border-stone-800 bg-stone-950 hover:border-stone-700 hover:bg-stone-900'
                    }`}
                  >
                    {/* Visual pattern preview */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${getTexturePreviewClass(sample.texturePattern)}`} />
                      
                      {/* Stylized linear fluting overlay */}
                      {sample.texturePattern === 'walnut' && (
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/40 to-transparent bg-[size:12px_100%] opacity-45" />
                      )}
                      
                      {sample.texturePattern === 'fluted-plaster' && (
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-stone-900/20 to-transparent bg-[size:24px_100%] opacity-30" />
                      )}

                      {/* Material Circle for Marble pattern */}
                      {sample.texturePattern === 'marble' && (
                        <div className="absolute inset-0 flex items-center justify-center p-2 opacity-80">
                          <div className="w-3/4 h-3/4 rounded-full border-4 border-[#4E000D] border-dashed animate-[spin_40s_linear_infinite]" />
                          <div className="absolute w-1/2 h-1/2 rounded-full border-2 border-[#4E000D]" />
                        </div>
                      )}

                      {/* Accent color label inside preview */}
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/70 py-0.5 px-1.5 rounded text-[#C5A059]">
                        {sample.pantone ? 'PANTONE' : 'HEX'}
                      </span>

                      {isActive && (
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                          <div className="bg-[#C5A059] text-stone-950 p-1.5 rounded-full shadow-lg">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metadata text */}
                    <div className="p-3 select-none flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-serif font-semibold text-stone-200 line-clamp-1 group-hover:text-white transition-colors">
                          {sample.name}
                        </h4>
                        <p className="text-[10px] text-stone-500 font-mono mt-0.5 mt-auto line-clamp-1">
                          {sample.type}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-800/40 text-[10px] font-mono">
                        <span className="text-stone-400">{sample.pantone || sample.hex}</span>
                        <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                          USE <Eye className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated 3D Material sphere inspection scene */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="absolute inset-0 bg-radial-[circle_at_20%_20%] from-stone-900/60 via-transparent to-stone-950" />
              
              <div className="relative text-left max-w-sm">
                <span className="text-[10px] font-mono text-[#C5A059] tracking-widest uppercase">3D Render Environment Map</span>
                <h3 className="text-lg font-serif font-medium mt-1 text-white">Dynamic Sphere Shader</h3>
                <p className="text-stone-400 text-xs mt-1">
                  We use accurate surface mapping parameters to evaluate specular gloss and subsurface light scattering of our bespoke material palette.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="bg-stone-800 text-stone-300 text-[10px] font-mono px-2 py-1 rounded">Glossiness: {activeSample.texturePattern === 'brass' ? '0.85' : activeSample.texturePattern === 'velvet' ? '0.15' : '0.05'}</div>
                  <div className="bg-stone-800 text-stone-300 text-[10px] font-mono px-2 py-1 rounded">Subsurface: {activeSample.texturePattern === 'marble' ? 'Medium' : 'None'}</div>
                </div>
              </div>

              {/* Graphical 3D Sphere rendered in SVG */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full blur-xl opacity-20 filter" style={{ backgroundColor: activeSample.hex }} />
                
                <svg className="w-40 h-40 drop-shadow-2xl" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="50%" stopColor={activeSample.hex} />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    <radialGradient id="brassGrad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FFECA8" />
                      <stop offset="40%" stopColor="#C5A059" />
                      <stop offset="85%" stopColor="#5E401B" />
                      <stop offset="100%" stopColor="#1C1409" />
                    </radialGradient>
                    <linearGradient id="marbleLines" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="20%" stopColor="#4E000D" stopOpacity="0.2" />
                      <stop offset="40%" stopColor="#B37D79" stopOpacity="0.4" />
                      <stop offset="45%" stopColor="#4E000D" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                      <stop offset="70%" stopColor="#4E000D" stopOpacity="0.3" />
                    </linearGradient>
                    <pattern id="slats" width="15" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <rect width="10" height="15" fill={activeSample.hex} />
                      <rect x="10" width="5" height="15" fill="#1C1410" />
                    </pattern>
                  </defs>

                  {/* Surface spheres based on textures */}
                  {activeSample.texturePattern === 'brass' ? (
                    <circle cx="100" cy="100" r="85" fill="url(#brassGrad)" />
                  ) : activeSample.texturePattern === 'walnut' ? (
                    <circle cx="100" cy="100" r="85" fill="url(#slats)" />
                  ) : (
                    <>
                      <circle cx="100" cy="100" r="85" fill="url(#sphereGrad)" />
                      {activeSample.texturePattern === 'marble' && (
                        <circle cx="100" cy="100" r="85" fill="url(#marbleLines)" style={{ mixBlendMode: 'multiply' }} />
                      )}
                    </>
                  )}
                  {/* Outer light sheen shadow rim */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
                {/* Visual marker label */}
                <div className="absolute bottom-1 right-1 bg-stone-900 border border-stone-800 py-1 px-2 rounded font-mono text-[9px] text-[#C5A059]">
                  Surface Matrix
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Specifications Panel */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-stone-800 bg-stone-950 overflow-hidden shadow-2xl">
            <div className="p-6 bg-stone-900/60 border-b border-stone-800">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 bg-stone-800 px-2 py-0.5 rounded">Active Material Sample</span>
                  <h3 className="text-xl font-serif font-medium text-white mt-1.5">{activeSample.name}</h3>
                  <p className="text-[#C5A059] font-mono text-xs mt-0.5">{activeSample.type}</p>
                </div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-stone-700/50" style={{ backgroundColor: activeSample.hex }}>
                  <span className="sr-only">Color chip</span>
                </div>
              </div>
              <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                {activeSample.description}
              </p>
            </div>

            {/* Detail Navigation tabs */}
            <div className="flex border-b border-stone-800 bg-stone-900/30 text-xs font-mono">
              <button
                onClick={() => setSelectedSpecTab('details')}
                className={`flex-1 py-3 text-center border-b transition-colors ${
                  selectedSpecTab === 'details' ? 'border-[#C5A059] text-white bg-stone-900' : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                Detailed Spec Sheet
              </button>
              <button
                onClick={() => setSelectedSpecTab('usage')}
                className={`flex-1 py-3 text-center border-b transition-colors ${
                  selectedSpecTab === 'usage' ? 'border-[#C5A059] text-white bg-stone-900' : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                Applications & Context
              </button>
            </div>

            {/* Spec panel body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              {selectedSpecTab === 'details' ? (
                <div className="space-y-4">
                  {Object.entries(specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-start py-2 border-b border-stone-900 text-xs">
                      <span className="font-mono text-stone-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium text-stone-300 text-right max-w-xs">{val as string}</span>
                    </div>
                  ))}
                  <div className="bg-stone-900/50 rounded-xl p-4 border border-stone-800/40 flex items-start gap-3 mt-4">
                    <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed text-stone-400">
                      Standard design values represent minimum compliance parameters according to Jordan National Building Codes (JNBC) and Middle-East Hospitality Hospitality Fit-out Guidelines.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-serif font-medium text-stone-300 uppercase tracking-wider">Primary Application Scope</h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      Typically introduced as a structural finish or bold focal texture in high-traffic hotels, exclusive lounges, commercial washbasins, and sensory boutiques.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-medium text-stone-300 uppercase tracking-wider">Acoustic & Fire Behavior</h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      Designed to work harmoniously with fluted substrates to minimize echo and absorb structural sound waves. Classified under peak flame retardancy brackets.
                    </p>
                  </div>
                  <div className="p-4 bg-[#4E000D]/30 border border-[#4E000D]/50 rounded-xl text-xs flex flex-col gap-1.5 text-stone-300">
                    <span className="font-serif text-[11px] text-[#C5A059] font-medium uppercase tracking-wider">Selected Integration Mode</span>
                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      Using this palette highlight infuses the portal environment with a luxurious, warm architectural weight inspired by classic Middle Eastern terracotta clay and royal brass.
                    </p>
                  </div>
                </div>
              )}

              {/* Custom interaction tool inside moodboard */}
              <div className="mt-8 pt-4 border-t border-stone-900 flex justify-between items-center text-xs">
                <span className="font-mono text-stone-500">Curator Selection Code:</span>
                <span className="font-mono text-stone-200 uppercase">{activeSample.id.replace('-', '_')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
