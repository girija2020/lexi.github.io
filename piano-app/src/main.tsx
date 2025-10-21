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
import Footer from "./essentials/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />
      <Footer />

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
