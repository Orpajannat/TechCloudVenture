'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar, Compass, ShieldCheck } from 'lucide-react';

export default function RightService() {
  const [activeModal, setActiveModal] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] bg-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Main Dark Blue Rounded Container with Live Jumping Motion */}
        <div className={`relative bg-[#08183A] rounded-[3rem] p-8 sm:p-16 shadow-2xl overflow-hidden border-4 border-white/10 transition-all duration-700 ${
          isJumping ? 'shadow-blue-900/40 scale-[1.01]' : 'shadow-blue-900/20 scale-100'
        }`}>
          
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
            
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold backdrop-blur-md transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Take the Next Step</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Let’s Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Right Service for You</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are an Amazon wholesale seller or a brand owner, choosing the right service is critical for long-term success.
              </p>
            </div>

            {/* Action Buttons with Interactive Modals */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveModal('consultation')}
                className="group px-6.5 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm tracking-wide shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveModal('explore')}
                className="group px-6.5 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 backdrop-blur-md transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 tracking-wide font-medium">
                Tech Cloud Global Venture is here to support compliant, scalable, and sustainable growth in the Amazon USA marketplace.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  {activeModal === 'consultation' ? <Calendar className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {activeModal === 'consultation' ? 'Advisory Session' : 'Service Directory'}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {activeModal === 'consultation' ? 'Schedule Free Consultation' : 'Explore All Solutions'}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeModal === 'consultation'
                ? 'Connect directly with our Amazon USA experts to analyze your account health, wholesale catalog, or brand protection needs. Zero commitment, high-value strategic roadmap.'
                : 'Browse our complete suite of authorized reseller setups, store management, product research, and brand protection workflows tailored for sustainable USA market scaling.'}
            </p>

            <div className="flex items-center justify-end gap-3">
              <Link
                href={activeModal === 'consultation' ? '/contact#contact' : '/services#service-options'}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
              >
                {activeModal === 'consultation' ? 'Contact Us to Book' : 'Browse Services'}
              </Link>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}