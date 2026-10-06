'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  BadgeCheck,
  Check,
  DollarSign,
  Layers,
  ListOrdered,
  Store,
  Target,
} from 'lucide-react'

/*
  Palette (same as the previous sections)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'How This Service Works (Clear & Simple)'
const SUBTITLE_TAG = 'Simple 3-Step Process'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const steps = [
  {
    step: '01',
    title: 'Client Provides',
    desc: 'Share your brand name OR distributor name along with your price sheet, target budget, and desired ROI.',
    icon: Layers,
    tone: 'bg-[#E8F1FC]',
  },
  {
    step: '02',
    title: 'Our Team Analyzes',
    desc: 'We filter products for high demand, low competition, stable buy box history, and exact profit margins.',
    icon: Target,
    tone: 'bg-[#BFD8F5]',
  },
  {
    step: '03',
    title: 'Actionable Delivery',
    desc: 'Receive clean, detailed product research reports with winning ASINs ready for wholesale purchasing.',
    icon: BadgeCheck,
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

export default function HowItWorksSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [stepsRef, stepsSeen] = useInView(0.1)
  const [visualRef, visualSeen] = useInView(0.1)

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
  const popSteps = stepsSeen ? 'animate-pop' : 'opacity-0'
  const popVisual = visualSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="how-it-works-heading"
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
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#7FAFE6]/30 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -left-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#BFD8F5]/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6]" />
            {SUBTITLE_TAG}
          </div>

          <h2
            id="how-it-works-heading"
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
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid items-center gap-14 sm:mt-20 lg:grid-cols-12 lg:gap-10">
          
          {/* Steps List */}
          <div ref={stepsRef} className="space-y-5 lg:col-span-6 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
            {steps.map(({ step, title, desc, icon: Icon, tone }, i) => (
              <div
                key={step}
                className={`${popSteps} motion-reduce:animate-none`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div
                  className={`${tone} group flex cursor-default items-start gap-4 rounded-3xl border-2 border-[#061330] p-5 shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:shadow-[8px_8px_0_#7FAFE6] sm:gap-6 sm:p-6`}
                >
                  <span className="relative grid size-12 shrink-0 place-items-center sm:size-14">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#061330]/40 motion-reduce:animate-none"
                    >
                      <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
                    </span>
                    <span
                      className={`grid size-full animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] text-sm font-black transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] motion-reduce:animate-none`}
                      style={{ animationDelay: `${i * 350}ms` }}
                    >
                      {step}
                    </span>
                  </span>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black tracking-tight text-[#0F2F6E] sm:text-xl">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#1B2F57] sm:text-base">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual / Illustration Card */}
          <div ref={visualRef} className="lg:col-span-6" aria-hidden="true">
            <div className="relative mx-auto w-full max-w-xl [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] lg:max-w-none">
              
              {/* Rings */}
              <div className="absolute -inset-[8%] -z-10 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/30 motion-reduce:animate-none">
                <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
                <span className="absolute right-[8%] bottom-[14%] size-3 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
              </div>
              <div className="absolute -inset-[3%] -z-10 animate-orbit rounded-full border-2 border-dotted border-[#0F2F6E]/25 motion-reduce:animate-none">
                <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#061330] bg-white" />
              </div>

              {/* Image card */}
              <div className={`${popVisual} motion-reduce:animate-none`} style={{ animationDelay: '200ms' }}>
                <div className={`group relative aspect-[8/7] rotate-1 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#E8F4FF] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#0F2F6E]`}>
                  <Image
                    src="/images/how-it-works.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Sticker */}
              <div
                className={`${popVisual} absolute -bottom-5 -right-1 [translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] motion-reduce:animate-none sm:-right-5`}
                style={{ animationDelay: '800ms' }}
              >
                <span className="inline-flex rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#BFD8F5] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#E8F1FC] motion-reduce:animate-none sm:text-base">
                  <ListOrdered size={18} strokeWidth={2.2} />
                  Seamless workflow
                </span>
              </div>

              {/* Stamp */}
              <div
                className={`${popVisual} absolute -top-6 -left-2 size-24 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-left-5 sm:size-28 lg:size-32`}
                style={{ animationDelay: '1000ms' }}
              >
                <div className={`relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:-rotate-12 hover:scale-110 hover:bg-[#061330]`}>
                  <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                    <defs>
                      <path id="how-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                    </defs>
                    <text fontSize="10.5" fontWeight="800" fill="currentColor">
                      <textPath href="#how-stamp-path" textLength="214" lengthAdjust="spacing">
                        Clear & Simple ✦ Clear & Simple ✦
                      </textPath>
                    </text>
                  </svg>
                  <Target className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}