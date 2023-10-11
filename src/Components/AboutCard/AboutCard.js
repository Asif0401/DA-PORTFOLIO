import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Asif Khan </span>
            I am a Computer Science  graduate from <span className="purple"> Lovely Professional University, Punjab, India.</span>
            <br />
            
            <br />Previously, I had the privilege of interning as a Software Development Engineer. This experience honed my proficiency and provided me with valuable insights into the software development lifecycle.<br /> <br />
           <br />
            
            ⚡ I'm enthusiastic about applying this diverse skill set in innovative ways and eager to contribute to collaborative projects. Looking forward to connecting and learning together!
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses Full Stack Development and Data Structures and Algorithms.
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;