import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Badge from "@/app/components/foundation/Badge";
import { projects } from "@/app/data/projects";

export default function ClientWork() {
  const clientProjects = projects.filter(p => p.category === "client");

  return (
    <Section variant="normal">
      <Container>
        <SectionHeader className="mb-12">
          Client & Brand Work
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProjects.map(project => (
            <div key={project.slug}>
              <div className="bg-surface-secondary rounded-lg overflow-hidden mb-6 aspect-video flex items-center justify-center">
                <p className="text-text-muted text-center text-sm">Project image placeholder</p>
              </div>
              <Badge variant="neutral" className="mb-3">
                {project.displayCategory}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-6">
                {project.description}
              </p>
              <NextLink
                href="/work"
                className="inline-flex items-center justify-center rounded-button h-11 px-5 bg-accent text-white font-medium text-sm hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                View Project
              </NextLink>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
