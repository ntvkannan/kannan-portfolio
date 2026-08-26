import NextLink from "next/link";
import Link from "@/app/components/foundation/Link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function HeroSection() {
  return (
    <Section variant="major">
      <Container>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm sm:text-base font-semibold text-accent uppercase tracking-wide mb-4">
            Senior UX/UI Designer & Frontend Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
            Designing digital products from experience to interface to code.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-text-body leading-relaxed mb-8 max-w-2xl">
            I design user experiences, create thoughtful interfaces and build modern web experiences with a strong understanding of how products are designed and developed.
          </p>

          {/* Credibility */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-text-primary">15+ years</p>
              <p className="text-text-body">frontend experience</p>
            </div>
            <div>
              <p className="font-semibold text-text-primary">10+ years</p>
              <p className="text-text-body">UX/UI</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <NextLink
              href="/work"
              className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              View My Work
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Work With Me
            </NextLink>
          </div>

          {/* Supporting Link */}
          <div>
            <Link href="/resume.pdf" color="accent">
              Download Resume
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
