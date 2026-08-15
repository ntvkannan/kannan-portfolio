import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import ProjectCard from "@/app/components/portfolio/ProjectCard";

function getRelatedProjects(currentProject, allProjects) {
  // Filter out the current project
  const filtered = allProjects.filter((p) => p.slug !== currentProject.slug);

  // Priority 1: Same category
  const sameCategory = filtered.filter((p) => p.category === currentProject.category);

  // Priority 2: Featured projects (if needed)
  const featured = filtered.filter((p) => p.featured && p.category !== currentProject.category);

  // Priority 3: Other projects
  const others = filtered.filter(
    (p) => p.category !== currentProject.category && !p.featured
  );

  // Combine in order of priority, limit to 3
  const related = [...sameCategory, ...featured, ...others].slice(0, 3);

  return related;
}

export default function RelatedProjects({ currentProject, allProjects }) {
  const relatedProjects = getRelatedProjects(currentProject, allProjects);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <Section variant="normal">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-10">
          Related Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
