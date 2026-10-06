'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Store, Globe, ShieldCheck, FileText, TrendingUp, Sparkles, PackageCheck } from 'lucide-react';

export default function Wholesale() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: 'Proper brand approvals', desc: 'Direct authorization channels to ensure unhindered distribution.' },
    { title: 'Valid wholesale invoices', desc: 'Tier-1 supplier invoices accepted directly by Amazon seller performance.' },
    { title: 'Careful product selection', desc: 'Data-driven curation avoiding suppressed categories and IP risks.' },
    { title: 'Compliance first execution', desc: 'Strict adherence to ungating criteria and store health metrics.' },
    { title: 'Long term operational planning', desc: 'Sustainable forecasting, cash-flow structuring, and stable reordering.' }
  ];

  return (
    <section className="relative min-h-screen bg-white text-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Light background glowing gradient effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Round Live Motion Graphic Container with Jumping Elements */}
        <div className="lg:col-span-6 flex justify-center relative">
          
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>

          {/* Large Round Container */}
          <div className="relative w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full p-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
            
            {/* Inner Live Motion Background Image / Graphic Representation */}
            <div className="absolute inset-2 rounded-full bg-slate-900 overflow-hidden flex flex-col items-center justify-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.85) 0%, rgba(2,6,23,0.95) 100%)' }}>
              
              {/* Floating Header Badge inside circle */}
              <div className={`transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md mb-4 shadow-lg">
                  <Globe className="w-3.5 h-3.5 animate-spin duration-3000" />
                  <span>Amazon FBA USA Hub</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Authorized Wholesale Excellence
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto mb-6">
                Transitioning high-risk arbitrage into structured, brand-approved enterprise models.
              </p>

              {/* Interactive preview pills */}
              <div className="flex flex-wrap justify-center gap-2">
                <span onClick={() => setActivePopup(features[0])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                  Brand Approvals ↗
                </span>
                <span onClick={() => setActivePopup(features[1])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                  Valid Invoices ↗
                </span>
                <span onClick={() => setActivePopup(features[3])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                  Compliance ↗
                </span>
              </div>
            </div>

            {/* Jumping Satellite Badge 1 */}
            <div className={`absolute top-6 left-6 bg-white text-slate-900 px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 transition-transform duration-700 ${isJumping ? '-translate-y-3' : 'translate-y-0'}`}>
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div className="text-left">
                <div className="text-[9px] text-slate-500 font-medium">Account Health</div>
                <div className="text-xs font-bold text-slate-900">100% Compliant</div>
              </div>
            </div>

            {/* Jumping Satellite Badge 2 */}
            <div className={`absolute bottom-6 right-6 bg-white text-slate-900 px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 transition-transform duration-700 delay-300 ${isJumping ? 'translate-y-3' : 'translate-y-0'}`}>
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <div className="text-[9px] text-slate-500 font-medium">Growth Model</div>
                <div className="text-xs font-bold text-slate-900">Stable Scale</div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Typography & Content */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shadow-sm">
            <Store className="w-4 h-4 text-blue-600" />
            <span>Wholesale Services for Sellers</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Amazon Wholesale Services for Sellers in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">USA Market</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our Wholesale Services for Sellers are designed for Amazon sellers who want to operate legitimate, brand-authorized wholesale businesses in the Amazon USA marketplace. Wholesale success on Amazon requires more than listings and ads—it requires:
            </p>
          </div>

          {/* Feature Checklist with Click Trigger for Sudden Pop Up */}
          <div className="space-y-2.5 pt-2">
            {features.map((item, idx) => (
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

          <p className="text-xs sm:text-sm text-slate-600 font-medium pt-2">
            We help sellers move away from high risk arbitrage models and build <strong className="text-slate-900 font-bold">structured wholesale operations</strong> that are scalable and sustainable.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => setActivePopup(features[0])}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-slate-900/20 transition-all flex items-center gap-2 group"
            >
              <span>Wholesale Service</span>
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
                  <PackageCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Wholesale Protocol</span>
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
              {activePopup.desc} Proper documentation and verified distributor relationships safeguard your Amazon store from suspensions and secure uninterrupted buy-box ownership in the USA market.
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