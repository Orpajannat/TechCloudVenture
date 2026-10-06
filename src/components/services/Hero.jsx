import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative isolate overflow-hidden bg-[#07162f] font-sans text-white lg:flex lg:min-h-[560px] lg:items-center xl:min-h-[620px] 2xl:min-h-[680px]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-8 sm:px-6 sm:pt-40 sm:pb-10 lg:px-8 lg:pt-44 lg:pb-20">
        <div className="max-w-xl border-l-2 border-[#7be5f7] pl-5 sm:pl-7 lg:max-w-[48%]">
          <p className="mb-4 text-xs leading-6 font-semibold tracking-[0.2em] text-[#7be5f7] uppercase">
            Built for your next step
          </p>
          <h1
            id="services-hero-heading"
            className="text-5xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-6xl xl:text-7xl"
          >
            Our <span className="text-[#7be5f7]">services.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            From brand approvals and product research to store setup and daily
            management, get support at every stage of your wholesale business.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded text-slate-200 transition-colors hover:text-[#7be5f7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7be5f7] motion-reduce:transition-none"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#7be5f7]" /></li>
              <li aria-current="page" className="font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="relative aspect-[3/2] w-full sm:aspect-[2/1] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/images/services/wholesale-services-hero.webp"
          alt="Two wholesale operations professionals reviewing inventory beside shipping boxes in a warehouse"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#07162f] to-transparent lg:inset-0 lg:h-auto lg:bg-linear-to-r lg:from-[#07162f]/95 lg:via-[#07162f]/60 lg:to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#07162f]/60 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-40 bg-linear-to-b from-[#07162f]/80 to-transparent lg:block" />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#7be5f7]/60 to-transparent" />
    </section>
  );
}
