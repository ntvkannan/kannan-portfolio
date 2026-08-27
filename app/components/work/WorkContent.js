"use client";

import { useState } from "react";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import WorkFilter from "@/app/components/portfolio/WorkFilter";
import FeaturedProject from "@/app/components/portfolio/FeaturedProject";
import ProjectGrid from "@/app/components/portfolio/ProjectGrid";
import { projects } from "@/app/data/projects";

export default function WorkContent() {
  const [activeFilter, setActiveFilter] = useState(null);

  const featuredProject = projects.find(p => p.featured);
  const showFeatured = !activeFilter || featuredProject?.category === activeFilter;

  const filteredProjects = activeFilter
    ? projects.filter(p => p.category === activeFilter && !p.featured)
    : projects.filter(p => !p.featured);

  return (
    <>
      {/* Filter Section */}
      <Section variant="normal">
        <Container>
          <WorkFilter onFilterChange={setActiveFilter} />
        </Container>
      </Section>

      {/* Featured Project */}
      <Section variant="major">
        <Container>
          <FeaturedProject project={showFeatured ? featuredProject : null} />
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section variant="normal">
        <Container>
          <ProjectGrid projects={filteredProjects} />
        </Container>
      </Section>
    </>
  );
}
