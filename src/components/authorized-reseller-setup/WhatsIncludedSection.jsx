'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ShieldCheck, FileText, Mail, Award, ArrowRight, RefreshCw } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TITLE = "What's Included"

const includedItems = [
  {
    title: 'Authorized reseller approval support',
    icon: ShieldCheck,
  },
  {
    title: 'Professional reseller application setup',
    icon: FileText,
  },
  {
    title: 'Business-ready email communication',
    icon: Mail,
  },
  {
    title: 'LOA (Letter of Authorization) guidance',
    icon: Award,
  },
  {
    title: 'Invoice & Amazon compliance guidance',
    icon: CheckCircle2,
  },
  {
    title: 'Approval process follow-up',
    icon: RefreshCw,
  },
]

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

export default function WhatsIncludedSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [contentRef, contentSeen] = useInView(0.1)

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
  const popContent = contentSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="whats-included-heading"
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
      <div aria-hidden="true" className="absolute top-1/3 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/3 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
            <span>Package Breakdown</span>
          </div>

          <h2
            id="whats-included-heading"
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

        {/* Two Column Layout: Left Graphic Showcase, Right Feature Checklist Cards */}
        <div
          ref={contentRef}
          className={`${popContent} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          
          {/* Left Column: Interactive Feature Graphic / Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[45px] bg-linear-to-tr from-[#7FAFE6] to-[#0F2F6E] opacity-30 blur-2xl" />

            <div className="relative rounded-[36px] border-3 border-[#061330] bg-[#061330] p-8 text-[#E8F1FC] shadow-[10px_10px_0_#0F2F6E] transition-all duration-500 hover:shadow-[14px_14px_0_#7FAFE6]">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="rounded-full bg-[#7FAFE6] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#061330]">
                  Full Suite
                </span>
                <span className="size-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight leading-snug mb-4">
                Everything You Need to Get Approved & Selling
              </h3>

              <p className="text-sm font-medium text-[#BFD8F5] leading-relaxed mb-8">
                Our comprehensive reseller setup service takes care of the complex paperwork, compliance guidelines, and vendor communication so you can focus on scaling.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] p-4 text-white shadow-[4px_4px_0_#7FAFE6]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] font-black text-xs">✓</span>
                  <span className="text-sm font-extrabold">End-to-End Managed Service</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border-2 border-[#061330] bg-white p-4 text-[#061330] shadow-[4px_4px_0_#061330]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#0F2F6E] text-[#BFD8F5] font-black text-xs">✓</span>
                  <span className="text-sm font-extrabold">Amazon Policy Compliant</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: List of What's Included Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedItems.map(({ title, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border-3 border-[#061330] bg-white p-6 shadow-[5px_5px_0_#061330] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#061330] hover:text-white hover:shadow-[8px_8px_0_#7FAFE6]"
                style={{ animationDelay: `${300 + idx * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="grid size-12 place-items-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-[#7FAFE6]">
                    <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                  </div>
                  <span className="grid size-7 place-items-center rounded-full bg-[#EEF4FC] text-[#061330] group-hover:bg-white group-hover:text-[#061330]">
                    <CheckCircle2 size={16} strokeWidth={3} aria-hidden="true" />
                  </span>
                </div>

                <h4 className="text-base font-black tracking-tight text-[#0F2F6E] group-hover:text-white leading-snug">
                  {title}
                </h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}