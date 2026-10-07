'use client';

import Link from 'next/link';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function CallToActionSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/40 text-slate-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans"
    >
      <div 
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/20 via-violet-400/20 to-pink-400/20 blur-[100px] transition-all duration-300 ease-out"
        style={{
          left: `calc(${mousePos.x}% - 250px)`,
          top: `calc(${mousePos.y}% - 250px)`,
        }}
      ></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-300/30 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="group relative bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-[3rem] p-8 sm:p-16 shadow-2xl overflow-hidden hover:border-violet-400 transition-all duration-700 hover:shadow-violet-500/10">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-gradient-to-br from-blue-200/50 to-violet-300/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 border border-blue-200 shadow-sm animate-bounce">
              <Sparkles className="w-4 h-4 text-violet-600 animate-spin" />
              <span className="text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-violet-700">
                Scale With Confidence
              </span>
            </div>

            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Ready to Build a Legitimate Amazon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600">Wholesale Business?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Whether you’re just starting or scaling an existing operation, choosing the right wholesale partner matters. Let's discuss how we can support your growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/our-story#book-call" className="w-full sm:w-auto group/btn relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-violet-500/30 transform hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2.5">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>

              <Link href="/services" className="w-full sm:w-auto group/secBtn inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-300 font-bold text-sm shadow-sm transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2.5">
                  Explore Our Wholesale Services
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover/secBtn:translate-x-1.5 group-hover/secBtn:text-slate-900 transition-all duration-300" />
                </span>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>TechCloud Venture is here to support compliant, structured, and sustainable Amazon wholesale growth in the USA marketplace.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}