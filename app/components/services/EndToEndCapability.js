import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function EndToEndCapability({ capability }) {
  return (
    <Section variant="normal" className="-mt-6 md:-mt-8 lg:-mt-12">
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-8">
            {capability.title}
          </h2>

          <div className="border border-border rounded-lg p-8 md:p-10 bg-surface-secondary mb-8">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
              {capability.subtitle}
            </p>
            <p className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              {capability.flow}
            </p>
            <p className="text-text-body leading-relaxed text-sm">
              {capability.description}
            </p>
          </div>

          <p className="text-base text-text-body leading-relaxed">
            {capability.note}
          </p>
        </div>
      </Container>
    </Section>
  );
}
