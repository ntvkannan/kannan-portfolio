import HeroSection from "@/app/components/home/HeroSection";
import AudiencePaths from "@/app/components/home/AudiencePaths";
import CredibilityGrid from "@/app/components/home/CredibilityGrid";
import SelectedWork from "@/app/components/home/SelectedWork";
import ClientWork from "@/app/components/home/ClientWork";
import ExperienceSnapshot from "@/app/components/home/ExperienceSnapshot";
import ServicesPreview from "@/app/components/home/ServicesPreview";
import OngoingSupport from "@/app/components/home/OngoingSupport";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "Kannan Thangavel — UX/UI Designer & Frontend Developer",
  description: "Senior UX/UI Designer and Frontend Developer. Explore my portfolio of professional UX/UI projects, client design work, and design-to-code capabilities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kannan Thangavel — UX/UI Designer & Frontend Developer",
    description: "Senior UX/UI Designer and Frontend Developer. Explore my portfolio of professional UX/UI projects, client design work, and design-to-code capabilities.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/Kannan-hero.png",
        width: 596,
        height: 912,
        alt: "Kannan Thangavel — Senior UX/UI Designer & Frontend Developer",
      },
    ],
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
      <ExperienceSnapshot />
      <ServicesPreview />
      <OngoingSupport />
      <ContactCTA />
    </>
  );
}
