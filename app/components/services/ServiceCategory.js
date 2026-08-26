import Tag from "@/app/components/foundation/Tag";

export default function ServiceCategory({ category }) {
  return (
    <div className="border border-border rounded-lg p-8 bg-surface hover:border-border-strong transition-colors">
      <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
        {category.title}
      </h3>
      <p className="text-text-body mb-6 leading-relaxed">
        {category.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.services.map((service, index) => (
          <Tag key={index}>{service}</Tag>
        ))}
      </div>
    </div>
  );
}
