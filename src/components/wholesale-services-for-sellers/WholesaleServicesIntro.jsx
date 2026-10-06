'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Globe, Lock, TrendingUp } from 'lucide-react';

export default function WholesaleServicesIntro() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: 'Proper brand approvals', desc: 'Secure authorized distributor and direct brand permissions to avoid suspensions and listing removals.' },
    { title: 'Valid wholesale invoices', desc: 'Tier-1 supply chain documentation that easily passes all Amazon seller performance and authenticity checks.' },
    { title: 'Data-backed product selection', desc: 'Deep analytics evaluating profit margins, buy-box stability, and category risk before inventory commitment.' },
    { title: 'Strong operational control', desc: 'End-to-end management ensuring optimized logistics, FBA restocking, and flawless account health.' },
    { title: 'Compliance with Amazon policies', desc: 'Zero risky workarounds—strict adherence to Amazon USA terms of service for long-term safety.' }
  ];

  return (
    <section className="relative min-h-screen bg-white text-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Background glow accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Main Container aligned with header */}
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shadow-sm transition-transform duration-500 ${isJumping ? '-translate-y-1.5' : 'translate-y-0'}`}>
              <Globe className="w-4 h-4 text-blue-600" />
              <span>USA Marketplace Specialists</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Amazon Wholesale Services for Sellers in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">USA Marketplace</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Tech Cloud Global Venture, our Wholesale Services for Sellers are designed for Amazon sellers who want to build stable, compliant, and scalable wholesale businesses in the Amazon USA marketplace. We help sellers move away from high-risk models and build legitimate wholesale operations that are designed to grow steadily over time. <strong className="text-slate-900 font-semibold">Amazon wholesale is not about shortcuts or temporary wins. Long-term success requires:</strong>
              </p>
            </div>

            {/* Interactive Feature List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePopup(item)}
                  className="group flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all cursor-pointer shadow-sm transform hover:-translate-y-0.5"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePopup(features[0])}
                className="px-6.5 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2 group"
              >
                <span>Explore Wholesale Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Round Live Motion Container & Floating Badges */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>

            {/* Round Live Motion Container */}
            <div className={`relative w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full p-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-900 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white transition-all duration-700 ${
              isJumping ? 'shadow-blue-500/40 scale-[1.02]' : 'shadow-blue-500/20 scale-100'
            }`}>
              
              <div className="absolute inset-2 rounded-full bg-slate-900 overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.9) 0%, rgba(2,6,23,0.98) 100%)' }}>
                
                <div className={`transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md mb-3 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>USA Wholesale Operations</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  Compliant Growth
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto mb-6">
                  Building sustainable, invoice-backed Amazon wholesale businesses with zero shortcut risks.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  <span onClick={() => setActivePopup(features[0])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                    Brand Approvals ↗
                  </span>
                  <span onClick={() => setActivePopup(features[1])} className="cursor-pointer px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[11px] text-white transition-all transform hover:scale-105">
                    Valid Invoices ↗
                  </span>
                </div>
              </div>

              {/* Jumping Badge Top Left */}
              <div className={`absolute top-6 left-6 bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-2.5 transition-transform duration-700 ${isJumping ? '-translate-y-3' : 'translate-y-0'}`}>
                <Lock className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Security</div>
                  <div className="text-xs font-bold text-slate-900">Account Safe</div>
                </div>
              </div>

              {/* Jumping Badge Bottom Right */}
              <div className={`absolute bottom-6 right-6 bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-2.5 transition-transform duration-700 delay-300 ${isJumping ? 'translate-y-3' : 'translate-y-0'}`}>
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Scaling</div>
                  <div className="text-xs font-bold text-slate-900">ROI Focused</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Wholesale Execution Standard</span>
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
              {activePopup.desc} Proper compliance frameworks safeguard your capital, ensure long-term stability, and protect your store within the Amazon USA marketplace.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePopup(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
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