'use client'

import { useEffect, useRef, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

const marketplaces = [
  { name: 'Amazon', suffix: 'USA', tint: 'bg-white' },
  { name: 'Walmart', suffix: 'Marketplace USA', tint: 'bg-sky-100' },
  { name: 'eBay', suffix: 'USA', tint: 'bg-sky-200' },
]

export default function Marketplace() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  // Play the entrance once when the section scrolls into view
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

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-sky-200 px-4 py-16 text-[#0b1b4d] sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <style>{`
        @keyframes mc-up    { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:none } }
        @keyframes mc-draw  { to { stroke-dashoffset:0 } }
        @keyframes mc-line  { from { transform:scaleX(0) } to { transform:scaleX(1) } }
        @keyframes mc-ring  { 0%,100% { transform:scale(1); opacity:.5 } 50% { transform:scale(1.06); opacity:.9 } }
        .mc-off  { opacity:0 }
        .mc-up   { animation: mc-up .85s cubic-bezier(.22,1,.36,1) both }
        .mc-line { transform-origin:center; animation: mc-line 1s cubic-bezier(.22,1,.36,1) both }
        .mc-ring { animation: mc-ring 9s ease-in-out infinite }
        .mc-stroke { stroke-dasharray:1; stroke-dashoffset:1 }
        .mc-on .mc-stroke { animation: mc-draw .7s ease-out both }
        @media (prefers-reduced-motion: reduce) {
          .mc-up,.mc-line,.mc-ring { animation:none; opacity:1; transform:none }
          .mc-on .mc-stroke { animation:none; stroke-dashoffset:0 }
          .mc-tile, .mc-tile * { transition:none !important }
        }
      `}</style>

      {/* Concentric rings, slowly breathing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[28, 44, 60].map((size, i) => (
          <span
            key={size}
            style={{ width: `${size}rem`, height: `${size}rem`, animationDelay: `${i * 1.5}s` }}
            className="mc-ring absolute rounded-full border border-sky-400/30"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${inView ? 'mc-up' : 'mc-off'}`}>
            Marketplace Coverage
          </h2>
          <p
            style={{ animationDelay: '150ms' }}
            className={`mt-5 text-base text-[#0b1b4d]/75 sm:text-lg ${inView ? 'mc-up' : 'mc-off'}`}
          >
            Through our distribution network, we support brand product sales on
          </p>
        </div>

        {/* Tiles: stacked on mobile, side by side on desktop. The hovered one widens. */}
        <ul className="mt-12 flex flex-col gap-4 sm:mt-14 lg:h-80 lg:flex-row lg:gap-5">
          {marketplaces.map(({ name, suffix, tint }, i) => (
            <li
              key={name}
              style={{ animationDelay: `${300 + i * 150}ms` }}
              className={`min-w-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:flex-1 lg:hover:flex-[1.6] lg:focus-within:flex-[1.6] ${
                inView ? 'mc-up mc-on' : 'mc-off'
              }`}
            >
              <div
                tabIndex={0}
                className={`mc-tile group relative flex h-full min-h-[150px] cursor-default flex-col justify-between overflow-hidden rounded-2xl border border-[#0b1b4d]/10 p-6 outline-none transition-all duration-500 hover:-translate-y-1 hover:border-[#0b1b4d] hover:bg-[#0b1b4d] hover:text-white hover:shadow-[0_24px_48px_rgba(11,27,77,0.28)] focus-visible:-translate-y-1 focus-visible:bg-[#0b1b4d] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:p-8 ${tint}`}
              >
                {/* Check badge: draws itself, then fills on hover */}
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b1b4d]/5 transition-colors duration-500 group-hover:bg-sky-400 group-focus-visible:bg-sky-400">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle className="mc-stroke" style={{ animationDelay: `${600 + i * 150}ms` }} pathLength="1" cx="12" cy="12" r="9" />
                    <path className="mc-stroke" style={{ animationDelay: `${1000 + i * 150}ms` }} pathLength="1" d="M8 12.5l2.7 2.7L16 9.8" />
                  </svg>
                </span>

                <div>
                  <h3 className="text-4xl font-semibold leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
                    {name}
                  </h3>
                  <p className="mt-3 text-base font-medium text-[#0b1b4d]/70 transition-colors duration-500 group-hover:text-sky-200 group-focus-visible:text-sky-200">
                    {suffix}
                  </p>
                </div>

                {/* Glow that appears on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-sky-400/0 blur-3xl transition-colors duration-700 group-hover:bg-sky-400/40"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Policy note */}
        <div
          style={{ animationDelay: '900ms' }}
          className={`mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center ${inView ? 'mc-up' : 'mc-off'}`}
        >
          <span
            aria-hidden="true"
            style={{ animationDelay: '1000ms' }}
            className={`h-px w-40 bg-[#0b1b4d]/30 ${inView ? 'mc-line' : 'mc-off'}`}
          />
          <p className="flex items-start gap-2.5 text-base font-semibold sm:text-lg">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
            All listings, pricing, and operations follow platform guidelines and brand-specific policies.
          </p>
        </div>
      </div>
    </section>
  )
}