import Badge from "@/app/components/foundation/Badge";
import Link from "@/app/components/foundation/Link";
import Image from "@/app/components/foundation/Image";

export default function ProjectCard({ project }) {
  return (
    <article>
      {/* Project Image */}
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

      {/* Category Badge */}
      <Badge variant="neutral" className="mb-3">
        {project.displayCategory}
      </Badge>

      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-sm sm:text-base text-text-body mb-3">
        {project.description}
      </p>

      {/* Project Role */}
      <p className="text-xs sm:text-sm text-text-body mb-6">
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
