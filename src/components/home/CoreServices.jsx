'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Plus } from 'lucide-react';

const coreServices = [
  {
    title: 'Brand Approval',
    href: '/brand-approval-services',
    category: 'Build credibility',
    description: 'We assist you in getting approved by trusted brands with proper documentation and expert guidance.',
    image: '/images/services/brand-approval.webp',
    alt: 'Approval certificate and verification shield on a blue display platform',
    details: ['Documentation preparation', 'Brand application guidance', 'Approval process support'],
  },
  {
    title: 'Store Management',
    href: '/wholesale-service-management',
    category: 'Simplify operations',
    description: 'We professionally manage your wholesale store, including products, pricing, orders, and suppliers.',
    image: '/images/services/store-management.webp',
    alt: 'Inventory dashboard with shipping boxes and warehouse shelving',
    details: ['Product and pricing management', 'Order coordination', 'Supplier communication'],
  },
  {
    title: 'Product Research',
    href: '/wholesale-product-research',
    category: 'Discover opportunities',
    description: 'We identify high-demand, profitable products through data-driven market research.',
    image: '/images/services/product-research.webp',
    alt: 'Magnifying glass examining a product beside an analytics chart',
    details: ['Market demand analysis', 'Product profitability research', 'Data-informed product selection'],
  },
  {
    title: 'Authorized Reseller Store Setup',
    href: '/authorized-reseller-setup',
    category: 'Launch with confidence',
    description: 'We set up your authorized reseller account in full compliance with brand guidelines.',
    image: '/images/services/reseller-store-setup.webp',
    alt: 'Miniature online storefront with product boxes and a verification shield',
    details: ['Reseller account setup', 'Brand guideline alignment', 'Store launch preparation'],
  },
];

export default function CoreServices() {
  return (
    <section id="core-services" aria-labelledby="core-services-heading" className="relative isolate my-20 overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-[#E8F1FC]/70 to-white font-sans py-24 sm:py-32">
      
      {/* 1. CONTINUOUSLY MOVING BACKGROUND SHAPES (Orb 1 & Orb 2) */}
      <div aria-hidden="true" className="absolute top-1/4 left-5 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none animate-orbit-1" />
      <div aria-hidden="true" className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[110px] pointer-events-none animate-orbit-2" />

      {/* 2. CONTINUOUSLY SWEEPING TOP DIVIDER LINE */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-shimmer" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12 animate-fade-in-down">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border border-blue-200 bg-white/90 shadow-md backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#02276B]">
                Expertise that moves you forward
              </span>
            </div>
            
            <h2 id="core-services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#02276B] leading-tight">
              Core services.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007EA5] via-blue-600 to-[#02276B]">
                Built around your growth.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#526078] font-medium">
            From your first brand approval to everyday operations, get the expertise to build and grow your wholesale business.
          </p>
        </div>

        {/* 3. CARDS GRID WITH CONTINUOUS INDEPENDENT FLOATING ANIMATION */}
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service, index) => (
            <article 
              key={service.title} 
              className={`group relative flex h-full min-w-0 flex-col rounded-[2rem] border border-blue-200/80 bg-white/95 backdrop-blur-2xl shadow-xl shadow-blue-900/10 transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-600/20 hover:-translate-y-3 animate-float-${(index % 4) + 1}`}
            >
              {/* Subtle inner glowing aura on hover */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Container */}
              <div className="relative m-3 overflow-hidden rounded-[1.5rem] bg-[#EAF3FA]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1280px) 270px, (min-width: 1024px) calc((100vw - 116px) / 2), (min-width: 640px) calc((100vw - 100px) / 2), calc(100vw - 52px)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                {/* Floating Badge */}
                <span aria-hidden="true" className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full border border-white/90 bg-white text-xs font-black text-[#02276B] shadow-lg animate-bounce-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Arrow Action Button */}
                <span aria-hidden="true" className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-white text-[#02276B] shadow-lg transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight size={18} className="transition-transform duration-300" />
                </span>
              </div>

              {/* Content Box */}
              <div className="flex flex-1 flex-col px-6 pt-3 pb-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#007EA5]">
                  {service.category}
                </p>
                
                <h3 className="mb-3 text-xl font-black tracking-tight text-[#02276B] leading-snug sm:min-h-14">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-sm leading-relaxed text-[#526078] font-normal">
                  {service.description}
                </p>
                
                {/* Accordion / Details */}
                <details className="group/details mt-auto border-t border-blue-100 pt-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 text-sm font-bold text-[#02276B] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007EA5] [&::-webkit-details-marker]:hidden">
                    <span>Learn more<span className="sr-only"> about {service.title}</span></span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-transform duration-300 group-open/details:rotate-90 group-open/details:bg-blue-600 group-open/details:text-white">
                      <Plus aria-hidden="true" size={16} />
                    </span>
                  </summary>

                  <ul className="space-y-3 px-3 pt-4 text-sm leading-relaxed text-[#526078] animate-fade-in">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1.5">
                        <Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-[#007EA5]" />
                        <span className="font-semibold">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>
                <Link href={service.href} className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-lg px-3 text-sm font-bold text-[#02276B] hover:text-[#007EA5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007EA5]">
                  View service <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MOVING ANIMATIONS KEYFRAMES */}
      <style jsx global>{`
        @keyframes orbit1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.15); }
        }
        @keyframes orbit2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-70px, 50px) scale(0.9); }
        }
        @keyframes shimmer {
          0% { opacity: 0.3; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
          100% { opacity: 0.3; transform: translateX(-100%); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-orbit-1 { animation: orbit1 12s ease-in-out infinite; }
        .animate-orbit-2 { animation: orbit2 15s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 6s ease-in-out infinite; }
        .animate-float-1 { animation: float1 4.5s ease-in-out infinite; }
        .animate-float-2 { animation: float2 5.5s ease-in-out infinite 0.7s; }
        .animate-float-3 { animation: float3 5s ease-in-out infinite 1.4s; }
        .animate-float-4 { animation: float4 6s ease-in-out infinite 2.1s; }
        .animate-bounce-subtle { animation: bounceSubtle 3s ease-in-out infinite; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
}