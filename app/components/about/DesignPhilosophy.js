import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the people, business context and problem.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Organize information, workflows and interactions.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create clear and consistent experiences.",
  },
  {
    number: "04",
    title: "Build",
    description: "Translate designs into practical interfaces.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Test, learn and improve.",
  },
];

export default function DesignPhilosophy() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-12">
            How I approach design
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index}>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-4">
                  Step {step.number}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
