import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

export default function ExperienceSnapshot() {
  const progressionSteps = [
    "Visual Design",
    "Web Design",
    "Frontend Development",
    "UX/UI",
    "UX Leadership",
    "Product Design + Development"
  ];

  return (
    <Section variant="normal">
      <Container>
        <SectionHeader className="mb-12">
          A career across design and technology.
        </SectionHeader>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden md:block mb-12">
          <div className="flex items-center justify-between mb-8">
            {progressionSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-1 last:flex-none">
                <div className="text-center flex-1">
                  <p className="text-sm sm:text-base font-medium text-text-primary">
                    {step}
                  </p>
                </div>
                {index < progressionSteps.length - 1 && (
                  <div className="flex-shrink-0 px-4 text-accent">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline - Mobile/Tablet */}
        <div className="md:hidden mb-12">
          <div className="space-y-4">
            {progressionSteps.map((step, index) => (
              <div key={index}>
                <p className="text-sm sm:text-base font-medium text-text-primary mb-2">
                  {step}
                </p>
                {index < progressionSteps.length - 1 && (
                  <div className="text-accent text-lg flex justify-center mb-2">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-text-body max-w-2xl mb-8">
          My career has evolved across visual design, web design, frontend development and UX/UI, giving me a broad understanding of how digital experiences are planned, designed and built. I have spent more than a decade working in UX/UI and product design, with a longer background in frontend and UI implementation. Today, I bring those experiences together to design thoughtful digital products and build modern interfaces.
        </p>

        {/* CTA */}
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
