"use client";
import React from "react";

type RegisterFormProps = {
  register: Record<string, string>;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ register }) => {
  
  const { title, email, password, confirmPassword, registerButton } = register;
  return <div>RegisterForm</div>;
};

export default RegisterForm;
