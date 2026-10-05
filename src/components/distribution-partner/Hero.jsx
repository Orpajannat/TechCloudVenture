'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Globe2, Package, ShieldCheck, Truck } from 'lucide-react'

/*
  Palette (all blue, softened)
  bg      #0F2F6E   deep blue
  ink     #061330   outlines + shadows + dark text
  sky     #BFD8F5   main soft accent
  mist    #E8F1FC   near-white
  steel   #7FAFE6   mid blue accent
*/

const highlights = [
  { text: 'Verified US Brand Reach', icon: ShieldCheck, tone: 'bg-[#BFD8F5]', tilt: '-rotate-3' },
  { text: 'Rapid Wholesale Expansion', icon: Truck, tone: 'bg-[#E8F1FC]', tilt: 'rotate-2' },
  { text: 'Global Brand Sourcing', icon: Globe2, tone: 'bg-[#7FAFE6]', tilt: '-rotate-2' },
]

const bubbles = [
  { left: '6%', size: 14, dur: 16, delay: 0, drift: 30 },
  { left: '14%', size: 26, dur: 22, delay: 4, drift: -40 },
  { left: '25%', size: 10, dur: 14, delay: 8, drift: 24 },
  { left: '38%', size: 20, dur: 19, delay: 2, drift: -30 },
  { left: '49%', size: 12, dur: 15, delay: 10, drift: 36 },
  { left: '61%', size: 28, dur: 24, delay: 6, drift: -44 },
  { left: '72%', size: 16, dur: 17, delay: 1, drift: 28 },
  { left: '83%', size: 10, dur: 13, delay: 7, drift: -22 },
  { left: '92%', size: 22, dur: 21, delay: 3, drift: 38 },
]

const orbiters = [
  { icon: Globe2, angle: 0, delay: 900, bg: 'bg-[#7FAFE6]' },
  { icon: Truck, angle: 120, delay: 1100, bg: 'bg-[#E8F1FC]' },
  { icon: ShieldCheck, angle: 240, delay: 1300, bg: 'bg-[#BFD8F5]' },
]

function HopWord({ text, start = 0 }) {
  return (
    <span className="inline-block whitespace-nowrap" aria-hidden="true">
      {text.split('').map((char, i) => (
        <span key={i} className="hop-letter inline-block cursor-default" style={{ '--i': start + i }}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default function DistributionHeroBlue() {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])

  // Live pointer parallax + idle drift, written straight to CSS variables (no re-renders)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let tx = 0, ty = 0, cx = 0, cy = 0, lastMove = -1e9, raf = 0, visible = true

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
      lastMove = performance.now()
      el.style.setProperty('--px', `${e.clientX - r.left}px`)
      el.style.setProperty('--py', `${e.clientY - r.top}px`)
      el.style.setProperty('--glow', '1')
    }
    const onLeave = () => {
      lastMove = -1e9
      el.style.setProperty('--glow', '0')
    }
    const tick = (t) => {
      if (visible) {
        // no pointer for 2.5s (or touch device): keep the scene alive with a slow wander
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

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(el)
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

  // Click / tap ripple
  const addRipple = (e) => {
    const r = ref.current.getBoundingClientRect()
    const id = `${performance.now()}`
    setRipples((list) => [...list.slice(-5), { id, x: e.clientX - r.left, y: e.clientY - r.top }])
  }

  return (
    <section
      ref={ref}
      onPointerDown={addRipple}
      aria-labelledby="distribution-partner-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#0F2F6E] pt-28 pb-16 text-[#E8F1FC] sm:pt-36 sm:pb-20 lg:pt-32"
    >
      <Image
        src="/images/distribution-partner-hero.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover opacity-20 mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(232,241,252,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 right-0 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob rounded-full bg-[#2B5BB8]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-32 -z-10 size-96 [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob-rev rounded-full bg-[#1B4596]/60 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-56 -left-56 -z-10 size-[560px] [translate:calc(var(--mx,0)*-20px)_calc(var(--my,0)*-20px)] animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -top-64 -right-48 -z-10 size-[620px] [translate:calc(var(--mx,0)*-14px)_calc(var(--my,0)*-14px)] animate-orbit rounded-full border-2 border-dotted border-[#E8F1FC]/15 motion-reduce:animate-none" />

      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
        style={{
          opacity: 'var(--glow, 0)',
          background: 'radial-gradient(420px circle at var(--px, 50%) var(--py, 50%), rgba(127,175,230,0.25), transparent 65%)',
        }}
      />

      {/* Rising bubbles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="absolute -bottom-10 animate-bubble rounded-full border border-[#E8F1FC]/30 bg-[#E8F1FC]/10"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              '--drift': `${b.drift}px`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-7">
          <h1
            id="distribution-partner-heading"
            aria-label="Distribution Partner"
            className="[translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] text-[clamp(2.75rem,11vw,6.5rem)] leading-[0.95] font-black tracking-tight"
          >
            <HopWord text="Distribution" />
            <br />
            <HopWord text="Partner" start={12} />
          </h1>

          <p
            className="mt-6 max-w-xl animate-pop text-base leading-relaxed text-[#E8F1FC]/85 motion-reduce:animate-none sm:text-lg lg:text-xl"
            style={{ animationDelay: '900ms' }}
          >
            Great products deserve a wider reach. Let&apos;s connect your brand with new high-velocity opportunities
            in the US Amazon wholesale ecosystem.
          </p>

          {/* Stickers */}
          <ul className="[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)] mt-7 flex flex-wrap gap-3 sm:gap-4">
            {highlights.map(({ text, icon: Icon, tone, tilt }, i) => (
              <li
                key={text}
                className="animate-pop motion-reduce:animate-none"
                style={{ animationDelay: `${1100 + i * 250}ms` }}
              >
                <div className={`${tilt} transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:-translate-y-1 hover:rotate-0`}>
                  <span
                    className={`${tone} group inline-flex animate-jump cursor-default items-center gap-2 rounded-full border-2 border-[#061330] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:scale-110 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6] motion-reduce:animate-none sm:text-base`}
                    style={{ animationDelay: `${i * 450}ms` }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="transition-transform duration-500 ease-[cubic-bezier(0.3,1.6,0.5,1)] group-hover:rotate-[360deg] group-hover:scale-125"
                    />
                    {text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-9 animate-pop motion-reduce:animate-none" style={{ animationDelay: '1700ms' }}>
            <Link
              href="/our-story#book-call"
              className="group relative inline-flex min-h-14 w-full animate-wiggle items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#BFD8F5] px-8 py-4 text-base font-black text-[#061330] shadow-[6px_6px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:animate-none hover:bg-[#E8F1FC] hover:shadow-[2px_2px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none motion-reduce:animate-none sm:w-auto"
            >
              {/* sweep */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/60 transition-transform duration-700 group-hover:translate-x-[420%]"
              />
              <span className="relative">Become a Partner</span>
              <span className="relative grid size-8 place-items-center rounded-full bg-[#061330] text-[#BFD8F5] transition-transform duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] group-hover:rotate-45 group-hover:scale-110">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* ---------- Orbit (hover to pause) ---------- */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end" aria-hidden="true">
          <div className="[translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] group/orbit relative size-[min(78vw,340px)] sm:size-[400px] lg:size-[460px]">
            {/* Outer satellite ring */}
            <div className="absolute -inset-[6%] animate-orbit-slow rounded-full border border-dotted border-[#E8F1FC]/35 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BFD8F5]" />
              <span className="absolute bottom-[14%] left-[6%] size-2 rounded-full bg-[#7FAFE6]" />
              <span className="absolute right-[10%] bottom-[8%] size-2.5 rounded-full bg-[#E8F1FC]" />
            </div>

            {/* Rings */}
            <div className="absolute inset-0 animate-pop motion-reduce:animate-none" style={{ animationDelay: '500ms' }}>
              <div className={`absolute inset-0 animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/45 transition-colors duration-300 group-hover/orbit:border-[#BFD8F5] motion-reduce:animate-none`} />
              <div className={`absolute inset-[22%] animate-orbit-rev rounded-full border-2 border-dashed border-[#E8F1FC]/25 transition-colors duration-300 group-hover/orbit:border-[#7FAFE6] motion-reduce:animate-none`} />
            </div>

            {/* Centre */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pop motion-reduce:animate-none"
              style={{ animationDelay: '700ms' }}
            >
              <div className="animate-sway motion-reduce:animate-none">
              <div className="group grid size-24 animate-jump cursor-default place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[5px_5px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:scale-110 hover:bg-[#E8F1FC] hover:shadow-[8px_8px_0_#061330] motion-reduce:animate-none sm:size-32 lg:size-40">
                <Package
                  className="size-10 transition-transform duration-500 ease-[cubic-bezier(0.3,1.6,0.5,1)] group-hover:-rotate-12 group-hover:scale-110 sm:size-14 lg:size-20"
                  strokeWidth={1.6}
                />
              </div>
              </div>
            </div>

            {/* Orbiting icons */}
            <div className={`absolute inset-0 animate-orbit motion-reduce:animate-none`}>
              {orbiters.map(({ icon: Icon, angle, delay, bg }, i) => (
                <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`animate-orbit-rev motion-reduce:animate-none`}>
                      <div style={{ transform: `rotate(${-angle}deg)` }}>
                        <div className="animate-pop motion-reduce:animate-none" style={{ animationDelay: `${delay}ms` }}>
                          <div
                            className={`${bg} grid size-14 animate-jump cursor-default place-items-center rounded-2xl border-2 border-[#061330] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:scale-125 hover:rotate-12 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[6px_6px_0_#7FAFE6] motion-reduce:animate-none sm:size-16 lg:size-20`}
                            style={{ animationDelay: `${i * 500}ms` }}
                          >
                            <Icon className="size-7 sm:size-8 lg:size-10" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stamp */}
            <div
              className="absolute -top-2 -right-1 size-24 animate-pop motion-reduce:animate-none sm:top-0 sm:right-0 sm:size-28 lg:-top-4 lg:-right-4 lg:size-32"
              style={{ animationDelay: '1500ms' }}
            >
              <div className="relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:rotate-12 hover:scale-110 hover:bg-[#BFD8F5]">
                <svg viewBox="0 0 100 100" className={`size-full animate-orbit motion-reduce:animate-none`}>
                  <defs>
                    <path id="stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="800" fill="currentColor">
                    <textPath href="#stamp-path" textLength="214" lengthAdjust="spacing">
                      Connected for growth ✦ Connected for growth ✦
                    </textPath>
                  </text>
                </svg>
                <Truck className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          onAnimationEnd={() => setRipples((list) => list.filter((x) => x.id !== r.id))}
          className="pointer-events-none absolute z-20 -mt-5 -ml-5 size-10 animate-ripple rounded-full border-2 border-[#BFD8F5] motion-reduce:hidden"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </section>
  )
}