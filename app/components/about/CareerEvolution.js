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
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-12">
            Career Evolution
          </h2>

          {/* Vertical Timeline - Consistent for all screens */}
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5"></div>
                    {index < stages.length - 1 && (
                      <div className="w-0.5 h-20 bg-border mt-3"></div>
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-base sm:text-lg font-semibold text-text-primary leading-snug">{stage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
