'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { Store, Award, ShieldCheck, ArrowRight, Activity, Zap, CheckCircle2, X } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'] });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

/* ---------- data (unchanged) ---------- */
const MODELS = {
  wholesale: {
    id: 'wholesale',
    tab: 'Wholesale Sellers',
    model: 'MODEL 01',
    icon: Store,
    title: 'Amazon Wholesale Infrastructure',
    subtitle: 'Authorized Channel & Gating Protection',
    desc: 'Rigorous invoice verification and authorized vendor pathways built to eliminate suspension risks and scale stable inventory.',
    stats: ['100% Invoice Audited', 'Zero-Gating Risk', '+48.2% Average ROI'],
  },
  brands: {
    id: 'brands',
    tab: 'Private Label & Brands',
    model: 'MODEL 02',
    icon: Award,
    title: 'Private Label & Brand Control',
    subtitle: 'Defensive IP & Marketplace Sovereignty',
    desc: 'Full Brand Registry tier-3 enforcement, unauthorized reseller tracking, and margin-protected advertising ecosystems.',
    stats: ['Registry Level-3', 'Defensive IP Shield', '4.8x ROAS Multiplier'],
  },
};
const ORDER = ['wholesale', 'brands'];
const SEED = [58, 62, 60, 66, 64, 70, 68, 72, 69, 75, 73, 78, 76, 74, 79, 82, 80, 84, 83, 86];

/* ---------- variants ---------- */
const group = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});
const pop = {
  hidden: { opacity: 0, scale: 0.4, y: 30, rotate: -4 },
  show: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 420, damping: 15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: 'easeOut' } },
};
const word = {
  hidden: { opacity: 0, y: 60, rotateX: -70, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 130, damping: 14 } },
};
const panelItem = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } },
  exit: { opacity: 0, x: 18, transition: { duration: 0.12 } },
};

/* ---------- helpers ---------- */
function Words({ text, shimmer, reduce }) {
  return text.split(' ').map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <motion.span variants={word} className="inline-block" style={{ transformOrigin: '50% 100%' }}>
        {shimmer ? (
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg,#ff5c7a,#ffb86b,#5cf2c1,#ff5c7a)', backgroundSize: '300% 100%' }}
            animate={reduce ? undefined : { backgroundPositionX: ['0%', '300%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            {w}
          </motion.span>
        ) : (
          w
        )}
      </motion.span>{' '}
    </Fragment>
  ));
}

function CountUp({ value }) {
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 70, damping: 18 });
  const text = useTransform(spring, (v) => Math.round(v));
  useEffect(() => {
    mv.set(value);
  }, [value, mv]);
  return <motion.span>{text}</motion.span>;
}

/* ---------- gauge ---------- */
function Gauge({ value, reduce }) {
  const R = 42;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative mx-auto size-40 shrink-0 sm:size-48">
      {!reduce && (
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute -inset-3 size-[calc(100%+1.5rem)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="50" cy="50" r="49" fill="none" stroke="#ff5c7a" strokeOpacity="0.6" strokeWidth="0.7" strokeDasharray="1.5 3.5" />
        </motion.svg>
      )}
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="gauge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5c7a" />
            <stop offset="100%" stopColor="#5cf2c1" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="url(#gauge-grad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: C * (1 - value / 100) }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${display.className} text-5xl font-extrabold tracking-tight text-white sm:text-6xl`}>
          <CountUp value={value} />
          <span className="text-2xl text-[#5cf2c1]">%</span>
        </span>
        <span className="text-xs font-medium text-[#c9c3ff]">Efficiency</span>
      </div>
    </div>
  );
}

/* ---------- sparkline ---------- */
function Sparkline({ points }) {
  const W = 240;
  const H = 84;
  const step = W / (points.length - 1);
  const ys = points.map((v) => H - 8 - ((v - 40) / 60) * (H - 16));
  const line = ys.map((y, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${line} L${W} ${H} L0 ${H} Z`;
  const lastY = ys[ys.length - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-28 w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cf2c1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5cf2c1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
      ))}
      <motion.path d={area} fill="url(#spark-fill)" animate={{ d: area }} transition={{ duration: 0.9, ease: 'easeOut' }} />
      <motion.path
        d={line}
        fill="none"
        stroke="#5cf2c1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        animate={{ d: line }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <motion.circle cx={W} r="4.5" fill="#ff5c7a" stroke="#fff" strokeWidth="2" vectorEffect="non-scaling-stroke" animate={{ cy: lastY }} transition={{ duration: 0.9, ease: 'easeOut' }} />
    </svg>
  );
}

/* ---------- pop-up dialog ---------- */
function StartDialog({ model, onClose, reduce }) {
  const Icon = model.icon;
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0620]/70 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div
        className="flex min-h-full items-center justify-center p-4"
        style={{ perspective: 1200 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="start-dialog-title"
          initial={reduce ? false : { opacity: 0, scale: 0.3, y: 120, rotateX: 40, rotateZ: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateZ: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40, transition: { duration: 0.18 } }}
          transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          className={`${body.className} relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/15 bg-[#1a1040] text-white shadow-2xl shadow-black/60`}
        >
          <div className="relative overflow-hidden bg-linear-to-br from-[#ff5c7a] to-[#ff9a5c] p-6 text-white sm:p-7">
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute -top-14 -right-14 size-52 rounded-full bg-white/30 blur-2xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <motion.span
                  initial={reduce ? false : { scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.15 }}
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#1a1040] text-[#ff5c7a] shadow-lg"
                >
                  <Icon size={26} aria-hidden="true" />
                </motion.span>
                <div>
                  <span className="text-xs font-semibold text-white/90">{model.model} · Ready to start</span>
                  <h3 id="start-dialog-title" className={`${display.className} text-lg leading-snug font-bold sm:text-xl`}>
                    {model.title}
                  </h3>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-black/20 text-white transition-transform hover:rotate-90 hover:bg-black/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          <motion.div variants={group(0.15, 0.09)} initial={reduce ? false : 'hidden'} animate="show" className="p-6 sm:p-7">
            <motion.p variants={fadeUp} className="text-sm leading-7 text-[#d9d5ff] sm:text-base">
              {model.desc}
            </motion.p>
            <ul className="mt-5 space-y-2.5">
              {model.stats.map((s) => (
                <motion.li key={s} variants={pop} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold">
                  <CheckCircle2 size={18} className="shrink-0 text-[#5cf2c1]" aria-hidden="true" />
                  {s}
                </motion.li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap justify-end gap-2.5">
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                className="min-h-11 rounded-full border border-white/25 px-5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5cf2c1]"
              >
                Maybe later
              </motion.button>
              <motion.div whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.94 }}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#5cf2c1] px-6 text-sm font-bold text-[#120b2e] shadow-lg shadow-[#5cf2c1]/25 hover:bg-[#7bf6d0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Talk to our team <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- section ---------- */
export default function SpecializedAmazonSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState('wholesale');
  const [interacted, setInteracted] = useState(false);
  const [hover, setHover] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [points, setPoints] = useState(SEED);
  const triggerRef = useRef(null);
  const tabRefs = useRef({});

  /* pointer tilt for the dashboard (desktop only, skipped for reduced motion) */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  function onTilt(e) {
    if (reduce || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function resetTilt() {
    mx.set(0);
    my.set(0);
  }

  const current = MODELS[active];
  const progress = Math.round(points[points.length - 1]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setPoints((p) => {
        const last = p[p.length - 1];
        const next = Math.min(98, Math.max(60, last + (Math.random() - 0.45) * 9));
        return [...p.slice(1), next];
      });
    }, 1400);
    return () => clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    if (reduce || interacted || hover || dialog) return;
    const id = setInterval(() => setActive((a) => (a === 'wholesale' ? 'brands' : 'wholesale')), 8000);
    return () => clearInterval(id);
  }, [reduce, interacted, hover, dialog]);

  function choose(id, focus = false) {
    setInteracted(true);
    setActive(id);
    if (focus) tabRefs.current[id]?.focus();
  }

  function onTabKey(e) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      choose(active === 'wholesale' ? 'brands' : 'wholesale', true);
    }
  }

  useEffect(() => {
    if (!dialog) return;
    const onKey = (e) => e.key === 'Escape' && setDialog(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, [dialog]);

  return (
    <section
      aria-labelledby="specialized-heading"
      className={`${body.className} relative isolate overflow-hidden bg-[#120b2e] px-4 py-20 text-[#edebff] sm:px-8 sm:py-24 lg:px-16 lg:py-28`}
    >
      {/* grid floor */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)',
        }}
      />
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-96 rounded-full bg-[#ff5c7a]/35 blur-3xl"
            animate={{ x: [0, 140, 0], y: [0, 60, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-[#5cf2c1]/25 blur-3xl"
            animate={{ x: [0, -120, 0], y: [0, -80, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="mx-auto w-full max-w-6xl">
        {/* ============ HERO (centered) ============ */}
        <motion.div
          variants={group(0.05, 0.14)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={pop} className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur">
            <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#5cf2c1]"
                  animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <span className="relative size-2.5 rounded-full bg-[#5cf2c1]" />
            </span>
            <span className="truncate text-xs font-semibold tracking-wide text-[#d9d5ff]">Tech Cloud Global Venture // USA</span>
          </motion.div>

          <h1
            id="specialized-heading"
            className={`${display.className} mt-7 max-w-4xl text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl xl:text-8xl`}
            style={{ perspective: 800 }}
          >
            <span className="sr-only">Scale on Amazon with Compliance &amp; Trust</span>
            <span aria-hidden="true">
              <Words text="Scale on Amazon with" reduce={reduce} />
              <span className="relative inline-block">
                <Words text="Compliance & Trust" shimmer reduce={reduce} />
                <svg viewBox="0 0 200 10" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-2.5 w-full" fill="none">
                  <motion.path
                    d="M2 5 Q 14 0 26 5 T 50 5 T 74 5 T 98 5 T 122 5 T 146 5 T 170 5 T 198 5"
                    stroke="#5cf2c1"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      show: { pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: 'easeInOut', delay: 0.9 } },
                    }}
                  />
                </svg>
              </span>
            </span>
          </h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-[#c9c3ff] sm:text-lg">
            We provide specialized, high-velocity USA Amazon services built around data-driven execution and uncompromised compliance.
          </motion.p>

          {/* model switcher */}
          <motion.div
            variants={group(0.1, 0.12)}
            role="tablist"
            aria-label="Choose your model"
            onKeyDown={onTabKey}
            onPointerEnter={(e) => e.pointerType !== 'touch' && setHover(true)}
            onPointerLeave={() => setHover(false)}
            className="mt-10 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2 sm:gap-4"
          >
            {ORDER.map((id) => {
              const m = MODELS[id];
              const Icon = m.icon;
              const on = id === active;
              return (
                <motion.button
                  key={id}
                  ref={(el) => (tabRefs.current[id] = el)}
                  variants={pop}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={on}
                  aria-controls="telemetry-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => choose(id)}
                  whileHover={reduce ? undefined : { y: -6, rotate: id === 'wholesale' ? -1 : 1 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  className="relative isolate flex min-h-28 flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/6 p-5 backdrop-blur focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5cf2c1]"
                >
                  {on && (
                    <motion.span
                      layoutId="model-bg"
                      aria-hidden="true"
                      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 28 }}
                      className="absolute inset-0 -z-10 bg-linear-to-br from-[#ff5c7a] to-[#ff9a5c] shadow-xl shadow-[#ff5c7a]/30"
                    />
                  )}
                  <span className="flex items-center justify-between">
                    <motion.span
                      animate={on && !reduce ? { y: [0, -6, 0], rotate: [0, -8, 0] } : { y: 0, rotate: 0 }}
                      transition={{ duration: 1.6, repeat: on ? Infinity : 0, ease: 'easeInOut' }}
                      className={on ? 'text-white' : 'text-[#5cf2c1]'}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </motion.span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold transition-colors duration-300 ${on ? 'bg-black/25 text-white' : 'bg-white/10 text-[#d9d5ff]'}`}>
                      {m.model}
                    </span>
                  </span>
                  <span className={`${display.className} mt-4 block text-lg font-bold text-white`}>{m.tab}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ============ DASHBOARD (full width, tilts with pointer) ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 120, scale: 0.8, rotateX: 25 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
          className="relative mt-14 sm:mt-20"
          style={{ perspective: 1400 }}
        >
          <motion.div
            onPointerMove={onTilt}
            onPointerLeave={resetTilt}
            style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            className="relative"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.5rem] bg-linear-to-r from-[#ff5c7a] via-[#ff9a5c] to-[#5cf2c1] blur-2xl"
              animate={reduce ? { opacity: 0.2 } : { opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#1a1040]/95 shadow-2xl shadow-black/50 backdrop-blur">
              {/* chrome */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3 sm:px-6">
                <div className="flex min-w-0 items-center gap-4">
                  <span aria-hidden="true" className="hidden gap-1.5 sm:flex">
                    <span className="size-2.5 rounded-full bg-[#ff5c7a]" />
                    <span className="size-2.5 rounded-full bg-[#ffb86b]" />
                    <span className="size-2.5 rounded-full bg-[#5cf2c1]" />
                  </span>
                  <span className="flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-bold text-[#d9d5ff] sm:text-xs">
                    <motion.span aria-hidden="true" className="flex shrink-0" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}>
                      <Activity size={14} />
                    </motion.span>
                    <span className="truncate">LIVE COMPLIANCE STREAM</span>
                  </span>
                </div>
                <motion.span aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="shrink-0 text-[#5cf2c1]">
                  <ShieldCheck size={24} />
                </motion.span>
              </div>

              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 z-10 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['0%', '650%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut', delay: 1.5 }}
                />
              )}

              <div id="telemetry-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="grid gap-6 p-5 sm:p-8 lg:grid-cols-12 lg:gap-8">
                {/* title block */}
                <div className="min-w-0 lg:col-span-5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      variants={group(0, 0.08)}
                      initial={reduce ? false : 'hidden'}
                      animate="show"
                      exit={reduce ? undefined : 'exit'}
                      className="space-y-3"
                    >
                      <motion.span variants={panelItem} className="block text-sm font-bold text-[#5cf2c1]">
                        {current.subtitle}
                      </motion.span>
                      <motion.h2 variants={panelItem} className={`${display.className} text-3xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-4xl`}>
                        {current.title}
                      </motion.h2>
                      <motion.p variants={panelItem} className="pt-1 text-sm leading-7 text-[#c9c3ff] sm:text-base sm:leading-8">
                        {current.desc}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* live telemetry */}
                <div className="grid min-w-0 items-center gap-5 rounded-3xl border border-white/10 bg-black/20 p-4 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-6 lg:col-span-7">
                  <Gauge value={progress} reduce={reduce} />
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center justify-between gap-2 text-xs font-bold text-[#d9d5ff]">
                      <span>Execution Efficiency Index</span>
                      <span className="flex items-center gap-1.5 text-[#5cf2c1]">
                        <span aria-hidden="true" className="relative flex size-2">
                          {!reduce && (
                            <motion.span
                              className="absolute inset-0 rounded-full bg-[#5cf2c1]"
                              animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                            />
                          )}
                          <span className="relative size-2 rounded-full bg-[#5cf2c1]" />
                        </span>
                        live
                      </span>
                    </div>
                    <Sparkline points={points} />
                  </div>
                </div>

                {/* metric tiles */}
                <motion.ul
                  key={active}
                  variants={group(0.1, 0.1)}
                  initial={reduce ? false : 'hidden'}
                  animate="show"
                  className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 lg:col-span-12"
                >
                  {current.stats.map((st, i) => (
                    <motion.li
                      key={st}
                      variants={pop}
                      whileHover={reduce ? undefined : { scale: 1.05, y: -4, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-4 text-center sm:p-5"
                    >
                      <div className="text-[11px] font-bold text-[#ff9a8a]">METRIC 0{i + 1}</div>
                      <div className={`${display.className} mt-1 text-lg font-bold text-white sm:text-xl`}>{st}</div>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 lg:col-span-12">
                  <span className="flex items-center gap-2 text-xs font-bold text-[#d9d5ff]">
                    <motion.span aria-hidden="true" className="flex" animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.8 }}>
                      <Zap size={16} className="text-[#ffb86b]" />
                    </motion.span>
                    Status: Verified Secure
                  </span>
                  <motion.button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => {
                      triggerRef.current = e.currentTarget;
                      setDialog(true);
                    }}
                    whileHover={reduce ? undefined : { scale: 1.07 }}
                    whileTap={reduce ? undefined : { scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                    className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ff5c7a] px-8 text-sm font-bold text-white shadow-lg shadow-[#ff5c7a]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5cf2c1] min-[480px]:w-auto"
                  >
                    {!reduce && (
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ['0%', '700%'] }}
                        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                      />
                    )}
                    <span className="relative">Initialize</span>
                    <ArrowRight size={16} aria-hidden="true" className="relative transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>{dialog && <StartDialog key="dlg" model={current} reduce={reduce} onClose={() => setDialog(false)} />}</AnimatePresence>
    </section>
  );
}