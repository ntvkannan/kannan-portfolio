import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function WorkHero() {
  return (
    <Section variant="normal" className="relative overflow-hidden !pb-0">
      {/* Soft form, upper-left - solid fill + blur, no gradient */}
      <div
        className="hidden sm:block absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(70, 172, 189, 0.06)', filter: 'blur(75px)' }}
      ></div>

      {/* Faint outlined ring, lower-right */}
      <div className="hidden sm:block absolute -bottom-20 right-[-70px] w-[300px] h-[300px] rounded-full border border-accent/10 z-0 pointer-events-none"></div>

      {/* Restrained dot grid, lower-left */}
      <div
        className="hidden md:block absolute bottom-4 left-[10%] w-[180px] h-[180px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent-hover) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
        }}
      ></div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            Selected Work
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
            <div className="hidden sm:block flex-1 h-px bg-border"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            A collection of professional UX/UI projects, client design work and products I am building.
          </p>
        </div>
      </Container>
    </Section>
  );
}
