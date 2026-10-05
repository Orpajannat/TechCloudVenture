'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative isolate flex min-h-[340px] w-full items-end overflow-hidden bg-[#07162F] pt-28 font-sans sm:min-h-[400px] sm:pt-32 lg:min-h-[460px] lg:pt-36 xl:min-h-[500px]"
    >

      {/* ================= BACKGROUND ANIMATION ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#6DDCF5]/30 blur-[90px] animate-orbit-one sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px] animate-orbit-two sm:h-[420px] sm:w-[420px]"
      />

      {/* BIG ROTATING RING */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[15%] -z-10 h-40 w-40 rounded-full border border-dashed border-[#6DDCF5]/30 animate-round"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[20%] -z-10 h-28 w-28 rounded-full border border-dashed border-white/20 animate-round-reverse"
      />


      {/* ================= FLOATING DOTS ================= */}

      <span
        aria-hidden="true"
        className="absolute left-[10%] top-[25%] z-0 h-3 w-3 rounded-full bg-[#6DDCF5] shadow-[0_0_20px_#6DDCF5] animate-float-one"
      />

      <span
        aria-hidden="true"
        className="absolute left-[45%] top-[20%] z-0 h-2 w-2 rounded-full bg-white shadow-[0_0_15px_white] animate-float-two"
      />

      <span
        aria-hidden="true"
        className="absolute right-[25%] top-[35%] z-0 h-4 w-4 rounded-full bg-[#6DDCF5]/80 shadow-[0_0_25px_#6DDCF5] animate-float-three"
      />

      <span
        aria-hidden="true"
        className="absolute right-[8%] bottom-[25%] z-0 h-2.5 w-2.5 rounded-full bg-white/70 animate-float-one"
      />


      {/* ================= HERO IMAGE ================= */}

      <Image
        src="/images/our-story-global-sourcing.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[60%_center] transition-transform duration-[4000ms] ease-out hover:scale-105 sm:object-[center_60%]"
      />


      {/* ================= OVERLAYS ================= */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-linear-to-r from-[#07162F]/95 via-[#07162F]/55 to-[#07162F]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-40 bg-linear-to-b from-[#07162F]/90 to-transparent sm:h-48"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-44 bg-linear-to-t from-[#07162F]/80 to-transparent"
      />


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">

        <div className="max-w-2xl border-l-2 border-[#6DDCF5] pl-5 sm:pl-7 animate-title">

          {/* SMALL LABEL */}

          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#6DDCF5] animate-label">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inset-0 rounded-full bg-[#6DDCF5] animate-ping" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#6DDCF5]" />

            </span>

            Our journey

          </div>


          {/* TITLE */}

          <h1
            id="our-story-heading"
            className="text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Our{' '}

            <span className="relative inline-block text-[#6DDCF5] animate-story">

              Story

              {/* MOVING UNDERLINE */}

              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-[#6DDCF5] shadow-[0_0_15px_#6DDCF5] animate-line"
              />

            </span>
          </h1>


          {/* SMALL MOVING DOTS */}

          <div className="mt-6 flex items-center gap-2">

            <span className="h-1.5 w-10 rounded-full bg-[#6DDCF5] animate-line-short" />

            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />

            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse [animation-delay:300ms]" />

            <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse [animation-delay:600ms]" />

          </div>

        </div>

      </div>


      {/* ================= BOTTOM GLOW ================= */}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#6DDCF5] to-transparent shadow-[0_0_15px_#6DDCF5] animate-bottom-line"
      />


      {/* ================= ANIMATIONS ================= */}

      <style jsx global>{`

        /* BIG GLOW ORBIT */

        @keyframes orbitOne {
          0% {
            transform: translate(0, 0) scale(1);
          }

          25% {
            transform: translate(80px, -30px) scale(1.15);
          }

          50% {
            transform: translate(30px, 80px) scale(0.9);
          }

          75% {
            transform: translate(-70px, 30px) scale(1.1);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }


        @keyframes orbitTwo {
          0% {
            transform: translate(0, 0) scale(1);
          }

          25% {
            transform: translate(-70px, 40px) scale(1.15);
          }

          50% {
            transform: translate(-20px, -60px) scale(0.9);
          }

          75% {
            transform: translate(70px, -20px) scale(1.1);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }


        /* ROTATING RINGS */

        @keyframes round {
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


        @keyframes roundReverse {
          from {
            transform: rotate(360deg) scale(1);
          }

          50% {
            transform: rotate(180deg) scale(0.85);
          }

          to {
            transform: rotate(0deg) scale(1);
          }
        }


        /* FLOATING DOTS */

        @keyframes floatOne {
          0%, 100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(25px, -35px);
          }

          50% {
            transform: translate(50px, 5px);
          }

          75% {
            transform: translate(20px, 35px);
          }
        }


        @keyframes floatTwo {
          0%, 100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-55px) scale(1.5);
          }
        }


        @keyframes floatThree {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          30% {
            transform: translate(-35px, -25px) scale(1.4);
          }

          60% {
            transform: translate(-10px, 40px) scale(0.7);
          }
        }


        /* TITLE JUMP */

        @keyframes titleJump {
          0%, 100% {
            transform: translateY(0);
          }

          15% {
            transform: translateY(-12px);
          }

          30% {
            transform: translateY(0);
          }

          40% {
            transform: translateY(-5px);
          }

          50% {
            transform: translateY(0);
          }
        }


        /* STORY MOTION */

        @keyframes storyMotion {
          0%, 100% {
            transform: rotate(0deg) translateY(0) scale(1);
          }

          25% {
            transform: rotate(-4deg) translateY(-8px) scale(1.04);
          }

          50% {
            transform: rotate(5deg) translateY(0) scale(1.08);
          }

          75% {
            transform: rotate(-2deg) translateY(-5px) scale(1.03);
          }
        }


        /* LABEL POP */

        @keyframes labelPop {
          0% {
            opacity: 0;
            transform: translateY(15px) scale(0.8);
          }

          70% {
            opacity: 1;
            transform: translateY(-4px) scale(1.05);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* UNDERLINE */

        @keyframes lineMove {
          0%, 100% {
            transform: scaleX(0.5);
            transform-origin: left;
          }

          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }


        @keyframes shortLine {
          0%, 100% {
            width: 40px;
          }

          50% {
            width: 75px;
          }
        }


        /* BOTTOM LIGHT */

        @keyframes bottomLine {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(0.5);
          }

          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }


        .animate-orbit-one {
          animation: orbitOne 10s ease-in-out infinite;
        }

        .animate-orbit-two {
          animation: orbitTwo 13s ease-in-out infinite;
        }

        .animate-round {
          animation: round 12s linear infinite;
        }

        .animate-round-reverse {
          animation: roundReverse 9s linear infinite;
        }

        .animate-float-one {
          animation: floatOne 6s ease-in-out infinite;
        }

        .animate-float-two {
          animation: floatTwo 4s ease-in-out infinite;
        }

        .animate-float-three {
          animation: floatThree 7s ease-in-out infinite;
        }

        .animate-title {
          animation: titleJump 4s ease-in-out infinite;
        }

        .animate-story {
          animation: storyMotion 3s ease-in-out infinite;
        }

        .animate-label {
          animation: labelPop 0.8s cubic-bezier(.2, 1.4, .4, 1) both;
        }

        .animate-line {
          animation: lineMove 3s ease-in-out infinite;
        }

        .animate-line-short {
          animation: shortLine 2.5s ease-in-out infinite;
        }

        .animate-bottom-line {
          animation: bottomLine 4s ease-in-out infinite;
        }


        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .animate-orbit-one,
          .animate-orbit-two,
          .animate-round,
          .animate-round-reverse,
          .animate-float-one,
          .animate-float-two,
          .animate-float-three,
          .animate-title,
          .animate-story,
          .animate-label,
          .animate-line,
          .animate-line-short,
          .animate-bottom-line {
            animation: none;
          }
        }

      `}</style>

    </section>
  );
}