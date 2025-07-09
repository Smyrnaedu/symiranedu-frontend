"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { PasswordInput } from "../common/form-field/password-input";
import { TextInput } from "../common/form-field/text-input";
import { SubmitButton } from "../common/form-field/submit-button";
import { loginAction } from "@/actions/auth-action";
import { initialState } from "@/helpers/form-validation";
import { useActionState } from "react";
import { Console } from "node:console";

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
  const [state, formAction] = useActionState(loginAction, initialState);

  const [emailValue, setEmailValue] = useState(
    typeof state.data.email === "string" ? state.data.email : "anihalersoy@gmail.com"
  );
  const [passwordValue, setPasswordValue] = useState(
    typeof state.data.password === "string" ? state.data.password : "Aa1234567."
  );

  console.log("STATE",state);
  const {
    email,
    password: passwordLabel,
    loginButton,
    title,
    rememberMe,
    forgotPassword,
  } = login;

  return (
    <Form action={formAction} className="login-form" noValidate>
      <h4>{title}</h4>

      <TextInput
        label={email}
        name="email"
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        error={state?.errors?.email}
      />

      <PasswordInput
        label={passwordLabel}
        name="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        error={state?.errors?.password}
      />

      <SubmitButton title={loginButton} icon="sign-in" />
    </Form>
  );
};

export default LoginForm;
