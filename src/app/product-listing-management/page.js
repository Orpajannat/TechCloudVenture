import ControlCtaSection from '@/components/product-listing-management/ControlCtaSection'
import CustomPricingSection from '@/components/product-listing-management/CustomPricingSection'
import FaqSection from '@/components/product-listing-management/FaqSection'
import ListingIntroSection from '@/components/product-listing-management/ListingIntroSection'
import ListingOptimizationSection from '@/components/product-listing-management/ListingOptimizationSection'
import PricingPackagesSection from '@/components/product-listing-management/PricingPackagesSection'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <ListingIntroSection/>
        <ListingOptimizationSection/>
        <PricingPackagesSection/>
        <CustomPricingSection/>
        <FaqSection/>
        <ControlCtaSection/>
    </div>
  )
}
