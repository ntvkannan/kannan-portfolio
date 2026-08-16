import Container from "@/app/components/layout/Container";
import AboutHero from "@/app/components/about/AboutHero";
import Introduction from "@/app/components/about/Introduction";
import CareerEvolution from "@/app/components/about/CareerEvolution";
import DesignPhilosophy from "@/app/components/about/DesignPhilosophy";
import CurrentDirection from "@/app/components/about/CurrentDirection";
import Skills from "@/app/components/about/Skills";
import ContactCTA from "@/app/components/home/ContactCTA";

export const metadata = {
  title: "About — Kannan Thangavel",
  description: "Learn about my career spanning visual design, frontend development, UX/UI design and product experience.",
  openGraph: {
    title: "About — Kannan Thangavel",
    description: "Learn about my career spanning visual design, frontend development, UX/UI design and product experience.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Introduction />
      <CareerEvolution />
      <DesignPhilosophy />
      <CurrentDirection />
      <Skills />
      <ContactCTA />
    </>
  );
}
