'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Ready to Build a Legitimate Amazon Wholesale Business?'
const SUBTITLE = "Whether you're just starting or scaling an existing operation, choosing the right wholesale partner matters. Let's discuss how we can support your growth."
const FOOTER_TEXT = 'TechCloud Venture is here to support compliant, structured, and sustainable Amazon wholesale growth in the USA marketplace.'
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

export default function CtaSection() {
  const ref = useRef(null)
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

  const popCard = cardSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-16 sm:py-20 lg:py-28 text-[#061330]"
    >
      {/* Background Animated Orbs & Shapes matching the design system */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.18) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div aria-hidden="true" className="absolute top-1/2 left-1/4 -z-20 size-[400px] [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-1/4 bottom-1/4 -z-20 size-[450px] [translate:calc(var(--mx,0)*40px)_calc(var(--my,0)*40px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container Card matching brand ink #061330 */}
        <div
          ref={cardRef}
          className={`${popCard} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] relative mx-auto max-w-7xl overflow-hidden rounded-[40px] sm:rounded-[50px] border-3 border-[#061330] bg-[#061330] px-6 py-12 text-center text-[#E8F1FC] shadow-[10px_10px_0_#0F2F6E] transition-all duration-500 sm:px-12 sm:py-16 motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Subtle orbiting glow accents inside card */}
          <div aria-hidden="true" className="absolute -top-24 -left-24 size-72 animate-orbit rounded-full bg-[#7FAFE6]/25 blur-2xl motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-24 size-72 animate-orbit-slow rounded-full bg-[#BFD8F5]/20 blur-2xl motion-reduce:animate-none" />

          {/* Title */}
          <h2
            id="cta-heading"
            className="relative z-10 mx-auto max-w-3xl text-3xl font-black tracking-tight leading-[1.1] sm:text-4xl lg:text-5xl"
          >
            {TITLE}
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base font-medium text-[#BFD8F5] sm:text-lg leading-relaxed">
            {SUBTITLE}
          </p>

          {/* Action Buttons */}
          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            
            {/* Primary Button */}
            <Link
              href="/contact"
              className="group/btn relative inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-white px-8 py-3 font-black text-[#061330] shadow-[5px_5px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:bg-[#BFD8F5] hover:shadow-[8px_8px_0_#7FAFE6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:shadow-none"
            >
              <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-black/10 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
              <span className="relative">Book a Free Consultation</span>
              <span className={`relative grid size-8 place-items-center rounded-full bg-[#061330] text-[#E8F1FC] transition-transform duration-300 ${EASE} group-hover/btn:translate-x-1 group-hover/btn:scale-110`}>
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/services"
              className="group/btn2 relative inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#E8F1FC] bg-transparent px-8 py-3 font-black text-[#E8F1FC] shadow-[5px_5px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-[8px_8px_0_#7FAFE6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:shadow-none"
            >
              <span className="relative">Explore Our Wholesale Services</span>
              <span className={`relative grid size-8 place-items-center rounded-full bg-[#7FAFE6] text-[#061330] transition-transform duration-300 ${EASE} group-hover/btn2:translate-x-1 group-hover/btn2:scale-110`}>
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </Link>

          </div>

          {/* Footer Text */}
          <p className="relative z-10 mx-auto mt-12 max-w-2xl text-xs sm:text-sm font-medium text-[#E8F1FC]/70 border-t border-white/10 pt-6">
            {FOOTER_TEXT}
          </p>

        </div>

      </div>
    </section>
  )
}