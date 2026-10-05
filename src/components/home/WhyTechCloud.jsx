'use client';

import Image from 'next/image';
import { BadgeCheck, ChartNoAxesCombined, Globe2, ReceiptText, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: 'USA-Focused Amazon Wholesale Experts',
    description: 'Specialized guidance for the US wholesale marketplace.',
    icon: Globe2,
  },
  {
    title: 'Real Invoices & Brand Approvals',
    description: 'Build your business on proper documentation and trusted brands.',
    icon: BadgeCheck,
  },
  {
    title: 'ROI-Driven Product Selection',
    description: 'Make informed sourcing decisions with profitability in focus.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear costs so you can plan your next step with confidence.',
    icon: ReceiptText,
  },
  {
    title: 'Long-Term Growth Strategy',
    description: 'A thoughtful approach that grows alongside your business.',
    icon: TrendingUp,
  },
];

export default function WhyTechCloud() {
  return (
    <section
      id="why-tech-cloud"
      aria-labelledby="why-tech-cloud-heading"
      className="relative isolate mx-auto max-w-7xl px-4 py-16 font-sans sm:px-6 sm:py-24 lg:px-8 overflow-hidden"
    >
      {/* 1. Wild Round-and-Round Orbiting Background Blobs */}
      <div aria-hidden="true" className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-300/35 rounded-full blur-[100px] pointer-events-none animate-spin-slow" />
      <div aria-hidden="true" className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none animate-spin-reverse-slow" />

      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 relative z-10">
        
        {/* Left Column with Jumping List Items */}
        <div className="min-w-0 animate-fade-in">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#005593]/20 bg-[#F0F8FC] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#005593] shadow-md animate-jump">
            <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-[#0EB1DB] animate-ping" />
            Why choose us
          </p>
          
          <h2
            id="why-tech-cloud-heading"
            className="max-w-xl text-3xl leading-tight font-black tracking-tight text-[#02276B] sm:text-4xl xl:text-5xl"
          >
            Why Tech Cloud<br className="hidden sm:block" /> Global Venture
          </h2>
          
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#526078] font-medium">
            The right expertise. A clearer path forward. Build your wholesale business with a partner focused on your lasting success.
          </p>

          <ul className="mt-8 space-y-4">
            {reasons.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className="group flex min-w-0 items-start gap-4 rounded-2xl border border-blue-100 bg-white/95 backdrop-blur-xl p-4 shadow-md transition-all duration-300 hover:border-[#0EB1DB] hover:shadow-2xl hover:shadow-blue-600/20 hover:translate-x-3"
              >
                {/* Continuous Round-and-Round Spin Motion on the Icon Badge */}
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#005593]/15 bg-[#EFF7FC] text-[#005593] shadow-md animate-orbit-icon group-hover:bg-[#005593] group-hover:text-white transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base leading-snug font-black text-[#02276B]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#526078] font-normal">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Bouncing & Spinning Illustration Container */}
        <figure className="group relative mx-auto w-full min-w-0 max-w-xl animate-jump-card">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#0EB1DB]/25 via-[#EFF7FC] to-[#005593]/25 blur-xl animate-pulse" />
          
          <div className="overflow-hidden rounded-3xl border border-[#005593]/20 bg-white shadow-2xl shadow-blue-900/20 transition-all duration-500 hover:border-[#0EB1DB] hover:shadow-3xl hover:-translate-y-3">
            <div className="relative aspect-square overflow-hidden bg-[#EAF4FB]">
              <Image
                src="/images/why-tech-cloud-growth.webp"
                alt="Wholesale growth illustration with a laptop analytics chart, shipping boxes, invoice, verification shield, and globe"
                fill
                sizes="(min-width: 1280px) 568px, (min-width: 1024px) calc((100vw - 112px) / 2), (min-width: 640px) 576px, (min-width: 608px) 576px, calc(100vw - 32px)"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            
            <figcaption className="flex items-start gap-4 border-t border-[#005593]/10 p-5 sm:p-6 bg-white/95 backdrop-blur-md">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#005593] text-white shadow-lg animate-bounce">
                <BadgeCheck size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-base font-black text-[#02276B] sm:text-lg">Built on trust. Focused on growth.</p>
                <p className="mt-1 text-sm leading-relaxed text-[#526078] font-medium">From global sourcing to your next wholesale milestone.</p>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      {/* ROUND-AND-ROUND & JUMPING ANIMATIONS KEYFRAMES */}
      <style jsx global>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg) translate(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(20px) rotate(-360deg); }
        }
        @keyframes spinReverseSlow {
          0% { transform: rotate(0deg) translate(-25px) rotate(0deg); }
          100% { transform: rotate(-360deg) translate(-25px) rotate(360deg); }
        }
        @keyframes orbitIcon {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes jumpCard {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(0.8deg); }
        }

        .animate-spin-slow { animation: spinSlow 14s linear infinite; }
        .animate-spin-reverse-slow { animation: spinReverseSlow 18s linear infinite; }
        .animate-orbit-icon { animation: orbitIcon 8s ease-in-out infinite; }
        .animate-jump { animation: jump 2s ease-in-out infinite; }
        .animate-jump-card { animation: jumpCard 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}