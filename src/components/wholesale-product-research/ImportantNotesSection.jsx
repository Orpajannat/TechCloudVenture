'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

/*
  Palette (same design system)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Important Notes'
const SUBTITLE_TAG = 'Please Read Carefully'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const notes = [
  {
    id: 'note-1',
    text: 'We do NOT provide brands or distributors',
  },
  {
    id: 'note-2',
    text: 'Client must provide brand/distributor & price sheet',
  },
  {
    id: 'note-3',
    text: 'Brand approval not included in this service',
  },
  {
    id: 'note-4',
    text: 'We only research from client-provided data',
  },
  {
    id: 'note-5',
    text: 'Inventory purchase not included',
  },
]

function useInView(threshold = 0.12) {
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

export default function ImportantNotesSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [cardRef, cardSeen] = useInView(0.1)

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

  const popHeader = headerSeen ? 'animate-pop' : 'opacity-0'
  const popCard = cardSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="important-notes-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-16 sm:py-20 lg:py-28 text-[#061330]"
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

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`mb-12 text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] sm:mb-14`}>
          <div className={`${popHeader} mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <span className="size-2 rounded-full bg-[#7FAFE6]" />
            {SUBTITLE_TAG}
          </div>

          <h2
            id="important-notes-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Outer Container Card */}
        <div
          ref={cardRef}
          className={`${popCard} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] relative mx-auto max-w-7xl rounded-3xl border-2 border-[#061330] bg-[#BFD8F5] p-6 shadow-[8px_8px_0_#061330] sm:p-10 motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
            {notes.map((note, index) => (
              <li
                key={note.id}
                className={`group/row flex items-center gap-4 rounded-2xl border-2 border-[#061330] bg-white px-5 py-4 text-sm font-bold text-[#061330] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:translate-x-1 hover:bg-[#0F2F6E] hover:text-[#E8F1FC] hover:shadow-[2px_2px_0_#061330] sm:text-base ${
                  index === 4 ? 'md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto' : ''
                }`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[2px_2px_0_#061330] transition-transform duration-500 ${EASE} group-hover/row:rotate-[360deg] group-hover/row:scale-110">
                  <CheckCircle2 size={20} strokeWidth={2.5} aria-hidden="true" className="text-[#0F2F6E]" />
                </span>
                <span className="tracking-wide">{note.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}