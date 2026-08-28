import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function AboutHero() {
  return (
    <Section variant="major" className="relative overflow-hidden">
      {/* Soft form, upper-right - solid fill + blur, no gradient */}
      <div
        className="hidden sm:block absolute -top-32 right-[-120px] w-[460px] h-[460px] rounded-full z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(70, 172, 189, 0.07)', filter: 'blur(70px)' }}
      ></div>

      {/* Faint outlined ring, upper-right */}
      <div className="hidden sm:block absolute -top-28 right-[-100px] w-[420px] h-[420px] rounded-full border border-accent/10 z-0 pointer-events-none"></div>

      {/* Restrained dot grid, lower-right */}
      <div
        className="hidden md:block absolute bottom-10 right-[8%] w-[200px] h-[200px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.22,
          maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
        }}
      ></div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            Designing across experience, interface and technology.
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
            <div className="hidden sm:block flex-1 h-px bg-border"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            My career has evolved across visual design, web design, frontend development and UX/UI.
          </p>
        </div>
      </Container>
    </Section>
  );
}
