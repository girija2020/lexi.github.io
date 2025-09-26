import React, { useEffect, useState } from "react";
import "./essentials/Contact.css";
import "./essentials/NavBar.css"

const CONTACT_FIELDS = [
  { label: "Personal Email", value: "Lkshmgrj@gmail.com" },
  { label: "Phone", value: "+1 (508) 454-7831" },
  { label: "University Email", value: "dlgirija@bu.edu" },
  { label: "Location", value: "Boston, USA" },
];

const NUM_WORDS = 28; // how many "lexi" words around the circle

const Contact: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger animation of fields once mounted
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const words = Array.from({ length: NUM_WORDS }).map((_, i) => ({
    id: i,
    text: "yayy",
  }));

  return (
    <div className="contact-page">
      <div className="circle-stage">
        {/* rotating ring of words */}
        <div className="words-ring" aria-hidden>
        {words.map((w, i) => {
        const angle = (360 / NUM_WORDS) * i;
        // Center word at the ring center, rotate to angle, move outward by --ring-radius,
        // then rotate back so the text is upright.
        const transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(calc(-1 * var(--ring-radius))) rotate(-${angle}deg)`;
        return (
            <div
            key={w.id}
            className="ring-word"
            style={{
                transform,
                animationDelay: `${(i % 4) * 0.12}s`,
                // debug helpers you can remove later:
                // outline: "1px solid rgba(255,255,255,0.15)"
            }}
            data-i={i}
            >
            {w.text}
            </div>
        );
        })}

        </div>

        {/* center card inside the ring */}
        <div className="contact-card" role="region" aria-label="Contact information">
          <h2 className="card-title">Get in touch</h2>

          <div className="fields">
            {CONTACT_FIELDS.map((f, i) => (
              <div
                key={f.label}
                className={`field ${mounted ? "in" : ""}`}
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <div className="field-label">{f.label}</div>
                <div className="field-value">{f.value}</div>
              </div>
            ))}
          </div>

          <div className="cta-row">
            <a className="btn" href={`mailto:${CONTACT_FIELDS[0].value}`}>
              Email me
            </a>
            <a className="btn ghost" href={`mailto:${CONTACT_FIELDS[2].value}`}>
              University Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
