import ExperienceHero from "@/app/components/experience/ExperienceHero";
import CareerTimeline from "@/app/components/experience/CareerTimeline";
import SkillsSection from "@/app/components/experience/SkillsSection";
import ResumeCTA from "@/app/components/experience/ResumeCTA";
import { careerTimeline, skills } from "@/app/data/experience";
import ContactCTA from "@/app/components/services/ServicesContactCTA";

export const metadata = {
  title: "Experience — Kannan Thangavel",
  description: "Professional career history spanning visual design, frontend development, UX/UI design and product experience with 15+ years in frontend development and 10+ years in UX/UI design.",
  openGraph: {
    title: "Experience — Kannan Thangavel",
    description: "Learn about my professional career progression and experience across design and development.",
    url: "/experience",
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <CareerTimeline timeline={careerTimeline} />
      <SkillsSection skills={skills} />
      <ResumeCTA />
      <ContactCTA />
    </>
  );
}
