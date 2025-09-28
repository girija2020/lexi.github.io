import React from "react";
import karasuno from "./assets/karasuno.jpg";
import ruri from "./assets/ruri.webp";
import iruma from "./assets/iruma.webp";
import spyxfam from "./assets/spyxfamily.jpg";

const Anime = () => {
  return (
    <div>
      <br></br>
      <h1>
        "The future belongs to those who believe in the beauty of their dreams."
        – Shoyo Hinata
      </h1>

      {/* Flex container */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Left Image */}
        <img
          src={karasuno}
          alt="karasuno"
          width={300}
          height={350}
          style={{ marginRight: "20px" }}
        />

        {/* Text beside image */}
        <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
          <strong>Haikyuu!!!</strong> A thrilling sports anime that makes you
          want to put more effort into your dreams. Dedication, passion, and
          hard work are the core of the anime. It's gripping scenes won't let you 
          leave your seat. I kept rooting for the hero (Hinata) who starts from nothing
          to leading his team to victory. I watched a lots of sports anime but no other
          anime made me realise that your time is little and you need to keep grinding to
          move forward. This is my go to anime whenever I lose motivation. I hope you like
          it too!
        </p>
      </div>

      <br></br>

      {/* Second image below */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Left Image */}
        <img
          src={ruri}
          alt="ruri dragon"
          width={300}
          height={350}
          style={{ marginRight: "20px" }}
        />
        {/* Text beside image */}
        <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
          <strong>Ruri Dragon</strong> This is a really new manga that is about a 
          dragon coming of age! The dragon is a half human who has to come to terms about
           being different and embracing her unique self. This is a manga that revolves around human emotions and how some blocks when crossed over give you so much more.
          It makes me feel like a human. That I'm also an insecure and evolving shell of flesh and that I/we need to be brave enough to take the first step.
          <strong> This manga is still not finished</strong>
        </p>
      </div>
      <br></br>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Left Image */}
        <img
          src={iruma}
          alt="iruma"
          width={400}
          height={350}
          style={{ marginRight: "20px" }}
        />

        {/* Text beside image */}
        <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
          <strong>Welcome to demon school iruma-kun</strong> This is a slife of 
          life manga with a variety of characters. It is a manga that makes you wanna know the heroes and the villains alike.
          It is about a push over hero who was sold by his parents to the demon school principal.
           Despite it's dark setting, all, I mean all characters are very interesting with varying motivations.
           This is my comfort manga because of how un-dark it is. Highly recommend for when in stress. <strong> This manga is still not finished</strong>
        </p>
      </div>
      <br></br>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Left Image */}
        <img
          src={spyxfam}
          alt="spy x family"
          width={300}
          height={350}
          style={{ marginRight: "20px" }}
        />

        {/* Text beside image */}
        <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
          <strong>Spy x family</strong> A spy adventure. One is an assassin, one is a telepath and the other is a spy.
           It is a slice of life manga too. If by this time you do not know, I am a slice of life fan. I love Anya. She is the most 
          lovely character ever. She lights up the mood. I def recommend this just because of it's creative concept.
        </p>
      </div>
      <br></br>
      <h5>Other recs/honorable mentions</h5>
      <p>I sold my life for 10000 yen an year, Blue Period, Horimiya, Solo Leveling, Eleceed, 7th Time Loop, Hunter x Hunter, Kokou No Hito</p>
      </div>
  );
};

export default Anime;
