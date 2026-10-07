'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TITLE = 'FAQs – Brand Protection & Seller Control'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const faqs = [
  {
    q: 'Can you remove unauthorized sellers completely?',
    a: 'Amazon controls final enforcement. We assist through compliant documentation and Brand Registry tools to maximize removal success.',
  },
  {
    q: 'Do you contact sellers directly?',
    a: 'We adhere strictly to Amazon-compliant procedures, prioritizing official Brand Registry reporting mechanisms and authorized enforcement pathways rather than direct confrontational outreach that could violate terms of service.',
  },
  {
    q: 'Is this service safe for my Amazon account?',
    a: 'Yes. We strictly use 100% white-hat, Amazon-approved processes aligned with Brand Registry standards. No risky or black-hat tactics are ever employed.',
  },
  {
    q: 'Do I need a Brand Registry?',
    a: 'While having Amazon Brand Registry provides the strongest suite of enforcement tools, we can guide you through compliance readiness and help you get established to maximize your protection capabilities.',
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

export default function FaqsBrandProtectionSection() {
  const ref = useRef(null)
  const [headerRef, headerSeen] = useInView()
  const [contentRef, contentSeen] = useInView(0.1)

  const [openIndex, setOpenIndex] = useState(0)

  // Live pointer parallax
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
          tx = Math.sin(t / 2600) * 0.7
          ty = Math.cos(t / 3400) * 0.7
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
  const popContent = contentSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="faqs-brand-protection-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#EEF4FC] to-[#D6E6F8] py-20 text-[#061330] sm:py-28 lg:py-36"
    >
      {/* Background Animated Orbs & Shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.18) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div aria-hidden="true" className="absolute top-1/4 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/4 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className={`[translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] mb-16`}>
          <div className={`${popHeader} mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330] motion-reduce:animate-none`}>
            <Sparkles size={14} className="text-[#7FAFE6]" />
            <span>Got Questions?</span>
          </div>

          <h2
            id="faqs-brand-protection-heading"
            aria-label={SECTION_TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl"
          >
            {SECTION_TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${popHeader} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-[#061330] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Two Column Layout: Left Accordion, Right Illustration Card */}
        <div
          ref={contentRef}
          className={`${popContent} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start motion-reduce:animate-none`}
          style={{ animationDelay: '200ms' }}
        >
          
          {/* Left Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-3xl border-3 border-[#061330] bg-white transition-all duration-300 shadow-[6px_6px_0_#061330] hover:shadow-[8px_8px_0_#7FAFE6]`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between p-6 text-left transition-colors ${
                      isOpen ? 'bg-[#061330] text-white' : 'bg-white text-[#0F2F6E] hover:bg-[#EEF4FC]'
                    }`}
                  >
                    <span className="text-base sm:text-lg font-black tracking-tight pr-4">
                      {faq.q}
                    </span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-xl border-2 transition-transform duration-300 ${
                      isOpen ? 'border-white/30 bg-white/10 text-white rotate-180' : 'border-[#061330] bg-[#BFD8F5] text-[#061330]'
                    }`}>
                      {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t-2 border-[#061330]/10 bg-white p-6 text-sm sm:text-base font-medium text-[#061330]/80 leading-relaxed animate-in fade-in duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Visual Graphic / Illustration Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative overflow-hidden rounded-[36px] border-3 border-[#061330] bg-white p-6 shadow-[10px_10px_0_#0F2F6E] transition-all duration-500 hover:shadow-[14px_14px_0_#7FAFE6]">
              
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border-2 border-[#061330]">
                <Image
                  src="/images/brand-protection-faq.webp"
                  alt="Brand protection consultant explaining a flagged seller listing and compliance documentation"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border-2 border-[#061330] bg-[#EEF4FC] p-4 text-[#061330] shadow-[3px_3px_0_#061330]">
                <div className="grid size-10 place-items-center rounded-xl bg-[#0F2F6E] text-white">
                  <HelpCircle size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0F2F6E]">Have more questions?</h4>
                  <p className="text-xs font-bold text-[#061330]/70">Our support team is ready to help 24/7.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}