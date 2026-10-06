'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Route, Store } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Ready to Start?'
const SUBTITLE = 'If you are looking for a professional Amazon wholesale partner with a clear roadmap and structured agreement, our team is ready to work with you.'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const bubbles = [
  { left: '8%', size: 12, dur: 14, delay: 0, drift: 24 },
  { left: '22%', size: 22, dur: 19, delay: 4, drift: -32 },
  { left: '41%', size: 10, dur: 13, delay: 8, drift: 20 },
  { left: '63%', size: 18, dur: 17, delay: 2, drift: -28 },
  { left: '80%', size: 26, dur: 21, delay: 6, drift: 34 },
  { left: '92%', size: 12, dur: 15, delay: 10, drift: -20 },
]

export default function ApprovalCtaSection() {
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
      aria-labelledby="approval-cta-heading"
      className="relative isolate overflow-hidden bg-[#EEF4FC] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
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
        <div className={`${pop} relative [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none`}>
          {/* ---------- Card ---------- */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-[#0F2F6E] px-5 pt-16 pb-14 text-center shadow-[8px_8px_0_#061330] sm:px-12 sm:pt-14 sm:pb-16 lg:px-16 lg:py-20">
            {/* Rings */}
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[900px]" />
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border-2 border-dotted border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[560px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 animate-blob rounded-full bg-[#2B5BB8]/50 blur-3xl motion-reduce:animate-none" />

            {/* Bubbles */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
              {bubbles.map((b, i) => (
                <span
                  key={i}
                  className="absolute -bottom-10 animate-bubble rounded-full border border-[#E8F1FC]/30 bg-[#E8F1FC]/10"
                  style={{
                    left: b.left,
                    width: b.size,
                    height: b.size,
                    animationDuration: `${b.dur}s`,
                    animationDelay: `${b.delay}s`,
                    '--drift': `${b.drift}px`,
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <h2
                id="approval-cta-heading"
                aria-label={TITLE}
                className="mx-auto max-w-3xl text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
              >
                {TITLE.split(' ').map((word, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                    style={{ animationDelay: `${150 + i * 80}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <p
                className={`${pop} mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#E8F1FC]/90 motion-reduce:animate-none sm:text-lg`}
                style={{ animationDelay: '700ms' }}
              >
                {SUBTITLE}
              </p>

              <div className={`${pop} mt-10 flex justify-center motion-reduce:animate-none`} style={{ animationDelay: '950ms' }}>
                <Link
                  href="/contact"
                  className="group relative inline-flex min-h-14 w-full max-w-lg animate-wiggle items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-white py-2.5 pr-2.5 pl-7 text-center text-sm leading-tight font-black text-[#061330] shadow-[6px_6px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:animate-none hover:bg-[#BFD8F5] hover:shadow-[2px_2px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none motion-reduce:animate-none sm:w-auto sm:max-w-none sm:text-base"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#0F2F6E]/10 transition-transform duration-700 group-hover:translate-x-[420%]" />
                  <span className="relative">Apply for Wholesale Store Management</span>
                  <span className={`relative grid size-9 shrink-0 place-items-center rounded-full bg-[#0F2F6E] text-[#BFD8F5] transition-transform duration-300 ${EASE} group-hover:translate-x-1 group-hover:scale-110`}>
                    <ArrowRight size={19} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Stickers overlapping the card edge ---------- */}
          <div aria-hidden="true" className="pointer-events-none">
            <div
              className={`${pop} absolute -top-5 left-3 [translate:calc(var(--mx,0)*20px)_calc(var(--my,0)*20px)] motion-reduce:animate-none sm:left-8`}
              style={{ animationDelay: '1200ms' }}
            >
              <span className="pointer-events-auto inline-flex -rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#E8F1FC] px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base">
                <BadgeCheck size={16} strokeWidth={2.2} />
                Approved
              </span>
            </div>

            <div
              className={`${pop} absolute -bottom-5 left-4 [translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] motion-reduce:animate-none sm:left-14`}
              style={{ animationDelay: '1350ms' }}
            >
              <span
                className="pointer-events-auto inline-flex rotate-2 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#BFD8F5] px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#E8F1FC] motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base"
                style={{ animationDelay: '500ms' }}
              >
                <Route size={16} strokeWidth={2.2} />
                Step by step
              </span>
            </div>

            <div
              className={`${pop} absolute -right-1 -bottom-5 [translate:calc(var(--mx,0)*18px)_calc(var(--my,0)*18px)] motion-reduce:animate-none sm:right-10`}
              style={{ animationDelay: '1500ms' }}
            >
              <span
                className="pointer-events-auto inline-flex -rotate-2 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#7FAFE6] px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base"
                style={{ animationDelay: '1000ms' }}
              >
                <Store size={16} strokeWidth={2.2} />
                Ready to sell
              </span>
            </div>

            {/* Spinning stamp */}
            <div
              className={`${pop} absolute -top-8 -right-1 size-20 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-top-10 sm:right-6 sm:size-28`}
              style={{ animationDelay: '1650ms' }}
            >
              <div className={`pointer-events-auto relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-[#E8F1FC]`}>
                <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                  <defs>
                    <path id="approval-cta-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#approval-cta-stamp-path" textLength="214" lengthAdjust="spacing">
                      Get started ✦ Get started ✦ Get started ✦
                    </textPath>
                  </text>
                </svg>
                <BadgeCheck className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}