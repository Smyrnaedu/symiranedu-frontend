"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./login-register-style.scss";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import LayoutTextSection from "./layout-text";

type LoginRegisterSectionProps = {
  layoutLoginTitle: string;
  layoutRegisterTitle: string;
  layoutDescription: string;
};

const LoginRegisterSection: React.FC<LoginRegisterSectionProps> = ({ layoutLoginTitle, layoutRegisterTitle, layoutDescription }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="container login-register-container">
      <Row className="login-register-section">
        <Col md={6} className="login-section">
          <LoginForm />
        </Col>
        <Col md={6} className="register-section">
          <RegisterForm />
        </Col>
        <Col md={6} className="layout-section" style={{ transform: isLogin ? "translate(100%)" : "none", borderRadius: isLogin ? "0 5px 5px 0" : "5px 0 0 5px" }}>
          <LayoutTextSection
            onSwitch={() => setIsLogin(prev => !prev)}
            isLogin={isLogin}
            layoutLoginTitle={layoutLoginTitle}
            layoutRegisterTitle={layoutRegisterTitle}
            layoutDescription={layoutDescription}
          />
        </Col>
      </Row>
    </section>
  );
};

export default LoginRegisterSection;
