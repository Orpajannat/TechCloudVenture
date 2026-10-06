import BenefitsOfBrandProtectionSection from '@/components/brand-protection-control/BenefitsOfBrandProtectionSection'
import BrandProtectionSection from '@/components/brand-protection-control/BrandProtectionSection'
import BrandProtectionServicesGrid from '@/components/brand-protection-control/BrandProtectionServicesGrid'
import CustomPricingSection from '@/components/brand-protection-control/CustomPricingSection'
import FaqsBrandProtectionSection from '@/components/brand-protection-control/FaqsBrandProtectionSection'
import FinalCtaBannerSection from '@/components/brand-protection-control/FinalCtaBannerSection'
import PricingPlansSection from '@/components/brand-protection-control/PricingPlansSection'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <BrandProtectionSection/>
        <BrandProtectionServicesGrid/>
        <BenefitsOfBrandProtectionSection/>
        <PricingPlansSection/>
        <CustomPricingSection/>
        <FaqsBrandProtectionSection/>
        <FinalCtaBannerSection/>
    </div>
  )
}
