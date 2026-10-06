'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  Check,
  CheckCircle2,
  FileSearch,
  Filter,
  Layers,
  PackageCheck,
  ShieldAlert,
  Users,
} from 'lucide-react'

/*
  Palette (same as previous sections)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Our team'
const SUBTITLE_TAG = 'Expert Wholesale Analysis'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const teamPoints = [
  { text: 'Reviews the provided catalog', icon: FileSearch },
  { text: 'Analyzes all products (sometimes 50-100+ SKUs)', icon: Layers },
  { text: 'Filters out risky or low-profit items', icon: Filter },
  { text: 'Delivers only profitable, Amazon-ready products', icon: PackageCheck },
]

const bottomNotes = [
  'We do research only.',
  'We do not provide brands or distributors in this service.',
]

// Pops a block when it scrolls into view
function useInView(threshold = 0.15) {
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

export default function OurTeamSection() {
  const ref = useRef(null)
  const [visualRef, visualSeen] = useInView()
  const [contentRef, contentSeen] = useInView(0.1)

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

  const popVisual = visualSeen ? 'animate-pop' : 'opacity-0'
  const popContent = contentSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="our-team-heading"
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
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#BFD8F5]/70 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Content Grid (Visual on left, Text on right matching source layout) */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          
          {/* Visual / Illustration Card */}
          <div ref={visualRef} className="lg:col-span-6" aria-hidden="true">
            <div className="relative mx-auto w-full max-w-xl [translate:calc(var(--mx,0)*14px)_calc(var(--my,0)*14px)] lg:max-w-none">
              
              {/* Rings */}
              <div className="absolute -inset-[8%] -z-10 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/30 motion-reduce:animate-none">
                <span className="absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
                <span className="absolute right-[8%] bottom-[14%] size-3 rounded-full border-2 border-[#061330] bg-[#BFD8F5]" />
              </div>
              <div className="absolute -inset-[3%] -z-10 animate-orbit rounded-full border-2 border-dotted border-[#0F2F6E]/25 motion-reduce:animate-none">
                <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#061330] bg-white" />
              </div>

              {/* Image card */}
              <div className={`${popVisual} motion-reduce:animate-none`} style={{ animationDelay: '200ms' }}>
                <div className={`group relative aspect-[8/7] -rotate-1 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#E8F4FF] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#0F2F6E]`}>
                  <Image
                    src="/images/our-team.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Sticker */}
              <div
                className={`${popVisual} absolute -bottom-5 -left-1 [translate:calc(var(--mx,0)*24px)_calc(var(--my,0)*24px)] motion-reduce:animate-none sm:-left-5`}
                style={{ animationDelay: '800ms' }}
              >
                <span className="inline-flex -rotate-3 animate-jump items-center gap-2 rounded-full border-2 border-[#061330] bg-[#7FAFE6] px-4 py-2 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:scale-110 hover:bg-[#BFD8F5] motion-reduce:animate-none sm:text-base">
                  <Users size={18} strokeWidth={2.2} />
                  Dedicated Analysts
                </span>
              </div>

              {/* Stamp */}
              <div
                className={`${popVisual} absolute -top-6 -right-2 size-24 [translate:calc(var(--mx,0)*30px)_calc(var(--my,0)*30px)] motion-reduce:animate-none sm:-right-5 sm:size-28 lg:size-32`}
                style={{ animationDelay: '1000ms' }}
              >
                <div className={`relative size-full cursor-default rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:rotate-12 hover:scale-110 hover:bg-[#061330]`}>
                  <svg viewBox="0 0 100 100" className="size-full animate-orbit motion-reduce:animate-none">
                    <defs>
                      <path id="team-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                    </defs>
                    <text fontSize="10.5" fontWeight="800" fill="currentColor">
                      <textPath href="#team-stamp-path" textLength="214" lengthAdjust="spacing">
                        Catalog Review ✦ Catalog Review ✦
                      </textPath>
                    </text>
                  </svg>
                  <Users className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Text & Points */}
          <div ref={contentRef} className="space-y-6 lg:col-span-6 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
            
            <div className={`${popContent} motion-reduce:animate-none`}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330]">
                <span className="size-2 rounded-full bg-[#7FAFE6]" />
                {SUBTITLE_TAG}
              </div>

              <h2
                id="our-team-heading"
                aria-label={TITLE}
                className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
              >
                {TITLE.split(' ').map((word, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="mr-[0.25em] inline-block cursor-default transition-all duration-300 last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330]"
                  >
                    {word}
                  </span>
                ))}
              </h2>
            </div>

            {/* Team bullet points */}
            <ul className="space-y-3.5">
              {teamPoints.map(({ text, icon: Icon }, i) => (
                <li
                  key={text}
                  className={`${popContent} motion-reduce:animate-none`}
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#BFD8F5]'} group flex cursor-default items-center gap-3.5 rounded-2xl border-2 border-[#061330] px-4 py-3 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:translate-x-2 hover:-translate-y-0.5 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] sm:text-base`}
                  >
                    <span
                      className={`relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover:rotate-[360deg] group-hover:border-[#E8F1FC] group-hover:bg-[#7FAFE6] group-hover:text-[#061330]`}
                    >
                      <Icon size={17} strokeWidth={2.2} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-0" />
                      <Check size={18} strokeWidth={3.2} aria-hidden="true" className="absolute scale-0 transition-transform duration-300 group-hover:scale-100" />
                    </span>
                    {text}
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom Disclaimer / Notes Pills */}
            <div
              className={`${popContent} space-y-2.5 pt-2 motion-reduce:animate-none`}
              style={{ animationDelay: '600ms' }}
            >
              {bottomNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="inline-flex w-full items-center gap-3 rounded-2xl border-2 border-[#061330] bg-[#E8F1FC] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] sm:text-sm"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5]">
                    <CheckCircle2 size={14} strokeWidth={2.5} />
                  </span>
                  <span>{note}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}