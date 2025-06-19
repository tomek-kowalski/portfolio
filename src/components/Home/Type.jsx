import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "WordPress Developer",
          "React/Next.js Developer",
          "PHP Developer",
          "E-commerce Developer",
          "Python Developer",
          "Full Stack Developer",
          "Software Engineer",
          "Web Developer",
          "AI Assistant Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
