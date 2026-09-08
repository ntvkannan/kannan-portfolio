import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import SectionHeader from "@/app/components/foundation/SectionHeader";
import Link from "@/app/components/foundation/Link";

// Five line icons, one per stage — same 1.75px stroke treatment used
// elsewhere on the site (resource links, the About page's career path) so
// this doesn't introduce a second icon language. Purely decorative: the
// title/description already say what each stage is.
const icons = {
  ux: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20v-.5A5.5 5.5 0 0 1 10.5 14h3A5.5 5.5 0 0 1 19 19.5v.5" />
    </>
  ),
  ui: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <rect x="7" y="9" width="10" height="6" rx="1" />
    </>
  ),
  designSystem: (
    <>
      <path d="M12 3.5 3.5 9l8.5 5.5L20.5 9 12 3.5Z" />
      <path d="M3.5 14 12 19.5 20.5 14" />
    </>
  ),
  frontend: (
    <>
      <path d="M9 18l-6-6 6-6" />
      <path d="M15 6l6 6-6 6" />
    </>
  ),
  deployment: (
    <>
      <path d="M12 2.5c2 2 3.25 4.9 3.25 8 0 2-.5 3.5-1 4.5l-2.25 3-2.25-3c-.5-1-1-2.5-1-4.5 0-3.1 1.25-6 3.25-8Z" />
      <path d="M9.25 15.5 7 17.25 8 14" />
      <path d="M14.75 15.5 17 17.25l-1-3.25" />
      <circle cx="12" cy="9.5" r="1.4" />
    </>
  ),
};

// Decorative connector between consecutive stages: a short line with an
// arrowhead, rotated per breakpoint (down for mobile's vertical stack,
// right for the horizontal tablet/desktop rows) rather than shipping
// separate icons for each orientation.
function StepConnector({ className = "" }) {
  return (
    <svg
      className={`end-to-end__connector ${className}`}
      viewBox="0 0 32 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h22" />
      <path d="M19 3l5 5-5 5" />
    </svg>
  );
}

export default function EndToEndCapability({ capability }) {
  const stages = capability.stages;

  return (
    <Section variant="normal" className="-mt-6 md:-mt-8 lg:-mt-12">
      <Container size="wide">
        <SectionHeader
          eyebrow={capability.subtitle}
          supporting={capability.description}
          className="mb-14 lg:mb-20"
        >
          {capability.title}
        </SectionHeader>

        <ol className="end-to-end" aria-label="End-to-end product design process, five stages">
          {stages.map((stage, index) => {
            const isLast = index === stages.length - 1;
            const isTabletRowStart = index > 0 && index % 3 === 0;
            const iconBackground = isLast
              ? "var(--color-accent)"
              : `color-mix(in srgb, var(--color-accent) ${10 + index * 10}%, var(--color-surface))`;

            return (
              <li key={stage.title} className="end-to-end__step">
                {index > 0 && (
                  <StepConnector
                    className={isTabletRowStart ? "sm:hidden lg:block" : ""}
                  />
                )}

                <div
                  className="end-to-end__icon"
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

        <div className="mt-14 lg:mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm font-semibold text-text-primary uppercase tracking-wide">
            {capability.closingStatement}
          </p>
          <Link
            href="/contact"
            color="accent"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wide inline-flex items-center gap-2"
          >
            {capability.outcomeNote}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
