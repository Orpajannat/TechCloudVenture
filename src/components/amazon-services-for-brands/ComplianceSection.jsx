'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, Clock, HeartHandshake, ScrollText, Swords, TrendingUp } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Compliance & Marketplace Transparency'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const risks = [
  { text: 'Policy updates', icon: ScrollText, tone: 'bg-[#BFD8F5]' },
  { text: 'Supplier delays', icon: Clock, tone: 'bg-[#7FAFE6]' },
  { text: 'Market competition', icon: Swords, tone: 'bg-[#7FAFE6]' },
  { text: 'Pricing fluctuations', icon: TrendingUp, tone: 'bg-[#BFD8F5]' },
]

export default function ComplianceSection() {
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
      aria-labelledby="compliance-heading"
      className="relative isolate overflow-hidden bg-[#EEF4FC] py-16 text-[#E8F1FC] sm:py-20 lg:py-24"
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
        <div
          className={`${pop} [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none`}
        >
          {/* ---------- Banner ---------- */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-[#0F2F6E] p-5 shadow-[8px_8px_0_#061330] sm:p-8 lg:p-12">
            {/* Diagonal light streaks (echo the original banner) */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-10 left-[28%] h-[150%] w-24 -skew-x-[22deg] bg-[#E8F1FC]/[0.06] [translate:calc(var(--mx,0)*-26px)_0] sm:w-32" />
            <div aria-hidden="true" className="pointer-events-none absolute -top-10 left-[58%] h-[150%] w-40 -skew-x-[22deg] bg-[#E8F1FC]/[0.05] [translate:calc(var(--mx,0)*-40px)_0] sm:w-56" />
            {/* Rings */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-44 -right-40 size-[460px] animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-32 size-[480px] animate-orbit-slow rounded-full border-2 border-dotted border-[#E8F1FC]/15 motion-reduce:animate-none" />

            <div className="relative">
              {/* ---------- Heading ---------- */}
              <div className="flex items-center gap-4">
                <span className="relative grid size-12 shrink-0 place-items-center sm:size-14">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#BFD8F5]/50 motion-reduce:animate-none"
                  >
                    <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7FAFE6]" />
                  </span>
                  <span className="grid size-full animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[3px_3px_0_#061330] motion-reduce:animate-none">
                    <AlertCircle className="size-6 sm:size-7" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </span>

                <h2
                  id="compliance-heading"
                  aria-label={TITLE}
                  className="text-2xl leading-[1.1] font-black tracking-tight sm:text-3xl lg:text-4xl"
                >
                  {TITLE.split(' ').map((word, i) => (
                    <span
                      key={i}
                      aria-hidden="true"
                      className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                      style={{ animationDelay: `${150 + i * 70}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
              </div>

              <p
                className={`${pop} mt-5 max-w-4xl text-base leading-relaxed text-[#E8F1FC]/90 motion-reduce:animate-none sm:text-lg`}
                style={{ animationDelay: '600ms' }}
              >
                Amazon is a policy-driven marketplace with constant changes and competitive pressure. We operate
                strictly within Amazon&apos;s guidelines using a risk-controlled execution model.
              </p>

              {/* ---------- Cards ---------- */}
              <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
                {/* Known risks */}
                <div className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: '800ms' }}>
                  <div className={`h-full rounded-3xl border-2 border-[#061330] bg-[#E8F1FC] p-5 text-[#061330] shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#7FAFE6] sm:p-7`}>
                    <h3 className="text-xl font-black tracking-tight text-[#0F2F6E] sm:text-2xl">Known Business Risks Include:</h3>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {risks.map(({ text, icon: Icon, tone }, i) => (
                        <li
                          key={text}
                          className={`${pop} motion-reduce:animate-none`}
                          style={{ animationDelay: `${1000 + i * 130}ms` }}
                        >
                          <div
                            className={`${tone} group flex cursor-default items-center gap-3 rounded-2xl border-2 border-[#061330] px-3.5 py-3 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] sm:text-base ${i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
                          >
                            <span
                              className={`grid size-9 shrink-0 animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330] motion-reduce:animate-none`}
                              style={{ animationDelay: `${i * 300}ms` }}
                            >
                              <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                            </span>
                            {text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Commitment */}
                <div className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: '950ms' }}>
                  <div className={`group relative h-full overflow-hidden rounded-3xl border-2 border-[#7FAFE6] bg-[#061330] p-5 shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1.5 hover:bg-[#0A2250] hover:shadow-[8px_8px_0_#7FAFE6] sm:p-7`}>
                    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 size-48 animate-orbit rounded-full border-2 border-dashed border-[#7FAFE6]/30 motion-reduce:animate-none">
                      <span className="absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BFD8F5]" />
                    </div>

                    <div className="relative flex items-center gap-4">
                      <span
                        className={`grid size-12 shrink-0 animate-jump place-items-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[3px_3px_0_#7FAFE6] transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] motion-reduce:animate-none`}
                        style={{ animationDelay: '400ms' }}
                      >
                        <HeartHandshake size={24} strokeWidth={2.2} aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-black tracking-tight sm:text-2xl">Our Commitment</h3>
                    </div>

                    <p className="relative mt-5 text-base leading-relaxed text-[#E8F1FC]/90 sm:text-lg">
                      Our role is to reduce risk through compliance, data-driven decisions, and transparent
                      communication—<strong className="font-extrabold text-[#BFD8F5]">never false guarantees</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}