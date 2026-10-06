'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, Check, FileWarning, Scale, ShieldCheck, ShoppingCart, TrendingDown, UserX } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Amazon Brand Services for Protection, Control & Sustainable Growth'

const risks = [
  { text: 'Unauthorized sellers', icon: UserX },
  { text: 'Price erosion and MAP violations', icon: TrendingDown },
  { text: 'Listing hijacks and content abuse', icon: FileWarning },
  { text: 'Loss of Buy Box control', icon: ShoppingCart },
  { text: 'Policy and compliance risks', icon: Scale },
]

function Dot() {
  return (
    <span className="relative size-2.5 shrink-0 rounded-full bg-[#7FAFE6]">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#7FAFE6] motion-reduce:hidden" />
    </span>
  )
}

export default function BrandServicesSection() {
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
      aria-labelledby="brand-services-heading"
      className="relative isolate overflow-hidden bg-[#EEF4FC] py-16 text-[#061330] sm:py-20 lg:py-28"
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
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#BFD8F5]/60 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-6">
          <p
            className={`${pop} inline-flex items-center gap-3 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}
          >
            <Dot />
            Amazon USA marketplace
            <Dot />
          </p>

          <h2
            id="brand-services-heading"
            aria-label={TITLE}
            className="mt-6 text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${150 + i * 60}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <div
            className={`${pop} mt-6 max-w-xl space-y-4 text-base leading-relaxed text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '800ms' }}
          >
            <p>
              At TechCloud Venture, our Amazon Services for Brands are designed for brands that want control,
              protection, and long-term stability in the Amazon USA marketplace.
            </p>
            <p>
              We help brands protect their identity, manage their Amazon presence, and scale responsibly, using
              Amazon-approved tools and compliance-first strategies.
            </p>
          </div>

          <p
            className={`${pop} mt-6 flex max-w-xl items-start gap-3 text-base font-extrabold text-[#061330] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '950ms' }}
          >
            <span className="mt-0.5 grid size-8 shrink-0 animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] motion-reduce:animate-none">
              <ArrowDown size={16} strokeWidth={3} aria-hidden="true" />
            </span>
            Amazon offers massive reach—but without structured brand management, it can quickly lead to:
          </p>

          <ul className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            {risks.map(({ text, icon: Icon }, i) => (
              <li
                key={text}
                className={`${pop} motion-reduce:animate-none`}
                style={{ animationDelay: `${1100 + i * 140}ms` }}
              >
                <div
                  className={`group flex h-full cursor-default items-center gap-3 rounded-2xl border-2 border-[#061330] bg-white px-3.5 py-3 text-sm font-semibold shadow-[3px_3px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:-translate-y-1 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6] ${i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
                >
                  <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] transition-transform duration-500 ease-[cubic-bezier(0.3,1.6,0.5,1)] group-hover:rotate-[360deg] group-hover:bg-[#7FAFE6]">
                    <Icon size={18} strokeWidth={2.2} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-0" />
                    <Check size={20} strokeWidth={3} aria-hidden="true" className="absolute scale-0 transition-transform duration-300 group-hover:scale-100" />
                  </span>
                  {text}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="lg:col-span-6" aria-hidden="true">
          <div className="relative mx-auto w-full max-w-xl [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] lg:max-w-none">
            {/* Orbit rings behind the image */}
            <div className="absolute -inset-[10%] -z-10 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/30 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
              <span className="absolute right-[8%] bottom-[14%] size-3 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
            </div>
            <div className="absolute -inset-[4%] -z-10 animate-orbit rounded-full border-2 border-dotted border-[#0F2F6E]/25 motion-reduce:animate-none">
              <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#061330] bg-white" />
            </div>

            {/* Image card */}
            <div className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: '400ms' }}>
              <div className="group relative aspect-[63/52] -rotate-2 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#BFD8F5] shadow-[8px_8px_0_#061330] transition-all duration-500 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#0F2F6E]">
                <Image
                  src="/images/amazon-brand-services.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Sticker: protected */}
            <div
              className={`${pop} absolute -top-4 -left-2 [translate:calc(var(--mx,0)*18px)_calc(var(--my,0)*18px)] motion-reduce:animate-none sm:-left-6`}
              style={{ animationDelay: '1000ms' }}
            >
              <span className="inline-flex -rotate-6 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#E8F1FC] px-4 py-2 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:text-base">
                <ShieldCheck size={18} strokeWidth={2.2} />
                Brand protected
              </span>
            </div>

            {/* Sticker: compliance */}
            <div
              className={`${pop} absolute -bottom-5 left-3 [translate:calc(var(--mx,0)*26px)_calc(var(--my,0)*26px)] motion-reduce:animate-none sm:left-8`}
              style={{ animationDelay: '1250ms' }}
            >
              <span
                className="inline-flex rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#7FAFE6] px-4 py-2 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:text-base"
                style={{ animationDelay: '600ms' }}
              >
                <Scale size={18} strokeWidth={2.2} />
                Compliance-first
              </span>
            </div>

            {/* Spinning stamp */}
            <div
              className={`${pop} absolute -top-6 -right-2 size-24 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-right-5 sm:size-28 lg:size-32`}
              style={{ animationDelay: '1450ms' }}
            >
              <div className="relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:rotate-12 hover:scale-110 hover:bg-[#061330]">
                <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                  <defs>
                    <path id="brand-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#brand-stamp-path" textLength="214" lengthAdjust="spacing">
                      Brand protection ✦ Brand protection ✦
                    </textPath>
                  </text>
                </svg>
                <ShieldCheck className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}