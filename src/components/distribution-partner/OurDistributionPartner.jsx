'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Boxes, ShieldCheck, Store, Sparkles } from 'lucide-react';

export default function OurDistributionPartner() {
  return (
    <section
      aria-labelledby="distribution-overview-heading"
      className="relative isolate bg-gradient-to-br from-[#EAF4FB] via-[#F3F9FD] to-[#E2F1FC] px-4 py-24 font-sans text-[#02276b] sm:px-6 sm:py-32 lg:px-12 lg:py-36 overflow-hidden"
    >
      {/* 1. CONTINUOUS ROUND-AND-ROUND ORBITING BACKGROUND CIRCLES */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
          rotate: [0, 360],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 size-[600px] bg-[#00B4D8]/20 rounded-full blur-[150px] pointer-events-none -z-10"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -110, 110, 0],
          y: [0, 90, -90, 0],
          rotate: [360, 0],
          scale: [0.8, 1.35, 1, 0.8],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 size-[650px] bg-[#0077B6]/15 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Organic Flow Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#0096C7]/30 bg-white/90 px-6 py-2.5 text-xs font-black tracking-widest text-[#0077B6] uppercase shadow-lg backdrop-blur-md">
              <motion.span 
                animate={{ scale: [1, 1.6, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                aria-hidden="true" 
                className="size-2.5 rounded-full bg-[#00B4D8]" 
              />
              Our Distribution Partner &mdash; Tech Cloud DS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="distribution-overview-heading" 
            className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]"
          >
            Scalable, compliant <br />
            <motion.span 
              animate={{ color: ['#0077B6', '#00B4D8', '#005593', '#0077B6'] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-block"
            >
              marketplace distribution.
            </motion.span>
          </motion.h2>
        </div>

        {/* Dynamic Organic Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Organic Pill-Shaped Image Showcase (Span 6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 180 }}
            className="lg:col-span-6 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-[3rem] lg:rounded-tr-[8rem] lg:rounded-bl-[8rem] border-2 border-[#00B4D8]/40 bg-white/90 backdrop-blur-2xl p-5 shadow-2xl shadow-[#0077B6]/20 group"
            >
              <div className="overflow-hidden rounded-[2.5rem] lg:rounded-tr-[7rem] lg:rounded-bl-[7rem] bg-[#E0F2FE]">
                <Image
                  src="/images/distribution-partner-collaboration.webp"
                  alt="Illustration of two distribution partners reviewing inventory with a tablet in an organized fulfillment warehouse"
                  width={1448}
                  height={1086}
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating Circular Badge on Image */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-8 flex items-center gap-4 rounded-full border border-[#00B4D8]/40 bg-white/95 px-6 py-4 shadow-2xl backdrop-blur-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0077B6]"
                >
                  <Boxes size={22} strokeWidth={2} aria-hidden="true" />
                </motion.div>
                <div>
                  <p className="text-xs font-black text-[#02276b]">Built on strong partnerships</p>
                  <p className="text-[11px] font-medium text-[#415a77]">Connecting brands & opportunity</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Fluid Editorial Flow (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Organic Narrative Wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 180, delay: 0.1 }}
              className="space-y-5 text-base sm:text-lg leading-relaxed text-[#415a77] font-medium bg-white/70 backdrop-blur-2xl p-8 lg:p-10 rounded-[3rem] lg:rounded-tl-[6rem] lg:rounded-br-[6rem] border border-[#00B4D8]/30 shadow-2xl shadow-[#0077B6]/15"
            >
              <p>At Tech Cloud DS, we work closely with trusted U.S.-based brands and distributors to build a compliant and scalable distribution system across Amazon, Walmart, and eBay marketplaces.</p>
              <p>Our role is to connect brands with the right selling infrastructure by managing distribution through authorized Amazon store owners and professional eCommerce systems.</p>
            </motion.div>

            {/* Curved Trust Callout Capsule */}
            <motion.div
              whileHover={{ scale: 1.02, x: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex items-center gap-5 rounded-full border border-[#00B4D8]/30 bg-white/90 backdrop-blur-2xl p-5 lg:p-6 shadow-xl shadow-[#0077B6]/10 cursor-pointer"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0077B6] shadow-md"
              >
                <ShieldCheck size={26} strokeWidth={1.8} aria-hidden="true" />
              </motion.span>
              <div>
                <p className="text-xs font-black text-[#0077B6] uppercase tracking-wider mb-0.5">Absolute Reliability</p>
                <p className="text-sm sm:text-base leading-snug font-bold text-[#02276b]">Trusted U.S. brands. Authorized store owners. A connected distribution approach.</p>
              </div>
            </motion.div>

            {/* Organic Marketplace Pill Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.5rem] border border-[#00B4D8]/30 bg-white/70 backdrop-blur-2xl p-6 lg:p-8 shadow-xl shadow-[#0077B6]/10"
            >
              <p className="mb-4 flex items-center gap-2 text-xs font-black tracking-[0.15em] text-[#0077B6] uppercase">
                <Store size={16} aria-hidden="true" /> Marketplace reach
              </p>
              <ul aria-label="Marketplaces" className="flex flex-wrap gap-3.5">
                {['Amazon', 'Walmart', 'eBay'].map((marketplace, index) => (
                  <motion.li
                    key={marketplace}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="inline-block rounded-full border border-[#00B4D8]/40 bg-white px-6 py-3 text-sm font-black text-[#02276b] shadow-lg cursor-pointer hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-colors duration-300">
                      {marketplace}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

      </div>

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#00B4D8]/60 to-transparent"
      />
    </section>
  );
}