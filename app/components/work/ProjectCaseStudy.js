import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import FlowDiagram from "./case-study/FlowDiagram";
import WorkflowSteps from "./case-study/WorkflowSteps";
import FeatureShowcase from "./case-study/FeatureShowcase";
import DesignChallenge from "./case-study/DesignChallenge";
import Link from "@/app/components/foundation/Link";
import CaseStudySectionNav from "./CaseStudySectionNav";
import { slugify } from "@/app/utils/slugify";
import { projects } from "@/app/data/projects";

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

function RichText({ content }) {
  if (!content) {
    return null;
  }

  const blocks = content.split("\n\n").filter((block) => block.trim());

  return (
    <div className="space-y-5">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("•")) {
          const items = trimmed
            .split("\n")
            .map((item) => item.replace(/^•\s*/, "").trim())
            .filter(Boolean);

          return (
            <ul key={idx} className="space-y-2.5">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-base sm:text-lg text-text-body leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-base sm:text-lg text-text-body leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

function ProblemSection({ content }) {
  return (
    <div className="max-w-3xl">
      <RichText content={content} />
    </div>
  );
}

function SolutionSection({ content }) {
  return (
    <div className="max-w-3xl">
      <RichText content={content} />
    </div>
  );
}

function RoleMetadataSection({ responsibilities }) {
  if (!responsibilities || responsibilities.length === 0) {
    return null;
  }

  return (
    <div className="max-w-3xl">
      <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-4">
        Key Responsibilities
      </p>
      <ul className="space-y-3">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="text-base sm:text-lg text-text-body flex items-start gap-3">
            <span className="text-accent mt-1.5 flex-shrink-0">•</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChallengesSection({ challenges }) {
  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {challenges.map((challenge, idx) => (
        <DesignChallenge key={idx} challenge={challenge} number={idx + 1} />
      ))}
    </div>
  );
}

function ReflectionSection({ content }) {
  return (
    <div className="max-w-3xl">
      <RichText content={content} />
    </div>
  );
}

function NextProjectSection({ nextProjectSlug }) {
  if (!nextProjectSlug) {
    return null;
  }

  const nextProject = projects.find((p) => p.slug === nextProjectSlug);
  if (!nextProject) {
    return null;
  }

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 bg-surface-secondary rounded-lg">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
            Next Case Study
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-2">
            {nextProject.title}
          </h3>
          <p className="text-base sm:text-lg text-text-body">
            {nextProject.description}
          </p>
        </div>
        <Link href={`/work/${nextProject.slug}`} color="accent" className="flex-shrink-0 font-medium group">
          <span className="inline-flex items-center gap-1">
            View Case Study
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function ProjectCaseStudy({ caseStudy }) {
  if (!caseStudy || !caseStudy.sections) {
    return null;
  }

  // Canonical section order. Numbers are derived from position in exactly the
  // list CaseStudySectionNav numbers (titled sections, excluding next-project),
  // so a section's marker and its table-of-contents entry cannot drift apart.
  const sectionNumbers = new Map();
  let sectionCounter = 0;
  caseStudy.sections.forEach((section) => {
    if (section.title && section.type !== "next-project") {
      sectionCounter += 1;
      sectionNumbers.set(section, String(sectionCounter).padStart(2, "0"));
    }
  });

  return (
    <>
      <CaseStudySectionNav sections={caseStudy.sections} />

      {caseStudy.sections.map((section, index) => {
        const sectionId = section.title ? slugify(section.title) : `section-${index}`;
        const sectionNumber = sectionNumbers.get(section);

        // A section directly after a chapter, and not itself a chapter, is that
        // chapter's visual continuation: it stays bound to the content above it
        // rather than being separated as its own chapter.
        const prevSection = index > 0 ? caseStudy.sections[index - 1] : null;
        const isContinuation =
          index > 0 &&
          !section.chapter &&
          Boolean(prevSection?.chapter) &&
          section.type !== "next-project";

        return (
        <Section
          key={index}
          variant="small"
          id={sectionId}
          className={isContinuation ? "!pt-0" : index > 0 ? "border-t border-border" : ""}
        >
          <Container size="wide">
            {/* Section Heading. next-project renders its own label, so the
                outer heading is suppressed to avoid printing it twice. */}
            {section.title && section.type !== "next-project" && (
              <div className={isContinuation ? "mb-8" : "mb-10"}>
                {sectionNumber && (
                  <p
                    className={
                      isContinuation
                        ? "text-xs font-semibold text-accent uppercase tracking-wide mb-2"
                        : "text-sm sm:text-base font-semibold text-accent uppercase tracking-wide mb-2"
                    }
                  >
                    {`${sectionNumber} —`}
                  </p>
                )}
                <h2
                  className={
                    isContinuation
                      ? "text-xl sm:text-2xl font-semibold text-text-primary"
                      : "text-3xl sm:text-4xl font-semibold text-text-primary"
                  }
                >
                  {section.title}
                </h2>
              </div>
            )}

            {/* Section Content by Type */}
            {section.type === "problem" && <ProblemSection content={section.content} />}
            {section.type === "solution" && <SolutionSection content={section.content} />}
            {section.type === "gallery" && <GallerySection items={section.items} />}
            {section.type === "challenge-diagram" && <FlowDiagram items={section.items} layout={section.layout || 'horizontal'} />}
            {section.type === "role-metadata" && <RoleMetadataSection responsibilities={section.responsibilities} />}
            {section.type === "ecosystem-diagram" && <FlowDiagram items={section.items} variant="ecosystem" />}
            {section.type === "workflow-visual" && <WorkflowSteps steps={section.steps} />}
            {section.type === "challenges" && <ChallengesSection challenges={section.challenges} />}
            {section.type === "feature-showcase" && <FeatureShowcase features={section.features} layout={section.layout} />}
            {section.type === "reflection" && <ReflectionSection content={section.content} />}
            {section.type === "next-project" && <NextProjectSection nextProjectSlug={section.nextProjectSlug} />}
          </Container>
        </Section>
        );
      })}
    </>
  );
}
