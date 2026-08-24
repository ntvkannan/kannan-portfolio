import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";
import { projects } from "@/app/data/projects";

export default function SelectedWork() {
  const featuredProject = projects.find(p => p.featured);
  const supportingProjects = projects.filter(p => p.category === "professional" && !p.featured).slice(0, 3);

  return (
    <Section variant="major">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          className="mb-16"
        >
          Selected Work
        </SectionHeader>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            {featuredProject.image && (
              <div className="mb-6">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} project image`}
                  ratio="16:9"
                  rounded="lg"
                />
              </div>
            )}
            <div className="max-w-2xl">
              <Badge variant="accent" className="mb-3">
                {featuredProject.displayCategory}
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-lg text-text-secondary mb-6">
                {featuredProject.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-6">
                <div>
                  <p className="font-semibold text-text-primary">Role</p>
                  <p>{featuredProject.role}</p>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Type</p>
                  <p>{featuredProject.type}</p>
                </div>
              </div>
              <NextLink
                href={`/work/${featuredProject.slug}`}
                className="inline-flex text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent font-medium transition-colors"
              >
                View Case Study →
              </NextLink>
            </div>
          </div>
        )}

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {supportingProjects.map(project => (
            <div key={project.slug}>
              {project.image && (
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    ratio="16:9"
                    rounded="lg"
                  />
                </div>
              )}
              <Badge variant="neutral" className="mb-2">
                {project.displayCategory}
              </Badge>
              <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                {project.title}
              </h4>
              <NextLink
                href={`/work/${project.slug}`}
                className="inline-flex text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent text-sm font-medium transition-colors"
              >
                View Case Study →
              </NextLink>
            </div>
          ))}
        </div>

        {/* View All Work CTA */}
        <div className="text-center">
          <NextLink
            href="/work"
            className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            View All Work
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
