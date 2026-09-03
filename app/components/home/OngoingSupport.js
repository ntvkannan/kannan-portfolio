import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function OngoingSupport() {
  return (
    <Section variant="small">
      <Container>
        <div className="border border-border rounded-lg bg-surface p-6 sm:p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
              Looking for ongoing design support?
            </h2>
            <p className="text-text-body leading-relaxed">
              Get design and website support from one experienced partner through a flexible monthly engagement tailored to your needs.
            </p>
          </div>

          <NextLink
            href="/contact"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            Work With Me
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
