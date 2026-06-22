import React, { useState } from 'react';
import { TIMELINE, SKILL_CATEGORIES, PERSONAL_INFO } from '../data';
import { Award, GraduationCap, Briefcase, ChevronRight, Compass, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'awards'>('all');

  const filteredTimeline = activeTab === 'all'
    ? TIMELINE
    : TIMELINE.filter(t => t.type === activeTab);

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      default:
        return Award;
    }
  };

  return (
    <section id="about-credentials" className="py-24 bg-stone-50 text-stone-900 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Profile Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Aesthetic geometric profile card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#4E000D] rounded-3xl transform rotate-2 pointer-events-none opacity-5" />
            <div className="relative bg-white border border-stone-200 p-8 rounded-3xl shadow-xl space-y-6">
              
              <div className="flex items-center gap-4">
                {/* Simulated geometric avatar drawing */}
                <div className="w-16 h-16 rounded-2xl bg-[#4E000D] flex items-center justify-center p-3 text-white font-serif font-bold text-2xl shadow-xl shadow-[#4E000D]/20">
                  MB
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-[#C5A059] uppercase mt-0.5">{PERSONAL_INFO.title}</p>
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-stone-100 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-stone-400">Location Base:</span>
                  <span className="font-bold text-stone-800">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-stone-400">Active Field Practice:</span>
                  <span className="font-bold text-stone-800">5+ Years Site Supervision</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-stone-400">Design Specialty Focus:</span>
                  <span className="font-bold text-[#4E000D]">Organic Joinery & Executive CAD</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-stone-400">Rating (Uni Jordan):</span>
                  <span className="font-bold text-stone-800">Excellent (ممتاز)</span>
                </div>
              </div>

              {/* Badges checklist */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                {[
                  'Licensed Site Finishing Oversight',
                  'Accredited University Refurbishments',
                  'Advanced Carpentry Specification Mastered',
                  'Bilingual Arabic-English Design briefings'
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-[11px] text-stone-600 font-sans">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Call to action download */}
              <div className="pt-6">
                <a
                  href="#contact-section"
                  className="w-full bg-[#4E000D] text-white py-3 px-5 rounded-2xl text-center font-bold font-mono text-xs hover:bg-[#320108] transition-colors block shadow-lg shadow-[#4E000D]/10 hover:shadow-xl hover:shadow-[#4E000D]/20"
                >
                  DOWNLOAD DETAILED EXECUTION CV
                </a>
              </div>

            </div>
          </div>

          {/* Bio text introduction */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#4E000D] uppercase block mb-1">Professional Creed</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium">
              Bridging Stunning Vision & Executive Accuracy
            </h2>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed whitespace-pre-line italic text-right font-sans border-t border-stone-200/80 pt-4" dir="rtl">
              {PERSONAL_INFO.bioAr}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white border border-stone-200/60 rounded-2xl text-center">
                <span className="text-3xl font-serif font-bold text-[#4E000D] block">5+</span>
                <span className="text-[10px] font-mono text-stone-500 uppercase mt-1 block">Years Active Practice</span>
              </div>
              <div className="p-4 bg-white border border-stone-200/60 rounded-2xl text-center">
                <span className="text-3xl font-serif font-bold text-[#4E000D] block">20+</span>
                <span className="text-[10px] font-mono text-stone-500 uppercase mt-1 block">Completed Projects</span>
              </div>
              <div className="p-4 bg-white border border-stone-200/60 rounded-2xl text-center">
                <span className="text-3xl font-serif font-bold text-[#4E000D] block">100%</span>
                <span className="text-[10px] font-mono text-stone-500 uppercase mt-1 block">CAD Vector Accuracy</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modular Skills Matrices */}
        <div className="my-20">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-xs font-mono tracking-widest text-[#4E000D] uppercase">Skills Core Matrix</span>
            <h3 className="text-2xl font-serif font-medium mt-1">Design & Engineering Competencies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm">
                <div className="mb-6">
                  <h4 className="text-base font-serif font-bold text-[#4E000D]">{cat.title}</h4>
                  <p className="text-[10px] font-sans text-stone-400 mt-1 italic leading-relaxed" dir="rtl">{cat.titleAr}</p>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-stone-700 font-semibold">{skill.name}</span>
                        <span className="font-mono text-stone-500 text-[10px]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#4E000D] to-[#C5A059] rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#4E000D] uppercase">Education & Experience Chronicle</span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium mt-1">Professional Growth Timeline</h3>
            </div>

            {/* Timeline Filter Quick Links */}
            <div className="flex gap-1.5 bg-stone-250 p-1 rounded-xl border border-stone-300 text-xs">
              {[
                { id: 'all', label: 'All Markers' },
                { id: 'experience', label: 'Site Practice' },
                { id: 'education', label: 'Education' },
                { id: 'awards', label: 'Credentials & Certs' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id as any)}
                  className={`py-1.5 px-3.5 rounded-lg text-[11px] font-mono font-medium transition-colors ${
                    activeTab === opt.id
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Vertical Timeline */}
          <div className="relative border-l-2 border-stone-300 ml-4 md:ml-32 py-4 space-y-12">
            {filteredTimeline.map((milestone, i) => {
              const MilestoneIcon = getMilestoneIcon(milestone.type);
              return (
                <div key={i} className="relative pl-8 md:pl-12 group transition-all duration-300">
                  
                  {/* Left Floating Period on desktop */}
                  <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                    <span className="font-mono text-xs font-bold text-[#4E000D] bg-stone-100 py-1 px-2.5 rounded-md border border-stone-200">
                      {milestone.period}
                    </span>
                  </div>

                  {/* Bullet badge icon */}
                  <div className="absolute -left-[17px] top-0.5 w-8 h-8 rounded-full border-2 bg-white border-[#4E000D] flex items-center justify-center text-[#4E000D] shadow-lg group-hover:bg-[#4E000D] group-hover:text-white transition-colors duration-300">
                    <MilestoneIcon className="w-4 h-4" />
                  </div>

                  {/* Content card */}
                  <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs group-hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                      <div>
                        {/* Period for mobile */}
                        <span className="md:hidden font-mono text-[9px] font-bold text-[#4E000D] bg-stone-100 py-0.5 px-1.5 rounded mr-2 uppercase">
                          {milestone.period}
                        </span>
                        <h4 className="text-lg font-serif font-bold text-stone-900 mt-1 md:mt-0">{milestone.title}</h4>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-stone-100 text-stone-500 px-2.5 py-1 rounded-md border border-stone-200">
                        {milestone.institution}
                      </span>
                    </div>

                    <h5 className="text-xs text-stone-400 font-sans mb-3 line-clamp-1 italic" dir="rtl">
                      {milestone.titleAr} • {milestone.institutionAr}
                    </h5>

                    <p className="text-stone-600 text-xs leading-relaxed">
                      {milestone.description}
                    </p>
                    <p className="text-stone-500 text-xs leading-relaxed mt-2 italic text-right font-sans" dir="rtl">
                      {milestone.descriptionAr}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
