'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, Check, Eye, Package, Siren, UserCog } from 'lucide-react'

/*
  Palette (same as the hero, plus the lighter sky blues from the last section)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Custom Pricing'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const features = [
  { key: 'account-manager', text: 'Dedicated account manager', icon: UserCog, tone: 'bg-white' },
  { key: 'oversight', text: 'Full operational oversight', icon: Eye, tone: 'bg-[#BFD8F5]' },
  { key: 'escalation', text: 'Policy escalation strategy', icon: Siren, tone: 'bg-[#E8F1FC]' },
  { key: 'analytics', text: 'Brand analytics & reporting', icon: BarChart3, tone: 'bg-white' },
]

const N = features.length
const R = 44
const CIRC = 2 * Math.PI * R

export default function CustomPricingSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [selected, setSelected] = useState(() => features.map(() => false))
  const [touched, setTouched] = useState(false)

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

  // Demo: the package builds itself piece by piece until the visitor takes over
  useEffect(() => {
    if (!seen || touched) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSelected(features.map(() => true))
      return
    }
    let step = 1
    const apply = (k) => setSelected(features.map((_, i) => i < k))
    apply(0)
    const id = setInterval(() => {
      apply(step % (N + 2) > N ? 0 : step % (N + 2))
      step += 1
    }, 1100)
    return () => clearInterval(id)
  }, [seen, touched])

  const toggle = (i) => {
    setTouched(true)
    setSelected((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  const count = selected.filter(Boolean).length
  const chosen = features.filter((_, i) => selected[i]).map((f) => f.key).join(',')
  const href = chosen ? `/contact?package=custom&features=${chosen}` : '/contact?package=custom'
  const pop = seen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="custom-pricing-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#B7D5F8] via-[#86B4F0] to-[#5B93E6] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.45) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-white/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#4A88EA]/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-white/40 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <h2
          id="custom-pricing-heading"
          aria-label={TITLE}
          className="text-center text-3xl leading-[1.1] font-black tracking-tight [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:text-4xl lg:text-5xl"
        >
          {TITLE.split(' ').map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-white motion-reduce:animate-none`}
              style={{ animationDelay: `${100 + i * 90}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* ---------- Builder panel ---------- */}
        <div
          className={`${pop} mt-12 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none sm:mt-14`}
          style={{ animationDelay: '500ms' }}
        >
          <div className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] border-2 border-[#061330] bg-white/40 p-6 shadow-[8px_8px_0_#061330] backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-8 lg:p-14">
            {/* ----- Gauge ----- */}
            <div className="flex justify-center lg:col-span-5" aria-hidden="true">
              <div className="relative size-[min(72vw,300px)] sm:size-[340px]">
                {/* Progress ring */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90">
                  <circle cx="50" cy="50" r={R} fill="none" stroke="#061330" strokeOpacity="0.15" strokeWidth="3" />
                  <circle
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke="#0F2F6E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - count / N)}
                    style={{ transition: 'stroke-dashoffset 800ms cubic-bezier(0.3,1.2,0.5,1)' }}
                  />
                </svg>

                {/* Rotating ring with four slots */}
                <div className="absolute inset-[3%] animate-orbit rounded-full border-2 border-dashed border-[#061330]/25 motion-reduce:animate-none">
                  {features.map(({ icon: Icon }, i) => {
                    const angle = i * (360 / N)
                    const on = selected[i]
                    return (
                      <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="animate-orbit-rev motion-reduce:animate-none">
                            <div style={{ transform: `rotate(${-angle}deg)` }}>
                              <div
                                className={`${on ? 'scale-110 bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330]' : 'scale-75 border-dashed bg-white/50 text-[#061330]/40'} relative grid size-12 place-items-center rounded-2xl border-2 border-[#061330] transition-all duration-700 ${EASE} sm:size-14`}
                              >
                                {on && <span className="absolute -inset-1 animate-ping rounded-2xl border-2 border-white [animation-iteration-count:1] motion-reduce:hidden" />}
                                <Icon className="size-6 sm:size-7" strokeWidth={2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Centre */}
                <div className="absolute inset-[26%] grid place-items-center">
                  <div className="grid size-full animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#E8F1FC] shadow-[6px_6px_0_#061330] motion-reduce:animate-none">
                    <Package className="size-1/2 text-[#0F2F6E]" strokeWidth={1.6} />
                  </div>
                </div>
              </div>
            </div>

            {/* ----- Options + CTA ----- */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <p className="text-lg font-black text-[#0F2F6E] sm:text-xl">Custom package is based on:</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {features.map(({ text, icon: Icon, tone }, i) => {
                  const on = selected[i]
                  return (
                    <li key={text} className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: `${800 + i * 130}ms` }}>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(i)}
                        className={`${on ? 'translate-x-1 -translate-y-1 bg-[#061330] text-[#E8F1FC] shadow-[6px_6px_0_#7FAFE6]' : `${tone} text-[#061330] shadow-[3px_3px_0_#061330]`} group flex w-full cursor-pointer items-center gap-3 rounded-2xl border-2 border-[#061330] px-3.5 py-3 text-left text-sm font-bold transition-all duration-500 ${EASE} hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E] sm:text-base`}
                      >
                        <span
                          className={`${on ? 'rotate-[360deg] border-[#E8F1FC] bg-[#7FAFE6] text-[#061330]' : 'border-[#061330] bg-[#0F2F6E] text-[#BFD8F5]'} grid size-10 shrink-0 place-items-center rounded-full border-2 transition-all duration-700 ${EASE}`}
                        >
                          <Icon size={19} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                        <span className="flex-1">{text}</span>
                        <span
                          aria-hidden="true"
                          className={`${on ? 'scale-100 bg-[#7FAFE6] text-[#061330]' : 'scale-0'} grid size-6 shrink-0 place-items-center rounded-full transition-transform duration-500 ${EASE}`}
                        >
                          <Check size={14} strokeWidth={3.4} />
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>

              <div className={`${pop} mt-8 motion-reduce:animate-none`} style={{ animationDelay: '1400ms' }}>
                <Link
                  href={href}
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
        </div>
      </div>
    </section>
  )
}