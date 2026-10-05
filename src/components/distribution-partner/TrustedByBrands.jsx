'use client'

import { useEffect, useRef, useState } from 'react'
import { Store, ShoppingCart, Cpu, Users, Plus, Handshake } from 'lucide-react'

const combine = [
  { icon: Store, text: 'Marketplace expertise' },
  { icon: ShoppingCart, text: 'Experienced Amazon store management' },
  { icon: Cpu, text: 'IT-driven operations' },
  { icon: Users, text: 'A strong network of professional U.S. sellers' },
]

export default function TrustedByBrands() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show = (cls) => (inView ? cls : 'tr-off')

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#07163f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes tr-up    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes tr-grow  { from { transform:scaleY(0) } to { transform:scaleY(1) } }
        @keyframes tr-under { from { transform:scaleX(0) } to { transform:scaleX(1) } }
        @keyframes tr-draw  { to { stroke-dashoffset:0 } }
        @keyframes tr-sweep { 0%,100% { transform:translateX(0) skewX(-24deg) } 50% { transform:translateX(60px) skewX(-24deg) } }
        .tr-off   { opacity:0 }
        .tr-up    { animation: tr-up .8s cubic-bezier(.22,1,.36,1) both }
        .tr-grow  { transform-origin:top; animation: tr-grow .8s cubic-bezier(.22,1,.36,1) both }
        .tr-under { transform-origin:left; animation: tr-under .8s .9s cubic-bezier(.22,1,.36,1) both }
        .tr-sweep { animation: tr-sweep 16s ease-in-out infinite }
        .tr-arc   { stroke-dasharray:1; stroke-dashoffset:1 }
        .tr-on .tr-arc { animation: tr-draw 1.6s .2s ease-out both }
        @media (prefers-reduced-motion: reduce) {
          .tr-up,.tr-grow,.tr-under,.tr-sweep { animation:none; opacity:1; transform:none }
          .tr-on .tr-arc { animation:none; stroke-dashoffset:0 }
          .tr-card, .tr-card * { transition:none !important }
        }
      `}</style>

      {/* Diagonal light bands, a nod to the original backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="tr-sweep absolute -top-10 left-[55%] h-[140%] w-24 bg-white/[0.04]" style={{ transform: 'skewX(-24deg)' }} />
        <span className="tr-sweep absolute -top-10 left-[30%] h-[140%] w-10 bg-sky-400/[0.06]" style={{ transform: 'skewX(-24deg)', animationDelay: '-6s' }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <h2 className={`max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${show('tr-up')}`}>
          Trusted by Brands.
          <br />
          <span className="text-sky-300">Executed by Experts.</span>
        </h2>
        <p style={{ animationDelay: '150ms' }} className={`mt-5 text-base text-sky-100/80 sm:text-lg ${show('tr-up')}`}>
          Our distribution partners trust Tech Cloud DS
        </p>

        {/* we combine: ... */}
        <h3 style={{ animationDelay: '300ms' }} className={`mt-14 text-2xl font-medium sm:mt-16 sm:text-3xl ${show('tr-up')}`}>
          we combine:
        </h3>

        <ul className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {combine.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              style={{ animationDelay: `${400 + i * 130}ms` }}
              className={`group relative ${show('tr-up')}`}
            >
              <div
                tabIndex={0}
                className="tr-card flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.06] p-6 outline-none backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300/70 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] focus-visible:-translate-y-1.5 focus-visible:border-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/20 text-sky-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-amber-300 group-hover:text-[#07163f]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-lg font-medium leading-snug">{text}</p>
              </div>

              {/* "+" joins each item to the next */}
              {i < combine.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-amber-300 text-[#07163f] transition-transform duration-500 group-hover:rotate-90 lg:-right-10 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
                >
                  <Plus className="h-5 w-5" strokeWidth={3} />
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* "=" line leading to the commitment */}
        <div className="flex flex-col items-center" aria-hidden="true">
          <span style={{ animationDelay: '1000ms' }} className={`h-10 w-px bg-gradient-to-b from-amber-300/0 to-amber-300 ${show('tr-grow')}`} />
          <span style={{ animationDelay: '1200ms' }} className={`flex h-9 w-9 items-center justify-center rounded-full border border-amber-300 text-xl font-semibold text-amber-300 ${show('tr-up')}`}>
            =
          </span>
        </div>

        {/* Commitment */}
        <div
          style={{ animationDelay: '1300ms' }}
          className={`tr-card relative mx-auto mt-4 max-w-4xl overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-br from-[#0d2a6b] to-[#07163f] p-6 shadow-[0_0_60px_rgba(255,200,61,0.08)] transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(255,200,61,0.2)] sm:p-10 ${show('tr-up')}`}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-300 text-[#07163f]">
              <Handshake className="h-8 w-8" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Our Commitment</h3>
              <p className="mt-3 text-lg leading-relaxed text-sky-100/90 sm:text-xl">
                We focus on{' '}
                <span className="relative inline-block font-semibold text-amber-300">
                  sustainable growth
                  <span aria-hidden="true" className={`absolute -bottom-0.5 left-0 h-0.5 w-full bg-amber-300 ${inView ? 'tr-under' : 'tr-off'}`} />
                </span>
                , not uncontrolled marketplace exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Bridge between brands and marketplaces */}
        <div style={{ animationDelay: '1600ms' }} className={`mx-auto mt-14 max-w-3xl text-center ${inView ? 'tr-up tr-on' : 'tr-off'}`}>
          <svg viewBox="0 0 600 110" className="mx-auto h-auto w-full max-w-xl" fill="none" aria-hidden="true">
            <path id="tr-bridge" className="tr-arc" pathLength="1" d="M30 90 Q300 -40 570 90" stroke="#7dbcf5" strokeWidth="2" strokeLinecap="round" />
            {[110, 190, 300, 410, 490].map((x) => {
              const t = (x - 30) / 540
              const y = (1 - t) * (1 - t) * 90 + 2 * (1 - t) * t * -40 + t * t * 90
              return <line key={x} x1={x} y1={y} x2={x} y2="90" stroke="#7dbcf5" strokeOpacity=".35" />
            })}
            <line x1="30" y1="90" x2="570" y2="90" stroke="#7dbcf5" strokeOpacity=".5" />
            <circle cx="30" cy="90" r="5" fill="#ffc83d" />
            <circle cx="570" cy="90" r="5" fill="#ffc83d" />
            {!reduce && (
              <circle r="5" fill="#ffc83d">
                <animateMotion dur="4s" repeatCount="indefinite" path="M30 90 Q300 -40 570 90" />
              </circle>
            )}
          </svg>
          <p className="mt-4 text-base font-semibold sm:text-lg">
            We act as a bridge between brands and marketplaces, ensuring products are sold the right way.
          </p>
        </div>
      </div>
    </section>
  )
}