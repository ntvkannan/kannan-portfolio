import NextLink from "next/link";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Link from "@/app/components/foundation/Link";
import { careerTimeline, skills } from "@/app/data/experience";

export const metadata = {
  title: "Resume — Kannan Thangavel",
  description: "Senior UX/UI Designer & Frontend Developer. Download resume or view my complete professional background, experience, and skills.",
  openGraph: {
    title: "Resume — Kannan Thangavel",
    description: "Senior UX/UI Designer & Frontend Developer. Download resume or view professional background and experience.",
    url: "/resume",
    type: "website",
  },
};

const projects = [
  {
    title: "OSEL Signage CMS",
    description: "A comprehensive digital signage management platform designed to help organizations create, manage and control content across displays.",
    type: "Enterprise SaaS / Signage Management",
    role: "UX/UI Design",
    focus: "Complex workflow design, layout builder, scheduling, display management, permissions",
    href: "/work/osel-signage-cms",
  },
  {
    title: "Advocate Consultation Platform",
    description: "A two-sided mobile consultation platform connecting clients seeking legal advice with available advocates through integrated booking and case management workflows.",
    type: "Mobile Application / Digital Consultation Platform",
    role: "UX/UI Design",
    focus: "Two-sided platform design, advocate operations, client journey, booking workflows",
    href: "/work/advocate-consultation-platform",
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="major" className="relative overflow-hidden !pb-8 lg:!pb-10">
        {/* Soft form, lower-left - solid fill + blur, no gradient */}
        <div
          className="hidden sm:block absolute -bottom-40 -left-32 w-[440px] h-[440px] rounded-full z-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(11, 26, 82, 0.05)', filter: 'blur(75px)' }}
        ></div>

        {/* Faint outlined ring, upper-right */}
        <div className="hidden sm:block absolute -top-24 right-[-90px] w-[380px] h-[380px] rounded-full border border-accent-hover/15 z-0 pointer-events-none"></div>

        {/* Restrained dot grid, lower-right */}
        <div
          className="hidden md:block absolute bottom-6 right-[8%] w-[190px] h-[190px] z-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            opacity: 0.2,
            maskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 75%)',
          }}
        ></div>

        <Container size="wide" className="relative z-10">
          <div className="max-w-5xl">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight">
                Kannan Thangavel
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold">
                Senior UX/UI Designer & Frontend Developer
              </p>
            </div>

            <div className="flex items-center gap-4 my-6">
              <div className="w-14 h-1 bg-accent rounded-full flex-shrink-0"></div>
              <div className="hidden sm:block flex-1 h-px bg-border"></div>
            </div>

            <div className="space-y-5 max-w-2xl">
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                I design digital products, create strong user experiences, and build modern interfaces from design to code.
              </p>
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                With 15+ years of experience across frontend development and UI implementation and 10+ years in UX/UI design, I bring together design thinking, product experience, visual design and frontend understanding to create practical digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Download Resume (PDF)
              </a>
              <NextLink
                href="/work"
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                View My Work
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Professional Summary */}
      <Section variant="small">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 lg:items-start">
            <div className="lg:col-span-2">
              <SectionHeader>
                Professional Summary
              </SectionHeader>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                Experienced UX/UI Designer with a unique blend of design expertise and frontend development capability. Proven track record designing enterprise products and digital experiences for diverse audiences.
              </p>
              <p className="text-lg sm:text-xl text-text-body leading-relaxed">
                Core strengths include user experience strategy, information architecture, interface design, design systems, and modern frontend technologies. Comfortable leading design initiatives, collaborating with engineering teams, and translating design concepts into production-ready code.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section variant="small">
        <Container size="wide">
          <SectionHeader className="mb-12">
            Professional Experience
          </SectionHeader>

          <div>
            {careerTimeline.map((role, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-10 py-8 ${
                  idx < careerTimeline.length - 1 ? "border-b border-border" : ""
                } ${idx === 0 ? "pt-0" : ""}`}
              >
                <div>
                  <div className="w-6 h-0.5 bg-accent rounded-full mb-3"></div>
                  <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                    {role.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-1">
                    {role.role}
                  </h3>
                  <p className="text-base sm:text-lg text-text-body mb-3">
                    {role.company} · {role.location}
                  </p>
                  <p className="text-lg text-text-body leading-relaxed max-w-3xl">
                    {role.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Expertise */}
      <Section variant="small">
        <Container size="wide">
          <SectionHeader className="mb-12">
            Core Expertise
          </SectionHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {skills.slice(0, 3).map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {skillGroup.category}
                </h3>
                <p className="text-base text-text-body leading-relaxed">
                  {skillGroup.items.join(", ")}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-12 pt-8 border-t border-border max-w-2xl">
            {skills.slice(3).map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {skillGroup.category}
                </h3>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  {skillGroup.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Selected Projects */}
      <Section variant="small">
        <Container size="wide">
          <SectionHeader className="mb-12">
            Selected Projects
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {projects.map((project) => (
              <div key={project.href} className="max-w-2xl">
                <p className="text-sm font-semibold text-accent mb-3">
                  Type: {project.type}
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-text-body mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-1">Role:</p>
                    <p className="text-base text-text-body">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-1">Focus:</p>
                    <p className="text-base text-text-body">{project.focus}</p>
                  </div>
                </div>
                <Link href={project.href} color="accent" className="font-medium">
                  View Case Study
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact & CTA */}
      <Section variant="small">
        <Container size="wide">
          <div className="max-w-5xl">
            <SectionHeader className="mb-6">
              Let's Work Together
            </SectionHeader>

            <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-2xl mb-8">
              Whether you're looking for a UX/UI Designer, someone who understands the bridge between design and development, or design and frontend expertise for your project, I'd love to discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Get In Touch
              </NextLink>
              <NextLink
                href="/services"
                className="inline-flex items-center justify-center rounded-button h-11 sm:h-12 px-5 sm:px-6 bg-transparent border border-border-strong text-text-primary font-medium text-sm sm:text-base hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                View Services
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
