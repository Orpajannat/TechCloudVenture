'use client'

import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Search, TrendingDown, Lock, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TITLE = 'Our Brand Protection Services Include'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const services = [
  {
    title: 'Unauthorized Seller Identification',
    icon: Search,
    intro: 'We continuously monitor your listings to detect:',
    bullets: [
      'Unauthorized and unknown sellers',
      'Sellers lacking valid invoices or authorization',
      'Buy Box hijackers',
      'High-risk reseller behavior',
    ],
    outro: 'You receive actionable reports that clearly show who is selling your products and how.',
  },
  {
    title: 'MAP Policy Monitoring',
    icon: TrendingDown,
    intro: 'We help brands maintain pricing discipline by:',
    bullets: [
      'Tracking MAP violations',
      'Identifying price erosion patterns',
      'Supporting compliant enforcement actions',
    ],
    outro: 'This protects brand value and distributor confidence.',
  },
  {
    title: 'Seller Suppression Support',
    icon: ShieldAlert,
    intro: 'When violations occur, we assist with:',
    bullets: [
      'Evidence preparation',
      'Amazon-compliant reporting',
      'Strategic escalation guidance',
      'Brand Registry tool usage',
    ],
    outro: '⚠️ No risky or black-hat tactics—only Amazon-approved processes are followed.',
  },
  {
    title: 'Buy Box Control Strategy',
    icon: Lock,
    intro: 'We support Buy Box stability through:',
    bullets: [
      'Seller dominance analysis',
      'Pricing & fulfillment alignment',
      'Listing health optimization',
      'Authorized seller prioritization',
    ],
  },
  {
    title: 'Listing Hijack Removal',
    icon: ShieldCheck,
    intro: 'If listings are hijacked:',
    bullets: [
      'We document unauthorized edits',
      'Assist with Brand Registry claims',
      'Restore compliant listing content',
      'Prevent repeat hijacking',
    ],
  },
  {
    title: 'Compliance Documentation Support',
    icon: FileText,
    intro: 'We guide brands on:',
    bullets: [
      'Invoice requirements',
      'Authorization documentation',
      'Amazon compliance readiness',
      'Registry-aligned documentation',
    ],
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

export default function BrandProtectionServicesGrid() {
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
      aria-labelledby="brand-protection-services-heading"
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
      <div aria-hidden="true" className="absolute top-1/4 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/4 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2
            id="brand-protection-services-heading"
            aria-label={SECTION_TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {SECTION_TITLE.split(' ').map((word, i) => (
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

        {/* Grid of 6 Services Cards */}
        <div
          ref={gridRef}
          className={`${popGrid} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {services.map(({ title, icon: Icon, intro, bullets, outro }, idx) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-[36px] border-3 border-[#061330] bg-white p-8 shadow-[8px_8px_0_#061330] transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0_#7FAFE6]"
              style={{ animationDelay: `${300 + idx * 100}ms` }}
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="grid size-14 place-items-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[3px_3px_0_#061330] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-[#7FAFE6]">
                    <Icon size={26} strokeWidth={2.4} aria-hidden="true" />
                  </div>
                  <span className="grid size-8 place-items-center rounded-full bg-[#EEF4FC] text-[#061330] group-hover:bg-[#061330] group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} strokeWidth={3} aria-hidden="true" />
                  </span>
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#0F2F6E] leading-snug mb-4">
                  {title}
                </h3>

                {intro && (
                  <p className="text-sm font-extrabold text-[#061330] mb-3">
                    {intro}
                  </p>
                )}

                {/* Bullets List */}
                <ul className="space-y-2.5 mb-6">
                  {bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#0F2F6E]" />
                      <span className="text-xs sm:text-sm font-bold text-[#061330]/80 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {outro && (
                <div className="rounded-2xl border border-[#061330]/15 bg-[#EEF4FC] p-4 text-xs font-extrabold text-[#061330] leading-relaxed">
                  {outro}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}