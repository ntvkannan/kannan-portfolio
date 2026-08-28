import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ExperienceHero() {
  return (
    <Section variant="major" className="relative overflow-hidden">
      {/* Soft form, lower-left - solid fill + blur, no gradient */}
      <div
        className="hidden sm:block absolute -bottom-40 -left-32 w-[460px] h-[460px] rounded-full z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(70, 172, 189, 0.06)', filter: 'blur(75px)' }}
      ></div>

      {/* Faint outlined ring, upper-right */}
      <div className="hidden sm:block absolute -top-24 right-[-90px] w-[380px] h-[380px] rounded-full border border-accent/10 z-0 pointer-events-none"></div>

      {/* Restrained dot grid, upper-right */}
      <div
        className="hidden md:block absolute top-8 right-[10%] w-[190px] h-[190px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent-hover) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.22,
          maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
        }}
      ></div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            Experience
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
            <div className="hidden sm:block flex-1 h-px bg-border"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            A career spanning visual design, frontend development, UX/UI design and product experience.
          </p>
        </div>
      </Container>
    </Section>
  );
}
