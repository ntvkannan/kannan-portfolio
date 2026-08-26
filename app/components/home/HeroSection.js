import Image from "next/image";
import NextLink from "next/link";
import Link from "@/app/components/foundation/Link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function HeroSection() {
  return (
    <Section
      variant="major"
      className="!-mt-20 lg:!-mt-32 relative overflow-hidden bg-surface"
    >
      {/* Cool atmospheric base wash */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(160deg, rgba(70, 172, 189, 0.05) 0%, rgba(70, 172, 189, 0.008) 45%, rgba(70, 172, 189, 0.035) 100%)',
        }}
      ></div>

      {/* Soft curve sweeping in from the upper-left */}
      <div
        className="absolute -top-[460px] -left-[340px] w-[1040px] h-[1040px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(140deg, rgba(70, 172, 189, 0.06) 0%, rgba(11, 26, 82, 0.022) 100%)',
          filter: 'blur(0.5px)',
        }}
      ></div>

      {/* Broad curve rising from the bottom-right, framing the portrait */}
      <div
        className="absolute -bottom-[460px] -right-[280px] w-[1220px] h-[1220px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(320deg, rgba(70, 172, 189, 0.055) 0%, rgba(11, 26, 82, 0.018) 100%)',
          filter: 'blur(0.5px)',
        }}
      ></div>

      {/* Soft elliptical form along the lower-left */}
      <div
        className="absolute -bottom-[360px] -left-[420px] w-[960px] h-[760px] z-0 pointer-events-none"
        style={{
          borderRadius: '50%',
          background: 'rgba(70, 172, 189, 0.035)',
          transform: 'rotate(-10deg)',
          filter: 'blur(4px)',
        }}
      ></div>

      {/* Diffuse glow behind the portrait region */}
      <div
        className="absolute -top-[160px] -right-[220px] w-[820px] h-[820px] rounded-full z-0 pointer-events-none blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(70, 172, 189, 0.10) 0%, transparent 68%)',
        }}
      ></div>

      {/* Dot matrix to the right of the portrait */}
      <div
        className="hidden lg:block absolute top-[38%] right-0 w-[260px] h-[440px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.3,
          maskImage: 'linear-gradient(to left, black 25%, transparent 95%)',
          WebkitMaskImage:
            'linear-gradient(to left, black 25%, transparent 95%)',
        }}
      ></div>

      {/* Dot matrix trailing below the portrait */}
      <div
        className="hidden lg:block absolute bottom-[6%] right-[14%] w-[320px] h-[180px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.18,
          maskImage:
            'radial-gradient(ellipse at 70% 30%, black 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 30%, black 0%, transparent 78%)',
        }}
      ></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-12 -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8">
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
              <span
                className="text-accent px-1 rounded-sm"
                style={{
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                  backgroundImage:
                    'linear-gradient(to top, transparent 0.27em, color-mix(in srgb, var(--color-accent) 18%, transparent) 0.27em, color-mix(in srgb, var(--color-accent) 18%, transparent) 0.49em, transparent 0.49em)',
                }}
              >
                experience to
              </span>{" "}
              interface to code.
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
              {/* Single curved arc decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 border-4 border-accent opacity-15 rounded-full -z-10"></div>

              {/* Very subtle dot pattern */}
              <div className="absolute inset-0 rounded-3xl opacity-20 -z-10" style={{
                backgroundImage: 'radial-gradient(circle, var(--color-accent) 0.5px, transparent 0.5px)',
                backgroundSize: '32px 32px',
                backgroundPosition: '0 0'
              }}></div>

              {/* Dot pattern extending beyond the card into the background */}
              <div
                className="hidden lg:block absolute -bottom-16 -right-20 w-64 h-64 -z-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--color-accent) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                  opacity: 0.25,
                  maskImage: 'radial-gradient(circle at 30% 30%, black 0%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at 30% 30%, black 0%, transparent 75%)',
                }}
              ></div>

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
