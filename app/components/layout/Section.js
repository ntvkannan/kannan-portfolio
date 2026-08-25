export default function Section({ children, variant = "normal", className = "", id, ...props }) {
  const variantClasses = {
    small: "py-12 sm:py-12 lg:py-16",
    normal: "py-16 sm:py-16 lg:py-24",
    major: "py-20 sm:py-20 lg:py-32",
  };

  return (
    <section id={id} className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </section>
  );
}
