import CallToActionSection from '@/components/authorized-reseller-setup/CallToActionSection'
import HowThisServiceWorksSection from '@/components/authorized-reseller-setup/HowThisServiceWorksSection'
import ImportantNotesSection from '@/components/authorized-reseller-setup/ImportantNotesSection'
import ResellerPackagesSection from '@/components/authorized-reseller-setup/ResellerPackagesSection'
import ResellerStoreSetupSection from '@/components/authorized-reseller-setup/ResellerStoreSetupSection'
import WhatsIncludedSection from '@/components/authorized-reseller-setup/WhatsIncludedSection'
import Hero from '@/components/services/Hero'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero/>
        <ResellerStoreSetupSection/>
        <HowThisServiceWorksSection/>
        <WhatsIncludedSection/>
        <ResellerPackagesSection/>
        <ImportantNotesSection/>
        <CallToActionSection/>
    </div>
  )
}
