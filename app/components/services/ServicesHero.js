import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ServicesHero() {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary mb-6 leading-tight">
            What I can help you with
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            I combine UX/UI design, visual design, and frontend development to create digital products that are thoughtful, intentional, and built to work.
          </p>
        </div>
      </Container>
    </Section>
  );
}
