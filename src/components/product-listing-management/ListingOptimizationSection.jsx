'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Zap, ShieldCheck, ShoppingBag } from 'lucide-react'

/*
  Palette (same as your design)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Why Listing Optimization Matters'
const SUBTITLE = 'Optimized listings:'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const optimizationPoints = [
  { text: 'Rank higher', icon: TrendingUp },
  { text: 'Convert better', icon: Zap },
  { text: 'Reduce suppression risk', icon: ShieldCheck },
  { text: 'Increase Buy Box stability', icon: ShoppingBag },
]

const STEP = 360 / optimizationPoints.length

export default function ListingOptimizationSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

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

  // Cycles through the points automatically; hovering or focusing pauses it
  useEffect(() => {
    if (!seen || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % optimizationPoints.length), 2600)
    return () => clearInterval(id)
  }, [seen, paused])

  const pop = seen ? 'animate-pop' : 'opacity-0'
  const { icon: ActiveIcon, text: activeText } = optimizationPoints[active]

  return (
    <section
      ref={ref}
      aria-labelledby="optimization-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop patterns & glow */}
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

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading & Subtitle ---------- */}
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="optimization-heading"
            className="text-3xl leading-[1.1] font-black tracking-tight [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:text-4xl lg:text-5xl"
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
          <p className={`${pop} mt-4 text-lg font-medium text-[#BFD8F5] motion-reduce:animate-none`} style={{ animationDelay: '400ms' }}>
            {SUBTITLE}
          </p>
        </div>

        <div
          className="mt-10 sm:mt-14"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* ---------- Interactive Hub ---------- */}
          <div
            aria-hidden="true"
            className={`${pop} relative mx-auto size-[min(76vw,360px)] [translate:calc(var(--mx,0)*16px)_calc(var(--my,0)*16px)] motion-reduce:animate-none sm:size-[460px] lg:size-[500px]`}
            style={{ animationDelay: '500ms' }}
          >
            {/* Outer decorative rings */}
            <div className="absolute -inset-[6%] animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/20 motion-reduce:animate-none" />
            <div className="absolute inset-[22%] animate-orbit-rev rounded-full border-2 border-dotted border-[#E8F1FC]/25 motion-reduce:animate-none" />

            {/* Rotating ring with the four optimization nodes */}
            <div className="absolute inset-[8%] animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/40 motion-reduce:animate-none">
              {optimizationPoints.map(({ icon: Icon }, i) => {
                const angle = i * STEP
                const on = active === i
                return (
                  <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="animate-orbit-rev motion-reduce:animate-none">
                        <div style={{ transform: `rotate(${-angle}deg)` }}>
                          <div
                            className={`${on ? 'scale-125 bg-[#BFD8F5] shadow-[5px_5px_0_#7FAFE6]' : 'bg-[#E8F1FC] shadow-[3px_3px_0_#061330]'} relative grid size-12 place-items-center rounded-2xl border-2 border-[#061330] text-[#061330] transition-all duration-500 ${EASE} sm:size-16 lg:size-[4.5rem]`}
                          >
                            {on && <span className="absolute -inset-1 animate-ping rounded-2xl border-2 border-[#BFD8F5] motion-reduce:hidden" />}
                            <Icon className="size-6 sm:size-8 lg:size-9" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Centre: active point display */}
            <div className="absolute inset-[24%] grid place-items-center">
              <span key={`ring-${active}`} className="absolute inset-0 animate-ping rounded-full border-4 border-[#BFD8F5]/70 [animation-iteration-count:1] motion-reduce:hidden" />
              <div className="relative grid size-full animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#E8F1FC] p-4 text-center text-[#061330] shadow-[6px_6px_0_#061330] motion-reduce:animate-none">
                <div key={active} className="flex animate-pop flex-col items-center gap-2 motion-reduce:animate-none sm:gap-3">
                  <span className="grid size-10 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] sm:size-14 lg:size-16">
                    <ActiveIcon className="size-5 sm:size-7 lg:size-8" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-black text-balance sm:text-base lg:text-xl">{activeText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Interactive Action Chips ---------- */}
          <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] sm:mt-16 sm:gap-4">
            {optimizationPoints.map(({ text, icon: Icon }, i) => {
              const on = active === i
              return (
                <li
                  key={text}
                  className={`${pop} motion-reduce:animate-none`}
                  style={{ animationDelay: `${800 + i * 120}ms` }}
                >
                  <button
                    type="button"
                    aria-pressed={on}
                    onPointerEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`${on ? '-translate-y-1 bg-[#061330] text-[#E8F1FC] shadow-[5px_5px_0_#7FAFE6]' : 'bg-[#E8F1FC] text-[#061330] shadow-[3px_3px_0_#061330]'} group inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-[#061330] py-2.5 pr-5 pl-2.5 text-left text-sm font-bold transition-all duration-300 ${EASE} hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] sm:text-base`}
                  >
                    <span
                      className={`${on ? 'rotate-[360deg] border-[#E8F1FC] bg-[#7FAFE6] text-[#061330]' : 'border-[#061330] bg-[#0F2F6E] text-[#BFD8F5]'} grid size-8 shrink-0 place-items-center rounded-full border-2 transition-all duration-700 ${EASE}`}
                    >
                      <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    {text}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}