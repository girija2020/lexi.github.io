import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import NavBar from "./essentials/NavBar.tsx";
import Anime from "./Anime.tsx";
import Chatbot from "./essentials/Chatbot.tsx";
import Timeline from "./essentials/Timeline.tsx";
import Recommend from "./Recommend.tsx";

// import About from "./About.tsx"; // optional
const events = [
  { id: 1, date: "2001", title: "Born" },
  { id: 2, date: "2016", title: "First Code", description: "Wrote"},
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/time" element={<Timeline/>} />
        <Route path="/recommend" element={<Recommend/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
