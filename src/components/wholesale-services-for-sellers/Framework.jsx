'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function WholesaleServiceFramework() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const frameworkSteps = [
    {
      id: 'auth-selling',
      title: 'Authorization-first selling',
      subtitle: 'Securing direct brand or distributor approval before listing.',
      description: 'We prioritize official distribution permissions to guarantee authentic supply chains, valid invoices, and complete protection against counterfeit or unauthorized claims on Amazon.',
      badge: 'Pillar 01'
    },
    {
      id: 'compliance-scaling',
      title: 'Compliance before scaling',
      subtitle: 'Zero short-cuts; total alignment with Amazon terms.',
      description: 'Before expanding inventory or ad spend, we ensure your account structure, brand documentation, and tax configurations comply completely with Amazon USA policies.',
      badge: 'Pillar 02'
    },
    {
      id: 'roi-selection',
      title: 'ROI-focused product selection',
      subtitle: 'Data-backed catalog filtering for maximum profitability.',
      description: 'We analyze historical buy-box stability, profit margins, FBA fees, and sales velocity using real Amazon data to source high-return wholesale products.',
      badge: 'Pillar 03'
    },
    {
      id: 'inventory-control',
      title: 'Inventory risk control',
      subtitle: 'Advanced stock management and FBA replenishment.',
      description: 'Prevent stockouts and long-term storage fees with data-driven demand forecasting, supplier lead-time management, and proactive stock control.',
      badge: 'Pillar 04'
    },
    {
      id: 'account-health',
      title: 'Long-term account health',
      subtitle: 'Proactive performance monitoring and metric defense.',
      description: 'Safeguard your store against sudden suspensions, policy warnings, and performance metric drops with continuous 24/7 account health monitoring.',
      badge: 'Pillar 05'
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/80 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/80 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Main Container aligned with header */}
      <div className="container mx-auto max-w-7xl space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 shadow-sm transition-transform duration-500 ${isJumping ? '-translate-y-2' : 'translate-y-0'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Structured Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Our Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Service Framework</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We follow a structured wholesale business framework, not random task-based execution. Every service fits into a larger wholesale roadmap—so nothing is done in isolation.
          </p>
        </div>

        {/* Round Live Motion Framework Container (Light Clean Blue Gradient Palette) */}
        <div className={`relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[3rem] p-6 sm:p-12 shadow-2xl overflow-hidden border border-blue-400/30 transition-all duration-700 ${
          isJumping ? 'shadow-blue-600/40 scale-[1.01]' : 'shadow-blue-600/20 scale-100'
        }`}>
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Grid Layout for Framework Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {frameworkSteps.map((step, idx) => (
              <div
                key={step.id}
                onClick={() => setActivePopup(step)}
                className={`group cursor-pointer flex items-center justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
                  idx === 4 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">{step.badge}</span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    View scope
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white group-hover:text-blue-700 text-white flex items-center justify-center transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Sudden Pop Up Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{activePopup.badge} Framework</span>
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

            <p className="text-xs font-semibold text-blue-600 mb-2">{activePopup.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activePopup.description} This step ensures your Amazon USA wholesale operations remain completely compliant, protected, and profitable over the long term.
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