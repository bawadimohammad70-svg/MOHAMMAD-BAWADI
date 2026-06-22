import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Crosshair, HelpCircle, HardHat, FileBadge2 } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage in SVG
  y: number; // percentage in SVG
  label: string;
  labelAr: string;
  description: string;
  descriptionAr: string;
  dimension?: string;
  materialUsed?: string;
}

export default function InteractiveBlueprintHUD() {
  const [activePlan, setActivePlan] = useState<'banquette' | 'radialSinks'>('banquette');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('cushion');
  const [renderOverlay, setRenderOverlay] = useState<boolean>(false);

  // Define hotspots for Banquette Detail
  const banquetteHotspots: Hotspot[] = [
    {
      id: 'cushion',
      x: 18,
      y: 28,
      label: 'Upholstered Cushion Foam Base',
      labelAr: 'تنجيد الفوم الأساسي للمقعد',
      description: 'High-resiliency layered density polyurethane foam. Top layers (30mm) use 30kg/m³ density for sensory plush comfort, while bottom carrying layers (50mm) utilize 45kg/m³ density for optimal long-term structural rebound.',
      descriptionAr: 'رغوة البولي يوريثان عالية الكثافة ذات الطبقات المتعددة. الطبقة العلوية (30 مم) بكثافة 30 كجم/م³ لراحة التماس الأولية، بينما الطبقة السفلية الحاملة (50 مم) بكثافة 45 كجم/م³ لتفادي الهبوط على المدى الطويل.',
      dimension: 'Total thickness 80mm',
      materialUsed: 'Premium Burgundy Velvet Velvet Over High-Resilience Foam'
    },
    {
      id: 'wood-backing',
      x: 10,
      y: 45,
      label: 'Swedish Softwood Framing & Blocking',
      labelAr: 'عوارض وتثبيت الخشب السويدي الصلب',
      description: 'Kiln-dried solid Swedish softwood blocking framework. Heavy duty 50mm x 50mm timber framing anchored with anti-corrosive concrete masonry frame anchors.',
      descriptionAr: 'قواطع وهيكل تثبيت من الخشب السويدي الصلب المعالج في أفران التجفيف ومقاوم للالتواء والتعفن. عوارض 50 مم × 50 مم مثبتة ببراغي خاصة لمقاومة الضغط.',
      dimension: '50mm x 50mm Solid Profiles',
      materialUsed: 'Swedish Spruce / Red Pine Framing'
    },
    {
      id: 'plywood-skirt',
      x: 45,
      y: 72,
      label: 'Water-Resistant Marine Plywood Skirting',
      labelAr: 'وزرة الخشب الرقائقي المقاوم للرطوبة',
      description: '18mm marine-grade water resistant continuous plywood substrate. Curved utilizing professional score-cutting (kerf-bending) and sealed with damp-proof bitumen compound behind curved gypsum wallboard lines.',
      descriptionAr: 'قاعدة متصلة من الخشب الرقائقي البحري المقاوم للماء بسماكة 18 مم. تم تشكيل انحنائها التقني بفتحات طولية متقاربة للحفاظ على الهيكل ومقاومة الرطوبة الداخلية للموقع.',
      dimension: '18mm thickness substrate',
      materialUsed: 'Marine-grade Plywood'
    },
    {
      id: 'led-channel',
      x: 52,
      y: 62,
      label: 'Recessed Aluminium LED Profile',
      labelAr: 'مجرى الألمنيوم الغائر لشريط الإضاءة',
      description: 'Curved extruded aluminium lighting profile. Housing 3000K warm-dim flexible strip light with low-voltage drivers. Snap-in micro-prismatic PC diffuser provides glare-free floor wash lighting.',
      descriptionAr: 'قطاع ألومنيوم مسحوب ومثبت بشكل غائر لتوجيه الإضاءة للأرضية. يضم شريحة LED بقوة إضاءة متدرجة 3000 كلفن لتنفيذ إنارة خافتة وغير مباشرة تغسل الأرضية (Glow effect).',
      dimension: '15mm x 15mm channel',
      materialUsed: 'Anodized Aluminium & Micro-prismatic PMMA'
    },
    {
      id: 'wall-junction',
      x: 82,
      y: 78,
      label: 'Plaster Curved Wall Intersection Joint',
      labelAr: 'فصل وتماسك جبس الحائط الدائري',
      description: 'Finished gypsum cove moulding connection point. Anchored via galvanized metal stud framing with continuous reinforcement mesh to prevent shear stress micro-cracks between wooden frame and solid masonry.',
      descriptionAr: 'نقطة تلاقي هيكل المقاعد وحائط الجبس المقاوم للرطوبة. مدمجة بزوايا حديدية مجلفنة وشبكة ألياف لمنع حدوث التشققات الطفيفة نتيجة اختلاف التمدد الحراري للمواد.',
      dimension: 'Continuous seam-free joint',
      materialUsed: 'Fibered plaster & joint compound'
    }
  ];

  // Define hotspots for Radial Multi-Basin washstand
  const radialHotspots: Hotspot[] = [
    {
      id: 'central-shaft',
      x: 50,
      y: 35,
      label: 'Central Structural Masonry Plumbing Shaft',
      labelAr: 'عمود الخدمات والسباكة الخرساني المركزي',
      description: 'An 800mm diameter cylindrical structural masonry column housing hot, cold water circulation lines, wastewater branch drains, and dynamic steel brackets holding cantilevered washbasin supports.',
      descriptionAr: 'عمود إنشائي دائري قطره 800 مم يضم داخل ثناياه خطوط تغذية المياه الساخنة والباردة المتدفقة، موصلات الصرف، ودعامات هيدروليكية مغروسة لحمل الأحواض الكابولية بنظام الطيران الحرة.',
      dimension: 'Diameter 800mm central column',
      materialUsed: 'Reinforced concrete / red blockwork casing'
    },
    {
      id: 'curved-tiles',
      x: 62,
      y: 52,
      label: 'Concentric Deep Wine-Red Glazed Tiles',
      labelAr: 'البلاط البرغندي القشري اللامع المنحني',
      description: 'Luxurious handmade deep burgundy/maroon vertical tile sheets installed along curved partition parameters. Joints sealed with high-elasticity waterproof epoxy grout matching tone colors perfectly.',
      descriptionAr: 'بلاط خزفي طولي برغندي لامع من تدرج "Red Inferno". يتم تركيبه بمهارة على السطوع الدائرية للخدمات بمرونة تامة لضمان عدم وجود فراغات باستخدام مروة إيبوكسي عازلة.',
      dimension: '30mm x 210mm vertical profile',
      materialUsed: 'High-Glaze Maroon Clay Ceramics'
    },
    {
      id: 'faucet-fixture',
      x: 32,
      y: 42,
      label: 'Cantilever Tall Curved Brass Faucet',
      labelAr: 'خلاط مياه نحاسي قوسّي كابولي شاهق',
      description: 'Deck-mounted extra tall arch electronic sensor-activated faucet. Lead-free sanitary solid eco-brass construction customized with antique gold brushed finish.',
      descriptionAr: 'خلاط بمستشعر حركة مدمج وقوس مرتفع مرتجل على القاعدة. مصنوع بالكامل من النحاس الصحي الخالي من الرصاص اللامع العتيق لمنع آثار البقع والأكسدة الرطبة.',
      dimension: 'Height 300mm, Outreach 165mm',
      materialUsed: 'EPA Certified Brushed Sanitary Brass'
    },
    {
      id: 'floor-inlay',
      x: 50,
      y: 82,
      label: 'Concentric Waterjet CNC Marble Intarsia Flooring',
      labelAr: 'بلاط الرخام والجرانيت الدائري CNC للأرضية',
      description: 'Exquisite concentric circular spatial paving tiles. Individually cut via super high-pressure CAD/CNC waterjet machinery for strict seam alignments. Set over mortar waterproofing sub-screed bed.',
      descriptionAr: 'لوحة فنية أرضية دائرية متداخلة مصممة بالكمبيوتر ومقطوعة بماكينة قص الرخام بالمياه المضغوطة CNC بتفاوت متناهي الصغر. تركب ببراعة فوق طبقة عزل المياه الكيميائية.',
      dimension: 'Custom concentric radii tiles',
      materialUsed: 'Calacatta Violace & Rosa Marble Slab inlays'
    }
  ];

  const hotspots = activePlan === 'banquette' ? banquetteHotspots : radialHotspots;
  const currentHotspot = hotspots.find(h => h.id === activeHotspotId) || hotspots[0];

  return (
    <section id="interactive-blueprints" className="py-20 bg-stone-950 font-sans text-stone-100 relative">
      {/* Decorative Blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d30_1px,transparent_1px),linear-gradient(to_bottom,#0c1d30_1px,transparent_1px)] bg-[size:30px_30px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block mb-2">Technical Execution</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-medium text-white">
              Executive Shop Drawings HUD
            </h2>
            <p className="text-stone-400 mt-2 max-w-xl text-sm">
              An interactive viewer for real construction blueprints. Select a schematic below, hover/click on the target pins to reveal the structural materials, engineering metrics, and manufacturing specifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-stone-900/60 p-2 rounded-xl border border-stone-800">
            {/* Plan selectors */}
            <button
              onClick={() => {
                setActivePlan('banquette');
                setActiveHotspotId('cushion');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activePlan === 'banquette'
                  ? 'bg-[#C5A059] text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              01/ BANQUETTE DETAIL SECTION (A-A)
            </button>
            <button
              onClick={() => {
                setActivePlan('radialSinks');
                setActiveHotspotId('central-shaft');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activePlan === 'radialSinks'
                  ? 'bg-[#C5A059] text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              02/ RADIAL WASHROOM VANITY (CROSS)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Schematic SVG Viewer Box (HUD Screen) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-stone-800 bg-stone-950 overflow-hidden relative shadow-2xl">
            {/* Header info */}
            <div className="p-4 bg-stone-900/50 border-b border-stone-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider text-cyan-400 font-bold">CAD ENG. SCHEMA - ONLINE VIEWER</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setRenderOverlay(!renderOverlay)}
                  className="flex items-center gap-1.5 text-[10px] font-mono bg-stone-800 hover:bg-stone-700 text-stone-300 py-1 px-2.5 rounded border border-stone-700/50"
                >
                  {renderOverlay ? <ToggleRight className="w-4 h-4 text-[#C5A059]" /> : <ToggleLeft className="w-4 h-4 text-stone-500" />}
                  <span>RENDER PREVIEW OVERLAY</span>
                </button>
              </div>
            </div>

            {/* Inner blueprint workspace with simulated CAD vectors */}
            <div className="relative flex-1 min-h-[460px] bg-sky-950/20 flex items-center justify-center p-6 border-b border-stone-800 select-none">
              
              {/* Optional photographic render overlay to show finished result */}
              {renderOverlay && (
                <div className="absolute inset-0 z-10 transition-opacity duration-300 overflow-hidden rounded-b-2xl">
                  <img
                    src={
                      activePlan === 'banquette'
                        ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
                        : 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200'
                    }
                    alt="Finished visual render counterpart"
                    className="w-full h-full object-cover filter brightness-[0.25] saturate-50"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-[#C5A059] py-1 px-2 rounded-md font-mono text-[10px] border border-[#C5A059]/40 z-10 font-bold flex items-center gap-1">
                    <HardHat className="w-3.5 h-3.5" />
                    FINISHED CONSTRUCTION PREVIEW (SIMULATED VISUALIZATION)
                  </div>
                </div>
              )}

              {/* Standard grid references */}
              <div className="absolute top-2 left-2 font-mono text-[8px] text-stone-700">COORD: X=102, Y=94, Z=0</div>
              <div className="absolute top-2 right-2 font-mono text-[8px] text-stone-700">SCALE: 1:12.5 [METRIC]</div>
              <div className="absolute bottom-2 left-2 font-mono text-[8px] text-stone-700">SHEET NO: {activePlan === 'banquette' ? 'A-501' : 'SD-001'}</div>

              {/* DRAWINGS INTERACTIVE SVG CONTAINER */}
              <svg 
                className="w-full max-w-[500px] aspect-square text-cyan-400 font-mono" 
                viewBox="0 0 400 400"
                style={{ filter: renderOverlay ? 'drop-shadow(0 0 12px rgba(34,211,238,0.7))' : 'none' }}
              >
                {/* Defs for gradients, patterns */}
                <defs>
                  <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />
                  </pattern>
                  <pattern id="concretePattern" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(34, 211, 238, 0.15)" />
                    <circle cx="8" cy="12" r="1" fill="rgba(34, 211, 238, 0.15)" />
                    <path d="M 12 4 L 14 6 L 12 8 Z" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* Plan 1: BANQUETTE SECTION A-A */}
                {activePlan === 'banquette' && (
                  <>
                    {/* Concrete wall behind */}
                    <rect x="10" y="40" width="70" height="320" fill="url(#concretePattern)" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1.5" />
                    
                    {/* Wood studs */}
                    <rect x="80" y="70" width="40" height="230" fill="url(#diagonalHatch)" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1" />
                    
                    {/* Banquette framework structures */}
                    {/* Base box */}
                    <rect x="120" y="240" width="160" height="100" fill="none" stroke="rgba(34, 211, 238, 0.7)" strokeWidth="1.5" />
                    
                    {/* Curved bottom skirting where LED recessed is situated */}
                    <path d="M 120 340 L 220 340 C 260 340, 280 320, 280 280 M 280 280 L 280 240" fill="none" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" strokeDasharray="3,1" />
                    <rect x="250" y="320" width="15" height="15" fill="none" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="1" />
                    <circle cx="257" cy="327" r="2" fill="rgb(234, 179, 8)" />

                    {/* Cushions */}
                    {/* Seat cushion */}
                    <rect x="125" y="180" width="155" height="50" rx="10" ry="10" fill="none" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="2.5" />
                    {/* Backrest cushion */}
                    <path d="M 115 80 L 145 80 C 155 80, 160 90, 158 110 L 150 178 C 149 180, 145 182, 140 182 L 110 182 C 105 182, 105 178, 105 170 L 110 90 C 110 82, 112 80, 115 80 Z" fill="none" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="2.5" />

                    {/* Flooring platform */}
                    <line x1="10" y1="360" x2="380" y2="360" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="3" />
                    <line x1="10" y1="365" x2="380" y2="365" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />

                    {/* Dims lines and text markup (just like real blueprints) */}
                    <g stroke="rgba(34, 211, 238, 0.25)" strokeWidth="1">
                      <line x1="290" y1="180" x2="330" y2="180" />
                      <line x1="290" y1="230" x2="330" y2="230" />
                      <line x1="320" y1="160" x2="320" y2="250" />
                    </g>
                    <text x="325" y="210" fill="rgba(34, 211, 238, 0.6)" fontSize="9">H = 450mm</text>

                    <g stroke="rgba(34, 211, 238, 0.25)" strokeWidth="1">
                      <line x1="125" y1="165" x2="125" y2="140" />
                      <line x1="280" y1="165" x2="280" y2="140" />
                      <line x1="120" y1="145" x2="285" y2="145" />
                    </g>
                    <text x="175" y="138" fill="rgba(34, 211, 238, 0.6)" fontSize="9">D = 650mm</text>
                  </>
                )}

                {/* Plan 2: RADIAL SINK DETAIL */}
                {activePlan === 'radialSinks' && (
                  <>
                    {/* Central masonry column */}
                    <circle cx="200" cy="200" r="70" fill="url(#concretePattern)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="50" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="3,3" />

                    {/* Sinks radiating out (representing radial concept) */}
                    {/* North Sink */}
                    <path d="M 175 110 L 225 110 C 220 70, 180 70, 175 110 Z" fill="none" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" />
                    {/* East Sink */}
                    <path d="M 290 175 L 290 225 C 330 220, 330 180, 290 175 Z" fill="none" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" />
                    {/* South Sink */}
                    <path d="M 175 290 L 225 290 C 220 330, 180 330, 175 290 Z" fill="none" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" />
                    {/* West Sink */}
                    <path d="M 110 175 L 110 225 C 70 220, 70 180, 110 175 Z" fill="none" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" />

                    {/* Faucets (gold tone) */}
                    <circle cx="200" cy="115" r="4" fill="rgb(234, 179, 8)" />
                    <circle cx="285" cy="200" r="4" fill="rgb(234, 179, 8)" />
                    <circle cx="200" cy="285" r="4" fill="rgb(234, 179, 8)" />
                    <circle cx="115" cy="200" r="4" fill="rgb(234, 179, 8)" />

                    {/* Custom concentric circular floor patterns */}
                    <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1" strokeDasharray="5,2" />
                    <circle cx="200" cy="200" r="175" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />

                    {/* Concentric patterns segments (concentric circles) */}
                    <path d="M 50 200 A 150 150 0 0 1 350 200" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="3" strokeDasharray="1,12" />

                    {/* Blueprints text references */}
                    <text x="210" y="195" fill="rgba(34, 211, 238, 0.6)" fontSize="8">SHARED SHAFT</text>
                    <text x="210" y="210" fill="rgba(34, 211, 238, 0.6)" fontSize="8">R = 400mm</text>

                    {/* Radius markings */}
                    <line x1="200" y1="200" x2="350" y2="200" stroke="rgba(234, 179, 8, 0.4)" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="310" y="190" fill="rgb(234, 179, 8)" fontSize="8">R=1500</text>
                  </>
                )}
              </svg>

              {/* DYNAMIC HUD HOTSPOT PINS OVERLAID IN REAL RUNTIME */}
              {hotspots.map((spot) => {
                const isActive = spot.id === activeHotspotId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    className="absolute z-30 transition-transform duration-300 hover:scale-110 group"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Radiating pulsing rings around pins */}
                      <span className={`absolute w-8 h-8 rounded-full border opacity-75 ${
                        isActive 
                          ? 'border-yellow-400 bg-yellow-400/20 animate-ping' 
                          : 'border-cyan-400 bg-cyan-400/10 group-hover:animate-ping'
                      }`} />
                      
                      {/* Active point marker */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors ${
                        isActive
                          ? 'bg-yellow-400 border-yellow-500 text-stone-950 font-bold'
                          : 'bg-stone-900 border-cyan-400 text-cyan-400 group-hover:bg-cyan-950'
                      }`}>
                        <Crosshair className={`w-3.5 h-3.5 ${isActive ? 'animate-spin' : ''}`} />
                      </div>

                      {/* Small text chip shown on hover */}
                      <span className="pointer-events-none absolute bottom-6 bg-black/90 text-[10px] font-mono text-stone-300 py-1 px-2.5 rounded border border-stone-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:-translate-y-0 shadow-lg">
                        {spot.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Instruction bar */}
            <div className="p-3 bg-stone-900/40 text-center font-mono text-[9px] text-stone-500 flex justify-center items-center gap-1.5 border-t border-stone-900">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>CLICK THE PULSING PINS ON THE VECTORS BLUEPRINT TO ANALYZE REAL SAMPLES</span>
            </div>
          </div>

          {/* Blueprint Detail Data Panel (Executive Sheet HUD) */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-stone-800 bg-stone-950 overflow-hidden shadow-2xl justify-between">
            
            {/* Header Title item */}
            <div className="p-6 border-b border-stone-800 bg-stone-900/40">
              <div className="flex items-center gap-2 mb-2">
                <FileBadge2 className="w-4 h-4 text-[#C5A059]" />
                <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wide">DETAIL CARD / SHEET HUD</span>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-serif text-white font-medium">{currentHotspot.label}</h3>
                  <h4 className="text-xs text-stone-500 mt-1 font-mono font-medium">{currentHotspot.labelAr}</h4>
                </div>
                <div className="bg-stone-800 text-stone-400 px-2 py-0.5 rounded font-mono text-[9px] border border-stone-700/50 uppercase">
                  ACTIVE REF
                </div>
              </div>
            </div>

            {/* Body Description */}
            <div className="p-6 flex-1 space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">Detailed Technical Report:</span>
                <p className="text-xs text-stone-350 leading-relaxed bg-stone-900/30 p-4 rounded-xl border border-stone-900">
                  {currentHotspot.description}
                </p>
                <p className="text-xs text-stone-450 leading-relaxed mt-2 italic bg-stone-900/10 p-4 rounded-xl border border-stone-900/50" dir="rtl">
                  {currentHotspot.descriptionAr}
                </p>
              </div>

              {/* Specifications table */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl border border-stone-900 bg-stone-900/20">
                  <span className="text-[9px] font-mono text-stone-500 uppercase block">Engineered Dimension:</span>
                  <span className="text-xs font-mono text-stone-200 mt-1 block font-semibold">{currentHotspot.dimension || 'Varies per spec'}</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-900 bg-stone-900/20">
                  <span className="text-[9px] font-mono text-stone-500 uppercase block">Material Curation:</span>
                  <span className="text-xs font-mono text-stone-200 mt-1 block font-semibold">{currentHotspot.materialUsed || 'Solid custom material'}</span>
                </div>
              </div>

              {activePlan === 'banquette' ? (
                <div className="text-[10px] font-mono text-stone-500 space-y-1">
                  <span className="text-[11px] font-serif font-semibold text-stone-400 block mb-1">Standard Reference Checklist:</span>
                  <p>✓ Minimum fire latency compliance checks completed.</p>
                  <p>✓ Fully insulated thermal lighting channels embedded.</p>
                  <p>✓ Resiliency compression test: Passed (10yr active load).</p>
                </div>
              ) : (
                <div className="text-[10px] font-mono text-stone-500 space-y-1">
                  <span className="text-[11px] font-serif font-semibold text-stone-400 block mb-1">Hydraulic Standard Compliance:</span>
                  <p>✓ Flow pressure optimizer configured: 3.5 bar limit.</p>
                  <p>✓ Standard backflow prevention check valves implemented.</p>
                  <p>✓ Sub-floor moisture membrane layer: Level A polyurethane.</p>
                </div>
              )}
            </div>

            {/* Sheet Footer Details */}
            <div className="p-6 bg-stone-900/40 border-t border-stone-800 text-xs font-mono text-stone-400 space-y-2">
              <span className="text-[9px] text-[#C5A059] uppercase block tracking-wider">Sheet Metadata</span>
              <div className="flex justify-between">
                <span>Drawing Title:</span>
                <span className="text-stone-200 font-bold">{activePlan === 'banquette' ? 'BANQUETTE TYPICAL' : 'RADIAL WASHBIN SYST.'}</span>
              </div>
              <div className="flex justify-between">
                <span>Approved Lead:</span>
                <span className="text-stone-200 font-bold">MOHAMMAD BAWADI</span>
              </div>
              <div className="flex justify-between">
                <span>Revision Code:</span>
                <span className="text-stone-200 font-bold">A/R-REV 2</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
