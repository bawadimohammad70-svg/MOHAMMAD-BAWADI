import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Instagram, FileText, CheckCircle, Clock, Calendar, MessageSquare, Send } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [proposalType, setProposalType] = useState<'contract' | 'job' | 'consultation'>('job');
  
  // Real-time local time tracking for Amman, Jordan (UTC +3)
  const [ammanTime, setAmmanTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Amman is UTC+3.
      const now = new Date();
      // Get UTC time milliseconds
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      // Create new Date object for Amman (UTC+3)
      const ammanDate = new Date(utc + (3600000 * 3));
      
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setAmmanTime(ammanDate.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate pristine form delivery
    setFormSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 bg-stone-950 text-stone-100 overflow-hidden relative">
      
      {/* Visual blueprint overlay background under contact */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#140608_1px,transparent_1px),linear-gradient(to_bottom,#140608_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Quick specs columns */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block mb-2">Recruitment Hub & Inquiries</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium text-white">
                Initiate Executive Collaboration
              </h2>
              <p className="text-stone-400 mt-2 text-sm leading-relaxed">
                Whether you are a global architectural firm, a hotel entrepreneur, or a local Jordanian developer, secure a dedicated professional of executive CAD accuracy and luxurious composition.
              </p>
            </div>

            {/* Live Jordan timezone indicator */}
            <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4E000D] flex items-center justify-center text-white shadow-md">
                  <Clock className="w-5 h-5 text-[#C5A059] animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">Amman local time (UTC+3)</span>
                  <span className="text-md font-mono text-white mt-0.5 block font-bold">{ammanTime || '11:35:00 AM'}</span>
                </div>
              </div>
              <span className="text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                ● WORKING HOURS OPEN
              </span>
            </div>

            {/* Quick stats elements */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-stone-300">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-stone-300 hover:text-white hover:underline transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-stone-300 hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Instagram className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors">
                  @{PERSONAL_INFO.instagram}
                </a>
              </div>
            </div>

            {/* Download blueprint statement */}
            <div className="p-4 rounded-xl border border-stone-850 bg-stone-900/30 text-xs text-stone-500 flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                "An interior draft package consists of average 15-25 technical sheets including floor sweeps, electrical grids, and custom cabinetry sections. Reach out to request a full commercial PDF bundle."
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form Box */}
          <div className="lg:col-span-7 bg-stone-900/30 rounded-3xl border border-stone-800 p-8 shadow-2xl relative">
            {formSubmitted ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-white font-medium">Proposal Transmitted Successfully</h3>
                  <p className="text-stone-400 text-xs max-w-md mx-auto">
                    Thank you. Your request has been queued into Mohammad Bawadi’s live recruitment inbox. A detailed response accompanied by CAD portfolios will be delivered within 24 working hours.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-stone-800 hover:bg-stone-700 text-stone-300 py-2 px-5 rounded-xl text-xs font-mono border border-stone-700/50 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-1">Proposal Builder</span>
                  <h3 className="text-xl font-serif text-white font-medium">Bespoke Project Brief Intake</h3>
                  <p className="text-xs text-stone-500 mt-1">Please specify your organization scope to fast-track responses.</p>
                </div>

                {/* Proposal selectors */}
                <div className="grid grid-cols-3 gap-2 border-b border-stone-800 pb-4">
                  {[
                    { id: 'job', label: 'Company Hiring', desc: 'Fulltime / Hybrid Role' },
                    { id: 'contract', label: 'Freelance Contract', desc: 'Bespoke Executive CAD' },
                    { id: 'consultation', label: '1-on-1 Consultation', desc: 'Space Optimization' }
                  ].map((x) => (
                    <button
                      key={x.id}
                      type="button"
                      onClick={() => setProposalType(x.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        proposalType === x.id
                          ? 'border-[#C5A059] bg-[#C5A059]/10 text-white shadow-lg'
                          : 'border-stone-800 bg-stone-950/40 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <span className="block text-[11px] font-mono font-bold">{x.label}</span>
                      <span className="block text-[9px] mt-0.5 text-stone-500">{x.desc}</span>
                    </button>
                  ))}
                </div>

                {/* Main input fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-stone-400 uppercase">Your Name (الاسم):</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Eng. Ahmad Al-Zoubi"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-stone-400 uppercase">Organization Email (البريد):</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g., recruitment@daralhandasah.com"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-stone-400 uppercase">Project / Position Scope Statement (توصيف العمل):</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide description of targeted duties, bedroom/commercial surface areas, or potential salary scale options..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  />
                </div>

                {/* Selections for estimation ranges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 animate-in fade-in duration-200">
                    <label className="text-[10px] font-mono text-stone-400 uppercase">Targeted Work Timeline:</label>
                    <select className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-3.5 text-xs text-stone-300 focus:outline-none focus:border-[#C5A059]">
                      <option>Immediate (Within 1-2 weeks)</option>
                      <option>Q3-Q4 Execution Season</option>
                      <option>Flexible / Indefinite onboarding</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-stone-400 uppercase">Commercial Tender Area:</label>
                    <select className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-3.5 text-xs text-stone-300 focus:outline-none focus:border-[#C5A059]">
                      <option>Less than 100 m²</option>
                      <option>100 m² to 500 m²</option>
                      <option>More than 500 m² (Grand Scale)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A059] hover:bg-[#B38E46] text-stone-950 py-3.5 rounded-2xl text-center font-mono font-bold text-xs transition-transform flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>TRANSMIT COMPREHENSIVE BRIEF INTERVIEW PROPOSAL</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
