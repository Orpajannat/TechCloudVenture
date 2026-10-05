'use client'

import { useEffect, useRef, useState } from 'react'
import { UserCog, TrendingUp, BarChart3, DollarSign, ArrowUpRight, BadgeCheck } from 'lucide-react'

const models = [
  { icon: UserCog, title: 'Brand authorization and compliance' },
  { icon: TrendingUp, title: 'Marketplace policy adherence' },
  { icon: BarChart3, title: 'Controlled and scalable distribution' },
  { icon: DollarSign, title: 'Long-term brand protection' },
]

const marketplaces = ['Amazon', 'Walmart', 'eBay']

export default function DistributionModel() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  // Run the entrance sequence once, when the section is visible
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
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0b1b4d] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <style>{`
        @keyframes dm-up    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes dm-in    { from { opacity:0; transform:translateX(48px) } to { opacity:1; transform:none } }
        @keyframes dm-draw  { from { transform:scaleX(0) } to { transform:scaleX(1) } }
        @keyframes dm-drift { 0%,100% { transform:translate(0,0) } 50% { transform:translate(-24px,18px) } }
        @keyframes dm-ping  { 0% { transform:scale(1); opacity:.7 } 80%,100% { transform:scale(2.4); opacity:0 } }
        .dm-off  { opacity:0 }
        .dm-up   { animation: dm-up .8s cubic-bezier(.22,1,.36,1) both }
        .dm-in   { animation: dm-in .85s cubic-bezier(.22,1,.36,1) both }
        .dm-draw { transform-origin:left; animation: dm-draw .9s cubic-bezier(.22,1,.36,1) both }
        .dm-drift{ animation: dm-drift 14s ease-in-out infinite }
        .dm-ping { animation: dm-ping 2.2s ease-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .dm-up,.dm-in,.dm-draw,.dm-drift,.dm-ping { animation:none; opacity:1; transform:none }
          .dm-row, .dm-row * { transition:none !important }
        }
      `}</style>

      {/* Quiet background: dotted grid + one slow-drifting glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(#9cc7f5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="dm-drift pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading, context, marketplaces */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <h2
              className={`text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
                inView ? 'dm-up' : 'dm-off'
              }`}
            >
              Our Distribution Model
            </h2>

            <p
              style={{ animationDelay: '150ms' }}
              className={`mt-6 max-w-xl text-base leading-relaxed text-sky-100/80 sm:text-lg ${
                inView ? 'dm-up' : 'dm-off'
              }`}
            >
              We operate through a brand-approved distributor system, where products are sourced
              directly from brands or authorized distributors and sold through verified Amazon,
              Walmart, and eBay seller accounts managed by our team.
            </p>

            <ul
              style={{ animationDelay: '300ms' }}
              className={`mt-8 flex flex-wrap items-center gap-3 ${inView ? 'dm-up' : 'dm-off'}`}
            >
              {marketplaces.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-2 pl-3 pr-4 text-sm font-medium backdrop-blur transition-colors duration-300 hover:border-sky-300/60 hover:bg-white/10"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="dm-ping absolute inset-0 rounded-full bg-emerald-400" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  {name}
                </li>
              ))}
              <li className="flex items-center gap-1.5 px-1 text-sm text-sky-100/70">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                Verified seller accounts
              </li>
            </ul>
          </div>
        </div>

        {/* Right: the four pillars as full-width rows */}
        <ul className="lg:col-span-7">
          {models.map(({ icon: Icon, title }, i) => (
            <li
              key={title}
              style={{ animationDelay: `${250 + i * 140}ms` }}
              className={`relative ${inView ? 'dm-in' : 'dm-off'}`}
            >
              {/* Divider that draws itself */}
              <span
                aria-hidden="true"
                style={{ animationDelay: `${450 + i * 140}ms` }}
                className={`absolute left-0 top-0 h-px w-full bg-white/20 ${
                  inView ? 'dm-draw' : 'dm-off'
                }`}
              />

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="dm-row group relative flex items-center gap-4 overflow-hidden px-3 py-6 outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:gap-6 sm:px-6 sm:py-8"
              >
                {/* Fill that sweeps in from the left on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-sky-100 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />

                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 text-sky-200 transition-all duration-500 group-hover:rotate-[360deg] group-hover:border-[#0b1b4d] group-hover:bg-[#0b1b4d] group-hover:text-white group-focus-visible:border-[#0b1b4d] group-focus-visible:bg-[#0b1b4d] group-focus-visible:text-white sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>

                <h3 className="relative flex-1 text-xl font-medium leading-snug transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0b1b4d] group-focus-visible:translate-x-2 group-focus-visible:text-[#0b1b4d] sm:text-2xl">
                  {title}
                </h3>

                <ArrowUpRight
                  aria-hidden="true"
                  className="relative h-6 w-6 shrink-0 text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0b1b4d] group-focus-visible:text-[#0b1b4d] sm:h-7 sm:w-7"
                />
              </a>

              {/* Closing line under the last row */}
              {i === models.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ animationDelay: `${450 + models.length * 140}ms` }}
                  className={`absolute bottom-0 left-0 h-px w-full bg-white/20 ${
                    inView ? 'dm-draw' : 'dm-off'
                  }`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}