import React from 'react'
import { SquareText, ChartNoAxesCombined, ShieldCheck, BriefcaseBusiness } from 'lucide-react';

export default function SecondNav() {
    const Items = [
        {number: "100+",
        label: "Amazon Wholesale Stores Managed Successfully",
        icon: SquareText
        },
        {number: "100%",
        label: "USA Market Focused Operations",
        icon: BriefcaseBusiness
        },
        {number: "100%",
        label: "Brand-Authorized & Invoice-Backed Selling",
        icon: ShieldCheck
        },
        {number: "100%",
        label: "Compliance-First Amazon Growth Strategy",
        icon: ChartNoAxesCombined
        },
    ]
  return (
    <div className ="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-4 px-4 pt-8 sm:grid-cols-2 sm:gap-5 sm:px-6 sm:pt-10 lg:px-8 xl:grid-cols-4">
        {Items.map((item) => {
            const Icon = item.icon;

            return (
                <div key={item.label} className="group/icon flex h-full min-w-0 items-start gap-3 rounded-xl border border-[#00022D]/10 bg-white p-4 shadow-xl transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:gap-4 sm:p-5 xl:gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#00022D] bg-[#00022D] transition-[transform,background-color,border-color] duration-300 group-hover/icon:border-[#4D8AF1] group-hover/icon:bg-[#4D8AF1] motion-safe:group-hover/icon:rotate-12 motion-reduce:transition-none sm:size-14 xl:size-12">
                        <Icon size={26} aria-hidden="true" className="text-white" />
                    </div>
                    <div className="flex flex-col min-w-0 items-start">
                        <h3 className="text-3xl leading-tight font-semibold text-[#00022D] sm:text-4xl">{item.number}</h3>
                        <p className="mt-2 text-base leading-relaxed wrap-break-word text-[#00022D]/60 sm:text-lg xl:text-base">{item.label}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
