'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, TrendingUp, CheckCircle2, Search, ArrowRight, Truck, Store, Globe, Award, Sparkles } from 'lucide-react';

export default function SpecializedAmazonSection() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const audiences = [
    {
      id: 'wholesale',
      title: 'Amazon Wholesale Sellers',
      subtitle: 'For businesses building stable, authorized, & scalable channels.',
      details: 'Strict invoice verification, brand authorization gating compliance, wholesale pricing strategies, and long-term asset security.',
      icon: <Store className="w-6 h-6 text-blue-600" />,
      badge: 'Authorized & Stable'
    },
    {
      id: 'brands',
      title: 'Private Label & Brands',
      subtitle: 'For brands that want control, protection, & sustainable growth.',
      details: 'Brand Registry enforcement, defensive IP positioning, supply chain auditing, and margin-focused advertising ecosystems.',
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      badge: 'Control & Protection'
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-6 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 backdrop-blur-md shadow-lg animate-bounce duration-1000">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-700">Specialized Amazon USA Services</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Scaling on Amazon with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Compliance & Trust</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Tech Cloud Global Venture</strong>, we provide specialized Amazon USA services built around compliance, data-driven execution, and long-term growth. Our solutions are designed for two core audiences:
            </p>
          </div>

          <p className="text-sm text-slate-600 italic border-l-2 border-blue-600 pl-4 py-1 bg-blue-50/50 rounded-r-lg">
            "We do not believe in shortcuts, risky tactics, or temporary wins. Our services are structured to support real businesses with real documentation, real strategy, and real results."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {audiences.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePopup(item)}
                className={`relative group cursor-pointer p-5 rounded-2xl bg-white border border-slate-200/80 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/30 hover:shadow-xl hover:shadow-blue-500/10 ${
                  isJumping ? 'transform -translate-y-1' : 'transform translate-y-0'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-blue-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  {item.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">{item.subtitle}</p>
                
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-blue-600">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-spin duration-3000" /> Click for strategic breakdown
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="lg:col-span-6 relative">
          
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-2xl animate-pulse"></div>
          
          <div className="relative rounded-3xl bg-white border border-slate-200 p-6 shadow-xl backdrop-blur-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                USA Marketplace Live Audit
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 border border-slate-800 flex items-center justify-center p-6 group">
              
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-1000">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Compliance Status</div>
                  <div className="text-xs font-bold text-slate-900">100% Verified USA Entity</div>
                </div>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                
                <div className="absolute w-64 sm:w-72 h-40 sm:h-44 bg-slate-900/90 rounded-xl border border-slate-700 shadow-2xl p-3 transform -rotate-3 transition-transform group-hover:rotate-0 duration-500">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                    <span>SellerCentral_US.analytics</span>
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-blue-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-2/3 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-2 w-1/2 bg-indigo-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-4/5 rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="bg-slate-800/80 p-1.5 rounded text-center">
                        <div className="text-[9px] text-slate-400">ROI</div>
                        <div className="text-xs font-bold text-emerald-400">+48.2%</div>
                      </div>
                      <div className="bg-slate-800/80 p-1.5 rounded text-center">
                        <div className="text-[9px] text-slate-400">IPI</div>
                        <div className="text-xs font-bold text-blue-400">650+</div>
                      </div>
                      <div className="bg-slate-800/80 p-1.5 rounded text-center">
                        <div className="text-[9px] text-slate-400">GDR</div>
                        <div className="text-xs font-bold text-indigo-400">0.0%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute z-30 bottom-2 left-10 sm:left-16 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-2xl animate-pulse">
                  <Search className="w-6 h-6 text-cyan-300" />
                </div>

                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 bg-white/90 border border-slate-200 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md transform transition-transform group-hover:scale-105">
                  <Truck className="w-5 h-5 text-amber-500 animate-bounce" />
                  <div>
                    <div className="text-[10px] text-slate-500">FBA Prep & Transit</div>
                    <div className="text-xs font-bold text-slate-900">Fulfillment Optimized</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real Strategy & Documentation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized Wholesale & Brands</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  {activePopup.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{activePopup.badge}</span>
                  <h3 className="text-lg font-bold text-slate-900">{activePopup.title}</h3>
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
              {activePopup.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Strategic Execution Highlights:</div>
              <p className="text-xs text-slate-700 leading-normal">{activePopup.details}</p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePopup(null)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
              >
                Close & Explore
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}