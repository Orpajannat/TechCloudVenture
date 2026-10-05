'use client';

import Image from 'next/image';
import { Target, Telescope, ArrowUpRight } from 'lucide-react';

const principles = [
  {
    title: 'Mission',
    icon: Target,
    description:
      'Our mission is to help Amazon sellers build stable, compliant, and profitable wholesale businesses in the USA market. We believe in transparency, long-term growth, and real results.',
  },
  {
    title: 'Vision',
    icon: Telescope,
    description:
      'At Tech Cloud Global Venture, we don’t just manage Amazon stores—we become a trusted growth partner for your Amazon wholesale journey.',
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="relative overflow-hidden bg-[#f7fbff] py-20 font-sans sm:py-24 lg:py-32"
    >

      <h2 id="mission-vision-heading" className="sr-only">
        Our mission and vision
      </h2>


      {/* =====================================================
          BACKGROUND ANIMATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#6DDCF5]/20 blur-[110px] animate-glow-left"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px] animate-glow-right"
      />


      {/* Rotating circles */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[15%] hidden h-32 w-32 rounded-full border border-dashed border-[#0EB1DB]/25 lg:block animate-ring"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] bottom-[15%] hidden h-44 w-44 rounded-full border border-dashed border-[#007EA5]/15 lg:block animate-ring-reverse"
      />


      {/* Floating dots */}

      <span
        aria-hidden="true"
        className="absolute left-[12%] top-[40%] h-3 w-3 rounded-full bg-[#0EB1DB] shadow-[0_0_20px_#0EB1DB] animate-float-one"
      />

      <span
        aria-hidden="true"
        className="absolute right-[12%] top-[25%] h-4 w-4 rounded-full bg-[#007EA5]/70 shadow-[0_0_20px_#007EA5] animate-float-two"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[20%] left-[35%] h-2.5 w-2.5 rounded-full bg-[#6DDCF5] animate-ping"
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#007EA5]/15 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#007EA5] shadow-sm animate-pop">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inset-0 rounded-full bg-[#0EB1DB] animate-ping" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#0EB1DB]" />

            </span>

            Purpose &amp; direction

          </div>


          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#02276B] sm:text-5xl lg:text-6xl">

            What drives

            <span className="relative ml-2 inline-block text-[#007EA5] animate-heading">

              us.

              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#0EB1DB] animate-underline"
              />

            </span>

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#526078] sm:text-lg">
            Our mission and vision shape every decision we make and every
            business we help grow.
          </p>

        </div>


        {/* =================================================
            MAIN LAYOUT
        ================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">


          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="group relative mx-auto w-full max-w-xl lg:mx-0">

            {/* Rotating outer ring */}

            <div
              aria-hidden="true"
              className="absolute -right-7 -top-7 h-32 w-32 rounded-full border-2 border-dashed border-[#0EB1DB]/30 animate-ring-slow"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border border-[#007EA5]/20 animate-ring-reverse"
            />


            {/* Main image */}

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-[#EAF4FB] shadow-2xl shadow-[#02276B]/10 transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_30px_70px_rgba(2,39,107,0.18)]">

              <Image
                src="/images/mission-vision-growth.webp"
                alt="Illustration of a target, globe, rising chart, and verification shield representing focused and compliant wholesale growth"
                width={1200}
                height={900}
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="block h-auto w-full transition-transform duration-[1600ms] ease-out group-hover:scale-110"
              />


              {/* Image glow */}

              <div className="absolute inset-0 bg-linear-to-t from-[#02276B]/25 via-transparent to-transparent opacity-50" />


              {/* Floating badge */}

              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 sm:left-7 sm:top-7">

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005593] text-white">

                  <Target size={20} />

                </span>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#66758b]">
                    Our purpose
                  </p>

                  <p className="text-sm font-bold text-[#02276B]">
                    Focused growth
                  </p>

                </div>

              </div>


              {/* Floating dots */}

              <span className="absolute bottom-8 right-8 h-4 w-4 rounded-full bg-[#6DDCF5] shadow-[0_0_25px_#6DDCF5] animate-bounce" />

              <span className="absolute right-14 top-10 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_15px_white] animate-ping" />

            </div>


            {/* Bottom floating label */}

            <div className="absolute -bottom-5 right-5 rounded-2xl border border-[#dce8f1] bg-white px-5 py-3 shadow-xl transition-all duration-500 group-hover:-translate-y-2 sm:right-8">

              <p className="text-xs font-semibold text-[#526078]">
                Built for
              </p>

              <p className="text-sm font-bold text-[#007EA5]">
                Long-term success
              </p>

            </div>

          </div>


          {/* =================================================
              MISSION + VISION
          ================================================= */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">


            {principles.map(
              ({ title, description, icon: Icon }, index) => (

                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[#dce8f1] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#0EB1DB]/50 hover:shadow-[0_20px_50px_rgba(2,39,107,0.12)] sm:p-7"
                  style={{
                    animationDelay: `${index * 250}ms`,
                  }}
                >

                  {/* Animated top glow */}

                  <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#005593] via-[#0EB1DB] to-[#6DDCF5] transition-transform duration-700 group-hover:scale-x-100" />


                  {/* Background circle */}

                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EFF8FC] transition-all duration-700 group-hover:scale-[2] group-hover:bg-[#E5F7FC]" />


                  <div className="relative z-10 flex items-start gap-5">

                    {/* ICON */}

                    <div className="relative shrink-0">

                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF7FC] text-[#005593] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-[#005593] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#005593]/20">

                        <Icon
                          size={30}
                          strokeWidth={1.6}
                        />

                      </span>


                      {/* Icon pop ring */}

                      <span className="absolute inset-0 rounded-2xl border-2 border-[#0EB1DB]/40 opacity-0 transition-all duration-500 group-hover:scale-[1.35] group-hover:opacity-100" />

                    </div>


                    {/* CONTENT */}

                    <div className="min-w-0 flex-1">

                      <div className="mb-2 flex items-center gap-3">

                        <span className="text-xs font-black tracking-[0.15em] text-[#0EB1DB]">
                          0{index + 1}
                        </span>

                        <span className="h-px w-8 bg-[#0EB1DB]/30 transition-all duration-500 group-hover:w-14" />

                      </div>


                      <h3 className="text-2xl font-black tracking-tight text-[#02276B] transition-colors duration-300 group-hover:text-[#007EA5]">
                        {title}
                      </h3>


                      <p className="mt-4 text-sm leading-7 text-[#526078] sm:text-base sm:leading-8">
                        {description}
                      </p>


                      {/* Bottom action */}

                      <div className="mt-6 flex items-center justify-between">

                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a98a9] transition-colors group-hover:text-[#007EA5]">
                          {title === 'Mission'
                            ? 'What we do'
                            : 'Where we are going'}
                        </span>


                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce8f1] text-[#007EA5] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#007EA5] group-hover:text-white">

                          <ArrowUpRight size={17} />

                        </span>

                      </div>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`

        /* ================= GLOW ================= */

        @keyframes glowLeft {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          30% {
            transform: translate(100px, -40px) scale(1.2);
          }

          60% {
            transform: translate(40px, 90px) scale(0.85);
          }

          80% {
            transform: translate(-50px, 30px) scale(1.1);
          }
        }

        @keyframes glowRight {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          30% {
            transform: translate(-80px, 40px) scale(1.15);
          }

          60% {
            transform: translate(-30px, -70px) scale(0.85);
          }

          80% {
            transform: translate(60px, -20px) scale(1.1);
          }
        }


        /* ================= RINGS ================= */

        @keyframes ring {
          from {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(180deg) scale(1.12);
          }

          to {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes ringReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }


        /* ================= FLOAT ================= */

        @keyframes floatOne {
          0%, 100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(35px, -35px);
          }

          50% {
            transform: translate(70px, 10px);
          }

          75% {
            transform: translate(20px, 45px);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-60px) scale(1.5);
          }
        }


        /* ================= POP ================= */

        @keyframes pop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.7);
          }

          65% {
            opacity: 1;
            transform: translateY(-6px) scale(1.08);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* ================= HEADING ================= */

        @keyframes heading {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          25% {
            transform: translateY(-7px) rotate(-2deg);
          }

          50% {
            transform: translateY(0) rotate(2deg);
          }

          75% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }


        /* ================= UNDERLINE ================= */

        @keyframes underline {
          0%, 100% {
            transform: scaleX(0.4);
            transform-origin: left;
          }

          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }


        .animate-glow-left {
          animation: glowLeft 12s ease-in-out infinite;
        }

        .animate-glow-right {
          animation: glowRight 14s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 12s linear infinite;
        }

        .animate-ring-reverse {
          animation: ringReverse 10s linear infinite;
        }

        .animate-ring-slow {
          animation: ring 14s linear infinite;
        }

        .animate-float-one {
          animation: floatOne 7s ease-in-out infinite;
        }

        .animate-float-two {
          animation: floatTwo 5s ease-in-out infinite;
        }

        .animate-pop {
          animation: pop 0.8s cubic-bezier(.2, 1.4, .4, 1) both;
        }

        .animate-heading {
          animation: heading 3.5s ease-in-out infinite;
        }

        .animate-underline {
          animation: underline 3s ease-in-out infinite;
        }


        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {

          .animate-glow-left,
          .animate-glow-right,
          .animate-ring,
          .animate-ring-reverse,
          .animate-ring-slow,
          .animate-float-one,
          .animate-float-two,
          .animate-pop,
          .animate-heading,
          .animate-underline {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}