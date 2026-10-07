"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Check,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_qnctqnu";
const EMAILJS_TEMPLATE_ID = "template_u4er6r5";
const EMAILJS_PUBLIC_KEY = "RdDMaC7gZ5y5ff40Q";

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
    href: "https://www.google.com/maps/search/?api=1&query=3650+Greenside+Ct%2C+Dacula%2C+GA+30019",
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

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  const requiredGroups = [
    ["platform", "Select at least one e-commerce platform."],
    ["country", "Select at least one marketplace country."],
  ];

  for (const [name, message] of requiredGroups) {
    const firstInput = form.querySelector(`input[name="${name}"]`);
    const hasSelection = data.getAll(name).length > 0;

    firstInput?.setCustomValidity(hasSelection ? "" : message);

    if (!hasSelection) {
      firstInput?.reportValidity();
      return;
    }
  }

  const templateParams = {
    to_email: "info@techcloudventure.com",
    first_name: data.get("first-name"),
    last_name: data.get("last-name"),
    email: data.get("email"),
    phone: data.get("phone"),
    business: data.get("business"),
    address: data.get("address"),
    platform: data.getAll("platform").join(", "),
    country: data.getAll("country").join(", "),
    website: data.get("website") || "N/A",
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    alert("Thank you! Your request has been submitted successfully.");
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Something went wrong. Please try again.");
  }
}

export default function BookCall() {
  return (
    <section id="book-call" className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 font-sans text-[#02276b] sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
        <div className="lg:pt-8">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#007ea5]/15 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#005593] shadow-sm">
            <CalendarDays size={16} />
            Book a free call
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#02276b] sm:text-5xl xl:text-6xl">
            Your next chapter starts with a <span className="text-[#007ea5]">conversation.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#526078] sm:text-lg">
            Ready to build your Amazon wholesale business? Talk to our experts and get clear, practical guidance for your next step.
          </p>
          <div className="mt-10 grid gap-4">
            {contacts.map(({ label, value, href, icon: Icon }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag key={label} href={href} className="group flex items-center gap-4 rounded-2xl border border-[#e0eaf3] bg-white p-4 shadow-sm transition-all hover:shadow-xl sm:p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#005593]">
                    <Icon size={22} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium text-[#526078]">{label}</span>
                    <span className="text-sm font-bold text-[#172c49] sm:text-base">{value}</span>
                  </span>
                </Tag>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[30px] border border-[#dbe7f1] border-t-4 border-t-[#0099c1] bg-white p-5 shadow-2xl sm:p-8 lg:p-9">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="consultation-first-name" label="First name" type="text" placeholder="First name" />
                  <Field id="consultation-last-name" label="Last name" type="text" placeholder="Last name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="consultation-email" label="Email address" type="email" placeholder="you@company.com" />
                  <Field id="consultation-phone" label="Phone number" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <Field id="consultation-business" label="Business / store name" type="text" placeholder="Your business name" />
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="consultation-address" className="text-sm font-semibold text-[#263b58]">
                    Business address <span aria-hidden="true">*</span>
                  </label>
                  <textarea id="consultation-address" name="address" required rows={2} placeholder="Street address, city, state, postal code" className="min-h-24 w-full rounded-xl border border-[#ccd9e6] bg-white px-3.5 py-3 text-base text-[#172c49] outline-none" />
                </div>

                <fieldset className="border-0 p-0">
                  <legend className="mb-2.5 text-sm font-semibold text-[#263b58]">E-commerce platform *</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {["Amazon", "Walmart", "eBay"].map((platform) => (
                      <label key={platform} className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-4 py-2.5 text-sm">
                        <input className="size-4" type="checkbox" name="platform" value={platform} />
                        <span>{platform}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="border-0 p-0">
                  <legend className="mb-2.5 text-sm font-semibold text-[#263b58]">Operating marketplace country *</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {["USA", "UK"].map((country) => (
                      <label key={country} className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-[#ccd9e6] bg-white px-4 py-2.5 text-sm">
                        <input className="size-4" type="checkbox" name="country" value={country} />
                        <span>{country}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field id="consultation-website" label="Website address" optional type="url" placeholder="https://yourwebsite.com" />
              </div>

              <button type="submit" className="group mt-8 flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#02276b] px-5 py-4 text-base font-bold text-white transition-all hover:bg-[#005593]">
                <span>Submit request</span>
                <ArrowUpRight size={19} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}