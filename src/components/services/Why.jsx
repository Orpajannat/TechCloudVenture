'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { CheckCircle2, ShieldCheck, Globe, ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'] });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

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

/* ---------- helpers ---------- */
function Words({ text, shimmer, reduce }) {
  return text.split(' ').map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <motion.span variants={word} className="inline-block" style={{ transformOrigin: '50% 100%' }}>
        {shimmer ? (
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg,#2563eb,#0ea5e9,#0284c7,#2563eb)', backgroundSize: '300% 100%' }}
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

function useDialog(open, onClose, triggerRef) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, [open]);
}

/* pop-up: springs in small and tilted, header coloured with the card's accent */
function Dialog({ id, Icon, eyebrow, title, accent, onClose, reduce, children }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0b2a5b]/40 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="flex min-h-full items-center justify-center p-4" style={{ perspective: 1200 }} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={id}
          initial={reduce ? false : { opacity: 0, scale: 0.3, y: 120, rotateX: 40, rotateZ: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateZ: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40, transition: { duration: 0.18 } }}
          transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          className={`${body.className} relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#0b2a5b]/10 bg-white text-[#0b2a5b] shadow-2xl shadow-[#0b2a5b]/30`}
        >
          <div className="relative overflow-hidden p-6 sm:p-7" style={{ backgroundColor: accent }}>
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute -top-14 -right-14 size-52 rounded-full bg-white/35 blur-2xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <div className="relative flex items-start justify-between gap-4 text-[#0b2a5b]">
              <div className="flex min-w-0 items-center gap-3.5">
                <motion.span
                  initial={reduce ? false : { scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.15 }}
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b2a5b] shadow-lg"
                  style={{ color: accent }}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </motion.span>
                <div className="min-w-0">
                  <span className="text-xs font-bold">{eyebrow}</span>
                  <h3 id={id} className={`${display.className} text-lg leading-snug font-extrabold sm:text-xl`}>
                    {title}
                  </h3>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0b2a5b]/20 transition-transform hover:rotate-90 hover:bg-[#0b2a5b]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2a5b] motion-reduce:transition-none"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          <motion.div variants={group(0.15, 0.09)} initial={reduce ? false : 'hidden'} animate="show" className="p-6 sm:p-7">
            {children}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* grid floor + drifting blue glows shared by every section */
function Backdrop({ reduce, mask = '50% 30%' }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'linear-gradient(rgba(11,42,91,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(11,42,91,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: `radial-gradient(ellipse at ${mask}, black 20%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse at ${mask}, black 20%, transparent 75%)`,
        }}
      />
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-96 rounded-full bg-[#2563eb]/25 blur-3xl"
            animate={{ x: [0, 140, 0], y: [0, 60, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-[#38bdf8]/40 blur-3xl"
            animate={{ x: [0, -120, 0], y: [0, -80, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </>
  );
}

function Badge({ reduce, icon, children }) {
  return (
    <motion.div variants={pop}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#0b2a5b]/10 bg-white px-4 py-2 shadow-lg shadow-[#0b2a5b]/10"
      >
        <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
          {!reduce && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[#0284c7]"
              animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          <span className="relative size-2.5 rounded-full bg-[#0284c7]" />
        </span>
        {icon}
        <span className="truncate text-xs font-bold tracking-wide text-[#3b5b8c]">{children}</span>
      </motion.div>
    </motion.div>
  );
}

/* ---------- data (content unchanged) ---------- */
const BENEFITS = [
  {
    title: 'USA marketplace focused',
    description: 'Tailored specifically for Amazon USA rules, regional compliance, FBA logistics, and local tax/business guidelines.',
  },
  {
    title: 'Compliance-first execution',
    description: 'Zero risky shortcuts. We prioritize account safety, proper documentation, and strict adherence to Amazon terms of service.',
  },
  {
    title: 'Brand-authorized & invoice-backed',
    description: 'Direct distribution channels ensuring valid tier-1 invoices that successfully pass any Amazon seller performance review.',
  },
  {
    title: 'Clear agreements & transparent communication',
    description: 'No hidden clauses or surprises. Complete visibility into your store operations, profit margins, and strategy updates.',
  },
  {
    title: 'ROI-driven product selection',
    description: 'Data-backed catalog filtering to source profitable products with high buy-box ownership and stable profit margins.',
  },
  {
    title: 'Long-term business mindset',
    description: 'Building robust, sustainable wholesale assets designed for multi-year growth and capital appreciation.',
  },
];
const ACCENTS = [
  { fill: '#60a5fa', deep: '#1d4ed8' },
  { fill: '#38bdf8', deep: '#0369a1' },
  { fill: '#0ea5e9', deep: '#075985' },
  { fill: '#3b82f6', deep: '#1e40af' },
  { fill: '#93c5fd', deep: '#2563eb' },
  { fill: '#7dd3fc', deep: '#0284c7' },
];

const popRight = {
  hidden: { opacity: 0, scale: 0.5, x: 40, rotate: 3 },
  show: { opacity: 1, scale: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 380, damping: 15 } },
};

/* ---------- row ---------- */
function BenefitRow({ item, index, lit, reduce, onOpen }) {
  const { fill, deep } = ACCENTS[index];
  return (
    <motion.li variants={popRight} className="list-none">
      <motion.button
        type="button"
        aria-haspopup="dialog"
        onClick={(e) => onOpen(item, index, e.currentTarget)}
        whileHover={reduce ? undefined : { x: 10, scale: 1.015 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 340, damping: 18 }}
        className="group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-3xl border border-[#0b2a5b]/10 bg-white p-4 text-left shadow-lg shadow-[#0b2a5b]/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d4ed8] sm:p-5"
      >
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: fill }} />
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 opacity-20 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
          style={{ backgroundColor: fill }}
        />
        {lit && !reduce && (
          <motion.span
            aria-hidden="true"
            layoutId="why-live"
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="absolute inset-0 rounded-3xl border-2"
            style={{ borderColor: fill, boxShadow: `0 0 0 6px ${fill}33` }}
          />
        )}

        <span className="relative flex min-w-0 items-center gap-3.5 sm:gap-4">
          <motion.span
            animate={lit && !reduce ? { scale: [1, 1.2, 1], rotate: [0, -10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#0b2a5b] shadow-md"
            style={{ backgroundColor: fill }}
          >
            <CheckCircle2 className="size-5" aria-hidden="true" />
          </motion.span>
          <span className={`${display.className} text-base leading-snug font-bold text-[#0b2a5b] sm:text-lg`}>{item.title}</span>
        </span>

        <span
          aria-hidden="true"
          className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e3efff] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#0b2a5b] group-hover:text-white motion-reduce:transition-none"
          style={{ color: deep }}
        >
          <ArrowRight className="size-4" />
        </span>
      </motion.button>
    </motion.li>
  );
}

/* ---------- section ---------- */
export default function Why() {
  const reduce = useReducedMotion();
  const [popup, setPopup] = useState(null); // { item, index }
  const [lit, setLit] = useState(0);
  const [paused, setPaused] = useState(false);
  const triggerRef = useRef(null);
  useDialog(!!popup, () => setPopup(null), triggerRef);

  /* live highlight walks down the list until the visitor engages */
  useEffect(() => {
    if (reduce || paused || popup) return;
    const id = setInterval(() => setLit((i) => (i + 1) % BENEFITS.length), 2200);
    return () => clearInterval(id);
  }, [reduce, paused, popup]);

  function open(item, index, el) {
    triggerRef.current = el;
    setPopup({ item, index });
  }

  return (
    <section
      aria-labelledby="why-heading"
      className={`${body.className} relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-[#d6e8ff] via-[#e6f1ff] to-[#cfe6ff] px-4 py-20 text-[#0b2a5b] sm:px-6 sm:py-24 lg:px-8`}
    >
      <Backdrop reduce={reduce} mask="50% 40%" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          variants={group(0.05, 0.14)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex min-w-0 flex-col items-center space-y-6 text-center lg:col-span-5 lg:items-start lg:text-left"
        >
          <Badge reduce={reduce} icon={<Globe className="size-4 shrink-0 text-[#0284c7]" aria-hidden="true" />}>
            Enterprise Excellence
          </Badge>

          <h2 id="why-heading" className={`${display.className} text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl`} style={{ perspective: 800 }}>
            <span className="sr-only">Why Choose Our Wholesale Services?</span>
            <span aria-hidden="true">
              <Words text="Why Choose Our" reduce={reduce} />
              <Words text="Wholesale Services?" shimmer reduce={reduce} />
            </span>
          </h2>

          <motion.p variants={fadeUp} className="max-w-md text-base leading-8 text-[#3b5b8c] sm:text-lg">
            Click any core advantage below for a live strategic breakdown and operational insight.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={group(0.1, 0.12)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          onPointerEnter={(e) => e.pointerType !== 'touch' && setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className="min-w-0 space-y-3 sm:space-y-4 lg:col-span-7"
        >
          {BENEFITS.map((item, i) => (
            <BenefitRow key={item.title} item={item} index={i} lit={lit === i} reduce={reduce} onOpen={open} />
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>
        {popup && (
          <Dialog key={popup.item.title} id="why-popup-title" Icon={ShieldCheck} eyebrow="Strategic Advantage" title={popup.item.title} accent={ACCENTS[popup.index].fill} reduce={reduce} onClose={() => setPopup(null)}>
            <motion.p variants={fadeUp} className="text-sm leading-7 text-[#3b5b8c] sm:text-base">
              {popup.item.description}
            </motion.p>
            <motion.div variants={pop} className="mt-7 flex justify-end">
              <motion.button
                type="button"
                onClick={() => setPopup(null)}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                className="min-h-12 w-full rounded-full bg-[#2563eb] px-8 text-sm font-bold text-white shadow-lg shadow-[#2563eb]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8] sm:w-auto"
              >
                Got It
              </motion.button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
