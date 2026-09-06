import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import WorkHero from "@/app/components/work/WorkHero";
import WorkContent from "@/app/components/work/WorkContent";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "Selected Work — Kannan Thangavel",
  description: "Explore my professional UX/UI projects, client design work, and design-to-code portfolio.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work — Kannan Thangavel",
    description: "Explore my professional UX/UI projects, client design work, and design-to-code portfolio.",
    url: "/work",
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

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkContent />
      <ContactCTA />
    </>
  );
}
