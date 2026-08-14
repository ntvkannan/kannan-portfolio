import NextImage from "next/image";

export default function Image({
  src,
  alt,
  ratio = "4:3",
  rounded = "md",
  width,
  height,
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
    "1:1": "aspect-square",
  };

  const finalClassName = `${roundedStyles[rounded]} ${aspectRatioStyles[ratio]} overflow-hidden ${className}`;

  if (!alt) {
    throw new Error("Image component requires an alt prop");
  }

  return (
    <div className={finalClassName}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
}
