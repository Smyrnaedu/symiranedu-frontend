import React from "react";
import { Col, Row } from "react-bootstrap";
import "./login-register-style.scss";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import LayoutTextSection from "./layout-text";

const LoginRegisterSection: React.FC = () => {
  return (
    <section className="container login-register-section">
      <Row>
        <Col className="login-section">
          <LoginForm />
        </Col>
        <Col className="register-section">
          <RegisterForm />
        </Col>
        <Col className="layout-text-section">
          <LayoutTextSection />
        </Col>
      </Row>
    </section>
  );
};

export default LoginRegisterSection;
