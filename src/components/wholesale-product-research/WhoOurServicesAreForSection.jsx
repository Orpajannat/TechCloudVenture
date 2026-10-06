'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BadgeDollarSign,
  Check,
  CheckCircle2,
  DollarSign,
  LineChart,
  ListFilter,
  PackageCheck,
  ShieldCheck,
  Store,
  TrendingUp,
} from 'lucide-react'

/*
  Palette (matching the previous sections)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Who Our Wholesale Services Are For'
const SUBTITLE_TAG = 'Ideal Clients & Objectives'
const DESCRIPTION = 'If your goal is account safety, predictable growth, and long-term profitability, our wholesale services are built for you.'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const audienceItems = [
  {
    title: "Profitable product shortlisting from client's catalog",
    icon: ListFilter,
    tone: 'bg-white',
  },
  {
    title: 'ROI & profit margin calculation',
    icon: LineChart,
    tone: 'bg-[#BFD8F5]',
  },
  {
    title: 'Buy Box & seller dominance analysis',
    icon: TrendingUp,
    tone: 'bg-white',
  },
  {
    title: 'Sales demand & price stability check',
    icon: PackageCheck,
    tone: 'bg-[#BFD8F5]',
  },
  {
    title: 'Amazon presence & risk screening',
    icon: ShieldCheck,
    tone: 'bg-white',
  },
  {
    title: 'Category & ungating feasibility review',
    icon: Store,
    tone: 'bg-[#BFD8F5]',
  },
  {
    title: 'Final product list aligned with client budget',
    icon: BadgeDollarSign,
    tone: 'bg-white',
  },
]

// Pops a block when it scrolls into view
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

export default function WhoOurServicesAreForSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [gridRef, gridSeen] = useInView(0.1)

  // Live pointer parallax (CSS variables, no re-renders)
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
          tx = Math.sin(t / 2600) * 0.6
          ty = Math.cos(t / 3400) * 0.6
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
      aria-labelledby="who-services-heading"
      className="relative isolate overflow-hidden bg-[#EEF4FC] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.14) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#7FAFE6]/30 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#BFD8F5]/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6]" />
            {SUBTITLE_TAG}
          </div>

          <h2
            id="who-services-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <p
            className={`${popHeader} mx-auto mt-4 max-w-2xl text-base font-medium text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '300ms' }}
          >
            {DESCRIPTION}
          </p>
        </div>

        {/* Audience Grid matching source card layout */}
        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]"
        >
          {audienceItems.map(({ title, icon: Icon, tone }, i) => (
            <div
              key={title}
              className={`${popGrid} motion-reduce:animate-none ${i === 6 ? 'sm:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto lg:w-full' : ''}`}
              style={{ animationDelay: `${400 + i * 100}ms` }}
            >
              <div
                className={`${tone} group flex h-full cursor-default flex-col items-center justify-between rounded-3xl border-2 border-[#061330] p-6 text-center shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1.5 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[8px_8px_0_#7FAFE6] sm:p-8 ${i % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}`}
              >
                {/* Icon Container */}
                <div className="relative mb-6 grid size-14 place-items-center rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330] sm:size-16">
                  <Icon className="size-7 sm:size-8 transition-transform duration-300 group-hover:scale-0" strokeWidth={2.2} aria-hidden="true" />
                  <Check className="absolute size-7 sm:size-8 scale-0 transition-transform duration-300 group-hover:scale-100" strokeWidth={3.2} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold tracking-tight text-[#0F2F6E] transition-colors duration-300 group-hover:text-[#E8F1FC] sm:text-lg">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}