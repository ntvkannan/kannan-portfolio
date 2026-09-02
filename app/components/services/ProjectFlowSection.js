import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

export default function ProjectFlowSection({ projectFlow }) {
  return (
    <Section variant="normal" className="-mt-6 md:-mt-8 lg:-mt-12">
      <Container size="wide">
        <div className="max-w-4xl">
          <SectionHeader className="mb-14">
            How I work
          </SectionHeader>

          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:items-start lg:gap-8">
            {projectFlow.map((item, index) => (
              <div key={index} className="flow-step-grid lg:flex-1">
                <div className="[grid-area:icon] self-center w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm" aria-hidden="true">
                  {index + 1}
                </div>
                {index < projectFlow.length - 1 && (
                  <div className="[grid-area:line] self-start justify-self-center w-0.5 h-16 bg-border md:hidden" aria-hidden="true" />
                )}
                <h3 className="[grid-area:heading] self-center text-base md:text-lg lg:text-xl font-semibold text-text-primary">
                  <span className="sr-only">Step {index + 1}:</span> {item.step}
                </h3>
                <p className="[grid-area:desc] self-start text-sm lg:text-base text-text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
