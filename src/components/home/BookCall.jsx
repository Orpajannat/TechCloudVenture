"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Check,
} from "lucide-react";

const contacts = [
  {
    label: "Call us",
    value: "+1 (470) 213 9449",
    href: "tel:+14702139449",
    icon: Phone,
  },
  {
    label: "Email us",
    value: "info@techcloudventure.com",
    href: "mailto:info@techcloudventure.com",
    icon: Mail,
  },
  {
    label: "Visit our office",
    value: "3650 Greenside Ct, Dacula, GA 30019 (USA)",
    icon: MapPin,
  },
];

function Field({ id, label, optional = false, ...props }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold leading-relaxed text-[#263b58]"
      >
        {label}
        {optional ? (
          <span className="font-normal text-[#66758b]"> (optional)</span>
        ) : (
          <span aria-hidden="true"> *</span>
        )}
      </label>

      <input
        id={id}
        name={id.replace("consultation-", "")}
        required={!optional}
        {...props}
        className="block min-h-12 w-full rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-3 text-base text-[#172c49] outline-none transition-all duration-300 placeholder:text-[#6b7b90] hover:border-[#87aec8] focus:-translate-y-0.5 focus:border-[#007ea5] focus:ring-4 focus:ring-[#007ea5]/10"
      />
    </div>
  );
}

export default function BookCall() {
  return (
    <section
      id="book-call"
      className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 font-sans text-[#02276b] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large blue circle */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#60a5fa]/10 blur-3xl animate-pulse" />

        {/* Cyan circle */}
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#22d3ee]/10 blur-3xl animate-pulse" />

        {/* Floating circles */}
        <div className="absolute left-[8%] top-[15%] h-5 w-5 rounded-full bg-[#2563eb]/20 animate-bounce" />

        <div className="absolute right-[15%] top-[12%] h-3 w-3 rounded-full bg-[#06b6d4]/40 animate-ping" />

        <div className="absolute bottom-[18%] left-[20%] h-4 w-4 rounded-full bg-[#38bdf8]/30 animate-pulse" />

        <div className="absolute bottom-[25%] right-[8%] h-6 w-6 rounded-full border-2 border-[#2563eb]/20 animate-spin" />

        {/* Decorative ring */}
        <div className="absolute right-[4%] top-[30%] hidden h-32 w-32 rounded-full border border-dashed border-[#2563eb]/15 lg:block animate-spin" />

        <div className="absolute left-[3%] bottom-[20%] hidden h-24 w-24 rounded-full border border-[#22d3ee]/20 lg:block" />

      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="lg:pt-8">

          {/* Label */}

          <div className="mb-7 inline-flex animate-pulse items-center gap-2.5 rounded-full border border-[#007ea5]/15 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#005593] shadow-sm">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full rounded-full bg-[#0096bd] opacity-60 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#0096bd]" />
            </span>

            <CalendarDays size={16} />

            Book a free call

          </div>


          {/* Heading */}

          <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#02276b] sm:text-5xl xl:text-6xl">

            Your next chapter

            <br className="hidden sm:block" />

            starts with a{" "}

            <span className="relative inline-block text-[#007ea5]">

              conversation.

              {/* underline */}
              <span className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-[#22d3ee] animate-pulse" />

            </span>

          </h2>


          {/* Description */}

          <p className="mt-7 max-w-lg text-base leading-8 text-[#526078] sm:text-lg">
            Ready to build your Amazon wholesale business? Talk to our experts
            and get clear, practical guidance for your next step.
          </p>


          {/* =================================================
              CONTACT CARDS
          ================================================= */}

          <div className="mt-10 grid gap-4">

            {contacts.map(
              ({ label, value, href, icon: Icon }, index) => {

                const Tag = href ? "a" : "div";

                return (
                  <Tag
                    key={label}
                    href={href}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#e0eaf3] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#60a5fa] hover:shadow-xl hover:shadow-[#2563eb]/10 sm:p-5"
                  >

                    {/* Icon */}

                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#005593] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-[#005593] group-hover:text-white">

                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />

                      {/* tiny orbit */}
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#22d3ee] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-ping" />

                    </span>


                    {/* Text */}

                    <span className="flex min-w-0 flex-1 flex-col gap-1">

                      <span className="text-xs font-medium text-[#526078]">
                        {label}
                      </span>

                      <span className="break-words text-sm font-bold leading-relaxed text-[#172c49] sm:text-base">
                        {value}
                      </span>

                    </span>


                    {/* Arrow */}

                    {href && (
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-[#007ea5] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110"
                      />
                    )}

                  </Tag>
                );
              }
            )}

          </div>


          {/* Bottom message */}

          <div className="mt-7 flex max-w-md items-start gap-3 text-sm leading-7 text-[#526078]">

            <span className="relative mt-2.5 flex h-2 w-2 shrink-0">

              <span className="absolute h-full w-full rounded-full bg-[#0096bd] animate-ping" />

              <span className="relative h-2 w-2 rounded-full bg-[#0096bd]" />

            </span>

            <p>
              From brand approvals to store growth, let&apos;s find the right
              approach for your business.
            </p>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE FORM
        ===================================================== */}

        <div className="relative">

          {/* Floating background ring */}

          <div className="absolute -right-5 -top-5 hidden h-28 w-28 rounded-full border border-dashed border-[#38bdf8]/30 lg:block animate-spin" />

          <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-full border border-[#2563eb]/15 lg:block animate-pulse" />


          {/* FORM CARD */}

          <div className="relative rounded-[30px] border border-[#dbe7f1] border-t-4 border-t-[#0099c1] bg-white p-5 shadow-2xl shadow-[#02276b]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#02276b]/15 sm:p-8 lg:p-9">

            {/* Form Header */}

            <div className="flex items-start gap-4">

              <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#005593] text-white shadow-lg shadow-[#005593]/20 transition-transform duration-500 hover:rotate-6 hover:scale-110">

                <CalendarDays size={24} />

                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#22d3ee] animate-ping" />

              </div>


              <div>

                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#007ea5]">
                  Let&apos;s get started
                </p>

                <h3 className="text-xl font-bold tracking-tight text-[#02276b] sm:text-2xl">
                  Request a free consultation
                </h3>

              </div>

            </div>


            <p className="mb-7 mt-5 text-sm leading-7 text-[#526078]">
              Tell us a little about your business.
              <span className="block text-xs">
                Fields marked * are required.
              </span>
            </p>


            {/* FORM */}

            <div className="grid gap-5">

              {/* First / Last */}

              <div className="grid gap-5 sm:grid-cols-2">

                <Field
                  id="consultation-first-name"
                  label="First name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                />

                <Field
                  id="consultation-last-name"
                  label="Last name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                />

              </div>


              {/* Email / Phone */}

              <div className="grid gap-5 sm:grid-cols-2">

                <Field
                  id="consultation-email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                />

                <Field
                  id="consultation-phone"
                  label="Phone number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                />

              </div>


              {/* Business */}

              <Field
                id="consultation-business"
                label="Business / store name"
                type="text"
                autoComplete="organization"
                placeholder="Your business name"
              />


              {/* Address */}

              <div className="flex flex-col gap-2">

                <label
                  htmlFor="consultation-address"
                  className="text-sm font-semibold text-[#263b58]"
                >
                  Business address{" "}
                  <span aria-hidden="true">*</span>
                </label>

                <textarea
                  id="consultation-address"
                  name="address"
                  autoComplete="street-address"
                  required
                  rows={2}
                  placeholder="Street address, city, state, and postal code"
                  className="min-h-24 w-full resize-y rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-3 text-base leading-6 text-[#172c49] outline-none transition-all duration-300 placeholder:text-[#6b7b90] hover:border-[#87aec8] focus:-translate-y-0.5 focus:border-[#007ea5] focus:ring-4 focus:ring-[#007ea5]/10"
                />

              </div>


              {/* Platform */}

              <fieldset className="border-0 p-0">

                <legend className="mb-2.5 text-sm font-semibold text-[#263b58]">
                  E-commerce platform{" "}
                  <span aria-hidden="true">*</span>
                </legend>

                <p className="mb-3 text-xs text-[#66758b]">
                  Select all that apply.
                </p>

                <div className="flex flex-wrap gap-2.5">

                  {["Amazon", "Walmart", "eBay"].map(
                    (platform) => (
                      <label
                        key={platform}
                        className="group flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-4 py-2.5 text-sm text-[#3c4e67] transition-all duration-300 hover:-translate-y-1 hover:border-[#007ea5] hover:bg-[#edf7fc] has-checked:border-[#007ea5] has-checked:bg-[#e7f5fc] has-checked:text-[#005593]"
                      >

                        <input
                          className="size-4 accent-[#005593]"
                          type="checkbox"
                          name="platform"
                          value={platform}
                        />

                        <span>{platform}</span>

                      </label>
                    )
                  )}

                </div>

              </fieldset>


              {/* Country */}

              <fieldset className="border-0 p-0">

                <legend className="mb-2.5 text-sm font-semibold text-[#263b58]">
                  Operating marketplace country{" "}
                  <span aria-hidden="true">*</span>
                </legend>

                <div className="flex flex-wrap gap-2.5">

                  {["USA", "UK"].map((country) => (
                    <label
                      key={country}
                      className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-4 py-2.5 text-sm text-[#3c4e67] transition-all duration-300 hover:-translate-y-1 hover:border-[#007ea5] hover:bg-[#edf7fc] has-checked:border-[#007ea5] has-checked:bg-[#e7f5fc] has-checked:text-[#005593]"
                    >

                      <input
                        className="size-4 accent-[#005593]"
                        type="checkbox"
                        name="country"
                        value={country}
                      />

                      <span>{country}</span>

                    </label>
                  ))}

                </div>

              </fieldset>


              {/* Website */}

              <Field
                id="consultation-website"
                label="Website address"
                optional
                type="url"
                autoComplete="url"
                placeholder="https://yourwebsite.com"
              />

            </div>


            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <button
              type="button"
              className="group mt-8 flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#02276b] px-5 py-4 text-base font-bold text-white shadow-lg shadow-[#02276b]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#005593] hover:shadow-xl hover:shadow-[#005593]/20"
            >

              <span>
                Submit request
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">

                <ArrowUpRight size={19} />

              </span>

            </button>


            {/* Small success-style decoration */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#66758b]">

              <Check
                size={15}
                className="text-[#0096bd]"
              />

              <span>
                Start your conversation today
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}