'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TAG = 'Pricing & Plans'
const SECTION_TITLE = 'Choose Your Protection Level'
const SECTION_SUBTITLE = 'Transparent, scalable plans designed to safeguard your Amazon USA brand.'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const plans = [
  {
    name: 'Starter Protection Plan',
    price: '$299',
    period: 'Monthly',
    bestFor: 'Small brands & new Brand Registry users',
    features: [
      'Unauthorized seller monitoring (up to 10 ASINs)',
      'MAP monitoring',
      'Monthly risk report',
      'Basic compliance guidance',
    ],
    popular: false,
    buttonText: 'Click Here',
    href: '/contact?plan=starter',
  },
  {
    name: 'Growth Protection Plan',
    price: '$599',
    period: 'Monthly',
    bestFor: 'Growing Amazon brands',
    features: [
      'Monitoring up to 30 ASINs',
      'Seller violation documentation',
      'Hijack detection & support',
      'Buy Box strategy guidance',
      'Priority reporting',
    ],
    popular: true,
    buttonText: 'Click Here',
    href: '/contact?plan=growth',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

export default function PricingPlansSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [gridRef, gridSeen] = useInView(0.1)

  // Live pointer parallax
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let visible = false
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(el)

    let tx = 0, ty = 0, cx = 0, cy = 0, lastMove = -1e9, raf = 0
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
      lastMove = performance.now()
    }
    const onLeave = () => (lastMove = -1e9)
    const tick = (t) => {
      if (visible) {
        if (t - lastMove > 2500) {
          tx = Math.sin(t / 2600) * 0.7
          ty = Math.cos(t / 3400) * 0.7
        }
        cx += (tx - cx) * 0.06
        cy += (ty - cy) * 0.06
        el.style.setProperty('--mx', cx.toFixed(4))
        el.style.setProperty('--my', cy.toFixed(4))
      }
      raf = requestAnimationFrame(tick)
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const popHeader = headerSeen ? 'animate-pop' : 'opacity-0'
  const popGrid = gridSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="pricing-plans-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-20 text-[#061330] sm:py-28 lg:py-36"
    >
      {/* Background Animated Orbs & Shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.18) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div aria-hidden="true" className="absolute top-1/3 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/3 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <Sparkles size={14} className="text-[#7FAFE6]" />
            <span>{SECTION_TAG}</span>
          </div>

          <h2
            id="pricing-plans-heading"
            aria-label={SECTION_TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl mb-4"
          >
            {SECTION_TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <p className="mx-auto max-w-xl text-base sm:text-lg font-medium text-[#061330]/80">
            {SECTION_SUBTITLE}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div
          ref={gridRef}
          className={`${popGrid} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col justify-between rounded-[40px] border-3 border-[#061330] bg-white p-8 sm:p-10 shadow-[10px_10px_0_#061330] transition-all duration-500 hover:-translate-y-2 hover:shadow-[14px_14px_0_#7FAFE6] ${
                plan.popular ? 'ring-4 ring-[#7FAFE6]/50' : ''
              }`}
              style={{ animationDelay: `${300 + idx * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-8 inline-flex items-center gap-1.5 rounded-full border-2 border-[#061330] bg-[#0F2F6E] px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0_#061330]">
                  <Zap size={13} className="text-[#BFD8F5]" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Plan Header Title Bar */}
                <div className="mb-8 rounded-2xl border-2 border-[#061330] bg-[#061330] py-5 px-6 text-center text-white shadow-[4px_4px_0_#0F2F6E]">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">{plan.name}</h3>
                </div>

                {/* Price Display */}
                <div className="mb-8 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-[#0F2F6E]">{plan.price.charAt(0)}</span>
                    <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#061330]">{plan.price.slice(1)}</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#061330]/60 uppercase tracking-widest">{plan.period}</span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#BFD8F5] text-[#061330]">
                        <CheckCircle2 size={16} strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-[#061330]/80 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Section: Button & Best For */}
              <div className="pt-6 border-t-2 border-[#061330]/10 text-center">
                <Link
                  href={plan.href}
                  className="group/btn relative mb-4 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#061330] py-4 px-8 text-center font-black text-white shadow-[4px_4px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:shadow-[6px_6px_0_#7FAFE6] active:translate-y-0 active:shadow-none"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
                  <span className="relative">{plan.buttonText}</span>
                  <span className="relative grid size-6 place-items-center rounded-full bg-white text-[#061330] transition-transform duration-300 group-hover/btn:translate-x-1">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>

                <p className="text-xs sm:text-sm font-black text-[#0F2F6E]">
                  Best for: <span className="font-extrabold text-[#061330]/70">{plan.bestFor}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}