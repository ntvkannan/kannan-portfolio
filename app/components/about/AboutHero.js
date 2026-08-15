import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function AboutHero() {
  return (
    <Section variant="major">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary mb-6 leading-tight">
            Designing across experience, interface and technology.
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            My career has evolved across visual design, web design, frontend development and UX/UI.
          </p>
        </div>
      </Container>
    </Section>
  );
}
