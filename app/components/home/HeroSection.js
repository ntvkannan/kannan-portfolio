import Image from "next/image";
import NextLink from "next/link";
import Link from "@/app/components/foundation/Link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function HeroSection() {
  return (
    <Section variant="major">
      <Container className="!max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-20">
          {/* Left Column - Content (55-58%) */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">
                Senior UX/UI Designer & Frontend Developer
              </p>
              <div className="mt-3 w-14 h-1 bg-accent rounded-full"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl font-bold text-text-primary leading-tight mb-8">
              Designing digital products from{" "}
              <span className="text-accent">experience to</span> interface to code.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-text-body leading-relaxed mb-10 max-w-xl">
              I design user experiences, create thoughtful interfaces and build modern web experiences with a strong understanding of how products are designed and developed.
            </p>

            {/* Experience Stats - Compact */}
            <div className="mb-10 flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-2xl font-bold text-text-primary">15+</p>
                <p className="text-sm text-text-body">years frontend</p>
              </div>
              <div className="hidden sm:block w-px bg-border-strong"></div>
              <div className="sm:pl-8">
                <p className="text-2xl font-bold text-text-primary">10+</p>
                <p className="text-sm text-text-body">years UX/UI</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <NextLink
                href="/work"
                className="inline-flex items-center justify-center rounded-button h-12 px-8 bg-primary text-white font-semibold text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                View My Work
              </NextLink>
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-button h-12 px-8 bg-transparent border-2 border-text-primary text-text-primary font-semibold text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Work With Me
              </NextLink>
            </div>

            {/* Supporting Link */}
            <Link href="/resume.pdf" color="accent" className="text-sm font-semibold">
              Download Resume
            </Link>
          </div>

          {/* Right Column - Profile Image (42-45%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Subtle pale-blue background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/6 to-transparent -z-20 transform scale-125"></div>

              {/* Single curved arc decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 border-4 border-accent opacity-15 rounded-full -z-10"></div>

              {/* Very subtle dot pattern */}
              <div className="absolute inset-0 rounded-3xl opacity-20 -z-10" style={{
                backgroundImage: 'radial-gradient(circle, var(--color-accent) 0.5px, transparent 0.5px)',
                backgroundSize: '32px 32px',
                backgroundPosition: '0 0'
              }}></div>

              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-3xl aspect-square">
                <Image
                  src="/images/Kannan.jpg"
                  alt="Kannan Thangavel"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
