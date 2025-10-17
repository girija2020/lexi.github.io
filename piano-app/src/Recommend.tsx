import React, { useEffect, useState } from "react";
import Review from './essentials/Review'; // adjust if your file is named timeline.tsx
import type { ReviewItem } from './essentials/Review';
import './Rating.css';
import { Alert } from "react-bootstrap";
// import axios from "axios";
// const STORAGE_KEY = 'myapp.reviews.v1';
const uid = (p = 'r') => `${p}-${Math.random().toString(36).slice(2, 9)}`;

export default function Recommend() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]); // start empty

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/review");
        if (!res.status) throw new Error(`Failed to fetch: ${res.status}`);
        const data = (await res.json()).result as ReviewItem[];
        if (mounted && Array.isArray(data)) setReviews(data);
      } catch (err) {
        console.error("Could not load reviews:", err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);


  async function handleAdd(payload: {
    description: string;
    rating?: number;
    date?: string;
    author: string;
  }) {
    const item: ReviewItem = {
      id: uid(),
      date: payload.date ?? new Date().toISOString().slice(0, 10),
      description: payload.description,
      rating: payload.rating ?? 5,
      author: payload.author,
    };
    
    setReviews((prev) => [item, ...prev]);
    const response = await fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
    });

  const result = await response.json();
  console.log(result);
  
  }

  return (
    <main>
      <div>
        <section>
          <ReviewForm onAdd={handleAdd} />
        </section>

          <h2>What people say ({reviews.length})</h2>
    </div>
    <Review items={reviews} />
    </main>
    
  );
}

function ReviewForm({
  onAdd,
}: {
  onAdd: (p: {description: string; rating?: number; date?: string; author: string }) => void;
}) {

  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState<number | undefined>(5);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim()) {
      window.alert("Please enter your name");
      return;
    }

    if (!description.trim()) {
      window.alert("Please enter a description");
      return;
    }


    onAdd({
      author: author.trim(),
      description: description.trim(),
      rating,
    });
    setAuthor('');
    setDescription('');
    setRating(5);
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "grey", padding: "1rem", borderRadius: "5px" }}>
      <br></br>
      <br></br>
      <h2>Leave a recommendation</h2>


      <label>
        <span>Your name :   </span>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your name" />
      </label>
      <br></br>
      <br></br>

      <label>
        <span>Rating   </span>
        <div>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={rating && rating >= n ? 'on' : 'off'}
              onClick={() => setRating(n)}
            >
              ★
            </button>
          ))}
        </div>
      </label>
      <br></br>

      <label>
        <span>Recommendation : </span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Write your recommendation..."
        />
      </label>


      {error && <div className="error">{error}</div>}

      <br></br>
      <br></br>


      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}
