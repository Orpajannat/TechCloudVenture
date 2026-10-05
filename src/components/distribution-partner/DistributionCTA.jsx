'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BadgeCheck } from 'lucide-react'

const HEADING = 'Let’s Build a Strong U.S. Distribution Network'
const slabs = ['Amazon', 'Walmart', 'eBay'] // bottom to top

export default function DistributionCTA() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [spread, setSpread] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const words = HEADING.split(' ')

  return (
    <section ref={ref} className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <style>{`
        @keyframes cta-word  { from { transform:translateY(110%) } to { transform:none } }
        @keyframes cta-up    { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
        @keyframes cta-drop  { 0% { opacity:0; transform:translateY(-120px) } 70% { opacity:1; transform:translateY(8px) } 100% { opacity:1; transform:none } }
        @keyframes cta-float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-10px) } }
        @keyframes cta-shine { 0% { transform:translateX(-120%) skewX(-20deg) } 60%,100% { transform:translateX(320%) skewX(-20deg) } }
        @keyframes cta-glow  { 0%,100% { opacity:.35; transform:scale(1) } 50% { opacity:.6; transform:scale(1.15) } }
        .cta-off   { opacity:0 }
        .cta-word  { animation: cta-word .8s cubic-bezier(.22,1,.36,1) both }
        .cta-up    { animation: cta-up .8s cubic-bezier(.22,1,.36,1) both }
        .cta-drop  { animation: cta-drop .9s cubic-bezier(.34,1.3,.5,1) both }
        .cta-float { animation: cta-float 6s ease-in-out infinite }
        .cta-shine { animation: cta-shine 3.4s ease-in-out infinite }
        .cta-glow  { animation: cta-glow 8s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .cta-word,.cta-up,.cta-drop,.cta-float,.cta-shine,.cta-glow { animation:none; opacity:1; transform:none }
          .cta-btn, .cta-btn *, .cta-slab { transition:none !important }
        }
      `}</style>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-500 via-blue-600 to-[#0b2a7a] px-6 py-12 text-white shadow-[0_30px_70px_rgba(11,42,122,0.35)] sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-20">
        {/* Glows */}
        <span aria-hidden="true" className="cta-glow pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
        <span aria-hidden="true" className="cta-glow pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" style={{ animationDelay: '-4s' }} />

        {/* Copy */}
        <div className="relative lg:col-span-7">
          <h2 aria-label={HEADING} className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            {words.map((w, i) => (
              <span key={i} aria-hidden="true" className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <span className={`inline-block ${inView ? 'cta-word' : 'cta-off'}`} style={{ animationDelay: `${i * 90}ms` }}>
                  {w}
                </span>
              </span>
            ))}
          </h2>

          <p style={{ animationDelay: '700ms' }} className={`mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg ${inView ? 'cta-up' : 'cta-off'}`}>
            If you are a brand looking to expand across Amazon, Walmart, or eBay through a controlled and compliant distributor system, Tech Cloud DS is ready to partner with you.
          </p>

          <div style={{ animationDelay: '900ms' }} className={`mt-8 ${inView ? 'cta-up' : 'cta-off'}`}>
            <a
              href="#contact"
              onMouseEnter={() => setSpread(true)}
              onMouseLeave={() => setSpread(false)}
              onFocus={() => setSpread(true)}
              onBlur={() => setSpread(false)}
              className="cta-btn group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-7 py-4 text-base font-semibold text-[#0b1b4d] shadow-[0_12px_30px_rgba(0,0,0,0.25)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] focus-visible:ring-4 focus-visible:ring-white/60 active:translate-y-0 active:scale-[0.98] sm:w-auto sm:text-lg"
            >
              {/* Shine sweep */}
              <span aria-hidden="true" className="cta-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-200/70 to-transparent" />
              <span className="relative">Book a Free Consultation</span>
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#0b1b4d] text-white transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Stack of marketplaces being "built"; spreads apart when the button is hovered */}
        <div aria-hidden="true" className="relative mx-auto h-56 w-full max-w-xs sm:h-64 sm:max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="cta-float absolute inset-0">
            {slabs.map((name, i) => {
              const lift = i * (spread ? 78 : 46)
              const shift = (i - 1) * (spread ? 14 : 8)
              return (
                <div
                  key={name}
                  className={`absolute bottom-4 left-1/2 w-[78%] -translate-x-1/2 ${inView ? 'cta-drop' : 'cta-off'}`}
                  style={{ animationDelay: `${1000 + i * 180}ms`, zIndex: i }}
                >
                  <div
                    className="cta-slab flex h-14 items-center gap-3 rounded-2xl bg-white px-5 text-[#0b1b4d] shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-[cubic-bezier(.34,1.3,.5,1)] sm:h-16"
                    style={{ transform: `translate(${shift}px, -${lift}px)` }}
                  >
                    <BadgeCheck className="h-6 w-6 shrink-0 text-sky-500" />
                    <span className="text-lg font-semibold sm:text-xl">{name}</span>
                    <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}