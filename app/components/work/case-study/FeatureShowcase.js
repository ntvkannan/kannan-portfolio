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
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {/* Content */}
          <div className="max-w-4xl">
            {feature.eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                {feature.eyebrow}
              </p>
            )}
            <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              {feature.title}
            </h3>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-6">
              {feature.description}
            </p>
            {feature.points && (
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="text-base sm:text-lg text-text-secondary flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          {feature.image && typeof feature.image === 'string' && (
            <div className="w-full">
              <Image
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                ratio="16:9"
                rounded="lg"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Multiple features
  return (
    <div
      className={
        layout === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12'
          : 'space-y-14'
      }
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={
            feature.image
              ? 'grid grid-cols-1 gap-6 md:gap-8'
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
            <div className="w-full">
              <Image
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                ratio="16:9"
                rounded="lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
