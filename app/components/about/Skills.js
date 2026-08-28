import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

const skillGroups = [
  {
    category: "UX / Product",
    skills: [
      "UX Research",
      "UX Strategy",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability",
      "Product Thinking",
    ],
  },
  {
    category: "UI / Visual",
    skills: [
      "UI Design",
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
      "Branding",
      "Marketing Design",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];

export default function Skills() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <SectionHeader className="mb-12">
          Skills & Capabilities
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-20">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-6">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-base text-text-body">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
