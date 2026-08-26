import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function AudiencePaths() {
  return (
    <Section variant="normal" className="!pb-0">
      <Container>
        <h2 className="sr-only">Choose your path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Path A - Employers */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-1 bg-accent rounded-full mb-5"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary leading-snug mb-3">
              Looking for a UX/UI Designer who understands development?
            </h3>
            <p className="text-text-body mb-6">
              Explore my professional UX/UI experience, enterprise product work, design systems and career background.
            </p>
            <NextLink
              href="/experience"
              className="mt-auto inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              View Experience
            </NextLink>
          </div>

          {/* Path B - Clients */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-1 bg-accent rounded-full mb-5"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary leading-snug mb-3">
              Need design, development, or both?
            </h3>
            <p className="text-text-body mb-6">
              From brand identity and marketing design to UX, UI and modern web experiences, I can help take a project from idea to execution.
            </p>
            <NextLink
              href="/contact"
              className="mt-auto inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Work With Me
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
