import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./NavBar.css"; // optional if you prefer a CSS file
import soundA from '../assets/sounds/Piano.pp.A1.wav'
import soundB from '../assets/sounds/Piano.pp.A2.wav'
import soundC from '../assets/sounds/Piano.pp.A3.wav'
import soundD from '../assets/sounds/Piano.pp.A4.wav'
import soundE from '../assets/sounds/Piano.pp.A5.wav'
import soundF from '../assets/sounds/Piano.pp.A6.wav'
import soundG from '../assets/sounds/Piano.pp.A7.wav'
import soundH from '../assets/sounds/Piano.pp.Ab1.wav'
import soundI from '../assets/sounds/Piano.pp.Ab2.wav'
import soundJ from '../assets/sounds/Piano.pp.Ab3.wav'
import soundK from '../assets/sounds/Piano.pp.Ab4.wav'
import soundL from '../assets/sounds/Piano.pp.Ab5.wav'
import soundM from '../assets/sounds/Piano.pp.Ab6.wav'
import soundN from '../assets/sounds/Piano.pp.Ab7.wav'
import soundO from '../assets/sounds/Piano.pp.B0.wav'
import soundP from '../assets/sounds/Piano.pp.B2.wav'
import soundQ from '../assets/sounds/Piano.pp.B3.wav'
import soundR from '../assets/sounds/Piano.pp.B4.wav'
import soundS from '../assets/sounds/Piano.pp.B5.wav'
import soundT from '../assets/sounds/Piano.pp.B6.wav'
import soundU from '../assets/sounds/Piano.pp.B7.wav'
import soundV from '../assets/sounds/Piano.pp.Bb0.wav'
import soundW from '../assets/sounds/Piano.pp.Bb2.wav'
import soundX from '../assets/sounds/Piano.pp.Bb3.wav'
import soundY from '../assets/sounds/Piano.pp.Bb4.wav'
import soundZ from '../assets/sounds/Piano.pp.Bb5.wav'
import soundLogo from '../assets/soundon.jpeg'
import muteLogo from '../assets/OIP.jpeg'

const Navbar = () => {
  const [sound, setSound] = useState(-1)

  const keySounds: Record<string, string> = {
    a: soundA,
    b: soundB,
    c: soundC,
    d: soundD,
    e: soundE,
    f: soundF,
    g: soundG,
    h: soundH,
    i: soundI,
    j: soundJ,
    k: soundK,
    l: soundL,
    m: soundM,
    n: soundN,
    o: soundO,
    p: soundP,
    q: soundQ,
    r: soundR,
    s: soundS,
    t: soundT,
    u: soundU,
    v: soundV,
    w: soundW,
    x: soundX,
    y: soundY,
    z: soundZ
  }


  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
    if (sound == -1) return;

    const key = e.key.toLowerCase();

    if (key in keySounds) {
      const audio = new Audio(keySounds[key]);

      // restart if already playing
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sound]);


  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <button
          onClick={() => setSound((prev) => prev * -1)}
        >
          {sound === 1 ? (
            <img src={soundLogo} alt="Sound on" width={20} height={20} />
          ) : (
            <img src={muteLogo} alt="Sound off" width={20} height={20} />
          )}
        </button>
    </nav>
  );
};

export default Navbar;
