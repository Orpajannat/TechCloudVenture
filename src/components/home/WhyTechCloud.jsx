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
      className="mx-auto max-w-7xl px-4 py-14 font-sans sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
        <div className="min-w-0">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#005593]/15 bg-[#F0F8FC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#005593]">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#0EB1DB]" />
            Why choose us
          </p>
          <h2
            id="why-tech-cloud-heading"
            className="max-w-xl text-3xl leading-tight font-semibold tracking-tight text-[#02276B] sm:text-4xl xl:text-5xl"
          >
            Why Tech Cloud<br className="hidden sm:block" /> Global Venture
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#526078]">
            The right expertise. A clearer path forward. Build your wholesale business with a partner focused on your lasting success.
          </p>

          <ul className="mt-7 space-y-2">
            {reasons.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-transparent p-3 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:border-[#0EB1DB]/20 hover:bg-[#F3F9FC] hover:shadow-sm motion-safe:hover:translate-x-1 motion-reduce:transition-none sm:gap-4 sm:p-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#005593]/10 bg-[#EFF7FC] text-[#005593] transition-[background-color,color,transform] duration-300 group-hover:bg-[#005593] group-hover:text-white motion-safe:group-hover:-rotate-6 motion-reduce:transition-none">
                  <Icon size={21} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base leading-snug font-semibold text-[#02276B]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#526078]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="group relative mx-auto w-full min-w-0 max-w-xl">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2rem] bg-linear-to-br from-[#0EB1DB]/10 via-[#EFF7FC] to-[#005593]/10 sm:-inset-4" />
          <div className="overflow-hidden rounded-3xl border border-[#005593]/10 bg-white shadow-lg shadow-[#02276B]/5 transition-[box-shadow,border-color,transform] duration-500 hover:border-[#0EB1DB]/40 hover:shadow-2xl hover:shadow-[#02276B]/10 motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
            <div className="relative aspect-square overflow-hidden bg-[#EAF4FB]">
              <Image
                src="/images/why-tech-cloud-growth.webp"
                alt="Wholesale growth illustration with a laptop analytics chart, shipping boxes, invoice, verification shield, and globe"
                fill
                sizes="(min-width: 1280px) 568px, (min-width: 1024px) calc((100vw - 112px) / 2), (min-width: 640px) 576px, (min-width: 608px) 576px, calc(100vw - 32px)"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
              />
            </div>
            <figcaption className="flex items-start gap-3 border-t border-[#005593]/10 p-5 sm:gap-4 sm:p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#005593] text-white">
                <BadgeCheck size={23} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-[#02276B] sm:text-lg">Built on trust. Focused on growth.</p>
                <p className="mt-1 text-sm leading-relaxed text-[#526078]">From global sourcing to your next wholesale milestone.</p>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
