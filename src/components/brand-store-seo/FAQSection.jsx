'use client'

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'FAQs - Brand Store SEO'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

const faqs = [
  {
    question: 'Does Brand Store SEO affect Amazon search ranking?',
    answer: 'Yes. Optimized stores improve brand discoverability and engagement signals.',
  },
  {
    question: 'Do I need a Brand Registry?',
    answer: 'Yes, Brand Registry is required to access and fully optimize your Amazon Storefront with advanced modules, headers, and SEO structuring.',
  },
  {
    question: 'Is this a one-time service?',
    answer: 'We offer both one-time setup packages (Starter & Advanced) as well as ongoing optimization and growth retainers (Premium Brand Store Growth).',
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [openIndex, setOpenIndex] = useState(0) // First item open by default matching image

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
      aria-labelledby="faq-section-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-[#061330] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,47,110,0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#BFD8F5]/30 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#E8F1FC]/60 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]">
          <h2
            id="faq-section-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight text-[#061330] sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#0F2F6E] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* ---------- Content Grid: FAQs + Illustration ---------- */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*10px)]">
          {/* FAQ Accordion list (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map(({ question, answer }, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={question}
                  className={`${pop} motion-reduce:animate-none`}
                  style={{ animationDelay: `${300 + i * 150}ms` }}
                >
                  <div className={`overflow-hidden rounded-2xl border-2 border-[#061330] bg-[#E8F1FC]/40 shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:shadow-[6px_6px_0_#0F2F6E]`}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={`flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
                        isOpen ? 'bg-[#0F2F6E] text-white' : 'bg-white hover:bg-[#E8F1FC] text-[#061330]'
                      }`}
                    >
                      <span className="text-base font-black tracking-tight sm:text-lg">
                        {question}
                      </span>
                      <span className={`grid size-8 shrink-0 place-items-center rounded-xl border-2 border-[#061330] transition-transform duration-300 ${isOpen ? 'bg-[#BFD8F5] text-[#0F2F6E] rotate-180' : 'bg-white text-[#061330]'}`}>
                        {isOpen ? (
                          <Minus size={16} strokeWidth={3} aria-hidden="true" />
                        ) : (
                          <Plus size={16} strokeWidth={3} aria-hidden="true" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t-2 border-[#061330] bg-white px-6 py-5 text-sm font-medium leading-relaxed text-[#1B2F57] sm:text-base">
                        <p>{answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Neo-brutalism FAQ Illustration Box (5 cols) */}
          <div
            className={`${pop} lg:col-span-5 motion-reduce:animate-none`}
            style={{ animationDelay: '800ms' }}
          >
            <div className="relative flex flex-col items-center justify-center rounded-3xl border-2 border-[#061330] bg-[#BFD8F5]/40 p-8 text-center shadow-[8px_8px_0_#061330] overflow-hidden">
              {/* Background decorative blob */}
              <div aria-hidden="true" className="absolute -right-10 -top-10 size-48 rounded-full bg-[#BFD8F5] blur-2xl opacity-70" />
              
              <div className="relative z-10 grid size-24 place-items-center rounded-3xl border-2 border-[#061330] bg-[#0F2F6E] text-[#BFD8F5] shadow-[4px_4px_0_#061330] mb-6 animate-bounce motion-reduce:animate-none">
                <HelpCircle size={48} strokeWidth={2.2} aria-hidden="true" />
              </div>

              <h3 className="relative z-10 text-2xl font-black tracking-tight text-[#061330]">
                Got More Questions?
              </h3>

              <p className="relative z-10 mt-3 text-sm font-medium text-[#1B2F57] sm:text-base leading-relaxed">
                Our Amazon brand store optimization specialists are ready to help clarify your strategy and accelerate your growth.
              </p>

              <div className="relative z-10 mt-6">
                <Link href="/contact#contact"
                  className={`cursor-pointer rounded-2xl border-2 border-[#061330] bg-[#0F2F6E] px-6 py-3 text-sm font-black text-[#BFD8F5] shadow-[4px_4px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-1 hover:bg-[#061330] hover:text-white hover:shadow-[6px_6px_0_#7FAFE6]`}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}