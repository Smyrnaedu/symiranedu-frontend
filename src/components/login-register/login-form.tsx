"use client";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { PasswordInput } from "../common/form-field/password-input";
import { TextInput } from "../common/form-field/text-input";
import { SubmitButton } from "../common/form-field/submit-button";
import { loginAction } from "@/actions/auth-action";
import { initialState } from "@/helpers/form-validation";
import { useActionState } from "react";

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

  const [emailValue, setEmailValue] = useState("anihalersoy@gmail.com");
  const [passwordValue, setPasswordValue] = useState("Aa1234567.");

  useEffect(() => {
    if (typeof state.data.email === "string") {
      setEmailValue(state.data.email);
    }

    if (typeof state.data.password === "string") {
      setPasswordValue(state.data.password);
    }
  }, [state.data.email, state.data.password]);

  const {
    email,
    password: passwordLabel,
    loginButton,
    title,
  } = login;

  return (
    <Form action={formAction} className="login-form" noValidate>
      <h4>{title}</h4>

      <TextInput
        label={email}
        name="email"
        type="email"
        defaultValue={emailValue}
        error={state?.errors?.email}
      />

      <PasswordInput
        label={passwordLabel}
        name="password"
        defaultValue={passwordValue}
        error={state?.errors?.password}
      />

      <SubmitButton title={loginButton} icon="sign-in" />
    </Form>
  );
};

export default LoginForm;
