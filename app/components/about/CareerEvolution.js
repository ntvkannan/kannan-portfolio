import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

const stages = [
  "Visual Design",
  "Web Design",
  "Frontend Development",
  "UX/UI Design",
  "UX Leadership",
  "Product Design + Frontend Development",
];

export default function CareerEvolution() {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            Career Evolution
          </h2>

          {/* Desktop timeline */}
          <div className="hidden sm:block">
            <div className="space-y-4">
              {stages.map((stage, index) => (
                <div key={index}>
                  <p className="text-lg text-text-primary font-medium">{stage}</p>
                  {index < stages.length - 1 && (
                    <div className="flex items-center justify-center py-3">
                      <div className="text-text-secondary text-2xl">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="sm:hidden">
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <div key={index}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                      {index < stages.length - 1 && (
                        <div className="w-0.5 h-12 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-base text-text-primary font-medium">{stage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
