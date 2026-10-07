'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Crown, PackageSearch, Rocket, Sparkles, Sprout, Star } from 'lucide-react'

/*
  Palette (same design system)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Packages & Pricing (Research Only)'
const SUBTITLE_TAG = 'Wholesale Research Tiers'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const packages = [
  {
    id: 'starter',
    name: 'Starter Research Package',
    sub: 'One-Time',
    icon: Sprout,
    price: [79],
    priceLabel: 'One-Time',
    features: [
      'Research from 1 brand or distributor',
      'Up to 2 profitable products',
      'Target ROI: 15%–20%',
      'Basic Buy Box & competition check',
    ],
    bestFor: 'New or low-budget Re-Sellers',
    href: '/contact?service=wholesale-product-research&package=starter#contact',
  },
  {
    id: 'growth',
    name: 'Growth Research Package',
    sub: 'One-Time',
    icon: Rocket,
    price: [149],
    priceLabel: 'One-Time',
    features: [
      'Research from 1–2 brands or distributors',
      'Up to 4 profitable products',
      'Target ROI: 20%–25%',
      'Seller dominance ≤ 40%',
      'Demand & competition validation',
    ],
    bestFor: 'Growing Amazon Re-Sellers',
    href: '/contact?service=wholesale-product-research&package=growth#contact',
  },
  {
    id: 'pro',
    name: 'Pro Research Package',
    sub: 'One-Time',
    icon: Crown,
    price: [249],
    priceLabel: 'One-Time',
    featured: true,
    features: [
      'Research from multiple brands/distributors',
      'Up to 6 high-potential products',
      'Target ROI: 25%–30%',
      'Detailed profit & cost breakdown',
      'Low-competition product focus',
    ],
    bestFor: 'Professional sellers & investors',
    href: '/contact?service=wholesale-product-research&package=pro#contact',
  },
  {
    id: 'custom',
    name: 'Custom Research Package',
    sub: 'Based on workload',
    icon: PackageSearch,
    price: [59],
    priceLabel: 'Starting from (based on workload)',
    features: [
      'Large catalogs',
      'Multiple brands',
      'Special ROI targets',
      'Category-specific needs',
    ],
    bestFor: 'We offer a Custom Product Research Package.',
    href: '/contact?service=wholesale-product-research&package=custom#contact',
  },
]

// Parallax depth per card
const depth = [
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]',
]

function CountUp({ to, start }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const dur = 1400
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, to])

  return (
    <span className="relative inline-block tabular-nums" aria-hidden="true">
      <span className="invisible">{to}</span>
      <span className="absolute inset-0 text-center">{value}</span>
    </span>
  )
}

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

function PackageCard({ pkg, index }) {
  const [ref, seen] = useInView()
  const { name, sub, icon: Icon, price, priceLabel, features, bestFor, href, featured } = pkg
  const priceText = price.map((n) => n).join('–')

  return (
    <li
      ref={ref}
      className={`${seen ? 'animate-pop' : 'opacity-0'} ${depth[index % depth.length]} mx-auto w-full max-w-md motion-reduce:animate-none lg:max-w-none ${featured ? 'lg:-my-4' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <article
        className={`group/card relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#061330] shadow-[6px_6px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:shadow-[10px_10px_0_#7FAFE6] ${featured ? 'bg-[#BFD8F5]' : 'bg-white'}`}
      >
        {/* Header */}
        <header className={`relative overflow-hidden border-b-2 border-[#061330] px-5 pt-6 pb-5 text-center text-[#E8F1FC] ${featured ? 'bg-[#061330]' : 'bg-[#0F2F6E]'}`}>
          <span aria-hidden="true" className="absolute -top-16 -left-16 size-44 animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/20 motion-reduce:animate-none" />

          <span className="relative mx-auto grid size-12 place-items-center">
            <span aria-hidden="true" className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#BFD8F5]/50 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7FAFE6]" />
            </span>
            <span
              className={`grid size-12 animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] transition-transform duration-500 ${EASE} group-hover/card:rotate-[360deg] motion-reduce:animate-none`}
              style={{ animationDelay: `${index * 350}ms` }}
            >
              <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
            </span>
          </span>

          <h3 className="relative mt-3 text-xl font-black tracking-wide uppercase sm:text-2xl">{name}</h3>
          <p className="relative mt-0.5 text-sm font-medium text-[#E8F1FC]/80">{sub}</p>

          {featured && (
            <span aria-hidden="true" className="absolute top-0 right-0 size-24 overflow-hidden">
              <span className="absolute top-5 -right-9 flex w-32 rotate-45 items-center justify-center gap-1 border-y-2 border-[#061330] bg-[#7FAFE6] py-0.5 text-[0.65rem] font-black tracking-wider text-[#061330] uppercase">
                <Star size={10} fill="currentColor" className="animate-orbit motion-reduce:animate-none" />
                Pro Tier
              </span>
            </span>
          )}
        </header>

        {/* Price */}
        <div className="px-5 pt-7 text-center text-[#061330]">
          <p aria-label={`$${priceText} ${priceLabel}`} className="flex items-start justify-center gap-1 text-[#0F2F6E]">
            <span aria-hidden="true" className="mt-2 text-xl font-black sm:text-2xl">$</span>
            <span aria-hidden="true" className="text-5xl font-black tracking-tight sm:text-6xl">
              {price.map((n, i) => (
                <span key={n}>
                  {i > 0 && '–'}
                  <CountUp to={n} start={seen} />
                </span>
              ))}
            </span>
          </p>
          <p className="mt-1 text-sm font-bold sm:text-base">{priceLabel}</p>
        </div>

        {/* Features */}
        <ul className="mt-6 flex-1 px-5 text-[#1B2F57]">
          {features.map((f) => (
            <li
              key={f}
              className={`group/row flex cursor-default items-start gap-3 border-b-2 border-dashed border-[#0F2F6E]/20 py-2.5 text-sm font-medium transition-transform duration-300 ${EASE} last:border-0 hover:translate-x-1.5 hover:text-[#061330] sm:text-[0.95rem]`}
            >
              <CheckCircle2
                size={20}
                strokeWidth={2.2}
                aria-hidden="true"
                className={`mt-px shrink-0 text-[#0F2F6E] transition-all duration-500 ${EASE} group-hover/row:rotate-[360deg] group-hover/row:scale-125 group-hover/row:fill-[#7FAFE6]`}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 px-5 text-center">
          <Link
            href={href}
            aria-label={`Click here for the ${name}`}
            className="group/btn relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#0F2F6E] py-2 pr-2 pl-7 font-black text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-[#7FAFE6] hover:text-[#061330] hover:shadow-[1px_1px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E] active:shadow-none"
          >
            <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
            <span className="relative">Click Here</span>
            <span className={`relative grid size-8 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] transition-transform duration-300 ${EASE} group-hover/btn:translate-x-1 group-hover/btn:scale-110`}>
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Best for */}
        <p className={`mx-5 mt-6 mb-5 rounded-2xl border-2 border-[#061330] px-4 py-3 text-center text-sm leading-snug text-[#061330] shadow-[3px_3px_0_#061330] ${featured ? 'bg-[#E8F1FC]' : 'bg-[#BFD8F5]'}`}>
          <strong className="font-extrabold">Best For:</strong> {bestFor}
        </p>
      </article>
    </li>
  )
}

export default function PricingSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()

  // Live pointer parallax (CSS variables, no re-renders)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let visible = false
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(el)

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

  const popHeader = headerSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="pricing-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-16 sm:py-20 lg:py-28"
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
        
        {/* Header Section */}
        <div ref={headerRef} className={`mb-14 text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6]" />
            {SUBTITLE_TAG}
          </div>

          <h2
            id="pricing-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Grid for 4 packages */}
        <ul className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </ul>

      </div>
    </section>
  )
}