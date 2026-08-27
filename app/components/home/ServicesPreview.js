import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Tag from "@/app/components/foundation/Tag";

export default function ServicesPreview() {
  const services = [
    {
      title: "UX & Product Design",
      description: "Designing useful, structured and intuitive experiences around real user and business needs.",
      items: ["UX Research", "Product Strategy", "Information Architecture", "User Flows", "Wireframes", "Prototyping", "UX Design", "Usability Thinking"]
    },
    {
      title: "UI & Visual Design",
      description: "Creating clear and consistent interfaces supported by strong visual systems.",
      items: ["Website UI", "Mobile App UI", "Dashboard UI", "Design Systems", "Visual Design", "Marketing Design", "Branding Support"]
    },
    {
      title: "Brand & Marketing Design",
      description: "Helping businesses create consistent visual communication across brand and marketing materials.",
      items: ["Brand Identity", "Brand Guidelines", "Business Cards", "Brochures", "Flyers", "Posters", "Marketing Materials", "Digital Creatives"]
    },
    {
      title: "Frontend Development",
      description: "Building responsive web interfaces from design using modern frontend technologies.",
      items: ["Responsive Websites", "JavaScript", "React", "Next.js", "Tailwind CSS", "Design-to-Code", "Frontend UI Implementation"]
    },
    {
      title: "End-to-End",
      subheading: "From UX to Code",
      description: "For selected projects, I can take the experience from UX and UI design through frontend implementation.",
      flow: "UX → UI → Design System → Frontend → Deployment"
    }
  ];

  return (
    <Section variant="major">
      <Container>
        <SectionHeader className="mb-12">
          How I can help
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              {service.subheading && (
                <p className="text-sm sm:text-base text-accent font-medium mb-3">
                  {service.subheading}
                </p>
              )}
              <p className="text-text-body mb-4 text-sm sm:text-base">
                {service.description}
              </p>
              {service.items && (
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <Tag key={itemIndex}>{item}</Tag>
                  ))}
                </div>
              )}
              {service.flow && (
                <p className="text-sm sm:text-base text-text-body">
                  {service.flow}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* View Services CTA */}
        <div className="text-center">
          <NextLink
            href="/services"
            className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            View Services
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
