"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./login-register-style.scss";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import LayoutTextSection from "./layout-text";

type LoginRegisterSectionProps = {
  loginRegisterData: {
    "layout-login-title": string;
    "layout-register-title": string;
    "layout-description-for-login": string;
    "layout-description-for-register": string;
    "login-button": string;
    "register-button": string;
    login: Record<string, string>;
    register: Record<string, string>;
    [key: string]: any;
  };
};

const LoginRegisterSection: React.FC<LoginRegisterSectionProps> = ({
  loginRegisterData,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  
  const login = {
    title: loginRegisterData.login.title,
    email: loginRegisterData.login.email,
    password: loginRegisterData.login.password,
    loginButton: loginRegisterData.login.loginButton,
  };

  const register = loginRegisterData.register;

  // Extract layout and button texts from loginRegisterData
  const layoutLoginTitle = loginRegisterData["layout-login-title"];
  const layoutRegisterTitle = loginRegisterData["layout-register-title"];
  const layoutDescriptionForLogin = loginRegisterData["layout-description-for-login"];
  const layoutDescriptionForRegister = loginRegisterData["layout-description-for-register"];
  const loginButtonText = loginRegisterData["login-button"];
  const registerButtonText = loginRegisterData["register-button"];

  return (
    <section className="container login-register-container">
      <Row className="login-register-section">
        <Col md={6} className="login-section">
          <LoginForm login={login} />
        </Col>
        <Col md={6} className="register-section">
          <RegisterForm register={register} />
        </Col>
        <Col
          md={6}
          className="layout-section"
          style={{
            transform: isLogin ? "translate(100%)" : "none",
            borderRadius: isLogin ? "0 5px 5px 0" : "5px 0 0 5px",
          }}
        >
          <LayoutTextSection
            onSwitch={() => setIsLogin((prev) => !prev)}
            isLogin={isLogin}
            layoutLoginTitle={layoutLoginTitle}
            layoutRegisterTitle={layoutRegisterTitle}
            layoutDescriptionForLogin={layoutDescriptionForLogin}
            layoutDescriptionForRegister={layoutDescriptionForRegister}
            loginButtonText={loginButtonText}
            registerButtonText={registerButtonText}
          />
        </Col>
      </Row>
    </section>
  );
};

export default LoginRegisterSection;
