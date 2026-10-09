'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/* ---------- data ---------- */
const STAGES = ['Brand approvals', 'Product research', 'Store setup', 'Daily management'];

/* ---------- variants ---------- */
const group = (delay = 0, gap = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});
const pop = {
  hidden: { opacity: 0, scale: 0.6, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 17 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ---------- letters that drop in, then ripple with a travelling wave ---------- */
function Letters({ text, className = '', offset = 0, reduce }) {
  return text.split('').map((ch, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { y: -160, opacity: 0, rotate: i % 2 ? 18 : -18, scale: 0.6 },
        show: { y: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 11 } },
      }}
      className={`inline-block ${className}`}
    >
      <motion.span
        className="inline-block"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3.2, delay: 2.2 + (offset + i) * 0.1, ease: 'easeInOut' }}
      >
        {ch}
      </motion.span>
    </motion.span>
  ));
}

/* ---------- slot-machine word rotator ---------- */
function Rotator({ reduce }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % STAGES.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) return null;

  return (
    <motion.div variants={pop} aria-hidden="true" className="mt-8 inline-flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-0.5 rounded-3xl border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur-md sm:flex-row sm:gap-3 sm:rounded-full sm:py-2.5 sm:text-base">
        <span className="text-slate-200">We take care of</span>
        <span className="relative h-7 w-44 overflow-hidden text-center sm:text-left">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-110%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="absolute inset-x-0 leading-7 font-semibold whitespace-nowrap text-[#7be5f7]"
            >
              {STAGES[i]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        {STAGES.map((s, k) => (
          <motion.span
            key={s}
            animate={{ width: k === i ? 22 : 7, opacity: k === i ? 1 : 0.4 }}
            className="h-1.5 rounded-full bg-[#7be5f7]"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- viewfinder corner ---------- */
function Corner({ className, reduce, delay }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute size-6 border-[#7be5f7] sm:size-9 ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 2.2 }}
      animate={reduce ? { opacity: 0.9 } : { opacity: [0, 1, 0.45, 1], scale: 1 }}
      transition={
        reduce
          ? undefined
          : {
              scale: { type: 'spring', stiffness: 160, damping: 16, delay },
              opacity: { duration: 3.2, delay, times: [0, 0.15, 0.6, 1], repeat: Infinity, repeatType: 'mirror' },
            }
      }
    />
  );
}

/* ---------- hero ---------- */
export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section
      ref={ref}
      aria-labelledby="services-hero-heading"
      className="relative isolate flex min-h-[700px] items-center justify-center overflow-hidden bg-[#07162f] px-4 pt-36 pb-28 font-sans text-white sm:min-h-[760px] sm:px-6 sm:pt-40 lg:min-h-[800px] lg:px-8"
    >
      {/* photo: starts blurred and "pulls focus", then drifts */}
      <motion.div aria-hidden="false" className="absolute inset-0 -z-20" style={reduce ? undefined : { y: imgY }}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { filter: 'blur(22px)', scale: 1.35 }}
          animate={reduce ? { filter: 'blur(0px)' } : { filter: 'blur(0px)', scale: [1.35, 1.13, 1.2] }}
          transition={
            reduce
              ? undefined
              : {
                  filter: { duration: 1.8, ease: 'easeOut' },
                  scale: { duration: 28, times: [0, 0.12, 1], repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
                }
          }
        >
          <Image
            src="/images/services/wholesale-services-hero.webp"
            alt="Two wholesale operations professionals reviewing inventory beside shipping boxes in a warehouse"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[72%_center] lg:object-center"
          />
        </motion.div>
      </motion.div>

      {/* overlays: vignette for readable centered text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(7,22,47,0.88) 0%, rgba(7,22,47,0.6) 55%, rgba(7,22,47,0.85) 100%)' }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-[#07162f] to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-[#07162f]/90 to-transparent" />

      {/* viewfinder frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-28 bottom-6 sm:inset-x-8 sm:top-32 sm:bottom-8 lg:inset-x-12 lg:top-36">
        <Corner reduce={reduce} delay={0.5} className="top-0 left-0 rounded-tl-lg border-t-2 border-l-2" />
        <Corner reduce={reduce} delay={0.65} className="top-0 right-0 rounded-tr-lg border-t-2 border-r-2" />
        <Corner reduce={reduce} delay={0.8} className="right-0 bottom-0 rounded-br-lg border-r-2 border-b-2" />
        <Corner reduce={reduce} delay={0.95} className="bottom-0 left-0 rounded-bl-lg border-b-2 border-l-2" />

        {/* scanning line */}
        {!reduce && (
          <motion.span
            className="absolute inset-x-6 h-px bg-linear-to-r from-transparent via-[#7be5f7] to-transparent shadow-[0_0_14px_2px_rgba(123,229,247,0.55)]"
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 4.5, ease: 'easeInOut', delay: 2 }}
          />
        )}

        {/* scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="flex h-9 w-6 justify-center rounded-full border-2 border-white/50 pt-1.5">
            {!reduce ? (
              <motion.span
                className="block h-2 w-1 rounded-full bg-[#7be5f7]"
                animate={{ y: [0, 11], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              />
            ) : (
              <span className="block h-2 w-1 rounded-full bg-[#7be5f7]" />
            )}
          </span>
        </div>
      </div>

      {/* content */}
      <motion.div
        variants={group(0.15, 0.14)}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* breadcrumb */}
        {/* <motion.nav variants={pop} aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2.5 text-sm">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center rounded px-1 text-slate-200 transition-colors hover:text-[#7be5f7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7be5f7] motion-reduce:transition-none"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <motion.span className="block" animate={reduce ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                <ChevronRight size={14} className="text-[#7be5f7]" />
              </motion.span>
            </li>
            <li aria-current="page" className="flex items-center gap-2 font-medium">
              <span aria-hidden="true" className="relative flex size-2">
                {!reduce && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[#7be5f7]"
                    animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <span className="relative size-2 rounded-full bg-[#7be5f7]" />
              </span>
              Services
            </li>
          </ol>
        </motion.nav> */}

        {/* eyebrow with growing lines */}
        <motion.p variants={pop} className="mt-4 mb-6 flex items-center gap-3 text-xs leading-6 font-semibold tracking-[0.2em] text-[#7be5f7] uppercase sm:gap-4">
          <motion.span
            aria-hidden="true"
            className="h-px w-8 origin-right bg-linear-to-r from-transparent to-[#7be5f7] sm:w-16"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          />
          Built for your next step
          <motion.span
            aria-hidden="true"
            className="h-px w-8 origin-left bg-linear-to-l from-transparent to-[#7be5f7] sm:w-16"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          />
        </motion.p>

        {/* giant heading */}
        <h1
          id="services-hero-heading"
          className="text-[3.25rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-8xl lg:text-9xl xl:text-[9.5rem]"
        >
          <span className="sr-only">Our services.</span>
          <motion.span variants={group(0, 0.06)} aria-hidden="true" className="block">
            <span className="inline-block whitespace-nowrap">
              <Letters text="Our" reduce={reduce} />
            </span>{' '}
            <span className="inline-block whitespace-nowrap">
              <Letters text="services." className="text-[#7be5f7]" offset={3} reduce={reduce} />
            </span>
          </motion.span>
        </h1>

        <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          From brand approvals and product research to store setup and daily management, get support at every stage of your wholesale business.
        </motion.p>

        <Rotator reduce={reduce} />
      </motion.div>

      {/* bottom line with travelling glow */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-linear-to-r from-transparent via-[#7be5f7]/60 to-transparent">
        {!reduce && (
          <motion.div
            className="h-px w-1/4 bg-linear-to-r from-transparent via-white to-transparent"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>
    </section>
  );
}