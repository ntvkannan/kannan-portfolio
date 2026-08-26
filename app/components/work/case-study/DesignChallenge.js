'use client';

import Image from "@/app/components/foundation/Image";

export default function DesignChallenge({ challenge, number }) {
  if (!challenge) {
    return null;
  }

  // Alternate image position on desktop for editorial variety
  const imageOnRight = number % 2 === 1;

  return (
    <div className={`space-y-8 ${challenge.image ? 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:space-y-0' : ''}`}>
      {/* Content */}
      <div className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}>
        <div className="border-l-4 border-accent pl-8 py-4">
          {number && (
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
              Challenge {number}
            </p>
          )}

          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
            {challenge.title}
          </h3>

          <div className="space-y-7 max-w-2xl">
            {challenge.challenge && (
              <div>
                <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                  Challenge
                </p>
                <p className="text-base sm:text-lg text-text-body leading-relaxed">
                  {challenge.challenge}
                </p>
              </div>
            )}

            {challenge.decision && (
              <div>
                <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                  Design Decision
                </p>
                <p className="text-base sm:text-lg text-text-body leading-relaxed">
                  {challenge.decision}
                </p>
              </div>
            )}

            {challenge.outcome && (
              <div>
                <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                  Result
                </p>
                <p className="text-base sm:text-lg text-text-body leading-relaxed">
                  {challenge.outcome}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Challenge Image (if provided) */}
      {challenge.image && typeof challenge.image === 'string' && (
        <div className={`${imageOnRight ? 'lg:order-2' : 'lg:order-1'} ${challenge.imageRatio === "9:16" ? "w-full max-w-md mx-auto md:mx-0 lg:mx-0" : "w-full"}`}>
          <Image
            src={challenge.image}
            alt={challenge.imageAlt || challenge.title}
            ratio={challenge.imageRatio || "16:9"}
            rounded="lg"
          />
        </div>
      )}
    </div>
  );
}
