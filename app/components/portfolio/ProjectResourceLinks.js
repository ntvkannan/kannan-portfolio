// Secondary links to a project's public resources (prototype, PDF, live site,
// developer implementation). Renders nothing unless a project defines
// `resources`, so it stays inert for every project that has none.

const iconProps = {
  className: "w-4 h-4 flex-shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const icons = {
  // Prototype: play control inside a frame
  figma: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5V8.5z" />
    </svg>
  ),
  // Document with folded corner
  pdf: (
    <svg {...iconProps}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  ),
  // Live site
  website: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </svg>
  ),
  // Developer implementation: code brackets
  developer: (
    <svg {...iconProps}>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  ),
};

export default function ProjectResourceLinks({ resources, className = "" }) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <span className="text-xs font-medium text-text-muted">
        Resources
      </span>
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {resources.map((resource) => (
          <li key={resource.href}>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${resource.title} (opens in new tab)`}
              className="inline-flex items-center gap-1.5 min-h-11 text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              {icons[resource.type]}
              {resource.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
