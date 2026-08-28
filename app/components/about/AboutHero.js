import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function AboutHero() {
  return (
    <Section variant="major" className="relative overflow-hidden">
      {/* Soft atmospheric wash, top-right */}
      <div
        className="absolute -top-1/3 right-[-10%] w-[560px] h-[560px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(70, 172, 189, 0.16) 0%, rgba(70, 172, 189, 0.05) 45%, transparent 75%)',
        }}
      ></div>

      {/* Secondary wash, lower-left, grounding the composition */}
      <div
        className="hidden sm:block absolute -bottom-1/2 -left-1/4 w-[480px] h-[480px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(11, 26, 82, 0.05) 0%, transparent 70%)',
        }}
      ></div>

      {/* Dot matrix, lower-right */}
      <div
        className="hidden md:block absolute bottom-6 right-[6%] w-[260px] h-[260px] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          opacity: 0.3,
          maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
        }}
      ></div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary mb-6 leading-tight">
            Designing across experience, interface and technology.
          </h1>
          <div className="w-14 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-xl">
            My career has evolved across visual design, web design, frontend development and UX/UI.
          </p>
        </div>
      </Container>
    </Section>
  );
}
