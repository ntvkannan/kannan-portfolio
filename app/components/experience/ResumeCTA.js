import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ResumeCTA() {
  return (
    <Section variant="normal" className="-mt-4 md:-mt-6 lg:-mt-8">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
            Download My Resume
          </h2>

          <p className="text-base sm:text-lg text-text-secondary mb-8">
            For a detailed view of my complete professional background, skills, and certifications.
          </p>

          <NextLink
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            Download Resume
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
