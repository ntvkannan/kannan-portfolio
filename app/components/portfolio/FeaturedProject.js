import Badge from "@/app/components/foundation/Badge";
import Link from "@/app/components/foundation/Link";
import Image from "@/app/components/foundation/Image";

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
