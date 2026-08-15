import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function CurrentDirection() {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
            What I am building toward
          </h2>

          <div className="mb-8">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
              I am continuing to strengthen the connection between UX/UI design and frontend development by creating and developing real products myself.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              The goal is not simply to design interfaces or write code independently, but to understand the complete journey from product idea to usable digital experience.
            </p>
          </div>

          {/* UX + UI + Code visualization */}
          <div className="bg-surface-secondary rounded-lg p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  Strategy & Experience
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-text-primary">
                  UX
                </p>
              </div>

              <div className="text-2xl sm:text-3xl font-semibold text-text-secondary">
                +
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  Visual & Interface
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-text-primary">
                  UI
                </p>
              </div>

              <div className="text-2xl sm:text-3xl font-semibold text-text-secondary">
                +
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  Implementation
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-text-primary">
                  Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
