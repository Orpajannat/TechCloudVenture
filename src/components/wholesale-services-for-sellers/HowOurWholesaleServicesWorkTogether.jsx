'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Network, Lock, Zap, RefreshCw } from 'lucide-react';

export default function HowOurWholesaleServicesWorkTogether() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 1800);

    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(jumpInterval);
      clearInterval(stepInterval);
    };
  }, []);

  const steps = [
    {
      id: 'brand-approval',
      stepNo: 'Phase 01',
      title: 'Brand approval',
      subtitle: 'Brand approval establishes authorization',
      description: 'The critical baseline for Amazon wholesale. We secure direct manufacturer and distributor permissions so your supply chain is 100% legitimate from day one.',
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      deliverables: ['Authorized distributor LOAs', 'Valid wholesale invoice chains', 'Zero-risk brand onboarding']
    },
    {
      id: 'product-research',
      stepNo: 'Phase 02',
      title: 'Product research',
      subtitle: 'Product research ensures profitability',
      description: 'We filter through distributor catalogs using advanced analytics to isolate products with high buy-box stability, strong profit margins, and low competition.',
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      deliverables: ['ROI & margin calculation', 'Buy-box dominance tracking', 'Demand velocity scoring']
    },
    {
      id: 'store-management',
      stepNo: 'Phase 03',
      title: 'Store management',
      subtitle: 'Store management executes daily operations',
      description: 'Once products are approved and sourced, our team manages day-to-day FBA inventory restocking, listing optimization, and pricing adjustments seamlessly.',
      icon: <RefreshCw className="w-6 h-6 text-blue-700" />,
      deliverables: ['FBA replenishment handling', 'Listing optimization & upkeep', 'Inventory stockout prevention']
    },
    {
      id: 'compliance-oversight',
      stepNo: 'Phase 04',
      title: 'Compliance oversight',
      subtitle: 'Compliance oversight protects account health',
      description: 'Continuous 24/7 account monitoring to protect your metrics, prevent policy warnings, and ensure total alignment with changing Amazon USA guidelines.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-700" />,
      deliverables: ['Metric & health monitoring', 'IP & authenticity defense', 'Policy update adaptation']
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Background Live Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-200/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Main Container aligned with header */}
      <div className="container mx-auto max-w-7xl space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 shadow-sm transition-transform duration-500 ${isJumping ? '-translate-y-2 scale-105' : 'translate-y-0 scale-100'}`}>
            <Network className="w-4 h-4 text-blue-600 animate-spin" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Connected Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            How Our Wholesale Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">Work Together</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our services are designed to work as a connected wholesale ecosystem:
          </p>
        </div>

        {/* Heavy Animated Connected Pipeline Container */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-6 sm:p-12 shadow-2xl border border-blue-400/30 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none"></div>

          {/* 4 Interactive Connected Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActivePopup(item)}
                  className={`group cursor-pointer bg-white/10 hover:bg-white/20 border backdrop-blur-xl p-6 rounded-3xl transition-all duration-500 flex flex-col justify-between shadow-xl transform ${
                    isActive ? 'border-white bg-white/25 scale-[1.03] shadow-blue-500/50' : 'border-white/20 scale-100'
                  } ${isJumping && idx % 2 === 0 ? '-translate-y-1' : 'translate-y-0'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl bg-white text-blue-700 shadow-md transition-transform group-hover:scale-110 ${isActive ? 'ring-4 ring-white/40' : ''}`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white uppercase tracking-wider">
                        {item.stepNo}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-extrabold text-white group-hover:text-blue-100 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white underline flex items-center gap-1">
                      Inspect phase <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white group-hover:text-blue-700 text-white flex items-center justify-center transition-colors text-xs">
                      ↗
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Flexible Roadmap Message */}
          <div className="mt-10 pt-6 border-t border-white/20 text-center">
            <p className="text-xs sm:text-sm font-bold text-white tracking-wide bg-white/10 py-3 px-6 rounded-full inline-block backdrop-blur-md border border-white/20 shadow-lg">
              ✨ You can start with a single service or build a full wholesale roadmap based on your goals and budget.
            </p>
          </div>

        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  {activePopup.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{activePopup.stepNo} Ecosystem</span>
                  <h3 className="text-lg font-extrabold text-slate-900">{activePopup.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setActivePopup(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-bold text-blue-600 mb-2">{activePopup.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activePopup.description}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-6 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800">Phase Deliverables:</div>
              <div className="space-y-2">
                {activePopup.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-blue-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

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