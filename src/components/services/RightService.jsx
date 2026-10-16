'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { ArrowRight, Sparkles, Calendar, Compass, X } from 'lucide-react';
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

/* ---------- modal content (text unchanged) ---------- */
const MODALS = {
  consultation: {
    Icon: Calendar,
    accent: '#60a5fa',
    label: 'Advisory Session',
    title: 'Schedule Free Consultation',
    text: 'Connect directly with our Amazon USA experts to analyze your account health, wholesale catalog, or brand protection needs. Zero commitment, high-value strategic roadmap.',
    href: '/contact#contact',
    cta: 'Contact Us to Book',
  },
  explore: {
    Icon: Compass,
    accent: '#0ea5e9',
    label: 'Service Directory',
    title: 'Explore All Solutions',
    text: 'Browse our complete suite of authorized reseller setups, store management, product research, and brand protection workflows tailored for sustainable USA market scaling.',
    href: '/services#service-options',
    cta: 'Browse Services',
  },
};

export default function RightService() {
  const reduce = useReducedMotion();
  const [activeModal, setActiveModal] = useState(null);
  const triggerRef = useRef(null);
  useDialog(!!activeModal, () => setActiveModal(null), triggerRef);

  function open(key, el) {
    triggerRef.current = el;
    setActiveModal(key);
  }
  const data = activeModal ? MODALS[activeModal] : null;

  const shine = (delay) =>
    reduce ? null : (
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/45 to-transparent"
        animate={{ x: ['0%', '700%'] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut', delay }}
      />
    );

  return (
    <section
      aria-labelledby="right-service-heading"
      className={`${body.className} relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-linear-to-b from-[#d6e8ff] via-[#e6f1ff] to-[#cfe6ff] px-4 py-20 text-[#0b2a5b] sm:px-6 sm:py-24 lg:px-8`}
    >
      <Backdrop reduce={reduce} mask="50% 50%" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.7, y: 90, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.012, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-linear-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] p-7 shadow-2xl shadow-[#2563eb]/25 sm:rounded-[3rem] sm:p-14 lg:p-16"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-[#2563eb]/35 blur-3xl"
              animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-[#7dd3fc]/50 blur-3xl"
              animate={reduce ? undefined : { x: [0, 70, 0], y: [0, -40, 0], scale: [1, 1.25, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              variants={group(0.2, 0.14)}
              initial={reduce ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="relative z-10 mx-auto flex max-w-2xl flex-col items-center space-y-6 text-center"
            >
              <motion.div variants={pop}>
                <motion.div
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0b2a5b]/10 bg-white/85 px-4 py-2 text-xs font-bold text-[#3b5b8c] shadow-lg shadow-[#0b2a5b]/10 backdrop-blur"
                >
                  <motion.span aria-hidden="true" className="flex" animate={reduce ? undefined : { rotate: [0, 20, -20, 0], scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Sparkles className="size-4 text-[#2563eb]" />
                  </motion.span>
                  <span>Take the Next Step</span>
                </motion.div>
              </motion.div>

              <div className="space-y-4">
                <h2 id="right-service-heading" className={`${display.className} text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl`} style={{ perspective: 800 }}>
                  <span className="sr-only">Let’s Find the Right Service for You</span>
                  <span aria-hidden="true">
                    <Words text="Let’s Find the" reduce={reduce} />
                    <Words text="Right Service for You" shimmer reduce={reduce} />
                  </span>
                </h2>
                <motion.p variants={fadeUp} className="text-base leading-8 text-[#2f4f82] sm:text-lg">
                  Whether you are an Amazon wholesale seller or a brand owner, choosing the right service is critical for long-term success.
                </motion.p>
              </div>

              <motion.div variants={group(0, 0.12)} className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center sm:gap-4">
                <motion.button
                  variants={pop}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(e) => open('consultation', e.currentTarget)}
                  whileHover={reduce ? undefined : { scale: 1.07, y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.93 }}
                  className="group relative inline-flex min-h-13 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#2563eb] px-8 text-sm font-bold text-white shadow-xl shadow-[#2563eb]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
                >
                  {shine(0.5)}
                  <span className="relative">Book a Free Consultation</span>
                  <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1.5 motion-reduce:transition-none" aria-hidden="true" />
                </motion.button>

                <motion.button
                  variants={pop}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(e) => open('explore', e.currentTarget)}
                  whileHover={reduce ? undefined : { scale: 1.07, y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.93 }}
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-[#0b2a5b]/20 bg-white/70 px-8 text-sm font-bold text-[#0b2a5b] backdrop-blur hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5 motion-reduce:transition-none" aria-hidden="true" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeUp} className="w-full border-t border-[#0b2a5b]/15 pt-6">
                <p className="text-sm leading-7 font-medium text-[#2f4f82]">
                  Tech Cloud Global Venture is here to support compliant, scalable, and sustainable growth in the Amazon USA marketplace.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {data && (
          <Dialog key={activeModal} id="cta-modal-title" Icon={data.Icon} eyebrow={data.label} title={data.title} accent={data.accent} reduce={reduce} onClose={() => setActiveModal(null)}>
            <motion.p variants={fadeUp} className="text-sm leading-7 text-[#3b5b8c] sm:text-base">
              {data.text}
            </motion.p>
            <motion.div variants={pop} className="mt-7 flex justify-end">
              <motion.div whileHover={reduce ? undefined : { scale: 1.06 }} whileTap={reduce ? undefined : { scale: 0.94 }} className="w-full sm:w-auto">
                <Link
                  href={data.href}
                  onClick={() => setActiveModal(null)}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#2563eb] px-8 text-sm font-bold text-white shadow-lg shadow-[#2563eb]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8] sm:w-auto"
                >
                  {data.cta}
                </Link>
              </motion.div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}