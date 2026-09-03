import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import ServiceCategory from "./ServiceCategory";

export default function ServiceGrid({ categories }) {
  return (
    <Section variant="normal" className="-mt-6 md:-mt-8 lg:-mt-12">
      <Container size="wide">
        {/* 2x2 from md up so the four categories stay balanced with no orphan row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {categories.map((category) => (
            <ServiceCategory key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
