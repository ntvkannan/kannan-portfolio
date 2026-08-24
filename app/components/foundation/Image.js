import NextImage from "next/image";

export default function Image({
  src,
  alt,
  ratio = "4:3",
  rounded = "md",
  width,
  height,
  sizes,
  priority = false,
  loading = "lazy",
  className = "",
  ...props
}) {
  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  const aspectRatioStyles = {
    "4:3": "aspect-video",
    "3:2": "aspect-[3/2]",
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16]",
    "1:1": "aspect-square",
    "auto": "",
  };

  // Default dimensions keyed to aspect ratio when not explicitly provided
  const defaultDimensions = {
    "4:3": { w: 1200, h: 900 },
    "3:2": { w: 1200, h: 800 },
    "16:9": { w: 1200, h: 675 },
    "9:16": { w: 540, h: 960 },
    "1:1": { w: 1200, h: 1200 },
  };

  const dims = defaultDimensions[ratio] || defaultDimensions["4:3"];
  const finalWidth = width || dims.w;
  const finalHeight = height || dims.h;

  const finalClassName = `${roundedStyles[rounded]} ${aspectRatioStyles[ratio]} overflow-hidden ${className}`;

  if (!alt) {
    throw new Error("Image component requires an alt prop");
  }

  // Return null if src is invalid to prevent passing empty strings to NextImage
  if (!src || typeof src !== "string" || src.trim() === "") {
    return null;
  }

  return (
    <div className={finalClassName}>
      <NextImage
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : loading}
        className={`w-full h-auto ${ratio === 'auto' ? 'object-contain' : 'object-cover'}`}
        {...props}
      />
    </div>
  );
}
