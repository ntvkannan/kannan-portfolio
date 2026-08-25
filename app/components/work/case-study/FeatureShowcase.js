'use client';

import Image from "@/app/components/foundation/Image";

export default function FeatureShowcase({ features, layout = 'stacked' }) {
  if (!features || features.length === 0) {
    return null;
  }

  // Single feature - full width
  if (features.length === 1) {
    const feature = features[0];
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 md:gap-14">
          {/* Content */}
          <div className="max-w-3xl">
            {feature.eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                {feature.eyebrow}
              </p>
            )}
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-text-primary mb-5">
              {feature.title}
            </h3>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-7">
              {feature.description}
            </p>
            {feature.points && (
              <ul className="space-y-4">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="text-base sm:text-lg text-text-secondary flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          {feature.image && typeof feature.image === 'string' && (
            <div className={feature.imageRatio === "9:16" ? "w-full max-w-xl mx-auto" : "w-full -mx-4 sm:mx-0 px-4 sm:px-0"}>
              <Image
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                ratio={feature.imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Multiple features
  // For portrait images, use stacked layout; for landscape, use configured layout
  const hasPortraitImages = features.some(f => f.imageRatio === "9:16");
  const effectiveLayout = hasPortraitImages ? 'stacked' : layout;

  // Special handling for print applications: certificate full-width, then brochure pair
  const isPrintApplications = layout === 'stacked' && features.length === 3 &&
    features[0].title?.includes('Formal') &&
    features[1].title?.includes('Brochure') &&
    features[2].title?.includes('Brochure');

  if (isPrintApplications) {
    return (
      <div className="space-y-16 md:space-y-20">
        {/* Certificate - full width */}
        <div className="grid grid-cols-1 gap-6 md:gap-10">
          <div>
            {features[0].eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                {features[0].eyebrow}
              </p>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
              {features[0].title}
            </h3>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
              {features[0].description}
            </p>
          </div>
          {features[0].image && (
            <div className="w-full">
              <Image
                src={features[0].image}
                alt={features[0].imageAlt || features[0].title}
                ratio={features[0].imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          )}
        </div>

        {/* Brochure - pair layout */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl sm:text-2xl font-semibold text-text-primary">Brochure</h3>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mt-2">
              Multi-page promotional material extending the visual identity across course information, schedules and supporting content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {features.slice(1).map((feature, index) => (
              <div key={index} className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                </div>
                {feature.image && (
                  <div className="w-full">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt || feature.title}
                      ratio={feature.imageRatio || "16:9"}
                      rounded="lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        effectiveLayout === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'
          : 'space-y-16 md:space-y-20'
      }
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={
            feature.image
              ? 'grid grid-cols-1 gap-6 md:gap-10'
              : ''
          }
        >
          {/* Content */}
          <div>
            {feature.eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                {feature.eyebrow}
              </p>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
              {feature.description}
            </p>
            {feature.points && (
              <ul className="space-y-2">
                {feature.points.map((point, pidx) => (
                  <li key={pidx} className="text-sm sm:text-base text-text-secondary flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          {feature.image && typeof feature.image === 'string' && (
            <div className={feature.imageRatio === "9:16" ? "w-full max-w-md mx-auto" : "w-full"}>
              <Image
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                ratio={feature.imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
