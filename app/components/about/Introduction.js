import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";

export default function Introduction() {
  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-3xl space-y-6">
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            My career has evolved across visual design, web design, frontend development and UX/UI, giving me a broad understanding of how digital experiences are planned, designed and built.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            I have spent more than a decade working in UX/UI and product design, with a longer background in frontend and UI implementation.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Today, I bring those experiences together to design thoughtful digital products and build modern interfaces.
          </p>
        </div>
      </Container>
    </Section>
  );
}
