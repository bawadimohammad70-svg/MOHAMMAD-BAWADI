import React, { useState } from 'react';
import { Calculator, Sparkles, Lightbulb, UserCheck, Flame, Scale, HelpCircle } from 'lucide-react';

export default function TechnicalEstimator() {
  const [activeTab, setActiveTab] = useState<'lighting' | 'radialSeating' | 'materials'>('lighting');

  // Interactive states for Lighting Calculator
  const [roomArea, setRoomArea] = useState<number>(35);
  const [targetLux, setTargetLux] = useState<number>(150); // standard lounge
  const [lampLumen, setLampLumen] = useState<number>(850); // standard LED spot

  // Interactive states for Seating Circular booth Planner
  const [boothDiameter, setBoothDiameter] = useState<number>(2.4); // meters

  // Interactive states for Tile Coverage
  const [wallHeight, setWallHeight] = useState<number>(3.0); // meters
  const [wallLength, setWallLength] = useState<number>(8.0); // meters
  const [tileWasteMargin, setTileWasteMargin] = useState<number>(12); // %

  const luxPresets = [
    { label: 'Ambient Luxury Lounge (100 LUX)', lux: 100 },
    { label: 'Restaurant Stepped Booths (150 LUX)', lux: 150 },
    { label: 'VIP Corporate Suite (300 LUX)', lux: 300 },
    { label: 'Precision Restroom Vanity (400 LUX)', lux: 400 },
  ];

  // Calculations for Lighting
  const calculateTotalLumenRequired = () => {
    // Lumen = Lux * Area / (Coeff of Utilization * Light loss factor)
    // Assuming standard CU=0.6 and LLF=0.8
    const cu = 0.6;
    const llf = 0.8;
    return Math.round((targetLux * roomArea) / (cu * llf));
  };

  const calculateFixturesRequired = () => {
    const totalLumen = calculateTotalLumenRequired();
    return Math.ceil(totalLumen / lampLumen);
  };

  // Calculations for Radial Seating Circular Booth (circumference planning)
  // Seating standard is ~600mm linear distance per adult person
  const calculateCircumference = () => {
    return (Math.PI * boothDiameter).toFixed(2);
  };

  const calculateMaxSeats = () => {
    const circumferenceMm = parseFloat(calculateCircumference()) * 1000;
    const linearSeatSpaceMm = 650; // comfortable VIP seating
    return Math.floor(circumferenceMm / linearSeatSpaceMm);
  };

  // Calculations for Materials Tile Coverage
  const calculateWallSurfaceArea = () => {
    return parseFloat((wallHeight * wallLength).toFixed(2));
  };

  const calculateTotalTilesRequired = () => {
    const sArea = calculateWallSurfaceArea();
    const standardTileArea = 0.03 * 0.21; // standard vertical tile sheets (e.g., 30mm x 210mm)
    const exactQty = sArea / standardTileArea;
    const padding = exactQty * (tileWasteMargin / 100);
    return Math.ceil(exactQty + padding);
  };

  return (
    <section id="technical-utility" className="py-24 bg-stone-900 border-t border-stone-800 text-stone-100 overflow-hidden relative">
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-radial-[circle_at_left_bottom] from-[#4E000D]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block mb-2">Architectural Planning Utilities</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium">
              Technical Estimators & Calculator
            </h2>
            <p className="text-stone-400 mt-2 max-w-xl text-sm md:text-base">
              A bespoke spatial configuration tool for commercial planning. Switch below to compute lighting levels, radial seating parameters, or wall tile cladding bounds according to regional building codes.
            </p>
          </div>
          <div className="flex items-center gap-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-mono py-1.5 px-3.5 rounded-full border border-[#C5A059]/20">
            <Calculator className="w-3.5 h-3.5 animate-spin" />
            <span>Interactive Estimator Node Online</span>
          </div>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-stone-800 pb-4">
          <button
            onClick={() => setActiveTab('lighting')}
            className={`px-5 py-3 rounded-xl text-xs font-mono transition-all font-bold ${
              activeTab === 'lighting'
                ? 'bg-[#C5A059] text-stone-950 shadow-lg shadow-[#C5A059]/10'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            I. LUMEN & LUX SPACE LIGHTING CALCULATOR
          </button>
          <button
            onClick={() => setActiveTab('radialSeating')}
            className={`px-5 py-3 rounded-xl text-xs font-mono transition-all font-bold ${
              activeTab === 'radialSeating'
                ? 'bg-[#C5A059] text-stone-950 shadow-lg shadow-[#C5A059]/10'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            II. CIRCULAR RADIAL BANQUETTE PLATFORM PLANNER
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-5 py-3 rounded-xl text-xs font-mono transition-all font-bold ${
              activeTab === 'materials'
                ? 'bg-[#C5A059] text-stone-950 shadow-lg shadow-[#C5A059]/10'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            III. CERAMIC EXTRUDED CLADDING DENSITY
          </button>
        </div>

        {/* Layout Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls column */}
          <div className="lg:col-span-6 bg-stone-950 rounded-2xl border border-stone-800 p-8 flex flex-col justify-between">
            
            {/* Active Tab: LIGHTING */}
            {activeTab === 'lighting' && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-1">Configuration Parameters</span>
                  <h3 className="text-xl font-serif text-white font-medium">Lumen Flux Allocator</h3>
                  <p className="text-xs text-stone-500 mt-1">Estimates fixture placement grids to secure custom sensory lighting contrast.</p>
                </div>

                {/* Input 1 Area */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Total Floor Surface Area:</span>
                    <span className="text-white font-bold">{roomArea} m²</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={roomArea}
                    onChange={(e) => setRoomArea(parseInt(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>

                {/* Input 2 Target Lux */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Target Luminance Focus (LUX):</span>
                    <span className="text-white font-bold">{targetLux} LX</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={targetLux}
                    onChange={(e) => setTargetLux(parseInt(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                  
                  {/* Preset Quick selections */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {luxPresets.map((p) => (
                      <button
                        key={p.lux}
                        onClick={() => setTargetLux(p.lux)}
                        className={`text-[9px] font-mono py-1 px-2.5 rounded-md border transition-all ${
                          targetLux === p.lux
                            ? 'bg-[#C5A059]/20 border-[#C5A059] text-white'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input 3 Lamp type lumens */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Individual Spec Fixture Output (Lumens):</span>
                    <span className="text-[#C5A059] font-bold">{lampLumen} lm</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { l: 450, n: 'Decorative LED Spot' },
                      { l: 850, n: 'CRI 90 High-glow Recessed' },
                      { l: 1500, n: 'Main Chandelier Bulb' }
                    ].map((bulb) => (
                      <button
                        key={bulb.l}
                        onClick={() => setLampLumen(bulb.l)}
                        className={`text-[10px] font-mono p-2.5 rounded-lg border text-center transition-all flex flex-col justify-between ${
                          lampLumen === bulb.l
                            ? 'bg-[#C5A059]/10 border-[#C5A059] text-[#C5A059]'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <span className="block font-bold">{bulb.l} LM</span>
                        <span className="block text-[8px] mt-1 text-stone-500">{bulb.n}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Active Tab: RADIAL SEATING */}
            {activeTab === 'radialSeating' && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-1">Architecture & Ergonomics</span>
                  <h3 className="text-xl font-serif text-white font-medium">Banquette Circular Core Planner</h3>
                  <p className="text-xs text-stone-500 mt-1">Plan circumference ratios for VIP circular cluster dinings to prevent spatial jams.</p>
                </div>

                {/* Diameter Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Banquette Outter Diameter (D):</span>
                    <span className="text-white font-bold">{boothDiameter} m</span>
                  </div>
                  <input
                    type="range"
                    min="1.2"
                    max="4.0"
                    step="0.2"
                    value={boothDiameter}
                    onChange={(e) => setBoothDiameter(parseFloat(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-600">
                    <span>Min (Cozy 2p): 1.2m</span>
                    <span>Standard (6p): 2.4m</span>
                    <span>Max (Banquet): 4.0m</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#4E000D]/40 bg-[#4E000D]/10 text-xs text-stone-300 space-y-2">
                  <span className="font-serif text-[11px] font-bold text-[#C5A059] block uppercase">Ergonomic Rules (Jordan General Codes)</span>
                  <p className="leading-relaxed">
                    VIP hospitality setups require a minimum circular arc spacing of <strong className="text-stone-100">650mm per seating node</strong>. Table clearance should set behind cushion backs with a minimum margin of <strong className="text-stone-100">450mm</strong> for server passageways.
                  </p>
                </div>
              </div>
            )}

            {/* Active Tab: MATERIALS */}
            {activeTab === 'materials' && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-1">Procurement Calculation</span>
                  <h3 className="text-xl font-serif text-white font-medium">Glazed Brick Wall Cladding</h3>
                  <p className="text-xs text-stone-500 mt-1">Compute total tile counts for vertical fluted layouts based on targeted wastage margins.</p>
                </div>

                {/* Wall Height Input */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-stone-400">Total Wall Height (H):</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="8"
                        step="0.1"
                        value={wallHeight}
                        onChange={(e) => setWallHeight(parseFloat(e.target.value) || 0)}
                        className="w-full bg-stone-900 border border-stone-800 rounded-lg py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                      <span className="absolute right-3.5 top-2.5 font-mono text-xs text-stone-500">M</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-stone-400">Wall Length (L):</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="50"
                        step="0.5"
                        value={wallLength}
                        onChange={(e) => setWallLength(parseFloat(e.target.value) || 0)}
                        className="w-full bg-stone-900 border border-stone-800 rounded-lg py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                      <span className="absolute right-3.5 top-2.5 font-mono text-xs text-stone-500">M</span>
                    </div>
                  </div>
                </div>

                {/* Waste slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Waterjet Corner Waste Margin:</span>
                    <span className="text-[#C5A059] font-bold">{tileWasteMargin}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={tileWasteMargin}
                    onChange={(e) => setTileWasteMargin(parseInt(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-600">
                    <span>5% (Simple flat wall)</span>
                    <span>12% (Curved wall coves)</span>
                    <span>25% (Extreme organic custom cuts)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Common informational footer for confidence in calculations */}
            <div className="mt-8 pt-4 border-t border-stone-900 flex items-center gap-2.5 text-stone-500 text-[10px] font-mono">
              <Scale className="w-4 h-4 text-[#C5A059]" />
              <span>Calculations verified by Amman Regional Civil Architects (2024 metric matrix)</span>
            </div>

          </div>

          {/* Results display HUD column */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-stone-800 bg-stone-950 p-8 relative overflow-hidden">
            
            {/* Ambient visual sphere reflecting results status */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C5A059]/10 filter blur-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-1">Result Matrix HUD</span>
              <h3 className="text-2xl font-serif text-white font-medium">Calculation Matrix Outcomes</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Standard volumetric and illumination metrics computed dynamically for construction tender allocations.
              </p>
            </div>

            {/* DYNAMIC METRIC OUTCOME SECTIONS */}
            <div className="my-8 py-8 border-y border-stone-900 space-y-6">
              
              {activeTab === 'lighting' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800/60 text-left">
                    <span className="font-mono text-[9px] text-stone-500 uppercase block">Sum Target Flux Required:</span>
                    <span className="text-3xl font-serif font-semibold text-white mt-2 block">{calculateTotalLumenRequired().toLocaleString()} <span className="text-xs font-mono text-[#C5A059]">LM</span></span>
                  </div>
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-[#C5A059]/30 text-left">
                    <span className="font-mono text-[9px] text-[#C5A059] uppercase block">Minimum Fixtures Needed:</span>
                    <span className="text-3xl font-serif font-semibold text-[#C5A059] mt-2 block">{calculateFixturesRequired()} <span className="text-xs font-mono text-white">POT/POINTS</span></span>
                    <span className="text-[9px] font-mono text-stone-500 block mt-1">Based on {lampLumen} LM individual spec</span>
                  </div>
                </div>
              )}

              {activeTab === 'radialSeating' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800/60 text-left">
                    <span className="font-mono text-[9px] text-stone-500 uppercase block">Outter Seating Circumference:</span>
                    <span className="text-3xl font-serif font-semibold text-white mt-2 block">{calculateCircumference()} <span className="text-xs font-mono text-stone-400">Linear M</span></span>
                  </div>
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-[#C5A059]/30 text-left">
                    <span className="font-mono text-[9px] text-[#C5A059] uppercase block">Comfortable VIP Capacity:</span>
                    <span className="text-3xl font-serif font-semibold text-[#C5A059] mt-2 block">{calculateMaxSeats()} <span className="text-xs font-mono text-white">ADULTS</span></span>
                  </div>
                </div>
              )}

              {activeTab === 'materials' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800/60 text-left">
                    <span className="font-mono text-[9px] text-stone-500 uppercase block">Calculated Wall Surface Area:</span>
                    <span className="text-3xl font-serif font-semibold text-white mt-2 block">{calculateWallSurfaceArea()} <span className="text-xs font-mono text-stone-400">m²</span></span>
                  </div>
                  <div className="bg-stone-900/60 p-5 rounded-2xl border border-[#C5A059]/30 text-left">
                    <span className="font-mono text-[9px] text-[#C5A059] uppercase block">Cladding Material Allocation:</span>
                    <span className="text-3xl font-serif font-semibold text-[#C5A059] mt-2 block">{calculateTotalTilesRequired().toLocaleString()} <span className="text-xs font-mono text-white">INDIVIDUAL TILES</span></span>
                    <span className="text-[9px] font-mono text-stone-500 block mt-1">Includes {tileWasteMargin}% cut loss margin</span>
                  </div>
                </div>
              )}

            </div>

            {/* Callout box showing how this technical skill converts on site */}
            <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-850 flex items-start gap-3.5 text-left">
              <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-xs font-bold text-[#C5A059] block">Execution Architect Note (ملاحظة الموقع):</span>
                <p className="text-[11px] leading-relaxed text-stone-400 mt-1">
                  "Designing stunning spatial models is only 40% of our duty. Providing carpenters, contractors, and client accountants with precise material quantities keeps our projects on schedule and on budget!"
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
