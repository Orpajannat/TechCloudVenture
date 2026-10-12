'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Store, ShieldCheck, TrendingUp, PackageCheck, Activity, Cpu, Sparkles, RefreshCw } from 'lucide-react';

export default function Wholesale() {
  const [activePopup, setActivePopup] = useState(null);
  const [scanProgress, setScanProgress] = useState(45);
  const [liveStatusIndex, setLiveStatusIndex] = useState(0);

  const statuses = [
    "Verifying Tier-1 Supplier Invoices...",
    "Scanning Amazon US Gating Requirements...",
    "Optimizing FBA Inventory Routing...",
    "Securing Brand Authorization Channels..."
  ];

  // Continuous live motion & progress ticker simulation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 30 : prev + 10));
    }, 1500);

    const statusInterval = setInterval(() => {
      setLiveStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, []);

  const features = [
    { title: 'Proper brand approvals', desc: 'Direct authorization channels to ensure unhindered distribution.' },
    { title: 'Valid wholesale invoices', desc: 'Tier-1 supplier invoices accepted directly by Amazon seller performance.' },
    { title: 'Careful product selection', desc: 'Data-driven curation avoiding suppressed categories and IP risks.' },
    { title: 'Compliance first execution', desc: 'Strict adherence to ungating criteria and store health metrics.' },
    { title: 'Long term operational planning', desc: 'Sustainable forecasting, cash-flow structuring, and stable reordering.' }
  ];

  return (
    <section className="relative min-h-screen bg-[#F0F6FF] text-slate-900 overflow-hidden py-24 px-6 sm:px-10 lg:px-16 font-sans flex items-center justify-center">
      
      {/* Live Animated Background Blue Grid Motion */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Completely Redesigned Live Telemetry Command HUD (Replaces the circle) */}
        <div className="lg:col-span-6 relative">
          
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-25 animate-pulse"></div>

          <div className="relative rounded-3xl bg-white/90 border border-blue-200 p-8 shadow-2xl backdrop-blur-2xl space-y-6">
            
            {/* Top HUD Bar with Live Pulse */}
            <div className="flex items-center justify-between border-b border-blue-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                <Activity className="w-4 h-4 text-blue-600 animate-spin" />
                US_MARKET_HUD // ACTIVE
              </div>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
            </div>

            {/* Live Ticker Status changing dynamically */}
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-200 flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 animate-spin" /> Live Telemetry Feed
              </div>
              <div className="text-sm font-bold transition-all duration-500">{statuses[liveStatusIndex]}</div>
            </div>

            {/* Live Animated Scanning Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold text-slate-700">
                <span>Compliance Verification Status</span>
                <span className="text-blue-600">{scanProgress}%</span>
              </div>
              <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden p-0.5 border border-blue-200">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000 relative"
                  style={{ width: `${scanProgress}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Interactive Telemetry Pills triggering popups */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Inspect Core Protocols:</div>
              <div className="grid grid-cols-2 gap-2.5">
                {features.slice(0, 4).map((feat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActivePopup(feat)}
                    className="p-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-200/80 text-left text-xs font-semibold text-blue-900 transition-all transform hover:-translate-y-1 flex items-center justify-between group"
                  >
                    <span className="truncate">{feat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Editorial Typography & Interactive List */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold shadow-sm">
            <Store className="w-4 h-4 text-blue-600" />
            <span>Authorized Wholesale Infrastructure</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Amazon Wholesale Services for Sellers in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">USA Market</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Our Wholesale Services for Sellers are designed for Amazon sellers who want to operate legitimate, brand-authorized wholesale businesses in the Amazon USA marketplace. Wholesale success requires:
            </p>
          </div>

          {/* Interactive Feature Stack */}
          <div className="space-y-3">
            {features.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePopup(item)}
                className="group flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-600 hover:text-white border border-blue-100 hover:border-blue-600 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-500/20 transform hover:translate-x-1"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 group-hover:text-cyan-200 transition-colors flex items-center gap-1">
                  Inspect <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-medium pt-2">
            We help sellers move away from high risk arbitrage models and build <strong className="text-slate-900 font-bold">structured wholesale operations</strong> that are scalable and sustainable.
          </p>

        </div>

      </div>

      {/* Sudden Pop Up Modal with Smooth Motion */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-white border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-2xl transform animate-scaleUp">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">Verified Protocol</span>
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

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              {activePopup.desc} Proper documentation and verified distributor relationships safeguard your Amazon store from suspensions and secure uninterrupted buy-box ownership in the USA market.
            </p>

            <div className="flex items-center justify-end">
              <button
                onClick={() => setActivePopup(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all shadow-lg shadow-blue-600/30"
              >
                Acknowledge Protocol
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}