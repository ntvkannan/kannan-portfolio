'use client';

export default function FlowDiagram({ items, layout = 'horizontal', variant = 'simple' }) {
  if (!items || items.length === 0) {
    return null;
  }

  if (variant === 'ecosystem') {
    return (
      <div className="space-y-5">
        {items.map((layer, index) => (
          <div key={index}>
            <div className="bg-surface-secondary rounded-lg p-7 sm:p-8 mb-3">
              <h3 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                {layer.label}
              </h3>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {layer.items?.join(', ') || layer.description}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="flex justify-center py-3">
                <div className="text-text-muted text-xl">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Simple horizontal/vertical flow
  return (
    <div
      className={
        layout === 'horizontal'
          ? 'flex flex-wrap items-center justify-center gap-6 sm:gap-8'
          : 'flex flex-col items-center gap-6'
      }
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-5 sm:gap-6">
          <div className="text-center">
            <p className="font-semibold text-text-primary text-base sm:text-lg">
              {item.label}
            </p>
            {item.description && (
              <p className="text-sm sm:text-base text-text-muted mt-2">
                {item.description}
              </p>
            )}
          </div>
          {index < items.length - 1 && (
            <div
              className={
                layout === 'horizontal'
                  ? 'text-text-muted text-2xl flex-shrink-0'
                  : 'text-text-muted text-2xl'
              }
            >
              {layout === 'horizontal' ? '→' : '↓'}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
