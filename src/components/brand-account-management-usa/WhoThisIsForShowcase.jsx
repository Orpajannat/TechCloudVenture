'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Anchor, Bell, ChevronLeft, ChevronRight, FileWarning, Flag, Globe2, Lock, MapPin, Plane,
  Ship, ShieldAlert, ShieldCheck, ShoppingCart, Store, TrendingDown, TrendingUp, Truck,
} from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Who This Is For?'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const audiences = [
  { title: 'U.S. brands', text: 'Selling on Amazon', icon: Flag, sats: [Store, Truck, ShoppingCart], tone: 'bg-[#E8F1FC]' },
  { title: 'International brands', text: 'Entering Amazon USA', icon: Globe2, sats: [Plane, Ship, MapPin], tone: 'bg-[#BFD8F5]' },
  { title: 'Brands facing', text: 'Policy warnings or performance decline', icon: ShieldAlert, sats: [FileWarning, TrendingDown, Bell], tone: 'bg-[#7FAFE6]' },
  { title: 'Stability', text: 'Companies seeking long-term stability', icon: Anchor, sats: [TrendingUp, Lock, ShieldCheck], tone: 'bg-white' },
]

const N = audiences.length

// Orbiting scene: big centre icon, three satellites circling it
function Scene({ icon: Icon, sats, on }) {
  return (
    <div className="relative mx-auto grid size-44 place-items-center sm:size-48">
      <span aria-hidden="true" className="absolute inset-0 animate-orbit rounded-full border-2 border-dashed border-[#061330]/30 motion-reduce:animate-none">
        {sats.map((Sat, i) => (
          <span key={i} className="absolute inset-0" style={{ transform: `rotate(${i * 120}deg)` }}>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block animate-orbit-rev motion-reduce:animate-none">
                <span className="block" style={{ transform: `rotate(${-i * 120}deg)` }}>
                  <span className="grid size-11 place-items-center rounded-xl border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[2px_2px_0_#061330]">
                    <Sat size={20} strokeWidth={2.2} />
                  </span>
                </span>
              </span>
            </span>
          </span>
        ))}
      </span>
      <span aria-hidden="true" className="absolute inset-[22%] animate-orbit-rev rounded-full border-2 border-dotted border-[#061330]/25 motion-reduce:animate-none" />
      <span className={`${on ? 'animate-jump' : ''} relative grid size-24 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[5px_5px_0_#061330] motion-reduce:animate-none sm:size-28`}>
        {on && <span aria-hidden="true" className="absolute -inset-1 animate-ping rounded-full border-2 border-[#BFD8F5]/70 motion-reduce:hidden" />}
        <Icon className="size-10 sm:size-12" strokeWidth={1.8} />
      </span>
    </div>
  )
}

export default function WhoThisIsForShowcase() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Reveal on scroll + live pointer parallax / 3D tilt (CSS variables, no re-renders)
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

  // Carousel turns on its own; hovering or focusing the stage pauses it
  useEffect(() => {
    if (!seen || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % N), 3200)
    return () => clearInterval(id)
  }, [seen, paused])

  const go = (dir) => setActive((a) => (a + dir + N) % N)
  const pop = seen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="who-showcase-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#5B93E6] via-[#86B4F0] to-[#B7D5F8] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-[#3F72C9]/60 to-transparent sm:h-40" />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-white/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#4A88EA]/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-white/40 motion-reduce:animate-none sm:size-[1040px]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[480px] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border-2 border-dotted border-white/40 motion-reduce:animate-none sm:size-[680px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <h2
          id="who-showcase-heading"
          aria-label={TITLE}
          className="text-center text-3xl leading-[1.1] font-black tracking-tight [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:text-4xl lg:text-5xl"
        >
          {TITLE.split(' ').map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-white motion-reduce:animate-none`}
              style={{ animationDelay: `${100 + i * 80}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* ---------- 3D stage ---------- */}
          <div
            className={`${pop} relative mt-8 h-[28rem] [--card-w:min(70vw,290px)] [perspective:1400px] motion-reduce:animate-none sm:mt-10 sm:h-[30rem] sm:[--card-w:340px]`}
            style={{ animationDelay: '500ms' }}
          >
            {/* Spotlight + floor shadow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[85%] w-[min(100%,720px)] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.5),transparent)]" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-1/2 h-8 w-[min(70%,420px)] -translate-x-1/2 animate-pulse rounded-[50%] bg-[#061330]/35 blur-xl motion-reduce:animate-none" />

            {/* Tilts with the cursor */}
            <div
              className="absolute inset-0 [transform-style:preserve-3d]"
              style={{ transform: 'rotateX(calc(var(--my, 0) * -4deg)) rotateY(calc(var(--mx, 0) * 6deg))' }}
            >
              {audiences.map(({ title, text, icon, sats, tone }, i) => {
                const d = ((((i - active + 1) % N) + N) % N) - 1 // -1, 0, 1, 2 (2 = parked behind)
                const front = d === 0
                const hidden = d === 2
                return (
                  <div
                    key={title}
                    onClick={() => setActive(i)}
                    aria-hidden={!front}
                    className={`${hidden ? 'pointer-events-none opacity-0 transition-none' : `${front ? 'opacity-100' : 'cursor-pointer opacity-80 brightness-75'} transition-all duration-[900ms] ${EASE}`} absolute top-1/2 left-1/2 h-[25rem] -translate-y-1/2 motion-reduce:transition-none sm:h-[26rem]`}
                    style={{
                      width: 'var(--card-w)',
                      zIndex: front ? 3 : hidden ? 0 : 2,
                      transform: `translateX(calc(-50% + ${d * 0.64} * var(--card-w))) translateZ(${front ? 60 : hidden ? -500 : -220}px) rotateY(${-d * 36}deg) scale(${front ? 1 : 0.9})`,
                    }}
                  >
                    <div className={`${tone} relative flex h-full flex-col items-center overflow-hidden rounded-[2rem] border-2 border-[#061330] px-5 pt-8 pb-7 text-center text-[#061330] shadow-[8px_8px_0_#061330]`}>
                      <Scene icon={icon} sats={sats} on={front} />

                      <h3 className="mt-6 text-2xl leading-tight font-black tracking-tight">{title}</h3>
                      <p className="mt-2 text-base leading-snug font-medium text-[#1B2F57]">{text}</p>

                      {/* Live glare that slides with the cursor */}
                      {front && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                          style={{
                            background:
                              'linear-gradient(115deg, transparent calc(35% + var(--mx, 0) * 30%), rgba(255,255,255,0.9) calc(50% + var(--mx, 0) * 30%), transparent calc(65% + var(--mx, 0) * 30%))',
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className={`absolute top-1/2 left-0 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:scale-110 hover:bg-[#BFD8F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] sm:left-4 sm:size-12`}
            >
              <ChevronLeft size={22} strokeWidth={2.6} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className={`absolute top-1/2 right-0 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:scale-110 hover:bg-[#BFD8F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] sm:right-4 sm:size-12`}
            >
              <ChevronRight size={22} strokeWidth={2.6} aria-hidden="true" />
            </button>
          </div>

          {/* ---------- Tabs: the readable list, also the controls ---------- */}
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
            {audiences.map(({ title, icon: Icon }, i) => {
              const on = active === i
              return (
                <li key={title} className={`${pop} motion-reduce:animate-none`} style={{ animationDelay: `${900 + i * 120}ms` }}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    className={`${on ? '-translate-y-1 bg-[#BFD8F5] text-[#061330] shadow-[5px_5px_0_#061330]' : 'bg-white/55 text-[#061330] shadow-[3px_3px_0_#061330] hover:bg-white'} inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-[#061330] py-2 pr-4 pl-2 text-sm font-bold transition-all duration-300 ${EASE} hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8F1FC] sm:text-base`}
                  >
                    <span className={`${on ? 'rotate-[360deg] bg-[#0F2F6E] text-[#BFD8F5]' : 'bg-[#BFD8F5] text-[#061330]'} grid size-8 place-items-center rounded-full border-2 border-[#061330] transition-all duration-700 ${EASE}`}>
                      <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    {title}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}