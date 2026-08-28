import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ContactHero() {
  return (
    <Section variant="major" className="relative overflow-hidden">
      {/* Soft form, upper-right - solid fill + blur, no gradient */}
      <div
        className="hidden sm:block absolute -top-32 right-[-110px] w-[440px] h-[440px] rounded-full z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(11, 26, 82, 0.06)', filter: 'blur(70px)' }}
      ></div>

      {/* Faint outlined ring, upper-left */}
      <div className="hidden sm:block absolute -top-16 -left-16 w-[260px] h-[260px] rounded-full border border-accent-hover/15 z-0 pointer-events-none"></div>

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
            Let's work together.
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
            <div className="hidden sm:block flex-1 h-px bg-border"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            Whether you're looking for a UX/UI designer, need help with a brand or digital product, or want to discuss a website or app, I'd be happy to hear about your project.
          </p>
        </div>
      </Container>
    </Section>
  );
}
