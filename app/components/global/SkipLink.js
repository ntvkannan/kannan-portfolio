export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only"
      style={{
        borderRadius: 'var(--radius-button)',
      }}
    >
      Skip to main content
    </a>
  );
}
