import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ExperienceHero() {
  return (
    <Section variant="major">
      <Container size="wide">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-8 leading-tight">
            Experience
          </h1>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed">
            A career spanning visual design, frontend development, UX/UI design and product experience.
          </p>
        </div>
      </Container>
    </Section>
  );
}
