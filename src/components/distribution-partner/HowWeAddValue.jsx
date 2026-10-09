'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

// Brand partnership, compliance, and marketplace growth illustration.
const IMAGE_SRC = '/images/brand-value-partnership.webp'

const points = [
  'Brand-approved distributor setup',
  'Authorized reseller onboarding through our seller network',
  'Listing compliance and marketplace optimization',
  'MAP policy awareness and seller discipline',
  'Transparent reporting and communication',
]

const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

export default function HowWeAddValue() {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const [inView, setInView] = useState(false)
  const [state, setState] = useState({
    fracs: points.map(() => 0),
    active: points.map(() => false),
    revealed: -1,
  })

  // Entrance for heading and image
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Scroll-linked: reveal rows, fill the track, light up the nodes
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const line = vh * 0.6
      let revealed = -1
      const fracs = []
      const active = []
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const b = el.getBoundingClientRect()
        if (b.top < vh * 0.9) revealed = i
        const nodeY = b.top + 36 // node centre sits 36px below the row top
        active[i] = line >= nodeY
        fracs[i] = clamp((line - nodeY) / b.height, 0, 1)
      })
      setState((prev) => ({ fracs, active, revealed: Math.max(prev.revealed, revealed) }))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-16 text-[#0b1b4d] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes hv-up    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes hv-left  { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:none } }
        @keyframes hv-float { 0%,100% { transform:translateY(0) rotate(0) } 50% { transform:translateY(-12px) rotate(3deg) } }
        .hv-off   { opacity:0 }
        .hv-up    { animation: hv-up .8s cubic-bezier(.22,1,.36,1) both }
        .hv-left  { animation: hv-left .9s cubic-bezier(.22,1,.36,1) both }
        .hv-float { animation: hv-float 7s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .hv-up,.hv-left,.hv-float { animation:none; opacity:1; transform:none }
          .hv-row, .hv-row *, .hv-frame, .hv-frame * { transition:none !important }
        }
      `}</style>

      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-start px-4 sm:px-6 lg:px-8 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image: framed, with a floating blob and corner brackets */}
        <div className={`relative min-w-0 lg:sticky lg:top-24 ${inView ? 'hv-left' : 'hv-off'}`}>
          <span aria-hidden="true" className="hv-float absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sky-200/70 blur-2xl sm:h-44 sm:w-44" />
          <span aria-hidden="true" className="hv-float absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-amber-200/70 blur-2xl" style={{ animationDelay: '-3s' }} />

          <div className="hv-frame group relative aspect-[2/1] w-full overflow-hidden rounded-3xl border border-[#0b1b4d]/10 bg-sky-50 shadow-[0_20px_50px_rgba(11,27,77,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(11,27,77,0.2)]">
            <Image
              src={IMAGE_SRC}
              alt="Illustration of a partnership handshake, storefront, compliance checklist, and marketplace growth chart"
              fill
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 128px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Corner brackets */}
            {['left-3 top-3 border-l-2 border-t-2', 'right-3 top-3 border-r-2 border-t-2', 'bottom-3 left-3 border-b-2 border-l-2', 'bottom-3 right-3 border-b-2 border-r-2'].map((c) => (
              <span key={c} aria-hidden="true" className={`absolute h-6 w-6 rounded-sm border-[#0b1b4d]/40 transition-all duration-500 group-hover:h-9 group-hover:w-9 group-hover:border-[#0b1b4d] ${c}`} />
            ))}
          </div>
        </div>

        {/* Heading + scroll-driven track */}
        <div className="min-w-0">
          <h2 style={{ animationDelay: '150ms' }} className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${inView ? 'hv-up' : 'hv-off'}`}>
            How We Add Value for Brands
          </h2>

          <ul className="mt-10">
            {points.map((text, i) => {
              const shown = state.revealed >= i
              const on = state.active[i]
              return (
                <li
                  key={text}
                  ref={(el) => (itemRefs.current[i] = el)}
                  style={{ transitionDelay: shown ? '0ms' : '0ms' }}
                  className={`relative transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${shown ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                >
                  {/* Track segment from this node to the next; fills as you scroll */}
                  {i < points.length - 1 && (
                    <span aria-hidden="true" className="absolute left-5 top-9 h-full w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-sky-200">
                      <span className="block h-full w-full origin-top bg-[#0b1b4d]" style={{ transform: `scaleY(${state.fracs[i] ?? 0})` }} />
                    </span>
                  )}

                  <div className="hv-row group flex min-w-0 items-start gap-3 sm:gap-5 rounded-2xl py-4 pr-4 transition-colors duration-300 hover:bg-sky-50">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:scale-110 ${
                        on ? 'border-[#0b1b4d] bg-[#0b1b4d] text-white' : 'border-sky-300 bg-white text-transparent'
                      }`}
                    >
                      <Check className={`h-5 w-5 transition-transform duration-500 ${on ? 'scale-100' : 'scale-0'}`} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <p className="min-w-0 flex-1 wrap-break-word pt-1.5 text-lg font-medium leading-snug transition-transform duration-300 group-hover:translate-x-1.5 sm:text-xl">{text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
