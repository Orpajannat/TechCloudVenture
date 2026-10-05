import Image from "next/image";
import { ArrowRight, Check, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#00022D]">

      {/* Background Image */}
      <Image
        src="/images/HeroBanner.jpg"
        alt="Wholesale Growth"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00022D]/90" />

      {/* Blue Glow */}
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#4A88EA]/20 blur-[120px] animate-pulse" />

      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#4A88EA]/10 blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div>

            {/* Small Label */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#4A88EA]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7eaff5]">
                Authorized Wholesale Growth
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Wholesale
              <span className="block">
                Growth
              </span>

              <span className="mt-3 block text-[#4A88EA]">
                Done the Right Way.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Brand approvals, compliant wholesale sourcing, and full-service
              Amazon store management—built for long-term, authorized growth
              in the U.S. market.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* Primary Button */}
              <button
                type="button"
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#4A88EA] px-6 py-4 font-semibold text-white shadow-xl shadow-[#4A88EA]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5b96f0]"
              >
                Get Free Consultation

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#00022D] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                className="group flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:rotate-90">
                  <Play size={14} fill="currentColor" />
                </span>

                View Services
              </button>

            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A88EA]/20">
                  <Check size={12} className="text-[#4A88EA]" />
                </span>
                Brand Approvals
              </div>

              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A88EA]/20">
                  <Check size={12} className="text-[#4A88EA]" />
                </span>
                Wholesale Sourcing
              </div>

              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A88EA]/20">
                  <Check size={12} className="text-[#4A88EA]" />
                </span>
                Amazon Management
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative mx-auto hidden h-[560px] w-full max-w-[520px] lg:block">

            {/* Outer Circle */}
            <div className="absolute right-0 top-4 h-[480px] w-[480px] rounded-full border border-white/10 animate-pulse" />

            {/* Inner Circle */}
            <div className="absolute right-10 top-14 h-[400px] w-[400px] rounded-full border border-[#4A88EA]/20" />

            {/* Main Image */}
            <div className="absolute right-0 top-16 h-[430px] w-[390px] overflow-hidden rounded-[32px] border border-white/20 shadow-2xl">

              <Image
                src="/images/HeroBanner.jpg"
                alt="Wholesale business"
                fill
                sizes="390px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00022D] via-[#00022D]/20 to-transparent" />

              {/* Image Text */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7eaff5]">
                  Our Approach
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
                  Built for Long-Term,
                  <br />
                  Authorized Growth
                </h2>

                <div className="mt-5 h-px bg-white/10" />

                <div className="mt-5 flex justify-between">

                  <div>
                    <p className="text-xs text-white/40">
                      Market
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      United States
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Amazon
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Top Floating Card */}
            <div className="absolute left-0 top-20 rounded-2xl border border-white/15 bg-[#071044]/90 px-5 py-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A88EA]/20">
                  <Check size={20} className="text-[#4A88EA]" />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Status
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Authorized
                  </p>
                </div>

              </div>

            </div>


            {/* Bottom Floating Card */}
            <div className="absolute bottom-12 -left-5 rounded-2xl border border-white/15 bg-[#071044]/90 px-5 py-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2">

              <p className="text-xs text-white/40">
                Growth Strategy
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-[#4A88EA] animate-pulse" />

                <span className="text-sm font-semibold text-white">
                  Built to Scale
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00022D] to-transparent" />

    </section>
  );
}