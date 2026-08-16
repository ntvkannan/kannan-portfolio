import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function CredibilityGrid() {
  const items = [
    {
      stat: "15+ Years",
      description: "Frontend Development & UI Implementation"
    },
    {
      stat: "10+ Years",
      description: "UX/UI Design"
    },
    {
      stat: "Enterprise",
      description: "Digital Product Experience"
    },
    {
      stat: "Design Systems",
      description: "Reusable Product & UI Systems"
    }
  ];

  return (
    <Section variant="normal">
      <Container>
        <h2 className="sr-only">Professional qualifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl font-semibold text-accent mb-2">
                {item.stat}
              </p>
              <p className="text-sm sm:text-base text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
