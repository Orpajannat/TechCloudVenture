import BrandServices from '@/components/services/BrandServices'
import BrandServicesSection from '@/components/services/BrandServicesSection'
import Hero from '@/components/services/Hero'
import RightService from '@/components/services/RightService'
import Services from '@/components/services/Services'
import Specialized from '@/components/services/Specialized'
import Wholesale from '@/components/services/Wholesale'
import Why from '@/components/services/Why'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <Specialized/>
        <Wholesale/>
        <Services/>
        <Why/>
        <BrandServices/>
        <BrandServicesSection/>
        <RightService/>
    </div>
  )
}

