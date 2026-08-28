'use client';

import { Fragment } from "react";

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
              <p className="text-lg sm:text-xl text-text-body leading-relaxed font-medium">
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

  // Horizontal flow: one uninterrupted row of equal-width stages on desktop,
  // stacked into a vertical sequence on small screens.
  if (layout === 'horizontal') {
    return (
      <>
        {/* Desktop / tablet: five equal columns, baseline-aligned */}
        <div className="hidden md:flex items-baseline">
          {items.map((item, index) => (
            <Fragment key={index}>
              <div className="flex-1 px-3 text-center">
                <p className="font-semibold text-text-primary text-lg lg:text-xl leading-snug">
                  {item.label}
                </p>
                {item.description && (
                  <p className="text-sm text-text-body mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              {index < items.length - 1 && (
                <div
                  className="flex-shrink-0 text-text-muted text-lg lg:text-xl font-light leading-snug"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile: vertical sequence with connectors */}
        <div className="md:hidden">
          {items.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-text-primary text-lg leading-snug">
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm text-text-body mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
              {index < items.length - 1 && (
                <div
                  className="text-text-muted text-lg font-light my-3"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }

  // Vertical flow: a numbered product-workflow sequence. On wide screens the
  // stages run left-to-right in equal columns and wrap into further rows, which
  // keeps a long workflow compact instead of one very tall centred list.
  const COLS = 3;
  const rows = [];
  for (let i = 0; i < items.length; i += COLS) {
    const rowItems = items.slice(i, i + COLS);
    while (rowItems.length < COLS) {
      rowItems.push(null);
    }
    rows.push({ items: rowItems, offset: i });
  }

  return (
    <>
      {/* Desktop: stepped rows of equal columns */}
      <div className="hidden lg:block space-y-10">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-start">
            {row.items.map((item, i) => (
              <Fragment key={i}>
                <div className="flex-1 px-3">
                  {item && (
                    <>
                      <p className="text-xs font-semibold text-accent mb-2">
                        {String(row.offset + i + 1).padStart(2, '0')}
                      </p>
                      <p className="text-lg font-semibold text-text-primary leading-snug">
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="text-sm text-text-body mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </>
                  )}
                </div>
                {i < COLS - 1 && (
                  <div
                    className="flex-shrink-0 w-10 mt-7 text-center text-text-muted text-lg font-light leading-none"
                    aria-hidden="true"
                  >
                    {item && row.items[i + 1] ? '→' : ''}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* Tablet / mobile: vertical sequence with connectors between stages */}
      <div className="lg:hidden">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-3">
              <span className="flex-shrink-0 text-xs font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-base sm:text-lg font-semibold text-text-primary leading-snug">
                  {item.label}
                </p>
                {item.description && (
                  <p className="text-sm text-text-body mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            {index < items.length - 1 && (
              <div
                className="ml-8 my-2 text-text-muted text-base font-light leading-none"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
