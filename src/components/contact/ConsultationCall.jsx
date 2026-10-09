'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, ArrowRight, Headset } from 'lucide-react'

const BARS = 18

export default function ConsultationCall() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

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
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Card leans toward the cursor
  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: -py * 8, y: px * 10 })
  }

  const show = (cls) => (inView ? cls : 'bk-off')

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#07163f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes bk-track { from { opacity:0; letter-spacing:.12em; transform:translateY(16px) } to { opacity:1; letter-spacing:-.02em; transform:none } }
        @keyframes bk-up    { from { opacity:0; transform:translateY(26px) } to { opacity:1; transform:none } }
        @keyframes bk-card  { from { opacity:0; transform:translateY(50px) rotate(3deg) scale(.95) } to { opacity:1; transform:none } }
        @keyframes bk-bar   { 0%,100% { transform:scaleY(.2) } 50% { transform:scaleY(1) } }
        @keyframes bk-ring  { 0%,100% { transform:rotate(0) } 5%,15%,25% { transform:rotate(-16deg) } 10%,20%,30% { transform:rotate(16deg) } 35% { transform:rotate(0) } }
        @keyframes bk-ping  { 0% { transform:scale(1); opacity:.6 } 100% { transform:scale(2.1); opacity:0 } }
        @keyframes bk-marq  { to { transform:translateX(-50%) } }
        @keyframes bk-blink { 0%,100% { opacity:1 } 50% { opacity:.3 } }
        .bk-off   { opacity:0 }
        .bk-track { animation: bk-track 1s cubic-bezier(.22,1,.36,1) both }
        .bk-up    { animation: bk-up .8s cubic-bezier(.22,1,.36,1) both }
        .bk-card  { animation: bk-card 1s cubic-bezier(.22,1,.36,1) both }
        .bk-bar   { transform-origin:center; animation: bk-bar 1.2s ease-in-out infinite }
        .bk-ring  { animation: bk-ring 3.6s ease-in-out infinite }
        .bk-ping  { animation: bk-ping 2.4s ease-out infinite }
        .bk-marq  { animation: bk-marq 40s linear infinite }
        .bk-blink { animation: bk-blink 1.6s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .bk-track,.bk-up,.bk-card,.bk-bar,.bk-ring,.bk-ping,.bk-marq,.bk-blink { animation:none; opacity:1; transform:none; letter-spacing:normal }
          .bk-tilt, .bk-btn, .bk-btn * { transition:none !important }
        }
      `}</style>

      {/* Big outlined marquee text behind everything */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
        <div className="bk-marq flex w-max whitespace-nowrap">
          {[0, 1].map((n) => (
            <span
              key={n}
              className="px-6 text-[clamp(4.5rem,14vw,11rem)] font-bold uppercase leading-none text-transparent"
              style={{ WebkitTextStroke: '1px rgba(125,190,245,0.14)' }}
            >
              Free Consultation Call — Free Consultation Call — Free Consultation Call —
            </span>
          ))}
        </div>
      </div>

      {/* Glow */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl px-4 sm:px-6 lg:px-8 items-center gap-12 pb-8 lg:grid-cols-2 lg:gap-16 lg:pb-14">
        {/* Copy */}
        <div>
          <h2 className={`text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl ${show('bk-track')}`}>
            Book Your Free Consultation Call
          </h2>
          <p style={{ animationDelay: '300ms' }} className={`mt-6 max-w-lg text-base leading-relaxed text-sky-100/85 sm:text-lg ${show('bk-up')}`}>
            Not sure which service fits your business? Schedule a free consultation call with our Amazon experts and get clear, actionable guidance.
          </p>
        </div>

        {/* "Incoming call" card */}
        <div style={{ animationDelay: '450ms' }} className={`mx-auto w-full max-w-md lg:ml-auto lg:mr-0 ${show('bk-card')}`} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
          <div
            className="bk-tilt rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 ease-out sm:p-8"
            style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            {/* Who's calling */}
            <div className="flex items-center gap-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                <span aria-hidden="true" className="bk-ping absolute inset-0 rounded-full border-2 border-sky-400" />
                <span aria-hidden="true" className="bk-ping absolute inset-0 rounded-full border-2 border-sky-400" style={{ animationDelay: '1.2s' }} />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 text-white">
                  <Headset className="h-7 w-7" aria-hidden="true" />
                </span>
              </span>
              <div>
                <p className="text-lg font-semibold leading-tight">Our Amazon experts</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-sky-200">
                  <span className="bk-blink h-2 w-2 rounded-full bg-emerald-400" />
                  Free consultation call
                </p>
              </div>
            </div>

            {/* Waveform */}
            <div aria-hidden="true" className="my-7 flex h-16 items-center justify-between gap-1">
              {Array.from({ length: BARS }).map((_, i) => (
                <span
                  key={i}
                  className="bk-bar h-full w-full max-w-[8px] rounded-full bg-gradient-to-t from-sky-500 to-cyan-200"
                  style={{ animationDelay: `${(i * 97) % 900}ms`, animationDuration: `${0.9 + (i % 5) * 0.18}s` }}
                />
              ))}
            </div>

            {/* Action */}
            <a
              href="#contact"
              className="bk-btn group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl border border-white/40 px-4 py-3 text-base font-semibold outline-none transition-all duration-300 hover:border-white focus-visible:ring-4 focus-visible:ring-sky-300 active:scale-[0.98] sm:px-5 sm:py-4 sm:text-lg"
            >
              {/* White fill sweeps in on hover */}
              <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#07163f]">
                <Phone className="bk-ring h-5 w-5" aria-hidden="true" />
              </span>
              <span className="relative flex-1 text-left leading-snug transition-colors duration-300 group-hover:text-[#07163f] group-focus-visible:text-[#07163f]">
                Book Your Free Consultation Call
              </span>
              <ArrowRight className="relative h-5 w-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#07163f] group-focus-visible:text-[#07163f]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}