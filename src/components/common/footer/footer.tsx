import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainLogo from "../header/main-logo";
import "./footer.scss";
import { appConfig } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMenuFooter from "./social-menu-footer";
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
          <Col xs={12} md={6} lg={4}>
            <h3>Links</h3>
            <MainMenu className="flex-column footer-menu" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h3>Social</h3>
            <SocialMenuFooter className="flex-column footer-menu footer-social-menu" />
          </Col>
          <Col xs={12} lg>
            <h3>Contact</h3>
            <ContactMenu className="flex-column footer-menu" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
