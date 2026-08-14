import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

export default function WorkHero() {
  return (
    <Section variant="normal">
      <Container>
        <SectionHeader>
          Selected Work
        </SectionHeader>
        <p className="text-text-secondary max-w-2xl">
          A collection of professional UX/UI projects, client design work and products I am building.
        </p>
      </Container>
    </Section>
  );
}
