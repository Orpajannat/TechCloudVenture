'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function Why() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      title: 'USA marketplace focused',
      description: 'Tailored specifically for Amazon USA rules, regional compliance, FBA logistics, and local tax/business guidelines.'
    },
    {
      title: 'Compliance-first execution',
      description: 'Zero risky shortcuts. We prioritize account safety, proper documentation, and strict adherence to Amazon terms of service.'
    },
    {
      title: 'Brand-authorized & invoice-backed',
      description: 'Direct distribution channels ensuring valid tier-1 invoices that successfully pass any Amazon seller performance review.'
    },
    {
      title: 'Clear agreements & transparent communication',
      description: 'No hidden clauses or surprises. Complete visibility into your store operations, profit margins, and strategy updates.'
    },
    {
      title: 'ROI-driven product selection',
      description: 'Data-backed catalog filtering to source profitable products with high buy-box ownership and stable profit margins.'
    },
    {
      title: 'Long-term business mindset',
      description: 'Building robust, sustainable wholesale assets designed for multi-year growth and capital appreciation.'
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        
        <div className="text-center space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Enterprise Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Wholesale Services?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Click any core advantage below for a live strategic breakdown and operational insight.
          </p>
        </div>

        {/* Round Live Motion Container Card */}
        <div className={`relative bg-blue-600 rounded-[3rem] p-8 sm:p-12 shadow-2xl overflow-hidden border-4 border-white transition-all duration-700 ${isJumping ? 'shadow-blue-500/30 scale-[1.01]' : 'shadow-blue-500/10 scale-100'}`}>
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-700 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActivePopup(item)}
                className="group cursor-pointer flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-blue-500/40 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {item.title}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white group-hover:text-blue-600 text-white flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Strategic Advantage</span>
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
              {activePopup.description}
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