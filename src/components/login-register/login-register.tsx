"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./login-register-style.scss";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import LayoutTextSection from "./layout-text";
import { getAllCities } from "@/services/cities-service";

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
}

const LoginRegisterSection: React.FC<LoginRegisterSectionProps> = ({
  loginRegisterData,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [cities, setCities] = useState<CityOption[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await getAllCities();
        if (!response.ok) throw new Error("Şehir verisi alınamadı");

        const json = await response.json();
        let citiesList: CityOption[] = [];

        if (Array.isArray(json)) {
          citiesList = json.map((city: any) => ({
            label: city.name,
            value: city.id,
          }));
        } else if (Array.isArray(json.data)) {
          citiesList = json.data.map((city: any) => ({
            label: city.name,
            value: city.id,
          }));
        }

        setCities(citiesList);
      } catch (error) {
        console.error("❌ Client Fetch Error:", error);
      }
    };

    fetchCities();
  }, []);

  const login = loginRegisterData.login;
  const register = loginRegisterData.register;

  return (
    <section className="container login-register-container">
      <Row className="login-register-section">
        <Col md={6} className="login-section">
          <LoginForm login={login} />
        </Col>
        <Col md={6} className="register-section">
          <RegisterForm
            register={register}
            cities={cities}
            onSuccess={() => setIsLogin(true)} // örnek: kayıt sonrası login formuna geçiş
          />
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
            layoutLoginTitle={loginRegisterData["layout-login-title"]}
            layoutRegisterTitle={loginRegisterData["layout-register-title"]}
            layoutDescriptionForLogin={
              loginRegisterData["layout-description-for-login"]
            }
            layoutDescriptionForRegister={
              loginRegisterData["layout-description-for-register"]
            }
            loginButtonText={loginRegisterData["login-button"]}
            registerButtonText={loginRegisterData["register-button"]}
          />
        </Col>
      </Row>
    </section>
  );
};

export default LoginRegisterSection;
