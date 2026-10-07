'use client'

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import { FileSpreadsheet, Layers, Headphones, ArrowRight, Sparkles } from 'lucide-react'

/*
  Palette (matching your design)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Custom Pricing'
const SUBTITLE = 'Bulk Listing Management'
const SUB_HEADING = 'Custom package is based on:'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const customFeatures = [
  { text: 'Flat file management', icon: FileSpreadsheet },
  { text: 'Large catalogs', icon: Layers },
  { text: 'Ongoing listing support', icon: Headphones },
]

export default function CustomPricingSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Reveal on scroll + live pointer parallax (CSS variables, no re-renders)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let visible = false

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (entry.isIntersecting) setSeen(true)
    }, { threshold: 0.15 })
    io.observe(el)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => io.disconnect()
    }

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
          tx = Math.sin(t / 2600) * 0.5
          ty = Math.cos(t / 3400) * 0.5
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

  const pop = seen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="custom-pricing-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop pattern & ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(232,241,252,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#2B5BB8]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#1B4596]/60 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="custom-pricing-heading"
            className="text-3xl leading-[1.1] font-black tracking-tight [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className={`${pop} mt-3 flex items-center justify-center gap-2 text-lg font-bold text-[#BFD8F5] motion-reduce:animate-none`} style={{ animationDelay: '300ms' }}>
            <Sparkles className="size-5" />
            {SUBTITLE}
          </p>
        </div>

        {/* ---------- Main Interactive Container Card ---------- */}
        <div
          className={`${pop} mx-auto mt-12 max-w-5xl rounded-3xl border-2 border-[#061330] bg-[#E8F1FC] p-8 text-[#061330] shadow-[10px_10px_0_#061330] [translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)] transition-all duration-500 ${EASE} hover:-translate-y-1 hover:shadow-[14px_14px_0_#7FAFE6] motion-reduce:animate-none sm:p-12 lg:p-16`}
          style={{ animationDelay: '500ms' }}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-xl font-black tracking-tight text-[#0F2F6E] sm:text-2xl">
              {SUB_HEADING}
            </h3>

            {/* Feature Badges List */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {customFeatures.map(({ text, icon: Icon }, idx) => (
                <div
                  key={text}
                  className="group flex items-center gap-3 rounded-2xl border-2 border-[#061330] bg-white px-5 py-3.5 shadow-[4px_4px_0_#061330] transition-all duration-300 hover:-translate-y-1 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6]"
                  style={{ animationDelay: `${700 + idx * 150}ms` }}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="size-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-bold sm:text-base">{text}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="mt-10 sm:mt-12">
              <Link href="/contact?service=product-listing-management&package=custom#contact"
                className="group relative inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-[#061330] bg-[#061330] px-8 py-4 text-center text-base font-black text-[#E8F1FC] shadow-[5px_5px_0_#7FAFE6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:shadow-[8px_8px_0_#7FAFE6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#061330] sm:text-lg"
              >
                <span>Request Custom Package</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}