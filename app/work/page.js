import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import WorkHero from "@/app/components/work/WorkHero";
import WorkContent from "@/app/components/work/WorkContent";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "Selected Work — Kannan Thangavel",
  description: "Explore my professional UX/UI projects, client design work, and design-to-code portfolio.",
  openGraph: {
    title: "Selected Work — Kannan Thangavel",
    description: "Explore my professional UX/UI projects, client design work, and design-to-code portfolio.",
    url: "/work",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkContent />
      <ContactCTA />
    </>
  );
}
