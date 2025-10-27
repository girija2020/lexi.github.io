// src/index.tsx  (or index.js if you use JS)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Contact from './Contact';
import NavBar from './essentials/NavBar';
import Anime from './Anime';
import Chatbot from './essentials/Chatbot';
import Timeline from './essentials/Timeline';
import Recommend from './Recommend';
import Footer from './essentials/Footer';
import Game from './Game';

// <-- NEW IMPORT
import AuroraBackground from './AuroraBackground';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 1. Global background – appears on every route */}
      <AuroraBackground />

      {/* 2. Navbar & Footer (still global) */}
      <NavBar />
      <Footer />

      {/* 3. Page content */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/time" element={<Timeline />} />
        <Route path="/game" element={<Game />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);