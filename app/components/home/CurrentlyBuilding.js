import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Badge from "@/app/components/foundation/Badge";

export default function CurrentlyBuilding() {
  return (
    <Section variant="normal">
      <Container>
        <SectionHeader supporting="I am expanding my UX/UI background through hands-on product development, taking selected projects from design through frontend implementation.">
          Currently Building
        </SectionHeader>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Project identity */}
          <div>
            <Badge variant="accent" className="mb-4">Building</Badge>
            <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
              Kannan Personal Website
            </h3>
            <p className="text-text-body">
              My personal website is being designed and developed as a practical design-to-code project, bringing together UX strategy, interface design, design systems and frontend development.
            </p>
          </div>

          {/* Process and action */}
          <div>
            <p className="text-sm text-text-body mb-6">
              <strong>Process:</strong> UX → UI → Design System → Next.js → Tailwind CSS → Deployment
            </p>

            <NextLink
              href="/work/kannan-personal-website"
              className="inline-flex text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent font-medium transition-colors"
            >
              View Project →
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
