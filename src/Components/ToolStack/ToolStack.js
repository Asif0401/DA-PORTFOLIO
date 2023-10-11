import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMsqlServer } from "react-icons/di";
import {
  // SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiTableau,
  SiPowerbi,
  SiApacheairflow,
  SiJupyter,
  SiGooglesheets,
  SiLinux,
  // SiAmazonaws,
  // SiNginx,
  
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglesheets />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default ToolStack;