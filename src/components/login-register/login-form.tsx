"use client";
import React from "react";
import { PasswordInput } from "../common/form-field/password-input";
import { TextInput } from "../common/form-field/text-input";
import { Form } from "react-bootstrap";
import { SubmitButton } from "../common/form-field/submit-button";

type LoginFormProps = {
  login: Record<string, string>;
};

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [password, setPassword] = React.useState("");

  const { email, password: passwordLabel, loginButton, title } = login;

  // const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <Form className="login-form">
      <h4>{title}</h4>
      <TextInput
        label={email}
        name="email"
        // error={state?.errors?.username}
        // defaultValue={state.data.username ?? "root"}
      />
      <PasswordInput
        label={passwordLabel}
        name="password"
        defaultValue={password}
        // error={state?.errors?.password}
        // defaultValue={state.data.password ?? "12345aA."}
      />
      <SubmitButton title={loginButton} icon="sign-in" />
    </Form>
  );
};

export default LoginForm;
