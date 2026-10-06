import Hero from '@/components/services/Hero'
import ApprovalSection from '@/components/wholesale-product-research/ApprovalSection'
import CtaSection from '@/components/wholesale-product-research/CtaSection'
import HowItWorksSection from '@/components/wholesale-product-research/HowItWorksSection'
import ImportantNotesSection from '@/components/wholesale-product-research/ImportantNotesSection'
import OurTeamSection from '@/components/wholesale-product-research/OurTeamSection'
import PricingSection from '@/components/wholesale-product-research/PricingSection'
import WhoOurServicesAreForSection from '@/components/wholesale-product-research/WhoOurServicesAreForSection'
import WhyChooseOurResearchServiceSection from '@/components/wholesale-product-research/WhyChooseOurResearchServiceSection'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero/>
        <ApprovalSection/>
        <HowItWorksSection/>
        <OurTeamSection/>
        <WhoOurServicesAreForSection/>
        <PricingSection/>
        <ImportantNotesSection/>
        <WhyChooseOurResearchServiceSection/>
        <CtaSection/>
    </div>
  )
}
