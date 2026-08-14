import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Badge from "@/app/components/foundation/Badge";
import Tag from "@/app/components/foundation/Tag";

export default function CurrentlyBuilding() {
  return (
    <Section variant="normal">
      <Container>
        <SectionHeader supporting="I am expanding my UX/UI background through hands-on product development, taking selected projects from design through frontend implementation.">
          Currently Building
        </SectionHeader>

        <div className="mt-12 max-w-2xl">
          <div className="border border-border rounded-lg p-8 bg-surface">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary">
                Kannan Personal Website
              </h3>
              <Badge variant="accent">Building</Badge>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Tag>UX/UI</Tag>
              <Tag>Design System</Tag>
              <Tag>Next.js</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Tailwind CSS</Tag>
            </div>

            <p className="text-text-secondary mb-6">
              My personal website is being designed and developed as a practical design-to-code project, bringing together UX strategy, interface design, design systems and frontend development.
            </p>

            <p className="text-sm text-text-secondary mb-6">
              <strong>Process:</strong> UX → UI → Design System → Next.js → Tailwind CSS → Deployment
            </p>

            <NextLink
              href="/work"
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
