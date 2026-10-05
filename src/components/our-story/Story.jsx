'use client';

import Image from 'next/image';
import {
  Building2,
  Globe2,
  Cloud,
  Store,
  ShieldCheck,
  ChartNoAxesCombined,
  Handshake,
  ArrowUpRight,
} from 'lucide-react';

const companyMilestones = [
  {
    date: 'Jan 01, 2013',
    dateTime: '2013-01-01',
    title: 'Foundation',
    description:
      'TechCloud Venture was founded with a mission to deliver reliable, technology-driven digital solutions.',
  },
  {
    date: 'Nov 09, 2015',
    dateTime: '2015-11-09',
    title: 'Web & E-Commerce Launch',
    description:
      'A new concept of showing content in your web page with more interactive way.',
  },
  {
    date: 'Nov 03, 2017',
    dateTime: '2017-11-03',
    title: 'Cloud & SaaS Expansion',
    description:
      'Expanded into cloud-based systems and SaaS solutions to support scalable online businesses.',
  },
  {
    date: 'Mar 03, 2019',
    dateTime: '2019-03-03',
    title: 'Amazon Wholesale Entry',
    description:
      'Launched Amazon wholesale and e-commerce consulting with a focus on long-term growth models.',
  },
  {
    date: 'May 03, 2021',
    dateTime: '2021-05-03',
    title: 'USA Market Specialization',
    description:
      'Specialized in the USA Amazon marketplace with brand approvals and authorized reseller setups.',
  },
  {
    date: 'May 05, 2023',
    dateTime: '2023-05-05',
    title: 'Proven Growth',
    description:
      'Successfully managed and scaled 100+ Amazon wholesale stores with compliance-first operations.',
  },
  {
    date: 'Jan 05, 2024',
    dateTime: '2024-01-05',
    title: 'Full-Service Growth Partner',
    description:
      'Now operating as a complete Amazon growth partner — from brand approval to store scaling and optimization.',
  },
];

const milestoneIcons = [
  Building2,
  Globe2,
  Cloud,
  Store,
  ShieldCheck,
  ChartNoAxesCombined,
  Handshake,
];

export default function Story() {
  return (
    <main className="overflow-hidden font-sans">

      {/* =====================================================
          STORY INTRO
      ===================================================== */}

      <section
        id="our-story"
        className="relative overflow-hidden bg-[#F4FAFD] py-20 sm:py-24 lg:py-32"
      >

        {/* Background moving blobs */}

        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6DDCF5]/20 blur-[110px] animate-blob-one"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px] animate-blob-two"
        />

        {/* Rotating circles */}

        <div
          aria-hidden="true"
          className="absolute left-[5%] top-[15%] hidden h-36 w-36 rounded-full border border-dashed border-[#007EA5]/20 lg:block animate-spin-ring"
        />

        <div
          aria-hidden="true"
          className="absolute right-[5%] bottom-[15%] hidden h-44 w-44 rounded-full border border-dashed border-[#0EB1DB]/20 lg:block animate-spin-ring-reverse"
        />


        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* LEFT */}

          <div className="animate-intro">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0EB1DB]/20 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#007EA5] shadow-sm">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inset-0 rounded-full bg-[#0EB1DB] animate-ping" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#0EB1DB]" />

              </span>

              Our Story

            </div>


            <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#02276B] sm:text-5xl lg:text-6xl">

              From an idea

              <br />

              to a{' '}

              <span className="relative inline-block text-[#007EA5] animate-heading">

                global journey.

                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#0EB1DB] animate-underline"
                />

              </span>

            </h1>


            <p className="mt-7 max-w-xl text-base leading-8 text-[#526078] sm:text-lg">
              Founded to bridge the gap between global sourcing and Amazon
              fulfillment, Tech Cloud Global Venture helps brands scale
              efficiently across markets.
            </p>


            {/* Stats */}

            <div className="mt-9 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="group rounded-2xl border border-[#DCE8F1] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl">

                <p className="text-2xl font-black text-[#02276B]">
                  2013
                </p>

                <p className="mt-1 text-xs text-[#526078]">
                  Founded
                </p>

              </div>


              <div className="group rounded-2xl border border-[#DCE8F1] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl">

                <p className="text-2xl font-black text-[#007EA5]">
                  100+
                </p>

                <p className="mt-1 text-xs text-[#526078]">
                  Stores
                </p>

              </div>


              <div className="group col-span-2 rounded-2xl border border-[#DCE8F1] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl sm:col-span-1">

                <p className="text-2xl font-black text-[#02276B]">
                  USA
                </p>

                <p className="mt-1 text-xs text-[#526078]">
                  Marketplace
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="group relative mx-auto w-full max-w-xl animate-image-pop">

            {/* Floating decorative shapes */}

            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#6DDCF5]/20 animate-float"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 h-20 w-20 rounded-2xl border border-dashed border-[#007EA5]/30 animate-spin-ring"
            />


            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-[#02276B]/15 transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[#02276B]/25">

              <Image
                src="/images/our-story-wholesale-bridge.webp"
                alt="Illustration of a container ship connected by a cyan bridge to a wholesale warehouse and delivery truck, with a globe behind them"
                width={1200}
                height={900}
                sizes="(min-width: 1280px) 576px, (min-width: 1024px) 50vw, 100vw"
                className="block h-auto w-full transition-transform duration-[1800ms] ease-out group-hover:scale-110"
              />


              {/* Image overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-[#02276B]/30 via-transparent to-transparent opacity-60" />


              {/* Floating badge */}

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/50 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-3 sm:bottom-7 sm:left-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#526078]">
                  Established
                </p>

                <p className="mt-1 text-2xl font-black text-[#02276B]">
                  2013
                </p>

              </div>


              {/* Moving dot */}

              <span className="absolute right-6 top-6 h-4 w-4 rounded-full bg-[#6DDCF5] shadow-[0_0_25px_#6DDCF5] animate-ping" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MILESTONES
      ===================================================== */}

      <section
        id="milestones"
        className="relative overflow-hidden bg-[#02276B] py-20 sm:py-24 lg:py-32"
      >

        {/* Background */}

        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#007EA5]/20 blur-[130px] animate-blob-one"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#0EB1DB]/10 blur-[120px] animate-blob-two"
        />


        {/* Header */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#6DDCF5]/20 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#6DDCF5] animate-pop">

              <span className="h-2 w-2 rounded-full bg-[#6DDCF5] animate-pulse" />

              Our milestones

            </div>


            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">

              Every step.

              <br />

              <span className="text-[#6DDCF5] animate-heading">
                A stronger foundation.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              From our first digital solutions to a full-service Amazon growth
              partner.
            </p>

          </div>


          {/* =================================================
              TIMELINE
          ================================================= */}

          <div className="relative mx-auto mt-20 max-w-6xl">

            {/* Center timeline */}

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-linear-to-b from-[#6DDCF5] via-[#007EA5]/50 to-transparent md:left-1/2 md:-translate-x-1/2"
            />

            {companyMilestones.map(
              (milestone, index) => {

                const Icon = milestoneIcons[index];

                const isLeft = index % 2 === 0;

                return (
                  <article
                    key={milestone.dateTime}
                    className={`group relative mb-12 grid items-center gap-8 md:mb-20 md:grid-cols-2 md:gap-20 ${
                      isLeft ? '' : 'md:direction-rtl'
                    }`}
                  >

                    {/* =================================================
                        MOBILE / DESKTOP ICON
                    ================================================= */}

                    <div
                      className={`relative z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#02276B] bg-[#6DDCF5] text-[#02276B] shadow-[0_0_0_4px_rgba(109,220,245,0.12)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_0_10px_rgba(109,220,245,0.12)] md:absolute md:left-1/2 md:-translate-x-1/2 ${
                        isLeft
                          ? 'ml-0 md:ml-0'
                          : 'ml-0 md:ml-0'
                      }`}
                    >

                      <Icon
                        size={17}
                        strokeWidth={2}
                      />

                    </div>


                    {/* =================================================
                        CARD
                    ================================================= */}

                    <div
                      className={`ml-16 md:ml-0 ${
                        isLeft
                          ? 'md:col-start-1 md:pr-10'
                          : 'md:col-start-2 md:pl-10'
                      }`}
                    >

                      <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#6DDCF5]/50 group-hover:bg-white/[0.12] group-hover:shadow-2xl group-hover:shadow-[#6DDCF5]/10 sm:p-8">

                        {/* Card number */}

                        <span className="absolute right-5 top-4 text-6xl font-black leading-none text-white/[0.035] transition-all duration-500 group-hover:text-[#6DDCF5]/10 sm:right-7 sm:top-5">
                          0{index + 1}
                        </span>


                        {/* Date */}

                        <time
                          dateTime={milestone.dateTime}
                          className="relative inline-flex rounded-full border border-[#6DDCF5]/20 bg-[#6DDCF5]/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#6DDCF5] transition-all duration-300 group-hover:bg-[#6DDCF5] group-hover:text-[#02276B]"
                        >
                          {milestone.date}
                        </time>


                        {/* Title */}

                        <h3 className="relative mt-5 text-xl font-bold leading-snug text-white transition-all duration-300 group-hover:text-[#6DDCF5] sm:text-2xl">
                          {milestone.title}
                        </h3>


                        {/* Description */}

                        <p className="relative mt-4 text-sm leading-7 text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-base">
                          {milestone.title === 'Proven Growth' ? (
                            <>
                              Successfully managed and scaled{' '}
                              <strong className="font-bold text-white">
                                100+ Amazon wholesale stores
                              </strong>{' '}
                              with compliance-first operations.
                            </>
                          ) : (
                            milestone.description
                          )}
                        </p>


                        {/* Bottom line */}

                        <div className="mt-6 h-1 w-10 origin-left rounded-full bg-[#6DDCF5] transition-all duration-500 group-hover:w-24" />

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`

        /* =========================
           GLOW BLOBS
        ========================= */

        @keyframes blobOne {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          25% {
            transform: translate(90px, -40px) scale(1.15);
          }

          50% {
            transform: translate(40px, 90px) scale(0.85);
          }

          75% {
            transform: translate(-60px, 40px) scale(1.1);
          }
        }


        @keyframes blobTwo {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          25% {
            transform: translate(-70px, 40px) scale(1.15);
          }

          50% {
            transform: translate(-20px, -80px) scale(0.9);
          }

          75% {
            transform: translate(60px, -30px) scale(1.1);
          }
        }


        /* =========================
           RINGS
        ========================= */

        @keyframes spinRing {
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


        @keyframes spinRingReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }


        /* =========================
           HEADING
        ========================= */

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


        @keyframes underline {
          0%, 100% {
            transform: scaleX(0.35);
            transform-origin: left;
          }

          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }


        /* =========================
           POP UP
        ========================= */

        @keyframes pop {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.7);
          }

          60% {
            opacity: 1;
            transform: translateY(-8px) scale(1.05);
          }

          80% {
            transform: translateY(3px) scale(0.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* =========================
           INTRO
        ========================= */

        @keyframes intro {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }

          70% {
            opacity: 1;
            transform: translateX(8px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }


        @keyframes imagePop {
          0% {
            opacity: 0;
            transform: translateX(60px) scale(0.8) rotate(4deg);
          }

          65% {
            opacity: 1;
            transform: translateX(-8px) scale(1.03) rotate(-1deg);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0);
          }
        }


        /* =========================
           FLOAT
        ========================= */

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-25px) rotate(15deg);
          }
        }


        /* =========================
           CLASSES
        ========================= */

        .animate-blob-one {
          animation: blobOne 12s ease-in-out infinite;
        }

        .animate-blob-two {
          animation: blobTwo 14s ease-in-out infinite;
        }

        .animate-spin-ring {
          animation: spinRing 10s linear infinite;
        }

        .animate-spin-ring-reverse {
          animation: spinRingReverse 8s linear infinite;
        }

        .animate-heading {
          animation: heading 3s ease-in-out infinite;
        }

        .animate-underline {
          animation: underline 3s ease-in-out infinite;
        }

        .animate-pop {
          animation: pop 0.9s cubic-bezier(.2, 1.5, .4, 1) both;
        }

        .animate-intro {
          animation: intro 0.9s cubic-bezier(.2, 1.2, .4, 1) both;
        }

        .animate-image-pop {
          animation: imagePop 1s cubic-bezier(.2, 1.2, .4, 1) both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 767px) {

          .animate-heading {
            animation-duration: 3.5s;
          }

        }


        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {

          .animate-blob-one,
          .animate-blob-two,
          .animate-spin-ring,
          .animate-spin-ring-reverse,
          .animate-heading,
          .animate-underline,
          .animate-pop,
          .animate-intro,
          .animate-image-pop,
          .animate-float {
            animation: none;
          }

        }

      `}</style>

    </main>
  );
}