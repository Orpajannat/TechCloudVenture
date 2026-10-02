import { ArrowUpRight, CalendarDays, Mail, MapPin, Phone } from 'lucide-react';


const contacts = [
  { label: 'Call us', value: '+1 (470) 213 9449', href: 'tel:+14702139449', icon: Phone },
  { label: 'Email us', value: 'info@techcloudventure.com', href: 'mailto:info@techcloudventure.com', icon: Mail },
  { label: 'Visit our office', value: '3650 Greenside Ct, Dacula, GA 30019 (USA)', icon: MapPin },
];

function Field({ id, label, optional = false, ...props }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label className="text-sm leading-relaxed font-semibold text-[#263b58]" htmlFor={id}>{label}{optional ? <span className="font-normal text-[#66758b]"> (optional)</span> : <span aria-hidden="true"> *</span>}</label>
      <input className="block min-h-12 w-full min-w-0 rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-3 text-base leading-6 text-[#172c49] transition-[border-color,box-shadow] duration-200 placeholder:text-[#6b7b90] hover:border-[#87aec8] focus:border-[#007ea5] focus:outline-2 focus:outline-offset-2 focus:outline-[#007ea5] motion-reduce:transition-none" id={id} name={id.replace('consultation-', '')} required={!optional} {...props} />
    </div>
  );
}

export default function BookCall() {
  return (
    <section id="book-call" aria-labelledby="book-call-heading" className="bg-white px-4 py-14 font-sans text-[#02276b] sm:px-6 sm:py-20 lg:px-8 xl:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-20">
        <div className="min-w-0 lg:pt-8">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#005593]/15 bg-[#eff8fc] px-4 py-2.5 text-xs font-semibold tracking-widest text-[#005593] uppercase"><CalendarDays size={16} aria-hidden="true" />Book a free call</p>
          <h2 id="book-call-heading" className="max-w-xl text-3xl leading-tight font-semibold tracking-tight wrap-break-word sm:text-4xl xl:text-5xl">Your next chapter<br className="hidden sm:block" /> starts with a <span className="text-[#007ea5]">conversation.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#526078]">Ready to build your Amazon wholesale business? Talk to our experts and get clear, practical guidance for your next step.</p>
          <div className="mt-8 grid gap-3">
            {contacts.map(({ label, value, href, icon: Icon }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag key={label} href={href} className="group/contact flex min-w-0 items-center gap-3.5 rounded-2xl border border-[#e3ebf3] bg-white p-4 no-underline transition duration-300 hover:border-[#0eb1db]/35 hover:bg-[#f8fbfe] hover:shadow-lg hover:shadow-[#02276b]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007ea5] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:gap-4 sm:p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6fb] text-[#005593] transition duration-300 group-hover/contact:bg-[#005593] group-hover/contact:text-white motion-safe:group-hover/contact:-rotate-6 motion-reduce:transition-none"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-xs font-medium text-[#526078]">{label}</span>
                    <span className="text-sm leading-relaxed font-semibold wrap-anywhere sm:text-base">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="shrink-0 text-[#007ea5] transition-transform duration-300 motion-safe:group-hover/contact:translate-x-0.5 motion-safe:group-hover/contact:-translate-y-0.5 motion-reduce:transition-none" size={19} aria-hidden="true" />}
                </Tag>
              );
            })}
          </div>
          <div className="mt-6 flex max-w-md items-start gap-3 text-sm leading-7 text-[#526078]">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#0096bd]" />
            <p>From brand approvals to store growth, let&apos;s find the right approach for your business.</p>
          </div>
        </div>

        <div className="relative min-w-0 rounded-3xl border border-[#dfe9f3] border-t-[3px] border-t-[#0099c1] bg-[#f6f9fc] p-5 shadow-xl shadow-[#02276b]/5 transition-[border-color,box-shadow] duration-300 hover:border-[#008cb7]/35 hover:shadow-2xl hover:shadow-[#02276b]/10 focus-within:border-[#008cb7]/40 focus-within:shadow-2xl motion-reduce:transition-none sm:p-8" role="group" aria-labelledby="consultation-form-heading">
          <div className="flex items-start gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#005593] text-white"><CalendarDays size={23} aria-hidden="true" /></span>
            <div className="min-w-0">
              <p className="mb-1.5 text-[11px] font-semibold tracking-[0.15em] text-[#007ea5] uppercase">Let&apos;s get started</p>
              <h3 id="consultation-form-heading" className="text-xl leading-snug font-semibold tracking-tight sm:text-2xl">Request a free consultation</h3>
            </div>
          </div>
          <p className="mt-4 mb-6 text-sm leading-7 text-[#526078]">Tell us a little about your business.<span className="block text-xs">Fields marked * are required.</span></p>

          <div className="grid gap-5">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-x-4 gap-y-5">
              <Field id="consultation-first-name" label="First name" type="text" autoComplete="given-name" placeholder="First name" />
              <Field id="consultation-last-name" label="Last name" type="text" autoComplete="family-name" placeholder="Last name" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-x-4 gap-y-5">
              <Field id="consultation-email" label="Email address" type="email" autoComplete="email" placeholder="you@company.com" />
              <Field id="consultation-phone" label="Phone number" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <Field id="consultation-business" label="Business / store name" type="text" autoComplete="organization" placeholder="Your business name" />
            <div className="flex min-w-0 flex-col gap-2">
              <label className="text-sm leading-relaxed font-semibold text-[#263b58]" htmlFor="consultation-address">Business address <span aria-hidden="true">*</span></label>
              <textarea className="block min-h-24 w-full min-w-0 rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-3 text-base leading-6 text-[#172c49] transition-[border-color,box-shadow] duration-200 placeholder:text-[#6b7b90] hover:border-[#87aec8] focus:border-[#007ea5] focus:outline-2 focus:outline-offset-2 focus:outline-[#007ea5] motion-reduce:transition-none resize-y" id="consultation-address" name="address" autoComplete="street-address" required rows={2} placeholder="Street address, city, state, and postal code" />
            </div>
            <fieldset className="min-w-0 border-0 p-0">
              <legend className="mb-2.5 text-sm leading-relaxed font-semibold text-[#263b58]">E-commerce platform <span aria-hidden="true">*</span></legend>
              <p className="-mt-1 mb-2.5 text-xs text-[#66758b]">Select all that apply.</p>
              <div className="flex flex-wrap gap-2.5">
                {['Amazon', 'Walmart', 'eBay'].map((platform) => (
                  <label key={platform} className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-2.5 text-sm text-[#3c4e67] transition-colors duration-200 hover:border-[#007ea5] hover:bg-[#edf7fc] has-checked:border-[#007ea5] has-checked:bg-[#e7f5fc] has-checked:text-[#005593] has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-[#007ea5] motion-reduce:transition-none">
                    <input className="size-4 shrink-0 accent-[#005593]" type="checkbox" name="platform" value={platform} />
                    <span>{platform}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="min-w-0 border-0 p-0">
              <legend className="mb-2.5 text-sm leading-relaxed font-semibold text-[#263b58]">Operating marketplace country <span aria-hidden="true">*</span></legend>
              <div className="flex flex-wrap gap-2.5">
                {['USA', 'UK'].map((country) => (
                  <label key={country} className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-2.5 text-sm text-[#3c4e67] transition-colors duration-200 hover:border-[#007ea5] hover:bg-[#edf7fc] has-checked:border-[#007ea5] has-checked:bg-[#e7f5fc] has-checked:text-[#005593] has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-[#007ea5] motion-reduce:transition-none">
                    <input className="size-4 shrink-0 accent-[#005593]" type="checkbox" name="country" value={country} />
                    <span>{country}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <Field id="consultation-website" label="Website address" optional type="url" autoComplete="url" placeholder="https://yourwebsite.com" />
          </div>
          <button type="button" className="group/submit mt-7 flex min-h-13 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-transparent bg-[#02276b] px-4 py-3.5 text-base font-semibold text-white transition duration-300 hover:bg-[#005593] hover:shadow-lg hover:shadow-[#005593]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007ea5] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none">Submit request<ArrowUpRight size={20} aria-hidden="true" className="shrink-0 transition-transform duration-300 motion-safe:group-hover/submit:translate-x-0.5 motion-safe:group-hover/submit:-translate-y-0.5 motion-reduce:transition-none" /></button>
        </div>
      </div>
    </section>
  );
}
