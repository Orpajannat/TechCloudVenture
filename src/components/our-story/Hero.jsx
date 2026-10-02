import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative isolate flex min-h-[340px] w-full items-end overflow-hidden bg-[#07162F] pt-28 font-sans sm:min-h-[400px] sm:pt-32 lg:min-h-[460px] lg:pt-36 xl:min-h-[500px]"
    >
      <Image
        src="/images/our-story-global-sourcing.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center] sm:object-[center_60%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#07162F]/90 via-[#07162F]/45 to-[#07162F]/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-[#07162F]/85 to-transparent sm:h-48"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-t from-[#07162F]/70 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">

        <div className="max-w-2xl border-l-2 border-[#6DDCF5] pl-5 sm:pl-7">
          <h1
            id="our-story-heading"
            className="text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Our <span className="text-[#6DDCF5]">Story</span>
          </h1>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-[#6DDCF5]/60 via-white/15 to-transparent" />
    </section>
  );
}
