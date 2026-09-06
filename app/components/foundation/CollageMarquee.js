import Image from "next/image";
import { collageImages } from "@/app/data/collage";

// Seconds of animation per image, so the visual speed stays roughly
// constant as images are added to (or removed from) the data list.
const SECONDS_PER_IMAGE = 5;
const MIN_DURATION = 20;

// How many times the full image sequence is repeated back-to-back in
// the track: [sequence][sequence][sequence]...
//
// The animation only ever translates the track by exactly ONE sequence
// width (see `distancePercent` below), then snaps back and repeats —
// so at every point in the animation there must still be at least one
// full, untranslated sequence remaining ahead of the visible viewport.
// That requires the track to span at least `sequenceWidth + viewportWidth`,
// i.e. (REPEAT_COUNT - 1) sequences must cover the widest realistic
// viewport. At today's (larger) image sizing a sequence is ~1530px wide
// at desktop widths and ~800px at mobile, so 6 copies give 5 sequence-
// widths of headroom (~7600px+) — comfortably covering real displays up
// to 4K, with more headroom than before the images were enlarged. If
// the sequence were ever much narrower (far fewer/smaller images) this
// constant would need raising accordingly.
const SEQUENCE_REPEAT_COUNT = 6;

// A continuous right-to-left image strip. The image sequence is
// repeated SEQUENCE_REPEAT_COUNT times back-to-back ("track") so the
// viewport stays fully covered throughout the animation (see above),
// and translating by exactly one sequence width loops with no visible
// seam, since every copy is pixel-identical. Purely decorative — the
// meaningful content is the static heading/copy/CTA rendered alongside
// it by the caller, so the whole strip is hidden from assistive tech.
export default function CollageMarquee({ className = "" }) {
  if (!collageImages || collageImages.length === 0) return null;

  const track = Array.from({ length: SEQUENCE_REPEAT_COUNT }, () => collageImages).flat();
  const duration = Math.max(collageImages.length * SECONDS_PER_IMAGE, MIN_DURATION);
  const distancePercent = -100 / SEQUENCE_REPEAT_COUNT;

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex w-max animate-collage-marquee items-center"
        style={{
          animationDuration: `${duration}s`,
          "--collage-marquee-distance": `${distancePercent}%`,
        }}
      >
        {/* Spacing is a trailing margin on every item (including the
            last) rather than a flex `gap`, so the track's total width is
            always an exact multiple of one sequence's width — gap alone
            would leave an odd number of gaps for an even item count,
            making the loop distance land short of a true repeat and
            producing a visible stutter at the loop point. */}
        {track.map((image, index) => (
          <div key={index} className="flex-shrink-0 mr-6 sm:mr-8">
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              className="h-36 w-auto rounded-lg object-contain sm:h-48 lg:h-64 xl:h-72"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
