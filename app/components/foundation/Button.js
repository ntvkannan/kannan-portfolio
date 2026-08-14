export default function Button({
  variant = "primary",
  disabled = false,
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-button font-medium text-sm sm:text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-accent-hover focus-visible:outline-accent active:bg-accent-hover",
    secondary:
      "bg-transparent border border-border-strong text-text-primary hover:bg-surface-secondary focus-visible:outline-accent active:bg-surface-secondary",
  };

  const heightStyles = "h-11 sm:h-12 px-5 sm:px-6";

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${heightStyles} ${className}`;

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
