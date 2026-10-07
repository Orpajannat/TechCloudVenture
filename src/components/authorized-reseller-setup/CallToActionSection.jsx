'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, MessageCircle, Compass } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const HEADING = 'Have a brand or distributor?'
const SUBTITLE = "Share the name—we'll handle your authorized reseller approval."
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

export default function CallToActionSection() {
  const ref = useRef(null)
  const [bannerRef, bannerSeen] = useInView()

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

  const popBanner = bannerSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="cta-heading"
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
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-1/4 bottom-1/4 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div
          ref={bannerRef}
          className={`${popBanner} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] relative overflow-hidden rounded-[40px] border-3 border-[#061330] bg-[#061330] px-6 py-16 text-center text-white shadow-[12px_12px_0_#0F2F6E] transition-all duration-500 hover:shadow-[16px_16px_0_#7FAFE6] sm:px-12 sm:py-20 lg:px-20 motion-reduce:animate-none`}
        >
          {/* Subtle Accent Glow Inside Banner */}
          <div aria-hidden="true" className="absolute -top-24 -left-24 size-96 rounded-full bg-[#7FAFE6]/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-24 size-96 rounded-full bg-[#BFD8F5]/20 blur-3xl" />

          {/* Small Top Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#BFD8F5] backdrop-blur-md">
            <Sparkles size={14} className="text-[#7FAFE6]" />
            <span>Ready to Scale?</span>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            aria-label={HEADING}
            className="text-3xl leading-[1.1] font-black tracking-tight text-white sm:text-4xl lg:text-5xl mb-4"
          >
            {HEADING.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5]`}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg font-medium text-[#BFD8F5] mb-10 leading-relaxed">
            {SUBTITLE}
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Primary Action Button */}
            <Link
              href="/our-story#book-call"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white bg-white px-8 py-4 text-center font-black text-[#061330] shadow-[5px_5px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:bg-[#BFD8F5] hover:shadow-[8px_8px_0_#7FAFE6] active:translate-y-0 active:shadow-none"
            >
              <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#061330]/10 transition-transform duration-700 group-hover:translate-x-[420%]" />
              <MessageCircle size={18} strokeWidth={2.5} className="text-[#0F2F6E]" />
              <span className="relative">Book a Free Consultation</span>
              <span className="relative grid size-7 place-items-center rounded-full bg-[#061330] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="/wholesale-services-for-sellers"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-center font-black text-white shadow-[5px_5px_0_#0F2F6E] transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-[8px_8px_0_#7FAFE6] active:translate-y-0 active:shadow-none"
            >
              <Compass size={18} strokeWidth={2.5} className="text-[#BFD8F5]" />
              <span className="relative">Explore Our Wholesale Services</span>
              <span className="relative grid size-7 place-items-center rounded-full bg-white text-[#061330] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}