import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function ProjectOverview({ project }) {
  return (
    <Section variant="small">
      <Container>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-10">
            Project Overview
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 pt-8 border-t border-border">
            {/* Project Name */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Project
              </p>
              <p className="text-base sm:text-lg text-text-primary">
                {project.title}
              </p>
            </div>

            {/* Role */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Role
              </p>
              <p className="text-base sm:text-lg text-text-primary">
                {project.role}
              </p>
            </div>

            {/* Type */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Type
              </p>
              <p className="text-base sm:text-lg text-text-primary">
                {project.type}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Status
              </p>
              <p className="text-base sm:text-lg text-text-primary capitalize">
                {project.status}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
