"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./login-register-style.scss";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import LayoutTextSection from "./layout-text";

interface CityOption {
  label: string;
  value: number;
}

interface LoginRegisterSectionProps {
  loginRegisterData: {
    "layout-login-title": string;
    "layout-register-title": string;
    "layout-description-for-login": string;
    "layout-description-for-register": string;
    "login-button": string;
    "register-button": string;
    login: {
      title: string;
      email: string;
      password: string;
      loginButton: string;
    };
    register: {
      title: string;
      name: string;
      surname: string;
      phoneNumber: string;
      familyPhoneNumber: string;
      email: string;
      passwordLabel: string;
      confirmPassword: string;
      registerButton: string;
      gender: {
        title: string;
        genders: Record<string, string>;
      };
      birthDate: string;
      residence: string;
      cityId: string;
      highSchool: string;
    };
  };
  cities: CityOption[]; // ✅ dışarıdan gelen şehir listesi
}

const LoginRegisterSection: React.FC<LoginRegisterSectionProps> = ({
  loginRegisterData,
  cities,
}) => {
  const [isLogin, setIsLogin] = useState(true);

  const login = {
    title: loginRegisterData.login.title,
    email: loginRegisterData.login.email,
    password: loginRegisterData.login.password,
    loginButton: loginRegisterData.login.loginButton,
  };

  const register = {
    title: loginRegisterData.register.title,
    name: loginRegisterData.register.name,
    surname: loginRegisterData.register.surname,
    phoneNumber: loginRegisterData.register.phoneNumber,
    familyPhoneNumber: loginRegisterData.register.familyPhoneNumber,
    email: loginRegisterData.register.email,
    passwordLabel: loginRegisterData.register.passwordLabel,
    confirmPassword: loginRegisterData.register.confirmPassword,
    registerButton: loginRegisterData.register.registerButton,
    gender: {
      title: loginRegisterData.register.gender.title,
      genders: loginRegisterData.register.gender.genders,
    },
    birthDate: loginRegisterData.register.birthDate,
    residence: loginRegisterData.register.residence,
    cityId: loginRegisterData.register.cityId,
    highSchool: loginRegisterData.register.highSchool,
  };

  const layoutLoginTitle = loginRegisterData["layout-login-title"];
  const layoutRegisterTitle = loginRegisterData["layout-register-title"];
  const layoutDescriptionForLogin =
    loginRegisterData["layout-description-for-login"];
  const layoutDescriptionForRegister =
    loginRegisterData["layout-description-for-register"];
  const loginButtonText = loginRegisterData["login-button"];
  const registerButtonText = loginRegisterData["register-button"];

  return (
    <section className="container login-register-container">
      <Row className="login-register-section">
        <Col md={6} className="login-section">
          <LoginForm login={login} />
        </Col>
        <Col md={6} className="register-section">
          <RegisterForm register={register} cities={cities} />
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
