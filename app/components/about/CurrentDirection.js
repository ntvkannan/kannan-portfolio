import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

export default function CurrentDirection() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 lg:items-center">
            <div className="lg:col-span-2 mb-6 lg:mb-0">
              <SectionHeader>
                What I am building toward
              </SectionHeader>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                I am continuing to strengthen the connection between UX/UI design and frontend development by creating and developing real products myself.
              </p>
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                The goal is not simply to design interfaces or write code independently, but to understand the complete journey from product idea to usable digital experience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
