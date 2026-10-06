'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  FileCheck, 
  Scale, 
  TrendingUp, 
  MessageSquare, 
  LineChart 
} from 'lucide-react';

export default function WhyChooseTechCloudVenture() {
  const [activePopup, setActivePopup] = useState(null);
  const [isJumping, setIsJumping] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 2000);

    const featureInterval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % 6);
    }, 3500);

    return () => {
      clearInterval(jumpInterval);
      clearInterval(featureInterval);
    };
  }, []);

  const features = [
    {
      id: 'usa-specialists',
      number: '01',
      title: 'USA-market focused wholesale specialists',
      shortDesc: 'Deep expertise tailored specifically to the U.S. Amazon marketplace landscape.',
      description: 'Our team consists of U.S. Amazon wholesale experts who understand regional compliance, tax configurations, shipping logistics, and competitive dynamics better than anyone else.',
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      highlight: 'U.S. Marketplace Mastery'
    },
    {
      id: 'brand-authorized',
      number: '02',
      title: 'Brand-authorized, invoice-backed executions',
      shortDesc: 'Zero short-cuts; 100% legitimate brand permissions and valid supply chains.',
      description: 'We prioritize direct distributor approvals and authentic supply chains, ensuring every product comes with verifiable invoices that protect you against authenticity claims.',
      icon: <FileCheck className="w-6 h-6 text-indigo-600" />,
      highlight: '100% Authentic Invoices'
    },
    {
      id: 'compliance-model',
      number: '03',
      title: 'Compliance-first service model',
      shortDesc: 'Total alignment with Amazon TOS to keep your account safe from suspensions.',
      description: 'Before expanding inventory or ad spend, we verify your store structure, tax settings, and brand documents to comply thoroughly with Amazon USA policies.',
      icon: <Scale className="w-6 h-6 text-blue-700" />,
      highlight: 'Rigorous Policy Protection'
    },
    {
      id: 'roi-driven',
      number: '04',
      title: 'ROI-driven product selection',
      shortDesc: 'Data-backed catalog filtering prioritizing high margins and stable buy-boxes.',
      description: 'We evaluate historical sales velocity, FBA storage fees, and buy-box stability using real data tools to source products guaranteed to turn high profits.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-700" />,
      highlight: 'Data-Backed Profitability'
    },
    {
      id: 'transparent-reporting',
      number: '05',
      title: 'Transparent communication & reporting',
      shortDesc: 'Complete visibility into performance metrics, inventory, and strategic updates.',
      description: 'No hidden metrics or black-box operations. You receive clear, regular reporting on every aspect of your wholesale inventory, sales, and account health.',
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      highlight: 'Total Operational Clarity'
    },
    {
      id: 'growth-mindset',
      number: '06',
      title: 'Long-term growth mindset',
      shortDesc: 'We treat your Amazon store like a resilient, scalable business—not a short-term project.',
      description: 'Our strategies are built for sustainability. We focus on long-term supplier relationships and brand equity to compound your success year after year.',
      icon: <LineChart className="w-6 h-6 text-indigo-600" />,
      highlight: 'Sustainable Brand Building'
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Background Live Ambient Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/60 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 shadow-sm transition-transform duration-500 ${isJumping ? '-translate-y-2 scale-105' : 'translate-y-0 scale-100'}`}>
            <Sparkles className="w-4 h-4 text-blue-600 animate-spin" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Enterprise Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Why Choose TechCloud Venture for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">Amazon Wholesale</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We don't manage Amazon stores like short-term projects—we manage them like sustainable businesses.
          </p>
        </div>

        {/* Heavy Animated Interactive Showcase Grid Container */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-6 sm:p-12 shadow-2xl border border-blue-400/30 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none"></div>

          {/* Grid Layout for the 6 Core Advantage Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {features.map((item, idx) => {
              const isActive = activeFeatureIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActivePopup(item)}
                  className={`group cursor-pointer bg-white/10 hover:bg-white/20 border backdrop-blur-xl p-6 sm:p-8 rounded-3xl transition-all duration-500 flex flex-col justify-between shadow-xl transform ${
                    isActive ? 'border-white bg-white/25 scale-[1.03] shadow-blue-500/50' : 'border-white/20 scale-100'
                  } ${isJumping && idx % 2 === 0 ? '-translate-y-1' : 'translate-y-0'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl bg-white text-blue-700 shadow-md transition-transform group-hover:scale-110 ${isActive ? 'ring-4 ring-white/40' : ''}`}>
                        {item.icon}
                      </div>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-white/20 text-white tracking-widest">
                        {item.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-blue-100 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-100/90 leading-relaxed font-medium line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white underline flex items-center gap-1">
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white group-hover:text-blue-700 text-white flex items-center justify-center transition-colors text-xs">
                      ↗
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner Note */}
          <div className="mt-10 pt-6 border-t border-white/20 text-center">
            <p className="text-xs sm:text-sm font-bold text-white tracking-wide bg-white/10 py-3 px-6 rounded-full inline-block backdrop-blur-md border border-white/20 shadow-lg">
              🛡️ Backed by rigorous U.S. wholesale compliance protocols and dedicated account managers.
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Advantage {activePopup.number}</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{activePopup.highlight}</h3>
                </div>
              </div>
              <button
                onClick={() => setActivePopup(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-bold text-blue-600 mb-2">{activePopup.title}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activePopup.description}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-6 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800">Why It Matters for Your Brand:</div>
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Engineered specifically for long-term Amazon USA marketplace safety and continuous growth.</span>
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