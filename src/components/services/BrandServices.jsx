'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, Store, Globe, Award, Sparkles, Lock, Package } from 'lucide-react';

export default function BrandServices() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const brandPillars = [
    { title: 'Brand Registry enforcement', desc: 'Active defense against unauthorized sellers, counterfeiters, and map violations.' },
    { title: 'Defensive IP positioning', desc: 'Safeguarding your trademarks, patents, and copyrighted creative assets across the USA store.' },
    { title: 'Supply chain auditing', desc: 'Ensuring absolute chain-of-custody transparency to prevent unauthorized distribution.' },
    { title: 'Margin-focused advertising', desc: 'Optimized PPC structures designed to protect profitability while capturing market share.' }
  ];

  return (
    <section className="relative min-h-screen bg-white text-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Round Container with Live Jumping Motion */}
        <div className="lg:col-span-6 flex justify-center relative">
          
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>

          <div className="relative w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full p-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
            
            <div className="absolute inset-2 rounded-full bg-slate-900 overflow-hidden flex flex-col items-center justify-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.85) 0%, rgba(2,6,23,0.95) 100%)' }}>
              
              <div className={`transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md mb-3 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>USA Brand Protection Hub</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Control & Growth
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto mb-5">
                Protecting your identity, eliminating price erosion, and scaling responsibly on Amazon USA.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <span onClick={() => setActivePopup(brandPillars[0])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                  Registry Enforcement ↗
                </span>
                <span onClick={() => setActivePopup(brandPillars[1])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                  Defensive IP ↗
                </span>
              </div>
            </div>

            {/* Jumping Badge Top Left */}
            <div className={`absolute top-6 left-6 bg-white text-slate-900 px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 transition-transform duration-700 ${isJumping ? '-translate-y-3' : 'translate-y-0'}`}>
              <Lock className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <div className="text-[9px] text-slate-500 font-medium">Security</div>
                <div className="text-xs font-bold text-slate-900">IP Protected</div>
              </div>
            </div>

            {/* Jumping Badge Bottom Right */}
            <div className={`absolute bottom-6 right-6 bg-white text-slate-900 px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 transition-transform duration-700 delay-300 ${isJumping ? 'translate-y-3' : 'translate-y-0'}`}>
              <Package className="w-5 h-5 text-amber-500" />
              <div className="text-left">
                <div className="text-[9px] text-slate-500 font-medium">FBA Control</div>
                <div className="text-xs font-bold text-slate-900">Optimized</div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Typography & Content */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shadow-sm">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Amazon Services for Brands</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Amazon Services for Brands – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Protection, Control & Growth</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our Amazon Services for Brands are designed for brands that want <strong className="text-slate-900 font-semibold">control, visibility, and stability</strong> in the Amazon USA marketplace. Amazon can quickly become chaotic without structured brand control—unauthorized sellers, price erosion, listing hijacks, and policy risks can damage both revenue and reputation. We help brands <strong className="text-slate-900 font-semibold">protect their identity, manage their Amazon presence, and scale responsibly</strong>, using Amazon-approved tools and long-term strategies.
            </p>
          </div>

          {/* Feature interactive boxes with pop-up trigger */}
          <div className="space-y-2.5 pt-2">
            {brandPillars.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActivePopup(item)}
                className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setActivePopup(brandPillars[0])}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-slate-900/20 transition-all flex items-center gap-2 group"
            >
              <span>Amazon Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Brand Protection Protocol</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{activePopup.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setActivePopup(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activePopup.desc} Proper enforcement protocols eliminate unauthorized sellers, protect your brand equity, and ensure sustainable revenue growth within the USA marketplace.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePopup(null)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
              >
                Got It
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}