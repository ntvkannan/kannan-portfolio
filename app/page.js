import HeroSection from "@/app/components/home/HeroSection";
import AudiencePaths from "@/app/components/home/AudiencePaths";
import CredibilityGrid from "@/app/components/home/CredibilityGrid";
import SelectedWork from "@/app/components/home/SelectedWork";
import ClientWork from "@/app/components/home/ClientWork";
import CurrentlyBuilding from "@/app/components/home/CurrentlyBuilding";
import CapabilitiesGrid from "@/app/components/home/CapabilitiesGrid";
import ExperienceSnapshot from "@/app/components/home/ExperienceSnapshot";
import ServicesPreview from "@/app/components/home/ServicesPreview";
import AboutSnapshot from "@/app/components/home/AboutSnapshot";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "Kannan Thangavel — UX/UI Designer & Frontend Developer",
  description: "Senior UX/UI Designer and Frontend Developer. Explore my portfolio of professional UX/UI projects, client design work, and design-to-code capabilities.",
  openGraph: {
    title: "Kannan Thangavel — UX/UI Designer & Frontend Developer",
    description: "Senior UX/UI Designer and Frontend Developer. Explore my portfolio of professional UX/UI projects, client design work, and design-to-code capabilities.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AudiencePaths />
      <CredibilityGrid />
      <SelectedWork />
      <ClientWork />
      <CurrentlyBuilding />
      <CapabilitiesGrid />
      <ExperienceSnapshot />
      <ServicesPreview />
      <AboutSnapshot />
      <ContactCTA />
    </>
  );
}
