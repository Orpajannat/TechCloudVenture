'use client';

import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, BarChart3, DollarSign, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ForWhom() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const targets = [
    {
      id: 'new-sellers',
      title: 'New sellers',
      subtitle: 'Entering Amazon wholesale the right way from day one',
      description: 'Built for beginners who want to avoid costly beginner traps, suspension risks, and fake invoice scams. We establish direct brand approvals and compliant foundations from your very first product.',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      badge: 'Foundation Phase',
      points: [
        'Direct brand or distributor approvals',
        'Valid wholesale invoice generation',
        'Compliance-ready business setup',
        'Risk-free product selection guidance'
      ]
    },
    {
      id: 'existing-sellers',
      title: 'Existing Sellers',
      subtitle: 'Transitioning from arbitrage to sustainable wholesale',
      description: 'For sellers currently doing retail or online arbitrage who want to upgrade to stable, high-ticket Amazon wholesale accounts with legitimate brand backing and buy-box ownership.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      badge: 'Strategic Upgrade',
      points: [
        'Arbitrage to wholesale migration',
        'Tier-1 supplier relationship building',
        'Account health & suspension defense',
        'Robust catalog restructuring'
      ]
    },
    {
      id: 'scaling-sellers',
      title: 'Scaling Sellers',
      subtitle: 'Growing USA-based wholesale operations strategically',
      description: 'Designed for established stores looking to optimize inventory planning, maximize ROI, expand brand catalogs, and streamline FBA supply chain logistics without day-to-day operational burnout.',
      icon: <BarChart3 className="w-6 h-6 text-cyan-600" />,
      badge: 'Growth Engine',
      points: [
        'Advanced inventory & stock control',
        'PPC and listing optimization',
        'Performance monitoring & reporting',
        'Multi-distributor catalog scaling'
      ]
    },
    {
      id: 'investors',
      title: 'Investors',
      subtitle: 'Seeking structured Amazon wholesale execution',
      description: 'Ideal for capital partners and private investors who want a fully managed, professionally operated Amazon USA wholesale business driven by data and executed with total compliance.',
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      badge: 'Capital Partner',
      points: [
        'End-to-end store management',
        'Transparent ROI & profit analytics',
        'Zero day-to-day operational stress',
        'Long-term capital appreciation'
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-white text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Container aligned with header */}
      <div className="container mx-auto max-w-7xl space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-md transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Targeted Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            For Whom Our Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services Are For?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            If your goal is account safety, predictable growth, and long-term profitability, our wholesale services are built for you.
          </p>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePopup(item)}
              className={`group bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                isJumping ? 'transform -translate-y-1.5' : 'transform translate-y-0'
              }`}
            >
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>

              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-blue-700 border border-slate-200 uppercase tracking-wider">
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
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
                  Explore profile <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
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
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Focus Areas & Deliverables:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePopup.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
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