import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function CareerTimeline({ timeline }) {
  return (
    <Section variant="normal" className="-mt-4 md:-mt-6 lg:-mt-8">
      <Container size="wide">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
            Career Timeline
          </h2>

          <ol className="space-y-6 sm:space-y-8">
            {timeline.map((entry, index) => (
              <li key={index}>
                <article className="flex gap-4 sm:block sm:border-l-2 sm:border-border sm:pl-6">
                  {/* Connector dot + line (mobile-only, decorative) */}
                  <div className="flex flex-col items-center flex-shrink-0 sm:hidden" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1"></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="pb-2 sm:pb-0">
                    <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-1 sm:mb-2">
                      {entry.period}
                    </p>
                    <h3 className="text-base sm:text-xl font-semibold text-text-primary mb-1">
                      {entry.role}
                    </h3>
                    <p className="text-sm sm:text-base text-text-body mb-1 sm:mb-2">
                      {entry.company}
                    </p>
                    <p className="text-xs sm:text-sm text-text-body mb-2 sm:mb-3">
                      {entry.location}
                    </p>
                    <p className="text-sm text-text-body leading-relaxed">
                      {entry.summary}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
