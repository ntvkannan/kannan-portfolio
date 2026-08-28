import Badge from "@/app/components/foundation/Badge";
import Link from "@/app/components/foundation/Link";
import Image from "@/app/components/foundation/Image";

export default function ProjectCard({ project }) {
  return (
    <article className="group/card">
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

      {/* CTA Link */}
      <Link
        href={`/work/${project.slug}`}
        color="accent"
        className="font-medium group"
      >
        <span className="inline-flex items-center gap-1">
          View Case Study
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </article>
  );
}
