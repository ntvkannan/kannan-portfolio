import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function CareerTimeline({ timeline }) {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            Career Timeline
          </h2>

          {/* Desktop timeline */}
          <div className="hidden sm:block">
            <ol className="space-y-8">
              {timeline.map((entry, index) => (
                <li key={index}>
                  <div className="border-l-2 border-border pl-6">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                      {entry.period}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1">
                      {entry.role}
                    </h3>
                    <p className="text-base text-text-secondary mb-2">
                      {entry.company}
                    </p>
                    <p className="text-sm text-text-secondary mb-3">
                      {entry.location}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {entry.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile timeline */}
          <div className="sm:hidden">
            <ol className="space-y-6">
              {timeline.map((entry, index) => (
                <li key={index}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-accent mt-1"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                        {entry.period}
                      </p>
                      <h3 className="text-base font-semibold text-text-primary mb-1">
                        {entry.role}
                      </h3>
                      <p className="text-sm text-text-secondary mb-1">
                        {entry.company}
                      </p>
                      <p className="text-xs text-text-secondary mb-2">
                        {entry.location}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {entry.summary}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
