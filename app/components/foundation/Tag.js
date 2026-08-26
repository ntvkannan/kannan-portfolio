export default function Tag({
  children,
  className = "",
}) {
  const baseStyles =
    "inline-block rounded-full px-2.5 py-1 text-xs font-medium text-text-body bg-surface-secondary whitespace-nowrap";

  const finalClassName = `${baseStyles} ${className}`;

  return <span className={finalClassName}>{children}</span>;
}
