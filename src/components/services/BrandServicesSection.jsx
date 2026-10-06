'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Store, FileText, Globe, CheckCircle2, ArrowRight, Sparkles, UserCheck } from 'lucide-react';

export default function BrandServicesSection() {
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
      id: 'brand-protection',
      title: 'Brand Protection & Seller Control',
      subtitle: 'Our Brand Protection & Seller Control Service helps brands monitor and address unauthorized sellers, pricing violations, and listing abuse.',
      description: 'We support brands with unauthorized seller identification, MAP policy monitoring, seller suppression support, Buy Box control strategies, and listing hijack resolution in compliance with Amazon Brand Registry.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      badge: 'Registry Protection',
      points: [
        'Unauthorized seller identification',
        'MAP policy monitoring',
        'Seller suppression support',
        'Buy Box control strategies',
        'Listing hijack resolution'
      ]
    },
    {
      id: 'account-management',
      title: 'Brand Account Management',
      subtitle: 'Managing a brand account on Amazon USA requires continuous oversight, fast issue handling, and policy awareness.',
      description: 'Our Brand Account Management Service provides end-to-end operational support, including Brand Registry management, account health monitoring, case & appeal handling, performance optimization, and compliance oversight.',
      icon: <Store className="w-6 h-6 text-indigo-600" />,
      badge: 'End-to-End Partner',
      points: [
        'Brand Registry management',
        'Account health monitoring',
        'Case & appeal handling',
        'Performance optimization',
        'Compliance oversight'
      ]
    },
    {
      id: 'listing-management',
      title: 'Product Listing Management',
      subtitle: 'Your listings represent your brand on Amazon. Our Product Listing Management Service ensures listings are accurate, policy-compliant, and optimized.',
      description: 'We optimize for discoverability and conversion, eliminate technical errors and suppression risks, and align everything with brand guidelines from new creation to advanced flat file fixes.',
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      badge: 'Catalog Optimization',
      points: [
        'Accurate and policy-compliant setup',
        'Optimized for discoverability and conversion',
        'Free from technical errors and suppression risks',
        'Aligned with brand guidelines & flat file fixes'
      ]
    },
    {
      id: 'brand-store-seo',
      title: 'Brand Store SEO',
      subtitle: 'Your Amazon Brand Store is your digital storefront. Our Brand Store SEO Service helps brands build discoverable, conversion-focused storefronts.',
      description: 'We deliver professional storefront design, keyword mapping and SEO structure, optimized store pages, category navigation setup, and conversion rate optimization.',
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      badge: 'Digital Storefront',
      points: [
        'Professional storefront design',
        'Keyword mapping and SEO structure',
        'Optimized store pages',
        'Category navigation setup',
        'Conversion optimization'
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
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Enterprise Brand Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Amazon Brand Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We Offer</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            End-to-end solutions to protect, manage, and grow your brand on Amazon.
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
                  Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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