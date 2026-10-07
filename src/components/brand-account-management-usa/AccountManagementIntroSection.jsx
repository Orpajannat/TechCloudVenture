'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Gauge, HeartPulse, Lock, ShieldCheck } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Amazon Brand Account Management for USA Marketplace'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

// The four areas named in the paragraph, shown as stickers
const focus = [
  { text: 'Account health', icon: HeartPulse, tone: 'bg-[#E8F1FC]', tilt: '-rotate-3' },
  { text: 'Compliance', icon: ShieldCheck, tone: 'bg-[#BFD8F5]', tilt: 'rotate-2' },
  { text: 'Performance', icon: Gauge, tone: 'bg-[#7FAFE6]', tilt: '-rotate-2' },
  { text: 'Risk control', icon: Lock, tone: 'bg-[#E8F1FC]', tilt: 'rotate-3' },
]

function Dot() {
  return (
    <span className="relative size-2.5 shrink-0 rounded-full bg-[#7FAFE6]">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#7FAFE6] motion-reduce:hidden" />
    </span>
  )
}

export default function AccountManagementIntroSection() {
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
      aria-labelledby="account-mgmt-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(232,241,252,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#2B5BB8]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#1B4596]/60 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-6 [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <p
            className={`${pop} inline-flex items-center gap-3 rounded-full border-2 border-[#061330] bg-[#E8F1FC] px-4 py-1.5 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}
          >
            <Dot />
            USA Marketplace
            <Dot />
          </p>

          <h1
            id="account-mgmt-heading"
            aria-label={TITLE}
            className="mt-6 text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                style={{ animationDelay: `${150 + i * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className={`${pop} mt-6 max-w-xl text-base leading-relaxed text-[#E8F1FC]/90 motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '800ms' }}
          >
            Managing an Amazon brand account requires constant attention to{' '}
            <strong className="font-extrabold text-[#BFD8F5]">account health, compliance, performance, and risk control.</strong>{' '}
            Our <strong className="font-extrabold text-[#BFD8F5]">Brand Account Management (USA)</strong> service
            provides complete operational oversight—so your brand stays safe, optimized, and scalable.
          </p>

          {/* Focus stickers */}
          <ul className="mt-8 flex max-w-xl flex-wrap gap-3 sm:gap-4">
            {focus.map(({ text, icon: Icon, tone, tilt }, i) => (
              <li
                key={text}
                className={`${pop} motion-reduce:animate-none`}
                style={{ animationDelay: `${1000 + i * 150}ms` }}
              >
                <div className={`${tilt} transition-transform duration-500 ${EASE} hover:-translate-y-1.5 hover:rotate-0`}>
                  <span
                    className={`${tone} group inline-flex animate-jump cursor-default items-center gap-2 rounded-full border-2 border-[#061330] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:scale-110 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] motion-reduce:animate-none sm:text-base`}
                    style={{ animationDelay: `${i * 450}ms` }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className={`transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:scale-125`}
                    />
                    {text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="lg:col-span-6" aria-hidden="true">
          <div className="relative mx-auto w-full max-w-xl [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] lg:max-w-none">
            {/* Rings behind the image */}
            <div className="absolute -inset-[8%] -z-10 animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/30 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
              <span className="absolute right-[8%] bottom-[14%] size-3 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
            </div>
            <div className="absolute -inset-[3%] -z-10 animate-orbit rounded-full border-2 border-dotted border-[#E8F1FC]/25 motion-reduce:animate-none">
              <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#E8F1FC]" />
            </div>

            {/* Image card */}
            <div className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: '300ms' }}>
              <div className={`group relative aspect-[63/44] rotate-2 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#BFD8F5] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#7FAFE6]`}>
                <Image
                  src="/images/brand-account-management-hero.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Sticker */}
            <div
              className={`${pop} absolute -bottom-5 -left-1 [translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] motion-reduce:animate-none sm:-left-5`}
              style={{ animationDelay: '1000ms' }}
            >
              <span className="inline-flex -rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#E8F1FC] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:text-base">
                <ShieldCheck size={18} strokeWidth={2.2} />
                Safe, optimized, scalable
              </span>
            </div>

            {/* Spinning stamp */}
            <div
              className={`${pop} absolute -top-6 -right-2 size-24 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-right-5 sm:size-28 lg:size-32`}
              style={{ animationDelay: '1250ms' }}
            >
              <div className={`relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-[#E8F1FC]`}>
                <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                  <defs>
                    <path id="account-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#account-stamp-path" textLength="214" lengthAdjust="spacing">
                      USA Marketplace ✦ USA Marketplace ✦
                    </textPath>
                  </text>
                </svg>
                <Gauge className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}