'use client';

import Image from "@/app/components/foundation/Image";

export default function WorkflowSteps({ steps }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  // Check if first step is landscape and rest are portrait
  const firstStepLandscape = steps[0]?.imageRatio !== "9:16";
  const remainingPortrait = steps.length > 1 && steps.slice(1).every(s => s.imageRatio === "9:16");
  const useMixedLayout = firstStepLandscape && remainingPortrait;

  if (useMixedLayout) {
    // Mixed layout: full-width intro step + grouped portrait steps
    const introStep = steps[0];
    const portraitSteps = steps.slice(1);

    return (
      <div className="space-y-14 md:space-y-20">
        {/* Intro step - establishes workflow context */}
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline gap-4 md:gap-5 mb-2">
              <span className="text-2xl sm:text-3xl font-bold text-accent flex-shrink-0">01</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary">
                {introStep.title}
              </h3>
            </div>
            {introStep.description && (
              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl ml-16 sm:ml-20">
                {introStep.description}
              </p>
            )}
          </div>

          {introStep.image && typeof introStep.image === 'string' && (
            <div className="w-full -mx-4 sm:mx-0 px-4 sm:px-0 pt-2">
              <Image
                src={introStep.image}
                alt={introStep.imageAlt || "Step 1: " + introStep.title}
                ratio={introStep.imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          )}
        </div>

        {/* Visual divider / breathing room */}
        <div className="hidden md:block h-px bg-surface-secondary" />

        {/* Portrait steps - 2-column grid: visual sequence */}
        <div>
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-8">
            Workflow Steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
            {portraitSteps.map((step, index) => (
              <div key={index + 1} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg sm:text-xl font-bold text-accent flex-shrink-0">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  {step.description && (
                    <p className="text-sm sm:text-base text-text-body leading-relaxed ml-9 sm:ml-10">
                      {step.description}
                    </p>
                  )}
                </div>

                {step.image && typeof step.image === 'string' && (
                  <div className="w-full -mx-4 sm:mx-0 px-4 sm:px-0 pt-2">
                    <Image
                      src={step.image}
                      alt={step.imageAlt || `Step ${index + 2}: ${step.title}`}
                      ratio={step.imageRatio || "16:9"}
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

  // Original stacked layout for non-mixed workflows
  return (
    <div className="space-y-14 md:space-y-16">
      {steps.map((step, index) => (
        <div key={index} className="space-y-6">
          {/* Step Number and Title */}
          <div className="flex-shrink-0">
            <div className="flex items-baseline gap-4 md:gap-5">
              <span className="text-2xl sm:text-3xl font-bold text-accent flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-base sm:text-lg text-text-body mt-2 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Step Visual (if image provided) */}
          {step.image && typeof step.image === 'string' && (
            <div className={step.imageRatio === "9:16" ? "w-full max-w-md mx-auto" : "w-full -mx-4 sm:mx-0 px-4 sm:px-0"}>
              <Image
                src={step.image}
                alt={step.imageAlt || `Step ${index + 1}: ${step.title}`}
                ratio={step.imageRatio || "16:9"}
                rounded="lg"
              />
            </div>
          )}

          {/* No image - show points if available */}
          {!step.image && step.points && (
            <div className="flex-1 space-y-3">
              {step.points.map((point, pidx) => (
                <p key={pidx} className="text-base sm:text-lg text-text-body leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
