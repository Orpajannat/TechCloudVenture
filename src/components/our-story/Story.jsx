import Image from 'next/image';
import { Building2, Globe2, Cloud, Store, ShieldCheck, ChartNoAxesCombined, Handshake } from 'lucide-react';

const companyMilestones = [
  {
    "date": "Jan 01, 2013",
    "dateTime": "2013-01-01",
    "title": "Foundation",
    "description": "TechCloud Venture was founded with a mission to deliver reliable, technology-driven digital solutions."
  },
  {
    "date": "Nov 09, 2015",
    "dateTime": "2015-11-09",
    "title": "Web & E-Commerce Launch",
    "description": "A new concept of showing content in your web page with more interactive way."
  },
  {
    "date": "Nov 03, 2017",
    "dateTime": "2017-11-03",
    "title": "Cloud & SaaS Expansion",
    "description": "Expanded into cloud-based systems and SaaS solutions to support scalable online businesses."
  },
  {
    "date": "Mar 03, 2019",
    "dateTime": "2019-03-03",
    "title": "Amazon Wholesale Entry",
    "description": "Launched Amazon wholesale and e-commerce consulting with a focus on long-term growth models."
  },
  {
    "date": "May 03, 2021",
    "dateTime": "2021-05-03",
    "title": "USA Market Specialization",
    "description": "Specialized in the USA Amazon marketplace with brand approvals and authorized reseller setups."
  },
  {
    "date": "May 05, 2023",
    "dateTime": "2023-05-05",
    "title": "Proven Growth",
    "description": "Successfully managed and scaled 100+ Amazon wholesale stores with compliance-first operations."
  },
  {
    "date": "Jan 05, 2024",
    "dateTime": "2024-01-05",
    "title": "Full-Service Growth Partner",
    "description": "Now operating as a complete Amazon growth partner — from brand approval to store scaling and optimization."
  }
];
const milestoneIcons = [Building2, Globe2, Cloud, Store, ShieldCheck, ChartNoAxesCombined, Handshake];

export default function Story() {
  return (
    <>
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="relative isolate bg-[#F5F8FC] py-14 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#005593]/15 to-transparent" />
      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-10 lg:px-8 xl:gap-16">
        <div className="min-w-0">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#007EA5] uppercase">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#0EB1DB]" />
            Our Story
          </p>
          <h2
            id="story-heading"
            className="max-w-2xl text-2xl leading-snug font-semibold tracking-tight text-pretty text-[#02276B] sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]"
          >
            Founded to bridge the gap between global sourcing and Amazon fulfillment, Tech Cloud Global Venture helps brands scale efficiently across markets.
          </h2>
          <div aria-hidden="true" className="my-6 h-1 w-12 rounded-full bg-linear-to-r from-[#005593] to-[#0EB1DB]" />

          <div className="space-y-5 text-sm leading-7 text-[#526078] sm:text-base sm:leading-8">
            <p>
              In <strong className="font-semibold text-[#02276B]">2024</strong>, to provide specialized and fully dedicated Amazon USA wholesale services, we launched Tech Cloud Global Venture as a separate entity. Tech Cloud Global Venture is focused exclusively on Amazon USA wholesale solutions.
            </p>
            <p>
              Today, we proudly manage <strong className="font-semibold text-[#02276B]">100+ Amazon USA wholesale stores</strong>, providing end-to-end support including brand approvals, wholesale product research, listing management, ungating support, FBA shipment creation, and Amazon PPC optimization.
            </p>
          </div>
        </div>

        <div className="group relative mx-auto w-full min-w-0 max-w-xl lg:mx-0 lg:justify-self-end">
          <div aria-hidden="true" className="absolute -right-2 -bottom-2 -z-10 h-2/3 w-2/3 rounded-3xl border border-[#0EB1DB]/25 bg-[#0EB1DB]/5 transition-colors duration-500 group-hover:border-[#0EB1DB]/50 group-hover:bg-[#0EB1DB]/10 motion-reduce:transition-none sm:-right-3 sm:-bottom-3" />
          <div className="overflow-hidden rounded-3xl border border-[#005593]/10 bg-white p-2 shadow-xl shadow-[#02276B]/5 transition-[transform,border-color,box-shadow] duration-500 group-hover:border-[#0EB1DB]/40 group-hover:shadow-2xl group-hover:shadow-[#02276B]/10 motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
            <div className="overflow-hidden rounded-2xl bg-[#EAF4FB]">
              <Image
                src="/images/our-story-wholesale-bridge.webp"
                alt="Illustration of a container ship connected by a cyan bridge to a wholesale warehouse and delivery truck, with a globe behind them"
                width={1200}
                height={900}
                sizes="(min-width: 1280px) 536px, (min-width: 1024px) calc((100vw - 104px) / 2.08 - 18px), (min-width: 640px) 558px, calc(100vw - 50px)"
                className="block h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="milestones-heading" className="bg-white py-14 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 grid items-center gap-8 md:mb-14 md:grid-cols-2 md:gap-12">
          <div className="min-w-0">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#007EA5] uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-[#0EB1DB]" />
              Our milestones
            </p>
            <h2 id="milestones-heading" className="text-3xl leading-tight font-semibold tracking-tight text-[#02276B] sm:text-4xl lg:text-5xl">
              Every step.<br />
              <span className="text-[#007EA5]">A stronger foundation.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#526078]">
              From our first digital solutions to a full-service Amazon growth partner.
            </p>
          </div>
          <div className="group mx-auto w-full min-w-0 max-w-xl overflow-hidden rounded-2xl border border-[#005593]/10 bg-[#EAF4FB] shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#0EB1DB]/40 hover:shadow-lg hover:shadow-[#02276B]/10 motion-reduce:transition-none">
            <Image
              src="/images/our-story-milestones.webp"
              alt="Seven connected platforms illustrating growth from an initial idea through digital services, cloud technology, ecommerce, and fulfillment"
              width={1200}
              height={600}
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 112px) / 2), (min-width: 768px) calc((100vw - 96px) / 2), (min-width: 640px) 576px, calc(100vw - 32px)"
              className="block h-auto w-full transition-transform duration-700 motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none"
            />
          </div>
        </header>

        <ol aria-label="Company milestones from 2013 to 2024" className="mx-auto max-w-6xl space-y-6 md:space-y-8">
          {companyMilestones.map((milestone, index) => {
            const Icon = milestoneIcons[index];
            return (
              <li key={milestone.dateTime} className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-3 sm:gap-x-5 md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:gap-x-8">
                {index < companyMilestones.length - 1 && (
                  <span aria-hidden="true" className="absolute top-16 -bottom-12 left-5 w-px -translate-x-1/2 bg-linear-to-b from-[#005593]/40 to-[#0EB1DB]/20 md:-bottom-14 md:left-1/2" />
                )}
                <span className="relative z-10 col-start-1 row-start-1 mt-6 flex size-10 items-center justify-center rounded-full border-4 border-white bg-[#005593] text-white shadow-[0_0_0_1px_#DCE8F1] transition-[background-color,box-shadow,transform] duration-300 group-hover:bg-[#007EA5] group-hover:shadow-[0_0_0_5px_#E4F5FC] motion-safe:group-hover:scale-110 motion-reduce:transition-none md:col-start-2">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <article className={`relative col-start-2 row-start-1 min-w-0 rounded-2xl border border-[#005593]/10 bg-[#F7FAFD] p-5 shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-300 group-hover:border-[#0EB1DB]/40 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#02276B]/5 motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none sm:p-6 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'}`}>
                  <time dateTime={milestone.dateTime} className="mb-3 inline-flex rounded-full border border-[#007EA5]/10 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#007EA5]">
                    {milestone.date}
                  </time>
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-[#02276B] sm:text-xl">{milestone.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#526078] sm:text-base">
                    {milestone.title === 'Proven Growth' ? (
                      <>Successfully managed and scaled <strong className="font-semibold text-[#02276B]">100+ Amazon wholesale stores</strong> with compliance-first operations.</>
                    ) : milestone.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
    </>
  );
}
