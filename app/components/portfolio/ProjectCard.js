import NextLink from "next/link";
import Badge from "@/app/components/foundation/Badge";
import Image from "@/app/components/foundation/Image";
import ProjectResourceLinks from "@/app/components/portfolio/ProjectResourceLinks";

export default function ProjectCard({ project }) {
  return (
    <article className="group/card flex flex-col">
      {/* Project Image */}
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            ratio="16:9"
            rounded="lg"
            className="transition-transform duration-500 ease-out group-hover/card:scale-105"
          />
        </div>
      )}

      {/* Category Badge */}
      <Badge variant="neutral" className="mb-4">
        {project.displayCategory}
      </Badge>

      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 transition-colors duration-200 group-hover/card:text-accent">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-sm sm:text-base text-text-body mb-4">
        {project.description}
      </p>

      {/* Project Role */}
      <p className="text-xs sm:text-sm text-text-body mb-8">
        <span className="font-semibold text-text-primary">Role:</span> {project.role}
      </p>

      <div className="mt-auto">
        <NextLink
          href={`/work/${project.slug}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-semibold text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 group"
        >
          View Case Study
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </NextLink>

        <ProjectResourceLinks resources={project.resources} className="mt-4" />
      </div>
    </article>
  );
}
