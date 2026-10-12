'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { ArrowRight, Sparkles, Calendar, Compass, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'] });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

/* ---------- modal content (unchanged text) ---------- */
const MODALS = {
  consultation: {
    Icon: Calendar,
    accent: '#ff5c7a',
    label: 'Advisory Session',
    title: 'Schedule Free Consultation',
    text: 'Connect directly with our Amazon USA experts to analyze your account health, wholesale catalog, or brand protection needs. Zero commitment, high-value strategic roadmap.',
    href: '/contact#contact',
    cta: 'Contact Us to Book',
  },
  explore: {
    Icon: Compass,
    accent: '#5cf2c1',
    label: 'Service Directory',
    title: 'Explore All Solutions',
    text: 'Browse our complete suite of authorized reseller setups, store management, product research, and brand protection workflows tailored for sustainable USA market scaling.',
    href: '/services#service-options',
    cta: 'Browse Services',
  },
};

/* ---------- variants ---------- */
const group = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});
const pop = {
  hidden: { opacity: 0, scale: 0.4, y: 40, rotate: -5 },
  show: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 380, damping: 15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: 'easeOut' } },
};
const word = {
  hidden: { opacity: 0, y: 50, rotateX: -70, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 130, damping: 14 } },
};

function Words({ text, shimmer, reduce }) {
  return text.split(' ').map((w, i) => (
    <span key={`${w}-${i}`}>
      <motion.span variants={word} className="inline-block" style={{ transformOrigin: '50% 100%' }}>
        {shimmer ? (
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg,#e0305a,#c4620a,#0d8a66,#e0305a)', backgroundSize: '300% 100%' }}
            animate={reduce ? undefined : { backgroundPositionX: ['0%', '300%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            {w}
          </motion.span>
        ) : (
          w
        )}
      </motion.span>{' '}
    </span>
  ));
}

/* ---------- pop-up ---------- */
function Modal({ data, onClose, reduce }) {
  const { Icon, accent } = data;
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1a1040]/40 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="flex min-h-full items-center justify-center p-4" style={{ perspective: 1200 }} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cta-modal-title"
          initial={reduce ? false : { opacity: 0, scale: 0.3, y: 120, rotateX: 40, rotateZ: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateZ: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40, transition: { duration: 0.18 } }}
          transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          className={`${body.className} relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#1a1040]/10 bg-white text-[#1a1040] shadow-2xl shadow-[#1a1040]/30`}
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
            <div className="relative flex items-start justify-between gap-4 text-[#120b2e]">
              <div className="flex items-center gap-3.5">
                <motion.span
                  initial={reduce ? false : { scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.15 }}
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#1a1040] shadow-lg"
                  style={{ color: accent }}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </motion.span>
                <div>
                  <span className="text-xs font-bold">{data.label}</span>
                  <h3 id="cta-modal-title" className={`${display.className} text-lg leading-snug font-extrabold sm:text-xl`}>
                    {data.title}
                  </h3>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#120b2e]/20 transition-transform hover:rotate-90 hover:bg-[#120b2e]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#120b2e] motion-reduce:transition-none"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          <motion.div variants={group(0.15, 0.1)} initial={reduce ? false : 'hidden'} animate="show" className="p-6 sm:p-7">
            <motion.p variants={fadeUp} className="text-sm leading-7 text-[#4b4380] sm:text-base">
              {data.text}
            </motion.p>
            <motion.div variants={pop} className="mt-7 flex justify-end">
              <motion.div whileHover={reduce ? undefined : { scale: 1.06 }} whileTap={reduce ? undefined : { scale: 0.94 }} className="w-full sm:w-auto">
                <Link
                  href={data.href}
                  onClick={onClose}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ff5c7a] px-8 text-sm font-bold text-white shadow-lg shadow-[#ff5c7a]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a58e0] sm:w-auto"
                >
                  {data.cta}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- section ---------- */
export default function RightService() {
  const reduce = useReducedMotion();
  const [activeModal, setActiveModal] = useState(null);
  const triggerRef = useRef(null);

  function open(key, el) {
    triggerRef.current = el;
    setActiveModal(key);
  }

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e) => e.key === 'Escape' && setActiveModal(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, [activeModal]);

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
      className={`${body.className} relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#faf7ff] px-4 py-20 text-[#1a1040] sm:px-6 sm:py-24 lg:px-8`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'linear-gradient(rgba(26,16,64,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,16,64,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative z-10 container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* big rounded card that pops in and breathes */}
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
            className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-linear-to-br from-[#ffd9b0] via-[#ffc2d0] to-[#d4ccff] p-7 shadow-2xl shadow-[#ff5c7a]/25 sm:rounded-[3rem] sm:p-14 lg:p-16"
          >
            {/* drifting colour blobs inside the card */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-[#ff5c7a]/35 blur-3xl"
              animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-[#6fd3ff]/40 blur-3xl"
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#1a1040]/10 bg-white/80 px-4 py-2 text-xs font-bold text-[#4b4380] shadow-lg shadow-[#1a1040]/10 backdrop-blur"
                >
                  <motion.span aria-hidden="true" className="flex" animate={reduce ? undefined : { rotate: [0, 20, -20, 0], scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Sparkles className="size-4 text-[#e0305a]" />
                  </motion.span>
                  <span>Take the Next Step</span>
                </motion.div>
              </motion.div>

              <div className="space-y-4">
                <h2
                  id="right-service-heading"
                  className={`${display.className} text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl`}
                  style={{ perspective: 800 }}
                >
                  <span className="sr-only">Let’s Find the Right Service for You</span>
                  <span aria-hidden="true">
                    <Words text="Let’s Find the" reduce={reduce} />
                    <Words text="Right Service for You" shimmer reduce={reduce} />
                  </span>
                </h2>
                <motion.p variants={fadeUp} className="text-base leading-8 text-[#3a3166] sm:text-lg">
                  Whether you are an Amazon wholesale seller or a brand owner, choosing the right service is critical for long-term success.
                </motion.p>
              </div>

              {/* actions */}
              <motion.div variants={group(0, 0.12)} className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center sm:gap-4">
                <motion.button
                  variants={pop}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(e) => open('consultation', e.currentTarget)}
                  whileHover={reduce ? undefined : { scale: 1.07, y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.93 }}
                  className="group relative inline-flex min-h-13 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ff5c7a] px-8 text-sm font-bold text-white shadow-xl shadow-[#ff5c7a]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a58e0]"
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
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-[#1a1040]/20 bg-white/70 px-8 text-sm font-bold text-[#1a1040] backdrop-blur hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a58e0]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5 motion-reduce:transition-none" aria-hidden="true" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeUp} className="w-full border-t border-[#1a1040]/15 pt-6">
                <p className="text-sm leading-7 font-medium text-[#3a3166]">
                  Tech Cloud Global Venture is here to support compliant, scalable, and sustainable growth in the Amazon USA marketplace.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>{activeModal && <Modal key={activeModal} data={MODALS[activeModal]} reduce={reduce} onClose={() => setActiveModal(null)} />}</AnimatePresence>
    </section>
  );
}