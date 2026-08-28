import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";

export default function ProjectPageHero({ project }) {
  const isBrandHero = project.heroType === "brand";

  return (
    <Section variant="major" className={isBrandHero ? "relative overflow-hidden" : ""}>
      {/* Brand heroes are text-only, so a very light abstract ground gives them
          presence without competing with the project's own artwork below. */}
      {isBrandHero && (
        <>
          <div
            className="hidden sm:block absolute -top-32 right-[-120px] w-[460px] h-[460px] rounded-full z-0 pointer-events-none"
            style={{ backgroundColor: 'rgba(70, 172, 189, 0.06)', filter: 'blur(75px)' }}
          ></div>
          <div className="hidden sm:block absolute -top-24 right-[-80px] w-[360px] h-[360px] rounded-full border border-accent/10 z-0 pointer-events-none"></div>
          <div className="hidden lg:block absolute -top-8 right-[4%] w-[240px] h-[240px] rounded-full border border-accent/[0.07] z-0 pointer-events-none"></div>
        </>
      )}

      <Container className={isBrandHero ? "relative z-10" : ""}>
        {/* Brand Hero: Text-only editorial introduction */}
        {isBrandHero ? (
          <div className="max-w-3xl">
            {/* Category Badge */}
            <Badge variant="accent">
              {project.displayCategory}
            </Badge>

            {/* Project Title */}
            <div className="mt-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Accent rule */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
              <div className="hidden sm:block flex-1 h-px bg-border"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-text-body leading-relaxed mt-6 max-w-xl">
              {project.description}
            </p>

            {/* Metadata */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mt-10">
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
              <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-lg">
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
