import BrandServicesSection from '@/components/amazon-services-for-brands/BrandServicesSection'
import ComplianceSection from '@/components/amazon-services-for-brands/ComplianceSection'
import CtaSection from '@/components/amazon-services-for-brands/CtaSection'
import PhilosophySection from '@/components/amazon-services-for-brands/PhilosophySection'
import ServicesSection from '@/components/amazon-services-for-brands/ServicesSection'
import WhoItsForSection from '@/components/amazon-services-for-brands/WhoItsForSection'
import WhyChooseSection from '@/components/amazon-services-for-brands/WhyChooseSection'
import WorkTogetherSection from '@/components/amazon-services-for-brands/WorkTogetherSection'
import Hero from '@/components/services/Hero'
import { Phone } from 'lucide-react'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <BrandServicesSection/>
        <WhoItsForSection/>
        <PhilosophySection/>
        <ServicesSection/>
        <WorkTogetherSection/>
        <WhyChooseSection/>
        <ComplianceSection/>
        <CtaSection/>
    </div>
  )
}
