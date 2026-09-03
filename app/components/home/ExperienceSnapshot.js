import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

// Short display labels; the full career detail lives on the Experience page.
const progressionSteps = [
  "Visual Design",
  "Web",
  "Frontend",
  "UX/UI",
  "UX Leadership",
  "Product Design",
];

export default function ExperienceSnapshot() {
  return (
    <Section variant="normal">
      <Container>
        <SectionHeader className="mb-10">
          A career across design and technology.
        </SectionHeader>

        {/* One DOM representation of the progression; it wraps responsively
            instead of duplicating the steps for desktop and mobile. */}
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
          {progressionSteps.map((step, index) => (
            <li key={step} className="flex items-center gap-x-3">
              {index > 0 && (
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
              )}
              <span className="text-sm sm:text-base font-medium text-text-primary">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <p className="text-text-body max-w-2xl mb-8">
          My career has evolved across visual design, web design, frontend development and UX/UI, giving me a broad understanding of how digital experiences are planned, designed and built. Today, I bring those experiences together to design thoughtful digital products and build modern interfaces.
        </p>

        <NextLink
          href="/experience"
          className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
        >
          View Experience
        </NextLink>
      </Container>
    </Section>
  );
}
