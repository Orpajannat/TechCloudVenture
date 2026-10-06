'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers, Award, BarChart3, Search, Store } from 'lucide-react';

export default function WholesaleServicesWeOffer() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'brand-approval',
      title: 'Brand Approval Service',
      subtitle: 'Brand approval is the foundation of Amazon wholesale success.',
      description: 'Our Brand Approval Service helps sellers get authorized to sell wholesale products from U.S.-based brands and distributors.',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      badge: 'Core Service 01',
      highlights: [
        'Valid wholesale invoices',
        'Compliance-ready documentation',
        'Products selected based on ROI, margin, and competition'
      ],
      protections: [
        'Invoice rejection',
        'Listing removal'
      ]
    },
    {
      id: 'store-management',
      title: 'Wholesale Store Management',
      subtitle: 'Already have access to a brand or distributor?',
      description: 'Our Wholesale Store Management Service is designed for sellers who want a professionally managed Amazon wholesale business without day-to-day operational burden.',
      icon: <Store className="w-8 h-8 text-indigo-600" />,
      badge: 'Core Service 02',
      highlights: [
        'Brand approvals & sourcing support',
        'Wholesale product selection',
        'Inventory planning & stock control',
        'Listing management & optimization',
        'Account health & policy compliance',
        'Performance monitoring & reporting'
      ],
      protections: [
        'Operational burnout',
        'Stockouts & FBA storage penalties'
      ]
    },
    {
      id: 'product-research',
      title: 'Wholesale Product Research',
      subtitle: 'Maximize catalog profitability with deep market metrics.',
      description: 'Our Wholesale Product Research Service focuses on identifying profitable, low-risk wholesale products from client-provided catalogs.',
      icon: <Search className="w-8 h-8 text-blue-700" />,
      badge: 'Core Service 03',
      highlights: [
        'ROI and profit margins',
        'Buy Box ownership and seller dominance',
        'Demand and price stability',
        'Category and compliance risk'
      ],
      protections: [
        'Low-margin items',
        'High-competition price wars'
      ]
    },
    {
      id: 'reseller-setup',
      title: 'Authorized Reseller Setup',
      subtitle: 'Official approval framework for U.S. wholesale channels.',
      description: 'If you already have a brand or distributor but need official approval to sell on Amazon, our Authorized Reseller Setup Service provides structured support.',
      icon: <ShieldCheck className="w-8 h-8 text-indigo-700" />,
      badge: 'Core Service 04',
      highlights: [
        'Professional reseller application preparation',
        'Brand or distributor communication',
        'Approval follow-ups',
        'LOA and compliance guidance'
      ],
      protections: [
        'Unauthorized seller flags',
        'Supplier rejection'
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Main Container aligned with header */}
      <div className="container mx-auto max-w-7xl space-y-16 relative z-10">
        
        {/* Header Section with Live Motion Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 shadow-md transition-transform duration-500 ${isJumping ? '-translate-y-2.5 scale-105' : 'translate-y-0 scale-100'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Connected Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Wholesale Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">We Offer</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Comprehensive wholesale solutions designed to work together as a connected ecosystem for sustained Amazon USA marketplace success.
          </p>
        </div>

        {/* 4 Cards Grid Layout with Heavy Animation & Live Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePopup(item)}
              className={`group relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-blue-100 p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden transform hover:-translate-y-2 ${
                isJumping && idx % 2 === 0 ? '-translate-y-1' : isJumping ? 'translate-y-1' : 'translate-y-0'
              }`}
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125"></div>

              <div className="relative space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon, { className: 'w-7 h-7 text-blue-600 group-hover:text-white transition-colors' })}
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-blue-700 border border-slate-200 uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700/80">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Preview Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables:</div>
                  <div className="space-y-1.5">
                    {item.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 group-hover:underline flex items-center gap-1">
                  View Full Service Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs font-bold shadow-sm">
                  ↗
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  {activePopup.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{activePopup.badge}</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">{activePopup.title}</h3>
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
              {activePopup.description} Built strictly around compliance and long-term scalability in the Amazon USA marketplace.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-800">What We Handle & Include:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePopup.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-blue-100 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activePopup.protections && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">This Service Protects Sellers From:</div>
                  <div className="flex flex-wrap gap-2">
                    {activePopup.protections.map((prot, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                        🛡️ {prot}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePopup(null)}
                className="px-6.5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
              >
                Close & Return
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}