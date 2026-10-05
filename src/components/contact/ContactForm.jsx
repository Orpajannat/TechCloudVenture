'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Send, Loader2, Mail } from 'lucide-react'

const services = ['Amazon Wholesale Store Management', 'Brand Approval Service', 'Brand Services', 'Other']

// Inline SVGs so the icons don't depend on your lucide-react version
const socials = [
  {
    name: 'Facebook',
    svg: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" fill="currentColor" />,
  },
  {
    name: 'LinkedIn',
    svg: (
      <>
        <circle cx="5" cy="5" r="2.2" fill="currentColor" />
        <rect x="3" y="9" width="4" height="12" fill="currentColor" />
        <path d="M10 9h4v2c.6-1.2 2-2.2 3.8-2.2 3 0 3.2 2.3 3.2 4.7V21h-4v-6.5c0-1.4-.3-2.3-1.6-2.3-1.4 0-1.4 1.2-1.4 2.4V21h-4V9z" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Instagram',
    svg: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Pinterest',
    svg: (
      <path
        fill="currentColor"
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.552.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
      />
    ),
  },
]

const fieldBase =
  'peer w-full rounded-xl border border-slate-300 bg-white px-4 pb-2 pt-6 text-base text-[#0b1b4d] outline-none transition-all duration-300 hover:border-slate-400 focus:border-[#0b1b4d] focus:ring-4 focus:ring-sky-200/70'
const labelBase =
  'pointer-events-none absolute left-4 top-4 origin-left text-base text-slate-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#0b1b4d] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold'

function Field({ label, name, type = 'text', required, textarea, value, onChange, className = '', delay, show }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div style={{ animationDelay: `${delay}ms` }} className={`relative ${className} ${show}`}>
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        required={required}
        placeholder=" "
        value={value}
        onChange={onChange}
        className={`${fieldBase} ${textarea ? 'resize-y' : ''}`}
      />
      <label htmlFor={name} className={labelBase}>
        {label}
      </label>
    </div>
  )
}

export default function ContactForm() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', marketplace: '', message: '' })
  const [picked, setPicked] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent

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
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: send { ...values, services: picked } to your API route here
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setTimeout(() => {
      setValues({ name: '', email: '', phone: '', company: '', marketplace: '', message: '' })
      setPicked([])
      setStatus('idle')
    }, 2500)
  }

  const up = inView ? 'fm-up' : 'fm-off'

  return (
    <section ref={ref} className="bg-sky-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <style>{`
        @keyframes fm-up    { from { opacity:0; transform:translateY(22px) } to { opacity:1; transform:none } }
        @keyframes fm-left  { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:none } }
        @keyframes fm-blink { 0%,100% { opacity:1 } 50% { opacity:.3 } }
        @keyframes fm-float { 0%,100% { transform:translateY(0) rotate(-8deg) } 50% { transform:translateY(-18px) rotate(-2deg) } }
        .fm-off   { opacity:0 }
        .fm-up    { animation: fm-up .7s cubic-bezier(.22,1,.36,1) both }
        .fm-left  { animation: fm-left .9s cubic-bezier(.22,1,.36,1) both }
        .fm-blink { animation: fm-blink 2s ease-in-out infinite }
        .fm-float { animation: fm-float 7s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .fm-up,.fm-left,.fm-blink,.fm-float { animation:none; opacity:1; transform:none }
          .fm-root *, .fm-root *::before { transition-duration:0s !important }
        }
      `}</style>

      <div className="fm-root mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(11,27,77,0.15)] lg:grid-cols-5">
        {/* Left: intro panel */}
        <div className={`relative overflow-hidden bg-[#0b1b4d] px-6 py-10 text-white sm:px-10 sm:py-12 lg:col-span-2 lg:py-16 ${inView ? 'fm-left' : 'fm-off'}`}>
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border border-white/10" />
          <Mail aria-hidden="true" className="fm-float pointer-events-none absolute -right-6 bottom-8 h-40 w-40 text-sky-300/15 sm:h-52 sm:w-52" strokeWidth={1} />

          <div className="relative">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <span className="fm-blink h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Contact us
              <span className="fm-blink h-2.5 w-2.5 rounded-full bg-cyan-300" style={{ animationDelay: '.5s' }} />
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">Prefer to send us a message?</h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-sky-100/80 sm:text-lg">Fill out the form below and our team will respond shortly.</p>

            <ul className="mt-8 flex gap-3">
              {socials.map(({ name, svg }, i) => (
                <li key={name} style={{ animationDelay: `${500 + i * 100}ms` }} className={up}>
                  <a
                    href="#"
                    aria-label={name}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white outline-none transition-all duration-300 hover:-translate-y-1.5 hover:rotate-6 hover:border-white hover:bg-white hover:text-[#0b1b4d] focus-visible:ring-4 focus-visible:ring-sky-300"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      {svg}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="grid gap-4 px-6 py-10 sm:px-10 sm:py-12 lg:col-span-3 lg:px-12 lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required autoComplete="name" value={values.name} onChange={set('name')} delay={150} show={up} />
            <Field label="Email" name="email" type="email" required value={values.email} onChange={set('email')} delay={230} show={up} />
            <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={set('phone')} delay={310} show={up} />
            <Field label="Company" name="company" value={values.company} onChange={set('company')} delay={390} show={up} />
          </div>
          <Field label="Marketplace" name="marketplace" value={values.marketplace} onChange={set('marketplace')} delay={470} show={up} />

          {/* Service interest as selectable chips */}
          <fieldset style={{ animationDelay: '550ms' }} className={`mt-2 ${up}`}>
            <legend className="text-base font-semibold text-[#0b1b4d]">Service Interest</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {services.map((s) => {
                const on = picked.includes(s)
                return (
                  <label key={s} className="group relative cursor-pointer">
                    <input type="checkbox" checked={on} onChange={() => toggle(s)} className="peer sr-only" />
                    <span
                      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 group-hover:-translate-y-0.5 peer-focus-visible:ring-4 peer-focus-visible:ring-sky-300 sm:text-base ${
                        on ? 'border-[#0b1b4d] bg-[#0b1b4d] text-white shadow-[0_8px_20px_rgba(11,27,77,0.25)]' : 'border-slate-300 bg-white text-[#0b1b4d] group-hover:border-[#0b1b4d]'
                      }`}
                    >
                      <span className={`flex items-center justify-center overflow-hidden rounded-full bg-sky-300 text-[#0b1b4d] transition-all duration-300 ${on ? 'h-5 w-5 opacity-100' : 'h-0 w-0 opacity-0'}`}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {s}
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <Field label="Message" name="message" textarea value={values.message} onChange={set('message')} delay={630} show={up} className="mt-2" />

          <div style={{ animationDelay: '710ms' }} className={up}>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 py-4 text-base font-semibold text-white outline-none transition-all duration-300 focus-visible:ring-4 focus-visible:ring-sky-300 enabled:hover:-translate-y-1 enabled:hover:shadow-[0_14px_30px_rgba(11,27,77,0.35)] enabled:active:scale-[0.98] sm:w-auto sm:min-w-[11rem] ${
                status === 'sent' ? 'bg-emerald-600' : 'bg-[#0b1b4d]'
              }`}
            >
              {status === 'idle' && (
                <>
                  <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-sky-600 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative">Submit</span>
                  <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1.5" aria-hidden="true" />
                </>
              )}
              {status === 'sending' && <Loader2 className="h-5 w-5 animate-spin" aria-label="Sending" />}
              {status === 'sent' && (
                <>
                  <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  Submitted
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}