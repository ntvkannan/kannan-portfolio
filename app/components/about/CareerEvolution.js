import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";

// Six simple line icons, one per stage. Kept to the same stroke treatment
// already used for resource-link icons elsewhere (1.75px stroke, rounded
// caps/joins, no fill) so this section doesn't introduce a second icon
// language. Every icon is decorative — the title/description already say
// what the stage is, so no meaning lives only in the glyph.
const icons = {
  visualDesign: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  frontend: (
    <>
      <path d="M9 18l-6-6 6-6" />
      <path d="M15 6l6 6-6 6" />
    </>
  ),
  uxui: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  leadership: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20v-.5A5.5 5.5 0 0 1 8 14h2a5.5 5.5 0 0 1 5.5 5.5v.5" />
      <circle cx="17.5" cy="8.5" r="2.5" />
      <path d="M16 14.5A5 5 0 0 1 21.5 19.5" />
    </>
  ),
  product: (
    <>
      <path d="M12 2.5c2 2 3.25 4.9 3.25 8 0 2-.5 3.5-1 4.5l-2.25 3-2.25-3c-.5-1-1-2.5-1-4.5 0-3.1 1.25-6 3.25-8Z" />
      <path d="M9.25 15.5 7 17.25 8 14" />
      <path d="M14.75 15.5 17 17.25l-1-3.25" />
      <circle cx="12" cy="9.5" r="1.4" />
    </>
  ),
};

const stages = [
  {
    icon: "visualDesign",
    title: "Visual Design",
    description: "Creative foundations",
  },
  {
    icon: "web",
    title: "Web",
    description: "Digital experiences",
  },
  {
    icon: "frontend",
    title: "Frontend",
    description: "Technical execution",
  },
  {
    icon: "uxui",
    title: "UX/UI",
    description: "User-centered design",
  },
  {
    icon: "leadership",
    title: "UX Leadership",
    description: "Teams & strategy",
  },
  {
    icon: "product",
    title: "Product Design",
    description: "Users + Business + Technology",
  },
];

// Decorative arrow between consecutive stages. A single glyph, rotated per
// breakpoint via CSS below (down on mobile's vertical stack, diagonal on
// the tablet/desktop rising layouts) rather than three separate icons.
function StepConnector() {
  return (
    <svg
      className="career-path__connector"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v16" />
      <path d="M6 14l6 6 6-6" />
    </svg>
  );
}

export default function CareerEvolution() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <SectionHeader
          eyebrow="From Ideas to Impact"
          supporting="Each step built on the previous one — from visual foundations to creating impactful digital products."
          className="mb-14 lg:mb-16"
        >
          Growing with design, technology and people
        </SectionHeader>

        <ol className="career-path" aria-label="Career progression across six stages">
          {stages.map((stage, index) => {
            const isLast = index === stages.length - 1;
            // A restrained intensity ramp using only the existing accent
            // token — each stage's icon circle is a slightly stronger tint
            // than the last, arriving at a solid-filled circle for Product
            // Design. That progression of weight (not size or new color)
            // is what signals "growing responsibility" toward the destination.
            const iconBackground = isLast
              ? "var(--color-accent)"
              : `color-mix(in srgb, var(--color-accent) ${10 + index * 10}%, var(--color-surface))`;

            return (
              <li
                key={stage.title}
                className="career-path__step"
                style={{
                  "--step-index": index,
                  "--step-row-index": index % 3,
                }}
              >
                {index > 0 && <StepConnector />}

                <div
                  className="career-path__icon"
                  style={{ backgroundColor: iconBackground }}
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isLast ? "white" : "var(--color-accent)"}
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[stage.icon]}
                  </svg>
                </div>

                <p className="text-sm font-semibold text-text-body mb-1" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary leading-snug mb-1">
                  <span className="sr-only">Stage {index + 1}: </span>
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  {stage.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
