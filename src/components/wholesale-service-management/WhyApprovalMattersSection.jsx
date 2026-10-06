'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, ShieldCheck, RefreshCw, BarChart3, Layers, Truck, LineChart, FileCheck2 } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Why Brand Approval Matters'
const SUBTITLE = 'We provide complete Amazon store management, including:'
const FOOTER_NOTE = '(All services are delivered following Amazon’s official seller guidelines.)'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const reasons = [
  { text: 'Wholesale product research & selection', icon: Search, tone: 'bg-[#E8F1FC]', tilt: '-rotate-2' },
  { text: 'Brand approval support', icon: ShieldCheck, tone: 'bg-[#BFD8F5]', tilt: 'rotate-1' },
  { text: 'Inventory planning & stock control', icon: RefreshCw, tone: 'bg-[#7FAFE6]', tilt: '-rotate-1' },
  { text: 'Competitor & market analysis', icon: BarChart3, tone: 'bg-[#E8F1FC]', tilt: 'rotate-2' },
  { text: 'Listing management & optimization', icon: Layers, tone: 'bg-[#BFD8F5]', tilt: 'rotate-1' },
  { text: 'Fulfillment & operational support', icon: Truck, tone: 'bg-[#7FAFE6]', tilt: '-rotate-2' },
  { text: 'Performance tracking & reporting', icon: LineChart, tone: 'bg-[#E8F1FC]', tilt: '-rotate-1' },
  { text: 'Account health & Amazon policy compliance', icon: FileCheck2, tone: 'bg-[#BFD8F5]', tilt: 'rotate-2' },
]

// Parallax depth per card (literal classes so Tailwind can see them)
const depth = [
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
]

export default function WhyApprovalMattersSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

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

  const pop = seen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="approval-matters-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
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
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[1040px]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border-2 border-dotted border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[640px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="approval-matters-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
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
          <p
            className={`${pop} mt-4 text-base font-medium text-[#BFD8F5] sm:text-lg motion-reduce:animate-none`}
            style={{ animationDelay: '400ms' }}
          >
            {SUBTITLE}
          </p>
        </div>

        {/* ---------- Cards (icon badge pokes out of the top edge) ---------- */}
        <ul className="mt-16 grid gap-x-5 gap-y-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ text, icon: Icon, tone, tilt }, i) => (
            <li
              key={text}
              className={`${pop} ${depth[i]} relative mx-auto w-full max-w-sm motion-reduce:animate-none sm:max-w-none`}
              style={{ animationDelay: `${600 + i * 150}ms` }}
            >
              <div className={`${tilt} h-full transition-transform duration-500 ${EASE} hover:-translate-y-2 hover:rotate-0`}>
                <div
                  className={`${tone} group relative flex h-full cursor-default flex-col items-center rounded-3xl border-2 border-[#061330] px-5 pt-14 pb-8 text-center text-[#061330] shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:scale-105 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[8px_8px_0_#7FAFE6]`}
                >
                  {/* Badge with its own orbit */}
                  <div className={`absolute -top-10 left-1/2 grid size-[4.5rem] -translate-x-1/2 place-items-center transition-transform duration-500 ${EASE} group-hover:-translate-y-2`}>
                    <span
                      aria-hidden="true"
                      className="absolute -inset-2 animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/60 motion-reduce:animate-none"
                    >
                      <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
                    </span>
                    <span
                      className={`grid size-[4.5rem] animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[3px_3px_0_#061330] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330] motion-reduce:animate-none`}
                      style={{ animationDelay: `${i * 350}ms` }}
                    >
                      <Icon size={30} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="text-lg leading-snug font-black tracking-tight text-balance">{text}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* ---------- Footer note ---------- */}
        <div
          className={`${pop} mt-14 flex justify-center [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] motion-reduce:animate-none sm:mt-16`}
          style={{ animationDelay: '1300ms' }}
        >
          <p className="text-center text-sm font-medium text-[#BFD8F5] sm:text-base">
            {FOOTER_NOTE}
          </p>
        </div>
      </div>
    </section>
  )
}