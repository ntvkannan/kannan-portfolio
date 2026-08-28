import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ServicesHero() {
  return (
    <Section variant="major" className="relative overflow-hidden">
      {/* Soft form, upper-right - solid fill + blur, no gradient */}
      <div
        className="hidden sm:block absolute -top-36 right-[-140px] w-[520px] h-[520px] rounded-full z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(11, 26, 82, 0.05)', filter: 'blur(80px)' }}
      ></div>

      {/* Faint outlined ring, lower-left */}
      <div className="hidden sm:block absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full border border-accent-hover/15 z-0 pointer-events-none"></div>

      {/* Restrained dot grid, lower-right */}
      <div
        className="hidden md:block absolute bottom-8 right-[6%] w-[200px] h-[200px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
        }}
      ></div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            What I can help you with
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
            <div className="hidden sm:block flex-1 h-px bg-border"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            I combine UX/UI design, visual design, and frontend development to create digital products that are thoughtful, intentional, and built to work.
          </p>
        </div>
      </Container>
    </Section>
  );
}
