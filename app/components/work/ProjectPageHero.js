import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";

export default function ProjectPageHero({ project }) {
  return (
    <Section variant="major">
      <Container>
        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            ratio="16:9"
            rounded="lg"
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl">
          {/* Category Badge */}
          <Badge variant="accent" className="mb-4">
            {project.displayCategory}
          </Badge>

          {/* Project Title */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-4 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Metadata Grid */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Role
              </p>
              <p className="text-base sm:text-lg text-text-primary">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                Type
              </p>
              <p className="text-base sm:text-lg text-text-primary">
                {project.type}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
