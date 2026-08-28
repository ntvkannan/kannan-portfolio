import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

const stages = [
  {
    title: "Visual Design",
    description: "Started with visual communication and digital graphics.",
  },
  {
    title: "Web Design",
    description: "Moved into web design and building digital experiences.",
  },
  {
    title: "Frontend Development",
    description: "Transitioned into frontend development and interactive interfaces.",
  },
  {
    title: "UX/UI Design",
    description: "Focused on user experience, interface design and usability.",
  },
  {
    title: "UX Leadership",
    description: "Leading UX initiatives and mentoring design teams.",
  },
  {
    title: "Product Design + Frontend Development",
    description: "Combining product thinking with design and development.",
  },
];

export default function CareerEvolution() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <SectionHeader className="mb-12">
          Career Evolution
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {stages.map((stage, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-accent text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-base sm:text-lg font-semibold text-text-primary leading-snug">
                  {stage.title}
                </p>
              </div>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
