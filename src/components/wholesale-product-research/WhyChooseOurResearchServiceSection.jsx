'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, DollarSign, LineChart, ShieldCheck, TrendingUp, Users } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Why Choose Our Research Service?'
const SUBTITLE_TAG = 'Our Advantages'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const features = [
  {
    title: 'Wholesale-focused (not private label logic)',
    icon: Users,
    pillColor: 'bg-white text-[#0F2F6E]',
    orbitColor: 'from-[#7FAFE6] to-[#0F2F6E]',
  },
  {
    title: 'Real data, no guesswork',
    icon: LineChart,
    pillColor: 'bg-[#BFD8F5] text-[#061330]',
    orbitColor: 'from-white to-[#7FAFE6]',
  },
  {
    title: 'Compliance & risk-aware analysis',
    icon: ShieldCheck,
    pillColor: 'bg-white text-[#0F2F6E]',
    orbitColor: 'from-[#BFD8F5] to-[#061330]',
  },
  {
    title: 'Products selected based on your budget & goal',
    icon: DollarSign,
    pillColor: 'bg-[#BFD8F5] text-[#061330]',
    orbitColor: 'from-white to-[#0F2F6E]',
  },
  {
    title: 'Clear reasoning behind every product',
    icon: TrendingUp,
    pillColor: 'bg-white text-[#0F2F6E]',
    orbitColor: 'from-[#7FAFE6] to-[#BFD8F5]',
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

export default function WhyChooseOurResearchServiceSection() {
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
          tx = Math.sin(t / 2600) * 0.8
          ty = Math.cos(t / 3400) * 0.8
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
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-20 text-[#061330] sm:py-28 lg:py-36"
    >
      {/* Crazy Background Animation Orbs & Floating Geometric Shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.2) 2px, transparent 2px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div aria-hidden="true" className="absolute top-10 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-60px)_calc(var(--my,0)*-60px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-10 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[850px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-4 border-dashed border-[#0F2F6E]/20 motion-reduce:animate-none" />
      
      {/* Floating abstract decorative shapes behind the cards */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 -z-10 size-24 animate-bounce rounded-3xl bg-[#7FAFE6]/30 rotate-12 blur-sm motion-reduce:animate-none" style={{ animationDuration: '6s' }} />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 -z-10 size-32 animate-pulse rounded-full bg-[#0F2F6E]/10 blur-md motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
            {SUBTITLE_TAG}
          </div>

          <h2
            id="why-choose-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-6 hover:scale-125 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Dynamic Non-Rectangular Organic & Fluid Animated Cards Layout */}
        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]"
        >
          {features.map(({ title, icon: Icon, pillColor, orbitColor }, i) => (
            <div
              key={title}
              className={`${popGrid} group relative flex flex-col items-center motion-reduce:animate-none ${
                i === 3 ? 'sm:col-span-1 lg:col-span-1' : ''
              } ${i === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none' : ''}`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              {/* Backglow / Orbiting Blob Animation behind each item */}
              <div aria-hidden="true" className={`absolute -inset-3 rounded-full bg-linear-to-r ${orbitColor} opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-125 motion-reduce:hidden`} />

              {/* Unique Organic Pill / Fluid Morphing Container */}
              <div
                className={`relative flex h-full w-full cursor-default flex-col items-center justify-between rounded-[40px] sm:rounded-[50px] border-3 border-[#061330] p-7 text-center shadow-[6px_6px_0_#061330] transition-all duration-500 ${EASE} hover:-translate-y-3 hover:scale-105 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[12px_12px_0_#7FAFE6] ${pillColor} ${
                  i % 2 === 0 ? 'hover:-rotate-3 hover:skew-x-1' : 'hover:rotate-3 hover:-skew-x-1'
                }`}
              >
                {/* Floating particle accent inside card */}
                <span aria-hidden="true" className="absolute top-4 right-5 size-3 rounded-full bg-[#7FAFE6] opacity-60 transition-transform duration-500 group-hover:scale-150 group-hover:bg-[#BFD8F5]" />

                {/* Animated Icon Orb */}
                <div className="relative mb-6 mt-2 grid size-16 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[3px_3px_0_#061330] transition-all duration-700 ${EASE} group-hover:rotate-[720deg] group-hover:scale-125 group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330]">
                  <Icon className="size-8 transition-transform duration-300 group-hover:scale-0" strokeWidth={2.4} aria-hidden="true" />
                  <Check className="absolute size-8 scale-0 transition-transform duration-300 group-hover:scale-110" strokeWidth={3.5} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-base font-black tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#E8F1FC] sm:text-lg">
                  {title}
                </h3>

                {/* Decorative Bottom Pill Indicator */}
                <div className="mt-6 h-2 w-12 rounded-full bg-[#061330]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#7FAFE6]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}