export default function Container({ children, className = "", size = "default" }) {
  const sizeClasses = {
    default: "max-w-5xl",
    wide: "max-w-6xl",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto ${sizeClasses[size]} px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
