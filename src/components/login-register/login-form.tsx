"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { PasswordInput } from "../common/form-field/password-input";
import { TextInput } from "../common/form-field/text-input";
import { SubmitButton } from "../common/form-field/submit-button";

type LoginFormData = {
  title: string;
  email: string;
  password: string;
  rememberMe?: string;
  forgotPassword?: string;
  loginButton: string;
};

type LoginFormProps = {
  login: LoginFormData;
};

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const {
    email,
    password: passwordLabel,
    loginButton,
    title,
    rememberMe,
    forgotPassword,
  } = login;

  return (
    <Form className="login-form">
      <h4>{title}</h4>

      <TextInput label={email} name="email" type="email" required />

      <PasswordInput
        label={passwordLabel}
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <SubmitButton title={loginButton} icon="sign-in" />
    </Form>
  );
};

export default LoginForm;
