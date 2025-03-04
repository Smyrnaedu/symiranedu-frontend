import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainLogo from "../common/header/main-logo";
import "./footer.scss";
import { appConfig } from "@/helpers/config";
import MainMenu from "../common/header/main-menu";
import SocialMenu from "../common/socialmenu";
import ContactMenu from "./contact-info";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <MainLogo />
            <p className="mt-3">{appConfig.project?.description}</p>
          </Col>
          <Col xs={6} lg>
            <h3>Links</h3>
            <MainMenu className="flex-column" />
          </Col>
          <Col xs={6} lg>
            <h3>Social</h3>
            <SocialMenu className="flex-column" />
          </Col>
          <Col lg>
            <h3>Contact</h3>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
