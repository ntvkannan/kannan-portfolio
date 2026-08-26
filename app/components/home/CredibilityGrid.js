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
    <Section variant="normal" className="!pt-16 lg:!pt-20">
      <Container>
        <h2 className="sr-only">Professional qualifications</h2>
        <div className="border-t border-border pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="md:px-8 md:border-l md:border-border md:first:border-l-0 md:first:pl-0"
              >
                <p className="text-xl sm:text-2xl font-semibold text-accent mb-1.5">
                  {item.stat}
                </p>
                <p className="text-sm text-text-body leading-snug">
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
