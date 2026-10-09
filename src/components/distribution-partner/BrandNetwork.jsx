'use client'

import { useEffect, useRef, useState } from 'react'
import { Store, Tags, Gauge, Rocket } from 'lucide-react'

// pos = where the card sits on desktop; path = line from the hub (500,250) to that card
const benefits = [
  {
    icon: Store,
    title: 'Seller Accounts',
    text: 'Expand reach without managing multiple seller accounts',
    pos: 'lg:col-start-1 lg:row-start-1',
    path: 'M500 250 C 430 250, 400 118, 325 118',
  },
  {
    icon: Tags,
    title: 'Pricing',
    text: 'Maintain Pricing discipline and compliance',
    pos: 'lg:col-start-1 lg:row-start-2',
    path: 'M500 250 C 430 250, 400 382, 325 382',
  },
  {
    icon: Gauge,
    title: 'Operational Burden',
    text: 'Reduce operational burden',
    pos: 'lg:col-start-3 lg:row-start-1',
    path: 'M500 250 C 570 250, 600 118, 675 118',
  },
  {
    icon: Rocket,
    title: 'Increase Sales',
    text: 'Increase sales through trusted store owners',
    pos: 'lg:col-start-3 lg:row-start-2',
    path: 'M500 250 C 570 250, 600 382, 675 382',
  },
]

export default function BrandNetwork() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Count the hub number up from 0 to 100
  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(100)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / 1500, 1)
      setCount(Math.round(100 * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f3f8ff] px-4 py-16 text-[#0b1b4d] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes bn-up    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes bn-pop   { from { opacity:0; transform:scale(.6) } to { opacity:1; transform:none } }
        @keyframes bn-fade  { from { opacity:0 } to { opacity:1 } }
        @keyframes bn-flow  { from { stroke-dashoffset:28 } to { stroke-dashoffset:0 } }
        @keyframes bn-spin  { to { transform:rotate(360deg) } }
        @keyframes bn-pulse { 0% { transform:scale(.9); opacity:.55 } 100% { transform:scale(1.5); opacity:0 } }
        .bn-off  { opacity:0 }
        .bn-up   { animation: bn-up .8s cubic-bezier(.22,1,.36,1) both }
        .bn-pop  { animation: bn-pop .9s cubic-bezier(.22,1,.36,1) both }
        .bn-fade { animation: bn-fade 1s ease both }
        .bn-flow { animation: bn-flow 1.1s linear infinite }
        .bn-spin { animation: bn-spin 24s linear infinite }
        .bn-spin-rev { animation: bn-spin 40s linear infinite reverse }
        .bn-pulse{ animation: bn-pulse 3.2s ease-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .bn-up,.bn-pop,.bn-fade,.bn-flow,.bn-spin,.bn-spin-rev,.bn-pulse { animation:none; opacity:1; transform:none }
          .bn-card, .bn-card * { transition:none !important }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${inView ? 'bn-up' : 'bn-off'}`}>
            100+ Brand Distribution Network
          </h2>
          <p
            style={{ animationDelay: '150ms' }}
            className={`mt-5 text-base leading-relaxed text-[#0b1b4d]/75 sm:text-lg ${inView ? 'bn-up' : 'bn-off'}`}
          >
            We currently work with 100+ U.S. brands and distributors under structured distribution agreements.
          </p>
        </div>

        {/* Network: hub in the middle, four benefits around it */}
        <div className="relative mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-[1fr_20rem_1fr] lg:grid-rows-2 lg:gap-x-8 lg:gap-y-8">
          {/* Connecting lines (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className={`pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block ${inView ? 'bn-fade' : 'bn-off'}`}
            style={{ animationDelay: '700ms' }}
          >
            {benefits.map((b, i) => (
              <path
                key={b.title}
                d={b.path}
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="bn-flow"
                strokeDasharray="6 8"
                style={{
                  stroke: active === i ? '#0b1b4d' : '#7dbcf5',
                  strokeWidth: active === i ? 3 : 2,
                  transition: 'stroke .3s, stroke-width .3s',
                }}
              />
            ))}
          </svg>

          {/* Hub */}
          <div className="relative z-10 flex flex-col items-center justify-center pb-14 sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pb-0">
            <div className={`relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 ${inView ? 'bn-pop' : 'bn-off'}`} style={{ animationDelay: '300ms' }}>
              {/* Pulse, dashed ring and orbiting dot */}
              <span aria-hidden="true" className="bn-pulse absolute inset-0 rounded-full border border-sky-400" />
              <span aria-hidden="true" className="bn-pulse absolute inset-0 rounded-full border border-sky-400" style={{ animationDelay: '1.6s' }} />
              <span aria-hidden="true" className="bn-spin-rev absolute -inset-4 rounded-full border border-dashed border-[#0b1b4d]/25" />
              <span aria-hidden="true" className="bn-spin absolute -inset-4">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,.9)]" />
              </span>

              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0b1b4d] text-center text-white shadow-[0_20px_50px_rgba(11,27,77,0.35)]">
                <p className="text-6xl font-semibold tabular-nums tracking-tight sm:text-7xl" aria-label="100 plus">
                  <span aria-hidden="true">{count}+</span>
                </p>
                <p className="mt-1 max-w-[9rem] text-sm leading-snug text-sky-200">U.S. brands and distributors</p>
              </div>

              {/* Lead-in sentence the four benefits complete */}
              <p className="absolute left-1/2 top-full mt-8 w-max -translate-x-1/2 rounded-full border border-[#0b1b4d]/15 bg-white px-4 py-2 text-sm font-semibold shadow-sm sm:text-base">
                Our system allows brands to
              </p>
            </div>
          </div>

          {/* Benefit cards */}
          {benefits.map(({ icon: Icon, title, text, pos }, i) => (
            <div
              key={title}
              style={{ animationDelay: `${600 + i * 130}ms` }}
              className={`relative z-10 flex items-center ${pos} ${inView ? 'bn-up' : 'bn-off'}`}
            >
              <div
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="bn-card group w-full rounded-2xl border border-[#0b1b4d]/10 bg-white p-6 shadow-[0_6px_20px_rgba(11,27,77,0.06)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-[0_20px_40px_rgba(11,27,77,0.14)] focus-visible:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#0b1b4d] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#0b1b4d] group-hover:text-white group-focus-visible:bg-[#0b1b4d] group-focus-visible:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#0b1b4d]/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}