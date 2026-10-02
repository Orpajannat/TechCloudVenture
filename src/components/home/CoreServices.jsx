import Image from 'next/image';
import { ArrowUpRight, Check, Plus } from 'lucide-react';

const coreServices = [
  {
    title: 'Brand Approval',
    category: 'Build credibility',
    description: 'We assist you in getting approved by trusted brands with proper documentation and expert guidance.',
    image: '/images/services/brand-approval.webp',
    alt: 'Approval certificate and verification shield on a blue display platform',
    details: ['Documentation preparation', 'Brand application guidance', 'Approval process support'],
  },
  {
    title: 'Store Management',
    category: 'Simplify operations',
    description: 'We professionally manage your wholesale store, including products, pricing, orders, and suppliers.',
    image: '/images/services/store-management.webp',
    alt: 'Inventory dashboard with shipping boxes and warehouse shelving',
    details: ['Product and pricing management', 'Order coordination', 'Supplier communication'],
  },
  {
    title: 'Product Research',
    category: 'Discover opportunities',
    description: 'We identify high-demand, profitable products through data-driven market research.',
    image: '/images/services/product-research.webp',
    alt: 'Magnifying glass examining a product beside an analytics chart',
    details: ['Market demand analysis', 'Product profitability research', 'Data-informed product selection'],
  },
  {
    title: 'Authorized Reseller Store Setup',
    category: 'Launch with confidence',
    description: 'We set up your authorized reseller account in full compliance with brand guidelines.',
    image: '/images/services/reseller-store-setup.webp',
    alt: 'Miniature online storefront with product boxes and a verification shield',
    details: ['Reseller account setup', 'Brand guideline alignment', 'Store launch preparation'],
  },
];

export default function CoreServices() {
  return (
    <section id="core-services" aria-labelledby="core-services-heading" className="relative isolate my-16 bg-[#F5F8FC] font-sans sm:my-20">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#02276B]/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#02276B]">
              <span aria-hidden="true" className="h-px w-8 bg-[#008DB8]" />
              Expertise that moves you forward
            </p>
            <h2 id="core-services-heading" className="text-3xl leading-tight font-semibold tracking-tight text-[#02276B] sm:text-4xl lg:text-5xl">
              Core services.<br />
              <span className="text-[#52667F]">Built around your growth.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#526078] lg:pb-1">
            From your first brand approval to everyday operations, get the expertise to build and grow your wholesale business.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service, index) => (
            <article key={service.title} className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-[#02276B]/10 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-1000 hover:border-[#00A2D0]/40 hover:shadow-xl hover:shadow-[#02276B]/10 focus-within:border-[#00A2D0]/50 focus-within:shadow-xl motion-safe:hover:-translate-y-2 motion-reduce:transition-none">
              <div className="relative m-2 overflow-hidden rounded-xl bg-[#EAF3FA]">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1280px) 270px, (min-width: 1024px) calc((100vw - 116px) / 2), (min-width: 640px) calc((100vw - 100px) / 2), calc(100vw - 52px)"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <span aria-hidden="true" className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full border border-white/80 bg-white/90 text-xs font-semibold text-[#02276B] shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-white text-[#02276B] shadow-sm transition-colors duration-300 group-hover:bg-[#02276B] group-hover:text-white motion-reduce:transition-none">
                  <ArrowUpRight size={18} className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-5 pt-5 pb-6 sm:px-6 xl:px-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#007EA5]">{service.category}</p>
                <h3 className="mb-3 text-xl leading-snug font-semibold tracking-tight text-[#02276B] sm:min-h-14">{service.title}</h3>
                <p className="mb-6 text-sm leading-7 text-[#526078]">{service.description}</p>
                <details className="group/details mt-auto border-t border-[#02276B]/10 pt-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-2 text-sm font-semibold text-[#02276B] transition-colors hover:bg-[#EDF6FC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007EA5] motion-reduce:transition-none [&::-webkit-details-marker]:hidden">
                    <span>Learn more<span className="sr-only"> about {service.title}</span></span>
                    <Plus aria-hidden="true" size={18} className="shrink-0 transition-transform duration-300 group-open/details:rotate-45 motion-reduce:transition-none" />
                  </summary>
                  <ul className="space-y-3 px-2 pt-4 text-sm leading-relaxed text-[#526078]">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-[#007EA5]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
