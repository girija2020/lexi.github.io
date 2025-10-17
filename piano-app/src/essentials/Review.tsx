// File: timeline.tsx
// A responsive, accessible React + TypeScript timeline component.
// Default export is the Timeline component. Place this file at src/components/timeline.tsx

import React from 'react';
import './Review.css';

export type ReviewItem = {
  id?: string;
  date: string; // e.g. "Mar 2024" or "2024-03-12"
  description: string;
  rating?: number;
  author: string;
};

type Props = {
  items: ReviewItem[];
  className?: string;
};

const Review: React.FC<Props> = ({ items, className = ''}) => {
  return (
    <section className={`Review ${className}`} aria-label="Review">
      <ol className="review-list">
        {items.map((item, index) => {
          return (
            <li
              key={item.id ?? `${index}-${item.date}-${item.author}`}
              className={`review-item`}
            >

              <div className="review-content" tabIndex={0}>
                <time className="review-date">{item.date}</time>
                <h3 className="review-title">{item.author}</h3>
                {item.rating && <h4 className="review-rating">{item.rating}</h4>}
                {item.description && <p className="review-description">{item.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Review;
