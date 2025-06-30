import { Spacer } from "@/components/common/spacer";
import LoginRegisterSection from "@/components/login-register/login-register";
import React from "react";
import data from "@/helpers/data/tr.json";

const LoginPage: React.FC = () => {
  const loginRegisterData = data[0]?.LoginRegister || {};
  console.log("LoginRegister Data:", loginRegisterData);

  
  return (
    <>
      <Spacer />
      <LoginRegisterSection
        {...loginRegisterData}
        layoutLoginTitle={loginRegisterData["layout-login-title"]}
        layoutRegisterTitle={loginRegisterData["layout-register-title"]}
        layoutDescription={loginRegisterData["layout-description"]}
      />
      <Spacer />
    </>
  );
};

export default LoginPage;
