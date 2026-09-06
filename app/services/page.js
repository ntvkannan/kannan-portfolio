import ServicesHero from "@/app/components/services/ServicesHero";
import ServiceGrid from "@/app/components/services/ServiceGrid";
import ProjectFlowSection from "@/app/components/services/ProjectFlowSection";
import EndToEndCapability from "@/app/components/services/EndToEndCapability";
import MonthlyEngagement from "@/app/components/services/MonthlyEngagement";
import ServicesContactCTA from "@/app/components/services/ServicesContactCTA";
import { serviceCategories, projectFlow, endToEndCapability } from "@/app/data/services";

export const metadata = {
  title: "UX/UI & Design Services — Kannan Thangavel",
  description: "UX/UI design, visual design, and frontend development services. I help bring digital products to life from concept through deployment.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "UX/UI & Design Services — Kannan Thangavel",
    description: "UX/UI design, visual design, and frontend development services. I help bring digital products to life from concept through deployment.",
    url: "/services",
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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGrid categories={serviceCategories} />
      <ProjectFlowSection projectFlow={projectFlow} />
      <EndToEndCapability capability={endToEndCapability} />
      <MonthlyEngagement />
      <ServicesContactCTA />
    </>
  );
}
