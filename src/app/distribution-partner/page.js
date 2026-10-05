import BrandNetwork from '@/components/distribution-partner/BrandNetwork';
import DistributionCTA from '@/components/distribution-partner/DistributionCTA';
import DistributionModel from '@/components/distribution-partner/DistributionModel';
import Hero from '@/components/distribution-partner/Hero';
import HowWeAddValue from '@/components/distribution-partner/HowWeAddValue';
import Marketplace from '@/components/distribution-partner/Marketplace';
import OurDistributionPartner from '@/components/distribution-partner/OurDistributionPartner';
import TrustedByBrands from '@/components/distribution-partner/TrustedByBrands';

export default function Page() {
  return (
    <main>
      <Hero />
      <OurDistributionPartner />
      <DistributionModel/>
      <Marketplace/>
      <BrandNetwork/>
      <TrustedByBrands/>
      <HowWeAddValue/>
      <DistributionCTA/>
    </main>
  );
}
