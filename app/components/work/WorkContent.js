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
    <Section variant="normal" className="!pt-10 lg:!pt-12">
      <Container>
        {/* Filter */}
        <WorkFilter onFilterChange={setActiveFilter} />

        {/* Featured Project */}
        {showFeatured && featuredProject && (
          <div className="mt-10 lg:mt-12">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Projects Grid */}
        <div className={showFeatured && featuredProject ? "mt-16 lg:mt-20" : "mt-10 lg:mt-12"}>
          <ProjectGrid projects={filteredProjects} />
        </div>
      </Container>
    </Section>
  );
}
