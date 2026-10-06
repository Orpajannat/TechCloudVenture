'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Our Brand Service Philosophy'

const principles = [
  { text: 'Amazon Brand Registry–aligned execution', tone: 'bg-[#E8F1FC]' },
  { text: 'Structured, long-term strategies', tone: 'bg-[#BFD8F5]' },
  { text: 'Policy-compliant enforcement', tone: 'bg-[#BFD8F5]' },
  { text: 'Ethical marketplace practices', tone: 'bg-[#E8F1FC]' },
  { text: 'Transparent documentation', tone: 'bg-[#7FAFE6]' },
]

export default function PhilosophySection() {
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
      aria-labelledby="philosophy-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#DCEAF9] to-[#BFD8F5] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.16) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#E8F1FC]/70 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="philosophy-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p
            className={`${pop} mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '600ms' }}
          >
            We do not chase short-term wins or risky enforcement tactics.
            <br className="hidden sm:block" /> Every service we offer fits into a brand-first Amazon
            ecosystem—not isolated tasks.
          </p>
        </div>

        {/* ---------- Panel ---------- */}
        <div
          className={`${pop} mt-12 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none sm:mt-14`}
          style={{ animationDelay: '800ms' }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-[#0F2F6E] p-5 shadow-[8px_8px_0_#061330] sm:p-8 lg:p-10">
            {/* Rings inside the panel */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 size-[420px] animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-32 size-[460px] animate-orbit-slow rounded-full border-2 border-dotted border-[#E8F1FC]/15 motion-reduce:animate-none" />

            <ul className="relative grid gap-3 sm:grid-cols-2 sm:gap-4">
              {principles.map(({ text, tone }, i) => (
                <li
                  key={text}
                  className={`${pop} motion-reduce:animate-none`}
                  style={{ animationDelay: `${1000 + i * 150}ms` }}
                >
                  <div
                    className={`${tone} group flex h-full cursor-default items-center gap-4 rounded-2xl border-2 border-[#061330] px-4 py-3.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:-translate-y-1 hover:translate-x-1.5 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6] sm:text-base ${i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
                  >
                    {/* Check badge with its own orbit */}
                    <span className="relative grid size-10 shrink-0 place-items-center">
                      <span
                        aria-hidden="true"
                        className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#061330]/40 transition-colors duration-300 group-hover:border-[#7FAFE6] motion-reduce:animate-none"
                      >
                        <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F2F6E] group-hover:bg-[#7FAFE6]" />
                      </span>
                      <span className="grid size-10 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ease-[cubic-bezier(0.3,1.6,0.5,1)] group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330]">
                        <Check size={20} strokeWidth={3} aria-hidden="true" />
                      </span>
                    </span>
                    {text}
                  </div>
                </li>
              ))}

              {/* Fills the empty cell: spinning stamp */}
              <li aria-hidden="true" className="hidden place-items-center sm:grid">
                <div
                  className={`${pop} size-28 [translate:calc(var(--mx,0)*22px)_calc(var(--my,0)*22px)] motion-reduce:animate-none lg:size-32`}
                  style={{ animationDelay: '1800ms' }}
                >
                  <div className="relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:rotate-12 hover:scale-110 hover:bg-[#E8F1FC]">
                    <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                      <defs>
                        <path id="philosophy-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                      </defs>
                      <text fontSize="10.5" fontWeight="800" fill="currentColor">
                        <textPath href="#philosophy-stamp-path" textLength="214" lengthAdjust="spacing">
                          Brand-first Amazon ✦ Brand-first Amazon ✦
                        </textPath>
                      </text>
                    </svg>
                    <ShieldCheck className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}