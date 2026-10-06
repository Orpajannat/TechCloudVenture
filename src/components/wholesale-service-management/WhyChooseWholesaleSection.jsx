'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Users,
  TrendingUp,
  ShieldCheck,
  LineChart,
  MessageSquare,
} from 'lucide-react'

/*
  Palette (same as the hero & previous sections)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const benefits = [
  {
    title: 'Structured, agreement-based service model',
    icon: Users,
  },
  {
    title: 'Clear payment & profit-sharing terms',
    icon: TrendingUp,
  },
  {
    title: 'Compliance-first execution',
    icon: ShieldCheck,
  },
  {
    title: 'Long-term growth mindset',
    icon: LineChart,
  },
  {
    title: 'Transparent communication',
    icon: MessageSquare,
  },
]

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

export default function WhyChooseWholesaleSection() {
  const containerRef = useRef(null)
  const [sectionRef, sectionSeen] = useInView()

  // Live pointer parallax (CSS variables, no re-renders)
  useEffect(() => {
    const el = containerRef.current
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

  const pop = sectionSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={containerRef}
      aria-labelledby="why-choose-wholesale-heading"
      className="relative isolate overflow-hidden bg-[#7FAFE6] py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(6,19,48,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#BFD8F5]/50 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#0F2F6E]/20 blur-3xl motion-reduce:animate-none" />

      <div ref={sectionRef} className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ---------- Section Heading & Subtitle ---------- */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="why-choose-wholesale-heading"
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#061330] sm:text-4xl lg:text-5xl"
          >
            Why Choose Our Wholesale Management
          </h2>
          <p className={`${pop} text-base font-bold text-[#0F2F6E] motion-reduce:animate-none sm:text-lg`} style={{ animationDelay: '200ms' }}>
            We manage your Amazon store like a business, not a short-term project.
          </p>
        </div>

        {/* ---------- Cards Grid ---------- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]">
          {benefits.map(({ title, icon: Icon }, i) => (
            <div
              key={i}
              className={`${pop} group relative flex flex-col items-center justify-between rounded-3xl border-2 border-[#061330] bg-white p-6 text-center shadow-[5px_5px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:bg-[#0F2F6E] hover:text-[#E8F1FC] hover:shadow-[8px_8px_0_#061330] motion-reduce:animate-none`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-6 grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-[#7FAFE6] group-hover:text-[#061330]">
                <Icon size={26} strokeWidth={2.2} aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-base font-black leading-snug tracking-tight text-[#061330] transition-colors duration-300 group-hover:text-[#E8F1FC] sm:text-lg">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}