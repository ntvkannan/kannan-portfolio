import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function CurrentDirection() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-12">
            What I am building toward
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-text-body leading-relaxed">
              I am continuing to strengthen the connection between UX/UI design and frontend development by creating and developing real products myself.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              The goal is not simply to design interfaces or write code independently, but to understand the complete journey from product idea to usable digital experience.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
