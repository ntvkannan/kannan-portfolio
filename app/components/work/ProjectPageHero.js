import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";

export default function ProjectPageHero({ project }) {
  const isBrandHero = project.heroType === "brand";

  return (
    <Section variant="major">
      <Container>
        {/* Brand Hero: Text-only editorial introduction */}
        {isBrandHero ? (
          <div className="max-w-2xl">
            {/* Category Badge */}
            <Badge variant="accent">
              {project.displayCategory}
            </Badge>

            {/* Project Title */}
            <div className="mt-8">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-text-primary leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mt-6 max-w-lg">
              {project.description}
            </p>

            {/* Metadata */}
            <div className="flex flex-col gap-6 mt-8">
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
        ) : (
          /* Standard 2-column Hero: content + image */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 lg:items-start">
            {/* Hero Content */}
            <div className="order-2 lg:order-1 lg:col-span-2 space-y-8">
              {/* Category Badge */}
              <Badge variant="accent">
                {project.displayCategory}
              </Badge>

              {/* Project Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-text-primary leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg">
                {project.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-col gap-6 pt-4">
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

            {/* Hero Image */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                ratio={project.imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
