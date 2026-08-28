import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";
import { projects } from "@/app/data/projects";

export default function ClientWork() {
  const clientProjects = projects.filter(p => p.category === "client");

  return (
    <Section variant="normal">
      <Container>
        <SectionHeader eyebrow="Brand & Visual Design" className="mb-12">
          Client & Brand Work
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProjects.map((project, index) => (
            <div key={project.slug} className="group/card">
              {project.image && (
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    ratio="16:9"
                    rounded="lg"
                    className="!aspect-[16/10] transition-transform duration-500 ease-out group-hover/card:scale-105"
                  />
                </div>
              )}
              <Badge variant="neutral" className="mb-3">
                {project.displayCategory}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-body mb-6">
                {project.description}
              </p>
              <NextLink
                href={`/work/${project.slug}`}
                className={`inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 font-medium text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 ${
                  index === 0
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-transparent border border-border-strong text-text-primary hover:bg-surface-secondary"
                }`}
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
