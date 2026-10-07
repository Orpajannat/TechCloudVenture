'use client'

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Transparent Pricing Plans'
const SUBTITLE = 'Choose the right brand store optimization package for your growth stage.'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const plans = [
  {
    name: 'Starter Brand Store',
    price: '$299',
    period: '(One-Time)',
    popular: false,
    features: [
      'Storefront setup (up to 5 pages)',
      'Basic keyword mapping',
    ],
    cta: 'Click Here',
  },
  {
    name: 'Advanced Brand Store SEO',
    price: '$599',
    period: '(One-Time)',
    popular: true,
    features: [
      'SEO-optimized store pages',
      'Category structure',
      'Conversion optimization',
    ],
    cta: 'Click Here',
  },
  {
    name: 'Premium Brand Store Growth',
    price: '$899',
    period: '+',
    badge: 'PREMIUM',
    features: [
      'Ongoing optimization',
      'Performance analysis',
      'Seasonal updates',
    ],
    cta: 'Click Here',
  },
]

export default function PricingSection() {
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
      aria-labelledby="pricing-section-heading"
      className="relative isolate overflow-hidden bg-[#E8F1FC] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#BFD8F5]/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-white/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading & Subtitle ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
          <h2
            id="pricing-section-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#061330] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#0F2F6E] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <p
            className={`${pop} mt-4 text-base font-medium text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '400ms' }}
          >
            {SUBTITLE}
          </p>
        </div>

        {/* ---------- Pricing Cards Grid ---------- */}
        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]">
          {plans.map(({ name, price, period, badge, features, cta }, i) => (
            <div
              key={name}
              className={`${pop} motion-reduce:animate-none`}
              style={{ animationDelay: `${600 + i * 180}ms` }}
            >
              <div className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#061330] bg-white shadow-[8px_8px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:shadow-[12px_12px_0_#0F2F6E]`}>
                {/* Ribbon badge if premium */}
                {badge && (
                  <div className="absolute -right-12 top-6 z-10 rotate-45 bg-[#F59E0B] px-12 py-1 text-center text-xs font-black tracking-wider text-[#061330] shadow-[0_2px_0_#061330]">
                    {badge}
                  </div>
                )}

                {/* Card Header */}
                <div className="bg-[#0F2F6E] px-6 py-6 text-center text-white">
                  <h3 className="text-xl font-black tracking-tight text-[#BFD8F5] sm:text-2xl">
                    {name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="border-b-2 border-[#061330] bg-[#E8F1FC]/50 px-6 py-8 text-center">
                  <div className="flex items-start justify-center">
                    <span className="mt-2 text-2xl font-black text-[#061330]">$</span>
                    <span className="text-5xl font-black tracking-tight text-[#061330] sm:text-6xl">
                      {price.replace('$', '')}
                    </span>
                  </div>
                  <span className="mt-1 block text-sm font-bold text-[#1B2F57]">
                    {period}
                  </span>
                </div>

                {/* Features List */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <ul className="space-y-4">
                    {features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#0F2F6E]">
                          <Check size={14} strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold leading-snug text-[#061330] sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link href={`/contact?service=brand-store-seo&plan=${encodeURIComponent(name)}#contact`}
                      className={`block w-full cursor-pointer rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] py-3.5 text-center text-base font-black text-[#BFD8F5] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:bg-[#061330] hover:text-white hover:shadow-[6px_6px_0_#7FAFE6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E]`}
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}