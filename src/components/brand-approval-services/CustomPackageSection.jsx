'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Gauge, LayoutGrid, Percent, SlidersHorizontal, Wallet } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Custom Brand Approval Package'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const factors = [
  { text: 'Your budget', icon: Wallet, tone: 'bg-white', tilt: '-rotate-2' },
  { text: 'Your Desired ROI & profit margin', icon: Percent, tone: 'bg-[#BFD8F5]', tilt: 'rotate-1' },
  { text: 'Product category', icon: LayoutGrid, tone: 'bg-[#7FAFE6]', tilt: '-rotate-1' },
  { text: 'Risk & competition preference', icon: Gauge, tone: 'bg-white', tilt: 'rotate-2' },
]

export default function CustomPackageSection() {
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
      aria-labelledby="custom-package-heading"
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
            id="custom-package-heading"
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
            className={`${pop} mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#E8F1FC]/85 motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '600ms' }}
          >
            Every seller’s goal is different. If none of the above packages fit your needs, we offer a Custom
            Brand Approval Package.
          </p>
        </div>

        {/* ---------- Panel ---------- */}
        <div
          className={`${pop} relative mt-12 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none sm:mt-14`}
          style={{ animationDelay: '800ms' }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-[#E8F1FC] px-5 pt-14 pb-10 text-center text-[#061330] shadow-[8px_8px_0_#061330] sm:px-10 sm:pt-12 sm:pb-12 lg:px-16 lg:py-14">
            {/* Rings inside the panel */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 size-[420px] animate-orbit rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 -bottom-48 size-[460px] animate-orbit-slow rounded-full border-2 border-dotted border-[#0F2F6E]/15 motion-reduce:animate-none" />

            <div className="relative">
              <p
                className={`${pop} inline-flex items-center gap-2.5 text-lg font-black text-[#0F2F6E] motion-reduce:animate-none sm:text-xl`}
                style={{ animationDelay: '1000ms' }}
              >
                <SlidersHorizontal size={22} strokeWidth={2.4} aria-hidden="true" className="animate-jump motion-reduce:animate-none" />
                Custom package is based on:
              </p>

              <ul className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
                {factors.map(({ text, icon: Icon, tone, tilt }, i) => (
                  <li
                    key={text}
                    className={`${pop} motion-reduce:animate-none`}
                    style={{ animationDelay: `${1150 + i * 150}ms` }}
                  >
                    <div className={`${tilt} transition-transform duration-500 ${EASE} hover:-translate-y-1.5 hover:rotate-0`}>
                      <span
                        className={`${tone} group inline-flex animate-jump cursor-default items-center gap-3 rounded-full border-2 border-[#061330] py-2 pr-5 pl-2 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:scale-110 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] motion-reduce:animate-none sm:text-base`}
                        style={{ animationDelay: `${i * 450}ms` }}
                      >
                        <span className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330]`}>
                          <Icon size={17} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                        {text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={`${pop} mt-9 motion-reduce:animate-none`} style={{ animationDelay: '1850ms' }}>
                <Link
                  href="/contact?package=custom"
                  className="group relative inline-flex min-h-14 animate-wiggle items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#0F2F6E] py-2.5 pr-2.5 pl-8 text-base font-black text-[#E8F1FC] shadow-[6px_6px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:animate-none hover:bg-[#7FAFE6] hover:text-[#061330] hover:shadow-[2px_2px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none motion-reduce:animate-none"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 group-hover:translate-x-[420%]" />
                  <span className="relative">Request Custom Package</span>
                  <span className={`relative grid size-9 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] transition-transform duration-300 ${EASE} group-hover:translate-x-1 group-hover:scale-110`}>
                    <ArrowRight size={19} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Spinning stamp overlapping the panel corner */}
          <div
            aria-hidden="true"
            className={`${pop} absolute -top-8 -right-1 size-20 [translate:calc(var(--mx,0)*26px)_calc(var(--my,0)*26px)] motion-reduce:animate-none sm:-top-10 sm:right-8 sm:size-28`}
            style={{ animationDelay: '1500ms' }}
          >
            <div className={`relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-[#7FAFE6]`}>
              <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                <defs>
                  <path id="custom-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="10.5" fontWeight="800" fill="currentColor">
                  <textPath href="#custom-stamp-path" textLength="214" lengthAdjust="spacing">
                    Made for you ✦ Made for you ✦ Made for you ✦
                  </textPath>
                </text>
              </svg>
              <SlidersHorizontal className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}