import Hero from '@/components/services/Hero'
import CallToActionSection from '@/components/wholesale-services-for-sellers/CallToActionSection'
import ComplianceAndRiskTransparency from '@/components/wholesale-services-for-sellers/ComplianceAndRiskTransparency'
import ForWhom from '@/components/wholesale-services-for-sellers/ForWhom'
import Framework from '@/components/wholesale-services-for-sellers/Framework'
import HowOurWholesaleServicesWorkTogether from '@/components/wholesale-services-for-sellers/HowOurWholesaleServicesWorkTogether'
import WholesaleServicesIntro from '@/components/wholesale-services-for-sellers/WholesaleServicesIntro'
import WholesaleServicesWeOffer from '@/components/wholesale-services-for-sellers/WholesaleServicesWeOffer'
import WhyChooseTechCloudVenture from '@/components/wholesale-services-for-sellers/WhyChooseTechCloudVenture'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <WholesaleServicesIntro/>
        <ForWhom/>
        <Framework/>
        <WholesaleServicesWeOffer/>
        <HowOurWholesaleServicesWorkTogether/>
        <WhyChooseTechCloudVenture/>
        <ComplianceAndRiskTransparency/>
        <CallToActionSection/>
    </div>
  )
}
