'use client';

import React, { useState } from 'react';
import { AlertCircle, ShieldCheck, TrendingDown, Clock, RefreshCw, DollarSign, Sparkles, Zap, ArrowUpRight } from 'lucide-react';

export default function ComplianceAndRiskTransparency() {
  const [activeTab, setActiveTab] = useState('risks');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHoveredCard, setIsHoveredCard] = useState(null);

  // Live motion mouse tracker for vibrant ambient lighting
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const risks = [
    { 
      id: 'market', 
      title: 'Market fluctuations', 
      icon: <TrendingDown className="w-5 h-5 text-amber-500" />, 
      desc: 'Shifts in consumer demand and seasonal buy-box volatility.',
      color: 'hover:border-amber-400 hover:bg-amber-50/60',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    { 
      id: 'supplier', 
      title: 'Supplier delays', 
      icon: <Clock className="w-5 h-5 text-blue-500" />, 
      desc: 'Distributor backorders and shipping carrier bottlenecks.',
      color: 'hover:border-blue-400 hover:bg-blue-50/60',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    { 
      id: 'policy', 
      title: 'Policy updates', 
      icon: <RefreshCw className="w-5 h-5 text-violet-500" />, 
      desc: 'Evolving Amazon terms of service and category gating rules.',
      color: 'hover:border-violet-400 hover:bg-violet-50/60',
      badgeColor: 'text-violet-600 bg-violet-50 border-violet-200'
    },
    { 
      id: 'competition', 
      title: 'Price competition', 
      icon: <DollarSign className="w-5 h-5 text-emerald-500" />, 
      desc: 'Aggressive repricing from competing third-party merchants.',
      color: 'hover:border-emerald-400 hover:bg-emerald-50/60',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans"
    >
      
      {/* Vibrant Live Motion Spotlight following mouse */}
      <div 
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/25 via-violet-400/25 to-pink-400/20 blur-[110px] transition-all duration-300 ease-out"
        style={{
          left: `calc(${mousePos.x}% - 300px)`,
          top: `calc(${mousePos.y}% - 300px)`,
        }}
      ></div>

      {/* Colorful Floating Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-violet-300/40 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none"></div>

      {/* Main Container */}
      <div className="container mx-auto max-w-6xl relative z-10 space-y-12">
        
        {/* Header Module with Colorful Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-200 shadow-sm animate-bounce">
              <Sparkles className="w-4 h-4 text-violet-600 animate-spin" />
              <span className="text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Compliance & Risk Transparency
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-snug">
              Amazon wholesale involves real business risks. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600">We operate strictly within Amazon’s guidelines.</span>
            </h2>
          </div>

          {/* Interactive Animated Tabs */}
          <div className="flex bg-white/80 p-1.5 rounded-2xl border border-slate-200/80 backdrop-blur-xl shrink-0 shadow-md">
            <button
              onClick={() => setActiveTab('risks')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-500 relative overflow-hidden ${
                activeTab === 'risks' ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business Risks
            </button>
            <button
              onClick={() => setActiveTab('commitment')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-500 relative overflow-hidden ${
                activeTab === 'commitment' ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Commitment
            </button>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Tab Content with Colorful Hover Motion */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-2xl border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-violet-400 transition-all duration-500">
            
            {/* Colorful corner light glow */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br from-blue-200 to-violet-200 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700 opacity-60"></div>

            {activeTab === 'risks' ? (
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-violet-600 animate-ping"></span>
                    Known Business Risks Include:
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-violet-700 bg-violet-50 px-3 py-1.5 rounded-full border border-violet-200 shadow-sm">
                    Risk-Controlled Model
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {risks.map((risk) => (
                    <div 
                      key={risk.id}
                      onMouseEnter={() => setIsHoveredCard(risk.id)}
                      onMouseLeave={() => setIsHoveredCard(null)}
                      className={`group/card cursor-pointer bg-slate-50/80 border border-slate-200 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] shadow-sm hover:shadow-xl ${risk.color}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-white text-slate-800 group-hover/card:scale-110 group-hover/card:bg-violet-600 group-hover/card:text-white transition-all duration-300 shadow-sm border border-slate-100">
                          {risk.icon}
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${risk.badgeColor}`}>
                          Active
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-wide mb-1 group-hover/card:text-violet-700 transition-colors flex items-center justify-between">
                        {risk.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/card:opacity-100 transition-opacity text-violet-600" />
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {risk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 relative z-10 animate-fadeIn">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-700 text-white shadow-lg shadow-violet-500/25">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-violet-600">Our Core Pledge</span>
                    <h3 className="text-xl font-extrabold text-slate-900">Absolute Transparency & Accountability</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-gradient-to-r from-blue-50/60 to-violet-50/60 p-6 rounded-2xl border border-violet-100 shadow-inner italic">
                  "No service can eliminate external marketplace risks. Our goal is to minimize risk through compliance, data-driven decisions, and transparent communication—not ignore it."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 p-3.5 rounded-xl border border-slate-200 text-center group shadow-sm">
                    <div className="text-xs font-bold text-blue-600 group-hover:scale-105 transition-transform">Compliance</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Strict Policy Alignment</div>
                  </div>
                  <div className="bg-slate-50 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 p-3.5 rounded-xl border border-slate-200 text-center group shadow-sm">
                    <div className="text-xs font-bold text-violet-600 group-hover:scale-105 transition-transform">Data-Driven</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Calculated Decisions</div>
                  </div>
                  <div className="bg-slate-50 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 p-3.5 rounded-xl border border-slate-200 text-center group shadow-sm">
                    <div className="text-xs font-bold text-pink-600 group-hover:scale-105 transition-transform">Communication</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Real-Time Updates</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Key Safeguard Highlight Panel with Colorful Hover Motion */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-white via-violet-50/30 to-blue-50/30 backdrop-blur-2xl border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all duration-500">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-violet-300/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
                How We Protect Your Capital
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-slate-50 hover:bg-blue-50/80 hover:border-blue-300 p-4 rounded-2xl border border-slate-200 transition-all duration-300 hover:translate-x-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-sm shadow-blue-400/50"></span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Continuous monitoring of account health metrics to catch policy flags before suspensions happen.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 bg-slate-50 hover:bg-violet-50/80 hover:border-violet-300 p-4 rounded-2xl border border-slate-200 transition-all duration-300 hover:translate-x-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500 mt-1.5 shrink-0 shadow-sm shadow-violet-400/50"></span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Thorough vetting of supplier invoice chains to guarantee complete authenticity and approval.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 bg-slate-50 hover:bg-emerald-50/80 hover:border-emerald-300 p-4 rounded-2xl border border-slate-200 transition-all duration-300 hover:translate-x-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm shadow-emerald-400/50"></span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Conservative inventory replenishment planning to avoid high FBA long-term storage penalties.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}