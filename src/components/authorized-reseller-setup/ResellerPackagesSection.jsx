'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Zap } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TITLE = 'Authorized Reseller Approval Packages (With Price)'

const packages = [
  {
    name: 'Standard Approval Package',
    price: '$149',
    badge: 'One-Time . For: 1 Brand or Distributor',
    popular: false,
    features: [
      'Approval setup for 1 brand or distributor',
      'Reseller application preparation',
      'Professional email communication support',
      'Required documentation checklist',
      'Approval process follow-up',
    ],
    buttonText: 'Click Here',
    buttonHref: '/contact?service=authorized-reseller-setup&package=standard#contact',
  },
  {
    name: 'Professional Approval Package',
    price: '$249',
    badge: 'One-Time . For: Multiple Brands / Distributors',
    popular: true,
    features: [
      'Approval setup for multiple brands or distributors',
      'End-to-end approval handling',
      'Priority communication & follow-up',
      'Documentation coordination',
      'Advanced approval support for higher success rate',
    ],
    buttonText: 'Click Here',
    buttonHref: '/contact?service=authorized-reseller-setup&package=professional#contact',
  },
]

const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

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

export default function ResellerPackagesSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [cardsRef, cardsSeen] = useInView(0.1)

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
  const popCards = cardsSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="packages-heading"
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
      <div aria-hidden="true" className="absolute top-1/4 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/4 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
            <span>Pricing & Plans</span>
          </div>

          <h2
            id="packages-heading"
            aria-label={SECTION_TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
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
        </div>

        {/* Pricing Cards Grid matching signature brutalist style */}
        <div
          ref={cardsRef}
          className={`${popCards} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`group relative flex flex-col justify-between rounded-[36px] border-3 border-[#061330] bg-white p-8 sm:p-10 shadow-[10px_10px_0_#061330] transition-all duration-500 hover:-translate-y-2 hover:shadow-[14px_14px_0_#7FAFE6] ${
                pkg.popular ? 'bg-linear-to-b from-white via-[#F4F8FD] to-[#E8F1FC]' : ''
              }`}
              style={{ animationDelay: `${300 + idx * 150}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 right-8 inline-flex items-center gap-1.5 rounded-full border-2 border-[#061330] bg-[#0F2F6E] px-4 py-1 text-xs font-black uppercase tracking-wider text-[#BFD8F5] shadow-[3px_3px_0_#061330]">
                  <Zap size={14} className="text-yellow-300 fill-yellow-300" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Package Header Box (Dark Top Banner in reference) */}
                <div className="rounded-2xl border-2 border-[#061330] bg-[#061330] px-6 py-4 text-center text-white shadow-[4px_4px_0_#0F2F6E] mb-8">
                  <h3 className="text-xl font-black tracking-tight">{pkg.name}</h3>
                </div>

                {/* Price & Subtitle */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-1 text-5xl sm:text-6xl font-black text-[#0F2F6E] tracking-tight">
                    <span className="text-2xl font-black -translate-y-4">$</span>
                    <span>{pkg.price.replace('$', '')}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-extrabold text-[#061330]/70 uppercase tracking-wide">
                    {pkg.badge}
                  </p>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 border-t border-[#061330]/10 pt-6 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] border border-[#061330]">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-bold text-[#061330] leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={pkg.buttonHref}
                  className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#061330] px-8 py-4 text-center font-black text-white shadow-[5px_5px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:shadow-[8px_8px_0_#7FAFE6] active:translate-y-0 active:shadow-none"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
                  <span className="relative">{pkg.buttonText}</span>
                  <span className="relative grid size-7 place-items-center rounded-full bg-white text-[#061330] transition-transform duration-300 group-hover/btn:translate-x-1">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}