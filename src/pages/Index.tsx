import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ComplianceSection from "@/components/ComplianceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ComplianceSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
