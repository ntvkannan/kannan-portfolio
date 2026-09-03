import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

// Homepage summary only — the full capability breakdown lives on the Services page.
const coreServices = [
  {
    title: "UX & Product Design",
    description:
      "Designing useful, structured and intuitive experiences around real user and business needs.",
  },
  {
    title: "UI & Visual Design",
    description:
      "Creating clear and consistent interfaces supported by strong visual systems.",
  },
  {
    title: "Brand & Marketing Design",
    description:
      "Helping businesses create consistent visual communication across brand and marketing materials.",
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive web interfaces from design using modern frontend technologies.",
  },
];

export default function ServicesPreview() {
  return (
    <Section variant="major">
      <Container>
        <SectionHeader className="mb-12">
          How I can help
        </SectionHeader>

        {/* Four core capabilities — equal visual weight, 2x2 from md up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-12 mb-14 md:mb-16">
          {coreServices.map((service) => (
            <div key={service.title}>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiator — how the work is delivered, not a fifth service */}
        <div className="border-t border-border pt-10 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                End-to-End
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                From UX to Code
              </h3>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                For selected projects, I can take the experience from UX and UI design through frontend implementation.
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl font-semibold text-text-primary leading-relaxed mb-6">
                UX → UI → Design System → Frontend → Deployment
              </p>
              <NextLink
                href="/services"
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                View Services
              </NextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
