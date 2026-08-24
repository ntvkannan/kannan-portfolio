import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ContactHero() {
  return (
    <Section variant="major">
      <Container size="wide">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-8 leading-tight">
            Let's work together.
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            Whether you're looking for a UX/UI designer, need help with a brand or digital product, or want to discuss a website or app, I'd be happy to hear about your project.
          </p>
        </div>
      </Container>
    </Section>
  );
}
