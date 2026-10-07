'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, CircleHelp } from 'lucide-react'

/*
  Palette (same as the hero, plus the lighter sky blues)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'FAQs – Brand Account Management'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

// TODO: only the first answer was visible in the design. Replace the other three.
const faqs = [
  {
    q: 'Do you guarantee account safety?',
    a: 'No one can guarantee Amazon outcomes. We minimize risk through compliance-first execution.',
  },
  { q: 'Do you handle suspensions?', a: 'Add your answer here.' },
  { q: 'Will you access my Amazon account?', a: 'Add your answer here.' },
  { q: 'Do I need a Brand Registry?', a: 'Add your answer here.' },
]

export default function FaqSection() {
  const ref = useRef(null)
  const uid = useId()
  const [seen, setSeen] = useState(false)
  const [open, setOpen] = useState(0)

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
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#5B93E6] via-[#A9CCF5] to-[#E8F1FC] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.45) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-white/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#4A88EA]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-white/40 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* ---------- Questions ---------- */}
        <div className="lg:col-span-7 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
          <h2
            id="faq-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-white motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map(({ q, a }, i) => {
              const on = open === i
              const btnId = `${uid}-q${i}`
              const panelId = `${uid}-a${i}`
              return (
                <div
                  key={q}
                  className={`${pop} motion-reduce:animate-none`}
                  style={{ animationDelay: `${500 + i * 130}ms` }}
                >
                  <article
                    className={`${on ? 'bg-[#E8F1FC] shadow-[8px_8px_0_#0F2F6E]' : 'bg-white/70 shadow-[4px_4px_0_#061330] hover:-translate-y-1 hover:bg-white'} overflow-hidden rounded-2xl border-2 border-[#061330] transition-all duration-500 ${EASE}`}
                  >
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={on}
                        aria-controls={panelId}
                        onClick={() => setOpen(on ? -1 : i)}
                        className={`${on ? 'bg-[#0F2F6E] text-[#E8F1FC]' : 'text-[#061330]'} group flex w-full cursor-pointer items-center gap-4 px-4 py-4 text-left text-base font-bold transition-colors duration-500 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#0F2F6E] sm:px-5 sm:text-lg`}
                      >
                        {/* Plus morphs into minus */}
                        <span
                          aria-hidden="true"
                          className={`${on ? 'rotate-180 border-[#E8F1FC] bg-[#7FAFE6] text-[#061330]' : 'border-[#061330] bg-[#BFD8F5] text-[#061330] group-hover:rotate-90'} relative grid size-9 shrink-0 place-items-center rounded-full border-2 transition-all duration-500 ${EASE}`}
                        >
                          <span className="absolute h-[3px] w-4 rounded-full bg-current" />
                          <span className={`${on ? 'scale-y-0' : 'scale-y-100'} absolute h-4 w-[3px] rounded-full bg-current transition-transform duration-300`} />
                        </span>

                        <span className="flex-1">{q}</span>

                        <ChevronDown
                          size={22}
                          strokeWidth={2.6}
                          aria-hidden="true"
                          className={`${on ? 'rotate-180' : ''} shrink-0 transition-transform duration-500 ${EASE}`}
                        />
                      </button>
                    </h3>

                    {/* Answer slides open */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid transition-[grid-template-rows] duration-500 ${EASE}`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`${on ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} px-5 py-5 text-base leading-relaxed font-medium text-[#1B2F57] transition-all duration-500 sm:text-lg`}
                        >
                          {a}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="lg:col-span-5" aria-hidden="true">
          <div className="relative mx-auto size-[min(78vw,340px)] [translate:calc(var(--mx,0)*16px)_calc(var(--my,0)*16px)] sm:size-[400px] lg:size-[440px]">
            {/* Rings */}
            <div className="absolute -inset-[6%] animate-orbit-slow rounded-full border-2 border-dashed border-[#061330]/25 motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
              <span className="absolute right-[10%] bottom-[12%] size-3 rounded-full border-2 border-[#061330] bg-white" />
            </div>
            <div className="absolute inset-[6%] animate-orbit rounded-full border-2 border-dotted border-[#061330]/25 motion-reduce:animate-none" />

            {/* Illustration disc */}
            <div className={`${pop} absolute inset-[10%] motion-reduce:animate-none`} style={{ animationDelay: '400ms' }}>
              <div className="relative size-full animate-sway overflow-hidden rounded-full border-2 border-[#061330] bg-[#E8F1FC] shadow-[8px_8px_0_#061330] motion-reduce:animate-none">
                <Image
                  src="/images/faq-illustration.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, 70vw"
                  className="object-contain p-6"
                />
              </div>
            </div>

            {/* Floating question bubbles */}
            {[
              { pos: 'top-[2%] left-[6%]', size: 'size-12 sm:size-14', tilt: '-rotate-12', delay: '900ms', jump: '0ms', bg: 'bg-[#BFD8F5]', depth: '[translate:calc(var(--mx,0)*26px)_calc(var(--my,0)*26px)]' },
              { pos: 'top-[18%] right-[0%]', size: 'size-10 sm:size-12', tilt: 'rotate-12', delay: '1050ms', jump: '500ms', bg: 'bg-white', depth: '[translate:calc(var(--mx,0)*34px)_calc(var(--my,0)*34px)]' },
              { pos: 'bottom-[6%] left-[0%]', size: 'size-11 sm:size-[3.25rem]', tilt: 'rotate-6', delay: '1200ms', jump: '1000ms', bg: 'bg-[#7FAFE6]', depth: '[translate:calc(var(--mx,0)*20px)_calc(var(--my,0)*20px)]' },
            ].map((b, i) => (
              <div key={i} className={`${pop} ${b.pos} ${b.depth} absolute motion-reduce:animate-none`} style={{ animationDelay: b.delay }}>
                <span
                  className={`${b.size} ${b.tilt} ${b.bg} grid animate-jump place-items-center rounded-2xl border-2 border-[#061330] text-[#061330] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}
                  style={{ animationDelay: b.jump }}
                >
                  <CircleHelp className="size-1/2" strokeWidth={2.4} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}