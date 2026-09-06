import NextLink from "next/link";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";
import ProjectResourceLinks from "@/app/components/portfolio/ProjectResourceLinks";

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-center">
      {/* Content */}
      <div className="order-2 lg:order-1 lg:col-span-2">
        {/* Category Badge */}
        <Badge variant="neutral" className="mb-4">
          {project.displayCategory}
        </Badge>

        {/* Project Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
          {project.title}
        </h2>

        {/* Project Description */}
        <p className="text-lg text-text-body mb-6">
          {project.description}
        </p>

        {/* Project Metadata */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm text-text-body mb-8">
          <div>
            <p className="font-semibold text-text-primary">Role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="font-semibold text-text-primary">Type</p>
            <p>{project.type}</p>
          </div>
        </div>

        {/* CTA Link */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <NextLink
            href={`/work/${project.slug}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-semibold text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 group"
          >
            View Case Study
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </NextLink>

          <ProjectResourceLinks resources={project.resources} />
        </div>
      </div>

      {/* Image */}
      {project.image && (
        <div className="order-1 lg:order-2 lg:col-span-3">
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            ratio="16:9"
            rounded="lg"
          />
        </div>
      )}
    </div>
  );
}
