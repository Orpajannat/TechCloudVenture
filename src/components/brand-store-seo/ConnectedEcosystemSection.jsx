'use client'

import { useEffect, useRef, useState } from 'react'
import { BarChart3, DollarSign, TrendingUp, Users2 } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'How Our Brand Store SEO Services Work Together'
const SUBTITLE = 'Our services are designed to work as a connected store ecosystem:'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const benefits = [
  {
    title: 'Increased store traffic',
    text: 'Drive more qualified shoppers to your brand storefront.',
    icon: Users2,
  },
  {
    title: 'Higher Conversion Rates',
    text: 'Better sales performance',
    icon: TrendingUp,
  },
  {
    title: 'Stronger Brand Storytelling',
    text: 'Clear brand messaging',
    icon: BarChart3,
  },
  {
    title: 'Improved Brand Authority',
    text: 'Greater marketplace trust',
    icon: DollarSign,
  },
]

export default function ConnectedEcosystemSection() {
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
      aria-labelledby="connected-ecosystem-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#BFD8F5]/30 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#E8F1FC]/60 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading & Subtitle ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
          <h2
            id="connected-ecosystem-heading"
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

        {/* ---------- Cards Grid ---------- */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 [translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]">
          {benefits.map(({ title, text, icon: Icon }, i) => (
            <div
              key={title}
              className={`${pop} motion-reduce:animate-none`}
              style={{ animationDelay: `${600 + i * 150}ms` }}
            >
              <div className={`group relative flex h-full flex-col items-center rounded-3xl border-2 border-[#061330] bg-white p-6 text-center shadow-[6px_6px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:bg-[#E8F1FC] hover:shadow-[10px_10px_0_#0F2F6E]`}>
                {/* Icon bubble */}
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] text-[#0F2F6E] shadow-[3px_3px_0_#061330] transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-[#0F2F6E] group-hover:text-[#BFD8F5]">
                  <Icon size={26} strokeWidth={2.2} aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-xl font-black tracking-tight text-[#061330]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#1B2F57] sm:text-base">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}









