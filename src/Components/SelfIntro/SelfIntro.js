import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Selfintro.css"
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineYoutube,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, SQL, Javascript. </b>
              </i>
              <br />
              <br />
              My field of interests include pioneering new  &nbsp;
              <i>
                <b className="purple">Web Technologies  &nbsp;</b>, 
                diving deep into<b className="purple"> Data Analysis</b> and also passionate
                about all things in  &nbsp;<b className="purple">Analysis</b> and <b className="purple">Development</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
             
              &nbsp; like
              
                <b className="purple"> React.js and Next.js</b>
                alongside data analyst tools such as <b className="purple">Python, SQL,</b> and <b className="purple">visualization</b> tools like <b className="purple">Tableau</b> for insightful data-driven decision-making.
            </p>

            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/asif0401"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/pathan-asif-khan-/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://wa.me/9177133236/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineWhatsApp />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/a.s.i.f__k.h.a.n/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
