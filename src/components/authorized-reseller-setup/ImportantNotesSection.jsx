'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, TrendingUp, BarChart3, DollarSign, Check, AlertCircle } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Important Notes'
const SUBTITLE_TAG = 'Please Note'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const notes = [
  {
    title: 'Client must provide the brand or distributor name',
    icon: Users,
    tone: 'bg-white',
  },
  {
    title: 'Final approval decision depends on the brand/distributor',
    icon: TrendingUp,
    tone: 'bg-[#BFD8F5]',
  },
  {
    title: 'Inventory purchase is not included',
    icon: BarChart3,
    tone: 'bg-white',
  },
  {
    title: 'Fully ethical and Amazon policy-compliant process',
    icon: DollarSign,
    tone: 'bg-[#BFD8F5]',
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

export default function ImportantNotesSection() {
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
      aria-labelledby="important-notes-heading"
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
      <div aria-hidden="true" className="absolute top-10 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-10 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
            <span>{SUBTITLE_TAG}</span>
          </div>

          <h2
            id="important-notes-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
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

        {/* Dynamic Non-Rectangular Organic Cards Grid */}
        <div
          ref={gridRef}
          className={`${popGrid} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {notes.map(({ title, icon: Icon, tone }, i) => (
            <div
              key={title}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              {/* Backglow Blob Animation */}
              <div aria-hidden="true" className="absolute -inset-2 rounded-[40px] bg-linear-to-r from-[#7FAFE6] to-[#0F2F6E] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-110 motion-reduce:hidden" />

              {/* Organic Fluid Card Container */}
              <div
                className={`${tone} relative flex h-full w-full cursor-default flex-col items-center justify-between rounded-[36px] border-3 border-[#061330] p-7 text-center shadow-[6px_6px_0_#061330] transition-all duration-500 ${EASE} hover:-translate-y-2 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[10px_10px_0_#7FAFE6] ${
                  i % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'
                }`}
              >
                {/* Icon Orb */}
                <div className="relative mb-6 grid size-16 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[3px_3px_0_#061330] transition-all duration-700 ${EASE} group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330]">
                  <Icon className="size-8 transition-transform duration-300 group-hover:scale-0" strokeWidth={2.4} aria-hidden="true" />
                  <Check className="absolute size-8 scale-0 transition-transform duration-300 group-hover:scale-110" strokeWidth={3.5} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-base font-black tracking-tight leading-snug text-[#0F2F6E] transition-colors duration-300 group-hover:text-[#E8F1FC]">
                  {title}
                </h3>

                {/* Bottom Decorative Pill */}
                <div className="mt-6 h-1.5 w-10 rounded-full bg-[#061330]/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#7FAFE6]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}