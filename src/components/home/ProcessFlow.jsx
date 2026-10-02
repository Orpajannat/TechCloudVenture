'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BadgeCheck, ChartNoAxesCombined, MessagesSquare, Search, Store } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'We start with your goals, experience, and budget to map out a wholesale strategy that fits your business.',
    outcome: 'A clear plan for your next steps',
    icon: MessagesSquare,
  },
  {
    title: 'Brand Approval',
    description: 'We guide you through documentation and the approval process to help your business work with the right brands.',
    outcome: 'The foundation for trusted partnerships',
    icon: BadgeCheck,
  },
  {
    title: 'Product Research',
    description: 'We evaluate market demand, competition, and potential margins to identify products that align with your goals.',
    outcome: 'Product decisions backed by research',
    icon: Search,
  },
  {
    title: 'Store Setup',
    description: 'We help prepare your reseller account, product listings, and store operations for a confident launch.',
    outcome: 'A store prepared for everyday operations',
    icon: Store,
  },
  {
    title: 'Scaling & Optimization',
    description: 'We review performance and refine your product mix and operations to support sustainable business growth.',
    outcome: 'An ongoing focus on improvement',
    icon: ChartNoAxesCombined,
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(1);

  function handleKeyDown(event, index) {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % steps.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + steps.length) % steps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = steps.length - 1;
    else return;

    event.preventDefault();
    setActiveStep(next);
    event.currentTarget.closest('ol')?.querySelectorAll('button')[next]?.focus();
  }

  return (
    <section id="process-flow" aria-labelledby="process-flow-heading" className="bg-[#f5f8fc] py-[clamp(3.5rem,7vw,6rem)] font-sans text-[#02276b]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-[44rem] text-center xl:mb-12">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#005593]/15 bg-white px-4 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase"><span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#008eaf]" />Our process</p>
          <h2 id="process-flow-heading" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-semibold tracking-[-0.04em] text-balance">A clear path from <span className="text-[#007da4]">idea to growth.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-[#526078]">Five focused steps. One dedicated partner. See how we help you build and grow your wholesale business.</p>
        </header>

        <ol className="m-0 flex list-none flex-col gap-3.5 p-0 xl:flex-row xl:items-stretch xl:gap-4" aria-label="Our five-step wholesale process">
          {steps.map(({ title, description, outcome, icon: Icon }, index) => {
            const active = activeStep === index;
            return (
              <li key={title} className="group/step relative isolate min-w-0 overflow-hidden rounded-[1.25rem] border border-white/7 bg-[#0c203e] text-white shadow-[0_4px_12px_#02276b08] transition-[flex-grow,box-shadow,border-color,transform] duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:bg-linear-145 before:from-[#006684] before:via-[#0053b5] before:via-60% before:to-[#1642ba] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] data-[active=true]:border-[#0eb1db]/45 data-[active=true]:shadow-[0_16px_36px_#00559320] data-[active=true]:before:opacity-100 hover:border-[#55d7ef]/60 hover:shadow-[0_20px_40px_#02276b20] motion-safe:hover:-translate-y-1 motion-reduce:transition-none motion-reduce:before:transition-none xl:min-h-[30rem] xl:flex-1 xl:data-[active=true]:grow-[2.8]" data-active={active}>
                <button
                  type="button"
                  className="group/trigger relative flex min-h-24 w-full cursor-pointer items-center gap-4 border-0 bg-transparent p-5 text-left text-inherit focus-visible:rounded-[1.15rem] focus-visible:outline-3 focus-visible:outline-offset-[-5px] focus-visible:outline-[#a5edff] sm:p-6 xl:h-full xl:flex-col xl:items-start xl:gap-7 xl:px-6 xl:py-8 xl:group-data-[active=true]/step:h-auto xl:group-data-[active=true]/step:pb-5"
                  aria-expanded={active}
                  aria-controls={`process-step-panel-${index}`}
                  id={`process-step-trigger-${index}`}
                  onClick={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse' && !event.currentTarget.closest('ol')?.contains(document.activeElement)) {
                      setActiveStep(index);
                    }
                  }}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[0.85rem] border border-[#43ccea]/45 text-base font-semibold text-[#89e6fc] tabular-nums transition-[background-color,color,transform] duration-300 group-data-[active=true]/step:border-white group-data-[active=true]/step:bg-white group-data-[active=true]/step:text-[#005593] motion-safe:group-hover/trigger:-translate-y-0.5 motion-reduce:transition-none xl:size-13 xl:text-lg" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 text-base leading-[1.4] font-semibold tracking-tight wrap-break-word sm:text-lg xl:my-auto xl:self-center xl:text-xl xl:[writing-mode:vertical-rl] xl:group-data-[active=true]/step:self-start xl:group-data-[active=true]/step:text-2xl xl:group-data-[active=true]/step:[writing-mode:horizontal-tb]">{title}</span>
                  <span className="ml-auto flex shrink-0 text-[#89e6fc] group-data-[active=true]/step:text-white xl:ml-0 xl:self-center xl:group-data-[active=true]/step:hidden" aria-hidden="true">
                    {active ? <ArrowDown size={19} /> : <ArrowUpRight size={19} />}
                  </span>
                </button>
                <div
                  id={`process-step-panel-${index}`}
                  aria-labelledby={`process-step-trigger-${index}`}
                  className="relative px-6 pb-7 xl:pb-8"
                  hidden={!active}
                >
                  <Icon className="hidden text-[#b8f1ff] xl:mb-4 xl:block" size={30} strokeWidth={1.5} aria-hidden="true" />
                  <p className="m-0 max-w-[34rem] text-[15px] leading-[1.8] text-[#f1f8ff]">{description}</p>
                  <p className="mt-7 flex items-start gap-2.5 border-t border-white/20 pt-5 text-[13px] leading-relaxed font-medium text-white"><BadgeCheck size={19} aria-hidden="true" className="mt-0.5 shrink-0" /><span>{outcome}</span></p>
                </div>
                <span className="pointer-events-none absolute right-2 -bottom-8 -z-10 text-[10rem] leading-none font-bold text-white/2" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </li>
            );
          })}
        </ol>
        <p className="mt-7 flex items-center justify-center gap-2.5 text-center text-[13px] leading-7 text-[#526078]"><span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#008eaf]" /> A connected process, with your business at the center.</p>
      </div>
    </section>
  );
}
