'use client'

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Take Control of Your Brand on Amazon'
const CTA_TEXT = 'Optimize My Brand Store'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

export default function CTASection() {
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
      aria-labelledby="cta-section-heading"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
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
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#BFD8F5]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#E8F1FC]/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div
          className={`${pop} relative overflow-hidden rounded-[2.5rem] border-2 border-[#061330] bg-[#0F2F6E] px-6 py-16 text-center shadow-[10px_10px_0_#061330] transition-all duration-500 ${EASE} sm:px-12 sm:py-20 lg:py-24 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)] motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Decorative background glow circles inside the banner */}
          <div aria-hidden="true" className="absolute -left-20 -top-20 size-72 rounded-full bg-[#BFD8F5]/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-20 -bottom-20 size-72 rounded-full bg-[#7FAFE6]/10 blur-3xl" />

          {/* Heading */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2
              id="cta-section-heading"
              aria-label={TITLE}
              className="text-3xl leading-[1.1] font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {TITLE.split(' ').map((word, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                  style={{ animationDelay: `${300 + i * 50}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>

            {/* CTA Button */}
            <div
              className={`${pop} mt-10 motion-reduce:animate-none`}
              style={{ animationDelay: '800ms' }}
            >
              <Link href="/contact?service=brand-store-seo#contact"
                className={`group inline-flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-[#061330] bg-white px-8 py-4 text-base font-black text-[#0F2F6E] shadow-[6px_6px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1.5 hover:bg-[#E8F1FC] hover:shadow-[10px_10px_0_#BFD8F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg`}
              >
                <span>{CTA_TEXT}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-xl border-2 border-[#061330] bg-[#0F2F6E] text-white transition-transform duration-300 ${EASE} group-hover:translate-x-1 group-hover:bg-[#061330]">
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}