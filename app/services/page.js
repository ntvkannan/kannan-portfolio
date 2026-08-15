import ServicesHero from "@/app/components/services/ServicesHero";
import ServiceGrid from "@/app/components/services/ServiceGrid";
import ProjectFlowSection from "@/app/components/services/ProjectFlowSection";
import EndToEndCapability from "@/app/components/services/EndToEndCapability";
import ServicesContactCTA from "@/app/components/services/ServicesContactCTA";
import { serviceCategories, projectFlow, endToEndCapability } from "@/app/data/services";

export const metadata = {
  title: "UX/UI & Design Services — Kannan Thangavel",
  description: "UX/UI design, visual design, and frontend development services. I help bring digital products to life from concept through deployment.",
  openGraph: {
    title: "UX/UI & Design Services — Kannan Thangavel",
    description: "UX/UI design, visual design, and frontend development services. I help bring digital products to life from concept through deployment.",
    url: "https://kannanthangavel.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGrid categories={serviceCategories} />
      <ProjectFlowSection projectFlow={projectFlow} />
      <EndToEndCapability capability={endToEndCapability} />
      <ServicesContactCTA />
    </>
  );
}
