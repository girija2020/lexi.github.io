import './App.css'
import Aurora from './Aurora';

function App() {


  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen Liquid Ether Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Aurora
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          // autoDemo={true}
          // autoSpeed={1.2}           // ← Increase speed
          // autoIntensity={3.5}       // ← More dynamic movement
          autoResumeDelay={0}       // ← Start immediately
          autoRampDuration={0}      // ← No slow ramp-up
          takeoverDuration={0.1}    // ← Faster takeover
        />
      </div>

      {/* Overlay Text (Centered absolutely) */}
      <div
  style={{
    position: "absolute",
    top: "50%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: "-0.02em",
    maxWidth: "800px",
    width: "min(90%, 800px)",
    margin: "0 auto",
  }}
>
  <div
    style={{
      background: "rgba(0,0,0,0.45)",
      padding: "2rem 3rem",
      borderRadius: "18px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
      display: "inline-block", // shrink-wrap content
      width: "100%",
    }}
  >
    <h1 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "1rem" }}>
      Lakshmi Girija Dhulipati
    </h1>
    <p style={{ fontSize: "2rem", fontWeight: 400, opacity: 0.85, margin: 0 }}>
      Welcome to my website
    </p>
    <br></br>

    <p style={{ fontSize: "1.00rem", fontWeight: 400, opacity: 0.85, margin: 0, textAlign: "left" }}>
      I have built this using Cloud Run, Vite, React, Docker, Express, Node, $10 openAI API credits, REST APIs, Mongo DB Atlas Data API, and a dose of fun. Please feel free to explore !
      <br></br>
      A Guide to what's cool in here
      <br></br>

      1) Know more about my projects - Ask the chatbot at <a href='/chat'>chat</a>!
      <br></br>
      2) See who's recommended me - Checkout <a href='/recommend'>Recommend</a>!
      <br></br>
      3) My professional timeline at <a href='/time'>Timeline</a>
      <br></br>
      4) Snake game at <a href='/game'>Game</a>
      <br></br>
      5) Reach out to me at <a href='/contact'>Contact</a>
      <br></br>
    </p>
  </div>
</div>
    </div>
  );

};

export default App
