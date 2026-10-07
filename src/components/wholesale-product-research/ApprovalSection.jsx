'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileCheck,
  FileSignature,
  Mail,
  PackageSearch,
  PieChart,
  Receipt,
  Rocket,
  Send,
} from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Client-Provided Brand Product Research'
const SUBTITLE_TAG = 'Wholesale Product Research Service'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

// { t: text, b: true } renders bold
const intro = [
  {
    icon: PackageSearch,
    tone: 'bg-[#E8F1FC]',
    parts: [
      { t: 'Our ' },
      { t: 'Wholesale Product Research Service', b: true },
      { t: ' is designed for Amazon wholesale sellers who already have brand or distributor access and want professionally researched, profitable products based on real data.' },
    ],
  },
  {
    icon: ClipboardCheck,
    tone: 'bg-[#BFD8F5]',
    parts: [
      { t: 'Client must provide the brand name or distributor name and their price sheet. Our team will then research and select profitable wholesale products from that list according to the client’s budget and target ROI.' },
    ],
  },
]

const handled = [
  { text: 'Analysis based on client-provided brand or distributor price sheets.', icon: Receipt },
  { text: 'Filtering for high demand, low competition, and stable buy box history.', icon: PackageSearch },
  { text: 'Profit margin, ROI, and FBA fee calculation.', icon: PieChart },
  { text: 'ASIN identification and validation against Amazon restrictions.', icon: ClipboardCheck },
  { text: 'Tailored product selection matching your exact budget and target ROI.', icon: BadgeCheck },
  { text: 'Actionable data delivered in clean, easy-to-read reports.', icon: FileCheck },
]

function Rich({ parts }) {
  return parts.map((p, i) =>
    p.b ? (
      <strong key={i} className="font-extrabold text-[#0F2F6E]">
        {p.t}
      </strong>
    ) : (
      <span key={i}>{p.t}</span>
    ),
  )
}

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

export default function ApprovalSection() {
  const ref = useRef(null)
  const [introRef, introSeen] = useInView()
  const [listRef, listSeen] = useInView(0.1)
  const [visualRef, visualSeen] = useInView(0.1)

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

  const popIntro = introSeen ? 'animate-pop' : 'opacity-0'
  const popList = listSeen ? 'animate-pop' : 'opacity-0'
  const popVisual = visualSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="approval-heading"
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
      <div aria-hidden="true" className="absolute top-[70%] left-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none sm:size-[1040px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330]">
          <span className="size-2 rounded-full bg-[#7FAFE6]" />
          {SUBTITLE_TAG}
        </div>

        {/* ---------- Intro ---------- */}
        <div ref={introRef} className="space-y-4 [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:space-y-5">
          {intro.map(({ icon: Icon, tone, parts }, i) => (
            <div
              key={i}
              className={`${popIntro} motion-reduce:animate-none`}
              style={{ animationDelay: `${i * 180}ms` }}
            >
              <div
                className={`${tone} group flex cursor-default items-center gap-4 rounded-3xl border-2 border-[#061330] px-4 py-4 shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:shadow-[8px_8px_0_#7FAFE6] sm:gap-5 sm:px-6 sm:py-5`}
              >
                <span className="relative grid size-12 shrink-0 place-items-center sm:size-14">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-1.5 animate-orbit rounded-full border-2 border-dashed border-[#061330]/40 motion-reduce:animate-none"
                  >
                    <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#7FAFE6]" />
                  </span>
                  <span
                    className={`grid size-full animate-jump place-items-center rounded-full border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] transition-transform duration-500 ${EASE} group-hover:rotate-[360deg] motion-reduce:animate-none`}
                    style={{ animationDelay: `${i * 350}ms` }}
                  >
                    <Icon className="size-6 sm:size-7" strokeWidth={2} aria-hidden="true" />
                  </span>
                </span>
                <p className="text-base leading-relaxed font-medium text-[#1B2F57] sm:text-lg">
                  <Rich parts={parts} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- What we handle ---------- */}
        <div className="mt-16 grid items-center gap-14 sm:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* List */}
          <div ref={listRef} className="lg:col-span-6 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
            <h2
              id="approval-heading"
              aria-label={TITLE}
              className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
            >
              {TITLE.split(' ').map((word, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={`${popList} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                  style={{ animationDelay: `${100 + i * 80}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>

            <ul className="mt-8 max-w-xl space-y-3">
              {handled.map(({ text, icon: Icon }, i) => (
                <li
                  key={text}
                  className={`${popList} motion-reduce:animate-none`}
                  style={{ animationDelay: `${400 + i * 110}ms` }}
                >
                  <div
                    className={`${i % 2 ? 'bg-[#BFD8F5]' : 'bg-white'} group flex cursor-default items-center gap-3.5 rounded-2xl border-2 border-[#061330] px-3.5 py-2.5 text-sm font-bold shadow-[3px_3px_0_#061330] transition-all duration-300 ${EASE} hover:translate-x-2 hover:-translate-y-0.5 hover:bg-[#061330] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] sm:text-base ${i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
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
          </div>

          {/* Visual */}
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
                <div className={`group relative aspect-[8/7] -rotate-2 overflow-hidden rounded-3xl border-2 border-[#061330] bg-[#E8F4FF] shadow-[8px_8px_0_#061330] transition-all duration-500 ${EASE} hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_#0F2F6E]`}>
                  <Image
                    src="/images/wholesale-product-research.webp"
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
                  <PackageSearch size={18} strokeWidth={2.2} />
                  Data-driven
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
                      <path id="approval-stamp-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                    </defs>
                    <text fontSize="10.5" fontWeight="800" fill="currentColor">
                      <textPath href="#approval-stamp-path" textLength="214" lengthAdjust="spacing">
                        Product Research ✦ Product Research ✦
                      </textPath>
                    </text>
                  </svg>
                  <PackageSearch className="absolute top-1/2 left-1/2 size-1/4 -translate-x-1/2 -translate-y-1/2 animate-jump motion-reduce:animate-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
