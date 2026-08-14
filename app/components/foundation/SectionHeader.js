export default function SectionHeader({
  children,
  eyebrow,
  supporting,
  className = "",
}) {
  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary leading-tight">
        {children}
      </h2>
      {supporting && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
          {supporting}
        </p>
      )}
    </div>
  );
}
