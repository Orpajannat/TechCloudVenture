import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh w-full items-center pt-24 sm:pt-28 lg:min-h-[min(952px,100svh)] lg:pt-40">
      <Image src="/images/HeroBanner.jpg" alt="" fill sizes="100vw" loading="eager" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#00022D]/70 to-[#00022D]/20" />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 text-left text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h1 id="hero-title" className="text-3xl leading-tight font-black text-shadow-2xs sm:text-4xl lg:text-5xl">
            Wholesale Growth — <br className="hidden sm:block" />Done the Right Way
          </h1>
          <p className="max-w-xl pt-4 text-base leading-relaxed text-shadow-2xs sm:text-lg lg:text-xl">
            Brand approvals, compliant wholesale sourcing, and full-service Amazon store management—built for long-term, authorized growth in the U.S. market.
          </p>
          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:flex-wrap">
            <button type="button" className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#00022D] bg-[#00022D] px-4 py-3 font-semibold shadow-lg transition-colors hover:border-[#4A88EA] hover:bg-[#4A88EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-60">
              Get Free Consultation
              <ArrowRight size={24} aria-hidden="true" className="shrink-0 rounded-full bg-white p-1 text-[#00022D]" />
            </button>
            <button type="button" className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#00022D] bg-white px-4 py-3 font-semibold text-[#00022D] shadow-lg transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-60">
              View Services
              <ArrowRight size={26} aria-hidden="true" className="shrink-0 rounded-full border border-[#00022D] bg-[#00022D] p-1 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
