import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

function GallerySection({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-surface-secondary rounded-lg overflow-hidden aspect-video flex flex-col items-center justify-center p-6"
        >
          <p className="text-text-muted text-center text-sm">
            {item.title}
          </p>
          <p className="text-text-muted text-center text-xs mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProblemSection({ content }) {
  return (
    <div className="max-w-3xl">
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function SolutionSection({ content }) {
  return (
    <div className="max-w-3xl">
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default function ProjectCaseStudy({ caseStudy }) {
  if (!caseStudy || !caseStudy.sections) {
    return null;
  }

  return (
    <>
      {caseStudy.sections.map((section, index) => (
        <Section key={index} variant="normal">
          <Container>
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-8">
              {section.title}
            </h2>

            {/* Section Content by Type */}
            {section.type === "problem" && <ProblemSection content={section.content} />}
            {section.type === "solution" && <SolutionSection content={section.content} />}
            {section.type === "gallery" && <GallerySection items={section.items} />}
          </Container>
        </Section>
      ))}
    </>
  );
}
