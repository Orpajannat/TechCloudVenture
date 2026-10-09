'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MessageCircle, Store, Headphones, ArrowUpRight } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

/* ---------- data ---------- */
const MESSAGES = [
  { side: 'in', text: "Hi! I'd like wholesale pricing for my store." },
  { side: 'out', text: 'Happy to help. What are you looking to stock?' },
  { side: 'in', text: "I'm also thinking about selling on marketplaces." },
  { side: 'out', text: "Great. Let's map out your next step." },
];

const TICKER = ['Wholesale', 'Marketplaces', 'Partnerships', 'Growth', 'Supply', 'Distribution'];

/* ---------- variants ---------- */
const container = (delay = 0, gap = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});

const pop = {
  hidden: { opacity: 0, scale: 0.6, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 17 } },
};

const maskUp = {
  hidden: { y: '115%', rotate: 4 },
  show: { y: '0%', rotate: 0, transition: { type: 'spring', stiffness: 140, damping: 18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ---------- live chat ---------- */
function Avatar({ side }) {
  const Icon = side === 'in' ? Store : Headphones;
  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-white/20 ${
        side === 'in' ? 'bg-white/15 text-white' : 'bg-[#7be5f7] text-[#061329]'
      }`}
    >
      <Icon size={16} />
    </span>
  );
}

function Typing({ side }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.12 } }}
      transition={{ type: 'spring', stiffness: 500, damping: 22 }}
      style={{ originX: side === 'in' ? 0 : 1 }}
      className={`flex items-end gap-2 ${side === 'out' ? 'flex-row-reverse self-end' : 'self-start'}`}
    >
      <Avatar side={side} />
      <span className="flex gap-1.5 rounded-2xl bg-white/15 px-4 py-3.5 backdrop-blur-md">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-2 rounded-full bg-white/80"
            animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </span>
    </motion.div>
  );
}

function Bubble({ side, text }) {
  const incoming = side === 'in';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.3, y: 30, x: incoming ? -40 : 40 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
      style={{ originX: incoming ? 0 : 1 }}
      className={`flex max-w-[88%] items-end gap-2 ${incoming ? 'self-start' : 'flex-row-reverse self-end'}`}
    >
      <Avatar side={side} />
      <p
        className={`px-4 py-3 text-sm leading-6 shadow-xl shadow-black/20 sm:text-base ${
          incoming
            ? 'rounded-2xl rounded-bl-sm bg-white/15 text-white backdrop-blur-md'
            : 'rounded-2xl rounded-br-sm bg-linear-to-br from-[#7be5f7] to-[#4d9dff] font-medium text-[#04122a]'
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

function LiveChat({ reduce }) {
  const total = MESSAGES.length;
  const [step, setStep] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) {
      setStep(total);
      return;
    }
    const id = setInterval(() => setStep((s) => (s >= total + 2 ? 0 : s + 1)), 1800);
    return () => clearInterval(id);
  }, [reduce, total]);

  const next = MESSAGES[step];

  return (
    <div aria-hidden="true" className="relative flex min-h-[22rem] w-full min-w-0 flex-col justify-end gap-3 sm:min-h-[20rem] lg:min-h-[25rem]">
      <AnimatePresence mode="popLayout">
        {MESSAGES.slice(0, step).map((m, i) => (
          <Bubble key={`${i}-${m.text}`} {...m} />
        ))}
        {step < total && <Typing key="typing" side={next.side} />}
      </AnimatePresence>
    </div>
  );
}

/* ---------- spinning badge ---------- */
function SpinBadge({ reduce }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 1.1 }}
      className="relative ml-auto mb-4 flex size-24 items-center justify-center sm:size-28 lg:absolute lg:-top-10 lg:-right-4 lg:mb-0 lg:ml-0"
    >
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute inset-0 size-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="#7be5f7" fontSize="11" fontWeight="600" letterSpacing="2.6">
          <textPath href="#badge-circle">LET&apos;S TALK • LET&apos;S TALK • LET&apos;S TALK • </textPath>
        </text>
      </motion.svg>
      <motion.span
        animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex size-12 items-center justify-center rounded-full bg-[#7be5f7] text-[#04122a] shadow-lg shadow-[#7be5f7]/30"
      >
        <ArrowUpRight size={22} />
      </motion.span>
    </motion.div>
  );
}

/* ---------- main ---------- */
export default function Hero() {
  const reduce = useReducedMotion();

  /* cursor spotlight */
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(123,229,247,0.16), transparent 65%)`;

  function onPointerMove(e) {
    if (reduce || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <section
      aria-labelledby="contact-hero-heading"
      onPointerMove={onPointerMove}
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#07162f] pt-32 pb-28 font-sans text-white sm:min-h-[680px] sm:pt-40 sm:pb-32 lg:min-h-[720px] lg:pt-44 lg:pb-32 2xl:min-h-[780px]"
    >
      {/* Background image, slow zoom */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        initial={reduce ? false : { scale: 1.2, opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { scale: [1.2, 1.05, 1.15], opacity: 1 }}
        transition={
          reduce
            ? undefined
            : { opacity: { duration: 0.8 }, scale: { duration: 26, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }
        }
      >
        <Image
          src="/images/contact-hero-commerce.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-center"
        />
      </motion.div>

      {/* Overlays for readability */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#061329]/45 lg:bg-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 hidden bg-linear-to-r from-[#061329]/95 via-[#061329]/60 to-[#061329]/20 lg:block" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-[#061329]/95 to-transparent sm:h-56" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-t from-[#061329]/85 to-transparent" />

      {/* Cursor spotlight */}
      {!reduce && <motion.div aria-hidden="true" style={{ backgroundImage: spotlight }} className="pointer-events-none absolute inset-0 -z-10" />}

      {/* Drifting glow */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -left-32 -z-10 size-96 rounded-full bg-[#2f6bff]/25 blur-3xl"
          animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8 lg:px-8">
        {/* Left: type */}
        <motion.div variants={container(0.1, 0.14)} initial={reduce ? false : 'hidden'} animate="show" className="min-w-0 text-left">
          {/* Breadcrumb */}
          {/* <motion.nav variants={pop} aria-label="Breadcrumb" className="mb-8 inline-block">
            <ol className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 text-xs leading-6 backdrop-blur-md sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-slate-200 transition-colors hover:text-[#7be5f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7be5f7] motion-reduce:transition-none"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <motion.span className="block" animate={reduce ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                  <ChevronRight size={14} className="text-[#7be5f7]" />
                </motion.span>
              </li>
              <li aria-current="page" className="flex items-center gap-2 pr-3 pl-1 font-medium text-white">
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
                Contact
              </li>
            </ol>
          </motion.nav> */}

          {/* Eyebrow */}
          <motion.p variants={pop} className="mb-5 flex items-center gap-2.5 text-sm font-semibold text-[#7be5f7] sm:text-base">
            <motion.span
              aria-hidden="true"
              animate={reduce ? undefined : { rotate: [0, -14, 14, -8, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.5 }}
              className="flex"
            >
              <MessageCircle size={20} />
            </motion.span>
            Let&apos;s start a conversation
          </motion.p>

          {/* Giant headline with masked line reveal */}
          <h1
            id="contact-hero-heading"
            className="text-[clamp(3rem,12vw,4.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] sm:text-8xl lg:text-9xl"
          >
            <span className="sr-only">Contact us.</span>
            <span aria-hidden="true" className="block">
              <span className="block overflow-hidden py-1.5 pr-4">
                <motion.span variants={maskUp} className="block">Contact</motion.span>
              </span>
              <span className="relative block overflow-hidden py-1.5 pr-4">
                <motion.span variants={maskUp} className="block">
                  <motion.span
                    className="inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg,#7be5f7,#ffffff,#7be5f7,#4d9dff,#7be5f7)',
                      backgroundSize: '300% 100%',
                    }}
                    animate={reduce ? undefined : { backgroundPositionX: ['0%', '300%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    us.
                  </motion.span>
                </motion.span>
              </span>
              {/* hand-drawn underline */}
              <motion.svg viewBox="0 0 300 20" className="mt-1 h-4 w-48 sm:h-5 sm:w-64" fill="none">
                <motion.path
                  d="M4 14 C 60 2, 120 2, 180 10 S 270 16, 296 6"
                  stroke="#7be5f7"
                  strokeWidth="5"
                  strokeLinecap="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeInOut', delay: 0.5 } } }}
                />
              </motion.svg>
            </span>
          </h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-md text-base leading-8 text-slate-200 sm:text-lg">
            Have a question or a business opportunity? Let&apos;s talk about your next step in wholesale and marketplace growth.
          </motion.p>
        </motion.div>

        {/* Right: live conversation */}
        <div className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:ml-auto">
          <SpinBadge reduce={reduce} />
          <LiveChat reduce={reduce} />
        </div>
      </div>

      {/* Bottom ticker */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/15 bg-[#061329]/60 py-3.5 backdrop-blur-md">
        <motion.div
          className="flex w-max"
          animate={reduce ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((g) => (
            <div key={g} className="flex shrink-0 items-center">
              {[...TICKER, ...TICKER].map((word, i) => (
                <span key={`${g}-${i}`} className="flex items-center text-lg font-medium text-white/80 sm:text-xl">
                  <span className="px-6">{word}</span>
                  <span className="size-2 rotate-45 bg-[#7be5f7]" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}