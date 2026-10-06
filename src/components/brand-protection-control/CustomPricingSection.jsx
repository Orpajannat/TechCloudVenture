'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Send, Sparkles, Building2, CheckCircle2 } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TITLE = 'Custom Pricing'
const SECTION_SUBTITLE_HEADER = 'Custom package is based on:'
const BEST_FOR_TEXT = 'Best for: Established brands & distributors'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const customFeatures = [
  'Full catalog protection',
  'Seller suppression support',
  'MAP enforcement strategy',
  'Dedicated brand protection manager',
  'Weekly reporting',
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

export default function CustomPricingSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [cardRef, cardSeen] = useInView(0.1)

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
  const popCard = cardSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="custom-pricing-heading"
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
            <span>Enterprise Solution</span>
          </div>

          <h2
            id="custom-pricing-heading"
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

        {/* Main Blue Container Box */}
        <div
          ref={cardRef}
          className={`${popCard} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] relative overflow-hidden rounded-[40px] border-3 border-[#061330] bg-[#2292F0] p-8 sm:p-12 lg:p-16 text-white shadow-[12px_12px_0_#061330] transition-all duration-500 hover:shadow-[16px_16px_0_#0F2F6E] motion-reduce:animate-none max-w-7xl mx-auto`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Subtle Decorative Backdrop Elements */}
          <div aria-hidden="true" className="absolute -top-32 -left-32 size-96 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 -right-32 size-96 rounded-full bg-[#061330]/20 blur-3xl" />

          <div className="relative text-center">
            
            <p className="text-base sm:text-lg font-black tracking-tight mb-8 text-white/90">
              {SECTION_SUBTITLE_HEADER}
            </p>

            {/* Custom Features Grid / Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
              {customFeatures.map((feature, i) => (
                <div
                  key={feature}
                  className="group flex items-center gap-2.5 rounded-2xl border-2 border-white/30 bg-white/15 px-5 py-3 backdrop-blur-md shadow-[4px_4px_0_#061330] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#061330] hover:shadow-[6px_6px_0_#061330]"
                  style={{ animationDelay: `${300 + i * 60}ms` }}
                >
                  <div className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-[#2292F0] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#061330] group-hover:text-white">
                    <CheckCircle2 size={14} strokeWidth={3} aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base font-black tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="mb-8">
              <Link
                href="/contact?plan=custom"
                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-3 border-[#061330] bg-white py-4 px-8 text-center text-base sm:text-lg font-black text-[#061330] shadow-[6px_6px_0_#061330] transition-all duration-200 hover:-translate-y-1 hover:bg-[#EEF4FC] hover:shadow-[8px_8px_0_#061330] active:translate-y-0 active:shadow-none"
              >
                <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#2292F0]/10 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
                <span className="relative">Request Custom Package</span>
                <span className="relative grid size-7 place-items-center rounded-full bg-[#061330] text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <Send size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            {/* Best For Footer Note */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#061330]/30 px-5 py-2 backdrop-blur-sm border border-white/20">
              <Building2 size={16} className="text-[#BFD8F5]" />
              <span className="text-xs sm:text-sm font-extrabold text-white">
                {BEST_FOR_TEXT}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}