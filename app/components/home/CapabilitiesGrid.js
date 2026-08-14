import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Tag from "@/app/components/foundation/Tag";

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      title: "UX & Product",
      items: ["Research", "Flows", "Wireframes", "Prototypes", "Product Design"]
    },
    {
      title: "UI & Visual",
      items: ["UI Design", "Design Systems", "Visual Design", "Responsive Design"]
    },
    {
      title: "Brand & Marketing",
      items: ["Brand Identity", "Brand Guidelines", "Marketing Design", "Print & Digital"]
    },
    {
      title: "Frontend",
      items: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Design to Code"]
    }
  ];

  return (
    <Section variant="major">
      <Container>
        <SectionHeader className="mb-12">
          What I do
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {capability.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {capability.items.map((item, itemIndex) => (
                  <Tag key={itemIndex}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <NextLink
            href="/services"
            className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            Explore Services
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
