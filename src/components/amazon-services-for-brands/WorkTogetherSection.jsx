'use client'

import { useEffect, useRef, useState } from 'react'
import { ClipboardList, Layers, LifeBuoy, Plus, Store, TrendingUp } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'How Our Brand Services Work Together'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const services = [
  { title: 'Brand protection', text: 'safeguards your identity', icon: LifeBuoy, tone: 'bg-[#E8F1FC]', tilt: '-rotate-2', link: 'hidden sm:grid' },
  { title: 'Account management', text: 'Maintains compliance and stability', icon: TrendingUp, tone: 'bg-[#BFD8F5]', tilt: 'rotate-1', link: 'hidden lg:grid' },
  { title: 'Listing management', text: 'Drives visibility and conversion', icon: ClipboardList, tone: 'bg-[#7FAFE6]', tilt: '-rotate-1', link: 'hidden sm:grid' },
  { title: 'Brand Store', text: 'SEO strengthens brand authority', icon: Store, tone: 'bg-[#E8F1FC]', tilt: 'rotate-2', link: null },
]

// Parallax depth per card (literal classes so Tailwind can see them)
const depth = [
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
]

export default function WorkTogetherSection() {
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
      aria-labelledby="work-together-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-16 text-[#061330] sm:py-20 lg:py-28"
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
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none sm:size-[1040px]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border-2 border-dotted border-[#0F2F6E]/15 motion-reduce:animate-none sm:size-[640px]" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="work-together-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p
            className={`${pop} mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#1B2F57] motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '650ms' }}
          >
            Our services form a complete Amazon brand management ecosystem
          </p>
        </div>

        {/* ---------- Cards ---------- */}
        <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, text, icon: Icon, tone, tilt, link }, i) => (
            <li
              key={title}
              className={`${pop} ${depth[i]} relative mx-auto w-full max-w-sm motion-reduce:animate-none sm:max-w-none`}
              style={{ animationDelay: `${800 + i * 150}ms` }}
            >
              <div className={`${tilt} h-full transition-transform duration-500 ${EASE} hover:-translate-y-2 hover:rotate-0`}>
                <div
                  className={`${tone} group flex h-full cursor-default flex-col items-center rounded-3xl border-2 border-[#061330] px-5 py-8 text-center shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:scale-105 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[8px_8px_0_#0F2F6E]`}
                >
                  {/* Icon with its own orbit */}
                  <div className="relative grid size-16 place-items-center">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-2 animate-orbit rounded-full border-2 border-dashed border-[#061330]/40 transition-colors duration-300 group-hover:border-[#7FAFE6] motion-reduce:animate-none"
                    >
                      <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6] group-hover:border-[#E8F1FC]" />
                    </span>
                    <span
                      className={`grid size-16 animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330] motion-reduce:animate-none`}
                      style={{ animationDelay: `${i * 350}ms` }}
                    >
                      <Icon size={28} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-black tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-sm leading-snug font-medium opacity-80">{text}</p>
                </div>
              </div>

              {/* Link chip joining this card to the next one */}
              {link && (
                <span
                  aria-hidden="true"
                  className={`${link} absolute top-1/2 -right-[1.625rem] z-10 size-8 -translate-y-1/2 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330]`}
                >
                  <Plus size={16} strokeWidth={3} className="animate-orbit motion-reduce:animate-none" />
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* ---------- Footer note ---------- */}
        <div
          className={`${pop} mt-12 flex justify-center [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] motion-reduce:animate-none sm:mt-14`}
          style={{ animationDelay: '1500ms' }}
        >
          <p
            className={`group flex max-w-3xl cursor-default items-center gap-4 rounded-3xl border-2 border-[#061330] bg-[#0F2F6E] px-5 py-4 text-sm leading-relaxed font-bold text-[#E8F1FC] shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#061330] hover:shadow-[8px_8px_0_#7FAFE6] sm:text-base`}
          >
            <span className="relative grid size-11 shrink-0 place-items-center">
              <span aria-hidden="true" className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#BFD8F5]/50 motion-reduce:animate-none" />
              <span className={`grid size-11 animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] motion-reduce:animate-none`}>
                <Layers size={20} strokeWidth={2.2} aria-hidden="true" />
              </span>
            </span>
            Brands can start with a single service or adopt a full-service approach based on their needs and growth stage.
          </p>
        </div>
      </div>
    </section>
  )
}