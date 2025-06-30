"use client";
import React from "react";
import { PasswordInput } from "../common/form-field/password-input";
import { TextInput } from "../common/form-field/text-input";
import { Form } from "react-bootstrap";
import { SubmitButton } from "../common/form-field/submit-button";

const LoginForm: React.FC = () => {
  const [password, setPassword] = React.useState("");

  // const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <Form className="login-form">
      <TextInput
        label="E-Posta Adresiniz"
        name="username"
        // error={state?.errors?.username}
        // defaultValue={state.data.username ?? "root"}
      />
      <PasswordInput
        label="Şifreniz"
        name="password"
        defaultValue={password}
        // error={state?.errors?.password}
        // defaultValue={state.data.password ?? "12345aA."}
      />
      <SubmitButton
        title="Giriş Yap"
        icon="sign-in"
        />
    </Form>
  );
};

export default LoginForm;
