import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto max-w-7xl pt-20">
        <div className="flex flex-row items-center gap-2 shadow-xl text-center w-fit rounded-full px-3 py-1 border border-[#00022D]/10 bg-white hover:-translate-y-1 transition-transform duration-300">
            <div className="rounded-full bg-[#00022D] w-2 h-2 shadow-[0_0_8px_2px_#4D8AF1]"></div>
            <p className="text-black/80">About Tech Cloud Global Venture</p>
        </div>
        <div className="flex flex-col items-start gap-8 pt-8 lg:flex-row lg:gap-12">
            <div className="flex min-w-0 flex-col items-start gap-5">
                <h1 className="text-3xl font-bold text-[#00022D]">Powering Seamless Growth from Global Sourcing to Amazon Fulfillment</h1>
                <p className="text-[#00022D]/80 text-lg">
                Founded to bridge the gap between global sourcing and Amazon USA fulfillment, Tech Cloud Global Venture was built with one clear mission: helping brands and sellers scale efficiently, compliantly, and profitably in the U.S. Amazon marketplace. In 2024, recognizing the need for a fully dedicated and compliance-first Amazon USA wholesale solution, we launched Tech Cloud Global Venture as a specialized standalone entity focused exclusively on Amazon USA wholesale operations. Today, we proudly manage 100+ Amazon USA wholesale stores, delivering end-to-end support that includes brand approvals, authorized wholesale sourcing, product research, listing management, ungating assistance, FBA shipment creation, and Amazon PPC optimization—all executed with a strict focus on policy compliance and long-term growth.
                </p>
            </div>
            <div className="w-full lg:w-100 lg:shrink-0">
                <Image
                    src="/images/about-global-commerce.png"
                    alt="Connected globe above a fulfillment warehouse with a container ship, aircraft, and delivery truck"
                    width={1284}
                    height={1284}
                    sizes="(min-width: 1024px) 640px, (min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full rounded-3xl shadow-xl shadow-[#00022D]/15 hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    </div>
  )
}
