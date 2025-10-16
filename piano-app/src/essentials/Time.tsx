// File: timeline.tsx
// A responsive, accessible React + TypeScript timeline component.
// Default export is the Timeline component. Place this file at src/components/timeline.tsx

import React from 'react';

export type TimelineItem = {
  id?: string;
  date: string; // e.g. "Mar 2024" or "2024-03-12"
  title: string;
  subtitle?: string;
  description?: string;
  // optional string for a CSS classname for an icon or emoji; consumer can pass JSX too
  icon?: React.ReactNode;
};

type Props = {
  items: TimelineItem[];
  className?: string;
  /**
   * If true, items appear stacked on mobile and alternate sides on wide screens (default).
   * If false, items will always line up on the left.
   */
  alternateOnDesktop?: boolean;
};

const Time: React.FC<Props> = ({ items, className = '', alternateOnDesktop = true }) => {
  return (
    <section className={`timeline ${className}`} aria-label="Timeline">
      <ol className="timeline-list">
        {items.map((item, index) => {
          const sideClass = alternateOnDesktop ? (index % 2 === 0 ? 'left' : 'right') : 'left';
          return (
            <li
              key={item.id ?? `${index}-${item.date}-${item.title}`}
              className={`timeline-item ${sideClass}`}
            >
              <div className="marker" aria-hidden>
                {item.icon ? <span className="marker-icon">{item.icon}</span> : <span className="marker-dot" />}
              </div>

              <div className="timeline-content" tabIndex={0}>
                <time className="timeline-date">{item.date}</time>
                <h3 className="timeline-title">{item.title}</h3>
                {item.subtitle && <h4 className="timeline-subtitle">{item.subtitle}</h4>}
                {item.description && <p className="timeline-description">{item.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Time;
