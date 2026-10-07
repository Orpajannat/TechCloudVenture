'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Gauge, Rocket, ShieldCheck, SlidersHorizontal } from 'lucide-react'

/*
  Palette (same as the hero, plus the lighter sky blues)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6 | brand #4A88EA
*/

const TITLE = 'Take Control of Your Brand on Amazon'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const TICKS = Array.from({ length: 72 }, (_, i) => i)

export default function ControlCtaSection() {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const [seen, setSeen] = useState(false)

  // Reveal on scroll + live pointer parallax + dial needle (CSS variables, no re-renders)
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
      el.style.setProperty('--ang', '-30')
      return () => io.disconnect()
    }

    let tx = 0, ty = 0, cx = 0, cy = 0, lastMove = -1e9, raf = 0
    let ang = 0, target = 0
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
      lastMove = performance.now()
      const c = cardRef.current?.getBoundingClientRect()
      if (c) {
        const dx = e.clientX - (c.left + c.width / 2)
        const dy = e.clientY - (c.top + c.height / 2)
        target = (Math.atan2(dy, dx) * 180) / Math.PI + 90 // 0deg = pointing up
      }
    }
    const onLeave = () => (lastMove = -1e9)
    const tick = (t) => {
      if (visible) {
        const idle = t - lastMove > 2500
        if (idle) {
          tx = Math.sin(t / 2600) * 0.6
          ty = Math.cos(t / 3400) * 0.6
          ang += 0.45 // needle sweeps on its own
        } else {
          const diff = ((((target - ang) % 360) + 540) % 360) - 180
          ang += diff * 0.08 // needle follows the cursor
        }
        cx += (tx - cx) * 0.06
        cy += (ty - cy) * 0.06
        el.style.setProperty('--mx', cx.toFixed(4))
        el.style.setProperty('--my', cy.toFixed(4))
        el.style.setProperty('--ang', ang.toFixed(2))
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
      aria-labelledby="control-cta-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#E8F1FC] to-[#CFE2F9] py-16 sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(rgba(74,136,234,0.22) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-white/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`${pop} relative [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none`}>
          {/* ---------- Card ---------- */}
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-linear-to-br from-[#2F6BD8] via-[#4A88EA] to-[#2F6BD8] px-5 pt-16 pb-14 text-center text-white shadow-[8px_8px_0_#061330] sm:px-12 sm:pt-14 sm:pb-16 lg:px-16 lg:py-20"
          >
            {/* Control dial: ticks turn slowly, the needle follows the cursor */}
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 sm:size-[880px]">
              <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-orbit-slow motion-reduce:animate-none">
                <circle cx="100" cy="100" r="96" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="0.6" strokeDasharray="2 3" />
                {TICKS.map((i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="4"
                    x2="100"
                    y2={i % 6 === 0 ? 14 : 9}
                    stroke="white"
                    strokeOpacity={i % 6 === 0 ? 0.6 : 0.3}
                    strokeWidth={i % 6 === 0 ? 1.2 : 0.7}
                    strokeLinecap="round"
                    transform={`rotate(${i * 5} 100 100)`}
                  />
                ))}
              </svg>
              <div className="absolute inset-0" style={{ rotate: 'calc(var(--ang, 0) * 1deg)' }}>
                <svg viewBox="0 0 200 200" className="size-full">
                  <line x1="100" y1="100" x2="100" y2="16" stroke="#061330" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="100" cy="14" r="3.4" fill="#E8F1FC" stroke="#061330" strokeWidth="1" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <h2
                id="control-cta-heading"
                aria-label={TITLE}
                className="mx-auto max-w-3xl text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
              >
                {TITLE.split(' ').map((word, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                    style={{ animationDelay: `${150 + i * 80}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <div className={`${pop} mt-10 flex justify-center motion-reduce:animate-none`} style={{ animationDelay: '900ms' }}>
                <Link
                  href="/contact?service=brand-account-management"
                  className="group relative inline-flex min-h-14 animate-wiggle items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#E8F1FC] py-2.5 pr-2.5 pl-8 text-base font-black text-[#061330] shadow-[6px_6px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:animate-none hover:bg-white hover:shadow-[2px_2px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-x-1.5 active:translate-y-1.5 active:shadow-none motion-reduce:animate-none"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#4A88EA]/30 transition-transform duration-700 group-hover:translate-x-[420%]" />
                  <span className="relative">Manage My Brand Account</span>
                  <span className={`relative grid size-9 place-items-center rounded-full bg-[#061330] text-[#BFD8F5] transition-transform duration-300 ${EASE} group-hover:translate-x-1 group-hover:scale-110`}>
                    <ArrowRight size={19} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Stickers overlapping the card edge ---------- */}
          <div aria-hidden="true" className="pointer-events-none">
            <div className={`${pop} absolute -top-5 left-3 [translate:calc(var(--mx,0)*20px)_calc(var(--my,0)*20px)] motion-reduce:animate-none sm:left-8`} style={{ animationDelay: '1100ms' }}>
              <span className="pointer-events-auto inline-flex -rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#E8F1FC] px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-white motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base">
                <ShieldCheck size={16} strokeWidth={2.2} />
                Safe
              </span>
            </div>

            <div className={`${pop} absolute -bottom-5 left-4 [translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] motion-reduce:animate-none sm:left-14`} style={{ animationDelay: '1250ms' }}>
              <span className="pointer-events-auto inline-flex rotate-2 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#BFD8F5] px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-white motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base" style={{ animationDelay: '500ms' }}>
                <Gauge size={16} strokeWidth={2.2} />
                Optimized
              </span>
            </div>

            <div className={`${pop} absolute -right-1 -bottom-5 [translate:calc(var(--mx,0)*18px)_calc(var(--my,0)*18px)] motion-reduce:animate-none sm:right-10`} style={{ animationDelay: '1400ms' }}>
              <span className="pointer-events-auto inline-flex -rotate-2 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-3.5 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#E8F1FC] motion-reduce:animate-none sm:px-4 sm:py-2 sm:text-base" style={{ animationDelay: '1000ms' }}>
                <Rocket size={16} strokeWidth={2.2} />
                Scalable
              </span>
            </div>

            {/* Spinning stamp */}
            <div className={`${pop} absolute -top-8 -right-1 size-20 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-top-10 sm:right-6 sm:size-28`} style={{ animationDelay: '1550ms' }}>
              <div className={`pointer-events-auto relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-white`}>
                <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                  <defs>
                    <path id="control-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#control-stamp-path" textLength="214" lengthAdjust="spacing">
                      Take control ✦ Take control ✦ Take control ✦
                    </textPath>
                  </text>
                </svg>
                <SlidersHorizontal className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}