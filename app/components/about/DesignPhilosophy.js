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
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            How I approach design
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index}>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                  {step.number}
                </p>
                <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-sm text-text-secondary leading-relaxed">
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
