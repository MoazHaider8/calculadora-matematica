import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { FeaturedCalculators } from '@/components/FeaturedCalculators';
import { AreasSection } from '@/components/AreasSection';
import { DirectorySection } from '@/components/DirectorySection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CtaBand } from '@/components/CtaBand';
import { AudienceSection } from '@/components/AudienceSection';

export default function Inicio() {
  return (
    <>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <TrustStrip />
        <AreasSection />
        <FeaturedCalculators />
        <HowItWorksSection />
        <DirectorySection />
        <CtaBand />
        <AudienceSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
