import Hero from '@/components/services/Hero'
import ApprovalCtaSection from '@/components/wholesale-service-management/ApprovalCtaSection'
import StoreManagementSection from '@/components/wholesale-service-management/StoreManagementSection'
import WholesaleStoreManagementPackageSection from '@/components/wholesale-service-management/WholesaleStoreManagementPackageSection'
import WhyApprovalMattersSection from '@/components/wholesale-service-management/WhyApprovalMattersSection'
import WhyChooseWholesaleSection from '@/components/wholesale-service-management/WhyChooseWholesaleSection'
import React from 'react'

export default function page () {
  return (
    <div>
        <Hero/>
        <StoreManagementSection/>
        <WhyApprovalMattersSection/>
        <WholesaleStoreManagementPackageSection/>
        <WhyChooseWholesaleSection/>
        <ApprovalCtaSection/>
    </div>
  )
}
