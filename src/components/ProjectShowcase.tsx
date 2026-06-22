import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { LayoutGrid, FileText, Compass, ExternalLink, ArrowRight, Table, Tags, Layers, Minimize2, Eye } from 'lucide-react';

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'visual' | 'technical' | 'sketch'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Curated Works', labelAr: 'كافة الأعمال والمشاريع', icon: LayoutGrid },
    { id: 'visual', label: '3D Render Masterpieces', labelAr: 'اللقطات والنمذجة ثلاثية الأبعاد', icon: Compass },
    { id: 'technical', label: 'Executive CAD Blueprints', labelAr: 'المخططات التنفيذية والرسومات', icon: FileText },
    { id: 'sketch', label: 'Watercolor & Hand Sketches', labelAr: 'الرسومات اليدوية والمائية', icon: Layers }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="project-showcase" className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#4E000D] uppercase block mb-2">Curated Project Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium">
              Featured Gallery & Studio Works
            </h2>
            <p className="text-stone-500 mt-2 max-w-xl text-sm md:text-base">
              A comprehensive showcase reflecting five years of residential, hospitality, and bathroom sanitation systems. Explore high-fidelity visualizations, and approved municipal construction sheets.
            </p>
          </div>
          
          <div className="bg-[#4E000D]/5 text-[#4E000D] text-xs font-mono py-1.5 px-3.5 rounded-full border border-[#4E000D]/10">
            Total Projects: {PROJECTS.length} Built Cases
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-stone-200/60">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-[#4E000D] text-white shadow-xl shadow-[#4E000D]/10 transform -translate-y-0.5'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-stone-400'}`} />
                <div className="text-left">
                  <span className="block font-bold">{cat.label}</span>
                  <span className="block text-[9px] opacity-70 font-sans">{cat.labelAr}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, index) => {
            return (
              <article
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs hover:shadow-xl hover:border-stone-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-video overflow-hidden bg-stone-100">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Chip */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono tracking-wider font-bold uppercase bg-stone-900/90 text-[#C5A059] py-1 px-2 rounded-md shadow-lg border border-stone-800/40">
                    {p.subcategory}
                  </span>

                  {/* CAD Sheets Watermark overlay */}
                  {p.category === 'technical' && (
                    <div className="absolute inset-0 bg-[#0c1d30]/10 border-2 border-dashed border-cyan-400/30 m-3 rounded-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />
                  )}

                  {/* Inner overlay with CTA */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-stone-900 text-xs font-mono py-2.5 px-5 rounded-full shadow-lg font-bold flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#4E000D]" />
                      Explore Detail & CAD Notes
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-semibold text-stone-900 tracking-tight leading-snug group-hover:text-[#4E000D] transition-colors">
                      {p.title}
                    </h3>
                    <h4 className="text-xs text-stone-400 font-sans line-clamp-1 italic" dir="rtl">
                      {p.titleAr}
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  {/* Footer tag pills */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-stone-100/80 text-stone-600 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#4E000D] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      SHEET DETAILS <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Detailed Expandable HUD Modal when an item is selected */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-800/20 max-h-[90vh] flex flex-col md:flex-row">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-stone-900 hover:bg-stone-800 text-white rounded-full p-2"
                aria-label="Close details"
              >
                <span className="font-sans font-bold text-lg select-none px-2 block">✕</span>
              </button>

              {/* LEFT COLUMN: Visual Media preview */}
              <div className="md:w-1/2 bg-stone-900 relative min-h-[300px] md:min-h-auto">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-[0.85]"
                />
                
                {/* Hologram or grid outline for CAD */}
                {selectedProject.category === 'technical' && (
                  <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none border border-cyan-400/40 m-4 rounded-xl" />
                )}

                {/* Accent band */}
                <div className="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-xs py-2 px-4 rounded-xl border border-stone-800 text-white font-mono text-[10px]">
                  <span>Scope Dimensions Indicator:</span>
                  <span className="block text-[#C5A059] font-bold mt-0.5">{selectedProject.dimensions || 'Custom Built scale'}</span>
                </div>
              </div>

              {/* RIGHT COLUMN: Full Data Details sheet */}
              <div className="md:w-1/2 p-8 overflow-y-auto">
                
                {/* Category tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono bg-stone-100 text-[#4E000D] font-bold px-2.5 py-1 rounded-md uppercase border border-stone-200">
                    {selectedProject.subcategory}
                  </span>
                  <span className="text-[10px] font-mono bg-stone-900 text-[#C5A059] font-bold px-2.5 py-1 rounded-md uppercase">
                    Ref Code: {selectedProject.id.toUpperCase().replace('-', '_')}
                  </span>
                </div>

                {/* Primary titles */}
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 font-bold leading-tight">{selectedProject.title}</h3>
                <h4 className="text-sm text-stone-400 font-sans italic mt-1 pb-4 border-b border-stone-200" dir="rtl">{selectedProject.titleAr}</h4>

                {/* Description sections */}
                <div className="space-y-4 my-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">General Scope / المفهوم العام:</span>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1.5">{selectedProject.description}</p>
                    <p className="text-xs text-stone-500 leading-relaxed mt-2 italic text-right font-sans" dir="rtl">{selectedProject.descriptionAr}</p>
                  </div>

                  {/* Materials curated list */}
                  {selectedProject.materials && (
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-1">Curation Materials (قائمة المواد):</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedProject.materials.map((m) => (
                          <span key={m} className="text-[10px] font-sans font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 py-1 px-2.5 rounded-lg border border-stone-200">
                            ✓ {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extra unique features */}
                  {selectedProject.features && (
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-1.5">Architectural Integrations (المميزات الإنشائية):</span>
                      <ul className="text-xs text-stone-600 space-y-1 list-disc px-4">
                        {selectedProject.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Custom blueprint technical tables if present (CAD specific drawings) */}
                  {selectedProject.technicalDetails && (
                    <div className="mt-6 pt-4 border-t border-stone-200">
                      <div className="flex items-center gap-1.5 mb-2.5 text-[11px] font-mono text-[#4E000D] font-bold uppercase">
                        <Table className="w-3.5 h-3.5" />
                        <span>Executive CAD Plan Parameters</span>
                      </div>
                      <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 font-mono text-[10px] text-stone-600 space-y-2">
                        <div className="flex justify-between py-1 border-b border-stone-200/50">
                          <span>Standard Scale:</span>
                          <span className="text-stone-900 font-bold">{selectedProject.technicalDetails.scale}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-200/50">
                          <span>Drawn / Verified By:</span>
                          <span className="text-stone-900 font-bold">{selectedProject.technicalDetails.drawnBy}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-200/50">
                          <span>Executive Sheet No:</span>
                          <span className="text-stone-900 font-bold font-serif text-[#4E000D]">{selectedProject.technicalDetails.sheetNo}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-200/50">
                          <span>Sheet Release Date:</span>
                          <span className="text-stone-900 font-bold">{selectedProject.technicalDetails.date}</span>
                        </div>
                        <div className="pt-2">
                          <span className="text-[9px] uppercase tracking-wider text-stone-400 block mb-1">Standard Field Installation Instructions:</span>
                          <ul className="list-decimal px-3 space-y-1 text-stone-500 text-[9px] leading-relaxed">
                            {selectedProject.technicalDetails.notes?.map((n, i) => (
                              <li key={i}>{n}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom navigation actions */}
                <div className="mt-8 pt-4 border-t border-stone-200 flex justify-between items-center text-xs font-mono">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-stone-500 hover:text-stone-900 flex items-center gap-1"
                  >
                    <Minimize2 className="w-3.5 h-3.5" /> Close Panel
                  </button>
                  <a
                    href="#interactive-blueprints"
                    onClick={() => setSelectedProject(null)}
                    className="bg-[#4E000D] text-white py-2 px-4 rounded-xl font-bold hover:bg-[#340008] transition-colors"
                  >
                    Load in Blueprint HUD
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
