'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, ArrowUpRight, CalendarDays, Mail, MapPin, Phone, Check } from 'lucide-react';

const EMAILJS_SERVICE_ID = "service_qnctqnu";
// FIX: Using your auto-reply template ID so it emails the user correctly instead of forwarding to info@
const EMAILJS_TEMPLATE_ID = "template_u4er6r5"; 
const EMAILJS_PUBLIC_KEY = "RdDMaC7gZ5y5ff40Q";

const contacts = [
  { label: 'Call us', value: '+1 (470) 213-9449', href: 'tel:+14702139449', icon: Phone },
  { label: 'Email us', value: 'info@techcloudventure.com', href: 'mailto:info@techcloudventure.com', icon: Mail },
  { label: 'Find us', value: '3650 Greenside Ct, Dacula, GA, USA, 30019', icon: MapPin },
];

const inputClass = 'min-h-13 w-full min-w-0 rounded-xl border border-[#d9e3ee] bg-white px-4 py-3 text-base text-[#132b4e] shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-[#78869a] hover:border-[#8caec5] focus:border-[#007ea5] focus:outline-2 focus:outline-offset-2 focus:outline-[#007ea5] motion-reduce:transition-none';

export default function BookCall() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const templateParams = {
      email: data.get('email'),         // Populates 'To Email' in EmailJS
      first_name: data.get('firstName'),  // Populates {{first_name}} in your greeting
      message: `[Form Source: Story / Consultation Page]\nWebsite: ${data.get('website') || 'Not provided'}\n\nMessage:\n${data.get('message')}`,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-call" aria-labelledby="story-consultation-heading" className="relative isolate overflow-hidden bg-white px-4 py-16 font-sans text-[#02276b] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#005593]/15 to-transparent" />
      
      {/* Wild Round-and-Round Orbiting Background Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 size-[450px] rounded-full bg-cyan-200/40 blur-[130px] animate-spin-slow -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-10 size-[450px] rounded-full bg-blue-300/30 blur-[140px] animate-spin-reverse-slow -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20 relative z-10">
        
        {/* Left Column with Jumping Header & Contacts */}
        <div className="min-w-0 animate-fade-in">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#cdeaf2] bg-[#f0fafc] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#006582] uppercase shadow-md animate-jump">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#0eb1db] animate-ping" />
            Book a free call
          </p>
          
          <h2 id="story-consultation-heading" className="max-w-xl text-4xl leading-[1.12] font-black tracking-tight sm:text-5xl xl:text-6xl">
            Big ambitions.<br /><span className="text-[#007ea5] inline-block animate-orbit-text">Let&apos;s talk.</span>
          </h2>
          
          <p className="mt-5 max-w-md text-base leading-8 text-[#58677c] sm:text-lg font-medium">Ready to build a profitable Amazon wholesale business? Start with a free consultation and a clear next step.</p>
          
          <div className="mt-8 grid gap-3.5 sm:mt-10">
            {contacts.map(({ label, value, href, icon: Icon }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag key={label} href={href} className="group/contact flex min-w-0 items-center gap-3.5 rounded-2xl border border-transparent p-3 no-underline transition-all duration-300 hover:border-[#d9eaf3] hover:bg-[#f7fbfe] hover:shadow-2xl hover:shadow-[#02276b]/15 hover:translate-x-3 sm:gap-4 sm:p-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#e1edf4] bg-white text-[#007ea5] shadow-md animate-orbit-icon group-hover/contact:bg-[#005593] group-hover/contact:text-white sm:size-14">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs font-bold text-[#58677c]">{label}</span>
                    <span className="block text-sm leading-6 font-bold wrap-anywhere sm:text-base text-[#02276b]">{value}</span>
                  </span>
                  {href && <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-[#7e96ae] transition-transform duration-300 group-hover/contact:text-[#007ea5] group-hover/contact:scale-125" />}
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Right Column: Bouncing Form Container with Success Toggle */}
        <div className="relative min-w-0 overflow-hidden rounded-3xl border border-[#dce7f1] bg-[#f5f8fc] p-5 shadow-2xl shadow-[#02276b]/15 transition-all duration-500 hover:border-[#9ccfdf] hover:shadow-3xl hover:-translate-y-2 sm:p-8 xl:p-10 animate-jump-card">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#0eb1db] to-[#005593] animate-pulse" />
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e1edf4] text-[#007ea5] shadow-md animate-bounce">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-black text-[#02276b]">Request Submitted!</h3>
              <p className="mt-2 text-sm leading-6 text-[#58677c] font-medium">
                We have sent a confirmation message to your email address. We will be in touch shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl bg-linear-to-r from-[#006eaa] to-[#0248ad] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-[#005593]/25 transition-all hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7 flex items-start gap-3.5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#007ea5] shadow-md animate-bounce">
                  <CalendarDays size={24} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl leading-snug font-black tracking-tight sm:text-2xl text-[#02276b]">Your next chapter starts here</h3>
                  <p className="mt-2 text-sm leading-6 text-[#58677c] font-medium">Tell us a little about your business.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid min-w-0 gap-5">
                <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-5">
                  <div className="min-w-0">
                    <label htmlFor="story-first-name" className="mb-2 block text-sm font-bold text-[#02276b]">First name <span className="text-[#007ea5]" aria-hidden="true">*</span></label>
                    <input id="story-first-name" name="firstName" type="text" autoComplete="given-name" placeholder="Your first name" required className={inputClass} />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="story-email" className="mb-2 block text-sm font-bold text-[#02276b]">Email address <span className="text-[#007ea5]" aria-hidden="true">*</span></label>
                    <input id="story-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required className={inputClass} />
                  </div>
                </div>
                
                <div className="min-w-0">
                  <label htmlFor="story-website" className="mb-2 block text-sm font-bold text-[#02276b]">Website <span className="font-normal text-[#58677c]">(optional)</span></label>
                  <input id="story-website" name="website" type="url" autoComplete="url" placeholder="https://yourwebsite.com" className={inputClass} />
                </div>
                
                <div className="min-w-0">
                  <label htmlFor="story-message" className="mb-2 block text-sm font-bold text-[#02276b]">How can we help? <span className="text-[#007ea5]" aria-hidden="true">*</span></label>
                  <textarea id="story-message" name="message" placeholder="Tell us about your goals and where you need a hand..." required rows={5} className={`${inputClass} block min-h-36 resize-y`} />
                </div>
                
                <button type="submit" disabled={loading} className="group/submit flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#006eaa] to-[#0248ad] px-5 py-3.5 text-base font-bold text-white shadow-xl shadow-[#005593]/25 transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-50">
                  {loading ? 'Sending...' : <>Let&apos;s connect <ArrowRight size={20} aria-hidden="true" className="shrink-0 transition-transform duration-300 group-hover/submit:translate-x-2" /></>}
                </button>
                
                <p className="text-center text-xs leading-5 text-[#58677c] font-medium">We respect your privacy. No spam ever.<br />Fields marked * are required.</p>
              </form>
            </>
          )}
        </div>
      </div>

      {/* CONTINUOUS ROUND-AND-ROUND & JUMPING ANIMATIONS KEYFRAMES */}
      <style jsx global>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg) translate(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(30px) rotate(-360deg); }
        }
        @keyframes spinReverseSlow {
          0% { transform: rotate(0deg) translate(-35px) rotate(0deg); }
          100% { transform: rotate(-360deg) translate(-35px) rotate(360deg); }
        }
        @keyframes orbitIcon {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
        }
        @keyframes orbitText {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(4deg) scale(1.04); }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes jumpCard {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }

        .animate-spin-slow { animation: spinSlow 15s linear infinite; }
        .animate-spin-reverse-slow { animation: spinReverseSlow 18s linear infinite; }
        .animate-orbit-icon { animation: orbitIcon 8s ease-in-out infinite; }
        .animate-orbit-text { animation: orbitText 5s ease-in-out infinite; }
        .animate-jump { animation: jump 2.5s ease-in-out infinite; }
        .animate-jump-card { animation: jumpCard 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}