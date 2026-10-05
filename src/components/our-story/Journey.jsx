'use client';

import Image from 'next/image';
import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Monitor,
  Users,
} from 'lucide-react';

const milestones = [
  {
    title: '2013 - A clear beginning',
    description:
      'Tech Cloud Ltd. was founded in 2013 with a clear goal—to provide reliable IT and Amazon-focused services that help businesses grow online.',
  },
  {
    title: 'Building marketplace expertise',
    description:
      'In the beginning, we started with core Amazon services such as Amazon Product Image Design, Amazon Listing SEO, and PPC Management. Through continuous work and real marketplace experience, we helped sellers improve visibility, traffic, and sales on Amazon.',
  },
  {
    title: 'Expanding into wholesale',
    description:
      'As time passed, we expanded our expertise and entered Amazon USA Wholesale Store Management. We realized that long-term success on Amazon requires proper brand approvals, strong wholesale sourcing, accurate product research, and complete store management—not just listings and ads.',
  },
  {
    title: 'Growing with experience',
    description:
      'With years of hands-on experience in the Amazon USA market, we built a strong team for wholesale operations, brand approvals, ROI-focused product selection, and store growth.',
  },
];

const milestoneIcons = [
  Building2,
  Monitor,
  ChartNoAxesCombined,
  Users,
];

export default function Journey() {
  return (
    <section
      id="our-journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-[#f7fbff] py-16 font-sans sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND ANIMATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#6DDCF5]/15 blur-[100px] animate-glow-one"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px] animate-glow-two"
      />

      {/* Rotating decorative rings */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] hidden h-32 w-32 rounded-full border border-dashed border-[#007EA5]/15 lg:block animate-ring"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] bottom-[15%] hidden h-44 w-44 rounded-full border border-dashed border-[#6DDCF5]/20 lg:block animate-ring-reverse"
      />

      {/* Floating dots */}

      <span
        aria-hidden="true"
        className="absolute left-[12%] top-[35%] h-3 w-3 rounded-full bg-[#0EB1DB] shadow-[0_0_20px_#0EB1DB] animate-dot-one"
      />

      <span
        aria-hidden="true"
        className="absolute right-[15%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#007EA5] shadow-[0_0_15px_#007EA5] animate-dot-two"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[20%] left-[45%] h-2 w-2 rounded-full bg-[#6DDCF5] animate-ping"
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="mb-10 max-w-2xl sm:mb-14">

          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#007EA5] animate-label">

            <span
              aria-hidden="true"
              className="h-1.5 w-8 origin-left rounded-full bg-[#0EB1DB] animate-line"
            />

            Our journey

          </p>


          <h2
            id="journey-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-[#02276B] sm:text-4xl lg:text-5xl"
          >
            How our journey{' '}

            <span className="relative inline-block text-[#007EA5] animate-heading">

              began.

              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#0EB1DB] animate-underline"
              />

            </span>
          </h2>

        </header>


        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">

          {/* =================================================
              IMAGE
          ================================================= */}

          <figure className="group relative mx-auto w-full min-w-0 max-w-lg lg:mx-0">

            {/* Floating ring behind image */}

            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 hidden h-20 w-20 rounded-full border-2 border-dashed border-[#0EB1DB]/30 lg:block animate-ring"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#005593]/10 bg-[#F1F7FC] shadow-xl shadow-[#02276B]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#02276B]/15">

              <div className="relative overflow-hidden">

                <Image
                  src="/images/our-story-journey.webp"
                  alt="Illustration of a progression from product listing tools to market analytics and wholesale fulfillment"
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1280px) 512px, (min-width: 1024px) calc((100vw - 112px) * 0.475), (min-width: 560px) 512px, calc(100vw - 32px)"
                  className="block h-auto w-full transition-transform duration-[1500ms] ease-out motion-safe:group-hover:scale-110"
                />


                {/* Image overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-[#02276B]/25 via-transparent to-transparent opacity-60"
                />


                {/* Established badge */}

                <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl sm:left-5 sm:top-5">

                  <span
                    aria-hidden="true"
                    className="relative h-9 w-1 overflow-hidden rounded-full bg-[#0EB1DB]"
                  >
                    <span className="absolute inset-x-0 -top-full h-full bg-white/80 animate-badge-line" />
                  </span>

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#526078]">
                      Established
                    </p>

                    <p className="text-xl font-bold leading-tight text-[#02276B]">
                      2013
                    </p>

                  </div>

                </div>


                {/* Moving image dots */}

                <span className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_white] animate-ping" />

                <span className="absolute bottom-10 right-12 h-2 w-2 rounded-full bg-[#6DDCF5] animate-bounce" />

              </div>


              {/* Image caption */}

              <figcaption className="flex items-start justify-between gap-4 border-t border-[#005593]/10 bg-white p-5 sm:p-6">

                <div className="min-w-0">

                  <p className="text-base font-semibold text-[#02276B]">
                    From digital services to wholesale growth.
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#526078]">
                    Built on experience. Focused on the future.
                  </p>

                </div>


                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF7FC] text-[#007EA5] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#007EA5] group-hover:text-white">

                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                  />

                </span>

              </figcaption>

            </div>

          </figure>


          {/* =================================================
              TIMELINE
          ================================================= */}

          <ol className="min-w-0">

            {milestones.map(
              ({ title, description }, index) => {

                const Icon = milestoneIcons[index];

                return (
                  <li
                    key={title}
                    className="group relative flex min-w-0 gap-4 pb-10 sm:gap-6 sm:pb-12 last:pb-0"
                    style={{
                      animationDelay: `${index * 180}ms`,
                    }}
                  >

                    {/* Timeline line */}

                    {index < milestones.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[23px] top-14 bottom-0 w-px overflow-hidden bg-[#005593]/10"
                      >
                        <span className="absolute left-0 top-0 h-24 w-full bg-linear-to-b from-[#0EB1DB] to-transparent animate-timeline-line" />
                      </span>
                    )}


                    {/* Icon */}

                    <span
                      className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#005593]/10 bg-white text-[#005593] shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#005593] group-hover:bg-[#005593] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#005593]/20"
                    >

                      <Icon
                        size={22}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />

                      {/* Icon pulse */}

                      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-[#0EB1DB] opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-40" />

                    </span>


                    {/* Text */}

                    <div className="min-w-0 pt-1 transition-transform duration-500 group-hover:translate-x-2">

                      <div className="mb-2 flex items-center gap-3">

                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EB1DB]">
                          0{index + 1}
                        </span>

                        <span className="h-px w-8 bg-[#0EB1DB]/40 transition-all duration-500 group-hover:w-14" />

                      </div>


                      <h3 className="text-lg font-bold leading-snug tracking-tight text-[#02276B] transition-colors duration-300 group-hover:text-[#007EA5] sm:text-xl">
                        {title}
                      </h3>


                      <p className="mt-3 text-sm leading-7 text-[#526078] sm:text-base sm:leading-8">
                        {description}
                      </p>

                    </div>

                  </li>
                );
              }
            )}

          </ol>

        </div>

      </div>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`

        /* GLOW MOVEMENT */

        @keyframes glowOne {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          30% {
            transform: translate(100px, -40px) scale(1.2);
          }

          60% {
            transform: translate(40px, 100px) scale(0.85);
          }

          80% {
            transform: translate(-60px, 40px) scale(1.1);
          }
        }


        @keyframes glowTwo {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          30% {
            transform: translate(-80px, 40px) scale(1.15);
          }

          60% {
            transform: translate(-30px, -80px) scale(0.85);
          }

          80% {
            transform: translate(60px, -30px) scale(1.1);
          }
        }


        /* RINGS */

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


        /* DOTS */

        @keyframes dotOne {
          0%, 100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(35px, -30px);
          }

          50% {
            transform: translate(70px, 20px);
          }

          75% {
            transform: translate(20px, 50px);
          }
        }


        @keyframes dotTwo {
          0%, 100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-60px) scale(1.5);
          }
        }


        /* HEADER */

        @keyframes label {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes heading {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-6px) rotate(-2deg);
          }
        }


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


        @keyframes line {
          0%, 100% {
            transform: scaleX(0.5);
          }

          50% {
            transform: scaleX(1);
          }
        }


        /* BADGE */

        @keyframes badgeLine {
          0% {
            transform: translateY(100%);
          }

          100% {
            transform: translateY(-200%);
          }
        }


        /* TIMELINE */

        @keyframes timelineLine {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(300%);
          }
        }


        .animate-glow-one {
          animation: glowOne 12s ease-in-out infinite;
        }

        .animate-glow-two {
          animation: glowTwo 14s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 12s linear infinite;
        }

        .animate-ring-reverse {
          animation: ringReverse 10s linear infinite;
        }

        .animate-dot-one {
          animation: dotOne 7s ease-in-out infinite;
        }

        .animate-dot-two {
          animation: dotTwo 5s ease-in-out infinite;
        }

        .animate-label {
          animation: label 0.8s ease-out both;
        }

        .animate-heading {
          animation: heading 3.5s ease-in-out infinite;
        }

        .animate-underline {
          animation: underline 3s ease-in-out infinite;
        }

        .animate-line {
          animation: line 2.5s ease-in-out infinite;
        }

        .animate-badge-line {
          animation: badgeLine 2s linear infinite;
        }

        .animate-timeline-line {
          animation: timelineLine 3s ease-in-out infinite;
        }


        @media (prefers-reduced-motion: reduce) {
          .animate-glow-one,
          .animate-glow-two,
          .animate-ring,
          .animate-ring-reverse,
          .animate-dot-one,
          .animate-dot-two,
          .animate-label,
          .animate-heading,
          .animate-underline,
          .animate-line,
          .animate-badge-line,
          .animate-timeline-line {
            animation: none;
          }
        }

      `}</style>
    </section>
  );
}