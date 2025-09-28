import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import NavBar from "./essentials/NavBar.tsx";
import Anime from "./Anime.tsx";
import Chatbot from "./essentials/Chatbot.tsx";

// import About from "./About.tsx"; // optional

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Chatbot at the corner */}
      <Chatbot />
    </BrowserRouter>
  </StrictMode>
);
