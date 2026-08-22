import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
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

export default function ResumePage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="major">
        <Container size="wide">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary leading-tight">
                Kannan Thangavel
              </h1>
              <p className="text-2xl sm:text-3xl text-accent font-semibold">
                Senior UX/UI Designer & Frontend Developer
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                I design digital products, create strong user experiences, and build modern interfaces from design to code.
              </p>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                With 15+ years of experience across frontend development and UI implementation and 10+ years in UX/UI design, I bring together design thinking, product experience, visual design and frontend understanding to create practical digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Download Resume (PDF)
              </a>
              <Link href="/work" variant="secondary">
                View My Work
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Professional Summary */}
      <Section variant="normal">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
                Professional Summary
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-4">
                Experienced UX/UI Designer with a unique blend of design expertise and frontend development capability. Proven track record designing enterprise products and digital experiences for diverse audiences.
              </p>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                Core strengths include user experience strategy, information architecture, interface design, design systems, and modern frontend technologies. Comfortable leading design initiatives, collaborating with engineering teams, and translating design concepts into production-ready code.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section variant="normal">
        <Container size="wide">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {careerTimeline.map((role, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-6 py-0">
                  <div className="mb-3">
                    <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                      {role.period}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-1">
                      {role.role}
                    </h3>
                    <p className="text-base sm:text-lg text-text-secondary">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <p className="text-lg text-text-secondary leading-relaxed mt-2">
                    {role.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Expertise */}
      <Section variant="normal">
        <Container size="wide">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary">
              Core Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-base sm:text-lg text-text-secondary flex items-start gap-3">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Selected Projects */}
      <Section variant="normal">
        <Container size="wide">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary">
              Selected Projects
            </h2>

            <div className="space-y-10">
              {/* OSEL Project */}
              <div className="border-l-4 border-accent pl-6 py-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                  OSEL Signage CMS
                </h3>
                <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                  A comprehensive digital signage management platform designed to help organizations create, manage and control content across displays.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Type:</span> Enterprise SaaS / Signage Management
                  </p>
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Role:</span> UX/UI Design
                  </p>
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Focus:</span> Complex workflow design, layout builder, scheduling, display management, permissions
                  </p>
                </div>
                <Link href="/work/osel-signage-cms" variant="accent">
                  View Case Study
                </Link>
              </div>

              {/* Advocate Project */}
              <div className="border-l-4 border-accent pl-6 py-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                  Advocate Consultation Platform
                </h3>
                <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                  A two-sided mobile consultation platform connecting clients seeking legal advice with available advocates through integrated booking and case management workflows.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Type:</span> Mobile Application / Digital Consultation Platform
                  </p>
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Role:</span> UX/UI Design
                  </p>
                  <p className="text-base text-text-secondary">
                    <span className="font-semibold">Focus:</span> Two-sided platform design, advocate operations, client journey, booking workflows
                  </p>
                </div>
                <Link href="/work/advocate-consultation-platform" variant="accent">
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact & CTA */}
      <Section variant="normal">
        <Container size="wide">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary">
              Let's Work Together
            </h2>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Whether you're looking for a UX/UI Designer, someone who understands the bridge between design and development, or design and frontend expertise for your project, I'd love to discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" variant="primary">
                Get In Touch
              </Link>
              <Link href="/services" variant="secondary">
                View Services
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
