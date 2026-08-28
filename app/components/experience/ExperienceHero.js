import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ExperienceHero() {
  return (
    <Section variant="major">
      <Container size="wide">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            Experience
          </h1>
          <div className="w-14 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            A career spanning visual design, frontend development, UX/UI design and product experience.
          </p>
        </div>
      </Container>
    </Section>
  );
}
