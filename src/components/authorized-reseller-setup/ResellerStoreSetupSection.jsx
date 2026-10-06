'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ShieldCheck, Store, Handshake, FileCheck, ArrowRight } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SUBTITLE_TAG = 'Reseller Store Setup Service'
const DESCRIPTION = 'If you already have a brand or distributor and want official approval to sell on Amazon, this service is for you.'
const BULLETS = [
  'You provide the brand or distributor name',
  'Our team handles the full authorized reseller approval process',
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

export default function ResellerStoreSetupSection() {
  const ref = useRef(null)
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

  const popContent = contentSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="reseller-setup-heading"
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
      <div aria-hidden="true" className="absolute top-10 left-10 -z-20 size-[420px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-10 -z-20 size-[480px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[850px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout Container */}
        <div
          ref={contentRef}
          className={`${popContent} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tag / Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[4px_4px_0_#061330]">
              <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
              <span>{SUBTITLE_TAG}</span>
              <span className="size-2 rounded-full bg-[#7FAFE6]" />
            </div>

            {/* Main Description */}
            <h2
              id="reseller-setup-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug text-[#0F2F6E]"
            >
              {DESCRIPTION}
            </h2>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4 w-full">
              {BULLETS.map((bullet, index) => (
                <li
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border-2 border-[#061330] bg-white p-5 shadow-[4px_4px_0_#061330] transition-all duration-300 hover:-translate-y-1 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6]"
                >
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                    <CheckCircle2 size={18} strokeWidth={2.8} aria-hidden="true" className="text-[#0F2F6E]" />
                  </span>
                  <span className="text-sm sm:text-base font-extrabold tracking-wide leading-snug">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Column: Dynamic Interactive Illustration Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Decorative Glow */}
            <div aria-hidden="true" className="absolute -inset-4 rounded-[45px] bg-linear-to-tr from-[#7FAFE6] to-[#0F2F6E] opacity-30 blur-2xl" />

            {/* Main Illustration Frame */}
            <div className="relative rounded-[36px] sm:rounded-[44px] border-3 border-[#061330] bg-[#061330] p-6 sm:p-8 text-[#E8F1FC] shadow-[10px_10px_0_#0F2F6E] transition-all duration-500 hover:shadow-[14px_14px_0_#7FAFE6]">
              
              {/* Top Bar simulating Amazon Authorized Reseller Portal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-400 border border-[#061330]" />
                  <span className="size-3 rounded-full bg-yellow-400 border border-[#061330]" />
                  <span className="size-3 rounded-full bg-green-400 border border-[#061330]" />
                </div>
                <div className="rounded-full bg-white/10 px-4 py-1 text-xs font-black tracking-widest text-[#BFD8F5]">
                  AMAZON AUTHORIZED RESELLER
                </div>
              </div>

              {/* Central Graphic Elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                
                {/* Card 1: Handshake & Approval */}
                <div className="group/card flex flex-col items-center justify-center rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] p-5 text-center shadow-[4px_4px_0_#7FAFE6] transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-3 grid size-12 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330] transition-transform duration-500 group-hover/card:rotate-12">
                    <Handshake size={24} strokeWidth={2.4} />
                  </div>
                  <span className="text-sm font-extrabold text-white">Full Approval Process</span>
                </div>

                {/* Card 2: Shield Verification */}
                <div className="group/card flex flex-col items-center justify-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] p-5 text-center text-[#061330] shadow-[4px_4px_0_#061330] transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-3 grid size-12 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[2px_2px_0_#061330] transition-transform duration-500 group-hover/card:-rotate-12">
                    <ShieldCheck size={24} strokeWidth={2.4} />
                  </div>
                  <span className="text-sm font-extrabold">Verified Compliance</span>
                </div>

              </div>

              {/* Bottom Checklist Banner */}
              <div className="flex items-center justify-between rounded-2xl border-2 border-[#061330] bg-white/10 px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-full bg-[#7FAFE6] text-[#061330] border border-[#061330]">
                    <FileCheck size={18} strokeWidth={2.8} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-[#BFD8F5]">Status</h4>
                    <p className="text-sm font-extrabold text-white">Ready for Submission</p>
                  </div>
                </div>
                <div className="size-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}