'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  TrendingDown,
  FileText,
  Truck,
  Building2,
  Lock,
  Clock,
  Check,
} from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const clientResponsibilities = [
  'Provide accurate business information',
  'Maintain valid Amazon account access',
  'Approve key decisions on time',
  'Avoid overlapping third-party Amazon VAs',
  'Provide access to required premium tools',
]

const risks = [
  { text: 'Market fluctuations', icon: TrendingDown },
  { text: 'Policy changes', icon: FileText },
  { text: 'Logistics or supplier delays', icon: Truck },
]

const packageFeatures = [
  'Full Amazon store management',
  'Customized business roadmap',
  'Product & inventory strategy based on investment',
  'Brand approval & sourcing support',
  'Performance monitoring & optimization',
  'Compliance & account safety management',
  'Expected ROI: 15% – 20% (±20%)',
  'Target stock clearance: Within 80 days',
  'Average clearance goal: 45 days',
]

// Counts up to a number when `start` becomes true
function CountUp({ to, start }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const dur = 1400
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, to])

  return (
    <span className="relative inline-block tabular-nums" aria-hidden="true">
      <span className="invisible">{to}</span>
      <span className="absolute inset-0 text-center">{value}</span>
    </span>
  )
}

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

export default function WholesaleStoreManagementPackageSection() {
  const containerRef = useRef(null)
  const [cardRef, cardSeen] = useInView()

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

  return (
    <section
      ref={containerRef}
      aria-labelledby="wholesale-package-heading"
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
        
        {/* ---------- Section Main Heading ---------- */}
        <div className="text-center space-y-3 mb-16 [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="wholesale-package-heading"
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            Wholesale Store Management Package
          </h2>
        </div>

        {/* ---------- Grid Layout: Left Column (Responsibilities & Risks) & Right Column (Pricing Card) ---------- */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column */}
          <div className="space-y-12 lg:col-span-6 [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
            
            {/* Client Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[2px_2px_0_#061330]">
                  <Building2 size={20} strokeWidth={2.2} />
                </span>
                <h3 className="text-2xl font-black tracking-tight text-[#0F2F6E]">
                  Client Responsibilities
                </h3>
              </div>
              <p className="text-sm font-semibold text-[#1B2F57] sm:text-base">
                To ensure smooth operations, clients must:
              </p>

              <ul className="space-y-2.5 pt-2">
                {clientResponsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="group flex cursor-default items-center gap-3 rounded-2xl border-2 border-[#061330] bg-white px-4 py-3 text-sm font-bold text-[#061330] shadow-[3px_3px_0_#061330] transition-all duration-300 hover:translate-x-1.5 hover:bg-[#0F2F6E] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6] sm:text-base"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-t-2 border-dashed border-[#0F2F6E]/20" />

            {/* Compliance & Risk Notice */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[2px_2px_0_#061330]">
                  <ShieldAlert size={20} strokeWidth={2.2} />
                </span>
                <h3 className="text-2xl font-black tracking-tight text-[#0F2F6E]">
                  Compliance & Risk Notice
                </h3>
              </div>
              <p className="text-sm leading-relaxed font-medium text-[#1B2F57] sm:text-base">
                All operations are conducted in compliance with Amazon policies. However, Amazon wholesale involves inherent risks such as:
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {risks.map(({ text, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center justify-center rounded-2xl border-2 border-[#061330] bg-white p-4 text-center shadow-[3px_3px_0_#061330] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:text-[#E8F1FC] hover:shadow-[5px_5px_0_#7FAFE6]"
                  >
                    <span className="mb-2 grid size-10 place-items-center rounded-full border-2 border-[#061330] bg-[#BFD8F5] text-[#061330] transition-transform duration-300 group-hover:rotate-[360deg] group-hover:bg-[#7FAFE6]">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>
                    <span className="text-xs font-black sm:text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs font-semibold leading-relaxed text-[#1B2F57]/80 sm:text-sm">
                Tech Cloud Ltd. follows a risk-controlled execution model, but external factors remain outside service guarantees.
              </p>
            </div>

          </div>

          {/* Right Column: Pricing & Features Card */}
          <div className="lg:col-span-6 [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]">
            <div
              ref={cardRef}
              className={`${cardSeen ? 'animate-pop' : 'opacity-0'} group/card relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#061330] bg-white shadow-[6px_6px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:shadow-[10px_10px_0_#7FAFE6] motion-reduce:animate-none`}
            >
              {/* Header */}
              <header className="relative overflow-hidden border-b-2 border-[#061330] bg-[#0F2F6E] px-5 pt-6 pb-5 text-center text-[#E8F1FC]">
                <span aria-hidden="true" className="absolute -top-16 -left-16 size-44 animate-orbit rounded-full border-2 border-dashed border-[#E8F1FC]/20 motion-reduce:animate-none" />

                <h3 className="relative text-xl font-black tracking-wide uppercase sm:text-2xl">
                  Business Plan
                </h3>
                <p className="relative mt-0.5 text-sm font-medium text-[#E8F1FC]/80">
                  Amazon Wholesale Store Management
                </p>
              </header>

              {/* Price */}
              <div className="px-5 pt-7 text-center text-[#061330]">
                <p aria-label="$300 Minimum 1 Year" className="flex items-start justify-center gap-1 text-[#0F2F6E]">
                  <span aria-hidden="true" className="mt-2 text-xl font-black sm:text-2xl">$</span>
                  <span aria-hidden="true" className="text-5xl font-black tracking-tight sm:text-6xl">
                    <CountUp to={300} start={cardSeen} />
                  </span>
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#061330]/20 bg-[#BFD8F5]/30 px-3 py-1 text-xs font-bold text-[#0F2F6E]">
                  <Clock size={13} strokeWidth={2.5} />
                  Contract Duration: Minimum 1 Year
                </div>
              </div>

              {/* Features */}
              <ul className="mt-6 flex-1 px-5 text-[#1B2F57]">
                {packageFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="group/row flex cursor-default items-start gap-3 border-b-2 border-dashed border-[#0F2F6E]/20 py-2.5 text-sm font-medium transition-transform duration-300 last:border-0 hover:translate-x-1.5 hover:text-[#061330] sm:text-[0.95rem]"
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="mt-px shrink-0 text-[#0F2F6E] transition-all duration-500 group-hover/row:rotate-[360deg] group-hover/row:scale-125 group-hover/row:fill-[#7FAFE6]"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 px-5 text-center">
                <Link
                  href="/contact?service=wholesale-service-management&package=wholesale-management#contact"
                  aria-label="Request Wholesale Store Management Package"
                  className="group/btn relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#0F2F6E] py-2 pr-2 pl-7 font-black text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-[#7FAFE6] hover:text-[#061330] hover:shadow-[1px_1px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E] active:shadow-none"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 group-hover/btn:translate-x-[420%]" />
                  <span className="relative">Click Here</span>
                  <span className="relative grid size-8 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110">
                    <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </Link>
              </div>

              {/* Footer Policy Note */}
              <div className="mx-5 mt-6 mb-6 rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] px-4 py-3 text-center text-xs leading-relaxed text-[#061330] shadow-[3px_3px_0_#061330]">
                <strong className="font-extrabold">After Profit Starts:</strong> 30% net profit sharing with Tech Cloud Ltd. Monthly management fee (USD 300) will no longer apply <span className="italic font-normal">(Performance depends on market conditions, inventory flow, and compliance factors.)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}