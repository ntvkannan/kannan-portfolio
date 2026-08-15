import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Tag from "@/app/components/foundation/Tag";

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
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            Skills & Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillGroups.map((group, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-6">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <p key={skillIndex} className="text-sm text-text-secondary">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
