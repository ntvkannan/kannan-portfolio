export default function Badge({
  children,
  variant = "neutral",
  className = "",
}) {
  const variantStyles = {
    neutral: "bg-surface-secondary text-text-primary",
    accent: "bg-accent text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    error: "bg-error text-white",
  };

  const baseStyles =
    "inline-block rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap";

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={finalClassName}>{children}</span>;
}
