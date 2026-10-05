"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  MessagesSquare,
  Search,
  Store,
  Check,
} from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "We start with your goals, experience, and budget to map out a wholesale strategy that fits your business.",
    outcome: "A clear plan for your next steps",
    icon: MessagesSquare,
  },
  {
    title: "Brand Approval",
    description:
      "We guide you through documentation and the approval process to help your business work with the right brands.",
    outcome: "The foundation for trusted partnerships",
    icon: BadgeCheck,
  },
  {
    title: "Product Research",
    description:
      "We evaluate market demand, competition, and potential margins to identify products that align with your goals.",
    outcome: "Product decisions backed by research",
    icon: Search,
  },
  {
    title: "Store Setup",
    description:
      "We help prepare your reseller account, product listings, and store operations for a confident launch.",
    outcome: "A store prepared for everyday operations",
    icon: Store,
  },
  {
    title: "Scaling & Optimization",
    description:
      "We review performance and refine your product mix and operations to support sustainable business growth.",
    outcome: "An ongoing focus on improvement",
    icon: ChartNoAxesCombined,
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process-flow"
      className="relative overflow-hidden bg-[#f7fbff] py-24 text-[#02276b] sm:py-28"
    >
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-[#60a5fa]/15 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-80 w-80 rounded-full bg-[#22d3ee]/15 blur-3xl animate-pulse" />

      {/* Floating circles */}
      <div className="pointer-events-none absolute left-[8%] top-[25%] hidden h-5 w-5 rounded-full bg-[#38bdf8]/30 sm:block animate-bounce" />

      <div className="pointer-events-none absolute right-[12%] top-[18%] hidden h-3 w-3 rounded-full bg-[#2563eb]/40 sm:block animate-ping" />

      <div className="pointer-events-none absolute bottom-[20%] left-[18%] hidden h-4 w-4 rounded-full bg-[#06b6d4]/30 lg:block animate-pulse" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#2563eb]/10 bg-white px-5 py-2.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#02276b] sm:text-5xl lg:text-6xl">
            A clear path from{" "}
            <span className="text-[#087fbe]">idea to growth.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#526078] sm:text-lg">
            Five focused steps. One dedicated partner. See how we help you
            build and grow your wholesale business.
          </p>
        </div>

        {/* ================= DESKTOP PROCESS ================= */}

        <div className="relative mt-20 hidden lg:block">

          {/* Moving horizontal line */}
          <div className="absolute left-[10%] right-[10%] top-[70px] h-1 rounded-full bg-[#dbeafe]" />

          <div className="absolute left-[10%] top-[70px] h-1 w-1/3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] animate-pulse" />

          {/* Moving dot */}
          <div className="absolute left-[10%] top-[62px] h-5 w-5 rounded-full border-4 border-white bg-[#2563eb] shadow-lg shadow-blue-300 animate-pulse" />

          {/* Steps */}
          <div className="grid grid-cols-5 gap-5">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const active = activeStep === index;

              return (
                <div
                  key={step.title}
                  className="relative pt-0"
                  onMouseEnter={() => setActiveStep(index)}
                >

                  {/* ================= NUMBER NODE ================= */}

                  <div className="relative z-10 flex justify-center">

                    {/* Orbit ring */}
                    <div
                      className={`absolute h-[82px] w-[82px] rounded-full border-2 border-dashed transition-all duration-500 ${
                        active
                          ? "scale-110 border-[#38bdf8] opacity-100 animate-spin"
                          : "scale-90 border-[#bfdbfe] opacity-0"
                      }`}
                    />

                    {/* Pulse ring */}
                    <div
                      className={`absolute h-[72px] w-[72px] rounded-full transition-all duration-500 ${
                        active
                          ? "bg-[#2563eb]/10 animate-ping"
                          : "bg-transparent"
                      }`}
                    />

                    {/* Number */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`relative flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full border-4 font-black shadow-xl transition-all duration-500 ${
                        active
                          ? "scale-110 border-white bg-[#2563eb] text-white shadow-[#2563eb]/30"
                          : "border-[#dbeafe] bg-white text-[#2563eb] hover:scale-110 hover:border-[#60a5fa]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </button>

                  </div>

                  {/* ================= CARD ================= */}

                  <div
                    className={`mt-10 min-h-[330px] rounded-[28px] border bg-white p-7 shadow-lg transition-all duration-500 ${
                      active
                        ? "-translate-y-4 border-[#60a5fa] shadow-2xl shadow-[#2563eb]/15"
                        : "border-[#e2e8f0] hover:-translate-y-2 hover:shadow-xl"
                    }`}
                  >

                    {/* Icon */}
                    <div
                      className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                        active
                          ? "rotate-[-6deg] scale-110 bg-[#2563eb] text-white shadow-lg shadow-blue-200"
                          : "bg-[#eff6ff] text-[#2563eb]"
                      }`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#02276b]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      {step.description}
                    </p>

                    {/* Outcome */}
                    <div
                      className={`mt-7 border-t pt-5 transition-all duration-500 ${
                        active
                          ? "border-[#bfdbfe] opacity-100"
                          : "border-[#e2e8f0]"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[#0ea5e9]"
                        />

                        <span className="text-sm font-semibold leading-6 text-[#334155]">
                          {step.outcome}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ================= MOBILE PROCESS ================= */}

        <div className="relative mt-16 lg:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-10 left-[25px] top-10 w-1 rounded-full bg-[#dbeafe]" />

          {/* Animated line */}
          <div className="absolute left-[25px] top-10 h-32 w-1 rounded-full bg-gradient-to-b from-[#2563eb] to-[#22d3ee] animate-pulse" />

          <div className="space-y-5">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const active = activeStep === index;

              return (
                <div
                  key={step.title}
                  className="relative flex gap-5"
                  onClick={() => setActiveStep(index)}
                >

                  {/* Number */}
                  <div className="relative z-10 shrink-0">

                    <button
                      type="button"
                      className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border-4 font-bold shadow-md transition-all duration-500 ${
                        active
                          ? "scale-110 border-white bg-[#2563eb] text-white shadow-blue-200"
                          : "border-[#dbeafe] bg-white text-[#2563eb]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </button>

                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-3xl border bg-white p-6 shadow-md transition-all duration-500 ${
                      active
                        ? "-translate-y-2 border-[#60a5fa] shadow-xl shadow-blue-100"
                        : "border-[#e2e8f0]"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                          active
                            ? "rotate-[-6deg] bg-[#2563eb] text-white"
                            : "bg-[#eff6ff] text-[#2563eb]"
                        }`}
                      >
                        <Icon size={23} />
                      </div>

                      <h3 className="font-bold text-[#02276b]">
                        {step.title}
                      </h3>

                    </div>

                    {active && (
                      <div className="mt-5 animate-pulse">

                        <p className="text-sm leading-7 text-[#64748b]">
                          {step.description}
                        </p>

                        <div className="mt-5 border-t border-[#e2e8f0] pt-4">
                          <div className="flex items-start gap-2">
                            <BadgeCheck
                              size={18}
                              className="mt-0.5 shrink-0 text-[#0ea5e9]"
                            />

                            <span className="text-sm font-semibold text-[#334155]">
                              {step.outcome}
                            </span>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-14 flex justify-center">

          <div className="group flex items-center gap-3 rounded-full border border-[#dbeafe] bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb]">
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

            <span className="text-sm font-medium text-[#526078]">
              A connected process, with your business at the center.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}