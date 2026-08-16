import Badge from "@/app/components/foundation/Badge";
import Link from "@/app/components/foundation/Link";

export default function ProjectCard({ project }) {
  return (
    <article>
      {/* Project Image */}
      <div className="bg-surface-secondary rounded-lg overflow-hidden mb-4 aspect-video flex items-center justify-center">
        <p className="text-text-muted text-center text-sm">Project image placeholder</p>
      </div>

      {/* Category Badge */}
      <Badge variant="neutral" className="mb-3">
        {project.displayCategory}
      </Badge>

      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-sm sm:text-base text-text-secondary mb-3">
        {project.description}
      </p>

      {/* Project Role */}
      <p className="text-xs sm:text-sm text-text-secondary mb-4">
        <span className="font-semibold text-text-primary">Role:</span> {project.role}
      </p>

      {/* CTA Link */}
      <Link href={`/work/${project.slug}`} color="accent">
        View Case Study →
      </Link>
    </article>
  );
}
