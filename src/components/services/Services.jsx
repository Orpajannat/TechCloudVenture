'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, Store, Globe, PackageCheck, Layers, FileText, Search, UserCheck } from 'lucide-react';

export default function Services() {
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
      subtitle: 'Selling wholesale without proper brand approval exposes sellers to account suspension, listing removals, and invoice rejections.',
      description: 'Our Brand Approval Service helps sellers secure direct brand/distributor approval, valid wholesale invoices, compliance-ready documentation, and winning wholesale products aligned with ROI goals.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      badge: 'Compliance First',
      points: [
        'Direct brand or distributor approval',
        'Valid wholesale invoices',
        'Compliance-ready documentation',
        'Winning wholesale products aligned with ROI goals'
      ]
    },
    {
      id: 'store-management',
      title: 'Wholesale Store Management',
      subtitle: 'Our Wholesale Store Management Service is for sellers who want a professionally managed Amazon wholesale business without day-to-day operational stress.',
      description: 'We manage your store end to end, including brand approvals, inventory planning, listing optimization, policy compliance, and performance reporting.',
      icon: <Store className="w-6 h-6 text-indigo-600" />,
      badge: 'End-to-End Growth',
      points: [
        'Brand approvals & sourcing support',
        'Inventory planning & stock control',
        'Listing management & optimization',
        'Account health & policy compliance',
        'Performance monitoring & reporting'
      ]
    },
    {
      id: 'product-research',
      title: 'Wholesale Product Research',
      subtitle: 'Already have access to a brand or distributor? Our Wholesale Product Research Service helps sellers identify profitable, low-risk wholesale products.',
      description: 'We analyze ROI & profit margins, Buy Box & seller dominance, sales demand & price stability, and category risk & ungating feasibility using real Amazon data.',
      icon: <Search className="w-6 h-6 text-cyan-600" />,
      badge: 'Data-Driven',
      points: [
        'ROI & profit margins',
        'Buy Box & seller dominance',
        'Sales demand & price stability',
        'Category risk & ungating feasibility'
      ]
    },
    {
      id: 'reseller-setup',
      title: 'Authorized Reseller Setup',
      subtitle: 'If you already have a brand or distributor but need official approval to sell on Amazon, our Authorized Reseller Setup Service provides structured support.',
      description: 'We handle professional reseller application setup, brand or distributor communication, approval follow-ups, and LOA and documentation guidance.',
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'Official Setup',
      points: [
        'Professional reseller application setup',
        'Brand or distributor communication',
        'Approval follow-ups',
        'LOA and documentation guidance'
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 font-sans">
      
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Specialized Amazon USA Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Amazon Wholesale Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Built for serious sellers looking to establish sustainable, policy-compliant, and highly profitable operations in the USA marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePopup(item)}
              className={`group bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                isJumping ? 'transform -translate-y-1' : 'transform translate-y-0'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-blue-700 border border-slate-200 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Highlights:</div>
                  <ul className="space-y-1.5">
                    {item.points.slice(0, 3).map((pt, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
                        <span className="truncate">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
                  Click for detailed breakdown <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
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
              {activePopup.description}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Comprehensive Scope & Deliverables:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePopup.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2 rounded-xl border border-slate-200/60 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePopup(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
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