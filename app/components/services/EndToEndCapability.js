import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function EndToEndCapability({ capability }) {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
            {capability.title}
          </h2>

          <div className="border border-border rounded-lg p-8 bg-surface-secondary mb-6">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
              {capability.subtitle}
            </p>
            <p className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              {capability.flow}
            </p>
            <p className="text-text-secondary leading-relaxed text-sm">
              {capability.description}
            </p>
          </div>

          <p className="text-text-secondary leading-relaxed text-sm">
            {capability.note}
          </p>
        </div>
      </Container>
    </Section>
  );
}
