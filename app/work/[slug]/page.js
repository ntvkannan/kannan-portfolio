import { notFound } from "next/navigation";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import ProjectPageHero from "@/app/components/work/ProjectPageHero";
import ProjectOverview from "@/app/components/work/ProjectOverview";
import ProjectCaseStudy from "@/app/components/work/ProjectCaseStudy";
import RelatedProjects from "@/app/components/work/RelatedProjects";
import ContactCTA from "@/app/components/home/ContactCTA";
import { projects } from "@/app/data/projects";
import { caseStudies } from "@/app/data/caseStudies";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Kannan Thangavel`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: `${project.title} project image`,
        },
      ],
    },
  };
}

function ProjectStructuredData({ project }) {
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://kannanthangavel.com/work/${project.slug}`,
    image: `https://kannanthangavel.com${project.image}`,
    creator: {
      "@type": "Person",
      name: "Kannan Thangavel",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
    />
  );
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const caseStudy = caseStudies[resolvedParams.slug];

  return (
    <>
      <ProjectStructuredData project={project} />

      {/* Breadcrumb */}
      <Section variant="small">
        <Container>
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary" aria-label="Breadcrumb">
            <a href="/" className="text-text-secondary hover:text-text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/work" className="text-text-secondary hover:text-text-primary transition-colors">
              Work
            </a>
            <span>/</span>
            <span className="text-text-primary font-medium">{project.title}</span>
          </nav>
        </Container>
      </Section>

      {/* Project Hero */}
      <ProjectPageHero project={project} />

      {/* Project Overview */}
      {caseStudy && <ProjectOverview project={project} caseStudy={caseStudy} />}

      {/* Case Study Content */}
      {caseStudy && <ProjectCaseStudy caseStudy={caseStudy} />}

      {/* Related Projects */}
      <RelatedProjects currentProject={project} allProjects={projects} />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
