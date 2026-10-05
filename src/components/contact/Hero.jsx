import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section aria-labelledby="contact-hero-heading" className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#07162f] px-4 pt-32 pb-12 font-sans text-white sm:min-h-[580px] sm:px-6 sm:pt-40 sm:pb-16 lg:min-h-[640px] lg:px-8 lg:pt-44 lg:pb-20 2xl:min-h-[700px]">
      <Image src="/images/contact-hero-commerce.webp" alt="" fill preload sizes="100vw" className="-z-30 object-cover object-[65%_center] sm:object-[60%_center] lg:object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#061329]/25" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-[#061329]/95 to-transparent sm:h-56" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-t from-[#061329]/75 to-transparent" />
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/25 bg-[#071a34]/80 px-5 py-8 text-center shadow-2xl shadow-black/20 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#7be5f7]/60 hover:shadow-[#001023]/40 motion-reduce:transition-none sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#7be5f7] to-transparent" />
          <p className="mb-4 flex items-center justify-center gap-2.5 text-[11px] leading-5 font-semibold tracking-[0.16em] text-[#7be5f7] uppercase sm:text-xs"><MessageCircle size={17} aria-hidden="true" className="shrink-0" />Let&apos;s start a conversation</p>
          <h1 id="contact-hero-heading" className="text-5xl leading-[1.1] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Contact <span className="text-[#7be5f7]">us.</span></h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">Have a question or a business opportunity? Let&apos;s talk about your next step in wholesale and marketplace growth.</p>
          <nav aria-label="Breadcrumb" className="mt-7 border-t border-white/15 pt-5">
            <ol className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-xs leading-6 sm:text-sm">
              <li><Link href="/" className="inline-flex min-h-11 items-center rounded px-2 text-slate-200 transition-colors hover:text-[#7be5f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7be5f7] motion-reduce:transition-none">Home</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#7be5f7]" /></li>
              <li aria-current="page" className="font-medium text-white">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#7be5f7]/65 to-transparent" />
    </section>
  );
}
