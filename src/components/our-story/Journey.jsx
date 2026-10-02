import Image from 'next/image';
import { ArrowUpRight, Building2, ChartNoAxesCombined, Monitor, Users } from 'lucide-react';

const milestones = [
  {
    "title": "2013 - A clear beginning",
    "description": "Tech Cloud Ltd. was founded in 2013 with a clear goal—to provide reliable IT and Amazon-focused services that help businesses grow online."
  },
  {
    "title": "Building marketplace expertise",
    "description": "In the beginning, we started with core Amazon services such as Amazon Product Image Design, Amazon Listing SEO, and PPC Management. Through continuous work and real marketplace experience, we helped sellers improve visibility, traffic, and sales on Amazon."
  },
  {
    "title": "Expanding into wholesale",
    "description": "As time passed, we expanded our expertise and entered Amazon USA Wholesale Store Management. We realized that long-term success on Amazon requires proper brand approvals, strong wholesale sourcing, accurate product research, and complete store management—not just listings and ads."
  },
  {
    "title": "Growing with experience",
    "description": "With years of hands-on experience in the Amazon USA market, we built a strong team for wholesale operations, brand approvals, ROI-focused product selection, and store growth."
  }
];

const milestoneIcons = [Building2, Monitor, ChartNoAxesCombined, Users];

export default function Journey() {
  return (
    <section id="our-journey" aria-labelledby="journey-heading" className="bg-white py-14 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-9 max-w-2xl sm:mb-12">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#007EA5] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-[#0EB1DB]" />
            Our journey
          </p>
          <h2 id="journey-heading" className="text-3xl leading-tight font-semibold tracking-tight text-[#02276B] sm:text-4xl lg:text-5xl">
            How our journey <span className="text-[#007EA5]">began.</span>
          </h2>
        </header>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-20">
          <figure className="group mx-auto w-full min-w-0 max-w-lg overflow-hidden rounded-3xl border border-[#005593]/10 bg-[#F1F7FC] shadow-lg shadow-[#02276B]/5 transition-[border-color,box-shadow] duration-300 hover:border-[#0EB1DB]/40 hover:shadow-xl hover:shadow-[#02276B]/10 motion-reduce:transition-none lg:mx-0">
            <div className="relative overflow-hidden">
              <Image
                src="/images/our-story-journey.webp"
                alt="Illustration of a progression from product listing tools to market analytics and wholesale fulfillment"
                width={1200}
                height={1200}
                sizes="(min-width: 1280px) 512px, (min-width: 1024px) calc((100vw - 112px) * 0.475), (min-width: 560px) 512px, calc(100vw - 32px)"
                className="block h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div className="absolute top-4 left-4 flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-sm sm:top-5 sm:left-5">
                <span className="h-8 w-0.5 rounded-full bg-[#0EB1DB]" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#526078] uppercase">Established</p>
                  <p className="text-xl leading-tight font-semibold text-[#02276B]">2013</p>
                </div>
              </div>
            </div>
            <figcaption className="flex items-start justify-between gap-4 border-t border-[#005593]/10 bg-[#F5F9FC] p-5 sm:p-6">
              <div className="min-w-0">
                <p className="text-base font-semibold text-[#02276B]">From digital services to wholesale growth.</p>
                <p className="mt-2 text-sm leading-relaxed text-[#526078]">Built on experience. Focused on the future.</p>
              </div>
              <ArrowUpRight size={22} aria-hidden="true" className="mt-1 shrink-0 text-[#007EA5] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </figcaption>
          </figure>

          <ol className="min-w-0">
            {milestones.map(({ title, description }, index) => {
              const Icon = milestoneIcons[index];
              return (
                <li key={title} className="group relative flex min-w-0 gap-4 pb-8 last:pb-0 sm:gap-5">
                  {index < milestones.length - 1 && (
                    <span aria-hidden="true" className="absolute top-12 bottom-0 left-[23px] w-px bg-[#005593]/15" />
                  )}
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#005593]/10 bg-[#F0F7FC] text-[#005593] transition-[color,background-color,border-color,transform] duration-300 group-hover:border-[#005593] group-hover:bg-[#005593] group-hover:text-white motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-lg leading-snug font-semibold tracking-tight text-[#02276B] transition-colors duration-300 group-hover:text-[#007EA5] motion-reduce:transition-none">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#526078] sm:text-base sm:leading-8">{description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
