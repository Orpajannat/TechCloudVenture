'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BadgeCheck, Check, Compass, LayoutGrid, Search, ShoppingBag, Sparkles, Store, TrendingUp } from 'lucide-react'

/*
  Palette (same as the hero, plus the lighter sky blues)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Amazon Brand Store SEO & Optimization Services'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

// The bold phrases and qualities shown as stickers
const impacts = [
  { text: 'Discoverability', icon: Search, tone: 'bg-[#E8F1FC]', tilt: '-rotate-3' },
  { text: 'Conversions', icon: ShoppingBag, tone: 'bg-[#BFD8F5]', tilt: 'rotate-2' },
  { text: 'Brand Equity', icon: Store, tone: 'bg-white', tilt: '-rotate-2' },
]
const qualities = [
  { text: 'SEO-driven', icon: TrendingUp, tone: 'bg-white', tilt: 'rotate-2' },
  { text: 'Optimized', icon: Sparkles, tone: 'bg-[#BFD8F5]', tilt: '-rotate-2' },
  { text: 'Immersive', icon: LayoutGrid, tone: 'bg-[#E8F1FC]', tilt: 'rotate-3' },
]

// Live meter: each bar fills and refills on its own rhythm
const meter = [
  { label: 'SEO Rank', icon: Search, steps: [52, 82, 68, 95] },
  { label: 'Store Traffic', icon: Compass, steps: [74, 60, 92, 78] },
  { label: 'Conversion Rate', icon: ShoppingBag, steps: [88, 96, 84, 99] },
]

function Dot() {
  return (
    <span className="relative size-2.5 shrink-0 rounded-full bg-[#4A88EA]">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#4A88EA] motion-reduce:hidden" />
    </span>
  )
}

function Sticker({ text, icon: Icon, tone, tilt, i, pop, base }) {
  return (
    <li className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: `${base + i * 130}ms` }}>
      <div className={`${tilt} transition-transform duration-500 ${EASE} hover:-translate-y-1.5 hover:rotate-0`}>
        <span
          className={`${tone} group inline-flex animate-jump cursor-default items-center gap-2 rounded-full border-2 border-[#061330] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:scale-110 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] motion-reduce:animate-none sm:text-base`}
          style={{ animationDelay: `${i * 420}ms` }}
        >
          <Icon size={18} strokeWidth={2.2} aria-hidden="true" className={`transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:scale-125`} />
          {text}
        </span>
      </div>
    </li>
  )
}

export default function BrandStoreIntroSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [tick, setTick] = useState(0)

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

  // Drives the live meter
  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setTick((n) => n + 1), 1700)
    return () => clearInterval(id)
  }, [seen])

  const pop = seen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="brand-store-intro-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#E8F1FC] via-[#CFE2F9] to-[#B7D5F8] py-16 text-[#061330] sm:py-20 lg:py-28"
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
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-white/70 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-6 [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <p className={`${pop} inline-flex items-center gap-3 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <Dot />
            Amazon Brand Stores
            <Dot />
          </p>

          <h1
            id="brand-store-intro-heading"
            aria-label={TITLE}
            className="mt-6 text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${150 + i * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className={`${pop} mt-6 max-w-xl text-base leading-relaxed text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '800ms' }}
          >
            Your Amazon Brand Store is a powerful sales asset—if optimized correctly. We design and optimize{' '}
            <strong className="font-extrabold text-[#061330]">SEO-driven Amazon Brand Stores</strong> that improve discoverability and conversions[cite: 7].
          </p>

          <ul className="mt-8 flex max-w-xl flex-wrap gap-3 sm:gap-4">
            {impacts.map((s, i) => (
              <Sticker key={s.text} {...s} i={i} pop={pop} base={1000} />
            ))}
          </ul>
          <ul className="mt-4 flex max-w-xl flex-wrap gap-3 sm:gap-4">
            {qualities.map((s, i) => (
              <Sticker key={s.text} {...s} i={i + 3} pop={pop} base={1000} />
            ))}
          </ul>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-xl [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] lg:max-w-none">
            {/* Rings behind the image */}
            <div aria-hidden="true" className="absolute -inset-[8%] -z-10 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/30 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
              <span className="absolute right-[8%] bottom-[14%] size-3 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
            </div>
            <div aria-hidden="true" className="absolute -inset-[3%] -z-10 animate-orbit rounded-full border-2 border-dotted border-[#0F2F6E]/25 motion-reduce:animate-none">
              <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#061330] bg-white" />
            </div>

            {/* Image card matching reference style */}
            <div className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: '300ms' }}>
              <div className={`group relative aspect-[7/5] rotate-2 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#BFD8F5] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#0F2F6E]`}>
                <Image
                  src="/images/brand-store-seo-hero.webp"
                  alt="Amazon Brand Store SEO and Optimization Services preview"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Live store-optimization meter */}
            <div
              aria-hidden="true"
              className={`${pop} absolute -bottom-8 left-2 w-52 [translate:calc(var(--mx,0)*22px)_calc(var(--my,0)*22px)] motion-reduce:animate-none sm:-left-8 sm:w-60`}
              style={{ animationDelay: '1100ms' }}
            >
              <div className={`-rotate-2 animate-sway rounded-2xl border-2 border-[#061330] bg-white/90 p-3.5 shadow-[4px_4px_0_#061330] backdrop-blur-md transition-transform duration-500 ${EASE} hover:rotate-0 hover:scale-105 motion-reduce:animate-none`}>
                <ul className="space-y-2.5">
                  {meter.map(({ label, icon: Icon, steps }, i) => {
                    const w = steps[(tick + i) % steps.length]
                    return (
                      <li key={label} className="flex items-center gap-2.5">
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5]">
                          <Icon size={14} strokeWidth={2.4} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between text-xs font-extrabold">
                            {label}
                            <Check size={13} strokeWidth={3.4} className="text-[#0F2F6E]" />
                          </div>
                          <div className="mt-1 h-2.5 overflow-hidden rounded-full border-2 border-[#061330] bg-[#E8F1FC]">
                            <div
                              className="h-full rounded-full bg-[#4A88EA] transition-[width] duration-[1100ms] ease-out"
                              style={{ width: `${seen ? w : 0}%` }}
                            />
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Spinning stamp */}
            <div
              aria-hidden="true"
              className={`${pop} absolute -top-6 -right-2 size-24 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-right-5 sm:size-28 lg:size-32`}
              style={{ animationDelay: '1300ms' }}
            >
              <div className={`relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-white`}>
                <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                  <defs>
                    <path id="brand-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#brand-stamp-path" textLength="214" lengthAdjust="spacing">
                      Brand Store SEO ✦ Brand Store SEO ✦
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