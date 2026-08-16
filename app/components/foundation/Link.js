import NextLink from "next/link";

export default function Link({
  href,
  children,
  showArrow = false,
  color = "accent",
  external = false,
  className = "",
  ...props
}) {
  const colorStyles = {
    accent: "text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    primary: "text-text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  };

  const finalClassName = `${colorStyles[color]} transition-colors duration-200 ${className}`;
  const linkContent = showArrow ? `${children} →` : children;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
        aria-label={`${children} (opens in new tab)`}
        {...props}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={finalClassName}
      {...props}
    >
      {linkContent}
    </NextLink>
  );
}
