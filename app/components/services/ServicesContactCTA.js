import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ServicesContactCTA() {
  return (
    <Section variant="major" className="-mt-8 md:-mt-10 lg:-mt-14">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-4">
            Ready to start a project?
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary mb-8">
            Let's discuss your project, timeline, and how I can help bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NextLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Work With Me
            </NextLink>
            <NextLink
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Download Resume
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
