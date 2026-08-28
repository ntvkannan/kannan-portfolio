import ProjectCard from "@/app/components/portfolio/ProjectCard";

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-body">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-14 lg:gap-y-16">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
