'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  Store,
  FileText,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';

/* ---------- data ---------- */
const AUTOPLAY_MS = 6500;

const ACCENTS = {
  blue: { grad: 'from-blue-600 to-indigo-700', soft: 'bg-blue-50', text: 'text-blue-700', bar: 'bg-blue-600' },
  indigo: { grad: 'from-indigo-600 to-violet-700', soft: 'bg-indigo-50', text: 'text-indigo-700', bar: 'bg-indigo-600' },
  cyan: { grad: 'from-cyan-600 to-blue-700', soft: 'bg-cyan-50', text: 'text-cyan-700', bar: 'bg-cyan-600' },
  emerald: { grad: 'from-emerald-600 to-teal-700', soft: 'bg-emerald-50', text: 'text-emerald-700', bar: 'bg-emerald-600' },
};

const SERVICES = [
  {
    id: 'brand-protection',
    title: 'Brand Protection & Seller Control',
    subtitle: 'Our Brand Protection & Seller Control Service helps brands monitor and address unauthorized sellers, pricing violations, and listing abuse.',
    description: 'We support brands with unauthorized seller identification, MAP policy monitoring, seller suppression support, Buy Box control strategies, and listing hijack resolution in compliance with Amazon Brand Registry.',
    icon: ShieldCheck,
    accent: 'blue',
    badge: 'Registry Protection',
    points: ['Unauthorized seller identification', 'MAP policy monitoring', 'Seller suppression support', 'Buy Box control strategies', 'Listing hijack resolution'],
  },
  {
    id: 'account-management',
    title: 'Brand Account Management',
    subtitle: 'Managing a brand account on Amazon USA requires continuous oversight, fast issue handling, and policy awareness.',
    description: 'Our Brand Account Management Service provides end-to-end operational support, including Brand Registry management, account health monitoring, case & appeal handling, performance optimization, and compliance oversight.',
    icon: Store,
    accent: 'indigo',
    badge: 'End-to-End Partner',
    points: ['Brand Registry management', 'Account health monitoring', 'Case & appeal handling', 'Performance optimization', 'Compliance oversight'],
  },
  {
    id: 'listing-management',
    title: 'Product Listing Management',
    subtitle: 'Your listings represent your brand on Amazon. Our Product Listing Management Service ensures listings are accurate, policy-compliant, and optimized.',
    description: 'We optimize for discoverability and conversion, eliminate technical errors and suppression risks, and align everything with brand guidelines from new creation to advanced flat file fixes.',
    icon: FileText,
    accent: 'cyan',
    badge: 'Catalog Optimization',
    points: ['Accurate and policy-compliant setup', 'Optimized for discoverability and conversion', 'Free from technical errors and suppression risks', 'Aligned with brand guidelines & flat file fixes'],
  },
  {
    id: 'brand-store-seo',
    title: 'Brand Store SEO',
    subtitle: 'Your Amazon Brand Store is your digital storefront. Our Brand Store SEO Service helps brands build discoverable, conversion-focused storefronts.',
    description: 'We deliver professional storefront design, keyword mapping and SEO structure, optimized store pages, category navigation setup, and conversion rate optimization.',
    icon: Globe,
    accent: 'emerald',
    badge: 'Digital Storefront',
    points: ['Professional storefront design', 'Keyword mapping and SEO structure', 'Optimized store pages', 'Category navigation setup', 'Conversion optimization'],
  },
];

/* ---------- variants ---------- */
const group = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});
const maskUp = {
  hidden: { y: '115%', rotate: 5 },
  show: { y: '0%', rotate: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};
const pop = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 16 } },
};
const panelContent = {
  hidden: {},
  show: { transition: { delayChildren: 0.05, staggerChildren: 0.08 } },
  exit: { opacity: 0, y: -14, scale: 0.97, transition: { duration: 0.18 } },
};

/* ---------- orbit visual ---------- */
function Orb({ Icon, reduce }) {
  return (
    <motion.div
      variants={{
        hidden: { scale: 0, rotate: -160, opacity: 0 },
        show: { scale: 1, rotate: 0, opacity: 1, transition: { type: 'spring', stiffness: 170, damping: 13 } },
      }}
      aria-hidden="true"
      className="relative mx-auto grid size-40 place-items-center sm:size-48"
    >
      <span className="absolute inset-0 rounded-full border border-white/25" />
      <span className="absolute inset-5 rounded-full border border-white/20" />
      {!reduce && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full border border-dashed border-white/45"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.55)]" />
          </motion.span>
          <motion.span
            className="absolute inset-5"
            animate={{ rotate: -360 }}
            transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/80" />
          </motion.span>
          <motion.span
            className="absolute inset-8 rounded-full bg-white/20"
            animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.15, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      <motion.span
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex size-20 items-center justify-center rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/25 sm:size-24"
      >
        <Icon size={38} aria-hidden="true" />
      </motion.span>
    </motion.div>
  );
}

/* ---------- pop-up dialog ---------- */
function ServiceDialog({ item, onClose, reduce }) {
  const a = ACCENTS[item.accent];
  const Icon = item.icon;
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
          aria-labelledby="service-dialog-title"
          initial={reduce ? false : { opacity: 0, scale: 0.5, y: 90, rotateX: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30, transition: { duration: 0.18 } }}
          transition={{ type: 'spring', stiffness: 230, damping: 18 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40"
        >
          {/* gradient header */}
          <div className={`relative overflow-hidden bg-linear-to-br ${a.grad} p-6 text-white sm:p-8`}>
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-56 rounded-full bg-white/15 blur-2xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <motion.span
                  initial={reduce ? false : { scale: 0, rotate: -140 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.15 }}
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-lg"
                >
                  <Icon size={28} aria-hidden="true" />
                </motion.span>
                <div>
                  <span className="text-xs font-semibold text-white/80">{item.badge}</span>
                  <h3 id="service-dialog-title" className="text-xl leading-snug font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
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

          <motion.div variants={group(0.15, 0.08)} initial={reduce ? false : 'hidden'} animate="show" className="p-6 sm:p-8">
            <motion.p variants={fadeUp} className="text-sm leading-7 text-slate-600 sm:text-base">
              {item.description}
            </motion.p>
            <motion.p variants={fadeUp} className={`mt-7 mb-3 text-sm font-semibold ${a.text}`}>
              Scope &amp; deliverables
            </motion.p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {item.points.map((pt) => (
                <motion.li
                  key={pt}
                  variants={pop}
                  className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{pt}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className={`min-h-11 rounded-full bg-linear-to-r ${a.grad} px-7 text-sm font-semibold text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900`}
              >
                Close &amp; return
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- section ---------- */
export default function BrandServicesSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: '-15% 0px' });

  const [active, setActive] = useState(0);
  const [dialog, setDialog] = useState(null);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);

  const progress = useMotionValue(0);
  const tabRefs = useRef([]);
  const listRef = useRef(null);
  const triggerRef = useRef(null);

  const paused = reduce || !inView || hover || focused || !!dialog;

  /* autoplay, driven by a motion value so it pauses exactly where it is */
  useAnimationFrame((_, delta) => {
    if (paused) return;
    const next = progress.get() + Math.min(delta, 100) / AUTOPLAY_MS;
    if (next >= 1) {
      progress.set(0);
      setActive((a) => (a + 1) % SERVICES.length);
    } else {
      progress.set(next);
    }
  });

  function select(i, focusTab = false) {
    setActive(i);
    progress.set(0);
    if (focusTab) tabRefs.current[i]?.focus();
  }

  function onTabKeyDown(e) {
    const n = SERVICES.length;
    const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (map[e.key]) {
      e.preventDefault();
      select((active + map[e.key] + n) % n, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      select(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      select(n - 1, true);
    }
  }

  /* keep the active tab centred in the mobile scroller (never scrolls the page) */
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.clientWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
  }, [active, reduce]);

  /* dialog: Esc, scroll lock, focus restore */
  useEffect(() => {
    if (!dialog) return;
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
  }, [dialog]);

  const item = SERVICES[active];
  const Icon = item.icon;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="brand-services-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-white via-slate-50 to-blue-50/70 px-4 py-20 font-sans text-slate-900 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* dot texture */}
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
      {/* drifting colour blobs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-24 -z-10 size-[26rem] rounded-full bg-blue-300/35 blur-3xl"
            animate={{ x: [0, 110, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-[28rem] rounded-full bg-indigo-300/35 blur-3xl"
            animate={{ x: [0, -110, 0], y: [0, -70, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          variants={group(0.05, 0.14)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={pop}>
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-md"
            >
              <span aria-hidden="true" className="relative flex size-2.5">
                {!reduce && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <span className="relative size-2.5 rounded-full bg-emerald-500" />
              </span>
              <Sparkles size={16} className="text-blue-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-slate-700">Enterprise Brand Solutions</span>
            </motion.div>
          </motion.div>

          <h2 id="brand-services-heading" className="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
            <span className="sr-only">Amazon Brand Services We Offer</span>
            <span aria-hidden="true" className="block">
              <span className="block overflow-hidden py-1">
                <motion.span variants={maskUp} className="block">Amazon Brand Services</motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span variants={maskUp} className="block">
                  <motion.span
                    className="inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg,#2563eb,#4f46e5,#06b6d4,#2563eb)',
                      backgroundSize: '300% 100%',
                    }}
                    animate={reduce ? undefined : { backgroundPositionX: ['0%', '300%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    We Offer
                  </motion.span>
                </motion.span>
              </span>
            </span>
          </h2>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            End-to-end solutions to protect, manage, and grow your brand on Amazon.
          </motion.p>
        </motion.div>

        {/* showcase */}
        <div
          className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-8"
          onPointerEnter={(e) => e.pointerType !== 'touch' && setHover(true)}
          onPointerLeave={() => setHover(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {/* tabs: horizontal scroller on small screens, vertical list on desktop */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="min-w-0"
          >
            <div
              ref={listRef}
              role="tablist"
              aria-label="Amazon brand services"
              onKeyDown={onTabKeyDown}
              className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:snap-none lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {SERVICES.map((s, i) => {
                const a = ACCENTS[s.accent];
                const TabIcon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    ref={(el) => (tabRefs.current[i] = el)}
                    id={`svc-tab-${s.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="svc-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(i)}
                    className={`relative flex min-h-20 w-[16.5rem] shrink-0 snap-center items-center gap-3.5 rounded-2xl px-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transition-none sm:w-72 lg:w-full lg:py-5 ${
                      isActive ? '' : 'hover:bg-white/70'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="svc-tab-bg"
                        aria-hidden="true"
                        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-2xl bg-white shadow-xl shadow-blue-900/10 ring-1 ring-slate-200"
                      />
                    )}
                    <span className={`relative flex size-11 shrink-0 items-center justify-center rounded-xl ${a.soft} ${a.text}`}>
                      <TabIcon size={22} aria-hidden="true" />
                    </span>
                    <span className="relative min-w-0">
                      <span className={`block text-xs font-semibold ${isActive ? a.text : 'text-slate-400'}`}>0{i + 1}</span>
                      <span className={`block text-sm leading-snug font-semibold sm:text-base ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {s.title}
                      </span>
                    </span>
                    {isActive && !reduce && (
                      <span aria-hidden="true" className="absolute inset-x-4 bottom-2 h-1 overflow-hidden rounded-full bg-slate-100">
                        <motion.span style={{ scaleX: progress }} className={`block h-full origin-left rounded-full ${a.bar}`} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* panel */}
          <motion.div
            id="svc-panel"
            role="tabpanel"
            aria-labelledby={`svc-tab-${item.id}`}
            initial={reduce ? false : { opacity: 0, y: 80, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 110, damping: 16, delay: 0.1 }}
            className="relative min-w-0 overflow-hidden rounded-[2rem] text-white shadow-2xl shadow-blue-900/25"
          >
            {/* cross-fading gradients */}
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                aria-hidden="true"
                className={`absolute inset-0 bg-linear-to-br ${ACCENTS[s.accent].grad}`}
                animate={{ opacity: i === active ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.7 }}
              />
            ))}
            {/* texture + live light */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
                maskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
              }}
            />
            {!reduce && (
              <>
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-white/20 blur-3xl"
                  animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-28 -left-16 size-72 rounded-full bg-black/20 blur-3xl"
                  animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
              </>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                variants={panelContent}
                initial={reduce ? false : 'hidden'}
                animate="show"
                exit={reduce ? undefined : 'exit'}
                className="relative grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6 lg:p-12"
              >
                {/* text */}
                <div className="min-w-0">
                  <motion.span variants={pop} className="inline-flex rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
                    {item.badge}
                  </motion.span>
                  <motion.h3 variants={fadeUp} className="mt-5 text-2xl leading-tight font-semibold tracking-tight sm:text-4xl">
                    {item.title}
                  </motion.h3>
                  <motion.p variants={fadeUp} className="mt-4 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                    {item.subtitle}
                  </motion.p>
                  <motion.div variants={pop} className="mt-7">
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setDialog(item);
                      }}
                      aria-haspopup="dialog"
                      whileHover={reduce ? undefined : { scale: 1.06 }}
                      whileTap={reduce ? undefined : { scale: 0.94 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 shadow-xl shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Read more
                      <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* orbit + floating highlights */}
                <div className="min-w-0">
                  <Orb Icon={Icon} reduce={reduce} />
                  <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
                    {item.points.map((pt, i) => (
                      <motion.li key={pt} variants={pop}>
                        <motion.span
                          animate={reduce ? undefined : { y: [0, -4, 0] }}
                          transition={{ duration: 3 + (i % 3) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                          className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-3.5 py-2 text-xs leading-5 font-medium backdrop-blur-md sm:text-sm"
                        >
                          <CheckCircle2 size={16} className="shrink-0 text-white" aria-hidden="true" />
                          {pt}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {dialog && <ServiceDialog key={dialog.id} item={dialog} reduce={reduce} onClose={() => setDialog(null)} />}
      </AnimatePresence>
    </section>
  );
}