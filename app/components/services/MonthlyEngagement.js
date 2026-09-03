import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Tag from "@/app/components/foundation/Tag";

const engagementScope = [
  "UX/UI Design",
  "Visual Design",
  "Branding",
  "Design Systems",
  "Website Design",
  "Frontend Development",
  "Ongoing Website Support",
];

export default function MonthlyEngagement() {
  return (
    <Section variant="normal" className="-mt-6 md:-mt-8 lg:-mt-12">
      <Container size="wide">
        <div className="max-w-4xl">
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <SectionHeader
              eyebrow="Flexible Monthly Engagement"
              supporting="I can take care of your design, UX/UI, branding, and website requirements through a flexible monthly engagement tailored to your requirements and budget."
            >
              One partner for your ongoing design & website needs.
            </SectionHeader>

            <ul className="mt-8 flex flex-wrap gap-2">
              {engagementScope.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Let's Discuss Your Needs
              </NextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
