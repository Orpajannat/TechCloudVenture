'use client'

import Image from 'next/image'
import { ShieldCheck, TrendingUp, Award, Globe2 } from 'lucide-react'

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EAF2FF]/50 to-white py-24 lg:py-32 text-slate-900">
      
      {/* Continuous Moving Background Gradient Blobs */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none animate-blob-1" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none animate-blob-2" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 border border-blue-200 bg-white shadow-md shadow-blue-500/5 hover:border-blue-400 transition-all duration-300 animate-fade-in-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wide text-blue-900">
            About Tech Cloud Global Venture
          </span>
        </div>

        {/* Main Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 animate-fade-in-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Powering Seamless Growth from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">Global Sourcing</span> to Amazon Fulfillment
            </h1>
            
            <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/80 to-transparent py-1.5 rounded-r-xl transition-all duration-300 hover:translate-x-1">
                Founded to bridge the gap between global sourcing and Amazon USA fulfillment, Tech Cloud Global Venture was built with one clear mission: helping brands and sellers scale efficiently, compliantly, and profitably in the U.S. Amazon marketplace. In 2024, recognizing the need for a fully dedicated and compliance-first Amazon USA wholesale solution, we launched Tech Cloud Global Venture as a specialized standalone entity focused exclusively on Amazon USA wholesale operations.
              </p>
              
              <p className="transition-all duration-300 hover:translate-x-1">
                Today, we proudly manage 100+ Amazon USA wholesale stores, delivering end-to-end support that includes brand approvals, authorized wholesale sourcing, product research, listing management, ungating assistance, FBA shipment creation, and Amazon PPC optimization—all executed with a strict focus on policy compliance and long-term growth.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
              
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-blue-900/5 hover:border-blue-400 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 text-blue-400/40 group-hover:text-blue-600 transition-colors">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="block text-3xl font-black text-slate-900 tracking-tight">100+</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1 block">Stores Managed</span>
              </div>

              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-blue-900/5 hover:border-blue-400 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 text-blue-400/40 group-hover:text-blue-600 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <span className="block text-3xl font-black text-slate-900 tracking-tight">2024</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1 block">Standalone Entity</span>
              </div>

              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-blue-900/5 hover:border-blue-400 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 text-blue-400/40 group-hover:text-blue-600 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="block text-3xl font-black text-slate-900 tracking-tight">100%</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1 block">Compliance First</span>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Visual with Continuous Floating & Rotating Ring */}
          <div className="lg:col-span-5 w-full flex justify-center relative animate-fade-in-right">
            
            {/* Continuously Rotating Decorative Ring */}
            <div className="absolute -inset-6 rounded-full border border-blue-300/40 border-dashed pointer-events-none hidden sm:block animate-spin-slow" />

            <div className="relative w-full max-w-md lg:max-w-none group">
              
              {/* Background Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-transparent rounded-[2.5rem] blur-2xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Image Card with Floating Animation */}
              <div className="relative rounded-3xl p-3 bg-white/90 border border-white shadow-2xl shadow-blue-900/15 backdrop-blur-xl animate-float">
                <div className="overflow-hidden rounded-2xl relative">
                  <Image
                    src="/images/about-global-commerce.png"
                    alt="Connected globe above a fulfillment warehouse with a container ship, aircraft, and delivery truck"
                    width={1284}
                    height={1284}
                    sizes="(min-width: 1024px) 500px, 100vw"
                    priority
                    className="h-auto w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-4 sm:bottom-6 sm:-left-6 hidden sm:flex items-center gap-3 bg-white/95 border border-blue-100 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Global Sourcing</p>
                    <p className="text-sm font-extrabold text-slate-900">Amazon USA FBA</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Embedded Styles for Continuous Animations */}
      <style jsx global>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 30px) scale(0.9); }
          66% { transform: translate(30px, -30px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-25px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(25px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-blob-1 {
          animation: blob1 18s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: blob2 22s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite 1s;
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.9s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  )
}