'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

/*
  Palette
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const SECTION_TAG = 'Amazon USA Brands'
const TITLE = 'Brand Protection & Seller Control Services for Amazon USA Brands'
const DESCRIPTION = 'Unauthorized sellers, price erosion, and listing abuse can quietly destroy a brand’s reputation and profitability on Amazon. Our Brand Protection & Seller Control Service helps Amazon USA brands regain control, protect pricing integrity, and enforce compliance—without violating Amazon policies. We work with brands to identify risks, document violations, and implement ethical, long-term brand protection strategies aligned with Amazon Brand Registry standards.'

const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

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

export default function BrandProtectionSection() {
  const ref = useRef(null)
  const [contentRef, contentSeen] = useInView()
  const [imageRef, imageSeen] = useInView(0.1)

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

  const popContent = contentSeen ? 'animate-pop' : 'opacity-0'
  const popImage = imageSeen ? 'animate-pop' : 'opacity-0'

  return (
    <section
      ref={ref}
      aria-labelledby="brand-protection-heading"
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
      <div aria-hidden="true" className="absolute top-1/3 left-10 -z-20 size-[450px] [translate:calc(var(--mx,0)*-50px)_calc(var(--my,0)*-50px)] animate-blob rounded-full bg-[#7FAFE6]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute right-10 bottom-1/3 -z-20 size-[500px] [translate:calc(var(--mx,0)*50px)_calc(var(--my,0)*50px)] animate-blob-rev rounded-full bg-[#BFD8F5]/80 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-20 size-[900px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#0F2F6E]/15 motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout: Left Text/Content, Right Feature Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div
            ref={contentRef}
            className={`${popContent} [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)] lg:col-span-6 motion-reduce:animate-none`}
          >
            {/* Tag Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#061330] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2F6E] shadow-[3px_3px_0_#061330]">
              <span className="size-2 rounded-full bg-[#7FAFE6] animate-ping" />
              <span>{SECTION_TAG}</span>
            </div>

            {/* Heading */}
            <h2
              id="brand-protection-heading"
              aria-label={TITLE}
              className="text-3xl leading-[1.1] font-black tracking-tight text-[#0F2F6E] sm:text-4xl lg:text-5xl mb-6"
            >
              {TITLE.split(' ').map((word, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={`mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-[#061330]`}
                  style={{ animationDelay: `${100 + i * 50}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg font-medium text-[#061330]/80 leading-relaxed mb-8">
              {DESCRIPTION}
            </p>

            {/* Action Button */}
            <div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#061330] bg-[#061330] px-8 py-4 text-center font-black text-white shadow-[5px_5px_0_#7FAFE6] transition-all duration-200 hover:-translate-y-1 hover:bg-[#0F2F6E] hover:shadow-[8px_8px_0_#7FAFE6] active:translate-y-0 active:shadow-none"
              >
                <span aria-hidden="true" className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-transform duration-700 group-hover:translate-x-[420%]" />
                <span className="relative">Secure Your Brand Today</span>
                <span className="relative grid size-7 place-items-center rounded-full bg-white text-[#061330] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Shield Card Showcase */}
          <div
            ref={imageRef}
            className={`${popImage} [translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)] lg:col-span-6 relative motion-reduce:animate-none`}
            style={{ animationDelay: '200ms' }}
          >
            <div aria-hidden="true" className="absolute -inset-4 rounded-[45px] bg-linear-to-tr from-[#7FAFE6] to-[#0F2F6E] opacity-30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border-3 border-[#061330] bg-white p-4 sm:p-6 shadow-[10px_10px_0_#0F2F6E] transition-all duration-500 hover:shadow-[14px_14px_0_#7FAFE6]">
              
              {/* Image Frame with Rounded Corners */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#061330]">
                <Image
                  src="/image_78ff04.jpg"
                  alt="Brand Protection & Seller Control Services for Amazon USA Brands"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Badge inside Card */}
              <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border-2 border-[#061330] bg-[#EEF4FC] p-4 text-[#061330] shadow-[4px_4px_0_#061330]">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-[#0F2F6E] text-white">
                    <ShieldCheck size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0F2F6E]">Brand Registry Standard</h4>
                    <p className="text-xs font-bold text-[#061330]/70">100% Policy-Compliant Enforcement</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex rounded-full bg-[#7FAFE6] px-3 py-1 text-xs font-black uppercase text-[#061330]">
                  USA Verified
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}