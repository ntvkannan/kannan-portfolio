import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

export default function AboutSnapshot() {
  return (
    <Section variant="normal">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <SectionHeader>
              Designing across experience, interface and technology.
            </SectionHeader>

            <div className="mt-8 space-y-6">
              <p className="text-text-body">
                My career has evolved across visual design, web design, frontend development and UX/UI, giving me a broad understanding of how digital experiences are planned, designed and built.
              </p>

              <p className="text-text-body">
                I have spent more than a decade working in UX/UI and product design, with a longer background in frontend and UI implementation.
              </p>
            </div>
          </div>

          {/* Closing statement - editorial emphasis */}
          <div className="md:pl-10 md:row-span-2">
            <div className="w-14 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-xl sm:text-2xl text-text-primary leading-relaxed">
              Today, I bring those experiences together to design thoughtful digital products and build modern interfaces.
            </p>
          </div>

          {/* CTA - final action, after the closing statement on mobile */}
          <div className="md:col-start-1">
            <NextLink
              href="/about"
              className="inline-flex items-center justify-center rounded-button h-11 px-5 bg-accent text-white font-medium text-sm hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              More About Me
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
