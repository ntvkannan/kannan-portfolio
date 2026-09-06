import AboutHero from "@/app/components/about/AboutHero";
import CareerEvolution from "@/app/components/about/CareerEvolution";
import DesignPhilosophy from "@/app/components/about/DesignPhilosophy";
import CurrentDirection from "@/app/components/about/CurrentDirection";
import Skills from "@/app/components/about/Skills";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "About — Kannan Thangavel",
  description: "Learn about my career spanning visual design, frontend development, UX/UI design and product experience.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Kannan Thangavel",
    description: "Learn about my career spanning visual design, frontend development, UX/UI design and product experience.",
    url: "/about",
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

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CareerEvolution />
      <DesignPhilosophy />
      <CurrentDirection />
      <Skills />
      <ContactCTA />
    </>
  );
}
