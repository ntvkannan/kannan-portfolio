import ProjectCard from "@/app/components/portfolio/ProjectCard";

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
