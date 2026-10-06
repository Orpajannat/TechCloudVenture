'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, UserCheck, Briefcase, Layers, ArrowRight, ShieldCheck, Headphones } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'How This Service Works (Clear & Simple)'
const YOU_PROVIDE_TITLE = 'You provide'
const WE_HANDLE_TITLE = 'We handle'

const youProvideItems = [
  'Brand or distributor name',
  'Basic business & Amazon store details',
]

const weHandleItems = [
  'Authorized reseller approval setup',
  'Professional reseller application preparation',
  'Brand/distributor communication & follow-up',
  'Approval support until completion',
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

export default function HowThisServiceWorksSection() {
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
      aria-labelledby="how-it-works-heading"
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
            <span>Workflow</span>
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
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Two Column Content Grid */}
        <div
          ref={contentRef}
          className={`${popContent} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Left Column: You Provide & We Handle */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* You Provide Box */}
            <div className="rounded-[32px] border-3 border-[#061330] bg-white p-6 sm:p-8 shadow-[8px_8px_0_#061330] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid size-10 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330]">
                  <UserCheck size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-[#0F2F6E] uppercase tracking-wide">{YOU_PROVIDE_TITLE}</h3>
              </div>

              <ul className="space-y-3">
                {youProvideItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="group/item flex items-center gap-3 rounded-2xl border-2 border-[#061330] bg-[#EEF4FC] px-4 py-3 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:bg-[#061330] hover:text-white"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#7FAFE6] text-[#061330] group-hover/item:bg-white group-hover/item:text-[#061330]">
                      <CheckCircle2 size={16} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We Handle Box */}
            <div className="rounded-[32px] border-3 border-[#061330] bg-[#061330] p-6 sm:p-8 text-[#E8F1FC] shadow-[8px_8px_0_#0F2F6E] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid size-10 place-items-center rounded-full border-2 border-[#061330] bg-[#7FAFE6] text-[#061330] shadow-[2px_2px_0_#061330]">
                  <Briefcase size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">{WE_HANDLE_TITLE}</h3>
              </div>

              <ul className="space-y-3">
                {weHandleItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="group/item flex items-center gap-3 rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] px-4 py-3 text-sm font-bold text-[#E8F1FC] shadow-[3px_3px_0_#7FAFE6] transition-all duration-300 hover:bg-white hover:text-[#061330]"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] group-hover/item:bg-[#061330] group-hover/item:text-white">
                      <CheckCircle2 size={16} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Visual Graphic / Feature Highlight */}
          <div className="lg:col-span-5 relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[40px] bg-linear-to-tr from-[#7FAFE6] to-[#0F2F6E] opacity-30 blur-2xl" />

            <div className="relative rounded-[36px] border-3 border-[#061330] bg-white p-6 sm:p-8 text-[#061330] shadow-[10px_10px_0_#061330]">
              <div className="flex items-center justify-between mb-6 border-b-2 border-[#061330]/10 pb-4">
                <span className="rounded-full bg-[#BFD8F5] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#061330] border border-[#061330]">
                  Process Flow
                </span>
                <span className="size-3 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border-2 border-[#061330] bg-[#EEF4FC] p-4 shadow-[4px_4px_0_#061330]">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-[#061330] bg-[#0F2F6E] text-white">
                    <ShieldCheck size={24} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-[#0F2F6E]">100% Transparent</h4>
                    <p className="text-xs font-medium text-[#061330]/70">Structured step-by-step guidance from start to finish.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] p-4 shadow-[4px_4px_0_#061330]">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-[#061330] bg-white text-[#061330]">
                    <Headphones size={24} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-[#061330]">Dedicated Support</h4>
                    <p className="text-xs font-medium text-[#061330]/80">Communication and follow-up managed by experts.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-[#061330] bg-[#061330] p-4 text-center text-white font-black text-sm shadow-[4px_4px_0_#7FAFE6]">
                Seamless & Stress-Free Execution
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}