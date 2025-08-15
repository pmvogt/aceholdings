import { WireframeGlobeHero } from '@/components/wireframe-globe-hero';
import { BusinessesSection } from '@/components/businesses-section';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <WireframeGlobeHero />
      <BusinessesSection />
      <InfrastructureSection />
      <ContactSection />
      <Footer />
    </>
  );
}
