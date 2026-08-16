export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kannan Thangavel",
    url: "https://kannanthangavel.com",
    jobTitle: "UX/UI Designer & Frontend Developer",
    sameAs: [
      "https://www.linkedin.com/in/kannan-thangavel/",
      "https://github.com/ntvkannan",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://kannanthangavel.com",
    name: "Kannan Thangavel — Portfolio",
    creator: {
      "@type": "Person",
      name: "Kannan Thangavel",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
