import { HeroSection } from "@/components/hero-section";
import { MissionSection } from "@/components/mission-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ClientsSection } from "@/components/clients-section";
import { DiscretionSection } from "@/components/discretion-section";
import { IndustriesSection } from "@/components/industries-section";
import { PresenceSection } from "@/components/presence-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <DiscretionSection />
      <IndustriesSection />
      <PresenceSection />
      <Footer />
    </main>
  );
}
