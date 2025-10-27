
// In ParentPage.tsx
import Time, { type TimelineItem } from './Time';
import './Timeline.css';
const items: TimelineItem[] = [
{ date: 'Sept 2025', title: 'Perpetual Job Search', description: 'Continuously improving through targeted outreach and applications. Open to conversations and opportunities in software engineering, AI, and research.' },
{ date: 'Sept 2024', title: 'Guenther Lab', description: 'Neuroscience Research Assistant — Conducted brain connectivity analyses using MATLAB and the CONN toolbox; built preprocessing pipelines and applied machine learning models (scikit-learn) to identify neural patterns. Designed and administered behavioral/audio experiments to participants, implemented Audio QC improvements, and maintained project code and version control on GitHub.' },
// { date: 'Sept 2024', title: 'Guenther Lab', description: 'Neuroscience Research Assistant — Conducted brain connectivity analyses using MATLAB and the CONN toolbox; built preprocessing pipelines and applied machine learning models to identify neural patterns.' },
{ date: 'Sept 2024', title: 'Boston University', description: 'M.S. in Artificial Intelligence (ongoing) — Focused on mathematical foundations of AI and deep learning. Best Paper Award (Intro to NLP) for research on debiasing word embeddings.' },
// { date: 'Sept 2023', title: 'Graduate Preparation', description: 'Focused on strengthening academic and technical profile for graduate studies. GRE: 335/340; developed projects and research materials for master’s applications.' },
{ date: 'May 2023', title: 'Goldman Sachs', description: 'Software Engineering Intern — Rebuilt a React-based internal logging application, improving performance, reliability, and developer experience.' },
{ date: 'Jan 2023', title: 'Software Engineering Projects', description: 'Designed and implemented full-stack applications (NourishNest, Book Management System) using Java (backend), JavaScript (frontend), and Dockerized microservices; integrated chatbot functionality.' },
{ date: 'Apr 2022', title: 'Smartterra', subtitle: 'Smartterra', description: 'Data & Backend Intern — Developed data processing pipelines and anomaly detection models for agricultural sensor data; contributed to backend APIs and deployments.' },
{ date: 'Oct 2021', title: 'Operating Systems', description: 'Implemented round-robin and priority-based scheduling algorithms as part of OS coursework; validated scheduling changes and measured performance impact.' },
{ date: 'Mar 2021', title: 'DSA', subtitle: 'v0.1', description: 'Built a friend recommendation system using hashmaps and graph algorithms with O(1) write/delete operations. Project score: 99.4/100.' },
{ date: 'Oct 2020', title: 'IIIT Hyd', description: 'Began formal computer science training and wrote first program (Hello, World!).' },
{ date: 'Aug 2020', title: 'Entrance Results', description: 'JEE Advanced: Rank 5066 / ~100,000; JEE Mains: Rank 575 / ~1,000,000.' }
];
export default function Timeline() {
  return <Time items={items} />;
  // return (
  //   <div style={{
  //   position: "absolute",
  //   top: "50%",
  //   left: "40%",
  //   transform: "translate(-50%, -50%)",
  //   zIndex: 10,
  //   textAlign: "center",
  //   color: "#ffffff",
  //   fontFamily: "'Outfit', sans-serif",
  //   letterSpacing: "-0.02em",
  //   maxWidth: "800px",
  //   width: "min(90%, 800px)",
  //   margin: "0 auto",
  // }}>
  //     <ScrollStack>
  //       <ScrollStackItem>
  //         <h2>Card 1</h2>
  //         <p>This is the first card in the stack</p>
  //       </ScrollStackItem>
  //       <ScrollStackItem>
  //         <h2>Card 2</h2>
  //         <p>This is the second card in the stack</p>
  //       </ScrollStackItem>
  //       <ScrollStackItem>
  //         <h2>Card 3</h2>
  //         <p>This is the third card in the stack</p>
  //       </ScrollStackItem>
  //     </ScrollStack>
  //     </div>
  //   );
}