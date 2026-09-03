import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function OngoingEngagementNote() {
  return (
    <Section variant="small">
      <Container size="wide">
        <div className="max-w-2xl mx-auto border-l-2 border-accent pl-5 sm:pl-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
            Have ongoing design or website needs?
          </h2>
          <p className="text-text-body leading-relaxed">
            Whether you need UX/UI, branding, visual design, frontend development, or ongoing website support, we can discuss a monthly engagement that works for your requirements and budget.
          </p>
        </div>
      </Container>
    </Section>
  );
}
