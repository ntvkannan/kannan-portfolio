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

          {/* Desktop - Horizontal flow */}
          <div className="hidden lg:block">
            <div className="flex items-start gap-8">
              {projectFlow.map((item, index) => (
                <div key={index} className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm" aria-hidden="true">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      <span className="sr-only">Step {index + 1}:</span> {item.step}
                    </h3>
                  </div>
                  <p className="text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet - 2-column flow */}
          <div className="hidden md:grid lg:hidden">
            <div className="grid grid-cols-2 gap-8">
              {projectFlow.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm" aria-hidden="true">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      <span className="sr-only">Step {index + 1}:</span> {item.step}
                    </h3>
                  </div>
                  <p className="text-sm text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile - Vertical sequential flow */}
          <div className="md:hidden space-y-8">
            {projectFlow.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm" aria-hidden="true">
                    {index + 1}
                  </div>
                  {index < projectFlow.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-2" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    <span className="sr-only">Step {index + 1}:</span> {item.step}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
