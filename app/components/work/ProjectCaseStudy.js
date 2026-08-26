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

function ProblemSection({ content }) {
  return (
    <div className="max-w-4xl">
      <p className="text-lg sm:text-xl text-text-body leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function SolutionSection({ content }) {
  return (
    <div className="max-w-4xl">
      <p className="text-lg sm:text-xl text-text-body leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function RoleMetadataSection({ responsibilities }) {
  if (!responsibilities || responsibilities.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
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
    <div className="max-w-4xl">
      <p className="text-lg sm:text-xl text-text-body leading-relaxed mb-6">
        {content}
      </p>
      {content && content.includes('•') && (
        <ul className="space-y-2">
          {content
            .split('•')
            .filter((item) => item.trim())
            .map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base text-text-body flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{item.trim()}</span>
              </li>
            ))}
        </ul>
      )}
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
        <Link href={`/work/${nextProject.slug}`} variant="accent" className="flex-shrink-0 font-medium group">
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

  return (
    <>
      <CaseStudySectionNav sections={caseStudy.sections} />

      {caseStudy.sections.map((section, index) => {
        const sectionId = section.title ? slugify(section.title) : `section-${index}`;

        return (
        <Section key={index} variant="normal" id={sectionId}>
          <Container size="wide">
            {/* Section Heading */}
            {section.title && (
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
                {section.title}
              </h2>
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
