// Images shown in the collage marquee (CollageMarquee component).
//
// width/height must match each file's real pixel dimensions — they're
// used to size the image immediately (correct aspect ratio, no layout
// shift) without waiting for it to download. If a placeholder is later
// replaced with an image of different dimensions, update its
// width/height here too.
//
// To add another image: drop the file in public/images/collage/ and add
// one entry below. No component changes needed.
export const collageImages = [
  { src: "/images/collage/collage1.png", width: 465, height: 489 },
  { src: "/images/collage/collage2.png", width: 465, height: 489 },
  { src: "/images/collage/collage3.png", width: 465, height: 489 },
  { src: "/images/collage/collage4.png", width: 465, height: 489 },
  { src: "/images/collage/collage5.png", width: 465, height: 489 },
];
