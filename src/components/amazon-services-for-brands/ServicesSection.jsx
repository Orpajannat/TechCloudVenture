'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, ListChecks, ShieldCheck, Store, UserCog } from 'lucide-react'

/*
  Palette (same as the hero)
  ink #061330 | deep #0F2F6E | sky #BFD8F5 | mist #E8F1FC | steel #7FAFE6
*/

const TITLE = 'Amazon Brand Services We Offer'
const EASE = 'ease-[cubic-bezier(0.3,1.6,0.5,1)]'

// { t: text, b: true } renders bold
const services = [
  {
    title: 'Brand Protection & Seller Control',
    icon: ShieldCheck,
    image: '/images/services/brand-protection.webp',
    href: '/services/brand-protection',
    intro: [{ t: 'Unauthorized sellers and pricing chaos can destroy brand value.' }],
    lead: [{ t: 'Our ' }, { t: 'Brand Protection & Seller Control Service', b: true }, { t: ' helps brands:' }],
    list: [
      'Identify unauthorized sellers',
      'Monitor MAP and pricing violations',
      'Support seller suppression through compliant processes',
      'Restore and protect Buy Box control',
      'Resolve listing hijacks and content abuse',
    ],
    closing: [{ t: 'All actions follow Amazon Brand Registry and marketplace policies.', b: true }],
  },
  {
    title: 'Brand Account Management',
    icon: UserCog,
    image: '/images/services/brand-account-management.webp',
    href: '/services/brand-account-management',
    intro: [
      { t: 'Managing a brand account on Amazon USA requires continuous monitoring, fast issue resolution, and policy expertise.' },
    ],
    lead: [{ t: 'Our ' }, { t: 'Brand Account Management Service', b: true }, { t: ' provides:' }],
    list: [
      'Brand Registry management',
      'Account health monitoring',
      'Case and appeal handling',
      'Performance optimization',
      'Compliance oversight',
    ],
    closing: [
      { t: 'We act as your ' },
      { t: 'Amazon operations partner', b: true },
      { t: ', ensuring your brand account stays healthy and optimized.' },
    ],
  },
  {
    title: 'Product Listing Management',
    icon: ListChecks,
    image: '/images/services/product-listing-management.webp',
    href: '/services/product-listing-management',
    intro: [{ t: 'Your listings represent your brand on Amazon.' }],
    lead: [{ t: 'Our ' }, { t: 'Product Listing Management Service', b: true }, { t: ' ensures listings are:' }],
    list: [
      'Accurate and policy-compliant',
      'Optimized for discoverability and conversion',
      'Free from technical errors and suppression risks',
      'Aligned with brand guidelines',
    ],
    closing: [{ t: 'From new listing creation to advanced flat file fixes, we handle it all.' }],
  },
  {
    title: 'Brand Store SEO',
    icon: Store,
    image: '/images/services/brand-store-seo.webp',
    href: '/services/brand-store-seo',
    intro: [{ t: 'Your Amazon Brand Store is your digital storefront.' }],
    lead: [
      { t: 'Our ' },
      { t: 'Brand Store SEO Service', b: true },
      { t: ' helps brands build ' },
      { t: 'discoverable, conversion-focused storefronts', b: true },
      { t: ' that improve engagement and sales.' },
    ],
    leadSecond: 'We deliver:',
    list: [
      'Professional storefront design',
      'Keyword mapping and SEO structure',
      'Optimized store pages',
      'Category navigation setup',
      'Conversion optimization',
    ],
  },
]

// Parallax depth per card (literal classes so Tailwind can see them)
const depth = [
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*12px)_calc(var(--my,0)*12px)]',
  '[translate:calc(var(--mx,0)*6px)_calc(var(--my,0)*6px)]',
]

function Rich({ parts }) {
  return parts.map((p, i) =>
    p.b ? (
      <strong key={i} className="font-extrabold text-[#061330]">
        {p.t}
      </strong>
    ) : (
      <span key={i}>{p.t}</span>
    ),
  )
}

// Each card pops when it scrolls into view
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

function ServiceCard({ service, index }) {
  const [ref, seen] = useInView()
  const { title, icon: Icon, image, href, intro, lead, leadSecond, list, closing } = service

  return (
    <li
      ref={ref}
      className={`${seen ? 'animate-pop' : 'opacity-0'} ${depth[index]} motion-reduce:animate-none`}
      style={{ animationDelay: `${(index % 2) * 150}ms` }}
    >
      <article
        className={`group/card flex h-full flex-col rounded-[2rem] border-2 border-[#061330] bg-[#E8F1FC] p-5 text-[#1B2F57] shadow-[6px_6px_0_#061330] transition-all duration-300 ${EASE} hover:-translate-y-2 hover:shadow-[10px_10px_0_#7FAFE6] sm:p-7`}
      >
        {/* Illustration */}
        <div className="relative h-44 overflow-hidden rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] sm:h-52">
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border-2 border-dashed border-[#0F2F6E]/25 motion-reduce:animate-none"
          >
            <span className="absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#061330] bg-[#E8F1FC]" />
          </span>
          <div className="absolute inset-3 animate-sway motion-reduce:animate-none">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className={`object-contain transition-transform duration-500 ${EASE} group-hover/card:scale-110 group-hover/card:-rotate-2`}
            />
          </div>

          {/* Icon sticker */}
          <span
            aria-hidden="true"
            className="absolute top-3 left-3 grid size-12 animate-jump place-items-center rounded-2xl border-2 border-[#061330] bg-[#E8F1FC] text-[#061330] shadow-[3px_3px_0_#061330] motion-reduce:animate-none"
            style={{ animationDelay: `${index * 300}ms` }}
          >
            <Icon size={22} strokeWidth={2.2} />
          </span>
        </div>

        {/* Copy */}
        <h3 className="mt-6 text-xl leading-tight font-black tracking-tight text-[#0F2F6E] sm:text-2xl">{title}</h3>

        <p className="mt-4 text-base leading-relaxed">
          <Rich parts={intro} />
        </p>
        <p className="mt-3 text-base leading-relaxed">
          <Rich parts={lead} />
        </p>
        {leadSecond && <p className="mt-3 text-base leading-relaxed font-semibold text-[#061330]">{leadSecond}</p>}

        <ul className="mt-4 space-y-2.5">
          {list.map((item) => (
            <li
              key={item}
              className={`group/item flex cursor-default items-start gap-3 text-sm font-medium transition-transform duration-300 ${EASE} hover:translate-x-1.5 hover:text-[#061330] sm:text-base`}
            >
              <span
                className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#0F2F6E] text-[#BFD8F5] transition-all duration-500 ${EASE} group-hover/item:rotate-[360deg] group-hover/item:scale-125 group-hover/item:bg-[#7FAFE6] group-hover/item:text-[#061330]`}
              >
                <Check size={12} strokeWidth={3.5} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        {closing && (
          <p className="mt-5 rounded-2xl border-2 border-[#061330] bg-[#BFD8F5] px-4 py-3 text-sm leading-relaxed shadow-[3px_3px_0_#061330] sm:text-base">
            <Rich parts={closing} />
          </p>
        )}

        <div className="mt-auto pt-7">
          <Link
            href={href}
            aria-label={`Read more about ${title}`}
            className={`group/btn inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-[#061330] bg-[#0F2F6E] py-2 pr-2 pl-6 font-bold text-[#E8F1FC] shadow-[4px_4px_0_#061330] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-[#7FAFE6] hover:text-[#061330] hover:shadow-[1px_1px_0_#061330] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2F6E] active:shadow-none`}
          >
            Read More
            <span className={`grid size-8 place-items-center rounded-full bg-[#BFD8F5] text-[#061330] transition-transform duration-300 ${EASE} group-hover/btn:rotate-45 group-hover/btn:scale-110`}>
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </article>
    </li>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  // Heading reveal + live pointer parallax (CSS variables, no re-renders)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let visible = false

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (entry.isIntersecting) setSeen(true)
    }, { threshold: 0.05 })
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
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#0F2F6E] py-16 text-[#E8F1FC] sm:py-20 lg:py-28"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(232,241,252,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 [translate:calc(var(--mx,0)*-30px)_calc(var(--my,0)*-30px)] animate-blob rounded-full bg-[#2B5BB8]/40 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-96 [translate:calc(var(--mx,0)*-40px)_calc(var(--my,0)*-40px)] animate-blob-rev rounded-full bg-[#1B4596]/60 blur-3xl motion-reduce:animate-none" />
      <div aria-hidden="true" className="absolute top-[18%] left-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border-2 border-dashed border-[#E8F1FC]/15 motion-reduce:animate-none sm:size-[980px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-3xl text-center [translate:calc(var(--mx,0)*8px)_calc(var(--my,0)*8px)]">
          <h2
            id="services-heading"
            aria-label={TITLE}
            className="text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            {TITLE.split(' ').map((word, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${pop} mr-[0.25em] inline-block cursor-default transition-all duration-300 ${EASE} last:mr-0 hover:-translate-y-1.5 hover:-rotate-3 hover:scale-110 hover:text-[#BFD8F5] motion-reduce:animate-none`}
                style={{ animationDelay: `${100 + i * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p
            className={`${pop} mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#E8F1FC]/85 motion-reduce:animate-none sm:text-lg`}
            style={{ animationDelay: '600ms' }}
          >
            End-to-end solutions to protect, manage, and grow your brand on Amazon.
          </p>
        </div>

        {/* ---------- Cards ---------- */}
        <ul className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}