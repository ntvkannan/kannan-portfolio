'use client';

import Image from "@/app/components/foundation/Image";

export default function WorkflowSteps({ steps }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="space-y-10 md:space-y-12">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Step Number and Title */}
          <div className="flex-shrink-0 md:w-72">
            <div className="flex items-baseline gap-4 md:gap-5">
              <span className="text-2xl sm:text-3xl font-bold text-accent flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-base sm:text-lg text-text-secondary mt-2 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Step Visual (if image provided) */}
          {step.image && typeof step.image === 'string' && (
            <div className="flex-1 w-full min-w-0">
              <Image
                src={step.image}
                alt={step.imageAlt || `Step ${index + 1}: ${step.title}`}
                ratio="16:9"
                rounded="lg"
              />
            </div>
          )}

          {/* No image - show points if available */}
          {!step.image && step.points && (
            <div className="flex-1 space-y-3">
              {step.points.map((point, pidx) => (
                <p key={pidx} className="text-base sm:text-lg text-text-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Step Connection Indicators */}
      <div className="hidden md:block space-y-4">
        {steps.length > 1 && (
          <div className="flex justify-center py-4">
            <div className="text-center">
              {Array.from({ length: steps.length - 1 }).map((_, i) => (
                <div key={i} className="text-text-muted mb-3">↓</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
