import Image from 'next/image';
import { Target, Telescope } from 'lucide-react';

const principles = [
  {
    title: 'Mission',
    icon: Target,
    description: 'Our mission is to help Amazon sellers build stable, compliant, and profitable wholesale businesses in the USA market. We believe in transparency, long-term growth, and real results.',
  },
  {
    title: 'Vision',
    icon: Telescope,
    description: 'At Tech Cloud Global Venture, we don\u2019t just manage Amazon stores\u2014we become a trusted growth partner for your Amazon wholesale journey.',
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="relative isolate bg-[#F5F8FC] py-14 font-sans sm:py-20 lg:py-24"
    >
      <h2 id="mission-vision-heading" className="sr-only">Our mission and vision</h2>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#005593]/15 to-transparent" />

      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-8 xl:gap-16">
        <div className="group mx-auto w-full min-w-0 max-w-xl lg:mx-0">
          <div className="overflow-hidden rounded-3xl border border-[#005593]/10 bg-white p-2 shadow-xl shadow-[#02276B]/5 transition-[transform,border-color,box-shadow] duration-500 hover:border-[#0EB1DB]/40 hover:shadow-2xl hover:shadow-[#02276B]/10 motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
            <div className="overflow-hidden rounded-2xl bg-[#EAF4FB]">
              <Image
                src="/images/mission-vision-growth.webp"
                alt="Illustration of a target, globe, rising chart, and verification shield representing focused and compliant wholesale growth"
                width={1200}
                height={900}
                sizes="(min-width: 1280px) 544px, (min-width: 1024px) calc((100vw - 112px) / 2.05 - 18px), (min-width: 640px) 558px, calc(100vw - 50px)"
                className="block h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
              />
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#007EA5] uppercase">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#0EB1DB]" />
            Purpose &amp; direction
          </p>
          <div className="space-y-5">
            {principles.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                aria-labelledby={`our-${title.toLowerCase()}-heading`}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-[#005593]/10 bg-white p-5 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:border-[#0EB1DB]/40 hover:shadow-lg hover:shadow-[#02276B]/5 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6"
              >
                <span aria-hidden="true" className="absolute inset-y-5 left-0 w-0.5 rounded-full bg-[#0EB1DB]/40 transition-colors duration-300 group-hover:bg-[#0EB1DB] motion-reduce:transition-none" />
                <div className="mb-4 flex min-w-0 items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#005593]/10 bg-[#EFF7FC] text-[#005593] transition-[background-color,color,transform] duration-300 group-hover:bg-[#005593] group-hover:text-white motion-safe:group-hover:-rotate-6 motion-reduce:transition-none">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3
                    id={`our-${title.toLowerCase()}-heading`}
                    className="text-2xl leading-tight font-semibold tracking-tight text-[#02276B] sm:text-3xl"
                  >
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-[#526078] sm:text-base sm:leading-8">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
