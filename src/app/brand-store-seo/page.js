import BrandStoreIntroSection from '@/components/brand-store-seo/BrandStoreIntroSection'
import BrandStoreScopeHubSection from '@/components/brand-store-seo/BrandStoreScopeHubSection'
import ConnectedEcosystemSection from '@/components/brand-store-seo/ConnectedEcosystemSection'
import CTASection from '@/components/brand-store-seo/CTASection'
import FAQSection from '@/components/brand-store-seo/FAQSection'
import PricingSection from '@/components/brand-store-seo/PricingSection'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <BrandStoreIntroSection/>
        <BrandStoreScopeHubSection/>
        <ConnectedEcosystemSection/>
        <PricingSection/>
        <FAQSection/>
        <CTASection/>
    </div>
  )
}
