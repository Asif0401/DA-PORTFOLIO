import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Graduate",
          "Data Analyst Enthusiast",
          "Web Developement Fanatic",
          "Continuous learning...",

          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;