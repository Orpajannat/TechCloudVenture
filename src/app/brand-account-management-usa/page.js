import AccountManagementIntroSection from '@/components/brand-account-management-usa/AccountManagementIntroSection'
import ControlCtaSection from '@/components/brand-account-management-usa/ControlCtaSection'
import CustomPricingSection from '@/components/brand-account-management-usa/CustomPricingSection'
import FaqSection from '@/components/brand-account-management-usa/FaqSection'
import ScopeHubSection from '@/components/brand-account-management-usa/ScopeHubSection'
import WhoThisIsForShowcase from '@/components/brand-account-management-usa/WhoThisIsForShowcase'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <AccountManagementIntroSection/>
        <ScopeHubSection/>
        <WhoThisIsForShowcase/>
        <CustomPricingSection/>
        <FaqSection/>
        <ControlCtaSection/>
    </div>
  )
}
