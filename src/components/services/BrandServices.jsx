'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Globe,
  Award,
  Lock,
  Package,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/* ---------- data ---------- */
const PILLARS = [
  {
    title: 'Brand Registry enforcement',
    desc: 'Active defense against unauthorized sellers, counterfeiters, and map violations.',
    icon: ShieldCheck,
    grad: 'from-blue-600 to-indigo-700',
    iconText: 'text-blue-600',
    bar: 'bg-blue-600',
    fill: 'from-blue-50 to-blue-100/40',
    border: 'border-blue-300',
    pos: { left: '50%', top: '0%' },
  },
  {
    title: 'Defensive IP positioning',
    desc: 'Safeguarding your trademarks, patents, and copyrighted creative assets across the USA store.',
    icon: Award,
    grad: 'from-indigo-600 to-violet-700',
    iconText: 'text-indigo-600',
    bar: 'bg-indigo-600',
    fill: 'from-indigo-50 to-indigo-100/40',
    border: 'border-indigo-300',
    pos: { left: '100%', top: '50%' },
  },
  {
    title: 'Supply chain auditing',
    desc: 'Ensuring absolute chain-of-custody transparency to prevent unauthorized distribution.',
    icon: Globe,
    grad: 'from-amber-500 to-orange-600',
    iconText: 'text-amber-600',
    bar: 'bg-amber-500',
    fill: 'from-amber-50 to-amber-100/40',
    border: 'border-amber-300',
    pos: { left: '50%', top: '100%' },
  },
  {
    title: 'Margin-focused advertising',
    desc: 'Optimized PPC structures designed to protect profitability while capturing market share.',
    icon: TrendingUp,
    grad: 'from-emerald-600 to-teal-700',
    iconText: 'text-emerald-600',
    bar: 'bg-emerald-600',
    fill: 'from-emerald-50 to-emerald-100/40',
    border: 'border-emerald-300',
    pos: { left: '0%', top: '50%' },
  },
];

const BLIPS = [
  { left: '28%', top: '34%', delay: 0 },
  { left: '71%', top: '27%', delay: 0.8 },
  { left: '65%', top: '73%', delay: 1.6 },
  { left: '23%', top: '67%', delay: 2.4 },
];

/* ---------- variants ---------- */
const group = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});
const pop = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 16 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};
const maskUp = {
  hidden: { y: '115%', rotate: 5 },
  show: { y: '0%', rotate: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } },
};
const hubPop = {
  hidden: { scale: 0, rotate: -140, opacity: 0 },
  show: { scale: 1, rotate: 0, opacity: 1, transition: { type: 'spring', stiffness: 110, damping: 14 } },
};
const nodePop = {
  hidden: { scale: 0, opacity: 0, rotate: -90 },
  show: { scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', stiffness: 360, damping: 14 } },
};
const rowIn = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } },
};

/* ---------- heading words ---------- */
function Words({ text, shimmer, reduce }) {
  return text.split(' ').map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="inline-block overflow-hidden pb-1.5 align-bottom">
        <motion.span variants={maskUp} className="inline-block">
          {shimmer ? (
            <motion.span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg,#2563eb,#4f46e5,#06b6d4,#2563eb)',
                backgroundSize: '300% 100%',
              }}
              animate={reduce ? undefined : { backgroundPositionX: ['0%', '300%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              {w}
            </motion.span>
          ) : (
            w
          )}
        </motion.span>
      </span>{' '}
    </Fragment>
  ));
}

/* ---------- hub node ---------- */
function Node({ p, i, highlighted, reduce, onOpen }) {
  const Icon = p.icon;
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={p.pos}>
      <motion.div variants={nodePop}>
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          <motion.button
            type="button"
            aria-haspopup="dialog"
            aria-label={`${p.title}: view details`}
            onClick={(e) => onOpen(i, e.currentTarget)}
            whileHover={reduce ? undefined : { scale: 1.12 }}
            whileTap={reduce ? undefined : { scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative flex size-12 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-900/30 ring-4 ring-white/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:size-16"
          >
            {highlighted && !reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-blue-400/60"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 1.9, opacity: 0 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
            <motion.span
              animate={{ scale: highlighted ? 1.15 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 14 }}
              className={`relative ${p.iconText}`}
            >
              <Icon className="size-5 sm:size-7" aria-hidden="true" />
            </motion.span>
            <span
              aria-hidden="true"
              className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white"
            >
              {i + 1}
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- pop-up dialog ---------- */
function Dialog({ index, setIndex, onClose, reduce }) {
  const p = PILLARS[index];
  const Icon = p.icon;
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/55 backdrop-blur-md"
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
          aria-labelledby="pillar-dialog-title"
          initial={reduce ? false : { opacity: 0, scale: 0.5, y: 90, rotateX: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30, transition: { duration: 0.18 } }}
          transition={{ type: 'spring', stiffness: 230, damping: 18 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40"
        >
          {/* header with cross-fading gradients */}
          <div className="relative overflow-hidden p-6 text-white sm:p-7">
            {PILLARS.map((x, i) => (
              <motion.span
                key={x.title}
                aria-hidden="true"
                className={`absolute inset-0 bg-linear-to-br ${x.grad}`}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.5 }}
              />
            ))}
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute -top-14 -right-14 size-48 rounded-full bg-white/20 blur-2xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <div className="relative flex items-start justify-between gap-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24, transition: { duration: 0.12 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex items-center gap-3.5"
                >
                  <motion.span
                    initial={reduce ? false : { scale: 0, rotate: -140 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg ${p.iconText}`}
                  >
                    <Icon size={26} aria-hidden="true" />
                  </motion.span>
                  <div>
                    <span className="text-xs font-semibold text-white/80">Brand Protection Protocol</span>
                    <h3 id="pillar-dialog-title" className="text-lg leading-snug font-semibold sm:text-xl">
                      {p.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform hover:rotate-90 hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={index}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.12 } }}
                className="min-h-28 text-sm leading-7 text-slate-600 sm:text-base"
              >
                {p.desc} Proper enforcement protocols eliminate unauthorized sellers, protect your brand equity, and ensure sustainable revenue growth within the USA marketplace.
              </motion.p>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              {/* topic dots */}
              <div className="flex items-center" role="group" aria-label="Topics">
                {PILLARS.map((x, i) => (
                  <button
                    key={x.title}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show topic ${i + 1}: ${x.title}`}
                    aria-current={i === index}
                    className="flex h-11 w-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-blue-600"
                  >
                    <motion.span
                      animate={{ width: i === index ? 22 : 8 }}
                      className={`block h-2 rounded-full ${i === index ? x.bar : 'bg-slate-300'}`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2.5">
                <motion.button
                  type="button"
                  onClick={() => setIndex((index + 1) % PILLARS.length)}
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Next <ArrowRight size={16} aria-hidden="true" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                  className="min-h-11 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Got it
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- section ---------- */
export default function BrandServices() {
  const reduce = useReducedMotion();
  const [dialog, setDialog] = useState(null); // index | null
  const [hovered, setHovered] = useState(null);
  const [auto, setAuto] = useState(0);
  const triggerRef = useRef(null);

  const isOpen = dialog !== null;
  const highlight = reduce ? hovered : hovered ?? auto;

  /* cycling highlight links hub nodes and rows */
  useEffect(() => {
    if (reduce || isOpen || hovered !== null) return;
    const id = setInterval(() => setAuto((a) => (a + 1) % PILLARS.length), 2400);
    return () => clearInterval(id);
  }, [reduce, isOpen, hovered]);

  function open(i, el) {
    triggerRef.current = el;
    setDialog(i);
  }

  /* Esc, scroll lock, focus restore */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setDialog(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, [isOpen]);

  return (
    <section
      aria-labelledby="brand-services-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-white via-white to-blue-50/60 px-4 py-20 font-sans text-slate-900 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.09) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-24 -z-10 size-[26rem] rounded-full bg-blue-200/50 blur-3xl"
            animate={{ x: [0, 110, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-[28rem] rounded-full bg-indigo-200/50 blur-3xl"
            animate={{ x: [0, -110, 0], y: [0, -70, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ============ LEFT: live radar hub ============ */}
        <div className="flex min-w-0 justify-center p-8 sm:p-10 lg:col-span-6">
          <motion.div
            variants={group(0.1, 0.14)}
            initial={reduce ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative aspect-square w-full max-w-[26rem] sm:max-w-[30rem]"
          >
            {/* outward pulse rings */}
            {!reduce &&
              [0, 1.4].map((d) => (
                <motion.span
                  key={d}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-blue-400/50"
                  animate={{ scale: [1, 1.22], opacity: [0.7, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: d }}
                />
              ))}

            {/* rotating gradient rim + dark radar disc */}
            <motion.div variants={hubPop} className="absolute inset-0 overflow-hidden rounded-full p-1 shadow-2xl shadow-blue-900/30">
              <motion.span
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundImage: 'conic-gradient(from 0deg, #2563eb, #4f46e5, #7be5f7, #2563eb)' }}
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div
                className="relative flex size-full items-center justify-center overflow-hidden rounded-full"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, #0d2a55 0%, #06142b 72%)' }}
              >
                {/* radar rings + crosshair */}
                <div aria-hidden="true" className="absolute inset-[14%] rounded-full border border-white/10" />
                <div aria-hidden="true" className="absolute inset-[30%] rounded-full border border-white/10" />
                <div aria-hidden="true" className="absolute top-0 left-1/2 h-full w-px bg-white/10" />
                <div aria-hidden="true" className="absolute top-1/2 left-0 h-px w-full bg-white/10" />

                {/* sweep */}
                {!reduce && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundImage: 'conic-gradient(from 0deg, transparent 0deg, transparent 285deg, rgba(123,229,247,0.4) 360deg)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* blips */}
                {BLIPS.map((b) => (
                  <span key={b.left} aria-hidden="true" className="absolute" style={{ left: b.left, top: b.top }}>
                    <span className="relative flex size-2.5 -translate-x-1/2 -translate-y-1/2">
                      {!reduce && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-rose-400"
                          animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: b.delay }}
                        />
                      )}
                      <span className="relative size-2.5 rounded-full bg-rose-400" />
                    </span>
                  </span>
                ))}

                {/* centre copy */}
                <motion.div variants={group(0.5, 0.12)} className="relative z-10 flex max-w-[78%] flex-col items-center text-center">
                  <motion.div variants={pop}>
                    <motion.div
                      animate={reduce ? undefined : { y: [0, -6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/20 px-3 py-1.5 text-[11px] font-semibold text-blue-200 backdrop-blur-md sm:text-xs"
                    >
                      <ShieldCheck size={14} className="shrink-0 text-emerald-400" aria-hidden="true" />
                      USA Brand Protection Hub
                    </motion.div>
                  </motion.div>
                  <motion.h3 variants={pop} className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                    Control &amp; Growth
                  </motion.h3>
                  <motion.p variants={fadeUp} className="mt-3 hidden max-w-xs text-sm leading-6 text-slate-300 sm:block">
                    Protecting your identity, eliminating price erosion, and scaling responsibly on Amazon USA.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* pillar nodes on the rim */}
            {PILLARS.map((p, i) => (
              <Node key={p.title} p={p} i={i} reduce={reduce} highlighted={highlight === i} onOpen={open} />
            ))}

            {/* floating info badges (sm and up) */}
            <motion.div variants={nodePop} className="absolute top-[11%] -left-5 hidden sm:block">
              <motion.div
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-xl shadow-blue-900/15"
              >
                <Lock size={20} className="text-blue-600" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-[10px] font-medium text-slate-500">Security</div>
                  <div className="text-xs font-bold text-slate-900">IP Protected</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={nodePop} className="absolute -right-5 bottom-[11%] hidden sm:block">
              <motion.div
                animate={reduce ? undefined : { y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-xl shadow-blue-900/15"
              >
                <Package size={20} className="text-amber-500" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-[10px] font-medium text-slate-500">FBA Control</div>
                  <div className="text-xs font-bold text-slate-900">Optimized</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ============ RIGHT: copy + pillars ============ */}
        <motion.div
          variants={group(0.05, 0.12)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="min-w-0 lg:col-span-6"
        >
          <motion.div variants={pop} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
            <motion.span
              aria-hidden="true"
              className="flex"
              animate={reduce ? undefined : { rotate: [0, -14, 14, -8, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.5 }}
            >
              <Award size={16} className="text-blue-600" />
            </motion.span>
            Amazon Services for Brands
          </motion.div>

          <h1 id="brand-services-heading" className="mt-5 text-3xl leading-[1.12] font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            <span className="sr-only">Amazon Services for Brands – Protection, Control &amp; Growth</span>
            <span aria-hidden="true">
              <Words text="Amazon Services for Brands –" reduce={reduce} />
              <Words text="Protection, Control & Growth" shimmer reduce={reduce} />
            </span>
          </h1>

          <motion.p variants={fadeUp} className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Our Amazon Services for Brands are designed for brands that want{' '}
            <strong className="font-semibold text-slate-900">control, visibility, and stability</strong> in the Amazon USA marketplace. Amazon can quickly become chaotic without structured brand control—unauthorized sellers, price erosion, listing hijacks, and policy risks can damage both revenue and reputation. We help brands{' '}
            <strong className="font-semibold text-slate-900">protect their identity, manage their Amazon presence, and scale responsibly</strong>, using Amazon-approved tools and long-term strategies.
          </motion.p>

          {/* pillar rows */}
          <motion.ul variants={group(0.1, 0.1)} className="mt-7 space-y-2.5">
            {PILLARS.map((p, i) => {
              const on = highlight === i;
              return (
                <motion.li key={p.title} variants={rowIn}>
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => open(i, e.currentTarget)}
                    onPointerEnter={(e) => e.pointerType !== 'touch' && setHovered(i)}
                    onPointerLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`relative flex min-h-14 w-full items-center gap-3 overflow-hidden rounded-2xl border bg-white px-4 py-3 text-left shadow-sm transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transition-none ${
                      on ? `${p.border} shadow-lg shadow-blue-900/10` : 'border-slate-200'
                    }`}
                  >
                    <motion.span
                      aria-hidden="true"
                      className={`absolute inset-0 origin-left bg-linear-to-r ${p.fill}`}
                      animate={{ scaleX: on ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: 'easeOut' }}
                    />
                    <motion.span
                      aria-hidden="true"
                      className={`absolute inset-y-2.5 left-0 w-1 origin-center rounded-full ${p.bar}`}
                      animate={{ scaleY: on ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                    />
                    <span className="relative w-6 shrink-0 text-xs font-semibold text-slate-400">0{i + 1}</span>
                    <motion.span
                      animate={on && !reduce ? { scale: [1, 1.25, 1], rotate: [0, -15, 0] } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
                    >
                      <CheckCircle2 size={18} aria-hidden="true" />
                    </motion.span>
                    <span className={`relative min-w-0 flex-1 text-sm font-semibold transition-colors sm:text-base ${on ? 'text-slate-900' : 'text-slate-800'}`}>
                      {p.title}
                    </span>
                    <span className="relative flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue-600">
                      <span className={`hidden transition-opacity duration-300 sm:inline ${on ? 'opacity-100' : 'opacity-0'}`}>View details</span>
                      <motion.span animate={{ x: on && !reduce ? 4 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                        <ArrowRight size={18} aria-hidden="true" />
                      </motion.span>
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div variants={pop} className="mt-8">
            <motion.button
              type="button"
              aria-haspopup="dialog"
              onClick={(e) => open(0, e.currentTarget)}
              whileHover={reduce ? undefined : { scale: 1.05 }}
              whileTap={reduce ? undefined : { scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="group relative inline-flex min-h-12 items-center gap-2.5 overflow-hidden rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-xl shadow-slate-900/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ['0%', '700%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />
              )}
              <span className="relative">Amazon Services</span>
              <ArrowRight size={18} aria-hidden="true" className="relative transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && <Dialog key="dialog" index={dialog} setIndex={setDialog} reduce={reduce} onClose={() => setDialog(null)} />}
      </AnimatePresence>
    </section>
  );
}