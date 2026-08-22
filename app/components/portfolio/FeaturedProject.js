import Badge from "@/app/components/foundation/Badge";
import Link from "@/app/components/foundation/Link";
import Image from "@/app/components/foundation/Image";

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <div className="mb-16">
      {/* Featured Project Image */}
      <div className="mb-6">
        <Image
          src={project.image}
          alt={`${project.title} project image`}
          ratio="16:9"
          rounded="lg"
        />
      </div>

      {/* Featured Project Content */}
      <div className="max-w-2xl">
        {/* Category Badge */}
        <Badge variant="accent" className="mb-4">
          {project.displayCategory}
        </Badge>

        {/* Project Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
          {project.title}
        </h2>

        {/* Project Description */}
        <p className="text-lg text-text-secondary mb-6">
          {project.description}
        </p>

        {/* Project Metadata */}
        <div className="flex flex-col sm:flex-row gap-8 text-sm text-text-secondary mb-6">
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
        <Link href={`/work/${project.slug}`} color="accent">
          View Case Study →
        </Link>
      </div>
    </div>
  );
}
