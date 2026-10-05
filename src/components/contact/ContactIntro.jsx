'use client'

import { useEffect, useRef, useState } from 'react'
import { Headset, Smartphone, AtSign, Mail } from 'lucide-react'

// angle = position on the ring, in degrees
const channels = [
  { icon: Headset, angle: 0, label: 'Support' },
  { icon: Smartphone, angle: 90, label: 'Phone' },
  { icon: AtSign, angle: 180, label: 'Email address' },
  { icon: Mail, angle: 270, label: 'Message' },
]

export default function ContactIntro() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show = (cls) => (inView ? cls : 'ct-off')

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-16 text-[#0b1b4d] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes ct-slide { from { opacity:0; transform:translateX(-24px) } to { opacity:1; transform:none } }
        @keyframes ct-blur  { from { opacity:0; filter:blur(12px); transform:translateY(22px) } to { opacity:1; filter:blur(0); transform:none } }
        @keyframes ct-up    { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
        @keyframes ct-pop   { from { opacity:0; transform:scale(.5) } to { opacity:1; transform:none } }
        @keyframes ct-spin  { to { transform:rotate(360deg) } }
        @keyframes ct-ping  { 0% { transform:scale(1); opacity:.6 } 100% { transform:scale(1.9); opacity:0 } }
        @keyframes ct-blink { 0%,100% { opacity:1 } 50% { opacity:.35 } }
        @keyframes ct-drift { 0%,100% { transform:translate(0,0) } 50% { transform:translate(30px,-20px) } }
        .ct-off   { opacity:0 }
        .ct-slide { animation: ct-slide .7s cubic-bezier(.22,1,.36,1) both }
        .ct-blur  { animation: ct-blur .9s cubic-bezier(.22,1,.36,1) both }
        .ct-up    { animation: ct-up .8s cubic-bezier(.22,1,.36,1) both }
        .ct-pop   { animation: ct-pop .8s cubic-bezier(.34,1.4,.5,1) both }
        .ct-spin  { animation: ct-spin 30s linear infinite }
        .ct-spin-rev { animation: ct-spin 30s linear infinite reverse }
        .ct-ping  { animation: ct-ping 3s ease-out infinite }
        .ct-blink { animation: ct-blink 2s ease-in-out infinite }
        .ct-drift { animation: ct-drift 14s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .ct-slide,.ct-blur,.ct-up,.ct-pop,.ct-spin,.ct-spin-rev,.ct-ping,.ct-blink,.ct-drift { animation:none; opacity:1; transform:none; filter:none }
          .ct-hub, .ct-hub *, .ct-chip { transition:none !important }
        }
      `}</style>

      {/* Aurora wash */}
      <span aria-hidden="true" className="ct-drift pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <span aria-hidden="true" className="ct-drift pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" style={{ animationDelay: '-7s' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span style={{ animationDelay: '0ms' }} className={`inline-flex items-center gap-3 rounded-full border border-[#0b1b4d]/10 bg-white px-4 py-2 text-sm font-semibold shadow-[0_6px_20px_rgba(11,27,77,0.08)] ${show('ct-slide')}`}>
            <span className="ct-blink h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Tech Cloud Global Venture
            <span className="ct-blink h-2.5 w-2.5 rounded-full bg-cyan-400" style={{ animationDelay: '.5s' }} />
          </span>

          <h2 style={{ animationDelay: '150ms' }} className={`mt-6 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl ${show('ct-blur')}`}>
            Amazon USA wholesale sellers and brands
          </h2>

          <p style={{ animationDelay: '350ms' }} className={`mt-6 max-w-xl text-base leading-[1.9] text-[#0b1b4d]/80 sm:text-lg ${show('ct-up')}`}>
            At Tech Cloud Global Venture, we provide specialized services for Amazon USA wholesale sellers and brands. If you’re looking to grow, protect, or manage your Amazon business the right way, our team is ready to connect.
          </p>
        </div>

        {/* Contact dial: centre button with channels orbiting it */}
        <div className="flex justify-center">
          <div
            className={`relative aspect-square ${show('ct-pop')}`}
            style={{ '--s': 'min(70vw, 24rem)', width: 'var(--s)', animationDelay: '300ms' }}
          >
            {/* Rings */}
            <span aria-hidden="true" className="ct-spin-rev absolute inset-0 rounded-full border border-dashed border-sky-400/60" />
            <span aria-hidden="true" className="absolute inset-[14%] rounded-full border border-sky-300/50" />

            {/* Orbiting channels (icons stay upright) */}
            <div aria-hidden="true" className="ct-spin absolute inset-0">
              {channels.map(({ icon: Icon, angle }, i) => (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{ transform: `rotate(${angle}deg) translateY(calc(var(--s) / -2))` }}
                >
                  <div className="ct-spin-rev">
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <span
                        style={{ animationDelay: `${700 + i * 150}ms` }}
                        className={`ct-chip -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-600 shadow-[0_8px_24px_rgba(14,116,200,0.3)] ring-1 ring-sky-100 transition-transform duration-300 hover:scale-125 sm:-ml-7 sm:-mt-7 sm:h-14 sm:w-14 ${show('ct-pop')}`}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Centre button */}
            <a
              href="#contact"
              className="ct-hub group absolute inset-[26%] flex items-center justify-center rounded-full outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              aria-label="Contact us"
            >
              <span aria-hidden="true" className="ct-ping absolute inset-0 rounded-full border-2 border-sky-400" />
              <span aria-hidden="true" className="ct-ping absolute inset-0 rounded-full border-2 border-sky-400" style={{ animationDelay: '1.5s' }} />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 text-center font-bold uppercase leading-none tracking-wide text-white shadow-[0_16px_40px_rgba(14,116,200,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(14,116,200,0.65)] group-active:scale-95">
                <span className="text-xl sm:text-3xl">
                  Contact
                  <br />
                  Us
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}