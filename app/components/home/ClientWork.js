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
        <SectionHeader className="mb-12">
          Client & Brand Work
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProjects.map(project => (
            <div key={project.slug}>
              <div className="mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} project image`}
                  ratio="16:9"
                  rounded="lg"
                />
              </div>
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
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
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
