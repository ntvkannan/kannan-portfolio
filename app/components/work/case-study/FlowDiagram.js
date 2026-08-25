'use client';

export default function FlowDiagram({ items, layout = 'horizontal', variant = 'simple' }) {
  if (!items || items.length === 0) {
    return null;
  }

  if (variant === 'ecosystem') {
    return (
      <div className="space-y-6 sm:space-y-8">
        {items.map((layer, index) => (
          <div key={index} className="space-y-4">
            <div className="bg-surface-secondary rounded-lg p-8 sm:p-10">
              <h3 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-5">
                {layer.label}
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-medium">
                {layer.items?.join(' · ') || layer.description}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="text-text-muted text-2xl font-light">↓</div>
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
          ? 'flex flex-wrap items-center justify-center gap-8 sm:gap-12'
          : 'flex flex-col items-center gap-8 sm:gap-10'
      }
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-8 sm:gap-12">
          <div className="text-center">
            <p className="font-bold text-text-primary text-lg sm:text-2xl">
              {item.label}
            </p>
            {item.description && (
              <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          {index < items.length - 1 && (
            <div
              className={
                layout === 'horizontal'
                  ? 'text-text-muted text-3xl flex-shrink-0 font-light'
                  : 'text-text-muted text-3xl font-light'
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
