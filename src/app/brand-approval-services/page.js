import ApprovalCtaSection from '@/components/brand-approval-services/ApprovalCtaSection'
import ApprovalSection from '@/components/brand-approval-services/ApprovalSection'
import CustomPackageSection from '@/components/brand-approval-services/CustomPackageSection'
import HowTheProcessWorksSection from '@/components/brand-approval-services/HowTheProcessWorksSection'
import PricingSection from '@/components/brand-approval-services/PricingSection'
import WhyApprovalMattersSection from '@/components/brand-approval-services/WhyApprovalMattersSection'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <ApprovalSection/>
        <WhyApprovalMattersSection/>
        <PricingSection/>
        <CustomPackageSection/>
        <HowTheProcessWorksSection/>
        <ApprovalCtaSection/>
    </div>
  )
}
