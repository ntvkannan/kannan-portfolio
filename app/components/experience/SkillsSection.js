import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Tag from "@/app/components/foundation/Tag";

export default function SkillsSection({ skills }) {
  return (
    <Section variant="normal" className="-mt-4 md:-mt-6 lg:-mt-8">
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            Skills & Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {skills.map((group, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-6">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((skill, skillIndex) => (
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
