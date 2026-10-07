'use client'

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Wrench, Sparkles, ArrowRight } from 'lucide-react'

/*
  Palette (matching your design)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Choose Your Optimization Package'
const SUBTITLE = 'Professional solutions tailored for your Amazon store.'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const packages = [
  {
    name: 'Single Listing Fix',
    price: '$49',
    unit: 'ASIN',
    icon: Wrench,
    popular: false,
    features: [
      'Suppression fix OR variation correction',
      'Attribute cleanup',
    ],
  },
  {
    name: 'Listing Optimization Package',
    price: '$199',
    unit: 'Up to 5 ASINs',
    icon: Sparkles,
    popular: true,
    features: [
      'Full listing audit',
      'SEO content optimization',
      'Image compliance check',
    ],
  },
]

export default function PricingPackagesSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

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
          tx = Math.sin(t / 2600) * 0.5
          ty = Math.cos(t / 3400) * 0.5
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
      aria-labelledby="pricing-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop pattern & ambient glow */}
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
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-heading"
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

        {/* ---------- Pricing Cards Grid ---------- */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 [translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)] sm:mt-16 md:grid-cols-2">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon
            const isHovered = hoveredCard === i
            return (
              <div
                key={pkg.name}
                className={`${pop} relative flex flex-col rounded-3xl border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:-translate-y-2 hover:shadow-[12px_12px_0_#7FAFE6] motion-reduce:animate-none`}
                style={{ animationDelay: `${600 + i * 200}ms` }}
                onPointerEnter={() => setHoveredCard(i)}
                onPointerLeave={() => setHoveredCard(null)}
              >
                {/* Popular badge if applicable */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#061330] bg-[#BFD8F5] px-4 py-1 text-xs font-black uppercase tracking-wider text-[#061330] shadow-[3px_3px_0_#061330]">
                    Most Popular
                  </div>
                )}

                {/* Header box */}
                <div className="rounded-t-[calc(1.5rem-2px)] bg-[#061330] px-6 py-6 text-center text-[#E8F1FC] sm:py-8">
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl border-2 border-[#E8F1FC]/30 bg-[#0F2F6E] text-[#BFD8F5]">
                    <Icon className="size-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black tracking-tight sm:text-2xl">{pkg.name}</h3>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  {/* Price Block */}
                  <div className="mb-6 text-center border-b-2 border-[#061330]/10 pb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-black text-[#0F2F6E]">$</span>
                      <span className="text-5xl font-black tracking-tight text-[#061330] sm:text-6xl">
                        {pkg.price.replace('$', '')}
                      </span>
                    </div>
                    <span className="mt-1 inline-block rounded-full bg-[#0F2F6E]/10 px-3 py-0.5 text-xs font-bold text-[#0F2F6E]">
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mb-8 space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-bold sm:text-base">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5]">
                          <CheckCircle2 className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-[#061330]/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={`/contact?service=product-listing-management&package=${encodeURIComponent(pkg.name)}#contact`}
                    className="group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-[#061330] bg-[#061330] py-3.5 px-6 text-center text-base font-black text-[#E8F1FC] shadow-[4px_4px_0_#7FAFE6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:shadow-[6px_6px_0_#7FAFE6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#061330]"
                  >
                    <span>Click Here</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}