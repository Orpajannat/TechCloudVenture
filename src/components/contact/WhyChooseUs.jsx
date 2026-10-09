'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Award, ShieldCheck, ListChecks } from 'lucide-react'

// Four blues, light to deep. Each card's gradient slowly pans (see .wy-g0 to .wy-g3 below).
const reasons = [
  { icon: Target, title: 'Specialist', text: 'Amazon USA–focused specialists', grad: 'wy-g0', text_c: 'text-[#06205c]', badge: 'bg-white/70 text-[#06205c]', mark: 'text-[#06205c]/[0.07]' },
  { icon: Award, title: 'Experience', text: 'Proven wholesale & brand experience', grad: 'wy-g1', text_c: 'text-[#041a4d]', badge: 'bg-white/60 text-[#041a4d]', mark: 'text-[#041a4d]/[0.09]' },
  { icon: ShieldCheck, title: 'Approach', text: 'Compliance-first approach', grad: 'wy-g2', text_c: 'text-white', badge: 'bg-white/15 text-white', mark: 'text-white/[0.08]' },
  { icon: ListChecks, title: 'Workflow', text: 'Clear communication & structured workflow', grad: 'wy-g3', text_c: 'text-white', badge: 'bg-cyan-400/20 text-cyan-200', mark: 'text-cyan-200/[0.07]' },
]

const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

export default function WhyChooseUs() {
  const ref = useRef(null)
  const liRefs = useRef([])
  const [inView, setInView] = useState(false)
  const [revealed, setRevealed] = useState(-1)
  const [cover, setCover] = useState(reasons.map(() => 0))

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
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Scroll-linked: reveal cards, shrink and dim the ones being covered
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      let rev = -1
      const next = reasons.map((_, i) => {
        const li = liRefs.current[i]
        const nli = liRefs.current[i + 1]
        if (!li) return 0
        const r = li.getBoundingClientRect()
        if (r.top < vh * 0.92) rev = i
        if (!nli || reduce) return 0
        const gap = nli.getBoundingClientRect().top - r.top
        return clamp(1 - (gap - 16) / li.offsetHeight, 0, 1)
      })
      setRevealed((p) => Math.max(p, rev))
      setCover(next)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const show = (cls) => (inView ? cls : 'wy-off')

  return (
    <section ref={ref} className="relative bg-[#030b24] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <style>{`
        @keyframes wy-up    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes wy-line  { from { transform:scaleX(0) } to { transform:scaleX(1) } }
        @keyframes wy-pan   { 0%,100% { background-position:0% 50% } 50% { background-position:100% 50% } }
        @keyframes wy-shine { 0% { transform:translateX(-160%) skewX(-20deg) } 45%,100% { transform:translateX(420%) skewX(-20deg) } }
        @keyframes wy-aura  { 0%,100% { transform:translate(0,0) scale(1); filter:hue-rotate(0deg) } 50% { transform:translate(60px,40px) scale(1.2); filter:hue-rotate(25deg) } }
        .wy-off  { opacity:0 }
        .wy-up   { animation: wy-up .8s cubic-bezier(.22,1,.36,1) both }
        .wy-line { transform-origin:center; animation: wy-line .9s .5s cubic-bezier(.22,1,.36,1) both }
        .wy-aura { animation: wy-aura 18s ease-in-out infinite }
        .wy-shine{ animation: wy-shine 7s ease-in-out infinite }
        .wy-text {
          background: linear-gradient(90deg,#ffffff,#7dd3fc,#38bdf8,#ffffff);
          background-size: 300% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: wy-pan 7s ease-in-out infinite;
        }
        .wy-g0,.wy-g1,.wy-g2,.wy-g3 { background-size:250% 250%; animation: wy-pan 10s ease-in-out infinite }
        .wy-g0 { background-image: linear-gradient(120deg,#e0f2fe,#bae6fd,#e0f2fe,#7dd3fc) }
        .wy-g1 { background-image: linear-gradient(120deg,#38bdf8,#0ea5e9,#67e8f9,#38bdf8) }
        .wy-g2 { background-image: linear-gradient(120deg,#1d4ed8,#2563eb,#0ea5e9,#1d4ed8) }
        .wy-g3 { background-image: linear-gradient(120deg,#061a52,#0b2a7a,#0c4a9e,#061a52) }
        @media (prefers-reduced-motion: reduce) {
          .wy-up,.wy-line,.wy-aura,.wy-shine,.wy-text,.wy-g0,.wy-g1,.wy-g2,.wy-g3 { animation:none; opacity:1; transform:none }
          .wy-reveal, .wy-card, .wy-card * { transition:none !important }
        }
      `}</style>

      {/* Drifting, colour-shifting blue glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="wy-aura absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <span className="wy-aura absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" style={{ animationDelay: '-9s' }} />
        <span className="wy-aura absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Heading */}
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className={`text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${show('wy-up')}`}>
          <span className="wy-text">Why Tech Cloud Global Venture?</span>
        </h2>
        <p style={{ animationDelay: '150ms' }} className={`mt-5 text-base text-sky-100/80 sm:text-lg ${show('wy-up')}`}>
          We focus on long-term, compliant, and scalable Amazon growth.
        </p>
        <span aria-hidden="true" className={`mx-auto mt-6 block h-1 w-24 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)] ${inView ? 'wy-line' : 'wy-off'}`} />
      </div>

      {/* Cards stack up as you scroll */}
      <ul className="relative mx-auto mt-12 max-w-4xl [--base:5rem] [--step:0.75rem] sm:mt-16 sm:[--step:1.1rem] lg:[--base:6.5rem]">
        {reasons.map(({ icon: Icon, title, text, grad, text_c, badge, mark }, i) => {
          const shown = revealed >= i
          const c = cover[i] ?? 0
          return (
            <li
              key={title}
              ref={(el) => (liRefs.current[i] = el)}
              className="sticky mb-6 sm:mb-8"
              style={{ top: `calc(var(--base) + ${i} * var(--step))` }}
            >
              <div className={`wy-reveal transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${shown ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div
                  tabIndex={0}
                  className={`wy-card group relative flex h-[17rem] origin-top flex-col justify-between overflow-hidden rounded-3xl border border-white/20 p-6 shadow-[0_-10px_40px_rgba(56,189,248,0.18)] outline-none transition-shadow duration-500 hover:shadow-[0_-10px_60px_rgba(56,189,248,0.45)] focus-visible:ring-4 focus-visible:ring-cyan-300 sm:h-[19rem] sm:p-10 ${grad} ${text_c}`}
                  style={{ transform: `scale(${1 - c * 0.06})`, filter: `brightness(${1 - c * 0.14})` }}
                >
                  {/* Light sweep that passes over the card */}
                  <span aria-hidden="true" className="wy-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animationDelay: `${i * 1.4}s` }} />

                  <Icon aria-hidden="true" strokeWidth={0.7} className={`absolute -bottom-12 -right-8 h-60 w-60 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110 sm:h-80 sm:w-80 ${mark}`} />

                  <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-16 sm:w-16 ${badge}`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                  </span>

                  <div className="relative">
                    <h3 className="text-4xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">{title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed opacity-85 sm:text-xl">{text}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}